"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full h-[120px] bg-transparent">
      <Container className="relative h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[8.2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 rounded-lg group transition-transform duration-200 active:scale-95"
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

        {/* Desktop Navigation Links (Centered) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2"
        >
          <Link
            href="/"
            className="text-label-m text-white font-medium hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 rounded-md py-1 px-2"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-label-m text-white/70 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 rounded-md py-1 px-2"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className="text-label-m text-white/70 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 rounded-md py-1 px-2"
          >
            Creators
          </Link>
        </nav>

        {/* Right Section: Auth Links & Cart */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Desktop Auth Links */}
          <div className="hidden sm:flex items-center gap-6 lg:gap-8">
            <Link
              href="/login"
              className="text-label-m text-white/80 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 rounded-md py-1"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-label-m text-white/80 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 rounded-md py-1"
            >
              Join Us
            </Link>
          </div>

          {/* Cart Icon Button */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className="flex items-center justify-center p-2 text-white hover:opacity-80 transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
          >
            <Image
              src="/images/icon-cart.svg"
              alt="Cart"
              width={16}
              height={20}
              className="w-4 h-5"
            />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-11 h-11 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[110px] left-6 right-6 bg-primary-950/95 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-label-m text-white font-medium py-2 border-b border-white/10"
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="text-label-m text-white/80 hover:text-white py-2 border-b border-white/10"
            >
              Courses
            </Link>
            <Link
              href="/creators"
              onClick={() => setMobileMenuOpen(false)}
              className="text-label-m text-white/80 hover:text-white py-2 border-b border-white/10"
            >
              Creators
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-label-m text-white/90 hover:text-white py-2"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="text-label-m text-secondary-500 font-semibold py-2"
              >
                Join Us →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
