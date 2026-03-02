"use client";

import { useState, useCallback } from "react";
import { SolFace, useSolName } from "solfaces/react";
import { useThemeObj } from "@/context/ThemeContext";
import { DEMO_WALLETS, SECTION_IDS, GITHUB_URL, NPM_URL } from "@/lib/constants";

const FOOTER_WALLETS = DEMO_WALLETS.slice(5, 11);
const DONATE_WALLET = "3opT9nFGRfR48xhLBUSXDUus5hDUeob1RX6Kfx3LeQcj";

function DonateSection({ themeObj }: { themeObj?: object }) {
  const name = useSolName(DONATE_WALLET, "display");
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(DONATE_WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleCopy}
        className="flex items-center gap-3 px-5 py-3 rounded-xl border border-site-border bg-site-bg-card hover:border-site-accent hover:shadow-md transition-all cursor-pointer group"
      >
        <SolFace walletAddress={DONATE_WALLET} size={36} theme={themeObj} />
        <div className="text-left">
          <p className="text-sm font-semibold text-site-text group-hover:text-site-accent transition-colors">
            {copied ? "Address Copied!" : "Donate SOL"}
          </p>
          <p className="text-[10px] font-mono text-site-text-muted">
            {copied
              ? "Send any amount to support the project"
              : `${DONATE_WALLET.slice(0, 4)}...${DONATE_WALLET.slice(-4)} · Click to copy`}
          </p>
        </div>
      </button>
    </div>
  );
}

export function Footer() {
  const themeObj = useThemeObj();

  return (
    <footer
      id={SECTION_IDS.footer}
      className="py-16 px-4 sm:px-6 border-t border-site-border"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Decorative faces */}
        <div className="flex justify-center gap-3">
          {FOOTER_WALLETS.map((wallet) => (
            <SolFace key={wallet} walletAddress={wallet} size={40} theme={themeObj} />
          ))}
        </div>

        <div>
          <p className="text-2xl font-bold text-site-text tracking-wider">
            SOLFACES
          </p>
          <p className="text-sm text-site-text-muted mt-1">
            Deterministic wallet avatars & names for Solana
          </p>
        </div>

        <DonateSection themeObj={themeObj} />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-site-text-secondary hover:text-site-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-site-text-secondary hover:text-site-accent transition-colors"
          >
            npm
          </a>
          <span className="text-site-text-secondary">
            Built by{" "}
            <a
              href="https://x.com/retardedgains"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-site-accent transition-colors"
            >
              jorge
            </a>
          </span>
        </div>

        <p className="text-xs text-site-text-muted">MIT License</p>
      </div>
    </footer>
  );
}
