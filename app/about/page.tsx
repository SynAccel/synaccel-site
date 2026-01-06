export default function AboutPage() {
  return (
    <>
      <style>{`
        :root{
          --bg: #070A12;
          --panel: rgba(255,255,255,.04);
          --text: #EAF0FF;
          --muted: rgba(234,240,255,.70);
          --border: rgba(234,240,255,.10);

          --accent: #6EA8FF;
          --accent2:#8BFFE8;

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

        /* background (subtle, premium) */
        .bg{
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(900px 520px at 18% 8%, rgba(110,168,255,.16), transparent 58%),
            radial-gradient(900px 520px at 82% 86%, rgba(139,255,232,.08), transparent 62%),
            linear-gradient(to bottom, rgba(255,255,255,.02), transparent 40%);
        }
        .bg::after{
          content:"";
          position:absolute;
          inset:0;
          opacity:.08;
          background-image:
            linear-gradient(rgba(234,240,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,240,255,.12) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(1000px 520px at 50% 18%, rgba(0,0,0,.95), transparent 72%);
        }

        /* header */
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
        }
        .brand img{
          width: 28px;
          height: 28px;
          object-fit: contain;
          opacity:.95;
        }
        .brand .name{
          font-weight: 750;
          letter-spacing: .2px;
        }
        .links{
          display:flex;
          align-items:center;
          gap: 18px;
          font-size: 14px;
          color: var(--muted);
          flex-wrap: wrap;
          justify-content:center;
        }
        .links a{
          padding: 10px 10px;
          border-radius: 12px;
          transition: background .15s ease, color .15s ease;
        }
        .links a:hover{
          color: var(--text);
          background: rgba(255,255,255,.05);
        }
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
          user-select:none;
          white-space: nowrap;
        }
        .btn:hover{
          transform: translateY(-1px);
          border-color: rgba(234,240,255,.24);
          background: rgba(255,255,255,.06);
        }

        /* page */
        main{ padding: 34px 0 70px; }

        .hero{
          border: 1px solid var(--border);
          border-radius: calc(var(--radius) + 6px);
          background: linear-gradient(to bottom, rgba(255,255,255,.05), rgba(255,255,255,.02));
          box-shadow: var(--shadow);
          overflow:hidden;
          position: relative;
        }
        .hero::before{
          content:"";
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(700px 300px at 20% 20%, rgba(110,168,255,.18), transparent 55%),
            radial-gradient(700px 320px at 85% 70%, rgba(139,255,232,.10), transparent 60%);
          opacity:.85;
          pointer-events:none;
        }
        .heroInner{
          position: relative;
          z-index: 1;
          padding: 40px 26px;
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
          font-size: clamp(38px, 4.6vw, 56px);
          line-height: 1.06;
          letter-spacing: -1px;
        }
        .lede{
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.75;
          max-width: 78ch;
        }

        .sections{
          margin-top: 14px;
          display:grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .panel{
          border: 1px solid rgba(234,240,255,.10);
          border-radius: var(--radius);
          background: var(--panel);
          padding: 18px;
        }
        .panel h2{
          margin:0 0 10px;
          font-size: 16px;
          letter-spacing: -.2px;
        }
        .panel p{
          margin:0;
          color: var(--muted);
          line-height: 1.75;
          font-size: 15px;
        }

        .callout{
          margin-top: 12px;
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .card{
          border: 1px solid rgba(234,240,255,.10);
          border-radius: 16px;
          background: rgba(255,255,255,.03);
          padding: 16px;
        }
        .card strong{
          display:block;
          font-size: 14px;
          margin-bottom: 8px;
          letter-spacing:.1px;
        }
        .card span{
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
          display:block;
        }

        footer{
          margin-top: 18px;
          color: rgba(234,240,255,.55);
          border-top: 1px solid rgba(234,240,255,.08);
          padding: 20px 0 10px;
          background: rgba(0,0,0,.12);
        }
        .foot{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 13px;
        }
        .footLinks{
          display:flex;
          gap:14px;
          flex-wrap:wrap;
        }
        .foot a{ color: rgba(234,240,255,.70); }
        .foot a:hover{ color: var(--text); }

        @media (max-width: 980px){
          .links{ display:none; }
          .callout{ grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="bg" />

      <header>
        <div className="wrap">
          <div className="nav">
            <a className="brand" href="/">
              <img src="/logo.png" alt="SynAccel logo" />
              <span className="name">SynAccel</span>
            </a>

            <nav className="links" aria-label="Primary">
              <a href="/research">Research</a>
              <a href="/projects">Projects</a>
              <a href="/publications">Publications</a>
              <a href="/about">About</a>
            </nav>

            <a className="btn" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div className="heroInner">
            <div className="kicker"><span className="dot" /> About</div>

            <h1>Studying where cybersecurity is going next.</h1>

            <p className="lede">
              SynAccel was created to explore how cybersecurity must evolve as systems themselves change.
              Cloud-native infrastructure, autonomous services, and AI-enabled systems are reshaping attack surfaces,
              trust boundaries, and defensive requirements. This initiative exists to study that transition early—
              while new patterns are still forming.
            </p>

            <div className="sections">
              <div className="panel">
                <h2>Why SynAccel Exists</h2>
                <p>
                  Security models that worked for static environments do not automatically generalize to modern,
                  distributed systems operating at scale. As automation and AI become embedded into infrastructure,
                  defense needs to anticipate emergent behavior, brittle assumptions, and new forms of adversarial pressure.
                  SynAccel focuses on understanding those shifts before they become standardized.
                </p>
              </div>

              <div className="panel">
                <h2>What We Mean by “Looking Ahead”</h2>
                <p>
                  The future of cybersecurity will be shaped less by isolated vulnerabilities and more by system behavior:
                  interactions between humans, automation, policies, and learning-based components. SynAccel asks practical questions—
                  what breaks first, where assumptions fail, and how defenses should adapt when systems are autonomous, adaptive,
                  or opaque by design.
                </p>
              </div>

              <div className="panel">
                <h2>How the Work Is Done</h2>
                <p>
                  Research is grounded in applied exploration: experimental prototypes, adversarial simulations,
                  cloud automation experiments, and behavior analysis under stress. Unexpected outcomes and edge cases are
                  treated as valuable signals. The goal is not marketing certainty—it’s technical clarity.
                </p>
              </div>

              <div className="panel">
                <h2>Independence</h2>
                <p>
                  SynAccel operates independently of vendors, product roadmaps, or consulting obligations.
                  That independence makes it possible to explore uncomfortable findings, publish work-in-progress ideas,
                  and let research direction evolve alongside the systems being studied.
                </p>
              </div>

              <div className="callout">
                <div className="card">
                  <strong>What SynAccel is</strong>
                  <span>
                    A forward-looking security research initiative and experimental platform focused on cloud, AI,
                    and resilient defensive systems.
                  </span>
                </div>

                <div className="card">
                  <strong>What SynAccel is not</strong>
                  <span>
                    A commercial product, a managed service, or a consulting firm.
                    The work is exploratory by design.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="wrap foot">
            <div>© {new Date().getFullYear()} SynAccel. Independent research initiative.</div>
            <div className="footLinks">
              <a href="/projects">Projects</a>
              <a href="/research">Research</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
