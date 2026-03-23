"use client";

import { useI18n } from "./I18nProvider";
import { useAnimateIn } from "./useAnimateIn";

const cases = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function BeforeAfter() {
  const { t } = useI18n();
  const { ref, visible } = useAnimateIn();

  return (
    <section id="before-after" className="py-24 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 animate-fade-up ${visible ? "visible" : ""}`}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            {t("beforeAfterLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground leading-tight mb-4">
            {t("beforeAfterTitle1")}{" "}
            <span className="text-primary">{t("beforeAfterTitle2")}</span>
          </h2>
          <p className="text-muted-dark leading-relaxed">
            {t("beforeAfterIntro")}
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cases.map((c, i) => (
            <div
              key={c.id}
              className={`bg-surface rounded-2xl border border-border/50 overflow-hidden shadow-sm animate-fade-up delay-${i + 1} ${visible ? "visible" : ""}`}
            >
              {/* Before */}
              <div className="relative">
                <div className="aspect-4/3 bg-muted flex items-center justify-center">
                  <span className="text-sm text-muted-dark">
                    {t("beforeAfterComingSoon")}
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide bg-foreground/80 text-background">
                  {t("beforeAfterBefore")}
                </span>
              </div>
              {/* After */}
              <div className="relative">
                <div className="aspect-4/3 bg-muted flex items-center justify-center">
                  <span className="text-sm text-muted-dark">
                    {t("beforeAfterComingSoon")}
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide bg-primary text-background">
                  {t("beforeAfterAfter")}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-dark">
          {t("beforeAfterDisclaimer")}
        </p>
      </div>
    </section>
  );
}
