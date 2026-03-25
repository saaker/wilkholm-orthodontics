"use client";

import { Icon } from "@/lib/icons";
import type {
  ServiceItem,
  AlignerItem,
  AdvantageItem,
  ProcessItem,
  DMItem,
  FAQItem,
  MythItem,
  NewsItem,
} from "@/lib/sectionsDefaults";

export function ServiceCardPreview({
  item,
  locale,
}: {
  item: ServiceItem;
  locale: "sv" | "en";
}) {
  const text = item[locale];
  return (
    <div
      className={`bg-surface rounded-2xl p-6 border ${item.highlight ? "border-primary/30 ring-1 ring-primary/10" : "border-border/50"}`}
    >
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary-dark shrink-0">
          <Icon name={item.icon} className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-sm font-semibold">{text.title || "—"}</span>
            {text.tag && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-primary/10 text-primary-dark">
                {text.tag}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-dark line-clamp-2">
            {text.desc || "—"}
          </p>
          {text.price && (
            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary-dark text-xs font-bold">
              {text.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function AlignerCardPreview({
  item,
  locale,
}: {
  item: AlignerItem;
  locale: "sv" | "en";
}) {
  const text = item[locale];
  return (
    <div className="bg-surface rounded-2xl p-6 border border-border/50">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary-dark shrink-0">
          <Icon name={item.icon} className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <span className="text-sm font-semibold">{text.title || "—"}</span>
          <p className="text-xs text-muted-dark line-clamp-2 mt-1">
            {text.desc || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AdvantageCardPreview({
  item,
  locale,
}: {
  item: AdvantageItem;
  locale: "sv" | "en";
}) {
  const text = item[locale];
  return (
    <div className="flex gap-4 items-start p-4 rounded-xl border border-border/50 bg-surface">
      <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary-dark shrink-0">
        <Icon name="check" className="w-4 h-4" />
      </div>
      <div>
        <span className="text-sm font-semibold">{text.title || "—"}</span>
        <p className="text-xs text-muted-dark line-clamp-2 mt-0.5">
          {text.desc || "—"}
        </p>
      </div>
    </div>
  );
}

export function ProcessCardPreview({
  item,
  index,
  locale,
}: {
  item: ProcessItem;
  index: number;
  locale: "sv" | "en";
}) {
  const text = item[locale];
  return (
    <div className="p-4 rounded-xl border border-border/50 bg-surface">
      <span className="text-3xl font-serif font-bold text-primary/40">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h4 className="text-sm font-semibold mt-1">{text.title || "—"}</h4>
      <p className="text-xs text-muted-dark line-clamp-2 mt-0.5">
        {text.desc || "—"}
      </p>
    </div>
  );
}

export function DMCardPreview({
  item,
  locale,
}: {
  item: DMItem;
  locale: "sv" | "en";
}) {
  const text = item[locale];
  return (
    <div className="flex gap-4 items-start p-4 rounded-xl border border-border/50 bg-surface">
      <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary-dark shrink-0">
        <Icon name={item.icon} className="w-4 h-4" />
      </div>
      <div>
        <span className="text-sm font-semibold">{text.title || "—"}</span>
        <p className="text-xs text-muted-dark line-clamp-2 mt-0.5">
          {text.desc || "—"}
        </p>
      </div>
    </div>
  );
}

export function FAQCardPreview({
  item,
  locale,
}: {
  item: FAQItem;
  locale: "sv" | "en";
}) {
  const text = item[locale];
  return (
    <div className="p-4 rounded-xl border border-border/50 bg-surface">
      <p className="text-sm font-semibold">{text.question || "—"}</p>
      <p className="text-xs text-muted-dark line-clamp-2 mt-1">
        {text.answer || "—"}
      </p>
    </div>
  );
}

export function MythCardPreview({
  item,
  locale,
}: {
  item: MythItem;
  locale: "sv" | "en";
}) {
  const text = item[locale];
  return (
    <div className="p-4 rounded-xl border border-border/50 bg-surface">
      <div className="flex items-start gap-2 mb-1">
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 shrink-0">
          MYT
        </span>
        <p className="text-sm font-semibold">{text.myth || "—"}</p>
      </div>
      <div className="flex items-start gap-2 mt-2">
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 shrink-0">
          SANNING
        </span>
        <p className="text-xs text-muted-dark line-clamp-2">
          {text.truth || "—"}
        </p>
      </div>
    </div>
  );
}

export function NewsCardPreview({
  item,
  locale,
}: {
  item: NewsItem;
  locale: "sv" | "en";
}) {
  const text = item[locale];
  return (
    <div className="rounded-2xl border border-border bg-surface overflow-hidden">
      <div className="h-1 bg-primary" />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${item.color}`}
          >
            {text.tag || "—"}
          </span>
          <span className="text-[10px] text-muted-dark">{text.date}</span>
        </div>
        <p className="text-sm font-semibold">{text.title || "—"}</p>
        <p className="text-xs text-muted-dark line-clamp-2 mt-1">
          {text.desc || "—"}
        </p>
      </div>
    </div>
  );
}

/* Dispatch helper: renders the correct preview for a section key */
export function renderPreview(
  key: string,
  item: Record<string, unknown>,
  i: number,
  locale: "sv" | "en",
) {
  switch (key) {
    case "services":
      return (
        <ServiceCardPreview
          item={item as unknown as ServiceItem}
          locale={locale}
        />
      );
    case "aligners":
      return (
        <AlignerCardPreview
          item={item as unknown as AlignerItem}
          locale={locale}
        />
      );
    case "advantages":
      return (
        <AdvantageCardPreview
          item={item as unknown as AdvantageItem}
          locale={locale}
        />
      );
    case "process":
      return (
        <ProcessCardPreview
          item={item as unknown as ProcessItem}
          index={i}
          locale={locale}
        />
      );
    case "dm":
      return <DMCardPreview item={item as unknown as DMItem} locale={locale} />;
    case "faq":
      return (
        <FAQCardPreview item={item as unknown as FAQItem} locale={locale} />
      );
    case "myths":
      return (
        <MythCardPreview item={item as unknown as MythItem} locale={locale} />
      );
    case "news":
      return (
        <NewsCardPreview item={item as unknown as NewsItem} locale={locale} />
      );
    default:
      return null;
  }
}
