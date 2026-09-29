"use client";

import React from "react";
import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";

const HAPPY_STUDENTS_AVATARS = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
  "/images/avatar-5.jpg",
  "/images/avatar-6.jpg",
  "/images/avatar-7.jpg",
];

/**
 * AuthShowcase Component
 * Pixel-perfect implementation matching Figma inspect specifications:
 * - Lime Torus Ring: left: 151px, top: 320px, 146x146 (z-15)
 * - Back Card ("Build Digital Asset"): left: 122px, top: 394px, 373x384 (z-10)
 * - Front Card ("the Power of Big Data"): left: 233px, top: 305px, 373x384 (z-20)
 * - White Squiggle 3D Shape: left: 470px, top: 626px, 175x175, scaleX(-1) (z-12)
 * - Lime Cone: left: 97px, top: 702px, 188x188 (z-35)
 * - Happy Students Card: left: 348px, top: 740px, 258x123 (z-30)
 */
export function AuthShowcase() {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. Course_Card_2: Back Card ("Build Digital Asset")                      */}
      {/* Figma: width: 373px; height: 384px; left: 122px; top: 394px              */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:flex absolute z-[10] w-[373px] h-[384px] bg-white rounded-[24px] border border-[#CED0D3] p-[16px] flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.08)] select-none pointer-events-none"
        style={{ left: "122px", top: "394px", boxSizing: "border-box" }}
      >
        {/* High-res thumbnail with frosted glass badges */}
        <div className="relative w-[341px] h-[195.14px] rounded-[12px] overflow-hidden shrink-0 bg-[#443131]">
          <Image
            src="/images/course-thumb-2-hd.png"
            alt="Build Digital Asset"
            width={682}
            height={391}
            priority
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title, Rating, Author */}
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
      {/* 2. White Squiggle 3D Shape (Flipped Horizontally)                         */}
      {/* Figma: width: 175px; left: calc(50% - 175px/2 - 162.5px) = 470px; top: 626px */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:block absolute z-[12] w-[175px] h-[175px] pointer-events-none select-none"
        style={{ left: "470px", top: "626px", transform: "scaleX(-1)" }}
      >
        <Image
          src="/images/cta/cta-wiggle-white.png"
          alt=""
          width={175}
          height={175}
          priority
          unoptimized
          className="w-full h-full object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)]"
        />
      </div>

      {/* ========================================================================= */}
      {/* 3. Lime Torus Ring 3D Shape                                               */}
      {/* Figma: width: 146px; left: calc(50% - 146px/2 - 496px) = 151px; top: 320px */}
      {/* Overlaps top-left of back card, behind front card                        */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:block absolute z-[15] w-[146px] h-[146px] pointer-events-none select-none"
        style={{ left: "151px", top: "320px" }}
      >
        <Image
          src="/images/shape-ring-lime.png"
          alt=""
          width={146}
          height={146}
          priority
          unoptimized
          className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* ========================================================================= */}
      {/* 4. Course_Card_1: Front Card ("the Power of Big Data")                   */}
      {/* Figma: width: 373px; height: 384px; left: 233px; top: 305px              */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:flex absolute z-[20] w-[373px] h-[384px] bg-white rounded-[24px] p-[16px] flex-col justify-between shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.06)] select-none pointer-events-none"
        style={{ left: "233px", top: "305px", boxSizing: "border-box" }}
      >
        {/* High-res thumbnail with frosted glass badges */}
        <div className="relative w-[341px] h-[195.14px] rounded-[12px] overflow-hidden shrink-0 bg-[#443131]">
          <Image
            src="/images/course-thumb-3-hd.png"
            alt="the Power of Big Data"
            width={682}
            height={391}
            priority
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title, Rating, Author */}
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
      {/* Figma: width: 258px; height: 123px; left: 348px; top: 740px              */}
      {/* background: #D4FB20; backdrop-filter: blur(10px); border-radius: 16px;   */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:flex absolute z-[30] w-[258px] h-[123px] bg-[#D4FB20] backdrop-blur-[10px] rounded-[16px] p-[16px] flex-col justify-between shadow-[0_16px_36px_rgba(0,0,0,0.18)] select-none pointer-events-none"
        style={{ left: "348px", top: "740px", boxSizing: "border-box" }}
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

        {/* Auto Layout Horizontal: Avatars Ellipses Row */}
        {/* Figma: width: 232px; height: 43px; flex: none; order: 1; flex-grow: 0; */}
        <div
          className="flex flex-row items-center -space-x-[11px]"
          style={{
            width: "232px",
            height: "43px",
            flex: "none",
            order: 1,
            flexGrow: 0,
          }}
        >
          {HAPPY_STUDENTS_AVATARS.map((avatar, idx) => (
            <div
              key={idx}
              className="relative w-[38px] h-[38px] rounded-full border-2 border-[#D4FB20] overflow-hidden bg-neutral-200 shrink-0 shadow-xs"
            >
              <Image
                src={avatar}
                alt=""
                fill
                sizes="38px"
                unoptimized
                className="object-cover"
              />
            </div>
          ))}
          <div className="relative w-[38px] h-[38px] rounded-full border-2 border-[#D4FB20] bg-[#242528] text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-xs">
            2K+
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. Lime 3D Cone / Pyramid                                                */}
      {/* Figma: width: 188px; left: calc(50% - 188px/2 - 529px) = 97px; top: 702px*/}
      {/* Overlaps bottom-left of back card                                         */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:block absolute z-[35] w-[188px] h-[188px] pointer-events-none select-none"
        style={{ left: "97px", top: "702px" }}
      >
        <Image
          src="/images/cta/cta-cone-lime.png"
          alt=""
          width={188}
          height={188}
          priority
          unoptimized
          className="w-full h-full object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.22)]"
        />
      </div>

      {/* ========================================================================= */}
      {/* Mobile/Tablet Fallback (< 1024px)                                        */}
      {/* ========================================================================= */}
      <div className="lg:hidden mt-8 w-full max-w-[373px] mx-auto flex flex-col items-center gap-4">
        <div className="relative w-full h-[384px] bg-white rounded-[24px] border border-[#CED0D3] p-[16px] flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
          <div className="relative w-[341px] h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
            <Image
              src="/images/course-thumb-3-hd.png"
              alt="the Power of Big Data"
              width={682}
              height={391}
              priority
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[4px] mt-[6px]">
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-bold text-[#242528] tracking-tight leading-[1.2]">
                the Power of Big Data
              </h3>
              <span className="text-[17px] text-[#242528] font-semibold">4.5 ★</span>
            </div>
            <p className="text-[14px] text-[#666973]">
              by <span className="text-[#0043FF] font-medium">purepearl studio</span>
            </p>
          </div>
          <div className="flex items-center justify-between pt-[4px]">
            <span className="h-[32px] px-[12px] py-[6px] bg-[#F5F5F6] rounded-[24px] text-[13px] text-[#4B4C53] font-medium flex items-center">
              Beginner
            </span>
            <AvatarStack countBadge="26+" badgeVariant="dark" />
          </div>
          <div className="flex items-baseline gap-[2px]">
            <span className="text-[24px] font-bold text-[#0043FF]">$25</span>
            <span className="text-[14px] font-normal text-[#666973]">/lifetime</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthShowcase;
