"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { PRESET_THEMES } from "solfaces/themes";
import { THEME_SITE_COLORS, type SiteColors } from "@/lib/theme-site-colors";

interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
  siteColors: SiteColors;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "default",
  setTheme: () => {},
  siteColors: THEME_SITE_COLORS.default,
});

function applySiteColors(colors: SiteColors) {
  const root = document.documentElement;
  root.style.setProperty("--site-bg", colors.bg);
  root.style.setProperty("--site-bg-raised", colors.bgRaised);
  root.style.setProperty("--site-bg-card", colors.bgCard);
  root.style.setProperty("--site-bg-input", colors.bgInput);
  root.style.setProperty("--site-text", colors.text);
  root.style.setProperty("--site-text-secondary", colors.textSecondary);
  root.style.setProperty("--site-text-muted", colors.textMuted);
  root.style.setProperty("--site-border", colors.border);
  root.style.setProperty("--site-border-hover", colors.borderHover);
  root.style.setProperty("--site-accent", colors.accent);
  root.style.setProperty("--site-accent-dim", colors.accentDim);
}

export function ThemeProvider({
  children,
  defaultTheme = "default",
}: {
  children: ReactNode;
  defaultTheme?: string;
}) {
  const [theme, setThemeState] = useState(defaultTheme);
  const siteColors = THEME_SITE_COLORS[theme] ?? THEME_SITE_COLORS.default;

  const setTheme = useCallback((t: string) => {
    setThemeState(t);
    try {
      localStorage.setItem("solfaces-theme", t);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("solfaces-theme");
      if (stored && THEME_SITE_COLORS[stored]) {
        setThemeState(stored);
      }
    } catch {}
  }, []);

  useEffect(() => {
    applySiteColors(siteColors);
  }, [siteColors]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, siteColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeObj() {
  const { theme } = useTheme();
  return PRESET_THEMES[theme] ?? PRESET_THEMES.default;
}
