"use client";

import React from "react";
import Image from "next/image";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export function ProfessionalGrowth() {
  return (
    <section
      id="professional-growth"
      aria-label="Professional Growth"
      className="relative w-full bg-white py-[80px] lg:py-[100px] overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(212, 251, 32, 0.25) 0%, transparent 45%),
          radial-gradient(circle at 90% 70%, rgba(0, 67, 255, 0.12) 0%, transparent 40%)
        `,
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* ========================================================================= */}
        {/* Frame 13: Feature 1 - Path to Professional Growth                         */}
        {/* Exact Figma: width: 1258px, height: 552px, gap: 63px, row layout         */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1258px] flex flex-col lg:flex-row items-center justify-between gap-[48px] lg:gap-[63px]">
          {/* Left Text Block (Exact Figma: width: 574px, height: 404px, gap: 40px) */}
          <div className="w-full lg:max-w-[574px] flex flex-col items-start gap-[32px] lg:gap-[40px]">
            {/* Heading M */}
            <h2
              className="text-[34px] sm:text-[40px] lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[120%]"
              style={{
                fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
              }}
            >
              Your Path to Professional Growth Starts Here!
            </h2>

            {/* Body L Description (width: 477px) */}
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

            {/* Stats Row: 12K Students | 70+ Courses | 16 Creators */}
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

          {/* Right Illustration Composition (Exact Figma: 577px x 540px) */}
          <div className="relative w-full max-w-[577px] h-[460px] sm:h-[540px] flex items-center justify-center shrink-0">
            <Image
              src="/images/feature-growth-illustration.png"
              alt="Course card, learning progress 55%, and student holding a laptop"
              width={584}
              height={541}
              priority
              className="w-full h-full object-contain pointer-events-none select-none drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalGrowth;
