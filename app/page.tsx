import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/for-dentists/About";
import Services from "./components/for-dentists/Services";
import Advantages from "./components/for-dentists/Advantages";
import News from "./components/for-dentists/News";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Advantages />
        <News />
      </main>
      <Footer />
    </>
  );
}
