"use client";

import { useMemo } from "react";
import { SolFace, useSolName } from "solfaces/react";
import { PRESET_THEMES } from "solfaces/themes";
import { useTheme } from "@/context/ThemeContext";
import { DEMO_WALLETS } from "@/lib/constants";

function FaceItem({ wallet }: { wallet: string }) {
  const name = useSolName(wallet, "short");
  return (
    <div className="flex flex-col items-center gap-1 flex-shrink-0 px-2">
      <SolFace walletAddress={wallet} size={56} enableBlink />
      <span className="text-xs text-site-text-muted font-mono truncate max-w-[72px]">
        {name}
      </span>
    </div>
  );
}

export function FaceStrip() {
  const { theme } = useTheme();
  const themeObj = PRESET_THEMES[theme];

  // Duplicate the list for seamless loop
  const wallets = useMemo(
    () => [...DEMO_WALLETS, ...DEMO_WALLETS],
    []
  );

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="face-strip flex items-start" style={{ width: "max-content" }}>
        {wallets.map((wallet, i) => (
          <FaceItem key={`${wallet}-${i}`} wallet={wallet} />
        ))}
      </div>
    </div>
  );
}
