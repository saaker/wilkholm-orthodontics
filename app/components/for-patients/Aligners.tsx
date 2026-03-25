"use client";

import { useI18n } from "../I18nProvider";
import { useSections } from "../SectionsProvider";
import { useAnimateIn } from "../hooks/useAnimateIn";
import { Icon } from "@/lib/icons";

export default function Aligners() {
  const { t, locale } = useI18n();
  const { sections } = useSections();
  const { ref, visible } = useAnimateIn();

  return (
    <section id="aligners" className="py-24 bg-muted">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 animate-fade-up ${visible ? "visible" : ""}`}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            {t("alignersLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground leading-tight mb-4">
            {t("alignersTitle1")}{" "}
            <span className="text-primary">{t("alignersTitle2")}</span>
          </h2>
          <p className="text-muted-dark leading-relaxed">
            {t("alignersIntro")}
          </p>
        </div>

        {/* Educational intro card */}
        <div
          className={`bg-surface rounded-2xl p-8 sm:p-10 border border-border/50 shadow-sm mb-12 animate-fade-up delay-1 ${visible ? "visible" : ""}`}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-foreground font-sans mb-3">
            {t("alignersWhat")}
          </h3>
          <p className="text-muted-dark leading-relaxed">
            {t("alignersWhatDesc")}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.aligners.map((benefit, i) => {
            const text = benefit[locale];
            return (
              <div
                key={benefit.id}
                className={`bg-surface rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50 animate-fade-up delay-${Math.min(i + 1, 4)} ${visible ? "visible" : ""}`}
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary-dark shrink-0">
                    <Icon name={benefit.icon} className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground font-sans mb-2">
                      {text.title}
                    </h3>
                    <p className="text-sm text-muted-dark leading-relaxed">
                      {text.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA within section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-surface border border-border/50 shadow-sm">
            <div className="text-left">
              <p className="font-semibold text-foreground">{t("ctaReady")}</p>
              <p className="text-sm text-muted-dark">{t("ctaBook")}</p>
            </div>
            <a
              href="#locations"
              className="px-6 py-3 rounded-full bg-[#96692A] text-[#FDFDF8] text-sm font-medium hover:bg-[#7d5623] transition-colors whitespace-nowrap"
            >
              {t("ctaViewClinics")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
