"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { SolFace, useSolName } from "solfaces/react";
import {
  generateTraits,
  getTraitLabels,
  renderSolFaceSVG,
} from "solfaces";
import { useThemeObj } from "@/context/ThemeContext";
import { QUICK_TRY_WALLETS, SECTION_IDS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

const BASE58_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

export function Playground() {
  const themeObj = useThemeObj();
  const [input, setInput] = useState<string>(QUICK_TRY_WALLETS[0].address);
  const [wallet, setWallet] = useState<string>(QUICK_TRY_WALLETS[0].address);
  const [svgCopied, setSvgCopied] = useState(false);
  const [pngStatus, setPngStatus] = useState<"idle" | "downloading" | "error">("idle");

  const isValid = input.length === 0 || BASE58_RE.test(input);
  const showWarning = !isValid && input.length > 0;

  // Debounce input → wallet (300ms)
  useEffect(() => {
    const timer = setTimeout(() => setWallet(input || QUICK_TRY_WALLETS[0].address), 300);
    return () => clearTimeout(timer);
  }, [input]);

  const selectWallet = useCallback((address: string) => {
    setInput(address);
    setWallet(address);
  }, []);

  const name = useSolName(wallet, "display");
  const tag = useSolName(wallet, "tag");
  const traits = useMemo(() => generateTraits(wallet), [wallet]);
  const labels = useMemo(() => getTraitLabels(traits), [traits]);

  const handleCopySvg = useCallback(async () => {
    const svg = renderSolFaceSVG(wallet, { theme: themeObj });
    await navigator.clipboard.writeText(svg);
    setSvgCopied(true);
    setTimeout(() => setSvgCopied(false), 2000);
  }, [wallet, themeObj]);

  const handleDownloadPng = useCallback(async () => {
    setPngStatus("downloading");
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
      setPngStatus("idle");
    } catch {
      setPngStatus("error");
      setTimeout(() => setPngStatus("idle"), 3000);
    }
  }, [wallet, themeObj]);

  return (
    <section
      id={SECTION_IDS.playground}
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
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
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Input column */}
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste a Solana wallet address..."
                aria-label="Solana wallet address"
                className={`w-full px-4 py-3 rounded-lg border bg-site-bg-input text-site-text font-mono text-sm focus-visible:border-site-accent transition-colors ${
                  showWarning ? "border-red-400" : "border-site-border"
                }`}
              />
              {showWarning && (
                <p className="mt-1.5 text-xs text-red-400">
                  Enter a valid Solana wallet address (base58, 32-44 chars)
                </p>
              )}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {QUICK_TRY_WALLETS.map(({ address, label }) => (
                <button
                  key={address}
                  onClick={() => selectWallet(address)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs rounded-full border transition-all cursor-pointer ${
                    input === address
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
            <div className="rounded-2xl p-4 sm:p-6 border border-site-border bg-site-bg-card">
              <SolFace walletAddress={wallet} size={160} enableBlink theme={themeObj} />
            </div>

            <div>
              <p className="text-2xl font-bold text-site-text">{name}</p>
              <p className="text-sm text-site-text-muted font-mono">{tag}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopySvg}
                className={`px-5 py-2.5 text-sm rounded-lg border transition-all cursor-pointer ${
                  svgCopied
                    ? "border-site-accent text-site-accent bg-site-accent-dim"
                    : "border-site-border text-site-text-secondary hover:border-site-accent hover:text-site-accent"
                }`}
              >
                {svgCopied ? "Copied!" : "Copy SVG"}
              </button>
              <button
                onClick={handleDownloadPng}
                disabled={pngStatus === "downloading"}
                className={`px-5 py-2.5 text-sm rounded-lg border transition-all ${
                  pngStatus === "error"
                    ? "border-red-400 text-red-400 cursor-pointer"
                    : pngStatus === "downloading"
                      ? "border-site-border text-site-text-muted opacity-70 cursor-not-allowed"
                      : "border-site-border text-site-text-secondary hover:border-site-accent hover:text-site-accent cursor-pointer"
                }`}
              >
                {pngStatus === "downloading"
                  ? "Downloading..."
                  : pngStatus === "error"
                    ? "PNG unavailable"
                    : "Download PNG"}
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
