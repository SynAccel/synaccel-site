export const metadata = {
  title: "About | SynAccel",
  description:
    "SynAccel explores how cybersecurity must evolve as cloud-native, autonomous, and AI-enabled systems change.",
};

export default function AboutPage() {
  return (
    <main className="wrap">
      <style>{`
        :root{
          --bg: #070A12;
          --panel: rgba(255,255,255,.04);
          --text: #EAF0FF;
          --muted: rgba(234,240,255,.70);
          --border: rgba(234,240,255,.10);

          --accent: #6EA8FF;
          --accent2:#8BFFE8;

          --max: 1120px;
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

        /* Background */
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
          opacity:.09;
          background-image:
            linear-gradient(rgba(234,240,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,240,255,.12) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(1000px 520px at 50% 18%, rgba(0,0,0,.95), transparent 72%);
        }

        /* Minimal header row (so About feels different than home) */
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
          min-width: 200px;
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
        .navLinks{
          display:flex;
          align-items:center;
          gap: 18px;
          font-size: 14px;
          color: var(--muted);
          flex-wrap: wrap;
          justify-content:center;
        }
        .navLinks a{
          padding: 10px 10px;
          border-radius: 12px;
          transition: background .15s ease, color .15s ease;
        }
        .navLinks a:hover{
          color: var(--text);
          background: rgba(255,255,255,.05);
        }
        .navCta{
          display:flex;
          align-items:center;
          gap: 10px;
          justify-content:flex-end;
          min-width: 200px;
        }
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap: 10px;
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
        .btn.primary{
          border-color: rgba(110,168,255,.40);
          background: linear-gradient(90deg, rgba(110,168,255,.18), rgba(139,255,232,.10));
        }

        /* About page layout */
        .page{
          padding: 34px 0 70px;
        }
        .hero{
          margin-top: 20px;
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
          padding: 42px 26px;
          max-width: 880px;
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
          margin: 16px 0 10px;
          font-size: clamp(38px, 4.4vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.8px;
        }
        .lead{
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.75;
          max-width: 80ch;
        }

        .content{
          margin-top: 18px;
          display:grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        .panel{
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--panel);
          padding: 20px;
          max-width: 880px;
        }
        .panel h2{
          margin: 0 0 10px;
          font-size: 16px;
          letter-spacing: -.1px;
        }
        .panel p{
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }
        .panel p + p{ margin-top: 12px; }

        .bullets{
          margin: 10px 0 0;
          padding-left: 18px;
          color: var(--muted);
          line-height: 1.8;
          font-size: 15px;
        }

        footer{
          margin-top: 26px;
          padding: 22px 0 36px;
          color: rgba(234,240,255,.55);
          border-top: 1px solid rgba(234,240,255,.08);
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
          .navLinks{ display:none; }
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

            <nav className="navLinks" aria-label="Primary">
              <a href="/research">Research</a>
              <a href="/projects">Projects</a>
              <a href="/publications">Publications</a>
              <a href="/about">About</a>
            </nav>

            <div className="navCta">
              <a className="btn" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn primary" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </header>

      <div className="page">
        <section className="hero">
          <div className="heroInner">
            <div className="kicker"><span className="dot" /> About</div>
            <h1>Studying the future of cybersecurity.</h1>
            <p className="lead">
              SynAccel was created to explore how cybersecurity must evolve as cloud-native infrastructure,
              autonomous services, and AI-enabled systems reshape what “security” even means.
            </p>
          </div>
        </section>

        <div className="content">
          <section className="panel">
            <h2>Why SynAccel Exists</h2>
            <p>
              Modern security models were largely designed for static infrastructure, predictable boundaries,
              and human-centered decision-making. Those assumptions are increasingly misaligned with how systems
              actually operate today.
            </p>
            <p>
              SynAccel exists to study this transition early — to understand how attack surfaces and failure modes
              change when systems become distributed, automated, and capable of making decisions at scale.
            </p>
          </section>

          <section className="panel">
            <h2>What We’re Trying to Understand</h2>
            <p>
              In the coming years, security challenges will be shaped less by isolated vulnerabilities and more by
              emergent system behavior, automated decision-making, and shifting trust boundaries.
            </p>
            <ul className="bullets">
              <li>Where do defensive assumptions fail first as automation increases?</li>
              <li>How do distributed systems behave under adversarial pressure and cascading faults?</li>
              <li>How should detection and response adapt when systems are autonomous or opaque by design?</li>
              <liWhat the user wants: About page in Next.js. They asked “what is the coding inside page.tsx” and want single block; prior response gave full file. Now provide corrected (note typo in li tag seen). Need to fix that and provide final about page.tsx code. Keep consistent with capitalization preference: domain terms capitalized in title only; body lower. Provide single code block only.
::contentReference[oaicite:0]{index=0}
