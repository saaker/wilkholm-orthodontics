"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useI18n } from "./I18nProvider";
import type { Locale } from "@/lib/i18n";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  const navItems = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navInvisalign"), href: "#invisalign" },
    { label: t("navProcess"), href: "#process" },
    { label: t("navLocations"), href: "#locations" },
    { label: t("navNews"), href: "#news" },
    { label: t("navFaq"), href: "#faq" },
    { label: t("navContact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpg"
            alt="Wikholm Ortodonti"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="text-xl font-serif font-semibold text-foreground tracking-tight">
            {t("brandName")}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-dark hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language switcher */}
          <button
            onClick={() => setLocale(locale === "sv" ? "en" : "sv")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted-dark hover:text-foreground hover:border-primary/30 transition-colors"
            aria-label={
              locale === "sv" ? "Switch to English" : "Byt till svenska"
            }
          >
            <span className="text-base leading-none">
              {locale === "sv" ? "🇬🇧" : "🇸🇪"}
            </span>
            {locale === "sv" ? "EN" : "SV"}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-muted-dark hover:text-foreground"
            aria-label={t("openMenu")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-muted-dark hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
