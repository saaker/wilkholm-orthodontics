import type { TranslationKey } from "@/lib/i18n";
import type { SectionsData } from "@/lib/sectionsDefaults";

/* ═══════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════ */
export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
  website?: string;
  description: string;
}

export const emptyLocation: Omit<Location, "id"> = {
  name: "",
  address: "",
  phone: "",
  hours: "",
  lat: 59.33,
  lng: 18.07,
  website: "",
  description: "",
};

export type ContentOverrides = {
  sv: Record<string, string>;
  en: Record<string, string>;
};

/* ═══════════════════════════════════════════════════
   Content section definitions
   ═══════════════════════════════════════════════════ */
export interface SectionField {
  key: TranslationKey;
  label: string;
  multiline?: boolean;
  large?: boolean;
  image?: boolean;
}

export interface ContentSection {
  id: string;
  title: string;
  fields: SectionField[];
}

export const dentistContentSections: ContentSection[] = [
  {
    id: "hero",
    title: "Hero",
    fields: [
      { key: "heroBadge", label: "Badge" },
      { key: "heroTitle1", label: "Titel rad 1" },
      { key: "heroTitle2", label: "Titel rad 2" },
      { key: "heroSubtitle", label: "Undertext", multiline: true },
      { key: "heroCta", label: "CTA-knapp" },
      { key: "heroSecondary", label: "Sekundär länk" },
    ],
  },
  {
    id: "about",
    title: "Om mig",
    fields: [
      { key: "aboutImage", label: "Bild (URL)", image: true },
      { key: "aboutLabel", label: "Etikett" },
      { key: "aboutTitle1", label: "Titel rad 1" },
      { key: "aboutTitle2", label: "Titel rad 2" },
      {
        key: "aboutBio",
        label: "Beskrivning",
        multiline: true,
        large: true,
      },
      { key: "bragTitle1", label: "Höjdpunkt 1 — beskrivning" },
      { key: "bragValue1", label: "Höjdpunkt 1 — värde" },
      { key: "bragTitle2", label: "Höjdpunkt 2 — beskrivning" },
      { key: "bragValue2", label: "Höjdpunkt 2 — värde" },
      { key: "bragTitle3", label: "Höjdpunkt 3 — beskrivning" },
      { key: "bragValue3", label: "Höjdpunkt 3 — värde" },
    ],
  },
  {
    id: "services-header",
    title: "Tjänster (rubrik)",
    fields: [
      { key: "servicesLabel", label: "Etikett" },
      { key: "servicesTitle1", label: "Titel rad 1" },
      { key: "servicesTitle2", label: "Titel rad 2" },
      { key: "servicesIntro", label: "Intro", multiline: true },
    ],
  },
  {
    id: "advantages-header",
    title: "Fördelar (rubrik)",
    fields: [
      { key: "advantagesLabel", label: "Etikett" },
      { key: "advantagesTitle1", label: "Titel rad 1" },
      { key: "advantagesTitle2", label: "Titel rad 2" },
      { key: "advantagesIntro", label: "Intro", multiline: true },
    ],
  },
  {
    id: "news-header",
    title: "Nyheter (rubrik)",
    fields: [
      { key: "newsLabel", label: "Etikett" },
      { key: "newsTitle1", label: "Titel rad 1" },
      { key: "newsTitle2", label: "Titel rad 2" },
      { key: "newsIntro", label: "Intro", multiline: true },
    ],
  },
  {
    id: "brand",
    title: "Varumärke & Footer",
    fields: [
      { key: "brandName", label: "Varumärkesnamn" },
      { key: "brandTagline", label: "Tagline" },
      { key: "footerDesc", label: "Footer beskrivning", multiline: true },
      { key: "footerQuickLinks", label: "Snabblänkar-rubrik" },
      { key: "footerContact", label: "Kontakt-rubrik" },
      { key: "footerCopyright", label: "Copyright" },
      { key: "linkedinPersonal", label: "LinkedIn (personlig)" },
      { key: "linkedinCompany", label: "LinkedIn (företag)" },
    ],
  },
];

