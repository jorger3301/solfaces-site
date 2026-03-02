"use client";

import { useMemo } from "react";
import { SolFace, useSolName } from "solfaces/react";
import { useThemeObj } from "@/context/ThemeContext";
import { DEMO_WALLETS } from "@/lib/constants";

function FaceItem({ wallet, theme }: { wallet: string; theme?: object }) {
  const name = useSolName(wallet, "short");
  return (
    <div className="flex flex-col items-center gap-1 flex-shrink-0 px-1.5 sm:px-2">
      <SolFace walletAddress={wallet} size={44} enableBlink theme={theme} />
      <span className="text-[10px] sm:text-xs text-site-text-muted font-mono truncate max-w-[56px] sm:max-w-[72px]">
        {name}
      </span>
    </div>
  );
}

export function FaceStrip() {
  const themeObj = useThemeObj();

  // Duplicate the list for seamless loop
  const wallets = useMemo(
    () => [...DEMO_WALLETS, ...DEMO_WALLETS],
    []
  );

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="face-strip flex items-start" style={{ width: "max-content" }}>
        {wallets.map((wallet, i) => (
          <FaceItem key={`${wallet}-${i}`} wallet={wallet} theme={themeObj} />
        ))}
      </div>
    </div>
  );
}
