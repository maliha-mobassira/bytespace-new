import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Container, Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar sits transparently over the Hero */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Partner Logos Ribbon */}
      <PartnerLogos />

      {/* Temporary Test & Verification Section (Easy to replace as sections are added) */}
      <main className="py-16">
        <Container>
          <div className="space-y-12">
            <div className="border-b border-neutral-200 pb-6">
              <span className="text-label-s text-primary-600 font-semibold uppercase tracking-wider">
                ByteSpace Design System
              </span>
              <h2 className="text-heading-m text-neutral-950 mt-2">
                Components & Tokens Verification
              </h2>
              <p className="text-body-m text-neutral-500 mt-1">
                Navbar & Hero sections are live above. Partner logos ribbon is the next section.
              </p>
            </div>

            {/* Buttons Section */}
            <section className="space-y-4">
              <h3 className="text-heading-s text-neutral-900">Button Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg">Primary Large</Button>
                <Button variant="primary" size="md">Search</Button>
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button variant="blue" size="md">Sign In</Button>
                <Button variant="secondary" size="md">Secondary</Button>
                <Button variant="outline" size="md">Outline</Button>
                <Button variant="ghost" size="md">Ghost</Button>
                <Button variant="white" size="md">White Button</Button>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
