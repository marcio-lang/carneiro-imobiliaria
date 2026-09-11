import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { AboutRealtor } from "@/components/AboutRealtor";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { FreeValuation } from "@/components/FreeValuation";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#111111] text-white selection:bg-[#D4AF37] selection:text-[#0D0D0D]">
      {/* Fixed Header / Navbar */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section with Central Logo, Headline, Subheadline, Dual CTA */}
        <Hero />

        {/* 2. Differentials: Por que escolher a Carneiro Inteligência Imobiliária */}
        <Differentials />

        {/* 3. About the Realtor: Quem está por trás da Carneiro */}
        <AboutRealtor />

        {/* 4. Featured Properties Grid + Modal */}
        <FeaturedProperties />

        {/* 5. Free Valuation Form with Zod validation */}
        <FreeValuation />

        {/* 6. Google Reviews 4.9/5 Header + Carousel */}
        <GoogleReviews />

        {/* 7. Highlighted Testimonials */}
        <Testimonials />

        {/* 8. Final Conversion CTA */}
        <FinalCTA />
      </main>

      {/* 9. Complete Footer */}
      <Footer />
    </div>
  );
}
