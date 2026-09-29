"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * CreatorCTA Section
 * Pixel-perfect implementation matching Figma screenshot (media_1790689979488.png):
 * - Canvas: width: 1440px, height: 488px, background: #003BE2
 * - 120px grid background (opacity: 0.12, 2px solid #FFFFFF)
 * - Centered Content Stack:
 *   - Heading (2 lines, max-w-[620px], 44px Poppins 600)
 *   - Paragraph (3 lines, max-w-[840px], 16px/18px Satoshi 400, #F5F5F6)
 *   - Button ("Join as Creator", 172px x 46px, radius: 24px, #D4FB20)
 * - 7 Floating 3D Shapes positioned with exact Figma visual parity:
 *   1. Top-Left Big Lime Squiggle: left: -60px, top: -50px, 340x380
 *   2. Upper-Left White Squiggle: left: 205px, top: 65px, 135x135
 *   3. Bottom-Left White Cone: left: -15px, top: 235px, 140x175
 *   4. Bottom-Left Lime Ring: left: 70px, top: 345px, 240x240
 *   5. Top-Right Lime Cone: left: 1080px, top: 40px, 145x155
 *   6. Top-Right White Cylinder: left: 1240px, top: 50px, 260x280 (pure brilliant white)
 *   7. Bottom-Right Lime Squiggle: left: 1150px, top: 315px, 190x210, scaleX(-1) (number "3" wave)
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
        {/* 1. Top-Left Big Lime Squiggle (Spring) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "-60px",
            top: "-50px",
            width: "340px",
            height: "380px",
          }}
        >
          <Image
            src="/images/shape-squiggle-lime.png"
            alt=""
            width={340}
            height={380}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 2. Upper-Left White Squiggle */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "205px",
            top: "65px",
            width: "135px",
            height: "135px",
          }}
        >
          <Image
            src="/images/cta/cta-wiggle-white.png"
            alt=""
            width={135}
            height={135}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        {/* 3. Bottom-Left White Cone */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "-15px",
            top: "235px",
            width: "140px",
            height: "175px",
          }}
        >
          <Image
            src="/images/cta/cta-cone-white.png"
            alt=""
            width={140}
            height={175}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 4. Bottom-Left Lime Ring / Torus */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "70px",
            top: "345px",
            width: "240px",
            height: "240px",
          }}
        >
          <Image
            src="/images/shape-ring-lime.png"
            alt=""
            width={240}
            height={240}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 5. Top-Right Lime Cone / Pyramid */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "1080px",
            top: "40px",
            width: "145px",
            height: "155px",
          }}
        >
          <Image
            src="/images/cta/cta-cone-lime.png"
            alt=""
            width={145}
            height={155}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 6. Middle-Right White Cylinder (Pure Brilliant White) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "1240px",
            top: "50px",
            width: "260px",
            height: "280px",
          }}
        >
          <Image
            src="/images/cta/cta-cylinder-white-bright.png"
            alt=""
            width={260}
            height={280}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* 7. Bottom-Right Lime Squiggle (Number "3" Wave) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: "1150px",
            top: "315px",
            width: "190px",
            height: "210px",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src="/images/shape-squiggle-lime.png"
            alt=""
            width={190}
            height={210}
            priority
            unoptimized
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Center Auto Layout Content Stack (Exact Figma Typography & Layout)        */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[964px] mx-auto px-4 flex flex-col items-center text-center gap-[20px]">
        {/* Heading M (width: max 620px, 2 lines) */}
        <h2 className="w-full max-w-[620px] text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-[#FFFFFF] tracking-[-0.01em] leading-[120%] text-center font-heading">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Body L (width: max 840px, 3 lines) */}
        <p className="w-full max-w-[840px] text-[15px] sm:text-[17px] lg:text-[18px] text-[#F5F5F6] font-normal leading-[160%] text-center font-body">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* Button: Join as Creator */}
        <Link
          href="/register"
          className="inline-flex items-center justify-center h-[46px] px-[28px] py-[12px] bg-[#D4FB20] text-[#242528] rounded-[24px] text-[16px] sm:text-[18px] font-medium leading-[120%] font-body shadow-sm hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer select-none mt-[8px]"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}

export default CreatorCTA;
