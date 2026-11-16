import NavBar from "@/components/NavBar";
import OkizaHeroSection from "@/components/OkizaHeroSection";
import CinematicWorkflow from "@/components/CinematicWorkflow";
import PublishStackSection from "@/components/PublishStackSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FullPageDynamicBackground from "@/components/FullPageDynamicBackground";

export default function Home() {
  return (
    <div
      className="bg-[#000000] min-h-screen text-[#ffffff] selection:bg-[#ffffff] selection:text-[#000000] relative"
      data-component="@screens/OkizaLanding.jsx"
    >
      {/* Full-Page Dynamic Canvas Animation Engine */}
      <FullPageDynamicBackground />

      {/* Top sticky navigation bar */}
      <NavBar />

      <main className="relative z-10 flex flex-col w-full">
        {/* Hero Section: Meet Okiza, the AI CMO */}
        <OkizaHeroSection />

        {/* Cinematic Autonomous Workflow Animation */}
        <CinematicWorkflow />

        {/* Step 3: Publish & Stack Flow Architecture */}
        <PublishStackSection />

        {/* Quantifiable ROI and Signal Metrics */}
        <ImpactMetrics />

        {/* The 7 Core Studios / Capabilities (Brand, Competitors, SEO, Creative, Influencer, Strategy, Performance) */}
        <CapabilitiesSection />

        {/* Live Product Dashboard Showcase (app.okiza.ai/overview) */}
        <ProductShowcaseSection />

        {/* In-depth Competitive Intelligence Matrix */}
        <CompetitiveSection />

        {/* Pricing & ROI Tiering */}
        <PricingSection />

        {/* FAQ Knowledge Base */}
        <FAQSection />

        {/* Final Conversion Call To Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
