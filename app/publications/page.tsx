import Link from "next/link";
import { publicationsSorted } from "./data";

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

export default function PublicationsPage() {
  return (
    <main className="container">
      <section className="card max-w-5xl mx-auto p-8 md:p-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Publications</h1>
          <p className="mt-3 text-muted text-lg">
            Long-form research, analysis, and technical writing from SynAccel.
          </p>
          <div className="mt-6 border-t border-[var(--border)] opacity-70" />
        </header>

        {publicationsSorted.map((pub, idx) => (
          <article key={pub.slug} className="py-7">
            <h2 className="text-xl md:text-2xl font-semibold leading-snug">{pub.title}</h2>

            <p className="mt-3 text-muted max-w-3xl">{pub.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span>{pub.readingTime}</span>
              <span>{formatDate(pub.date)}</span>
            </div>

            <div className="mt-5">
              <Link href={`/publications/${pub.slug}`} className="btn-primary inline-flex items-center gap-2">
                Read article <span aria-hidden>→</span>
              </Link>
            </div>

            {idx !== publicationsSorted.length - 1 && (
              <div className="mt-7 border-t border-[var(--border)] opacity-60" />
            )}
          </article>
        ))}
      </section>
    </main>
  );
}
