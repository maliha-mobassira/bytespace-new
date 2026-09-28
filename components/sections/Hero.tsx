"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/ui/SearchBar";
import { FloatingCard } from "@/components/ui/FloatingCard";
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
      {/* 3D Floating Decorative Shapes (Positioned according to Figma canvas) */}
      {/* 1. Lime Squiggle (Top Left) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none z-10"
        style={{
          width: "385px",
          left: "calc(50% - 385px/2 - 645.5px)",
          top: "21.58%",
        }}
      >
        <Image
          src="/images/shape-squiggle-lime.png"
          alt=""
          width={385}
          height={385}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 2. White Squiggle (Mid Left) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none z-10"
        style={{
          width: "175px",
          left: "calc(50% - 175px/2 - 449.5px)",
          top: "46.58%",
          transform: "scaleX(-1)",
        }}
      >
        <Image
          src="/images/shape-squiggle-white.png"
          alt=""
          width={175}
          height={175}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 3. White Torus / Ring (Bottom Left) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none z-10"
        style={{
          width: "220px",
          left: "calc(50% - 630px)",
          top: "620px",
        }}
      >
        <Image
          src="/images/shape-ring-white.png"
          alt=""
          width={220}
          height={220}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 4. Lime Cylinder (Top Right) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none z-10"
        style={{
          width: "190px",
          right: "calc(50% - 710px)",
          top: "100px",
        }}
      >
        <Image
          src="/images/shape-cylinder-lime.png"
          alt=""
          width={190}
          height={190}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 5. White Cone (Mid Right) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none z-10"
        style={{
          width: "188px",
          left: "calc(50% - 188px/2 + 480px)",
          top: "45.31%",
        }}
      >
        <Image
          src="/images/shape-cone-white.png"
          alt=""
          width={188}
          height={188}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 6. White Spiral / Squiggle (Bottom Right) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none z-10"
        style={{
          width: "170px",
          right: "calc(50% - 620px)",
          top: "600px",
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

      {/* Ellipse 7: Big Lime Circle behind boy */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-0 left-1/2 -translate-x-1/2"
        style={{
          width: "1149px",
          height: "1149px",
          top: "582px",
          borderRadius: "50%",
          boxSizing: "border-box",
          border: "320px solid #CBFC01",
        }}
      />

      {/* Top Header Content: Heading + Subtitle + SearchBar */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center px-4 w-full max-w-[1200px]"
        style={{ top: "169px" }}
      >
        {/* Main Heading */}
        <h1 className="text-white text-[38px] sm:text-[54px] lg:text-[72px] font-semibold tracking-[-0.01em] leading-[1.15] max-w-[900px]">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-white/80 text-body-s sm:text-body-m lg:text-body-l max-w-[620px] leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-8 sm:mt-9 w-full flex justify-center">
          <SearchBar
            placeholder="Course, topic, creator"
            buttonLabel="Search"
            onSearch={(val) => console.log("Search query:", val)}
          />
        </div>
      </div>

      {/* Desktop Visual Centerpiece: Boy with Laptop & Floating Cards */}
      <div className="hidden md:block">
        {/* Boy with Laptop - Anchored to bottom of Hero Frame */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
          style={{
            bottom: "0px",
            width: "510px",
          }}
        >
          <Image
            src="/images/hero-boy.png"
            alt="Student with laptop"
            width={510}
            height={550}
            priority
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Floating Card 1: UI/UX Design (Top Left of Boy) */}
        <FloatingCard
          variant="white"
          className="absolute z-20 shadow-xl py-2.5 px-4 rounded-2xl"
          style={{
            left: "calc(50% - 250px)",
            top: "540px",
          }}
        >
          <div className="text-left">
            <p className="text-neutral-950 font-semibold text-label-s leading-tight">
              UI/UX Design
            </p>
            <p className="text-neutral-500 text-[10px] mt-0.5 whitespace-nowrap">
              300 Courses · 1000+ Students
            </p>
          </div>
        </FloatingCard>

        {/* Floating Card 2: Learning Progress 55% (Top Right of Boy) */}
        <FloatingCard
          variant="white"
          className="absolute z-20 shadow-xl py-2.5 px-4 w-[160px] rounded-2xl"
          style={{
            left: "calc(50% + 120px)",
            top: "550px",
          }}
        >
          <div className="text-left">
            <p className="text-neutral-500 text-[11px] font-medium">
              Learning Progress
            </p>
            <p className="text-neutral-950 font-bold text-heading-s leading-tight mt-0.5">
              55%
            </p>
            <div className="w-full h-1.5 bg-neutral-100 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-secondary-500 rounded-full"
                style={{ width: "55%" }}
              />
            </div>
          </div>
        </FloatingCard>

        {/* Floating Card 3: Happy Students (WHITE, Exact Figma coordinates: left: 328px, top: 837px) */}
        <div
          className="absolute z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-4 transition-transform duration-300 hover:scale-105"
          style={{
            width: "258px",
            height: "121px",
            left: "calc(50% - 1440px/2 + 328px)",
            top: "837px",
          }}
        >
          <div className="flex flex-col justify-center h-full gap-2">
            <div className="flex items-center justify-between">
              <p className="text-neutral-950 font-semibold text-label-s">
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
      </div>

      {/* Mobile Flow (for screens < 768px) */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 flex flex-col items-center px-4 z-10 pb-4">
        <div className="relative w-[320px] max-w-full">
          <Image
            src="/images/hero-boy.png"
            alt="Student with laptop"
            width={320}
            height={360}
            priority
            className="w-full h-auto object-contain"
          />
          {/* Mobile Happy Students Card (White) */}
          <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/40">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-neutral-950 font-semibold text-label-xs">
                Happy Students
              </p>
              <span className="text-[10px] font-semibold text-neutral-900">
                ★ 4.5 (240)
              </span>
            </div>
            <AvatarStack avatars={avatars} count="2K+" size="xs" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
