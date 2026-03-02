import { FadeIn } from "./FadeIn";
import { SECTION_IDS } from "@/lib/constants";

const FEATURES = [
  {
    title: "Same Wallet, Same Face",
    description:
      "Every wallet address always generates the same unique avatar and name. No database, no storage — it's pure math.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Instant Generation",
    description:
      "Faces generate in under 1ms with zero runtime dependencies. Add to any project with a single import.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
  },
  {
    title: "2.56 Billion Unique Faces",
    description:
      "11 facial traits with expanded ranges ensure every wallet looks distinct. No two wallets share a face.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "11 Built-in Themes",
    description:
      "From clean gradients to pixel art to liquid glass — pick a style or create your own custom theme.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    title: "Built for AI Agents",
    description:
      "Give your AI agent a face and a name with a single function call. Includes MCP server and system prompt helpers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.07A7.001 7.001 0 0 1 7.07 19H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h-1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="9" cy="13" r="1" />
        <circle cx="15" cy="13" r="1" />
        <path d="M10 17a2 2 0 0 0 4 0" />
      </svg>
    ),
  },
  {
    title: "Works Everywhere",
    description:
      "React, Node.js, Python, CDN, Edge — drop it into any stack. SSR-ready with zero config.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export function WhySolFaces() {
  return (
    <section
      id={SECTION_IDS.why}
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-site-text">
          Everything You Need
        </h2>
        <p className="text-center text-site-text-secondary mb-12 max-w-xl mx-auto">
          A complete identity toolkit for Solana wallets — from avatars to names to AI agent personas
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((feature, i) => (
          <FadeIn key={feature.title} delay={i * 0.08}>
            <div className="theme-card p-6 rounded-xl border border-site-border bg-site-bg-card h-full">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-site-accent-dim text-site-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-site-text mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-site-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
