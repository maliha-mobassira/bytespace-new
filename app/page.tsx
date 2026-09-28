import { Navbar } from "@/components/layout/Navbar";
import { Container, Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar sitting transparently on top of hero/header */}
      <Navbar />

      {/* TEMPORARY BLUE BLOCK (primary-800) TO TEST NAVBAR - EASY TO DELETE WHEN BUILDING HERO */}
      <div className="relative w-full h-[240px] bg-primary-800 flex items-end pb-6">
        <Container>
          <p className="text-white/60 text-label-s">
            Temporary blue header block (bg-primary-800) for Navbar visual verification
          </p>
        </Container>
      </div>
      {/* END TEMPORARY BLUE BLOCK */}

      {/* Main Page Content */}
      <main className="py-12">
        <Container>
          <div className="space-y-12">
            {/* Header */}
            <div className="border-b border-neutral-200 pb-6">
              <span className="text-label-s text-primary-600 font-semibold uppercase tracking-wider">
                ByteSpace Design System
              </span>
              <h1 className="text-heading-m text-neutral-950 mt-2">
                Temporary Test & Verification Page
              </h1>
              <p className="text-body-m text-neutral-500 mt-1">
                Validating Navbar, Container, Button variants, Typography utilities, and Color tokens.
              </p>
            </div>

            {/* Buttons Section */}
            <section className="space-y-4">
              <h2 className="text-heading-s text-neutral-900">Buttons</h2>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg">
                  Primary Large
                </Button>
                <Button variant="primary" size="md">
                  Search
                </Button>
                <Button variant="primary" size="sm">
                  Primary Small
                </Button>
                <Button variant="blue" size="md">
                  Sign In
                </Button>
                <Button variant="secondary" size="md">
                  Secondary
                </Button>
                <Button variant="outline" size="md">
                  Outline
                </Button>
                <Button variant="ghost" size="md">
                  Ghost
                </Button>
                <Button variant="white" size="md">
                  White Button
                </Button>
                <Button variant="primary" size="md" disabled>
                  Disabled
                </Button>
              </div>
            </section>

            {/* Typography Section */}
            <section className="space-y-4">
              <h2 className="text-heading-s text-neutral-900">Typography Scale</h2>
              <div className="space-y-3 rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
                <p className="text-heading-l text-neutral-950">
                  Heading L (72px Poppins 600)
                </p>
                <p className="text-heading-m text-neutral-950">
                  Heading M (44px Poppins 600)
                </p>
                <p className="text-heading-s text-neutral-950">
                  Heading S (36px Poppins 600)
                </p>
                <p className="text-heading-xs text-neutral-950">
                  Heading XS (24px Poppins 600)
                </p>
                <p className="text-body-l text-neutral-700">
                  Body L (18px Satoshi 400) - Learn with expert tutors anywhere and anytime.
                </p>
                <p className="text-body-m text-neutral-700">
                  Body M (16px Satoshi 400) - Get access to hundreds of courses available today.
                </p>
                <p className="text-body-s text-neutral-600">
                  Body S (14px Satoshi 400) - Supporting descriptive text across components.
                </p>
                <p className="text-label-l text-neutral-900">
                  Label L (18px Satoshi 500)
                </p>
                <p className="text-label-m text-neutral-900">
                  Label M (16px Satoshi 500)
                </p>
                <p className="text-label-s text-neutral-900">
                  Label S (14px Satoshi 500)
                </p>
              </div>
            </section>

            {/* Color Tokens Palette Preview */}
            <section className="space-y-4">
              <h2 className="text-heading-s text-neutral-900">Color Tokens</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-label-s text-neutral-600 mb-1">Primary (Blue)</p>
                  <div className="grid grid-cols-11 gap-2 text-center text-[10px]">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                      (step) => (
                        <div
                          key={step}
                          className={`h-12 rounded flex items-center justify-center font-medium ${
                            step >= 500 ? "text-white" : "text-neutral-900"
                          }`}
                          style={{ backgroundColor: `var(--color-primary-${step})` }}
                        >
                          {step}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-label-s text-neutral-600 mb-1">Secondary (Lime)</p>
                  <div className="grid grid-cols-11 gap-2 text-center text-[10px]">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                      (step) => (
                        <div
                          key={step}
                          className={`h-12 rounded flex items-center justify-center font-medium ${
                            step >= 700 ? "text-white" : "text-neutral-950"
                          }`}
                          style={{ backgroundColor: `var(--color-secondary-${step})` }}
                        >
                          {step}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-label-s text-neutral-600 mb-1">Neutral</p>
                  <div className="grid grid-cols-11 gap-2 text-center text-[10px]">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                      (step) => (
                        <div
                          key={step}
                          className={`h-12 rounded flex items-center justify-center font-medium ${
                            step >= 500 ? "text-white" : "text-neutral-950"
                          }`}
                          style={{ backgroundColor: `var(--color-neutral-${step})` }}
                        >
                          {step}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* 12-Column Layout Grid Demo */}
            <section className="space-y-4">
              <h2 className="text-heading-s text-neutral-900">
                12-Column Grid (120px Margin, 40px Gutter)
              </h2>
              <div className="grid grid-cols-12 gap-[40px] bg-neutral-100 p-4 rounded-xl">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-secondary-300/60 border border-secondary-600 text-neutral-900 text-center py-6 rounded text-label-s"
                  >
                    Col {i + 1}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
