// app/publications/page.tsx

import Link from "next/link";
import { publicationsSorted } from "./data";

export const metadata = {
  title: "Publications | SynAccel",
  description: "Applied research notes, technical experiments, and systems analysis from SynAccel."
};

function formatDate(dateStr: string) {
  // dateStr is YYYY-MM-DD
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

export default function PublicationsPage() {
  const featured = publicationsSorted[0];
  const rest = publicationsSorted.slice(1);

  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Publications
          </h1>
          <p className="text-white/70 max-w-2xl">
            Applied research notes, technical experiments, and systems analysis across AI security,
            cloud automation, and autonomous defense.
          </p>
        </div>

        {featured && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_0_80px_rgba(0,170,255,0.06)]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                <span>{formatDate(featured.date)}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
                <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
                  Featured
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                {featured.title}
              </h2>

              {featured.subtitle && (
                <p className="text-white/70">{featured.subtitle}</p>
              )}

              <p className="text-white/70 max-w-3xl">{featured.excerpt}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={`/publications/${featured.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white hover:bg-white/15 transition"
                >
                  Read article →
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white/90">All publications</h3>

          {rest.length === 0 ? (
            <p className="mt-3 text-white/60">
              More posts coming soon. This page will grow as SynAccel publishes additional notes and experiments.
            </p>
          ) : (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/publications/${p.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span>{formatDate(p.date)}</span>
                    <span>•</span>
                    <span>{p.readTime}</span>
                  </div>
                  <div className="mt-2 text-lg font-semibold leading-snug">{p.title}</div>
                  <div className="mt-2 text-sm text-white/70">{p.excerpt}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

