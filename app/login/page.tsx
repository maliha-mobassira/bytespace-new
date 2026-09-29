"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login authentication
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
          {/* Left Column Text (width: 475px, top: 0px, left: 122px)                 */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:absolute lg:left-[122px] lg:top-[0px] w-full max-w-[475px] flex flex-col items-start gap-[16px] z-10">
            {/* Heading XS */}
            <h1 className="text-[20px] font-semibold text-[#F5F5F6] tracking-[-0.01em] leading-[120%] font-heading">
              Sign in with ease
            </h1>

            {/* Body L */}
            <p className="text-[18px] font-normal text-[#F5F5F6] leading-[160%] font-body">
              Experience a seamless and efficient sign-in process that grants you
              instant access to a world of knowledge.
            </p>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* Left Column Graphic Showcase (cards & 3D ornaments, top: 185px, left: 97px) */}
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
          {/* Right Column: Login Card (Login_Frame: 579px min-height: 784px)        */}
          {/* ----------------------------------------------------------------------- */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:left-[741px] lg:top-[0px] w-full max-w-[579px] min-h-[784px] bg-[#FFFFFF] rounded-[24px] shadow-[0px_10px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between p-[32px] sm:p-[48px] lg:p-[61px_63px] z-20">
            {/* Top Stack: Title + Form + Divider + Social */}
            <div className="w-full flex flex-col items-start">
              {/* Header Title Stack */}
              <div className="flex flex-col items-start mb-[32px] lg:mb-[40px]">
                <span className="text-[18px] font-normal text-[#003BE2] leading-[160%] font-body">
                  Sign In
                </span>
                <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[120%] font-heading mt-[4px]">
                  Welcome Back
                </h2>
              </div>

              {/* Login Form */}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-end gap-[24px]"
              >
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

                {/* Sign In Button (aligned to right, height: 46px) */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-[32px] h-[46px] bg-[#D4FB20] text-[#242528] rounded-[24px] text-[18px] font-medium leading-[120%] font-body shadow-sm hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
                >
                  Sign In
                </button>
              </form>

              {/* Divider: or */}
              <div className="relative w-full flex items-center justify-center my-[36px] lg:my-[44px]">
                <div className="w-full h-[1px] bg-[#CED0D3]" />
                <span className="absolute bg-[#FFFFFF] px-[16px] text-[16px] font-normal text-[#82868E] font-body">
                  or
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="w-full flex items-center justify-center gap-[20px]">
                {/* Facebook Button */}
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-[56px] h-[56px] rounded-[16px] border border-[#CED0D3] flex items-center justify-center text-[#242528] hover:bg-neutral-50 hover:border-neutral-400 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <svg
                    className="w-[26px] h-[26px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-[56px] h-[56px] rounded-[16px] border border-[#CED0D3] flex items-center justify-center text-[#242528] hover:bg-neutral-50 hover:border-neutral-400 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <svg
                    className="w-[24px] h-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.35 11.1H12v2.96h5.36c-.23 1.25-.94 2.31-2 3.01v2.5h3.24c1.89-1.74 2.98-4.3 2.98-7.37 0-.71-.06-1.39-.23-2.1z"
                      fill="#242528"
                    />
                    <path
                      d="M12 21c2.7 0 4.96-.89 6.62-2.43l-3.24-2.5c-.9.6-2.05.95-3.38.95-2.6 0-4.8-1.76-5.59-4.12H3.07v2.58C4.72 19.24 8.08 21 12 21z"
                      fill="#242528"
                    />
                    <path
                      d="M6.41 12.9c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9V6.52H3.07C2.39 7.88 2 9.4 2 11s.39 3.12 1.07 4.48l3.34-2.58z"
                      fill="#242528"
                    />
                    <path
                      d="M12 4.98c1.47 0 2.79.5 3.82 1.49l2.87-2.87C16.95 1.97 14.69 1 12 1 8.08 1 4.72 2.76 3.07 6.52l3.34 2.58c.79-2.36 2.99-4.12 5.59-4.12z"
                      fill="#242528"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bottom: New user? Create an account */}
            <div className="w-full flex items-center justify-center gap-[4px] pt-[32px] lg:pt-0">
              <span className="text-[16px] font-normal text-[#4B4C53] leading-[160%] font-body">
                New user?
              </span>
              <Link
                href="/register"
                className="text-[16px] font-normal text-[#003BE2] leading-[160%] font-body hover:underline transition-all"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
