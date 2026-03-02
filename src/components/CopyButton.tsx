"use client";

import { useState, useCallback } from "react";

export function CopyButton({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all cursor-pointer ${
        copied
          ? "border-site-accent text-site-accent bg-site-accent-dim"
          : "border-site-border text-site-text-muted hover:border-site-border-hover hover:text-site-text-secondary"
      } ${className}`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
