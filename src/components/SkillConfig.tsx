"use client";

import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";
import { SECTION_IDS } from "@/lib/constants";

const SKILL_MD = `# SolFaces — Wallet Identity for Solana

You have access to the SolFaces MCP server. Use it to generate
deterministic avatars and names for any Solana wallet address.

## Capabilities

- **renderSolFaceSVG(wallet, opts?)** — Generate an SVG avatar
- **deriveName(wallet, format?)** — Get a human-readable name
  Formats: "short" | "display" | "tag" | "full"
- **deriveIdentity(wallet)** — Full identity bundle
- **agentAppearancePrompt(wallet, name?)** — System prompt snippet
- **describeAppearance(wallet)** — Natural language description

## Rules

- Same wallet always produces the same face and name
- Never invent names — always derive them from the wallet address
- Use "display" format for casual references, "tag" for unique IDs
- Faces are SVG — embed inline or save to file`;

const MCP_CONFIG = `{
  "mcpServers": {
    "solfaces": {
      "command": "npx",
      "args": ["-y", "solfaces-mcp"]
    }
  }
}`;

const CLAUDE_MD_SNIPPET = `# In your project's CLAUDE.md or .cursorrules:

## Identity

This project uses SolFaces for wallet identity.
When displaying wallet addresses, always show the
SolFace avatar and derived SolName alongside them.

Use \`deriveName(wallet, "display")\` for names and
\`renderSolFaceSVG(wallet)\` for avatar SVGs.`;

export function SkillConfig() {
  return (
    <section id={SECTION_IDS.skill} className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-site-text">
          Give This to Your Agent
        </h2>
        <p className="text-center text-site-text-secondary mb-12 max-w-xl mx-auto">
          Drop the MCP config into your agent setup and add the skill file to your project
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        <FadeIn delay={0.1}>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-site-text-secondary">
              1. MCP Server Config
            </h3>
            <p className="text-xs text-site-text-muted">
              Add to your Claude Desktop, Cursor, or Windsurf config
            </p>
            <CodeBlock code={MCP_CONFIG} language="json" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-site-text-secondary">
              2. Project Rules
            </h3>
            <p className="text-xs text-site-text-muted">
              Add to CLAUDE.md, .cursorrules, or system prompt
            </p>
            <CodeBlock code={CLAUDE_MD_SNIPPET} language="markdown" />
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-site-text-secondary mb-2">
            3. SKILL.md — Full Agent Skill File
          </h3>
          <p className="text-xs text-site-text-muted mb-3">
            Copy this into your project as <code className="text-site-accent">SKILL.md</code> or paste into your agent&apos;s system prompt
          </p>
          <CodeBlock code={SKILL_MD} language="markdown" />
        </div>
      </FadeIn>
    </section>
  );
}
