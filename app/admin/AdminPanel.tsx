"use client";

import { useEffect, useState } from "react";

import { type Location, dentistSidebar, patientSidebar } from "./adminTypes";
import { useAdminAuth } from "./hooks/useAdminAuth";
import { useContentEditor } from "./hooks/useContentEditor";
import { useImageManager } from "./hooks/useImageManager";
import { useLocationEditor } from "./hooks/useLocationEditor";
import { AdminHeader } from "./AdminHeader";
import { LoginScreen } from "./LoginScreen";
import { CardsEditor } from "./CardsEditor";
import { ContentEditor } from "./ContentEditor";
import { LocationsEditor } from "./LocationsEditor";
import { ImageManager } from "./ImageManager";

/* ═══════════════════════════════════════════════════
   Main Admin Panel
   ═══════════════════════════════════════════════════ */
interface AdminPanelProps {
  initialLocations?: Location[];
}

export default function AdminPanel({ initialLocations = [] }: AdminPanelProps) {
  /* ── Auth ── */
  const auth = useAdminAuth();

  /* ── Navigation ── */
  const [tab, setTab] = useState<"dentist" | "patient" | "images">("dentist");
  const [activeIdx, setActiveIdx] = useState(0);

  const sidebar =
    tab === "images" ? [] : tab === "dentist" ? dentistSidebar : patientSidebar;
  const activeItem = tab !== "images" ? sidebar[activeIdx] : undefined;

  /* ── Hooks ── */
  const content = useContentEditor(
    activeItem,
    auth.authHeaders,
    auth.showMessage,
  );

  const images = useImageManager(
    tab,
    auth.secret,
    auth.readOnly,
    auth.showMessage,
  );

  const loc = useLocationEditor(
    initialLocations,
    auth.authHeaders,
    auth.showMessage,
    auth.setReadOnly,
  );

  /* ── Data fetching on auth ── */
  useEffect(() => {
    if (auth.authenticated) {
      loc.fetchLocations();
      content.fetchContent();
      content.fetchSections();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.authenticated]);

  // Reset active idx when switching tab
  useEffect(() => {
    setActiveIdx(0);
    content.setEditingCard(null);
  }, [tab]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ═══════════════════════════════════════════════════
     Render
     ═══════════════════════════════════════════════════ */
  if (!auth.authenticated) {
    return (
      <LoginScreen
        secret={auth.secret}
        setSecret={auth.setSecret}
        onSubmit={auth.handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <AdminHeader tab={tab} setTab={setTab} />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Messages */}
        {auth.readOnly && (
          <div className="mb-6 px-4 py-3 rounded-xl text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200">
            Skrivskyddat läge — redigering kräver lokal utvecklingsmiljö (
            <code>npm run dev</code>).
          </div>
        )}
        {auth.message && (
          <div
            className={`mb-6 px-4 py-3 rounded-xl text-sm font-medium ${auth.message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
          >
            {auth.message.text}
          </div>
        )}

        {tab === "images" ? (
          <ImageManager
            folders={images.imageFolders}
            activeFolder={images.activeFolder}
            setActiveFolder={images.setActiveFolder}
            images={images.folderImages}
            uploading={images.uploading}
            dragOver={images.dragOver}
            setDragOver={images.setDragOver}
            onUpload={images.handleImageUpload}
            onDelete={images.handleImageDelete}
            readOnly={auth.readOnly}
          />
        ) : (
          <div className="grid lg:grid-cols-[220px_1fr] gap-8">
            {/* ── Sidebar ── */}
            <div className="space-y-1">
              {sidebar.map((item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIdx(i);
                    content.setEditingCard(null);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeIdx === i ? "bg-primary/10 text-primary font-medium" : "text-muted-dark hover:bg-muted hover:text-foreground"}`}
                >
                  {item.type === "cards"
                    ? `📋 ${item.title}`
                    : item.type === "locations"
                      ? `📍 ${item.title}`
                      : item.title}
                </button>
              ))}
            </div>

            {/* ── Main content area ── */}
            <div>
              {activeItem?.type === "locations" ? (
                <LocationsEditor
                  locations={loc.locations}
                  editing={loc.editing}
                  form={loc.locForm}
                  setForm={loc.setLocForm}
                  onSave={loc.handleLocSave}
                  onDelete={loc.handleLocDelete}
                  onEdit={loc.startEdit}
                  onCancel={loc.cancelEdit}
                  onGeocode={loc.geocodeAddress}
                  loading={loc.loading}
                  geocoding={loc.geocoding}
                  readOnly={auth.readOnly}
                />
              ) : activeItem?.type === "cards" ? (
                <div className="bg-surface rounded-2xl shadow-sm border border-border p-6">
                  <h2 className="text-lg font-semibold font-sans mb-4">
                    {activeItem.title}
                  </h2>
                  <fieldset
                    disabled={auth.readOnly}
                    className={auth.readOnly ? "opacity-60" : ""}
                  >
                    <CardsEditor
                      sectionKey={activeItem.sectionKey}
                      sectionsData={content.sectionsData}
                      setSectionsData={content.setSectionsData}
                      editingCard={content.editingCard}
                      setEditingCard={content.setEditingCard}
                      contentLocale={content.contentLocale}
                      setContentLocale={content.setContentLocale}
                      saving={content.saving}
                      readOnly={auth.readOnly}
                      onSave={content.handleSectionsSave}
                    />
                  </fieldset>
                </div>
              ) : activeItem?.type === "content" ? (
                <ContentEditor
                  sectionId={activeItem.sectionId}
                  locale={content.contentLocale}
                  setLocale={content.setContentLocale}
                  draft={content.draft}
                  onChange={content.handleFieldChange}
                  onSave={content.handleContentSave}
                  onReset={content.resetDraft}
                  saving={content.saving}
                  readOnly={auth.readOnly}
                />
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
