"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface AuthLayoutProps {
  children: React.ReactNode;
  heading: string;
  description: string;
  showcaseImage?: string;
}

/**
 * AuthLayout Component
 * Provides full-bleed Persian Blue background with 120px grid, minimalist "b" logo mark,
 * left promotional content with 3D showcase graphic, and right form slot.
 */
export function AuthLayout({
  children,
  heading,
  description,
  showcaseImage = "/images/register-showcase.png",
}: AuthLayoutProps) {
  return (
    <main
      className="relative w-full min-h-screen lg:min-h-[1024px] bg-[#003BE2] overflow-x-hidden flex justify-center selection:bg-secondary-400 selection:text-neutral-950"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
        `,
        backgroundSize: "120px 120px",
      }}
    >
      <div className="relative w-full max-w-[1440px] min-h-[1024px] pb-12 lg:pb-0">
        {/* ========================================================================= */}
        {/* Header Bar: Only the "b" Logo Mark                                       */}
        {/* ========================================================================= */}
        <header className="w-full h-[100px] lg:h-[120px] px-6 lg:px-[122px] flex items-center">
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
        {/* Main 2-Column Content Layout (Left: Text & Showcase, Right: Form Slot)    */}
        {/* ========================================================================= */}
        <div className="relative w-full px-6 lg:px-0 flex flex-col lg:block">
          {/* Left Column Text (width: 475px, top: 0px, left: 122px) */}
          <div className="lg:absolute lg:left-[122px] lg:top-[0px] w-full max-w-[475px] flex flex-col items-start gap-[16px] z-10">
            <h1 className="text-[20px] font-semibold text-[#F5F5F6] tracking-[-0.01em] leading-[120%] font-heading">
              {heading}
            </h1>
            <p className="text-[18px] font-normal text-[#F5F5F6] leading-[160%] font-body">
              {description}
            </p>
          </div>

          {/* Left Column Graphic Showcase (top: 185px, left: 97px) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:left-[97px] lg:top-[185px] w-full max-w-[548px] h-[400px] sm:h-[480px] lg:h-[585px] pointer-events-none select-none z-10">
            <div className="relative w-full h-full">
              <Image
                src={showcaseImage}
                alt="Showcase"
                fill
                priority
                className="object-contain object-left-top"
                sizes="(max-width: 1024px) 100vw, 548px"
              />
            </div>
          </div>

          {/* Right Column Slot: Form Card */}
          {children}
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
