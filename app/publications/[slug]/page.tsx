// app/publications/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicationBySlug, publicationsSorted } from "../data";

export async function generateStaticParams() {
  return publicationsSorted.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function ContentBlock({
  block
}: {
  block:
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string };
}) {
  if (block.type === "h2") {
    return <h2 className="mt-10 text-xl md:text-2xl font-semibold">{block.text}</h2>;
  }
  if (block.type === "p") {
    return <p className="mt-4 text-white/80 leading-7">{block.text}</p>;
  }
  if (block.type === "quote") {
    return (
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-white/85 italic leading-7">“{block.text}”</p>
      </div>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-5 list-disc pl-6 space-y-2 text-white/80 leading-7">
        {block.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function PublicationArticlePage({
  params
}: {
  params: { slug: string };
}) {
  const post = getPublicationBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      <article className="mx-auto max-w-3xl px-6 pt-14 pb-20">
        <Link href="/publications" className="text-sm text-white/60 hover:text-white/80 transition">
          ← Back to publications
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="mt-3 text-white/70 leading-7">{post.subtitle}</p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 h-px w-full bg-white/10" />
        </header>

        <section className="mt-8">
          {post.content.map((block, idx) => (
            <ContentBlock key={idx} block={block as any} />
          ))}
        </section>

        <footer className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">About the author</div>
          <div className="mt-2 text-lg font-semibold">Nicholas D’Acri</div>
          <div className="mt-1 text-white/70">
            Founder, SynAccel — independent applied R&D in AI security, cloud automation, and autonomous systems.
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
            >
              Contact
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}

