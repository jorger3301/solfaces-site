"use client";

import { CopyButton } from "./CopyButton";

export function CodeBlock({
  code,
  language = "typescript",
  showCopy = true,
}: {
  code: string;
  language?: string;
  showCopy?: boolean;
}) {
  return (
    <div className="relative rounded-lg border border-site-border bg-site-bg-input overflow-hidden">
      {showCopy && (
        <div className="absolute top-2 right-2 z-10">
          <CopyButton text={code} />
        </div>
      )}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-site-border">
        <span className="text-xs text-site-text-muted font-mono">
          {language}
        </span>
      </div>
      <pre className="p-3 sm:p-4 overflow-x-auto">
        <code className="text-xs sm:text-sm font-mono text-site-text leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}
