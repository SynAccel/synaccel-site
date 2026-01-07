"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const year = new Date().getFullYear();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <>
      <style>{`
        /* NOTE:
          Global theme vars + body styles + .bg are now in app/globals.css
          and the <div class="bg" /> is rendered once in app/layout.tsx
        */

        a{ color:inherit; text-decoration:none; }
        .wrap{ max-width: var(--max); margin:0 auto; padding: 0 18px; }

        /* Header / Nav */
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
          position: relative;
        }
        .brand{
          display:flex;
          align-items:center;
          gap: 10px;
          min-width: 220px;
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

        /* Desktop links */
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

        .navCta{
          display:flex;
          align-items:center;
          gap: 10px;
          justify-content:flex-end;
          min-width: 220px;
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

        /* Mobile menu button (hidden on desktop) */
        .menuBtn{
          display:none;
          padding: 11px 14px;
          border-radius: 999px;
          border: 1px solid rgba(234,240,255,.14);
          background: rgba(255,255,255,.04);
          color: var(--text);
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
        }
        .menuBtn:hover{
          border-color: rgba(234,240,255,.24);
          background: rgba(255,255,255,.06);
        }

        /* Mobile dropdown */
        .menu{
          position:absolute;
          right: 18px;
          top: 64px;
          width: min(320px, calc(100vw - 36px));
          border: 1px solid rgba(234,240,255,.14);
          border-radius: 16px;
          background: rgba(7,10,18,.92);
          backdrop-filter: blur(10px);
          box-shadow: 0 24px 80px rgba(0,0,0,.55);
          overflow:hidden;
        }
        .menu a{
          display:block;
          padding: 12px 14px;
          color: rgba(234,240,255,.85);
          border-top: 1px solid rgba(234,240,255,.08);
        }
        .menu a:first-child{ border-top: none; }
        .menu a:hover{
          background: rgba(255,255,255,.06);
          color: var(--text);
        }
        .menu .row{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 12px 14px;
          border-top: 1px solid rgba(234,240,255,.08);
        }
        .menu .row a{
          border-top: none;
          text-align:center;
          border: 1px solid rgba(234,240,255,.14);
          border-radius: 999px;
          padding: 10px 12px;
          background: rgba(255,255,255,.04);
        }
        .menu .row a:hover{
          background: rgba(255,255,255,.06);
          border-color: rgba(234,240,255,.24);
        }

        /* Hero & rest */
        main{ padding: 34px 0 60px; }
        .hero{
          margin-top: 26px;
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
          display:grid;
          grid-template-columns: 1.35fr .65fr;
          gap: 18px;
          align-items:start;
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
          margin: 14px 0 12px;
          font-size: clamp(40px, 4.8vw, 66px);
          line-height: 1.02;
          letter-spacing: -1px;
        }
        .subtitle{
          margin: 0;
          font-size: 16px;
          line-height: 1.65;
          color: var(--muted);
          max-width: 70ch;
        }
        .heroActions{
          margin-top: 18px;
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items:center;
        }
        .meta{
          margin-top: 18px;
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
          color: rgba(234,240,255,.62);
          font-size: 13px;
        }
        .pill{
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid rgba(234,240,255,.12);
          background: rgba(255,255,255,.03);
        }
        .sidecard{
          border-radius: var(--radius);
          border: 1px solid rgba(234,240,255,.10);
          background: rgba(0,0,0,.18);
          padding: 16px;
        }
        .sidecard h3{
          margin:0 0 10px;
          font-size: 14px;
          letter-spacing:.3px;
          color: rgba(234,240,255,.78);
          font-weight: 700;
          text-transform: uppercase;
        }
        .sidecard p{
          margin:0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }
        .logoWrap{
          margin-top: 16px;
          display:flex;
          justify-content:center;
        }
        .logoWrap img{
          width: 110px;
          height: auto;
          opacity:.95;
          filter: drop-shadow(0 16px 40px rgba(0,0,0,.6));
        }

        .section{ margin-top: 20px; display:grid; gap: 14px; }
        .panel{ border: 1px solid var(--border); border-radius: var(--radius); background: rgba(255,255,255,.03); padding: 20px; }
        .panel h2{ margin: 0 0 10px; font-size: 18px; letter-spacing: -.2px; }
        .grid{ margin-top: 12px; display:grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .item{ border: 1px solid rgba(234,240,255,.10); border-radius: 14px; background: rgba(255,255,255,.03); padding: 14px; }
        .item strong{ display:block; margin-bottom: 6px; font-size: 14px; }
        .item span{ color: var(--muted); font-size: 14px; line-height: 1.55; display:block; }

        .repos{ margin-top: 12px; display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .repo{ border: 1px solid rgba(234,240,255,.10); border-radius: 16px; background: rgba(255,255,255,.03); padding: 14px; transition: transform .12s ease, border-color .12s ease, background .12s ease; }
        .repo:hover{ transform: translateY(-2px); border-color: rgba(110,168,255,.28); background: rgba(255,255,255,.045); }
        .repoTitle{ display:flex; align-items:center; justify-content:space-between; gap: 10px; margin-bottom: 8px; }
        .repoTitle b{ font-size: 14px; }
        .tag{ font-size: 12px; color: rgba(234,240,255,.70); border: 1px solid rgba(234,240,255,.12); padding: 5px 8px; border-radius: 999px; background: rgba(0,0,0,.16); white-space: nowrap; }
        .repo p{ margin:0; color: var(--muted); font-size: 14px; line-height: 1.55; }

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
        .footLinks{ display:flex; gap:14px; flex-wrap:wrap; }
        .foot a{ color: rgba(234,240,255,.70); }
        .foot a:hover{ color: var(--text); }

        @media (max-width: 980px){
          .heroInner{ grid-template-columns: 1fr; }
          .repos{ grid-template-columns: 1fr; }
          .grid{ grid-template-columns: 1fr; }

          /* Hide desktop links & CTA, show mobile menu button */
          .links{ display:none; }
          .navCta{ display:none; }
          .menuBtn{ display:inline-flex; align-items:center; justify-content:center; }
          .brand{ min-width: auto; }
        }
      `}</style>

      <header>
        <div className="wrap">
          <div className="nav" ref={menuRef}>
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

            <div className="navCta">
              <a className="btn" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn primary" href="/contact">
                Contact
              </a>
            </div>

            <button
              className="menuBtn"
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>

            {open && (
              <div className="menu" role="menu" aria-label="Mobile">
                <a role="menuitem" href="/research" onClick={() => setOpen(false)}>
                  Research
                </a>
                <a role="menuitem" href="/projects" onClick={() => setOpen(false)}>
                  Projects
                </a>
                <a role="menuitem" href="/publications" onClick={() => setOpen(false)}>
                  Publications
                </a>
                <a role="menuitem" href="/about" onClick={() => setOpen(false)}>
                  About
                </a>
                <div className="row">
                  <a
                    href="https://github.com/SynAccel"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    GitHub
                  </a>
                  <a href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div className="heroInner">
            <div>
              <div className="kicker">
                <span className="dot" /> Independent R&amp;D • Cybersecurity • Cloud • AI Security
              </div>

              <h1>Protecting Autonomous, AI-Driven, and Distributed Systems.</h1>

              <p className="subtitle">
                SynAccel is an independent research and development initiative focused on cybersecurity, cloud security, and AI security,
                with an emphasis on protecting autonomous, AI-driven, and distributed systems.
              </p>

              <div className="heroActions">
                <a className="btn primary" href="/projects">Explore projects</a>
                <a className="btn" href="/research">Research focus</a>
              </div>

              <div className="meta">
                <span className="pill">AI red teaming</span>
                <span className="pill">Cloud automation</span>
                <span className="pill">Defensive engineering</span>
                <span className="pill">Resilience under adversarial pressure</span>
              </div>
            </div>

            <aside className="sidecard">
              <h3>Mission</h3>
              <p>
                Our work centers on applied research in AI red teaming, cloud automation, and defensive engineering. We investigate how
                modern cloud environments, intelligent infrastructure, and AI-enabled systems behave under adversarial pressure, and
                develop experimental techniques to improve their resilience against emerging threats.
              </p>

              <div style={{ height: 14 }} />

              <p>
                SynAccel’s mission is to bridge cybersecurity, cloud automation, and AI robustness by designing, prototyping, and evaluating
                intelligent defense mechanisms, automated detection pipelines, and adaptive response models for modern cloud and AI environments.
              </p>

              <div className="logoWrap">
                <img src="/logo.png" alt="SynAccel logo mark" />
              </div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="panel">
            <h2>Research Focus Areas</h2>
            <div className="grid">
              <div className="item"><strong>AI Security &amp; Red Teaming</strong><span>AI security, AI red teaming, and adversarial machine learning.</span></div>
              <div className="item"><strong>Cloud Security Engineering</strong><span>Cloud security engineering, automation, and autonomous infrastructure defense.</span></div>
              <div className="item"><strong>Detection Pipelines</strong><span>Automated detection pipelines for cloud and on-prem environments.</span></div>
              <div className="item"><strong>Resilient Defense Models</strong><span>Adaptive, resilient, and self-healing defense models.</span></div>
              <div className="item"><strong>Threat Simulation</strong><span>Threat simulation, system behavior analysis, and experimental red/blue team research.</span></div>
              <div className="item"><strong>Emerging Attack Surfaces</strong><span>Early-stage exploration before threats become widely operationalized.</span></div>
            </div>
          </div>

          <div className="panel">
            <h2>Public Research Repositories</h2>

            <div className="repos">
              <a className="repo" href="https://github.com/SynAccel/SynAccel-Sentinel" target="_blank" rel="noreferrer">
                <div className="repoTitle"><b>SynAccel-Sentinel</b><span className="tag">Cloud detection</span></div>
                <p>Automated cloud-security detection and response framework for adaptive defense across AWS environments.</p>
              </a>

              <a className="repo" href="https://github.com/SynAccel/SynAccel-Bridge" target="_blank" rel="noreferrer">
                <div className="repoTitle"><b>SynAccel-Bridge</b><span className="tag">Event correlation</span></div>
                <p>Cyber-Physical Event Bridge Prototype for telemetry, signals, and alert correlation.</p>
              </a>

              <a className="repo" href="https://github.com/SynAccel/SynAccel-Mirage_v2" target="_blank" rel="noreferrer">
                <div className="repoTitle"><b>SynAccel-Mirage v2</b><span className="tag">Deception</span></div>
                <p>Adaptive cognitive deception for real-time misdirection and adversarial testing.</p>
              </a>
            </div>

            <div style={{ height: 12 }} />
            <a className="btn" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">View all repositories</a>
          </div>
        </section>

        <footer>
          <div className="wrap foot">
            <div>© {year} SynAccel. Independent research initiative.</div>
            <div className="footLinks">
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/research">Research</a>
              <a href="https://github.com/SynAccel" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
