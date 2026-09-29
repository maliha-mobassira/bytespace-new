"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FOOTER_NAV_COLUMNS, LEGAL_LINKS } from "@/lib/data/navigation";

/**
 * Footer Component
 * Global footer with newsletter signup, categorization columns, and copyright.
 */
export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmail("");
  };

  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="relative w-full bg-[#FFFFFF] border-t border-[#CED0D3] flex justify-center"
    >
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-[120px] pt-[60px] lg:pt-[71px] pb-[32px] flex flex-col justify-between min-h-[525px] gap-[60px] lg:gap-[130px]">
        {/* ========================================================================= */}
        {/* Footer Navigation: Newsletter & Links Row                                 */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[48px] lg:gap-[92px]">
          {/* Left Column: Brand & Newsletter (width: 528px) */}
          <div className="w-full max-w-[528px] flex flex-col items-start gap-[45px]">
            {/* Logo & Headline */}
            <div className="flex flex-col items-start gap-[16px]">
              {/* Logo (Mark + Text) */}
              <Link
                href="/"
                className="flex items-center gap-[8.2px] focus:outline-none"
                aria-label="ByteSpace Home"
              >
                <div className="relative w-[28.88px] h-[31.5px] shrink-0">
                  <Image
                    src="/images/logo-mark.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span
                  className="text-[#242528] tracking-tight"
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

              {/* Subtitle */}
              <p className="w-full max-w-[528px] text-[14px] font-normal text-[#242528] leading-[160%] font-body">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="w-full max-w-[504px] flex flex-col items-start gap-[24px]">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-[16px] sm:gap-[24px]"
              >
                {/* Email Input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full sm:w-[376px] h-[52px] px-[24px] py-[18px] bg-[#FFFFFF] border border-[#CED0D3] rounded-[100px] text-[16px] text-[#242528] placeholder:text-[#242528]/60 focus:outline-none focus:border-[#242528] font-body transition-colors"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-[104px] h-[46px] px-[24px] py-[12px] bg-[#D4FB20] text-[#242528] rounded-[24px] text-[18px] font-medium leading-[120%] font-body hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm shrink-0"
                >
                  Search
                </button>
              </form>

              {/* Legal Notice */}
              <p className="w-full max-w-[504px] text-[12px] font-normal text-[#242528] leading-[160%] font-body">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Column: Navigation Links (3 columns, 40px gap) */}
          <div className="w-full max-w-[580px] grid grid-cols-2 sm:grid-cols-3 gap-[32px] sm:gap-[40px]">
            {FOOTER_NAV_COLUMNS.map((col, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-[16px]"
              >
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[14px] font-normal text-[#242528] leading-[160%] font-body hover:text-[#003BE2] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Bottom Section: Divider line & Copyright Bar                             */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-start gap-[24px]">
          {/* Divider Line */}
          <div className="w-full h-0 border-t border-[#CED0D3]" />

          {/* Copyright & Secondary Links */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-[16px] text-center sm:text-left">
            <p className="text-[12px] font-normal text-[#242528] leading-[160%] font-body">
              @ 2023 ByteSpace. All rights reserved.
            </p>

            <div className="flex items-center gap-[24px] flex-wrap justify-center">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[12px] font-normal text-[#242528] leading-[160%] font-body hover:text-[#003BE2] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
