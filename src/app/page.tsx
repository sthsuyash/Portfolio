import About from "./components/AboutSection/About";
import Cta from "./components/CTA/Cta";
import Hero from "./components/HeroSection/Hero";
import Services from "./components/ServicesSection/Services";
import Work from "./components/Work/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}
