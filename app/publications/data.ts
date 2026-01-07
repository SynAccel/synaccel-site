// app/publications/data.ts

export type Publication = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  tags: string[];
  heroImage?: string; // e.g. "/publications/future-ai-automation.png"
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
  >;
};

export const publications: Publication[] = [
  {
    slug: "future-of-ai-automation",
    title: "The Future of Cybersecurity Will Be AI + Automation, Not Traditional Red vs. Blue",
    subtitle: "Why security is shifting from manual ops to autonomous systems — and what that means for teams.",
    excerpt:
      "Cybersecurity is evolving from human-driven red vs. blue operations toward AI-augmented, automated defense loops that operate at machine speed.",
    date: "2025-12-10",
    readTime: "8 min",
    tags: ["AI Security", "Automation", "SOC", "Strategy", "Defensive Engineering"],
    // Optional: drop an image in /public and uncomment:
    // heroImage: "/publications/future-ai-automation.png",
    content: [
      { type: "p", text: "Cybersecurity is changing faster than people realize. Within the last few years, AI has exploded onto the scene, powered by tools from OpenAI that many of us use every day. Traditional red-team vs. blue-team skill sets were designed for a world of manual attacks and manual defenses." },
      { type: "p", text: "But the reality is that cybersecurity didn’t start this way. In the early days, everything was simpler — but also harder. Attacks were mostly manual, defenses were manual, and if something broke, someone had to sit there and figure it out line by line. Then we shifted into the “script era,” where both attackers and defenders automated repetitive tasks. Suddenly, exploitation frameworks, scanners, and defensive scripts became normal tools." },
      { type: "p", text: "Now we’re entering the next phase. Blue teams aren’t just watching dashboards anymore — SIEMs, SOAR platforms, and EDR systems automatically correlate logs, detect anomalies, and trigger responses without a human touching it. What used to take hours is now happening in seconds." },
      { type: "p", text: "And AI is pushing this even further. We’re no longer just running scripts — we’re building systems that understand, predict, and respond. Automation is becoming the core of cybersecurity, not an add-on." },

      { type: "h2", text: "Why “Red vs. Blue” is becoming outdated" },
      { type: "p", text: "As cybersecurity keeps evolving, the biggest shift we’re seeing isn’t just new tools — it’s a completely new philosophy. For decades, everything revolved around the classic “red” vs. “blue” model. One side attacks, the other defends. Humans on both ends, thinking, scripting, reacting." },
      { type: "p", text: "But that model is becoming outdated. Modern threats don’t wait for humans to respond. Attacks happen at machine speed. Malware adapts. Phishing campaigns are automated. Adversaries are using AI to generate exploits, customize payloads, and constantly change their attacks." },
      { type: "p", text: "So defenders have to evolve too." },

      { type: "quote", text: "In the future, the real battlefield won’t be red vs. blue. It will be human + AI vs. automated threats." },

      { type: "h2", text: "Where the industry is heading (5–10 years)" },
      {
        type: "ul",
        items: [
          "AI-driven SOCs become the norm: tier-1 triage, summarization, and initial response automated end-to-end.",
          "Red teams shift toward autonomous adversary simulations and continuous security testing.",
          "Blue teams become automation engineers: detection-as-code, adaptive playbooks, feedback loops.",
          "Identity + behavior + prediction become core: continuous verification and behavioral analytics.",
          "AI becomes a teammate: humans make final calls; AI handles speed, scale, and complexity.",
          "Security looks like operating a living system: adaptive deception, dynamic policy, model retraining.",
          "Human roles evolve: strategic thinking, automation logic, validation, and risk translation matter most."
        ]
      },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "As the cybersecurity landscape transforms, the divide between human and machine capabilities is becoming a partnership rather than a replacement. The future won’t belong to the fastest typers or the biggest red vs. blue teams — it will belong to those who can harness AI, automation, and adaptive systems to stay ahead of threats moving at machine speed." },
      { type: "p", text: "Cybersecurity is entering a new era where defenders don’t just react — they anticipate. Where automation handles the noise, and humans focus on strategy. And in this next decade, the individuals and organizations that embrace this shift now will be the ones who define what modern security looks like." }
    ]
  }
];

// newest first helper
export const publicationsSorted = [...publications].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPublicationBySlug(slug: string) {
  return publications.find((p) => p.slug === slug);
}
