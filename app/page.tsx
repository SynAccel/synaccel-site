<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SynAccel</title>
  <meta name="description" content="Independent R&D initiative focused on cybersecurity, cloud security, and AI security for autonomous, AI-driven, and distributed systems." />

  <style>
    :root{
      /* Premium futuristic (restrained) */
      --bg: #070A12;
      --panel: rgba(255,255,255,.04);
      --panel2: rgba(255,255,255,.06);
      --text: #EAF0FF;
      --muted: rgba(234,240,255,.70);
      --border: rgba(234,240,255,.10);

      --accent: #6EA8FF;     /* electric blue */
      --accent2:#8BFFE8;     /* mint highlight */

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

    /* Background: solid + subtle glow + faint grid (not “crypto landing page”) */
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
    .nav-cta{
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

    /* Hero */
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
    .hero-inner{
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
    .hero-actions{
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
    .sidecard .logo{
      margin-top: 16px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding: 18px 0 6px;
    }
    .sidecard .logo img{
      width: 110px;
      height: auto;
      opacity:.95;
      filter: drop-shadow(0 16px 40px rgba(0,0,0,.6));
    }

    /* Sections */
    .section{
      margin-top: 20px;
      display:grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .panel{
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--panel);
      padding: 20px;
    }
    .panel h2{
      margin: 0 0 10px;
      font-size: 18px;
      letter-spacing: -.2px;
    }
    .panel p{
      margin:0;
      color: var(--muted);
      line-height: 1.75;
      font-size: 15px;
    }

    /* Focus areas grid */
    .grid{
      margin-top: 12px;
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .item{
      border: 1px solid rgba(234,240,255,.10);
      border-radius: 14px;
      background: rgba(255,255,255,.03);
      padding: 14px;
    }
    .item strong{
      display:block;
      margin-bottom: 6px;
      font-size: 14px;
      letter-spacing:.1px;
    }
    .item span{
      color: var(--muted);
      font-size: 14px;
      line-height: 1.55;
      display:block;
    }

    /* Repo cards */
    .repos{
      margin-top: 12px;
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .repo{
      border: 1px solid rgba(234,240,255,.10);
      border-radius: 16px;
      background: rgba(255,255,255,.03);
      padding: 14px;
      transition: transform .12s ease, border-color .12s ease, background .12s ease;
    }
    .repo:hover{
      transform: translateY(-2px);
      border-color: rgba(110,168,255,.28);
      background: rgba(255,255,255,.045);
    }
    .repo .title{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: 10px;
      margin-bottom: 8px;
    }
    .repo .title b{
      font-size: 14px;
      letter-spacing:.1px;
    }
    .tag{
      font-size: 12px;
      color: rgba(234,240,255,.70);
      border: 1px solid rgba(234,240,255,.12);
      padding: 5px 8px;
      border-radius: 999px;
      background: rgba(0,0,0,.16);
      white-space: nowrap;
    }
    .repo p{
      margin:0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.55;
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
    .foot a{ color: rgba(234,240,255,.70); }
    .foot a:hover{ color: var(--text); }

    @media (max-width: 980px){
      .hero-inner{ grid-template-columns: 1fr; }
      .nav-cta{ min-width: auto; }
      .repos{ grid-template-columns: 1fr; }
      .grid{ grid-template-columns: 1fr; }
      .links{ display:none; } /* keep it clean on mobile; add a burger later if you want */
    }
  </style>
</head>

<body>
  <div class="bg"></div>

  <header>
    <div class="wrap">
      <div class="nav">
        <a class="brand" href="/">
          <img src="/logo.png" alt="SynAccel logo" />
          <span class="name">SynAccel</span>
        </a>

        <!-- Ready for pages (we’ll create these next) -->
        <nav class="links" aria-label="Primary">
          <a href="/research.html">Research</a>
          <a href="/projects.html">Projects</a>
          <a href="/publications.html">Publications</a>
          <a href="/about.html">About</a>
        </nav>

        <div class="nav-cta">
          <a class="btn" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">GitHub</a>
          <a class="btn primary" href="/contact.html">Contact</a>
        </div>
      </div>
    </div>
  </header>

  <main class="wrap">
    <section class="hero">
      <div class="hero-inner">
        <div>
          <div class="kicker"><span class="dot"></span> Independent R&amp;D • Cybersecurity • Cloud • AI Security</div>

          <h1>Protecting autonomous, AI-driven, and distributed systems.</h1>

          <p class="subtitle">
            SynAccel is an independent research and development initiative focused on cybersecurity, cloud security, and AI security, with an emphasis on protecting autonomous, AI-driven, and distributed systems.
          </p>

          <div class="hero-actions">
            <a class="btn primary" href="/projects.html">Explore projects</a>
            <a class="btn" href="/research.html">Research focus</a>
          </div>

          <div class="meta">
            <span class="pill">AI red teaming</span>
            <span class="pill">Cloud automation</span>
            <span class="pill">Defensive engineering</span>
            <span class="pill">Resilience under adversarial pressure</span>
          </div>
        </div>

        <aside class="sidecard">
          <h3>Mission</h3>
          <p>
            Our work centers on applied research in AI red teaming, cloud automation, and defensive engineering. We investigate how modern cloud environments, intelligent infrastructure, and AI-enabled systems behave under adversarial pressure, and develop experimental techniques to improve their resilience against emerging threats.
          </p>

          <div style="height:14px;"></div>

          <p>
            SynAccel’s mission is to bridge cybersecurity, cloud automation, and AI robustness by designing, prototyping, and evaluating intelligent defense mechanisms, automated detection pipelines, and adaptive response models for modern cloud and AI environments. A core focus of this work is early-stage exploration of emerging attack surfaces before they become widely operationalized.
          </p>

          <div class="logo">
            <img src="/logo.png" alt="SynAccel logo mark" />
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="panel">
        <h2>Research Focus Areas</h2>

        <div class="grid">
          <div class="item">
            <strong>AI Security &amp; Red Teaming</strong>
            <span>AI security, AI red teaming, and adversarial machine learning.</span>
          </div>

          <div class="item">
            <strong>Cloud Security Engineering</strong>
            <span>Cloud security engineering, automation, and autonomous infrastructure defense.</span>
          </div>

          <div class="item">
            <strong>Detection Pipelines</strong>
            <span>Automated detection pipelines for cloud and on-prem environments.</span>
          </div>

          <div class="item">
            <strong>Resilient Defense Models</strong>
            <span>Adaptive, resilient, and self-healing defense models.</span>
          </div>

          <div class="item">
            <strong>Threat Simulation</strong>
            <span>Threat simulation, system behavior analysis, and experimental red/blue team research.</span>
          </div>

          <div class="item">
            <strong>Emerging Attack Surfaces</strong>
            <span>Early-stage exploration before threats become widely operationalized.</span>
          </div>
        </div>
      </div>

      <div class="panel">
        <h2>Public Research Repositories</h2>

        <div class="repos">
          <a class="repo" href="https://github.com/SynAccel/SynAccel-Sentinel" target="_blank" rel="noreferrer">
            <div class="title">
              <b>SynAccel-Sentinel</b>
              <span class="tag">Cloud detection</span>
            </div>
            <p>Automated cloud-security detection and response framework for adaptive defense across AWS environments.</p>
          </a>

          <a class="repo" href="https://github.com/SynAccel/SynAccel-Bridge" target="_blank" rel="noreferrer">
            <div class="title">
              <b>SynAccel-Bridge</b>
              <span class="tag">Event correlation</span>
            </div>
            <p>Cyber-Physical Event Bridge Prototype for telemetry, signals, and alert correlation.</p>
          </a>

          <a class="repo" href="https://github.com/SynAccel/SynAccel-Mirage_v2" target="_blank" rel="noreferrer">
            <div class="title">
              <b>SynAccel-Mirage v2</b>
              <span class="tag">Deception</span>
            </div>
            <p>Adaptive cognitive deception for real-time misdirection and adversarial testing.</p>
          </a>
        </div>

        <div style="height:12px;"></div>

        <a class="btn" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">View all repositories</a>
      </div>
    </section>

    <footer>
      <div class="wrap foot">
        <div>© <span id="y"></span> SynAccel. Independent research initiative.</div>
        <div style="display:flex; gap:14px; flex-wrap:wrap;">
          <a href="/about.html">About</a>
          <a href="/projects.html">Projects</a>
          <a href="/research.html">Research</a>
          <a href="https://github.com/SynAccel" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  </main>

  <script>
    document.getElementById("y").textContent = new Date().getFullYear();
  </script>
</body>
</html>

