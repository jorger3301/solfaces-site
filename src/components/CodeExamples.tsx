"use client";

import { useState } from "react";
import { CODE_SNIPPETS } from "@/lib/code-snippets";
import { CodeBlock } from "./CodeBlock";
import { FadeIn } from "./FadeIn";
import { SECTION_IDS } from "@/lib/constants";

const TABS = Object.entries(CODE_SNIPPETS);

export function CodeExamples() {
  const [active, setActive] = useState(0);
  const snippet = TABS[active][1];

  return (
    <section id={SECTION_IDS.code} className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-site-text">
          Code Examples
        </h2>
        <p className="text-center text-site-text-secondary mb-8">
          Works with every platform
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-1 mb-4">
          {TABS.map(([key, { label }], i) => (
            <button
              key={key}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm rounded-lg transition-all cursor-pointer ${
                active === i
                  ? "bg-site-accent text-white"
                  : "text-site-text-muted hover:text-site-text-secondary hover:bg-site-bg-input"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <CodeBlock code={snippet.code} language={snippet.lang} />
      </FadeIn>
    </section>
  );
}
