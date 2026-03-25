"use client";

import { useI18n } from "../I18nProvider";
import { useSections } from "../SectionsProvider";
import { useAnimateIn } from "../hooks/useAnimateIn";

export default function News() {
  const { t, locale } = useI18n();
  const { sections } = useSections();
  const { ref, visible } = useAnimateIn();

  return (
    <section id="news" className="py-24 bg-muted">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 animate-fade-up ${visible ? "visible" : ""}`}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            {t("newsLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground leading-tight mb-4">
            {t("newsTitle1")}{" "}
            <span className="text-primary">{t("newsTitle2")}</span>
          </h2>
          <p className="text-muted-dark leading-relaxed">{t("newsIntro")}</p>
        </div>

        {/* Article cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {sections.news.map((article, i) => {
            const text = article[locale];
            return (
              <article
                key={article.id}
                className={`group bg-surface rounded-2xl border border-border shadow-md hover:shadow-lg transition-all overflow-hidden animate-fade-up delay-${i + 1} ${visible ? "visible" : ""}`}
              >
                {/* Colored top bar */}
                <div className="h-1.5 bg-primary" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${article.color}`}
                    >
                      {text.tag}
                    </span>
                    <span className="text-xs text-muted-dark">{text.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground font-sans mb-2 leading-snug group-hover:text-primary transition-colors">
                    {text.title}
                  </h3>
                  <p className="text-sm text-muted-dark leading-relaxed mb-4">
                    {text.desc}
                  </p>
                  <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t("newsReadMore")}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
