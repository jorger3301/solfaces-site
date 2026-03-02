import { FadeIn } from "./FadeIn";
import { SECTION_IDS, GITHUB_URL } from "@/lib/constants";

const REACT_PROPS = [
  { prop: "walletAddress", type: "string", required: true, description: "Solana wallet address (base58)" },
  { prop: "size", type: "number", required: false, description: "Avatar size in pixels (default: 64)" },
  { prop: "theme", type: "SolFaceTheme", required: false, description: "Theme preset or custom theme object" },
  { prop: "enableBlink", type: "boolean", required: false, description: "Enable CSS blink animation" },
  { prop: "showName", type: "boolean", required: false, description: "Show derived name label" },
  { prop: "nameFormat", type: "NameFormat", required: false, description: '"short" | "display" | "tag" | "full"' },
  { prop: "colorOverrides", type: "object", required: false, description: "Per-instance color overrides (skin, eyes, hair, etc.)" },
  { prop: "flat", type: "boolean", required: false, description: "Disable gradients for flat rendering" },
  { prop: "detailLevel", type: "string", required: false, description: '"full" | "simplified" | "auto"' },
];

const CORE_FUNCTIONS = [
  { fn: "renderSolFaceSVG(wallet, opts?)", returns: "string", description: "Generate SVG string (server/client)" },
  { fn: "generateTraits(wallet)", returns: "SolFaceTraits", description: "Deterministic trait generation" },
  { fn: "getTraitLabels(traits)", returns: "Record<string, string>", description: "Human-readable trait labels" },
  { fn: "deriveName(wallet, format?)", returns: "string", description: "Derive name in any format" },
  { fn: "deriveIdentity(wallet)", returns: "SolNameIdentity", description: "Full identity bundle" },
  { fn: "agentAppearancePrompt(wallet, name?)", returns: "string", description: "AI agent system prompt snippet" },
  { fn: "describeAppearance(wallet, format?, perspective?)", returns: "string", description: "Natural language description" },
  { fn: "renderSolFacePNG(wallet, opts?)", returns: "Promise<Buffer>", description: "PNG rasterization (Node.js)" },
];

export function ApiReference() {
  return (
    <section id={SECTION_IDS.api} className="py-16 sm:py-24 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-site-text">
          API Reference
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h3 className="text-xl font-semibold text-site-text mb-4">
          React Component Props
        </h3>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border border-site-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-site-bg-input">
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">Prop</th>
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">Type</th>
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-site-border">
              {REACT_PROPS.map((p) => (
                <tr key={p.prop}>
                  <td className="px-4 py-2 font-mono text-site-accent">
                    {p.prop}
                    {p.required && <span className="text-red-400 ml-1">*</span>}
                  </td>
                  <td className="px-4 py-2 font-mono text-site-text-muted">{p.type}</td>
                  <td className="px-4 py-2 text-site-text-secondary">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h3 className="text-xl font-semibold text-site-text mb-4">
          Core Functions
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-site-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-site-bg-input">
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">Function</th>
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">Returns</th>
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-site-border">
              {CORE_FUNCTIONS.map((f) => (
                <tr key={f.fn}>
                  <td className="px-4 py-2 font-mono text-site-accent text-xs">{f.fn}</td>
                  <td className="px-4 py-2 font-mono text-site-text-muted text-xs">{f.returns}</td>
                  <td className="px-4 py-2 text-site-text-secondary">{f.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-site-text-muted text-sm">
          Full documentation on{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-site-accent hover:underline"
          >
            GitHub
          </a>
        </p>
      </FadeIn>
    </section>
  );
}
