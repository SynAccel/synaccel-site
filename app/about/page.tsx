// app/about/page.tsx
export const metadata = {
  title: "About | SynAccel",
  description: "SynAccel is an independent applied R&D initiative focused on AI security, cloud automation, and resilient systems.",
};

export default function AboutPage() {
  return (
    <main className="wrap">
      <style>{`
        main{ padding: 34px 0 60px; }

        .panel{
          margin-top: 26px;
          border: 1px solid var(--border);
          border-radius: calc(var(--radius) + 6px);
          background: linear-gradient(to bottom, rgba(255,255,255,.05), rgba(255,255,255,.02));
          box-shadow: var(--shadow);
          overflow:hidden;
          position: relative;
        }
        .panel::before{
          content:"";
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(700px 300px at 20% 20%, rgba(110,168,255,.14), transparent 55%),
            radial-gradient(700px 320px at 85% 70%, rgba(139,255,232,.08), transparent 60%);
          opacity:.85;
          pointer-events:none;
        }

        .inner{
          position: relative;
          z-index: 1;
          padding: 34px 26px;
          max-width: 920px;
        }

        .kicker{
          display:inline-flex;
          align-items:center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(234,240,255,.12);
          background: rgba(0,0,0,.20);
          color: rgba(234,240,255,.70);
          font-size: 13px;
          letter-spacing:.2px;
        }
        .dot{
          width:8px;height:8px;border-radius:999px;
          background: var(--accent);
          box-shadow: 0 0 18px rgba(110,168,255,.45);
        }

        h1{
          margin: 14px 0 10px;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.05;
          letter-spacing: -0.6px;
        }
        p{
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.75;
          max-width: 78ch;
        }

        .divider{
          margin: 22px 0;
          height: 1px;
          background: rgba(234,240,255,.10);
        }

        .rows{
          display:grid;
          grid-template-columns: 180px 1fr;
          gap: 14px 18px;
          align-items:start;
        }
        .label{
          font-size: 12px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(234,240,255,.60);
          padding-top: 4px;
        }
        .value{
          color: rgba(234,240,255,.78);
          font-size: 14px;
          line-height: 1.7;
        }

        @media (max-width: 720px){
          .rows{ grid-template-columns: 1fr; }
          .label{ padding-top: 0; }
        }
      `}</style>

      <section className="panel">
        <div className="inner">
          <div className="kicker"><span className="dot" /> About</div>

          <h1>SynAccel</h1>

          <p>
            SynAccel is an independent research and development initiative created to study how cybersecurity must evolve
            as systems themselves change. Cloud-native infrastructure, AI-enabled automation, and distributed architectures
            are reshaping attack surfaces and defensive assumptions. SynAccel exists to examine that shift early—while new
            patterns are still forming.
          </p>

          <div className="divider" />

          <div className="rows">
            <div className="label">Focus</div>
            <div className="value">
              Future-facing security research across cloud environments, AI security, and resilient defensive engineering.
            </div>

            <div className="label">Method</div>
            <div className="value">
              Applied exploration through prototypes, adversarial simulations, and system behavior analysis under stress.
            </div>

            <div className="label">Independence</div>
            <div className="value">
              No product roadmap or vendor obligations—research direction stays driven by technical reality, not marketing.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

