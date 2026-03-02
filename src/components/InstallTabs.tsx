"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";
import { FadeIn } from "./FadeIn";
import { SECTION_IDS, NPM_URL, GITHUB_URL } from "@/lib/constants";

const INSTALL_COMMANDS = [
  { label: "npm", command: "npm install solfaces" },
  { label: "yarn", command: "yarn add solfaces" },
  { label: "pnpm", command: "pnpm add solfaces" },
  { label: "bun", command: "bun add solfaces" },
  {
    label: "CDN",
    command: '<script src="https://unpkg.com/solfaces/dist/cdn.js"></script>',
  },
];

export function InstallTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id={SECTION_IDS.install} className="py-24 px-6 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-site-text">
          Install
        </h2>

        <div className="rounded-lg border border-site-border bg-site-bg-card overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-site-border scrollbar-hide">
            {INSTALL_COMMANDS.map((cmd, i) => (
              <button
                key={cmd.label}
                onClick={() => setActive(i)}
                className={`px-3 py-3 text-sm font-mono transition-all cursor-pointer whitespace-nowrap sm:px-4 ${
                  active === i
                    ? "text-site-accent border-b-2 border-site-accent bg-site-bg-raised"
                    : "text-site-text-muted hover:text-site-text-secondary"
                }`}
              >
                {cmd.label}
              </button>
            ))}
          </div>

          {/* Command */}
          <div className="flex items-center justify-between p-4">
            <code className="text-sm font-mono text-site-text">
              {INSTALL_COMMANDS[active].command}
            </code>
            <CopyButton text={INSTALL_COMMANDS[active].command} />
          </div>
        </div>

        {/* Python */}
        <div className="mt-4 rounded-lg border border-site-border bg-site-bg-card p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <span className="text-xs text-site-text-muted font-mono">
                Python
              </span>
              <code className="block text-sm font-mono text-site-text mt-1 truncate">
                curl -O https://raw.githubusercontent.com/jorger3301/solfaces/main/python/solfaces.py
              </code>
            </div>
            <CopyButton text="curl -O https://raw.githubusercontent.com/jorger3301/solfaces/main/python/solfaces.py" />
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a href={NPM_URL} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/npm/v/solfaces?color=%238869ab"
              alt="npm version"
              height="20"
            />
          </a>
          <img
            src="https://img.shields.io/badge/TypeScript-strict-blue"
            alt="TypeScript"
            height="20"
          />
          <img
            src="https://img.shields.io/badge/dependencies-0-brightgreen"
            alt="zero dependencies"
            height="20"
          />
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.shields.io/github/stars/jorger3301/solfaces?style=social"
              alt="GitHub stars"
              height="20"
            />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
