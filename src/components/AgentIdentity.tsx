"use client";

import { useMemo } from "react";
import { SolFace, useSolName } from "solfaces/react";
import { agentAppearancePrompt } from "solfaces";
import { PRESET_THEMES } from "solfaces/themes";
import { useTheme } from "@/context/ThemeContext";
import { DEMO_WALLETS, SECTION_IDS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";

const AGENT_WALLET = DEMO_WALLETS[1];
const AGENT_NAME = "Atlas";

const MCP_CONFIG = `{
  "mcpServers": {
    "solfaces": {
      "command": "npx",
      "args": ["-y", "solfaces-mcp"]
    }
  }
}`;

export function AgentIdentity() {
  const { theme } = useTheme();
  const themeObj = PRESET_THEMES[theme];
  const name = useSolName(AGENT_WALLET, "display");

  const prompt = useMemo(
    () => agentAppearancePrompt(AGENT_WALLET, AGENT_NAME),
    []
  );

  return (
    <section id={SECTION_IDS.agent} className="py-24 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-site-text">
          AI Agent Identity
        </h2>
        <p className="text-center text-site-text-secondary mb-12 max-w-xl mx-auto">
          Every agent gets a face, a name, and self-awareness. No registration, no storage, no API calls.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn delay={0.1}>
          <div className="space-y-4">
            <CodeBlock
              code={`import { agentAppearancePrompt } from "solfaces";

const prompt = agentAppearancePrompt(
  "${AGENT_WALLET.slice(0, 20)}...",
  "${AGENT_NAME}"
);`}
              language="typescript"
            />

            <div className="rounded-lg border border-site-border bg-site-bg-input p-4 font-mono text-xs text-site-text-secondary leading-relaxed max-h-48 overflow-y-auto">
              {prompt}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl p-6 border border-site-border bg-site-bg-card">
              <SolFace
                walletAddress={AGENT_WALLET}
                size={160}
                enableBlink
                theme={themeObj}
                showName
                nameFormat="display"
              />
            </div>
            <p className="text-lg font-semibold text-site-text">
              Meet {AGENT_NAME}
            </p>
            <p className="text-sm text-site-text-muted text-center">
              SolName: {name}
            </p>

            <div className="w-full mt-4">
              <p className="text-xs text-site-text-muted mb-2">
                MCP Server Config
              </p>
              <CodeBlock code={MCP_CONFIG} language="json" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
