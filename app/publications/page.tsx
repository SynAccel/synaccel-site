import Evolution from "./posts/evolution-of-cybersecurity.mdx";

export default function PublicationsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Publications</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Long-form writing on cybersecurity, automation, and intelligent systems.
        </p>
      </header>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <Evolution />
      </article>
    </main>
  );
}





