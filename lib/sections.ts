/* Server-only file I/O for sections data */
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { DEFAULT_SECTIONS, mergeSections } from "./sectionsDefaults";

// Re-export types for convenience
export type {
  SectionsData,
  ServiceItem,
  AlignerItem,
  AdvantageItem,
  ProcessItem,
  DMItem,
  FAQItem,
  MythItem,
  NewsItem,
} from "./sectionsDefaults";

export { DEFAULT_SECTIONS } from "./sectionsDefaults";

import type { SectionsData } from "./sectionsDefaults";

const DATA_PATH = path.join(process.cwd(), "data", "sections.json");

export async function getSections(): Promise<SectionsData> {
  try {
    const data = await readFile(DATA_PATH, "utf-8");
    const saved = JSON.parse(data) as Partial<SectionsData>;
    return mergeSections(saved);
  } catch {
    return DEFAULT_SECTIONS;
  }
}

export async function saveSections(data: SectionsData): Promise<void> {
  await writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}
