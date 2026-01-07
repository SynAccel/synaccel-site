import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicationBySlug, publicationsSorted, PublicationBlock } from "../data";

export async function generateStaticParams() {
  return publicationsSorted.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function ContentBlock({ block }: { block: PublicationBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-10 text-xl md:text-2xl font-semibold">{block.text}</h2>;
  }

  if (block.type === "ul") {
    return (
      <ul className="mt-4 list-disc pl-6 space-y-2">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "ol") {
    return (
      <ol className="mt-4 list-decimal pl-6 space-y-2">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="mt-6 border-l-4 border-[var(--border)] pl-4 italic text-muted">
        {block.text}
      </blockquote>
    );
  }

  return <p className="mt-4 leading-relaxed text-[15px] md:text-base">{block.text}</p>;
}

export default function PublicationPage({ params }: { params: { slug: string } }) {
  const pub = getPublicationBySlug(params.slug);
  if (!pub) notFound();

  return (
    <main className="container">
      {/* Framed card like About */}
      <section className="card max-w-5xl mx-auto p-8 md:p-10">
        <div className="mb-8">
          <Link href="/publications" className="text-sm text-muted hover:underline">
            ← Back to Publications
          </Link>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{pub.title}</h1>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>{formatDate(pub.date)}</span>
            <span>{pub.readingTime}</span>
          </div>

          <p className="mt-6 text-muted text-lg">{pub.description}</p>

          <div className="mt-8 border-t border-[var(--border)] opacity-70" />
        </header>

        <article className="max-w-3xl">
          {pub.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </article>
      </section>
    </main>
  );
}
