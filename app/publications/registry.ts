import Evolution, { meta as evolutionMeta } from "@/content/publications/evolution-of-cybersecurity.mdx";

export type PublicationMeta = {
  title: string;
  subtitle?: string;
  date: string;
  readTime?: string;
  tags?: string[];
  excerpt?: string;
  heroImage?: string;
};

export type PublicationEntry = {
  slug: string;
  meta: PublicationMeta;
  Component: React.ComponentType;
};

export const publications: PublicationEntry[] = [
  {
    slug: "evolution-of-cybersecurity",
    meta: evolutionMeta,
    Component: Evolution
  }
].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

export function getPublicationBySlug(slug: string) {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return publications.find((p) => p.slug.toLowerCase() === s);
}
