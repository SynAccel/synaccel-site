// app/publications/page.tsx
import Link from "next/link";
import { publicationsSorted } from "./data";

export const metadata = {
  title: "Publications | SynAccel",
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PublicationsPage() {
  const featured = publicationsSorted[0];

  return (
    <>
      <style>{`
        main{ padding: 34px 0 60px; }
        .wrap{ max-width: 980px; margin: 0 auto; padding: 0 18px; }

        .panel{
          margin-top: 26px;
          border: 1px solid var(--border);
          border-radius: calc(var(--radius) + 10px);
          background: linear-gradient(to bottom, rgba(255,255,255,.05), rgba(255,255,255,.02));
          box-shadow: var(--shadow);
          overflow: hidden;
          position: relative;
        }
        .panel::before{
          content:"";
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(700px 300px at 20% 15%, rgba(110,168,255,.18), transparent 55%),
            radial-gradient(700px 300px at 80% 30%, rgba(110,168,255,.10), transparent 60%);
          pointer-events:none;
          filter: blur(12px);
          opacity: .9;
        }

        .inner{ position: relative; padding: 28px; }
        @media (min-width: 768px){ .inner{ padding: 34px; } }

        .badge{
          display:inline-flex;
          align-items:center;
          gap: 10px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,.03);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 14px;
          color: var(--muted);
          letter-spacing: .2px;
        }
        .dot{
          width: 8px; height: 8px; border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(110,168,255,.16);
        }

        h1{
          margin: 16px 0 10px;
          font-size: clamp(34px, 4vw, 52px);
          letter-spacing: -0.02em;
          line-height: 1.06;
        }
        .lead{
          max-width: 74ch;
          color: var(--muted);
          line-height: 1.65;
          margin: 0 0 18px;
        }

        .divider{
          height: 1px;
          background: var(--border);
          margin: 22px 0;
          opacity: .9;
        }

        .card{
          border: 1px solid var(--border);
          background: rgba(0,0,0,.18);
          border-radius: calc(var(--radius) + 8px);
          padding: 18px;
        }
        @media (min-width: 768px){ .card{ padding: 22px; } }

        .meta{
          display:flex;
          gap: 10px;
          align-items:center;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 14px;
          margin-bottom: 10px;
        }
        .pill{
          border: 1px solid var(--border);
          background: rgba(255,255,255,.03);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          color: var(--muted);
        }

        .titleRow{
          display:flex;
          justify-content: space-between;
          gap: 14px;
          align-items: flex-start;
        }
        .pubTitle{
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
          margin: 0;
        }
        .summary{
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.6;
          max-width: 80ch;
        }

        .actions{
          margin-top: 14px;
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,.04);
          color: var(--text);
          text-decoration: none;
          font-size: 14px;
        }
        .btn:hover{ background: rgba(255,255,255,.06); }
        .btnPrimary{
          border-color: rgba(110,168,255,.55);
          background: rgba(110,168,255,.14);
        }
        .btnPrimary:hover{ background: rgba(110,168,255,.18); }

        .empty{
          color: var(--muted);
          padding: 10px 0 0;
        }
      `}</style>

      <main>
        <div className="wrap">
          <section className="panel">
            <div className="inner">
              <div className="badge">
                <span className="dot" />
                Publications
              </div>

              <h1>Publications</h1>
              <p className="lead">
                Long-form writing on security engineering, cloud-native defense, and applied automation.
                For now, this section features a single article.
              </p>

              <div className="divider" />

              {featured ? (
                <article className="card">
                  <div className="meta">
                    <span>{formatDate(featured.date)}</span>
                    {featured.tags?.slice(0, 3).map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="titleRow">
                    <h2 className="pubTitle">{featured.title}</h2>
                  </div>

                  <p className="summary">{featured.summary}</p>

                  <div className="actions">
                    <Link className="btn btnPrimary" href={`/publications/${featured.slug}`}>
                      Read article →
                    </Link>
                    <Link className="btn" href="/contact">
                      Contact
                    </Link>
                  </div>
                </article>
              ) : (
                <p className="empty">No publications yet.</p>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
