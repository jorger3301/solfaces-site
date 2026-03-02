export const CODE_REACT = `import { SolFace, useSolName } from "solfaces/react";

function WalletAvatar({ wallet }: { wallet: string }) {
  const name = useSolName(wallet, "display");

  return (
    <div>
      <SolFace wallet={wallet} size={64} enableBlink />
      <p>{name}</p>
    </div>
  );
}`;

export const CODE_NODE = `import { renderSolFaceSVG, deriveName } from "solfaces";

// Generate SVG string (server-side)
const svg = renderSolFaceSVG("7xKXtg2CW87d97...");
const name = deriveName("7xKXtg2CW87d97...", "display");

// Use in Express, Next.js API routes, etc.
res.setHeader("Content-Type", "image/svg+xml");
res.send(svg);`;

export const CODE_CDN = `<script src="https://unpkg.com/solfaces/dist/cdn.js"><\/script>

<!-- Auto-init: just add data attributes -->
<div data-solface="7xKXtg2CW87d97..." data-size="64"></div>

<script>
  // Or use the global API
  const svg = SolFaces.renderSolFaceSVG("7xKXtg2CW87d97...");
  const name = SolFaces.deriveName("7xKXtg2CW87d97...");
</script>`;

export const CODE_PYTHON = `from solfaces import generate_traits, render_svg, derive_name

wallet = "7xKXtg2CW87d97..."
traits = generate_traits(wallet)
svg = render_svg(traits)
name = derive_name(wallet, "display")

print(f"Name: {name}")

# Save to file
with open("avatar.svg", "w") as f:
    f.write(svg)`;

export const CODE_AGENT = `import { agentAppearancePrompt } from "solfaces";

// Generate a system prompt snippet for an AI agent
const prompt = agentAppearancePrompt(
  "7xKXtg2CW87d97...",
  "Atlas"  // optional custom name
);

// Add to your agent's system prompt:
// "You are Atlas. " + prompt

// Or use with MCP server:
// npx solfaces-mcp`;

export const CODE_SNIPPETS = {
  react: { label: "React", code: CODE_REACT, lang: "tsx" },
  node: { label: "Node / SSR", code: CODE_NODE, lang: "typescript" },
  cdn: { label: "CDN", code: CODE_CDN, lang: "html" },
  python: { label: "Python", code: CODE_PYTHON, lang: "python" },
  agent: { label: "AI Agent", code: CODE_AGENT, lang: "typescript" },
} as const;
