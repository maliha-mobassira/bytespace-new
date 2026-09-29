"use client";

import React from "react";
import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";

const HAPPY_STUDENT_AVATARS = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
  "/images/avatar-5.jpg",
  "/images/avatar-6.jpg",
];

/**
 * AuthShowcase Component
 * Renders vector-sharp, pixel-perfect course cards and 3D decorative shapes
 * directly from Figma specs so that all text, avatars, badges, and elements
 * remain razor-sharp with ZERO blurriness at any zoom level on PC.
 */
export function AuthShowcase() {
  return (
    <div className="relative w-full max-w-[700px] h-[520px] sm:h-[620px] lg:h-[780px] select-none pointer-events-none overflow-visible">
      {/* Container with responsive scaling on mobile/tablet and exact 1:1 on desktop */}
      <div className="relative w-[680px] h-[780px] origin-top-left scale-[0.52] min-[420px]:scale-[0.62] sm:scale-[0.78] lg:scale-100">
        {/* ========================================================================= */}
        {/* 1. Lime Torus Ring 3D Shape (behind front card)                           */}
        {/* ========================================================================= */}
        <div
          className="absolute z-[2] w-[130px] h-[130px] transition-transform duration-500 hover:rotate-6"
          style={{ left: "140px", top: "90px" }}
        >
          <Image
            src="/images/shape-ring-lime.png"
            alt=""
            width={130}
            height={130}
            priority
            className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* ========================================================================= */}
        {/* 2. Course_Card_2: Back Card (Build Digital Asset)                        */}
        {/* Figma: width: 373px; height: 384px; left: 122px; top: 394px (rel: 274px) */}
        {/* ========================================================================= */}
        <div
          className="absolute z-[10] w-[373px] h-[384px] bg-white rounded-[24px] border border-[#CED0D3] p-[16px] flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          style={{ left: "122px", top: "274px", boxSizing: "border-box" }}
        >
          {/* Thumbnail with Frosted Badges */}
          <div className="relative w-[341px] h-[195px] rounded-[12px] overflow-hidden shrink-0 bg-[#443131]">
            <Image
              src="/images/course-thumb-2-hd.png"
              alt="Build Digital Asset"
              width={682}
              height={391}
              priority
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle Row: Title, Rating, Instructor */}
          <div className="flex flex-col gap-[4px] mt-[6px]">
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-bold text-[#242528] tracking-tight leading-[1.2]">
                Build Digital Asset
              </h3>
              <div className="flex items-center gap-1 text-[17px] text-[#242528] font-semibold shrink-0">
                <span>4.5</span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="#D4FB20"
                  stroke="#242528"
                  strokeWidth="0.5"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <p className="text-[14px] text-[#666973]">
              by <span className="text-[#0043FF] font-medium">purepearl studio</span>
            </p>
          </div>

          {/* Level Badge and Student Avatars */}
          <div className="flex items-center justify-between pt-[4px]">
            <div className="h-[32px] px-[12px] py-[6px] bg-[#F5F5F6] rounded-[24px] flex items-center gap-[6px] text-[13px] text-[#4B4C53] font-medium">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-[#666973]"
                aria-hidden="true"
              >
                <rect x="2" y="9" width="3" height="5" rx="0.5" />
                <rect x="6.5" y="6" width="3" height="8" rx="0.5" />
                <rect x="11" y="3" width="3" height="11" rx="0.5" />
              </svg>
              <span>Beginner</span>
            </div>
            <AvatarStack countBadge="26+" badgeVariant="dark" />
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-[2px] pt-[2px] pb-[4px]">
            <span className="text-[24px] font-bold text-[#0043FF] leading-none">$25</span>
            <span className="text-[14px] font-normal text-[#666973]">/lifetime</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. White Squiggle 3D Shape (between front card and happy students)        */}
        {/* ========================================================================= */}
        <div
          className="absolute z-[12] w-[135px] h-[155px]"
          style={{ left: "510px", top: "440px" }}
        >
          <Image
            src="/images/cta/cta-wiggle-white.png"
            alt=""
            width={135}
            height={155}
            priority
            className="w-full h-full object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* ========================================================================= */}
        {/* 4. Course_Card_1: Front Card (the Power of Big Data)                     */}
        {/* Figma: width: 373px; height: 384px; left: 233px; top: 305px (rel: 185px) */}
        {/* ========================================================================= */}
        <div
          className="absolute z-[20] w-[373px] h-[384px] bg-white rounded-[24px] border border-[#CED0D3]/60 p-[16px] flex flex-col justify-between shadow-[0_24px_50px_rgba(0,0,0,0.18)]"
          style={{ left: "233px", top: "185px", boxSizing: "border-box" }}
        >
          {/* Thumbnail with Frosted Badges */}
          <div className="relative w-[341px] h-[195px] rounded-[12px] overflow-hidden shrink-0 bg-[#443131]">
            <Image
              src="/images/course-thumb-3-hd.png"
              alt="the Power of Big Data"
              width={682}
              height={391}
              priority
              quality={95}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle Row: Title, Rating, Instructor */}
          <div className="flex flex-col gap-[4px] mt-[6px]">
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-bold text-[#242528] tracking-tight leading-[1.2]">
                the Power of Big Data
              </h3>
              <div className="flex items-center gap-1 text-[17px] text-[#242528] font-semibold shrink-0">
                <span>4.5</span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="#D4FB20"
                  stroke="#242528"
                  strokeWidth="0.5"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <p className="text-[14px] text-[#666973]">
              by <span className="text-[#0043FF] font-medium">purepearl studio</span>
            </p>
          </div>

          {/* Level Badge and Student Avatars */}
          <div className="flex items-center justify-between pt-[4px]">
            <div className="h-[32px] px-[12px] py-[6px] bg-[#F5F5F6] rounded-[24px] flex items-center gap-[6px] text-[13px] text-[#4B4C53] font-medium">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-[#666973]"
                aria-hidden="true"
              >
                <rect x="2" y="9" width="3" height="5" rx="0.5" />
                <rect x="6.5" y="6" width="3" height="8" rx="0.5" />
                <rect x="11" y="3" width="3" height="11" rx="0.5" />
              </svg>
              <span>Beginner</span>
            </div>
            <AvatarStack countBadge="26+" badgeVariant="dark" />
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-[2px] pt-[2px] pb-[4px]">
            <span className="text-[24px] font-bold text-[#0043FF] leading-none">$25</span>
            <span className="text-[14px] font-normal text-[#666973]">/lifetime</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. Happy Students Floating Lime Card                                     */}
        {/* Figma: width: 258px; height: 123px; left: 348px; top: 740px (rel: 620px) */}
        {/* background: #D4FB20; backdrop-filter: blur(10px); border-radius: 16px;   */}
        {/* ========================================================================= */}
        <div
          className="absolute z-[30] w-[258px] h-[123px] bg-[#D4FB20] backdrop-blur-[10px] rounded-[16px] p-[16px] flex flex-col justify-between shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
          style={{ left: "348px", top: "620px", boxSizing: "border-box" }}
        >
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-[16px] font-bold text-[#242528] leading-[120%] tracking-tight">
              Happy Students
            </h4>
            <div className="flex items-center gap-[4px] text-[13px] font-medium text-[#242528]">
              <span className="font-bold">4.5</span>
              <span>(240)</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="#003BE2"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* Overlapping Avatar Row with 2K+ Badge */}
          <div className="flex items-center -space-x-[8px]">
            {HAPPY_STUDENT_AVATARS.map((avatar, idx) => (
              <div
                key={idx}
                className="relative w-[28px] h-[28px] rounded-full border-2 border-[#D4FB20] overflow-hidden bg-neutral-200 shrink-0"
              >
                <Image
                  src={avatar}
                  alt=""
                  fill
                  sizes="28px"
                  quality={90}
                  className="object-cover"
                />
              </div>
            ))}
            <div className="relative w-[28px] h-[28px] rounded-full border-2 border-[#D4FB20] bg-[#242528] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
              2K+
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. Lime 3D Cone / Pyramid (overlapping bottom-left of back card)          */}
        {/* ========================================================================= */}
        <div
          className="absolute z-[35] w-[155px] h-[155px]"
          style={{ left: "45px", top: "520px" }}
        >
          <Image
            src="/images/cta/cta-cone-lime.png"
            alt=""
            width={155}
            height={155}
            priority
            className="w-full h-full object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.22)]"
          />
        </div>
      </div>
    </div>
  );
}

export default AuthShowcase;
