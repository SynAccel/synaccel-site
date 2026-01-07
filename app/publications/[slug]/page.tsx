import { notFound } from "next/navigation";
import { getPublicationBySlug, publicationsSorted } from "../data";

export async function generateStaticParams() {
  return publicationsSorted.map((p) => ({
    slug: p.slug
  }));
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function ContentBlock({ block }: { block: any }) {
  if (block.type === "h2") {
    return <h2 className="mt-10 text-xl md:text-2xl font-semibold">{block.text}</h2>;
  }

  if (block.type === "ul") {
    return (
      <ul className="mt-4 list-disc pl-6 space-y-2">
        {block.items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="mt-6 border-l-4 pl-4 italic text-muted">
        {block.text}
      </blockquote>
    );
  }

  return <p className="mt-4 leading-relaxed">{block.text}</p>;
}

export default function PublicationPage({
  params
}: {
  params: { slug: string };
}) {
  const pub = getPublicationBySlug(params.slug);

  if (!pub) notFound();

  return (
    <main className="container max-w-3xl">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold">
          {pub.title}
        </h1>

        <div className="mt-3 text-sm text-muted flex gap-4">
          <span>{formatDate(pub.date)}</span>
          <span>{pub.readingTime}</span>
        </div>

        <p className="mt-5 text-muted">{pub.description}</p>
      </header>

      <article>
        {pub.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </article>
    </main>
  );
}

