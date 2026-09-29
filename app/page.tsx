import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  LogoStrip,
  Discover,
  LearningPaths,
  ProfessionalGrowth,
  CreateManage,
  CreatorCTA,
  Testimonials,
} from "@/components/sections";

/**
 * ByteSpace Landing Page
 * Composes all landing page sections in logical presentation hierarchy.
 */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Partner Logos Ribbon (LogoStrip) */}
      <LogoStrip />

      {/* 4. Discover Courses (Categories & Course Cards) */}
      <Discover />

      {/* 5. Learning Paths */}
      <LearningPaths />

      {/* 6. Professional Growth Feature */}
      <ProfessionalGrowth />

      {/* 7. Create & Manage Courses Feature */}
      <CreateManage />

      {/* 8. Call To Action (CreatorCTA) */}
      <CreatorCTA />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
