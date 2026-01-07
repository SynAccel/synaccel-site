export type PublicationBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Publication = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readingTime: string;
  coverImage?: string;
  content: PublicationBlock[];
};

export const publications: Publication[] = [
  {
    slug: "ai-automation-not-red-vs-blue",
    title:
      "The Future of Cybersecurity Will Be AI + Automation, Not Traditional Red vs. Blue",
    description:
      "Why cybersecurity is shifting from manual workflows to autonomous defense systems — and what that means for modern teams.",
    date: "2025-12-10",
    readingTime: "12 min read",
    content: [
      {
        type: "p",
        text:
          "Cybersecurity is changing faster than people realize. Within the last few years, AI has exploded onto the scene, powered by tools from OpenAI that many of us use every day. Traditional red-team vs. blue-team skill sets were designed for a world of manual attacks and manual defenses."
      },
      {
        type: "p",
        text:
          "But the reality is that cybersecurity didn’t start this way. In the early days, everything was simpler — but also harder. Attacks were mostly manual, defenses were manual, and if something broke, someone had to sit there and figure it out line by line. Then we shifted into the “script era,” where both attackers and defenders automated repetitive tasks. Suddenly, exploitation frameworks, scanners, and defensive scripts became normal tools."
      },
      {
        type: "p",
        text:
          "Now we’re entering the next phase. Blue teams aren’t just watching dashboards anymore — SIEMs, SOAR platforms, and EDR systems automatically correlate logs, detect anomalies, and trigger responses without a human touching it. What used to take hours is now happening in seconds."
      },
      {
        type: "p",
        text:
          "And AI is pushing this even further. We’re no longer just running scripts — we’re building systems that understand, predict, and respond. Automation is becoming the core of cybersecurity, not an add-on."
      },

      {
        type: "h2",
        text: "Why the red vs. blue model is becoming outdated"
      },
      {
        type: "p",
        text:
          "As cybersecurity keeps evolving, the biggest shift we're seeing isn’t just new tools — it’s a completely new philosophy. For decades, everything revolved around the classic “red” vs. “blue” model. One side attacks, the other defends. Humans on both ends, thinking, scripting, reacting."
      },
      {
        type: "p",
        text: "But that model is becoming outdated."
      },
      {
        type: "p",
        text:
          "Modern threats don’t wait for humans to respond. Attacks happen at machine speed. Malware adapts. Phishing campaigns are automated. Adversaries are using AI to generate exploits, customize payloads, and constantly change their attacks."
      },
      {
        type: "p",
        text: "So defenders have to evolve too."
      },

      {
        type: "h2",
        text: "Human + AI vs. automated threats"
      },
      {
        type: "p",
        text:
          "We’re moving into a world where AI and automation are not just assistants — they’re taking over the first layers of defense entirely. Instead of analysts manually triaging alerts, SIEMs correlate events automatically. Instead of searching logs for hours, AI summarizes anomalies in seconds. Instead of red teams manually crafting attacks, autonomous adversarial simulations will constantly test environments 24/7."
      },
      {
        type: "p",
        text:
          "In the future, the real battlefield won’t be red vs. blue. It will be human + AI vs. automated threats."
      },
      {
        type: "p",
        text:
          "Human analysts will still matter — but their role shifts from doing everything by hand to orchestrating intelligent systems. The value isn’t in manually running scans or writing detections; it’s in designing adaptive logic, validating AI decisions, and managing automated defensive loops."
      },
      {
        type: "p",
        text:
          "The teams that embrace this shift now will be the ones prepared for the next decade of cybersecurity."
      },

      {
        type: "h2",
        text: "What the next decade of cybersecurity will look like"
      },
      {
        type: "ol",
        items: [
          "AI-driven SOCs will handle most tier-1 alert triage, correlation, summarization, and automated response before humans ever see the problem.",
          "Red teams will shift toward autonomous adversary simulations that continuously probe environments and generate evolving attack paths.",
          "Blue teams will evolve into automation engineers who design adaptive playbooks, detection logic, AI feedback loops, and deception environments.",
          "Identity, behavior modeling, and predictive analytics will replace perimeter-based security as the primary defensive strategy.",
          "AI will become a teammate rather than a tool — handling speed and scale while humans maintain strategic oversight.",
          "Cyber defense will resemble a living system that continuously adapts through retraining, deception, and policy mutation.",
          "The most valuable professionals will be those who understand AI systems, automation architecture, model validation, and business risk alignment."
        ]
      },

      {
        type: "p",
        text:
          "The next decade won’t be defined by who can type commands the fastest — it will be defined by who can guide intelligent systems the most effectively."
      },
      {
        type: "p",
        text:
          "As cybersecurity transforms, the divide between humans and machine capabilities becomes a partnership rather than a replacement. The future belongs to those who can harness AI, automation, and adaptive systems to stay ahead of threats moving at machine speed."
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


