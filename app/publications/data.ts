export type PublicationBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Publication = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readingTime: string;
  content: PublicationBlock[];
};

export const publications: Publication[] = [
  {
    slug: "automation-era-security",
    title: "Security in the Automation Era",
    description:
      "Why cybersecurity is shifting from manual workflows to autonomous defense systems.",
    date: "2025-12-10",
    readingTime: "8 min read",
    content: [
      {
        type: "p",
        text:
          "Cybersecurity is changing faster than most people realize. What began as manual analysis has evolved into automated detection and response pipelines."
      },
      {
        type: "h2",
        text: "From Scripts to Systems"
      },
      {
        type: "p",
        text:
          "Automation is no longer optional. Organizations that fail to adopt autonomous pipelines will fall behind both attackers and competitors."
      },
      {
        type: "ul",
        items: [
          "SOAR-driven response pipelines",
          "Autonomous alert triage",
          "Machine-speed containment"
        ]
      },
      {
        type: "quote",
        text:
          "The future SOC is not a room of analysts — it is a network of intelligent systems."
      }
    ]
  }
];

export const publicationsSorted = [...publications].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date)
);

export function getPublicationBySlug(slug: string) {
  return publications.find((p) => p.slug === slug);
}