export const patientContentSections: ContentSection[] = [
  {
    id: "patientHero",
    title: "Hero",
    fields: [
      { key: "patientHeroBadge", label: "Badge" },
      { key: "patientHeroTitle1", label: "Titel rad 1" },
      { key: "patientHeroTitle2", label: "Titel rad 2" },
      { key: "patientHeroSubtitle", label: "Undertext", multiline: true },
      { key: "patientHeroCta", label: "CTA-knapp" },
      { key: "patientHeroSecondary", label: "Sekundär länk" },
    ],
  },
  {
    id: "aligners-header",
    title: "Aligners (rubrik)",
    fields: [
      { key: "alignersLabel", label: "Etikett" },
      { key: "alignersTitle1", label: "Titel rad 1" },
      { key: "alignersTitle2", label: "Titel rad 2" },
      { key: "alignersIntro", label: "Intro", multiline: true },
      { key: "alignersWhat", label: "Underrubrik" },
      { key: "alignersWhatDesc", label: "Underbeskrivning", multiline: true },
    ],
  },
  {
    id: "myths-header",
    title: "Myter & Sanningar (rubrik)",
    fields: [
      { key: "mythsLabel", label: "Etikett" },
      { key: "mythsTitle1", label: "Titel rad 1" },
      { key: "mythsTitle2", label: "Titel rad 2" },
      { key: "mythsIntro", label: "Intro", multiline: true },
    ],
  },
  {
    id: "process-header",
    title: "Process (rubrik)",
    fields: [
      { key: "processLabel", label: "Etikett" },
      { key: "processTitle1", label: "Titel rad 1" },
      { key: "processTitle2", label: "Titel rad 2" },
    ],
  },
  {
    id: "dm-header",
    title: "Dental Monitoring (rubrik)",
    fields: [
      { key: "dmLabel", label: "Etikett" },
      { key: "dmTitle1", label: "Titel rad 1" },
      { key: "dmTitle2", label: "Titel rad 2" },
      { key: "dmIntro", label: "Intro", multiline: true },
    ],
  },
  {
    id: "beforeAfter",
    title: "Före & Efter",
    fields: [
      { key: "beforeAfterLabel", label: "Etikett" },
      { key: "beforeAfterTitle1", label: "Titel rad 1" },
      { key: "beforeAfterTitle2", label: "Titel rad 2" },
      { key: "beforeAfterIntro", label: "Intro", multiline: true },
      { key: "beforeAfterBefore", label: "Före-etikett" },
      { key: "beforeAfterAfter", label: "Efter-etikett" },
      { key: "beforeAfterDisclaimer", label: "Disclaimer", multiline: true },
    ],
  },
  {
    id: "faq-header",
    title: "FAQ (rubrik)",
    fields: [
      { key: "faqLabel", label: "Etikett" },
      { key: "faqTitle1", label: "Titel rad 1" },
      { key: "faqTitle2", label: "Titel rad 2" },
      { key: "faqIntro", label: "Intro", multiline: true },
    ],
  },
];

/* ═══════════════════════════════════════════════════
   Sidebar definitions
   ═══════════════════════════════════════════════════ */
export type SidebarItem =
  | { type: "content"; sectionId: string; title: string }
  | { type: "cards"; sectionKey: keyof SectionsData; title: string }
  | { type: "locations"; title: string };

export const dentistSidebar: SidebarItem[] = [
  { type: "content", sectionId: "hero", title: "Hero" },
  { type: "content", sectionId: "about", title: "Om mig" },
  {
    type: "content",
    sectionId: "services-header",
    title: "Tjänster (rubrik)",
  },
  { type: "cards", sectionKey: "services", title: "Tjänster (kort)" },
  {
    type: "content",
    sectionId: "advantages-header",
    title: "Fördelar (rubrik)",
  },
  { type: "cards", sectionKey: "advantages", title: "Fördelar (kort)" },
  { type: "content", sectionId: "news-header", title: "Nyheter (rubrik)" },
  { type: "cards", sectionKey: "news", title: "Nyheter (kort)" },
  { type: "content", sectionId: "brand", title: "Varumärke & Footer" },
];

export const patientSidebar: SidebarItem[] = [
  { type: "content", sectionId: "patientHero", title: "Hero" },
  {
    type: "content",
    sectionId: "aligners-header",
    title: "Aligners (rubrik)",
  },
  { type: "cards", sectionKey: "aligners", title: "Aligners (kort)" },
  { type: "content", sectionId: "myths-header", title: "Myter (rubrik)" },
  { type: "cards", sectionKey: "myths", title: "Myter (kort)" },
  { type: "content", sectionId: "process-header", title: "Process (rubrik)" },
  { type: "cards", sectionKey: "process", title: "Process (steg)" },
  { type: "content", sectionId: "dm-header", title: "DM (rubrik)" },
  { type: "cards", sectionKey: "dm", title: "DM (kort)" },
  { type: "content", sectionId: "beforeAfter", title: "Före & Efter" },
  { type: "locations", title: "Kliniker" },
  { type: "content", sectionId: "faq-header", title: "FAQ (rubrik)" },
  { type: "cards", sectionKey: "faq", title: "FAQ (kort)" },
];

/* Shared input class */
export const inputCls =
  "w-full px-4 py-2.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm";
