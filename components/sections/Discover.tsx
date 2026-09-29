"use client";

import React, { useState } from "react";
import { CourseCard } from "@/components/ui/CourseCard";
import {
  COURSES,
  CATEGORIES_ROW_1,
  CATEGORIES_ROW_2,
  CATEGORIES_ROW_3,
} from "@/lib/data/courses";
import { Category } from "@/lib/types";

/**
 * Discover Section (Explore Courses)
 * Features interactive multi-tier category pill selection and responsive course card grid.
 */
export function Discover() {
  const [activeCategory, setActiveCategory] = useState<string>("featured");

  const renderPill = (cat: Category) => {
    const isActive = activeCategory === cat.id;

    if (cat.isSpecial) {
      return (
        <button
          key={cat.id}
          type="button"
          onClick={() => setActiveCategory(cat.id)}
          className="h-[46px] px-[24px] py-[12px] rounded-[24px] border border-[#CED0D3] bg-transparent text-[#242528] text-[18px] font-medium leading-[120%] tracking-tight transition-all duration-150 hover:border-neutral-400 active:scale-95 cursor-pointer whitespace-nowrap"
        >
          {cat.name}
        </button>
      );
    }

    if (isActive) {
      return (
        <button
          key={cat.id}
          type="button"
          onClick={() => setActiveCategory(cat.id)}
          className="h-[46px] px-[24px] py-[12px] rounded-[24px] bg-[#D4FB20] text-[#242528] text-[18px] font-medium leading-[120%] tracking-tight transition-all duration-150 shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
        >
          {cat.name}
        </button>
      );
    }

    return (
      <button
        key={cat.id}
        type="button"
        onClick={() => setActiveCategory(cat.id)}
        className="h-[46px] px-[24px] py-[12px] rounded-[24px] border border-[#CED0D3] bg-white text-[#242528] text-[18px] font-medium leading-[120%] tracking-tight transition-all duration-150 hover:border-neutral-400 hover:bg-neutral-50 active:scale-95 cursor-pointer whitespace-nowrap"
      >
        {cat.name}
      </button>
    );
  };

  return (
    <section
      id="explore-courses"
      aria-label="Explore Courses"
      className="relative w-full bg-white pt-[72px] pb-[96px] overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Frame 3: Heading & Subtitle */}
        <div className="w-full max-w-[917px] flex flex-col items-center text-center gap-[16px]">
          <h2
            className="text-[36px] sm:text-[42px] lg:text-[44px] font-semibold text-[#242528] tracking-[-0.01em] leading-[120%]"
            style={{
              fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
            }}
          >
            Explore 10,000+ Available Courses
          </h2>

          <p
            className="text-[16px] sm:text-[18px] text-[#4B4C53] font-normal leading-[160%] max-w-[620px]"
            style={{
              fontFamily: "var(--font-body, 'Satoshi', sans-serif)",
            }}
          >
            Discover courses taught by real-world professionals, and join a
            community of lifelong learners.
          </p>
        </div>

        {/* Tab_Categories */}
        <div className="w-full max-w-[1200px] flex flex-col items-center gap-[16px] mt-[48px] sm:mt-[56px]">
          <div className="w-full flex items-center justify-center gap-[16px] overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES_ROW_1.map(renderPill)}
          </div>
          <div className="w-full flex items-center justify-center gap-[16px] overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES_ROW_2.map(renderPill)}
          </div>
          <div className="w-full flex items-center justify-center gap-[16px] overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES_ROW_3.map(renderPill)}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center mt-[48px] sm:mt-[64px]">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Discover;
