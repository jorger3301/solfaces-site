"use client";

import { SolFace } from "solfaces/react";
import { PRESET_THEMES } from "solfaces/themes";
import { useTheme } from "@/context/ThemeContext";
import {
  THEME_NAMES,
  THEME_LABELS,
  THEME_DESCRIPTIONS,
  REACT_ONLY_THEMES,
} from "@/lib/theme-site-colors";
import { DEMO_WALLETS, SECTION_IDS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

const GALLERY_WALLET = DEMO_WALLETS[0];

export function ThemeGallery() {
  const { theme, setTheme } = useTheme();

  return (
    <section id={SECTION_IDS.themes} className="py-24 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-site-text">
          11 Built-in Themes
        </h2>
        <p className="text-center text-site-text-secondary mb-12 max-w-lg mx-auto">
          Click any theme to transform the entire site
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {THEME_NAMES.map((name, i) => {
          const isActive = theme === name;
          const isReactOnly = REACT_ONLY_THEMES.has(name);
          return (
            <FadeIn key={name} delay={i * 0.05}>
              <button
                onClick={() => setTheme(name)}
                className={`theme-card w-full p-4 sm:p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? "border-site-accent bg-site-accent-dim shadow-lg"
                    : "border-site-border bg-site-bg-card hover:border-site-border-hover"
                }`}
              >
                <div className="flex justify-center mb-3">
                  <SolFace
                    walletAddress={GALLERY_WALLET}
                    size={80}
                    theme={PRESET_THEMES[name]}
                  />
                </div>
                <p className="text-sm font-semibold text-site-text text-center">
                  {THEME_LABELS[name]}
                </p>
                <p className="text-xs text-site-text-muted text-center mt-1">
                  {THEME_DESCRIPTIONS[name]}
                </p>
                <div className="flex justify-center mt-2">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isReactOnly
                        ? "bg-site-accent-dim text-site-accent"
                        : "bg-site-bg-input text-site-text-muted"
                    }`}
                  >
                    {isReactOnly ? "React only" : "All renderers"}
                  </span>
                </div>
              </button>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
