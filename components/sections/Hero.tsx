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
      className="relative w-full min-h-[960px] lg:h-[1024px] bg-primary-800 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
      }}
    >
      {/* 3D Floating Decorative Shapes (Hidden or adjusted on small screens) */}
      {/* 1. Lime Squiggle (Top Left) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none z-10"
        style={{
          width: "320px",
          left: "calc(50% - 640px)",
          top: "14%",
        }}
      >
        <Image
          src="/images/shape-squiggle-lime.png"
          alt=""
          width={320}
          height={320}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 2. White Squiggle (Mid Left) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none z-10"
        style={{
          width: "160px",
          left: "calc(50% - 520px)",
          top: "44%",
          transform: "scaleX(-1)",
        }}
      >
        <Image
          src="/images/shape-squiggle-white.png"
          alt=""
          width={160}
          height={160}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 3. White Ring / Torus (Bottom Left) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none z-10"
        style={{
          width: "180px",
          left: "calc(50% - 620px)",
          bottom: "12%",
        }}
      >
        <Image
          src="/images/shape-ring-white.png"
          alt=""
          width={180}
          height={180}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 4. Lime Cylinder (Top Right) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none z-10"
        style={{
          width: "200px",
          right: "calc(50% - 680px)",
          top: "12%",
        }}
      >
        <Image
          src="/images/shape-cylinder-lime.png"
          alt=""
          width={200}
          height={200}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 5. White Cone (Mid Right) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none z-10"
        style={{
          width: "175px",
          right: "calc(50% - 620px)",
          top: "38%",
        }}
      >
        <Image
          src="/images/shape-cone-white.png"
          alt=""
          width={175}
          height={175}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 6. White Small Squiggle (Bottom Right) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none z-10"
        style={{
          width: "140px",
          right: "calc(50% - 560px)",
          bottom: "18%",
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

      {/* Big Lime Circle (Ellipse 7) behind boy */}
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

      {/* Hero Content Container */}
      <Container className="relative z-20 pt-[140px] sm:pt-[160px] flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="text-white text-[38px] sm:text-[54px] lg:text-[72px] font-semibold tracking-[-0.01em] leading-[1.15] max-w-[900px] mx-auto">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-white/80 text-body-s sm:text-body-m lg:text-body-l max-w-[620px] mx-auto leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-8 sm:mt-10 w-full flex justify-center">
          <SearchBar
            placeholder="Course, topic, creator"
            buttonLabel="Search"
            onSearch={(val) => console.log("Search query:", val)}
          />
        </div>

        {/* Boy Image with Floating Badges / Cards */}
        <div className="relative mt-8 sm:mt-12 w-full max-w-[800px] flex justify-center">
          {/* Hero Boy */}
          <div className="relative z-10 w-[340px] sm:w-[440px] md:w-[500px] lg:w-[540px]">
            <Image
              src="/images/hero-boy.png"
              alt="Student with laptop"
              width={540}
              height={580}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Top Left) */}
          <FloatingCard
            variant="white"
            className="absolute z-20 left-2 sm:left-6 md:left-8 lg:left-14 top-8 sm:top-12 py-2.5 px-4 shadow-xl"
          >
            <div className="text-left">
              <p className="text-neutral-950 font-semibold text-label-s sm:text-label-m leading-tight">
                UI/UX Design
              </p>
              <p className="text-neutral-500 text-[10px] sm:text-body-xs mt-0.5 whitespace-nowrap">
                300 Courses · 1000+ Students
              </p>
            </div>
          </FloatingCard>

          {/* Floating Card 2: Learning Progress 55% (Top Right) */}
          <FloatingCard
            variant="white"
            className="absolute z-20 right-2 sm:right-6 md:right-8 lg:right-14 top-10 sm:top-14 py-2.5 px-4 sm:px-5 shadow-xl w-[150px] sm:w-[175px]"
          >
            <div className="text-left">
              <p className="text-neutral-500 text-[11px] sm:text-body-xs font-medium">
                Learning Progress
              </p>
              <p className="text-neutral-950 font-bold text-[22px] sm:text-heading-s leading-tight mt-0.5">
                55%
              </p>
              {/* Lime Progress Bar */}
              <div className="w-full h-1.5 sm:h-2 bg-neutral-100 rounded-full mt-1.5 overflow-hidden">
                <div
                  className="h-full bg-secondary-500 rounded-full"
                  style={{ width: "55%" }}
                />
              </div>
            </div>
          </FloatingCard>

          {/* Floating Card 3: Happy Students (Lime, Mid-Left) */}
          <FloatingCard
            variant="lime"
            className="absolute z-20 left-0 sm:left-4 md:left-6 lg:left-10 bottom-14 sm:bottom-20 py-2.5 px-4 shadow-2xl"
          >
            <div className="text-left">
              <div className="flex items-center justify-between gap-4">
                <p className="text-neutral-950 font-semibold text-label-s sm:text-label-m">
                  Happy Students
                </p>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-900">
                  <span>★</span>
                  <span>4.5 (240)</span>
                </div>
              </div>
              <div className="mt-2">
                <AvatarStack avatars={avatars} count="2K+" size="sm" />
              </div>
            </div>
          </FloatingCard>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
