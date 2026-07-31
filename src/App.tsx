import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Modules from "./components/sections/Modules";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Indicators from "./components/Indicators/Indicators";
import Workflow from "./components/Workflow/Workflow";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import Stats from "./components/Stats/Stats";
import Results from "./components/Results/Results";
import WhatsAppButton from "./components/WhatsAppButton";




function App() {

  return (
<>
  <Header />
  <Hero />
  <Modules />
  <Features />
    <Indicators />
    <Results />
      <Workflow />
      <WhyChoose />
      <Stats />
  <Pricing />
  <FinalCTA />
  <Footer />
  <WhatsAppButton />
</>
  );

}

export default App;