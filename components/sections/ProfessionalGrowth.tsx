"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

/**
 * ProfessionalGrowth Section
 * Highlights career progression features, metrics/statistics, and boy student illustration.
 */
export function ProfessionalGrowth() {
  return (
    <section
      id="professional-growth"
      aria-label="Professional Growth"
      className="relative w-full bg-white py-[80px] lg:py-[110px] overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 25%, rgba(212, 251, 32, 0.25) 0%, transparent 45%),
          radial-gradient(circle at 90% 40%, rgba(0, 67, 255, 0.12) 0%, transparent 40%)
        `,
      }}
    >
      <Container className="relative z-10 flex flex-col items-center">
        {/* ========================================================================= */}
        {/* Frame 13: 2-Column Split (Text Left, Boy Composition Right)               */}
        {/* Exact Figma Boy Frame: 621px wide x 552px tall                            */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1258px] grid grid-cols-1 lg:grid-cols-2 items-center gap-[48px] lg:gap-[63px]">
          {/* Left Text Block */}
          <div className="w-full max-w-[574px] flex flex-col items-start gap-[32px] lg:gap-[40px]">
            <h2
              className="text-[34px] sm:text-[40px] lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[120%]"
              style={{
                fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
              }}
            >
              Your Path to Professional Growth Starts Here!
            </h2>

            <p
              className="w-full max-w-[477px] text-[16px] sm:text-[18px] text-[#4B4C53] font-normal leading-[160%]"
              style={{
                fontFamily: "var(--font-body, 'Satoshi', sans-serif)",
              }}
            >
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-[40px] sm:gap-[56px] pt-[8px]">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <span className="text-[32px] sm:text-[36px] font-bold text-[#0043FF] leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-normal text-[#4B4C53] mt-[8px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration: Boy composition constrained to 621px x 552px */}
          <div className="w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[621px] max-h-[552px] aspect-[621/552] flex items-center justify-center shrink-0">
              <Image
                src="/images/feature-growth-illustration.png"
                alt="Student learning progress and growth illustration"
                width={621}
                height={552}
                priority
                className="w-full h-full object-contain pointer-events-none select-none drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 621px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProfessionalGrowth;
