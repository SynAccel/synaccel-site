import Link from "next/link";
import { publications } from "./registry";

export const metadata = {
  title: "Publications | SynAccel",
  description: "Applied research notes, technical experiments, and systems analysis from SynAccel."
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

export default function PublicationsPage() {
  const featured = publications[0];
  const rest = publications.slice(1);

  return (
    <main className="min-h-[100dvh] text-white">
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Publications</h1>
          <p className="text-[color:var(--muted)] max-w-2xl">
            Applied research notes, technical experiments, and systems analysis across AI security,
            cloud automation, and autonomous defense.
          </p>
        </div>

        {featured && (
          <div
            className="mt-10 rounded-2xl border p-6 md:p-8"
            style={{
              borderColor: "var(--border)",
              background: "rgba(255,255,255,.03)",
              boxShadow: "var(--shadow)"
            }}
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-[color:var(--muted)]">
              <span>{formatDate(featured.meta.date)}</span>
              {featured.meta.readTime && (
                <>
                  <span>•</span>
                  <span>{featured.meta.readTime}</span>
                </>
              )}
              <span
                className="ml-2 rounded-full px-2 py-1 text-[11px]"
                style={{
                  border: "1px solid rgba(234,240,255,.12)",
                  background: "rgba(255,255,255,.03)",
                  color: "rgba(234,240,255,.75)"
                }}
              >
                Featured
              </span>
            </div>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight">
              {featured.meta.title}
            </h2>

            {featured.meta.subtitle && (
              <p className="mt-3 text-[color:var(--muted)]">{featured.meta.subtitle}</p>
            )}

            {featured.meta.excerpt && (
              <p className="mt-3 text-[color:var(--muted)] max-w-3xl">{featured.meta.excerpt}</p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {(featured.meta.tags ?? []).map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1 text-xs"
                  style={{
                    border: "1px solid rgba(234,240,255,.12)",
                    background: "rgba(255,255,255,.03)",
                    color: "rgba(234,240,255,.75)"
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href={`/publications/${featured.slug}`}
                className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm transition"
                style={{
                  border: "1px solid rgba(110,168,255,.40)",
                  background: "linear-gradient(90deg, rgba(110,168,255,.18), rgba(139,255,232,.10))"
                }}
              >
                Read article →
              </Link>
            </div>
          </div>
        )}

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white/90">All publications</h3>

          {rest.length === 0 ? (
            <p className="mt-3 text-[color:var(--muted)]">More posts coming soon.</p>
          ) : (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/publications/${p.slug}`}
                  className="rounded-2xl p-5 transition"
                  style={{
                    border: "1px solid rgba(234,240,255,.10)",
                    background: "rgba(255,255,255,.03)"
                  }}
                >
                  <div className="flex items-center gap-2 text-xs text-[color:var(--muted)]">
                    <span>{formatDate(p.meta.date)}</span>
                    {p.meta.readTime && (
                      <>
                        <span>•</span>
                        <span>{p.meta.readTime}</span>
                      </>
                    )}
                  </div>

                  <div className="mt-2 text-lg font-semibold leading-snug">{p.meta.title}</div>

                  {p.meta.excerpt && (
                    <div className="mt-2 text-sm text-[color:var(--muted)]">{p.meta.excerpt}</div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}





