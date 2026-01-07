import Link from "next/link";

export default function PublicationsPage() {
  return (
    <main className="container">
      <section className="card max-w-5xl mx-auto p-8 md:p-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Publications</h1>
          <p className="mt-3 text-muted text-lg">
            Long-form research, analysis, and technical writing from SynAccel.
          </p>
          <div className="mt-6 border-t border-[var(--border)] opacity-70" />
        </header>

        <article className="py-7">
          <h2 className="text-xl md:text-2xl font-semibold leading-snug">
            The Future of Cybersecurity Will Be AI + Automation, Not Traditional Red vs. Blue
          </h2>

          <p className="mt-3 text-muted max-w-3xl">
            Why cybersecurity is shifting from manual workflows to autonomous defense systems — and what that means for modern teams.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span>12 min read</span>
            <span>December 10, 2025</span>
          </div>

          <div className="mt-5">
            <Link
              href="/publications/future-of-cybersecurity"
              className="btn-primary inline-flex items-center gap-2"
            >
              Read article <span aria-hidden>→</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
