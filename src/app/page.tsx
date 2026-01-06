export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Background video layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/hero-poster.jpg"
        >
          <source src="/media/hero.webm" type="video/webm" />
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        {/* White wash + subtle cyan tint so it doesn't look cheap */}
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-cyan-500/5" />

        {/* Subtle grid overlay (Kamino-ish, not Star Wars assets) */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(2,132,199,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,.35) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Top nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img
            src="/brand/synaccel-logo.png"
            alt="SynAccel"
            className="h-10 w-10 rounded-xl"
          />
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-tight">SynAccel</div>
            <div className="text-xs text-slate-600">
              Independent Security R&amp;D
            </div>
          </div>
        </div>

        <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
          <a className="hover:text-slate-900" href="#research">Research</a>
          <a className="hover:text-slate-900" href="#projects">Projects</a>
          <a className="hover:text-slate-900" href="#methods">Methods</a>
          <a className="hover:text-slate-900" href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white/65 p-8 shadow-sm backdrop-blur-md md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs text-cyan-900">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Applied cybersecurity, cloud-security, and AI-security research
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Advancing the security of autonomous and intelligent systems.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg">
            SynAccel is an independent R&amp;D initiative focused on AI red teaming,
            cloud defense automation, and adversarial system behavior—building and
            evaluating resilient detection and response mechanisms for modern cloud and AI environments.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            >
              View Projects
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Research Areas
            </a>
          </div>
        </div>

        {/* Sections preview */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "AI Red Teaming",
              desc: "Adversarial testing of LLMs/agents, prompt injection, misuse cases, and safety failure modes.",
            },
            {
              title: "Cloud Defense Automation",
              desc: "Detection engineering, validation pipelines, and automated response patterns across cloud stacks.",
            },
            {
              title: "Resilient Systems Research",
              desc: "Adaptive defense models, behavior analysis, and early-stage exploration of emerging attack surfaces.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur-md"
            >
              <div className="text-sm font-semibold">{c.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-700">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-6xl px-6 pb-10 text-sm text-slate-600">
        <div className="flex flex-col gap-2 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} SynAccel</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
