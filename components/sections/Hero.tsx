"use client";

import React from "react";
import Image from "next/image";
import { SearchBar } from "@/components/ui/SearchBar";
import { AvatarStack } from "@/components/ui/AvatarStack";

export function Hero() {
  const avatars = [
    "/images/avatar-1.jpg",
    "/images/avatar-2.jpg",
    "/images/avatar-3.jpg",
    "/images/avatar-4.jpg",
  ];

  return (
    <section
      aria-label="Hero Section"
      className="relative w-full h-[960px] lg:h-[1024px] bg-primary-800 overflow-hidden"
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
      {/* DESKTOP EXACT FIGMA CANVAS (1440px Frame centered on screen)               */}
      {/* ========================================================================= */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1024px] pointer-events-none">
        {/* 1. 3D Ornaments Frame (Exact Figma: left: -118px; top: 221px; width: 1719px; height: 803px;) */}
        <div
          aria-hidden="true"
          className="absolute z-10 pointer-events-none"
          style={{
            left: "-118px",
            top: "221px",
            width: "1719px",
            height: "803px",
          }}
        >
          {/* Lime Squiggle (Top-Left) */}
          <div
            className="absolute"
            style={{
              left: "40px",
              top: "0px",
              width: "360px",
            }}
          >
            <Image
              src="/images/shape-squiggle-lime.png"
              alt=""
              width={360}
              height={360}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* White Squiggle (Mid-Left) */}
          <div
            className="absolute"
            style={{
              left: "210px",
              top: "220px",
              width: "140px",
              transform: "scaleX(-1)",
            }}
          >
            <Image
              src="/images/shape-squiggle-white.png"
              alt=""
              width={140}
              height={140}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* White Torus / Ring (Bottom-Left) */}
          <div
            className="absolute"
            style={{
              left: "80px",
              top: "430px",
              width: "230px",
            }}
          >
            <Image
              src="/images/shape-ring-white.png"
              alt=""
              width={230}
              height={230}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Lime Cylinder (Top-Right) */}
          <div
            className="absolute"
            style={{
              right: "40px",
              top: "0px",
              width: "185px",
            }}
          >
            <Image
              src="/images/shape-cylinder-lime.png"
              alt=""
              width={185}
              height={185}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* White Cone (Mid-Right) */}
          <div
            className="absolute"
            style={{
              right: "190px",
              top: "190px",
              width: "180px",
            }}
          >
            <Image
              src="/images/shape-cone-white.png"
              alt=""
              width={180}
              height={180}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* White Spiral / Squiggle (Bottom-Right) */}
          <div
            className="absolute"
            style={{
              right: "110px",
              top: "410px",
              width: "170px",
            }}
          >
            <Image
              src="/images/shape-spiral-white.png"
              alt=""
              width={170}
              height={170}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* 2. Ellipse 7 (Exact Figma: left: calc(50% - 1149px/2 - 0.5px); top: 582px; border: 320px solid #CBFC01;) */}
        <div
          aria-hidden="true"
          className="absolute z-10 pointer-events-none"
          style={{
            boxSizing: "border-box",
            position: "absolute",
            width: "1149px",
            height: "1149px",
            left: "calc(50% - 1149px/2 - 0.5px)",
            top: "582px",
            border: "320px solid #CBFC01",
            borderRadius: "50%",
          }}
        />

        {/* 3. Hero Header Content (Exact Figma: width: 1200px; height: 345px; left: calc(50% - 1200px/2); top: 169px;) */}
        <div
          className="absolute z-30 flex flex-col items-center text-center pointer-events-auto"
          style={{
            width: "1200px",
            left: "calc(50% - 1200px/2)",
            top: "169px",
          }}
        >
          {/* Main Heading (exact 2 lines matching Figma) */}
          <h1 className="text-white text-[72px] font-semibold tracking-[-0.01em] leading-[1.18] max-w-[880px]">
            Get Access to Hundreds <br /> Courses Available
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-white/80 text-[18px] max-w-[640px] leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex justify-center w-full">
            <SearchBar
              placeholder="Course, topic, creator"
              buttonLabel="Search"
              onSearch={(val) => console.log("Search query:", val)}
            />
          </div>
        </div>

        {/* 4. Boy with Laptop (Exact Figma bounds, anchored to bottom, z-20) */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "calc(50% - 250px)",
            top: "450px",
            width: "500px",
            bottom: "0px",
          }}
        >
          <Image
            src="/images/hero-boy.png"
            alt="Student with laptop"
            width={500}
            height={574}
            priority
            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* 5. Card 1: UI/UX Design (Exact Figma: left: 404px; top: 639px; width: 208px; height: 70px;) */}
        <div
          className="absolute z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-4 flex flex-col justify-center items-start gap-1 pointer-events-auto transition-transform duration-200 hover:scale-105"
          style={{
            position: "absolute",
            width: "208px",
            height: "70px",
            left: "404px",
            top: "639px",
            borderRadius: "16px",
          }}
        >
          <p className="text-neutral-950 font-semibold text-[14px] leading-tight">
            UI/UX Design
          </p>
          <p className="text-neutral-500 text-[10px] whitespace-nowrap">
            300 Courses · 1000+ Students
          </p>
        </div>

        {/* 6. Card 2: Learning Progress 55% (Exact Figma: left: 842px; top: 651px; width: 232px; height: 131px;) */}
        <div
          className="absolute z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-4 flex flex-col items-start gap-2 pointer-events-auto transition-transform duration-200 hover:scale-105"
          style={{
            position: "absolute",
            width: "232px",
            height: "131px",
            left: "842px",
            top: "651px",
            borderRadius: "16px",
          }}
        >
          <p className="text-neutral-500 text-[12px] font-medium">
            Learning Progress
          </p>
          <p className="text-neutral-950 font-bold text-[36px] leading-none">
            55%
          </p>
          {/* Lime Progress Bar */}
          <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden mt-1">
            <div
              className="h-full bg-secondary-500 rounded-full"
              style={{ width: "55%" }}
            />
          </div>
        </div>

        {/* 7. Card 3: Happy Students (Exact Figma: left: 328px; top: 837px; width: 258px; height: 121px;) */}
        <div
          className="absolute z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-4 flex flex-col justify-center items-start gap-2 pointer-events-auto transition-transform duration-200 hover:scale-105"
          style={{
            position: "absolute",
            width: "258px",
            height: "121px",
            left: "328px",
            top: "837px",
            borderRadius: "16px",
          }}
        >
          <div className="flex items-center justify-between w-full">
            <p className="text-neutral-950 font-semibold text-[14px]">
              Happy Students
            </p>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-900">
              <span className="text-amber-500">★</span>
              <span>4.5 (240)</span>
            </div>
          </div>
          <div className="mt-1">
            <AvatarStack avatars={avatars} count="2K+" size="sm" />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET ADAPTIVE LAYOUT (Screens < 1024px)                        */}
      {/* ========================================================================= */}
      <div className="lg:hidden relative z-20 flex flex-col items-center text-center px-4 pt-[130px] sm:pt-[150px]">
        {/* Heading */}
        <h1 className="text-white text-[34px] sm:text-[48px] font-semibold tracking-[-0.01em] leading-[1.2] max-w-[680px]">
          Get Access to Hundreds <br /> Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-white/80 text-[14px] sm:text-[16px] max-w-[500px]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search */}
        <div className="mt-7 w-full flex justify-center">
          <SearchBar
            placeholder="Course, topic, creator"
            buttonLabel="Search"
            onSearch={(val) => console.log("Search query:", val)}
          />
        </div>

        {/* Mobile Visual */}
        <div className="relative mt-8 w-full max-w-[380px] flex flex-col items-center">
          <Image
            src="/images/hero-boy.png"
            alt="Student with laptop"
            width={340}
            height={380}
            priority
            className="w-full h-auto object-contain"
          />

          {/* Mobile White Card */}
          <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60 -mt-6 z-20">
            <div className="flex items-center justify-between mb-2">
              <p className="text-neutral-950 font-semibold text-[13px]">
                Happy Students
              </p>
              <span className="text-[11px] font-semibold text-neutral-900">
                ★ 4.5 (240)
              </span>
            </div>
            <AvatarStack avatars={avatars} count="2K+" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
