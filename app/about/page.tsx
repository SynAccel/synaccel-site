export default function AboutPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        :root{
          --bg: #070A12;
          --text: #EAF0FF;
          --muted: rgba(234,240,255,.70);
          --border: rgba(234,240,255,.10);
          --accent: #6EA8FF;

          --max: 880px;
          --radius: 18px;
          --shadow: 0 24px 90px rgba(0,0,0,.55);
          --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
        }

        *{ box-sizing:border-box; }
        html,body{ height:100%; }
        body{
          margin:0;
          font-family: var(--font);
          color: var(--text);
          background: var(--bg);
          overflow-x:hidden;
        }
        a{ color:inherit; text-decoration:none; }
        .wrap{ max-width: var(--max); margin:0 auto; padding: 0 18px; }

        /* Quiet background: single glow, no grid */
        .bg{
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(900px 520px at 20% 10%, rgba(110,168,255,.14), transparent 60%),
            radial-gradient(900px 520px at 80% 85%, rgba(110,168,255,.06), transparent 62%);
        }

        header{
          position: sticky;
          top:0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: rgba(7,10,18,.72);
          border-bottom: 1px solid rgba(234,240,255,.08);
        }
        .nav{
          height: 70px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 14px;
        }
        .brand{
          display:flex;
          align-items:center;
          gap: 10px;
          font-weight: 750;
          letter-spacing:.2px;
        }
        .brand img{ width: 28px; height: 28px; object-fit: contain; opacity:.95; }
        .navRight{ display:flex; gap: 10px; align-items:center; }
        .link{
          font-size: 14px;
          color: rgba(234,240,255,.78);
          padding: 10px 10px;
          border-radius: 12px;
        }
        .link:hover{ color: var(--text); background: rgba(255,255,255,.05); }

        main{ padding: 54px 0 70px; }

        .card{
          border: 1px solid var(--border);
          border-radius: calc(var(--radius) + 6px);
          background: rgba(255,255,255,.03);
          box-shadow: var(--shadow);
          overflow:hidden;
        }
        .inner{ padding: 46px 26px 30px; }

        .kicker{
          display:inline-flex;
          align-items:center;
          gap: 10px;
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
          margin: 14px 0 12px;
          font-size: clamp(44px, 5vw, 66px);
          line-height: 1.03;
          letter-spacing: -1px;
        }
        .lede{
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.85;
          max-width: 74ch;
        }

        .rule{ height: 1px; background: rgba(234,240,255,.10); margin: 22px 0; }

        /* Editorial “principles” list (not cards) */
        .list{
          display:grid;
          gap: 14px;
          max-width: 74ch;
        }
        .row{
          display:grid;
          grid-template-columns: 160px 1fr;
          gap: 16px;
          align-items:start;
        }
        .label{
          color: rgba(234,240,255,.78);
          font-size: 13px;
          letter-spacing:.2px;
          text-transform: uppercase;
          padding-top: 3px;
        }
        .value{
          color: var(--muted);
          font-size: 15px;
          line-height: 1.75;
        }

        footer{
          margin-top: 18px;
          color: rgba(234,240,255,.55);
          font-size: 13px;
          padding: 18px 0 0;
        }
        .foot{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(234,240,255,.08);
          padding-top: 18px;
        }
        .foot a{ color: rgba(234,240,255,.70); }
        .foot a:hover{ color: var(--text); }

        @media (max-width: 720px){
          .row{ grid-template-columns: 1fr; gap: 6px; }
          .label{ text-transform:none; }
        }
      `}</style>

      <div className="bg" />

      <header>
        <div className="wrap">
          <div className="nav">
            <a className="brand" href="/">
              <img src="/logo.png" alt="SynAccel logo" />
              <span>SynAccel</span>
            </a>
            <div className="navRight">
              <a className="link" href="/projects">Projects</a>
              <a className="link" href="/research">Research</a>
              <a className="link" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="card">
          <div className="inner">
            <div className="kicker"><span className="dot" /> About</div>

            

            <p className="lede">
              SynAccel is an independent research and development initiative created to study how cybersecurity must evolve
              as systems themselves change. Cloud-native infrastructure, AI-enabled automation, and distributed architectures
              are reshaping attack surfaces and defensive assumptions. SynAccel exists to examine that shift early—while new
              patterns are still forming.
            </p>

            <div className="rule" />

            <div className="list">
              <div className="row">
                <div className="label">Focus</div>
                <div className="value">
                  Future-facing security research across cloud environments, AI security, and resilient defensive engineering.
                </div>
              </div>

              <div className="row">
                <div className="label">Method</div>
                <div className="value">
                  Applied exploration through prototypes, adversarial simulations, and system behavior analysis under stress.
                </div>
              </div>

              <div className="row">
                <div className="label">Independence</div>
                <div className="value">
                  No product roadmap or vendor obligations—research direction stays driven by technical reality, not marketing.
                </div>
              </div>
            </div>

            <footer>
              <div className="foot">
                <div>© {year} SynAccel.</div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="/contact">Contact</a>
                  <a href="/publications">Publications</a>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
