"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

import { COURSE_CREATION_CHECKLIST } from "@/lib/data/features";

/**
 * CreateManage Section
 * Highlights course creation, publisher benefits, and woman creator illustration.
 */
export function CreateManage() {
  return (
    <section
      id="create-manage"
      aria-label="Create and Manage Courses Easily"
      className="relative w-full bg-white py-[80px] lg:py-[110px] overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 12% 75%, rgba(212, 251, 32, 0.28) 0%, transparent 45%),
          radial-gradient(circle at 88% 85%, rgba(0, 67, 255, 0.14) 0%, transparent 42%)
        `,
      }}
    >
      <Container className="relative z-10 flex flex-col items-center">
        {/* ========================================================================= */}
        {/* Feature 2: 2-Column Split (Girl Composition Left, Text Right)             */}
        {/* Exact Figma Girl Frame: 541px wide x 596px tall                           */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1258px] grid grid-cols-1 lg:grid-cols-2 items-center gap-[48px] lg:gap-[63px]">
          {/* Left Illustration: Girl composition constrained to 541px x 596px */}
          <div className="order-2 lg:order-1 w-full flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[541px] max-h-[596px] aspect-[541/596] flex items-center justify-center shrink-0">
              <Image
                src="/images/feature-manage-illustration.png"
                alt="Woman with headset, revenue cards, and course management dashboard"
                width={541}
                height={596}
                priority
                className="w-full h-full object-contain pointer-events-none select-none drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 541px"
              />
            </div>
          </div>

          {/* Right Text Block */}
          <div className="order-1 lg:order-2 w-full max-w-[580px] flex flex-col items-start gap-[32px] lg:gap-[40px]">
            <h2
              className="text-[34px] sm:text-[40px] lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[120%]"
              style={{
                fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
              }}
            >
              Create &amp; Manage Courses Easily.
            </h2>

            <p
              className="w-full max-w-[520px] text-[16px] sm:text-[18px] text-[#4B4C53] font-normal leading-[160%]"
              style={{
                fontFamily: "var(--font-body, 'Satoshi', sans-serif)",
              }}
            >
              <strong className="font-semibold text-[#242528]">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            {/* Checklist with Solid Blue Checkmark Icons */}
            <div className="flex flex-col items-start gap-[16px]">
              {COURSE_CREATION_CHECKLIST.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[16px]">
                  <div
                    className="w-[24px] h-[24px] rounded-full bg-[#0043FF] flex items-center justify-center shrink-0 text-white shadow-xs"
                    aria-hidden="true"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[17px] sm:text-[18px] font-medium text-[#242528] tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CreateManage;
