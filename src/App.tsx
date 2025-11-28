import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { OurWork } from "./components/OurWork";
import { Services } from "./components/Services";
import { SolutionsHub } from "./components/SolutionsHub";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <Navigation />
      <Hero />
      <AboutUs />
      <OurWork />
      <Services />
      <SolutionsHub />
      <Contact />
      <Footer />
    </div>
  );
}
