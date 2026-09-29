"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * CreatorCTA Section
 * Matches exact Figma specifications: 1440px canvas, #003BE2 background,
 * 120px grid, centered content stack, and exact 3D floating shapes.
 */
export function CreatorCTA() {
  return (
    <section
      id="join-as-creator"
      aria-label="Call to Action: Join as Creator"
      className="relative w-full h-[488px] overflow-hidden flex items-center justify-center bg-[#003BE2]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
        `,
        backgroundSize: "120px 120px",
        backgroundPosition: "center top",
      }}
    >
      {/* ========================================================================= */}
      {/* 1440px Canvas Layer for 3D Floating Shapes (Exact Figma Positioning)      */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[488px] pointer-events-none select-none z-0">
        {/* 1. Top-Left Lime Squiggle / Spring */}
        {/* Figma: width: 385px; left: calc(50% - 385px/2 - 645.5px) = -118px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-118px",
            top: "-85px",
            width: "385px",
          }}
        >
          <Image
            src="/images/shape-squiggle-lime.png"
            alt=""
            width={385}
            height={550}
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* 2. Middle-Left White Squiggle */}
        {/* Figma: width: 175px; left: calc(50% - 175px/2 - 454.5px) = 178px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "178px",
            top: "35px",
            width: "175px",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src="/images/cta/cta-wiggle-white.png"
            alt=""
            width={175}
            height={175}
            priority
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* 3. Bottom-Left White Cone */}
        {/* Figma: width: 188px; left: calc(50% - 188px/2 - 674px) = -48px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-48px",
            top: "240px",
            width: "188px",
          }}
        >
          <Image
            src="/images/cta/cta-cone-white.png"
            alt=""
            width={188}
            height={255}
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* 4. Bottom-Left Lime Ring / Torus */}
        {/* Figma: width: 342px; left: calc(50% - 342px/2 - 529px) = 20px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "20px",
            top: "335px",
            width: "342px",
          }}
        >
          <Image
            src="/images/cta/cta-circle-lime.png"
            alt=""
            width={342}
            height={190}
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* 5. Top-Right Lime Pyramid */}
        {/* Figma: width: 188px; left: calc(50% - 188px/2 + 454px) = 1080px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "1080px",
            top: "20px",
            width: "188px",
          }}
        >
          <Image
            src="/images/cta/cta-cone-lime.png"
            alt=""
            width={188}
            height={188}
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* 6. Middle-Right White Rounded Cylinder */}
        {/* Figma: width: 370px; left: calc(50% - 370px/2 + 691px) = 1226px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "1226px",
            top: "40px",
            width: "370px",
          }}
        >
          <Image
            src="/images/cta/cta-cylinder-white.png"
            alt=""
            width={370}
            height={370}
            priority
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 7. Bottom-Right Lime Squiggle */}
        {/* Figma: width: 330px; left: calc(50% - 330px/2 + 555px) = 1110px */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "1110px",
            top: "310px",
            width: "330px",
          }}
        >
          <Image
            src="/images/shape-squiggle-lime.png"
            alt=""
            width={330}
            height={480}
            priority
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Center Auto Layout Content Stack (Exact Figma CTA_Frame Content)          */}
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
