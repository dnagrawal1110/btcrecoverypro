import HeroSection from "@/components/sections/HeroSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import IsThisYouSection from "@/components/sections/IsThisYouSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import AboutSection from "@/components/sections/AboutSection";
import TrustedNetworkSection from "@/components/sections/TrustedNetworkSection";
import LegalSection from "@/components/sections/LegalSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CaseStudiesSection />
      <IsThisYouSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <AboutSection />
      <TrustedNetworkSection />
      <LegalSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default Index;
