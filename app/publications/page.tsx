import Link from "next/link";
import { publicationsSorted } from "./data";

export default function PublicationsPage() {
  return (
    <main className="container">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Publications
        </h1>
        <p className="mt-3 text-muted">
          Long-form research, analysis, and technical writing from SynAccel.
        </p>
      </header>

      <section className="grid gap-6">
        {publicationsSorted.map((pub) => (
          <article
            key={pub.slug}
            className="card p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{pub.title}</h2>

            <p className="mt-2 text-muted">{pub.description}</p>

            <div className="mt-4 flex items-center justify-between text-sm text-muted">
              <span>{pub.readingTime}</span>
              <span>{pub.date}</span>
            </div>

            <div className="mt-5">
              <Link
                href={`/publications/${pub.slug}`}
                className="btn-primary"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

