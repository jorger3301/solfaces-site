"use client";

import { useTheme } from "@/context/ThemeContext";
import {
  THEME_NAMES,
  THEME_LABELS,
  THEME_SITE_COLORS,
} from "@/lib/theme-site-colors";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3 py-2 rounded-full border border-site-border bg-site-bg-raised/80 backdrop-blur-sm shadow-lg">
      {THEME_NAMES.map((name) => {
        const colors = THEME_SITE_COLORS[name];
        const isActive = theme === name;
        return (
          <button
            key={name}
            onClick={() => setTheme(name)}
            title={THEME_LABELS[name]}
            className={`w-5 h-5 rounded-full border-2 transition-all cursor-pointer ${
              isActive
                ? "border-site-accent scale-125 shadow-md"
                : "border-transparent hover:scale-110"
            }`}
            style={{ backgroundColor: colors.accent }}
          />
        );
      })}
    </div>
  );
}
