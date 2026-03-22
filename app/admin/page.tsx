import AdminPanel from "./AdminPanel";
import { getLocations } from "@/lib/locations";

export const dynamic = "force-static";

export const metadata = {
  title: "Admin — Wikholm Ortodonti",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const locations = await getLocations();
  return <AdminPanel initialLocations={locations} />;
}
