"use client";

import { FaceStrip } from "./FaceStrip";
import { SECTION_IDS } from "@/lib/constants";

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
          Deterministic wallet avatars and names for Solana
        </p>
        <p className="mt-2 text-sm text-site-text-muted">
          Same wallet = same face = same name. Forever.
        </p>
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
