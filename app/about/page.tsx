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

          --max: 980px;
          --radius: 18px;
          --shadow: 0 24px 80px rgba(0,0,0,.55);
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

        /* Subtle background (quiet) */
        .bg{
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(900px 520px at 20% 10%, rgba(110,168,255,.14), transparent 58%),
            radial-gradient(900px 520px at 80% 85%, rgba(110,168,255,.06), transparent 62%);
        }
        .bg::after{
          content:"";
          position:absolute;
          inset:0;
          opacity:.07;
          background-image:
            linear-gradient(rgba(234,240,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,240,255,.12) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(1000px 520px at 50% 18%, rgba(0,0,0,.95), transparent 72%);
        }

        /* Header */
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

        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 11px 14px;
          border-radius: 999px;
          border: 1px solid rgba(234,240,255,.14);
          background: rgba(255,255,255,.04);
          color: var(--text);
          font-size: 14px;
          transition: transform .12s ease, border-color .12s ease, background .12s ease;
          white-space: nowrap;
        }
        .btn:hover{
          transform: translateY(-1px);
          border-color: rgba(234,240,255,.24);
          background: rgba(255,255,255,.06);
        }

        /* Page */
        main{ padding: 44px 0 70px; }

        .hero{
          border: 1px solid var(--border);
          border-radius: calc(var(--radius) + 6px);
          background: rgba(255,255,255,.03);
          box-shadow: var(--shadow);
          overflow:hidden;
        }
        .heroInner{
          padding: 46px 26px 34px;
        }

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
          font-size: clamp(40px, 4.8vw, 64px);
          line-height: 1.04;
          letter-spacing: -1px;
        }

        .lede{
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
          max-width: 78ch;
        }

        .principles{
          margin-top: 22px;
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .p{
          border: 1px solid rgba(234,240,255,.10);
          border-radius: 16px;
          background: rgba(0,0,0,.18);
          padding: 14px;
        }
        .p strong{
          display:block;
          font-size: 14px;
          margin-bottom: 8px;
          letter-spacing:.1px;
        }
        .p span{
          display:block;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }

        footer{
          margin-top: 18px;
          padding: 18px 0 0;
          color: rgba(234,240,255,.55);
          font-size: 13px;
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

        @media (max-width: 980px){
          .principles{ grid-template-columns: 1fr; }
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
              <a className="btn" href="/projects">Projects</a>
              <a className="btn" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div className="heroInner">
            <div className="kicker"><span className="dot" /> About</div>

            <h1>Exploring the next era of cybersecurity.</h1>

            <p className="lede">
              SynAccel is an independent research and development initiative built around a simple idea:
              cybersecurity is changing, and defenses must change with it. As cloud-native infrastructure,
              Autonomous services, and Distributed Systems become the default, security will be shaped less by
              isolated vulnerabilities and more by behavior, automation, and emergent failure modes.
              SynAccel exists to study those shifts early—while new attack surfaces are still forming.
            </p>

            <div className="principles">
              <div className="p">
                <strong>Forward-looking</strong>
                <span>We focus on what breaks next, not just what broke last.</span>
              </div>
              <div className="p">
                <strong>Experimental</strong>
                <span>Prototypes and adversarial tests reveal truths that theory alone misses.</span>
              </div>
              <div className="p">
                <strong>Independent</strong>
                <span>No product roadmap or vendor incentives—just research clarity.</span>
              </div>
            </div>

            <footer>
              <div className="foot">
                <div>© {year} SynAccel.</div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="/research">Research</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
