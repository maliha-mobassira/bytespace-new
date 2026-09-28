"use client";

import React from "react";
import Image from "next/image";
import { SearchBar } from "@/components/ui/SearchBar";

export function Hero() {
  const studentAvatars = [
    "/images/avatar-1.jpg",
    "/images/avatar-2.jpg",
    "/images/avatar-3.jpg",
    "/images/avatar-4.jpg",
    "/images/avatar-5.jpg",
    "/images/avatar-6.jpg",
    "/images/avatar-7.jpg",
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

        {/* 2. White Donut / Torus (Exact Figma: width: 342px; left: calc(50% - 342px/2 - 531px); top: 66.6%;) */}
        <div
          aria-hidden="true"
          className="absolute z-10 pointer-events-none"
          style={{
            position: "absolute",
            width: "342px",
            left: "calc(50% - 342px/2 - 531px)",
            top: "66.6%",
          }}
        >
          <Image
            src="/images/shape-ring-white.png"
            alt=""
            width={342}
            height={342}
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 2b. White Squiggle (Exact Figma: width: 175px; left: calc(50% - 175px/2 - 449.5px); top: 46.58%; bottom: 36.33%; transform: matrix(-1, 0, 0, 1, 0, 0);) */}
        <div
          aria-hidden="true"
          className="absolute z-10 pointer-events-none"
          style={{
            position: "absolute",
            width: "175px",
            height: "175px",
            left: "calc(50% - 175px/2 - 449.5px)",
            top: "46.58%",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          }}
        >
          <Image
            src="/images/shape-squiggle-white.png"
            alt=""
            width={175}
            height={175}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* 3. Ellipse 7 (Exact Figma: left: calc(50% - 1149px/2 - 0.5px); top: 582px; border: 320px solid #CBFC01;) */}
        <div
          aria-hidden="true"
          className="absolute z-0 pointer-events-none"
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

        {/* 4. Hero Header Content (Exact Figma: width: 1200px; height: 345px; left: calc(50% - 1200px/2); top: 169px;) */}
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

        {/* 5. Boy with Laptop (Exact Figma: width: 578px; height: 541px; left: calc(50% - 578px/2); top: 512px;) */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            position: "absolute",
            width: "578px",
            height: "541px",
            left: "calc(50% - 578px/2)",
            top: "512px",
            filter: "drop-shadow(25px 36px 36px rgba(0, 0, 0, 0.12)) drop-shadow(10px 14px 16px rgba(0, 0, 0, 0.08))",
          }}
        >
          <Image
            src="/images/hero-boy.png"
            alt="Student with laptop"
            width={578}
            height={541}
            priority
            className="w-full h-full object-contain object-bottom"
          />
        </div>

        {/* 6. Card 1: UI/UX Design (Exact Figma: left: 404px; top: 639px; width: 208px; height: 70px;) */}
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

        {/* 7. Card 2: Learning Progress 55% (Exact Figma: left: 842px; top: 651px; width: 232px; height: 131px;) */}
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

        {/* 8. Card 3: Happy Students (Exact Figma: left: 328px; top: 837px; width: 258px; height: 121px;) */}
        <div
          className="absolute z-30 bg-white backdrop-blur-[10px] rounded-[16px] shadow-xl border border-white/60 flex flex-col justify-center items-start gap-[8px] pointer-events-auto transition-transform duration-200 hover:scale-105"
          style={{
            position: "absolute",
            width: "258px",
            height: "121px",
            left: "328px",
            top: "837px",
            padding: "16px",
            borderRadius: "16px",
            boxSizing: "border-box",
          }}
        >
          {/* Top Auto Layout Vertical */}
          <div className="flex flex-col items-start gap-[2px] flex-none">
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

            {/* Horizontal Row: 4.5 (240) + Star */}
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
              <svg width="14" height="13" viewBox="66 37 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path
                  d="M72.5248 37.9512C72.6752 37.492 73.3248 37.492 73.4752 37.9512L74.6932 41.6711C74.7603 41.8762 74.9514 42.015 75.1672 42.0155L79.0814 42.0244C79.5646 42.0255 79.7654 42.6433 79.3751 42.9282L76.2137 45.2361C76.0394 45.3634 75.9664 45.588 76.0326 45.7934L77.2337 49.5188C77.382 49.9787 76.8564 50.3605 76.4648 50.0774L73.293 47.7838C73.1181 47.6574 72.8819 47.6574 72.707 47.7838L69.5352 50.0774C69.1436 50.3605 68.618 49.9787 68.7663 49.5188L69.9674 45.7934C70.0336 45.588 69.9606 45.3634 69.7863 45.2361L66.6249 42.9282C66.2346 42.6433 66.4354 42.0255 66.9186 42.0244L70.8328 42.0155C71.0486 42.015 71.2397 41.8762 71.3068 41.6711L72.5248 37.9512Z"
                  fill="#D4FB20"
                />
              </svg>
            </div>
          </div>

          {/* Bottom Auto Layout Horizontal: 7 Avatars + 1 Lime Circle "2K+" (width: 232px; height: 43px;) */}
          <div className="flex flex-row items-center w-[232px] h-[43px] flex-none">
            {studentAvatars.map((src, idx) => (
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
                  alt={`Student ${idx + 1}`}
                  width={43}
                  height={43}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* 8th Circle: 2K+ Badge (Exact Figma: width: 43px; height: 43px; background: #D4FB20; color: #242528;) */}
            <div
              className="relative w-[43px] h-[43px] rounded-full shrink-0 flex items-center justify-center border border-white/40 shadow-sm"
              style={{
                backgroundColor: "#D4FB20",
                zIndex: 7,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "12px",
                  lineHeight: "150%",
                  color: "#242528",
                }}
              >
                2K+
              </span>
            </div>
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
          <div className="w-full bg-white backdrop-blur-[10px] rounded-2xl p-4 shadow-xl border border-white/60 -mt-6 z-20 flex flex-col items-start gap-2">
            <div className="flex flex-col items-start">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "120%",
                  color: "#242528",
                }}
              >
                Happy Students
              </p>
              <div className="flex items-center gap-1 mt-0.5">
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
                <svg width="14" height="13" viewBox="66 37 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M72.5248 37.9512C72.6752 37.492 73.3248 37.492 73.4752 37.9512L74.6932 41.6711C74.7603 41.8762 75.9624 42.015 75.1672 42.0155L79.0814 42.0244C79.5646 42.0255 79.7654 42.6433 79.3751 42.9282L76.2137 45.2361C76.0394 45.3634 75.9664 45.588 76.0326 45.7934L77.2337 49.5188C77.382 49.9787 76.8564 50.3605 76.4648 50.0774L73.293 47.7838C73.1181 47.6574 72.8819 47.6574 72.707 47.7838L69.5352 50.0774C69.1436 50.3605 68.618 49.9787 68.7663 49.5188L69.9674 45.7934C70.0336 45.588 69.9606 45.3634 69.7863 45.2361L66.6249 42.9282C66.2346 42.6433 66.4354 42.0255 66.9186 42.0244L70.8328 42.0155C71.0486 42.015 71.2397 41.8762 71.3068 41.6711L72.5248 37.9512Z"
                    fill="#D4FB20"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-row items-center overflow-x-auto py-1 w-full">
              {studentAvatars.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-[36px] h-[36px] rounded-full overflow-hidden shrink-0 border border-white/40 shadow-sm"
                  style={{
                    marginRight: "-12px",
                    zIndex: idx,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Student ${idx + 1}`}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div
                className="relative w-[36px] h-[36px] rounded-full shrink-0 flex items-center justify-center border border-white/40 shadow-sm"
                style={{
                  backgroundColor: "#D4FB20",
                  zIndex: 7,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#242528",
                  }}
                >
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
