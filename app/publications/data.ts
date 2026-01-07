// app/publications/data.ts

export type PublicationBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Publication = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags?: string[];
  content: PublicationBlock[];
};

export const publications: Publication[] = [
  {
    slug: "ai-and-cybersecurity-evolution",
    title: "The Future of Cybersecurity Will Be AI + Automation, Not Traditional Red vs. Blue",
    date: "2025-12-10",
    summary:
      "Why the script era gave way to automated detection and response — and how ai accelerates the transition to adaptive security loops.",
    tags: ["ai security", "defense automation", "cloud-native"],
    content: [
      {
        type: "p",
        text:
          "Cybersecurity is changing faster than people realize. The old split between manual attacks and manual defenses made sense when systems were smaller and slower.",
      },
      {
        type: "p",
        text:
          "Then we moved into the script era — automation became normal for both sides. Today, correlation, response, and containment can happen without a human touching a console.",
      },
      { type: "h2", text: "What changed" },
      {
        type: "ul",
        items: [
          "telemetry volume increased: more logs, more signals, more noise",
          "cloud-native environments changed the perimeter into many small edges",
          "detection moved from signatures to behavior and anomaly patterns",
          "response became orchestrated: playbooks, enrichment, isolation, rollback",
        ],
      },
      { type: "h2", text: "Where ai fits" },
      {
        type: "p",
        text:
          "Ai doesn’t just speed up analysis. It changes the architecture of defense by making adaptation cheaper: triage, enrichment, clustering, and policy decisions can be continuously refined.",
      },
      {
        type: "quote",
        text:
          "The end goal isn’t a bigger dashboard. It’s a tighter loop: sense → decide → act → learn.",
      },
      { type: "h2", text: "What i’m building toward" },
      {
        type: "ul",
        items: [
          "prototype systems that simulate adversarial pressure",
          "measure how detection quality shifts under distributed constraints",
          "design loops that learn without becoming brittle or opaque",
        ],
      },
    ],
  },
];

export const publicationsSorted = [...publications].sort((a, b) =>
  a.date < b.date ? 1 : -1
);

export function getPublicationBySlug(slug: string) {
  return publications.find((p) => p.slug === slug);
}
