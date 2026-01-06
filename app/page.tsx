export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-center px-6">
      {/* Hero */}
      <section className="max-w-5xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Syn<span className="text-cyan-500">Accel</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-600">
          Securing the future of autonomous, AI-driven, and distributed systems.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <button className="px-6 py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition">
            Explore Research
          </button>

          <button className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 hover:border-neutral-500 transition">
            View Projects
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-6xl my-20 border-t border-neutral-200" />

      {/* Mission */}
      <section className="max-w-4xl text-center space-y-4">
        <h2 className="text-3xl font-semibold">Research-Driven Security</h2>

        <p className="text-neutral-600 leading-relaxed">
          SynAccel is an independent research initiative focused on AI security,
          cloud automation, and adversarial resilience. We explore how modern
          systems behave under pressure — and how to design them to adapt,
          recover, and defend themselves in real time.
        </p>
      </section>
    </main>
  );
}
