"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section
      id="join-as-creator"
      aria-label="Call to Action: Join as Creator"
      className="relative w-full min-h-[488px] overflow-hidden flex items-center justify-center bg-[#003BE2]"
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
      {/* Decorative 3D Shapes positioned relative to full-width section            */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* ----------------------------------------------------------------------- */}
        {/* Left Side Shapes Cluster                                                */}
        {/* ----------------------------------------------------------------------- */}
        {/* 1. Top-Left Lime Squiggle / Spring */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-90px",
            top: "-40px",
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
        <div
          className="absolute pointer-events-none"
          style={{
            left: "197px",
            top: "45px",
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
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-25px",
            top: "225px",
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
        <div
          className="absolute pointer-events-none"
          style={{
            left: "40px",
            top: "330px",
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

        {/* ----------------------------------------------------------------------- */}
        {/* Right Side Shapes Cluster                                               */}
        {/* ----------------------------------------------------------------------- */}
        {/* 5. Top-Right Lime Pyramid */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "155px",
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
        <div
          className="absolute pointer-events-none"
          style={{
            right: "-170px",
            top: "30px",
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
        <div
          className="absolute pointer-events-none"
          style={{
            right: "-20px",
            top: "305px",
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
      {/* Center Auto Layout Content Stack (Centered within 1440px Container)       */}
      {/* ========================================================================= */}
      <Container className="relative z-10 flex flex-col items-center text-center py-[64px] sm:py-[74px]">
        <div className="w-full max-w-[964px] flex flex-col items-center gap-[40px]">
          {/* Heading M (width: 710px) */}
          <h2 className="w-full max-w-[710px] text-heading-m text-[#F5F5F6] tracking-[-0.01em] leading-[120%] text-center">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          {/* Body M with reduced opacity, max-w-[964px] wrapping cleanly into 3 lines */}
          <p className="w-full max-w-[964px] text-body-m text-[#F5F5F6]/80 font-normal leading-[160%] text-center">
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
      </Container>
    </section>
  );
}

export default CTASection;
