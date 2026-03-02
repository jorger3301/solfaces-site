"use client";

import { FaceStrip } from "./FaceStrip";
import { SECTION_IDS, GITHUB_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.15em] sm:tracking-[0.3em] glow-title text-site-text">
          SOLFACES
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-site-text-secondary max-w-xl mx-auto">
          Every Solana wallet gets a unique face and name — generated instantly, stored nowhere
        </p>
        <p className="mt-2 text-sm text-site-text-muted">
          Same wallet = same face = same name. Forever.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            onClick={() =>
              document
                .getElementById(SECTION_IDS.playground)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 text-sm font-medium rounded-lg bg-site-accent text-site-accent-text hover:opacity-90 transition-opacity cursor-pointer"
          >
            Try It Now
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium rounded-lg border border-site-border text-site-text-secondary hover:border-site-accent hover:text-site-accent transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <FaceStrip />

      <div className="absolute bottom-8 text-site-text-muted text-sm animate-bounce" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mx-auto"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
