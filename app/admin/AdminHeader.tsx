"use client";

import Link from "next/link";

type Tab = "dentist" | "patient" | "images";

export function AdminHeader({
  tab,
  setTab,
}: {
  tab: Tab;
  setTab: (t: Tab) => void;
}) {
  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-serif font-semibold">Adminpanel</h1>
          <p className="text-sm text-muted-dark">
            Hantera innehåll, kliniker och bilder
          </p>
        </div>
        <Link
          href="/"
          className="text-sm text-primary hover:text-primary-dark font-medium"
        >
          &larr; Tillbaka till sidan
        </Link>
      </div>
      <div className="max-w-6xl mx-auto px-6 flex gap-1">
        {(["dentist", "patient", "images"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${tab === t ? "bg-muted text-foreground" : "text-muted-dark hover:text-foreground"}`}
          >
            {t === "dentist"
              ? "För tandläkare"
              : t === "patient"
                ? "För patienter"
                : "Bilder"}
          </button>
        ))}
      </div>
    </div>
  );
}
