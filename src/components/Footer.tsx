"use client";

import { SolFace } from "solfaces/react";
import { useThemeObj } from "@/context/ThemeContext";
import { DEMO_WALLETS, SECTION_IDS, GITHUB_URL, NPM_URL } from "@/lib/constants";

const FOOTER_WALLETS = DEMO_WALLETS.slice(5, 11);

export function Footer() {
  const themeObj = useThemeObj();

  return (
    <footer
      id={SECTION_IDS.footer}
      className="py-16 px-6 border-t border-site-border"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Decorative faces */}
        <div className="flex justify-center gap-3">
          {FOOTER_WALLETS.map((wallet) => (
            <SolFace key={wallet} walletAddress={wallet} size={36} theme={themeObj} />
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

        <div className="flex justify-center gap-6 text-sm">
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
          <a
            href="https://github.com/jorger3301"
            target="_blank"
            rel="noopener noreferrer"
            className="text-site-text-secondary hover:text-site-accent transition-colors"
          >
            Built by jorger3301
          </a>
        </div>

        <p className="text-xs text-site-text-muted">MIT License</p>
      </div>
    </footer>
  );
}
