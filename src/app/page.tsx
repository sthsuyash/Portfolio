import About from "./components/AboutSection/About";
import Hero from "./components/HeroSection/Hero";
import Services from "./components/ServicesSection/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services/>
    </main>
  );
}
