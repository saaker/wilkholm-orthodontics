import { NextRequest } from "next/server";
import fs from "fs/promises";
import path from "path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg"]);
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

function isAuth(req: NextRequest): boolean {
  const h = req.headers.get("authorization");
  return !!h && h === `Bearer ${process.env.ADMIN_SECRET}`;
}

/** GET /api/images  →  { folders: string[] }
 *  GET /api/images?folder=before-after  →  { images: string[] }
 */
export async function GET(req: NextRequest) {
  const folder = req.nextUrl.searchParams.get("folder");

  if (!folder) {
    // List top-level folders
    const entries = await fs.readdir(IMAGES_DIR, { withFileTypes: true });
    const folders = entries.filter((e) => e.isDirectory()).map((e) => e.name);
    return Response.json({ folders });
  }

  // Sanitize folder name — only allow simple names (no slashes, dots, etc.)
  if (!/^[a-zA-Z0-9_-]+$/.test(folder)) {
    return Response.json({ error: "Invalid folder name" }, { status: 400 });
  }

  const folderPath = path.join(IMAGES_DIR, folder);
  try {
    const entries = await fs.readdir(folderPath, { withFileTypes: true });
    const images = entries
      .filter(
        (e) =>
          e.isFile() &&
          ALLOWED_EXTENSIONS.has(path.extname(e.name).toLowerCase()),
      )
      .map((e) => e.name);
    return Response.json({ images });
  } catch {
    return Response.json({ images: [] });
  }
}

/** POST /api/images  →  upload file(s) to a folder */
export async function POST(req: NextRequest) {
  if (!isAuth(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const folder = formData.get("folder") as string | null;
  if (!folder || !/^[a-zA-Z0-9_-]+$/.test(folder)) {
    return Response.json({ error: "Invalid folder name" }, { status: 400 });
  }

  const folderPath = path.join(IMAGES_DIR, folder);
  await fs.mkdir(folderPath, { recursive: true });

  const files = formData.getAll("files") as File[];
  if (files.length === 0) {
    return Response.json({ error: "No files provided" }, { status: 400 });
  }

  const uploaded: string[] = [];
  for (const file of files) {
    if (!(file instanceof File)) continue;
    const ext = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) continue;
    if (file.size > MAX_FILE_SIZE) continue;

    // Sanitize filename — keep alphanumeric, dashes, underscores, dots
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(folderPath, safeName), buffer);
    uploaded.push(safeName);
  }

  return Response.json({ uploaded });
}

/** DELETE /api/images?folder=x&file=y  →  delete a single image */
export async function DELETE(req: NextRequest) {
  if (!isAuth(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const folder = req.nextUrl.searchParams.get("folder");
  const file = req.nextUrl.searchParams.get("file");

  if (!folder || !/^[a-zA-Z0-9_-]+$/.test(folder)) {
    return Response.json({ error: "Invalid folder name" }, { status: 400 });
  }
  if (!file || !/^[a-zA-Z0-9._-]+$/.test(file)) {
    return Response.json({ error: "Invalid file name" }, { status: 400 });
  }

  const filePath = path.join(IMAGES_DIR, folder, file);
  try {
    await fs.unlink(filePath);
    return Response.json({ deleted: file });
  } catch {
    return Response.json({ error: "File not found" }, { status: 404 });
  }
}
