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
        .wrap{ max-width: 1100px; margin: 0 auto; padding: 0 18px; }

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
            radial-gradient(700px 300px at 18% 15%, rgba(110,168,255,.18), transparent 55%),
            radial-gradient(700px 300px at 80% 25%, rgba(110,168,255,.10), transparent 60%);
          pointer-events:none;
          filter: blur(14px);
          opacity: .9;
        }

        .inner{ position: relative; padding: 30px; }
        @media (min-width: 768px){ .inner{ padding: 40px; } }

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
          margin: 18px 0 12px;
          font-size: clamp(36px, 4vw, 56px);
          letter-spacing: -0.02em;
          line-height: 1.05;
        }
        .lead{
          max-width: 70ch;
          color: var(--muted);
          line-height: 1.65;
          margin: 0;
        }

        .divider{
          height: 1px;
          background: var(--border);
          margin: 26px 0;
        }

        .feature{
          border: 1px solid var(--border);
          background: rgba(0,0,0,.22);
          border-radius: calc(var(--radius) + 10px);
          padding: 22px;
        }
        @media (min-width: 768px){ .feature{ padding: 28px; } }

        .meta{
          display:flex;
          gap: 12px;
          align-items:center;
          flex-wrap: wrap;
          font-size: 13px;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .pill{
          border: 1px solid var(--border);
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.03);
        }

        .title{
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
          margin: 0;
        }
        .summary{
          margin: 12px 0 0;
          max-width: 80ch;
          color: var(--muted);
          line-height: 1.6;
        }

        .actions{
          margin-top: 16px;
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,.04);
          text-decoration: none;
          font-size: 14px;
          color: var(--text);
        }
        .btn:hover{ background: rgba(255,255,255,.07); }
        .btnPrimary{
          border-color: rgba(110,168,255,.55);
          background: rgba(110,168,255,.16);
        }
        .btnPrimary:hover{ background: rgba(110,168,255,.22); }
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
                Long-form research analysis and technical writing exploring how security systems evolve
                alongside automation, cloud-native infrastructure, and applied ai.
              </p>

              <div className="divider" />

              {featured && (
                <article className="feature">
                  <div className="meta">
                    <span>{formatDate(featured.date)}</span>
                    {featured.tags?.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2 className="title">{featured.title}</h2>
                  <p className="summary">{featured.summary}</p>

                  <div className="actions">
                    <Link className="btn btnPrimary" href={`/publications/${featured.slug}`}>
                      Read article →
                    </Link>
                  </div>
                </article>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

