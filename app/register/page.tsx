"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Input } from "@/components/ui/Input";

/**
 * RegisterPage Component
 * Full-page registration route with name, email, password inputs, and brand layout.
 */
export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      {/* Right Column: Register Card (579px x 784px) */}
      <div className="mt-12 lg:mt-0 lg:absolute lg:left-[741px] lg:top-[0px] w-full max-w-[579px] min-h-[784px] bg-[#FFFFFF] rounded-[24px] shadow-[0px_10px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between p-[32px] sm:p-[48px] lg:p-[61px_63px] z-20">
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

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-end gap-[24px]"
          >
            <Input
              id="fullName"
              type="text"
              label="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jamie Davis"
            />

            <Input
              id="email"
              type="email"
              label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="designer@example.com"
            />

            <Input
              id="password"
              type="password"
              label="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center w-[123px] h-[46px] px-[24px] py-[12px] bg-[#D4FB20] text-[#242528] rounded-[24px] text-[18px] font-medium leading-[120%] font-body shadow-sm hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Footer Link */}
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
    </AuthLayout>
  );
}
