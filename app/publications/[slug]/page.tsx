// app/publications/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicationBySlug, publicationsSorted } from "../data";

export async function generateStaticParams() {
  return publicationsSorted.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type PublicationBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

function ContentBlock({ block }: { block: PublicationBlock }) {
  if (block.type === "h2") return <h2 className="h2">{block.text}</h2>;
  if (block.type === "p") return <p className="p">{block.text}</p>;
  if (block.type === "quote") return <blockquote className="quote">{block.text}</blockquote>;
  if (block.type === "ul")
    return (
      <ul className="ul">
        {block.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    );
  return null;
}

export default function PublicationPage({ params }: { params: { slug: string } }) {
  const pub = getPublicationBySlug(params.slug);
  if (!pub) return notFound();

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
            radial-gradient(700px 300px at 18% 15%, rgba(110,168,255,.18), transparent 55%),
            radial-gradient(700px 300px at 80% 25%, rgba(110,168,255,.10), transparent 60%);
          pointer-events:none;
          filter: blur(14px);
          opacity: .9;
        }

        .inner{ position: relative; padding: 30px; }
        @media (min-width: 768px){ .inner{ padding: 40px; } }

        .top{
          display:flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

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
        }
        .dot{
          width: 8px; height: 8px; border-radius: 999px;
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(110,168,255,.16);
        }

        .back{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,.04);
          color: var(--text);
          text-decoration:none;
          font-size: 14px;
        }
        .back:hover{ background: rgba(255,255,255,.07); }

        h1{
          margin: 18px 0 10px;
          font-size: clamp(30px, 3.2vw, 44px);
          letter-spacing: -0.02em;
          line-height: 1.12;
        }

        .meta{
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items:center;
          color: var(--muted);
          font-size: 13px;
          margin: 10px 0 0;
        }
        .pill{
          border: 1px solid var(--border);
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.03);
        }

        .divider{
          height: 1px;
          background: var(--border);
          margin: 22px 0;
        }

        .content{ max-width: 78ch; }

        .h2{
          margin: 22px 0 10px;
          font-size: 18px;
          font-weight: 600;
        }
        .p{
          margin: 12px 0;
          line-height: 1.75;
          opacity: .92;
        }
        .ul{
          margin: 12px 0 12px 18px;
          line-height: 1.75;
          opacity: .92;
        }
        .quote{
          margin: 16px 0;
          padding: 14px 16px;
          border-left: 3px solid rgba(110,168,255,.55);
          background: rgba(255,255,255,.03);
          border-radius: 10px;
          opacity: .92;
        }
      `}</style>

      <main>
        <div className="wrap">
          <section className="panel">
            <div className="inner">
              <div className="top">
                <div className="badge">
                  <span className="dot" />
                  Publication
                </div>
                <Link className="back" href="/publications">
                  ← Back
                </Link>
              </div>

              <h1>{pub.title}</h1>

              <div className="meta">
                <span>{formatDate(pub.date)}</span>
                {pub.tags?.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="divider" />

              <div className="content">
                {pub.content.map((block, i) => (
                  <ContentBlock key={i} block={block as PublicationBlock} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
