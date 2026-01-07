import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPublications, getPublicationBySlug } from "../mdx";

export async function generateStaticParams() {
  return getAllPublications().map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

export default function PublicationArticlePage({ params }: { params: { slug: string } }) {
  const post = getPublicationBySlug(params.slug);
  if (!post) return notFound();

  const fm = post.frontmatter;

  return (
    <main className="min-h-[100dvh] bg-[#070A0F] text-white">
      <article className="mx-auto max-w-3xl px-6 pt-14 pb-20">
        <Link href="/publications" className="text-sm text-white/60 hover:text-white/80 transition">
          ← Back to publications
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
            <span>{formatDate(fm.date)}</span>
            {fm.readTime && (
              <>
                <span>•</span>
                <span>{fm.readTime}</span>
              </>
            )}
          </div>

          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            {fm.title}
          </h1>

          {fm.subtitle && <p className="mt-3 text-white/70 leading-7">{fm.subtitle}</p>}

          {fm.tags && fm.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {fm.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 h-px w-full bg-white/10" />
        </header>

        {/* MDX content */}
        <section className="mt-8 text-white/85 leading-7">
          <MDXRemote source={post.content} />
        </section>

        <footer className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">About the author</div>
          <div className="mt-2 text-lg font-semibold">Nicholas D’Acri</div>
          <div className="mt-1 text-white/70">
            Founder, SynAccel — independent applied R&amp;D in AI security, cloud automation, and autonomous systems.
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
