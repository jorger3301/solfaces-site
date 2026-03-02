"use client";

import { useMemo } from "react";
import { SolFace, useSolName } from "solfaces/react";
import { agentAppearancePrompt } from "solfaces";
import { deriveName } from "solfaces/names";
import { useThemeObj } from "@/context/ThemeContext";
import { DEMO_WALLETS, SECTION_IDS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";

const AGENT_WALLET = DEMO_WALLETS[1];

export function AgentIdentity() {
  const themeObj = useThemeObj();
  const name = useSolName(AGENT_WALLET, "display");

  const prompt = useMemo(
    () => agentAppearancePrompt(AGENT_WALLET, deriveName(AGENT_WALLET, "display")),
    []
  );

  return (
    <section id={SECTION_IDS.agent} className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-site-text">
          AI Agent Identity
        </h2>
        <p className="text-center text-site-text-secondary mb-12 max-w-xl mx-auto">
          Every agent gets a face, a name, and self-awareness. No registration, no storage, no API calls.
        </p>
      </FadeIn>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8">
        <FadeIn delay={0.1}>
          <div className="space-y-4">
            <CodeBlock
              code={`import { agentAppearancePrompt } from "solfaces";
import { deriveName } from "solfaces/names";

const wallet = "${AGENT_WALLET.slice(0, 20)}...";
const name = deriveName(wallet, "display");
const prompt = agentAppearancePrompt(wallet, name);`}
              language="typescript"
            />

            <div className="rounded-lg border border-site-border bg-site-bg-input p-3 sm:p-4 font-mono text-xs text-site-text-secondary leading-relaxed max-h-48 overflow-y-auto">
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
              Meet {name}
            </p>
            <p className="text-sm text-site-text-muted text-center max-w-xs">
              Deterministic identity — same wallet always produces the same face, name, and self-description.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
