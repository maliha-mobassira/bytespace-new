"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AuthShowcase } from "@/components/ui/AuthShowcase";

export interface AuthLayoutProps {
  children: React.ReactNode;
  heading: string;
  description: string;
  showcaseImage?: string;
}

/**
 * AuthLayout Component
 * Full-bleed Persian Blue canvas with 120px grid, minimalist "b" logo mark,
 * individual 3D showcase elements placed at exact Figma coordinates, and right form slot.
 */
export function AuthLayout({
  children,
  heading,
  description,
}: AuthLayoutProps) {
  return (
    <main
      className="relative w-full min-h-screen bg-[#003BE2] overflow-x-hidden flex justify-center selection:bg-secondary-400 selection:text-neutral-950 py-4 lg:py-6"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
        `,
        backgroundSize: "120px 120px",
      }}
    >
      <div className="relative w-full max-w-[1440px] min-h-full pb-8 lg:pb-6 flex flex-col justify-start">
        {/* ========================================================================= */}
        {/* Header Bar: Only the "b" Logo Mark                                       */}
        {/* ========================================================================= */}
        <header className="w-full h-[70px] lg:h-[84px] px-6 lg:px-[122px] flex items-center shrink-0">
          <Link
            href="/"
            className="flex items-center focus:outline-none group transition-transform duration-200 active:scale-95"
            aria-label="ByteSpace Home"
          >
            <div className="relative w-[32px] h-[35px] shrink-0">
              <Image
                src="/images/logo-mark.svg"
                alt="ByteSpace"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>
        </header>

        {/* ========================================================================= */}
        {/* Individual Vector & 3D Showcase Elements placed at exact Figma positions */}
        {/* ========================================================================= */}
        <AuthShowcase />

        {/* ========================================================================= */}
        {/* Main 2-Column Content Layout (Left: Text, Right: Form Slot)               */}
        {/* ========================================================================= */}
        <div className="relative w-full px-6 lg:px-0 flex flex-col lg:block mt-2 lg:mt-0">
          {/* Left Column Text (width: 475px, top: 0px, left: 122px) */}
          <div className="lg:absolute lg:left-[122px] lg:top-[0px] w-full max-w-[475px] flex flex-col items-start gap-[14px] z-10">
            <h1 className="text-[20px] font-semibold text-[#F5F5F6] tracking-[-0.01em] leading-[120%] font-heading">
              {heading}
            </h1>
            <p className="text-[16px] sm:text-[17px] font-normal text-[#F5F5F6] leading-[150%] font-body">
              {description}
            </p>
          </div>

          {/* Right Column Slot: Form Card */}
          {children}
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
