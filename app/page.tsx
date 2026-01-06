import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/synaccelopen2.png"
          alt="SynAccel AI cyber background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Optional subtle glow */}
      <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        {/* Header */}
        <header className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="SynAccel logo"
            width={52}
            height={52}
            priority
          />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            SynAccel
          </h1>
        </header>

        {/* Mission statement */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          Independent research & development in cybersecurity, cloud automation,
          and AI system resilience.
        </p>

        {/* Focus areas */}
        <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
          <Feature
            title="AI Security & Red Teaming"
            body="Exploring adversarial pressure on modern AI systems."
          />
          <Feature
            title="Cloud & Detection Engineering"
            body="Automated telemetry, detection pipelines, and response logic."
          />
          <Feature
            title="Autonomous Defense Research"
            body="Adaptive, self-healing security models for the future."
          />
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://github.com/SynAccel"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            View GitHub
          </a>
          <a
            href="#research"
            className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Research
          </a>
        </div>

        {/* Research section */}
        <section id="research" className="mt-24">
          <h2 className="text-2xl font-semibold text-white">
            Research & Projects
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Experimental systems, tools, and write-ups focused on real-world
            defensive capability.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Project
              title="SynAccel Sentinel"
              body="Cloud-native detection automation and alert validation."
            />
            <Project
              title="SynAccel Bridge"
              body="Telemetry ingestion and signal analysis experiments."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-sm text-white/50">
          © {new Date().getFullYear()} SynAccel
        </footer>
      </div>
    </main>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-white/70">{body}</div>
    </div>
  );
}

function Project({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-white/70">{body}</div>
      <div className="mt-4 text-xs text-white/40">In development</div>
    </div>
  );
}
