import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modules from "./components/sections/Modules";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Pricing from "./components/Pricing/Pricing";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Modules />
        <WhyChoose />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;