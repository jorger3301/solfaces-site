"use client";

import { useState, useMemo, useCallback } from "react";
import { SolFace, useSolName } from "solfaces/react";
import {
  generateTraits,
  getTraitLabels,
  renderSolFaceSVG,
} from "solfaces";
import { PRESET_THEMES } from "solfaces/themes";
import { useTheme } from "@/context/ThemeContext";
import { QUICK_TRY_WALLETS, SECTION_IDS } from "@/lib/constants";
import { CopyButton } from "./CopyButton";
import { FadeIn } from "./FadeIn";

export function Playground() {
  const { theme } = useTheme();
  const [wallet, setWallet] = useState<string>(QUICK_TRY_WALLETS[0].address);

  const name = useSolName(wallet, "display");
  const tag = useSolName(wallet, "tag");
  const traits = useMemo(() => generateTraits(wallet), [wallet]);
  const labels = useMemo(() => getTraitLabels(traits), [traits]);
  const themeObj = PRESET_THEMES[theme];

  const handleCopySvg = useCallback(async () => {
    const svg = renderSolFaceSVG(wallet, { theme: themeObj });
    await navigator.clipboard.writeText(svg);
  }, [wallet, themeObj]);

  const handleDownloadPng = useCallback(async () => {
    try {
      const { renderSolFacePNGBrowser } = await import("solfaces");
      const blob = await renderSolFacePNGBrowser(wallet, {
        size: 512,
        theme: themeObj,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `solface-${wallet.slice(0, 8)}.png`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // PNG rasterization not supported in this environment
    }
  }, [wallet, themeObj]);

  return (
    <section
      id={SECTION_IDS.playground}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-site-text">
          Try It
        </h2>
        <p className="text-center text-site-text-secondary mb-12 max-w-lg mx-auto">
          Paste any Solana wallet address to see its unique face and name
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Input column */}
          <div className="space-y-4">
            <input
              type="text"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="Paste a Solana wallet address..."
              className="w-full px-4 py-3 rounded-lg border border-site-border bg-site-bg-input text-site-text font-mono text-sm focus:outline-none focus:border-site-accent transition-colors"
            />

            <div className="flex flex-wrap gap-2">
              {QUICK_TRY_WALLETS.map(({ address, label }) => (
                <button
                  key={address}
                  onClick={() => setWallet(address)}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-all cursor-pointer ${
                    wallet === address
                      ? "border-site-accent text-site-accent bg-site-accent-dim"
                      : "border-site-border text-site-text-muted hover:border-site-border-hover"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Trait pills */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-site-text-secondary mb-2">
                Traits
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {Object.entries(labels).map(([key, value]) => (
                  <span
                    key={key}
                    className="px-2.5 py-1 text-xs rounded-full border border-site-border text-site-text-secondary bg-site-bg-card"
                  >
                    <span className="text-site-text-muted">{key}:</span>{" "}
                    {String(value)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Output column */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-2xl p-6 border border-site-border bg-site-bg-card">
              <SolFace walletAddress={wallet} size={200} enableBlink theme={themeObj} />
            </div>

            <div>
              <p className="text-2xl font-bold text-site-text">{name}</p>
              <p className="text-sm text-site-text-muted font-mono">{tag}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopySvg}
                className="px-4 py-2 text-sm rounded-lg border border-site-border text-site-text-secondary hover:border-site-accent hover:text-site-accent transition-all cursor-pointer"
              >
                Copy SVG
              </button>
              <button
                onClick={handleDownloadPng}
                className="px-4 py-2 text-sm rounded-lg border border-site-border text-site-text-secondary hover:border-site-accent hover:text-site-accent transition-all cursor-pointer"
              >
                Download PNG
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
