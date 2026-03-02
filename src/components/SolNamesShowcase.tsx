"use client";

import { useMemo } from "react";
import { SolFace } from "solfaces/react";
import { deriveIdentity } from "solfaces/names";
import { useThemeObj } from "@/context/ThemeContext";
import { DEMO_WALLETS, SECTION_IDS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import { CodeBlock } from "./CodeBlock";

const NAME_WALLETS = DEMO_WALLETS.slice(0, 8);

function NameCard({ wallet }: { wallet: string }) {
  const themeObj = useThemeObj();
  const id = useMemo(() => deriveIdentity(wallet), [wallet]);

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-site-border bg-site-bg-card">
      <SolFace walletAddress={wallet} size={48} theme={themeObj} />
      <div className="min-w-0 flex-1 space-y-0.5">
        <p className="text-sm font-semibold text-site-text truncate">
          {id.name}
        </p>
        <p className="text-xs text-site-text-muted font-mono truncate">
          {id.tag}
        </p>
        <p className="text-xs text-site-text-muted font-mono truncate">
          {wallet.slice(0, 12)}...
        </p>
      </div>
    </div>
  );
}

const EXAMPLE_CODE = `import { deriveName, deriveIdentity } from "solfaces";

deriveName("7xKXtg...", "display");   // "Planar Beaver"
deriveName("7xKXtg...", "tag");       // "Planar Beaver#8f2a"
deriveName("7xKXtg...", "full");      // "Planar Beaver-Comet Arc"

const id = deriveIdentity("7xKXtg...");
// { short, name, tag, full, adjective, noun, hash, discriminator }`;

const TABLE_ID = deriveIdentity(DEMO_WALLETS[0]);

export function SolNamesShowcase() {
  return (
    <section id={SECTION_IDS.solnames} className="py-16 sm:py-24 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-site-text">
          Every Wallet Gets a Name
        </h2>
        <p className="text-center text-site-text-secondary mb-12 max-w-xl mx-auto">
          SHA-256 derived, human-readable, deterministic. ~1M display names, ~65.5B unique tags, ~1T full names.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {NAME_WALLETS.map((wallet) => (
            <NameCard key={wallet} wallet={wallet} />
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        {/* Format table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full text-sm border border-site-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-site-bg-input">
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">
                  Format
                </th>
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">
                  Example
                </th>
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">
                  Uniqueness
                </th>
                <th className="text-left px-4 py-2 text-site-text-secondary font-medium">
                  Use Case
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-site-border">
              <tr>
                <td className="px-4 py-2 font-mono text-site-text">short</td>
                <td className="px-4 py-2 font-mono text-site-accent">
                  &quot;{TABLE_ID.short}&quot;
                </td>
                <td className="px-4 py-2 text-site-text-muted">~1K</td>
                <td className="px-4 py-2 text-site-text-secondary">
                  Quick label
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-site-text">display</td>
                <td className="px-4 py-2 font-mono text-site-accent">
                  &quot;{TABLE_ID.name}&quot;
                </td>
                <td className="px-4 py-2 text-site-text-muted">~1M</td>
                <td className="px-4 py-2 text-site-text-secondary">
                  Profile name, chat
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-site-text">tag</td>
                <td className="px-4 py-2 font-mono text-site-accent">
                  &quot;{TABLE_ID.tag}&quot;
                </td>
                <td className="px-4 py-2 text-site-text-muted">~65.5B</td>
                <td className="px-4 py-2 text-site-text-secondary">
                  Unique identifier
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-site-text">full</td>
                <td className="px-4 py-2 font-mono text-site-accent">
                  &quot;{TABLE_ID.full}&quot;
                </td>
                <td className="px-4 py-2 text-site-text-muted">~1T</td>
                <td className="px-4 py-2 text-site-text-secondary">
                  Maximum uniqueness
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock code={EXAMPLE_CODE} language="typescript" />
      </FadeIn>
    </section>
  );
}
