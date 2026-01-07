// app/publications/data.ts

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Publication = {
  slug: string;           // canonical slug (URL-safe)
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;           // YYYY-MM-DD
  readTime: string;
  tags: string[];
  content: ContentBlock[];
};

function normalizeSlug(input: string) {
  // Decode URL encoding, trim, lower-case, and normalize unicode punctuation.
  // This protects you from curly quotes and other “smart” characters.
  const decoded = decodeURIComponent(input ?? "");
  return decoded
    .trim()
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, "-");
}

function slugify(title: string) {
  // URL-safe canonical slug from a title
  return normalizeSlug(title)
    .replace(/[^a-z0-9-]/g, "") // keep only a-z 0-9 -
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * IMPORTANT:
 * Use clean canonical slugs here (lowercase, hyphen-separated).
 * If you’re unsure, you can omit slug and derive it from title,
 * but below we keep it explicit.
 */
export const publications: Publication[] = [
  // EXAMPLE (replace with your real entries)
  // {
  //   slug: "cybersecurity-is-entering-the-next-phase",
  //   title: "Cybersecurity is entering the next phase",
  //   subtitle: "From scripts to autonomous defense loops",
  //   excerpt: "…",
  //   date: "2025-12-10",
  //   readTime: "6 min read",
  //   tags: ["AI security", "Automation"],
  //   content: [
  //     { type: "p", text: "..." },
  //   ]
  // }
];

// Sort newest first
export const publicationsSorted = [...publications].sort(
  (a, b) => (a.date < b.date ? 1 : -1)
);

// Robust lookup: try canonical match + a title-slug fallback
export function getPublicationBySlug(slug: string) {
  const s = normalizeSlug(slug);

  // 1) direct slug match
  let hit = publicationsSorted.find((p) => normalizeSlug(p.slug) === s);
  if (hit) return hit;

  // 2) fallback: slug derived from title (in case your stored slug is weird)
  hit = publicationsSorted.find((p) => slugify(p.title) === s);
  if (hit) return hit;

  // 3) fallback: sometimes people accidentally store encoded slugs
  hit = publicationsSorted.find((p) => normalizeSlug(encodeURIComponent(p.slug)) === s);
  if (hit) return hit;

  return undefined;
}

export { slugify, normalizeSlug };
