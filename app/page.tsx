import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Invisalign from "./components/Invisalign";
import ClearCorrect from "./components/ClearCorrect";
import Process from "./components/Process";
import Advantages from "./components/Advantages";
import Locations from "./components/Locations";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { getLocations } from "@/lib/locations";

export default async function Home() {
  const locations = await getLocations();

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Invisalign />
        <ClearCorrect />
        <Process />
        <Advantages />
        <Locations locations={locations} />
        <News />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
