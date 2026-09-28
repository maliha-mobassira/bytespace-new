"use client";

import React from "react";
import Image from "next/image";

export function CTASection() {
  return (
    <section
      id="join-as-creator"
      aria-label="Call to Action: Join as Creator"
      className="relative w-full h-[488px] overflow-hidden flex items-center justify-center"
      style={{
        backgroundColor: "#003BE2",
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
      }}
    >
      {/* ========================================================================= */}
      {/* 3D Floating Ornaments on Left and Right (Exact Figma Perimeter Clusters)   */}
      {/* ========================================================================= */}
      {/* Left Ornaments Cluster */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[220px] lg:w-[250px] pointer-events-none select-none z-0">
        <Image
          src="/images/cta-ornaments-left.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 220px, 250px"
          className="object-cover object-left"
        />
      </div>

      {/* Right Ornaments Cluster */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[220px] lg:w-[250px] pointer-events-none select-none z-0">
        <Image
          src="/images/cta-ornaments-right.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 220px, 250px"
          className="object-cover object-right"
        />
      </div>

      {/* ========================================================================= */}
      {/* Center Auto Layout Stack (Exact Figma CTA_Frame Text & Button)             */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[964px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Heading M (width: 710px, height: 106px) */}
        <h2
          className="w-full max-w-[710px] text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-[#F5F5F6] tracking-[-0.01em] leading-[120%]"
          style={{
            fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
          }}
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Body L (width: 964px, height: 87px) */}
        <p
          className="w-full max-w-[964px] text-[15px] sm:text-[17px] lg:text-[18px] text-[#F5F5F6] font-normal leading-[160%] mt-[16px] sm:mt-[20px]"
          style={{
            fontFamily: "var(--font-body, 'Satoshi', sans-serif)",
          }}
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* Button: Join as Creator (width: 172px, height: 46px, radius: 24px) */}
        <button
          type="button"
          className="inline-flex items-center justify-center h-[46px] px-[24px] py-[12px] bg-[#D4FB20] text-[#242528] rounded-[24px] text-[18px] font-medium leading-[120%] tracking-tight mt-[24px] sm:mt-[32px] shadow-sm hover:brightness-105 hover:scale-105 active:scale-98 transition-all duration-200 cursor-pointer select-none"
          style={{
            fontFamily: "var(--font-body, 'Satoshi', sans-serif)",
            borderRadius: "24px",
          }}
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}

export default CTASection;
