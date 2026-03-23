"use client";

import { useI18n } from "./I18nProvider";
import { useAnimateIn } from "./useAnimateIn";
import type { TranslationKey } from "@/lib/i18n";

const features: {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: React.ReactNode;
}[] = [
  {
    titleKey: "dmFeature1Title",
    descKey: "dmFeature1Desc",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    titleKey: "dmFeature2Title",
    descKey: "dmFeature2Desc",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    ),
  },
  {
    titleKey: "dmFeature3Title",
    descKey: "dmFeature3Desc",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    titleKey: "dmFeature4Title",
    descKey: "dmFeature4Desc",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
];

export default function DentalMonitoring() {
  const { t } = useI18n();
  const { ref, visible } = useAnimateIn();

  return (
    <section id="dental-monitoring" className="py-24 bg-muted">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: sticky header */}
          <div
            className={`md:pt-[18%] md:sticky md:top-30 text-center md:text-left animate-fade-up ${visible ? "visible" : ""}`}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              {t("dmLabel")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground leading-tight mb-4">
              {t("dmTitle1")}{" "}
              <span className="text-primary">{t("dmTitle2")}</span>
            </h2>
            <p className="text-muted-dark leading-relaxed">{t("dmIntro")}</p>
          </div>

          {/* Right: feature items */}
          <div className="flex flex-col gap-8">
            {features.map((feat, i) => (
              <div
                key={t(feat.titleKey)}
                className={`flex gap-5 items-start animate-fade-up delay-${i + 1} ${visible ? "visible" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-dark shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-[1.05rem] font-semibold text-foreground font-sans mb-1">
                    {t(feat.titleKey)}
                  </h4>
                  <p className="text-[0.9rem] text-muted-dark leading-relaxed">
                    {t(feat.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
