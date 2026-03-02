"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  THEME_NAMES,
  THEME_LABELS,
  THEME_SITE_COLORS,
} from "@/lib/theme-site-colors";
import { SECTION_IDS } from "@/lib/constants";

const NAV_LINKS = [
  { id: SECTION_IDS.playground, label: "Playground" },
  { id: SECTION_IDS.install, label: "Install" },
  { id: SECTION_IDS.solnames, label: "Names" },
  { id: SECTION_IDS.themes, label: "Themes" },
  { id: SECTION_IDS.code, label: "Code" },
  { id: SECTION_IDS.agent, label: "Agent" },
  { id: SECTION_IDS.skill, label: "Skill" },
  { id: SECTION_IDS.api, label: "API" },
];

function ThemeDots({
  theme,
  setTheme,
  className = "",
}: {
  theme: string;
  setTheme: (t: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {THEME_NAMES.map((name) => {
        const colors = THEME_SITE_COLORS[name];
        const isActive = theme === name;
        return (
          <button
            key={name}
            onClick={() => setTheme(name)}
            aria-label={`${THEME_LABELS[name]} theme`}
            className="p-2 cursor-pointer group"
          >
            <span
              className={`block w-3 h-3 rounded-[3px] border transition-all ${
                isActive
                  ? "border-site-accent scale-125 shadow-sm"
                  : "border-transparent group-hover:scale-110 opacity-60 group-hover:opacity-100"
              }`}
              style={{ backgroundColor: colors.accent }}
            />
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [mobileOpen]);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-site-bg/80 backdrop-blur-md border-b border-site-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-bold tracking-[0.2em] text-site-text hover:text-site-accent transition-colors cursor-pointer"
        >
          SOLFACES
        </button>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-3 py-1.5 text-xs rounded-md transition-all cursor-pointer ${
                activeSection === id
                  ? "text-site-accent bg-site-accent-dim font-medium"
                  : "text-site-text-muted hover:text-site-text-secondary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Theme squircles + mobile toggle */}
        <div className="flex items-center gap-1">
          {/* Theme squircles — hidden on small phones, visible on sm+ */}
          <ThemeDots theme={theme} setTheme={setTheme} className="hidden sm:flex" />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2.5 text-site-text-muted hover:text-site-text transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-site-bg/95 backdrop-blur-md border-b border-site-border px-4 pb-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-4 py-3 text-sm rounded-md text-left transition-all cursor-pointer ${
                  activeSection === id
                    ? "text-site-accent bg-site-accent-dim font-medium"
                    : "text-site-text-muted hover:text-site-text-secondary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Theme squircles in mobile menu (visible on phones where navbar dots are hidden) */}
          <div className="sm:hidden pt-3 mt-3 border-t border-site-border">
            <p className="text-xs text-site-text-muted mb-2 px-1">Theme</p>
            <ThemeDots theme={theme} setTheme={setTheme} className="flex-wrap" />
          </div>
        </div>
      )}
    </nav>
  );
}
