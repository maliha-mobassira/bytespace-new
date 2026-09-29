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

          {/* Frosted Glass Badges Overlay (Figma Auto Layout Horizontal) */}
          <div
            className="absolute flex flex-row items-center gap-[12px] z-10 select-none pointer-events-none"
            style={{
              left: "12px",
              top: "150px",
              width: "315px",
              height: "32px",
            }}
          >
            <div
              className="flex flex-col justify-center items-center shrink-0"
              style={{
                padding: "6px 12px",
                background: "rgba(246, 246, 246, 0.6)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                borderRadius: "24px",
                height: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#4F4F4F",
                  whiteSpace: "nowrap",
                }}
              >
                17 Lessons
              </span>
            </div>
            <div
              className="flex flex-col justify-center items-center shrink-0"
              style={{
                padding: "6px 12px",
                background: "rgba(246, 246, 246, 0.6)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                borderRadius: "24px",
                height: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#4F4F4F",
                  whiteSpace: "nowrap",
                }}
              >
                2 hours 16 mins
              </span>
            </div>
            <div
              className="flex flex-col justify-center items-center shrink-0"
              style={{
                padding: "6px 12px",
                background: "rgba(246, 246, 246, 0.6)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                borderRadius: "24px",
                height: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#4F4F4F",
                  whiteSpace: "nowrap",
                }}
              >
                59 Comments
              </span>
            </div>
          </div>
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
      {/* Floats above bottom-right of front card, under Happy Students card         */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:block absolute z-[25] w-[175px] h-[175px] pointer-events-none select-none"
        style={{ left: "470px", top: "626px", transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
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
      {/* Floats above top-left of front card and back card                          */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:block absolute z-[30] w-[146px] h-[146px] pointer-events-none select-none"
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

          {/* Frosted Glass Badges Overlay (Figma Auto Layout Horizontal) */}
          <div
            className="absolute flex flex-row items-center gap-[12px] z-10 select-none pointer-events-none"
            style={{
              left: "12px",
              top: "150px",
              width: "315px",
              height: "32px",
            }}
          >
            <div
              className="flex flex-col justify-center items-center shrink-0"
              style={{
                padding: "6px 12px",
                background: "rgba(246, 246, 246, 0.6)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                borderRadius: "24px",
                height: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#4F4F4F",
                  whiteSpace: "nowrap",
                }}
              >
                17 Lessons
              </span>
            </div>
            <div
              className="flex flex-col justify-center items-center shrink-0"
              style={{
                padding: "6px 12px",
                background: "rgba(246, 246, 246, 0.6)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                borderRadius: "24px",
                height: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#4F4F4F",
                  whiteSpace: "nowrap",
                }}
              >
                2 hours 16 mins
              </span>
            </div>
            <div
              className="flex flex-col justify-center items-center shrink-0"
              style={{
                padding: "6px 12px",
                background: "rgba(246, 246, 246, 0.6)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                borderRadius: "24px",
                height: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: "#4F4F4F",
                  whiteSpace: "nowrap",
                }}
              >
                59 Comments
              </span>
            </div>
          </div>
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
      {/* padding: 16px; gap: 8px;                                                  */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:flex absolute z-[30] bg-[#D4FB20] backdrop-blur-[10px] rounded-[16px] flex-col justify-center items-start gap-[8px] shadow-[0_16px_36px_rgba(0,0,0,0.18)] select-none pointer-events-none"
        style={{
          width: "258px",
          height: "123px",
          left: "348px",
          top: "740px",
          padding: "16px",
          borderRadius: "16px",
          boxSizing: "border-box",
        }}
      >
        {/* Top Auto Layout Vertical (Figma: width: 115px; height: 40px; order: 0; flex-grow: 0;) */}
        <div
          className="flex flex-col items-start gap-[2px]"
          style={{
            width: "115px",
            height: "40px",
            flex: "none",
            order: 0,
            flexGrow: 0,
          }}
        >
          {/* Happy Students (Label M: Satoshi 500, 16px, 120%, #242528) */}
          <span
            className="whitespace-nowrap"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "120%",
              color: "#242528",
            }}
          >
            Happy Students
          </span>

          {/* Horizontal Row: 4.5 (240) + Blue Star */}
          <div className="flex flex-row items-center gap-1.5 whitespace-nowrap">
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "160%",
                color: "#242528",
              }}
            >
              4.5 (240)
            </span>
            <svg
              width="14"
              height="13"
              viewBox="66 37 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M72.5248 37.9512C72.6752 37.492 73.3248 37.492 73.4752 37.9512L74.6932 41.6711C74.7603 41.8762 74.9514 42.015 75.1672 42.0155L79.0814 42.0244C79.5646 42.0255 79.7654 42.6433 79.3751 42.9282L76.2137 45.2361C76.0394 45.3634 75.9664 45.588 76.0326 45.7934L77.2337 49.5188C77.382 49.9787 76.8564 50.3605 76.4648 50.0774L73.293 47.7838C73.1181 47.6574 72.8819 47.6574 72.707 47.7838L69.5352 50.0774C69.1436 50.3605 68.618 49.9787 68.7663 49.5188L69.9674 45.7934C70.0336 45.588 69.9606 45.3634 69.7863 45.2361L66.6249 42.9282C66.2346 42.6433 66.4354 42.0255 66.9186 42.0244L70.8328 42.0155C71.0486 42.015 71.2397 41.8762 71.3068 41.6711L72.5248 37.9512Z"
                fill="#003BE2"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Auto Layout Horizontal: 7 Avatars + 1 Dark Circle "2K+" (Figma: width: 232px; height: 43px; order: 1; flex-grow: 0;) */}
        <div
          className="flex flex-row items-center flex-none"
          style={{
            width: "232px",
            height: "43px",
            order: 1,
            flexGrow: 0,
          }}
        >
          {HAPPY_STUDENTS_AVATARS.map((src, idx) => (
            <div
              key={idx}
              className="relative w-[43px] h-[43px] rounded-full overflow-hidden shrink-0 border border-white/40 shadow-sm"
              style={{
                marginRight: "-16px",
                zIndex: idx,
              }}
            >
              <Image
                src={src}
                alt=""
                width={43}
                height={43}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* 8th Circle: 2K+ Badge in #242528 dark with white text */}
          <div
            className="relative w-[43px] h-[43px] rounded-full shrink-0 flex items-center justify-center border border-white/40 shadow-sm"
            style={{
              backgroundColor: "#242528",
              zIndex: 7,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "150%",
                color: "#FFFFFF",
              }}
            >
              2K+
            </span>
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
            {/* Frosted Glass Badges Overlay */}
            <div
              className="absolute flex flex-row items-center gap-[12px] z-10 select-none pointer-events-none"
              style={{
                left: "12px",
                top: "150px",
                width: "315px",
                height: "32px",
              }}
            >
              <div
                className="flex flex-col justify-center items-center shrink-0"
                style={{
                  padding: "6px 12px",
                  background: "rgba(246, 246, 246, 0.6)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "24px",
                  height: "32px",
                }}
              >
                <span className="text-[12px] font-medium text-[#4F4F4F] whitespace-nowrap">17 Lessons</span>
              </div>
              <div
                className="flex flex-col justify-center items-center shrink-0"
                style={{
                  padding: "6px 12px",
                  background: "rgba(246, 246, 246, 0.6)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "24px",
                  height: "32px",
                }}
              >
                <span className="text-[12px] font-medium text-[#4F4F4F] whitespace-nowrap">2 hours 16 mins</span>
              </div>
              <div
                className="flex flex-col justify-center items-center shrink-0"
                style={{
                  padding: "6px 12px",
                  background: "rgba(246, 246, 246, 0.6)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "24px",
                  height: "32px",
                }}
              >
                <span className="text-[12px] font-medium text-[#4F4F4F] whitespace-nowrap">59 Comments</span>
              </div>
            </div>
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
