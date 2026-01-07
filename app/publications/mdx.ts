import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PublicationFrontmatter = {
  title: string;
  subtitle?: string;
  date: string;
  readTime?: string;
  tags?: string[];
  excerpt?: string;
  heroImage?: string;
};

export type Publication = {
  slug: string;
  frontmatter: PublicationFrontmatter;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "publications");

function safeReadDir(dir: string) {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

export function getAllPublications(): Publication[] {
  const files = safeReadDir(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const pubs = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      frontmatter: {
        title: String(data.title ?? ""),
        subtitle: data.subtitle ? String(data.subtitle) : undefined,
        date: String(data.date ?? ""),
        readTime: data.readTime ? String(data.readTime) : undefined,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
        heroImage: data.heroImage ? String(data.heroImage) : undefined
      },
      content
    };
  });

  pubs.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
  return pubs;
}

export function getPublicationBySlug(slug: string): Publication | undefined {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return getAllPublications().find((p) => p.slug.toLowerCase() === s);
}
