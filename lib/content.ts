import { readFile, writeFile } from "fs/promises";
import path from "path";

export type ContentOverrides = {
  sv: Record<string, string>;
  en: Record<string, string>;
};

const DATA_PATH = path.join(process.cwd(), "data", "content.json");

export async function getContent(): Promise<ContentOverrides> {
  const data = await readFile(DATA_PATH, "utf-8");
  return JSON.parse(data);
}

export async function saveContent(content: ContentOverrides): Promise<void> {
  await writeFile(DATA_PATH, JSON.stringify(content, null, 2), "utf-8");
}
