"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * CreatorCTA Section
 * Matches exact Figma specifications:
 * - Canvas: width: 1440px, height: 488px, background: #003BE2
 * - 120px grid background (opacity: 0.12, 2px solid #FFFFFF)
 * - Centered Content Stack: width: 964px, height: 319px (gap: 40px)
 * - 7 Floating 3D Shapes positioned at exact Figma coordinates:
 *   1. Lime Squiggle: left: -118px, top: -162px, 385x385
 *   2. White Squiggle: left: 178px, top: 5px, 175x175, scaleX(-1)
 *   3. White Cone: left: -48px, top: 225px, 188x188
 *   4. Lime Ring: left: 20px, top: 299px, 342x342
 *   5. Lime Cone: left: 1080px, top: 0px, 188x188
 *   6. White Cylinder: left: 1226px, top: 6px, 370x370
 *   7. Lime Squiggle: left: 1110px, top: 289px, 330x330
 */
export function CreatorCTA() {
  return (
    <section
      id="join-as-creator"
      aria-label="Call to Action: Join as Creator"
      className="relative w-full h-[488px] overflow-hidden flex items-center justify-center bg-[#003BE2]"
    >
      {/* ========================================================================= */}
      {/* 1440px Fixed Canvas Layer for Background Grid & Floating 3D Shapes        */}
      {/* ========================================================================= */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[488px] pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "0px 0px",
        }}
      >
        {/* 1. Top-Left Lime Squiggle */}
        {/* Figma: width: 385px; left: calc(50% - 385px/2 - 645.5px) = -118px; top: -33.2% = -162px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-118px",
            top: "-162px",
            width: "385px",
            height: "385px",
          }}
        >
          <Image
            src="/images/shape-squiggle-lime.png"
            alt=""
            width={385}
            height={385}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 2. Middle-Left White Squiggle */}
        {/* Figma: width: 175px; left: calc(50% - 175px/2 - 454.5px) = 178px; top: 1.02% = 5px; scaleX(-1) */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "178px",
            top: "5px",
            width: "175px",
            height: "175px",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src="/images/cta/cta-wiggle-white.png"
            alt=""
            width={175}
            height={175}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        {/* 3. Bottom-Left White Cone */}
        {/* Figma: width: 188px; left: calc(50% - 188px/2 - 674px) = -48px; top: 46.11% = 225px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-48px",
            top: "225px",
            width: "188px",
            height: "188px",
          }}
        >
          <Image
            src="/images/cta/cta-cone-white.png"
            alt=""
            width={188}
            height={188}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 4. Bottom-Left Lime Ring / Torus */}
        {/* Figma: width: 342px; left: calc(50% - 342px/2 - 529px) = 20px; top: 61.27% = 299px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "20px",
            top: "299px",
            width: "342px",
            height: "342px",
          }}
        >
          <Image
            src="/images/shape-ring-lime.png"
            alt=""
            width={342}
            height={342}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 5. Top-Right Lime Cone / Pyramid */}
        {/* Figma: sits at top-right, left side overlapping the text container border */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "1145px",
            top: "15px",
            width: "175px",
            height: "175px",
          }}
        >
          <Image
            src="/images/cta/cta-cone-lime.png"
            alt=""
            width={175}
            height={175}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 6. Middle-Right White Cylinder */}
        {/* Figma: tilted cylinder to the right of the cone, framing the right edge */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "1260px",
            top: "35px",
            width: "270px",
            height: "270px",
          }}
        >
          <Image
            src="/images/cta/cta-cylinder-white.png"
            alt=""
            width={270}
            height={270}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-2xl grayscale brightness-105"
          />
        </div>

        {/* 7. Bottom-Right Lime Squiggle */}
        {/* Figma: compact horizontal squiggle under the cylinder, left loop tucked under text border */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "1130px",
            top: "275px",
            width: "210px",
            height: "220px",
          }}
        >
          <Image
            src="/images/shape-squiggle-lime.png"
            alt=""
            width={210}
            height={220}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Center Auto Layout Content Stack                                          */}
      {/* Figma: width: 964px, height: 319px, gap: 40px                             */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[964px] mx-auto px-4 flex flex-col items-center text-center gap-[40px]">
        {/* Heading M (width: 710px, height: 106px) */}
        <h2 className="w-full max-w-[710px] text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-[#F5F5F6] tracking-[-0.01em] leading-[120%] text-center font-heading">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Body L (width: 964px, height: 87px) */}
        <p className="w-full max-w-[964px] text-[15px] sm:text-[17px] lg:text-[18px] text-[#F5F5F6] font-normal leading-[160%] text-center font-body">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* Button: Join as Creator (width: 172px, height: 46px, radius: 24px) */}
        <Link
          href="/register"
          className="inline-flex items-center justify-center w-[172px] h-[46px] px-[24px] py-[12px] bg-[#D4FB20] text-[#242528] rounded-[24px] text-[18px] font-medium leading-[120%] font-body shadow-sm hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}

export default CreatorCTA;
