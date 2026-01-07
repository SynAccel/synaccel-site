import Link from "next/link";
import { publicationsSorted } from "./data";

export default function PublicationsPage() {
  return (
    <main className="container">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Publications
        </h1>
        <p className="mt-3 text-muted text-lg">
          Long-form research, analysis, and technical writing from SynAccel.
        </p>
      </header>

      {/* Publications Grid */}
      <section className="grid gap-8 max-w-4xl mx-auto">
        {publicationsSorted.map((pub) => (
          <article
            key={pub.slug}
            className="
              card
              p-8
              flex
              flex-col
              gap-4
              hover:shadow-lg
              transition
            "
          >
            <h2 className="text-2xl font-semibold leading-tight">
              {pub.title}
            </h2>

            <p className="text-muted text-base">
              {pub.description}
            </p>

            <div className="flex items-center justify-between text-sm text-muted pt-2">
              <span>{pub.readingTime}</span>
              <span>{pub.date}</span>
            </div>

            <div className="pt-4">
              <Link
                href={`/publications/${pub.slug}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                Read article
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
