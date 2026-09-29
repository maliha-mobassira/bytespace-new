"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
  };

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
        {/* Header Bar (height: 120px)                                                */}
        {/* ========================================================================= */}
        <header className="w-full h-[100px] lg:h-[120px] px-6 lg:px-[122px] flex items-center">
          <Link
            href="/"
            className="flex items-center gap-[8.2px] focus:outline-none group transition-transform duration-200 active:scale-95"
            aria-label="ByteSpace Home"
          >
            <div className="relative w-[28.88px] h-[31.5px] shrink-0">
              <Image
                src="/images/logo-mark.svg"
                alt=""
                fill
                priority
                className="object-contain"
              />
            </div>
            <span
              className="text-white tracking-tight"
              style={{
                fontFamily: "var(--font-clash, 'Clash Display', sans-serif)",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "100%",
              }}
            >
              ByteSpace
            </span>
          </Link>
        </header>

        {/* ========================================================================= */}
        {/* Main 2-Column Content Layout (Left: Text & Showcase, Right: Form Card)    */}
        {/* ========================================================================= */}
        <div className="relative w-full px-6 lg:px-0 flex flex-col lg:block">
          {/* ----------------------------------------------------------------------- */}
          {/* Left Column Text (width: 475px, top: 120px, left: 122px)               */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:absolute lg:left-[122px] lg:top-[0px] w-full max-w-[475px] flex flex-col items-start gap-[16px] z-10">
            {/* Heading XS */}
            <h1 className="text-[20px] font-semibold text-[#F5F5F6] tracking-[-0.01em] leading-[120%] font-heading">
              Sign up and come in
            </h1>

            {/* Body L */}
            <p className="text-[18px] font-normal text-[#F5F5F6] leading-[160%] font-body">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* Left Column Graphic Showcase (cards & 3D ornaments, top: 305px, left: 97px) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:left-[97px] lg:top-[185px] w-full max-w-[548px] h-[400px] sm:h-[480px] lg:h-[585px] pointer-events-none select-none z-10">
            <div className="relative w-full h-full">
              <Image
                src="/images/register-showcase.png"
                alt="Courses Showcase"
                fill
                priority
                className="object-contain object-left-top"
                sizes="(max-width: 1024px) 100vw, 548px"
              />
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* Right Column: Register Card (Register_Frame: 579px x 784px)             */}
          {/* ----------------------------------------------------------------------- */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:left-[741px] lg:top-[0px] w-full max-w-[579px] min-h-[784px] bg-[#FFFFFF] rounded-[24px] shadow-[0px_10px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between p-[32px] sm:p-[48px] lg:p-[61px_63px] z-20">
            {/* Top Stack: Title + Form */}
            <div className="w-full flex flex-col items-start gap-[32px] lg:gap-[40px]">
              {/* Header Title Stack */}
              <div className="flex flex-col items-start">
                <span className="text-[18px] font-normal text-[#003BE2] leading-[160%] font-body">
                  Create an Account
                </span>
                <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[120%] font-heading mt-[4px]">
                  Welcome to ByteSpace
                </h2>
              </div>

              {/* Registration Form */}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-end gap-[24px]"
              >
                {/* Full Name */}
                <div className="w-full flex flex-col items-start gap-[8px]">
                  <label
                    htmlFor="fullName"
                    className="text-[14px] font-medium text-[#242528] leading-[120%] font-body"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jamie Davis"
                    className="w-full h-[52px] px-[24px] py-[12px] bg-[#FFFFFF] border border-[#E5E6E8] rounded-[12px] text-[18px] text-[#242528] placeholder:text-[#82868E] font-body focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="w-full flex flex-col items-start gap-[8px]">
                  <label
                    htmlFor="email"
                    className="text-[14px] font-medium text-[#242528] leading-[120%] font-body"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    className="w-full h-[52px] px-[24px] py-[12px] bg-[#FFFFFF] border border-[#E5E6E8] rounded-[12px] text-[18px] text-[#242528] placeholder:text-[#82868E] font-body focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                  />
                </div>

                {/* Password */}
                <div className="w-full flex flex-col items-start gap-[8px]">
                  <label
                    htmlFor="password"
                    className="text-[14px] font-medium text-[#242528] leading-[120%] font-body"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full h-[52px] px-[24px] py-[12px] bg-[#FFFFFF] border border-[#E5E6E8] rounded-[12px] text-[18px] text-[#242528] placeholder:text-[#82868E] font-body focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                  />
                </div>

                {/* Continue Button (aligned to right, width: 123px, height: 46px) */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-[123px] h-[46px] px-[24px] py-[12px] bg-[#D4FB20] text-[#242528] rounded-[24px] text-[18px] font-medium leading-[120%] font-body shadow-sm hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
                >
                  Continue
                </button>
              </form>
            </div>

            {/* Bottom: Already have an account? Login */}
            <div className="w-full flex items-center justify-center gap-[4px] pt-[32px] lg:pt-0">
              <span className="text-[16px] font-normal text-[#4B4C53] leading-[160%] font-body">
                Already have an account?
              </span>
              <Link
                href="/login"
                className="text-[16px] font-normal text-[#003BE2] leading-[160%] font-body hover:underline transition-all"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
