import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { ExploreCourses } from "@/components/sections/ExploreCourses";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { ProfessionalGrowth } from "@/components/sections/ProfessionalGrowth";
import { CTASection } from "@/components/sections/CTASection";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. Navbar transparent over Hero */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Partner Logos Ribbon (Frame 2) */}
      <PartnerLogos />

      {/* 4. Explore Courses (Frame 3, Tab_Categories, Frame 8) */}
      <ExploreCourses />

      {/* 5. Learning Paths (Frame 9 & Frame 10) */}
      <LearningPaths />

      {/* 6. Professional Growth & Course Features (Frame 13) */}
      <ProfessionalGrowth />

      {/* 7. Call To Action (CTA_Frame) */}
      <CTASection />

      {/* 8. Testimonials (Testimonials_Frame) */}
      <Testimonials />
    </div>
  );
}
