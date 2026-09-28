"use client";

import React, { useState } from "react";
import { CourseCard, Course } from "@/components/ui/CourseCard";

interface Category {
  id: string;
  name: string;
  isSpecial?: boolean;
}

const ROW_1: Category[] = [
  { id: "featured", name: "Featured" },
  { id: "music", name: "Music" },
  { id: "drawing-painting", name: "Drawing & Painting" },
  { id: "marketing", name: "Marketing" },
  { id: "animation", name: "Animation" },
  { id: "social-media", name: "Social Media" },
  { id: "ui-ux-design", name: "UI/UX Design" },
  { id: "creative-marketing", name: "Creative Marketing" },
];

const ROW_2: Category[] = [
  { id: "digital-illustration", name: "Digital Illustration" },
  { id: "film-video", name: "Film & Video" },
  { id: "crafts", name: "Crafts" },
  { id: "freelance-entrepreneurship", name: "Freelance & Entrepreneurship" },
  { id: "graphic-design", name: "Graphic Design" },
  { id: "photography", name: "Photography" },
];

const ROW_3: Category[] = [
  { id: "productivity", name: "Productivity" },
  { id: "web-development", name: "Web Development" },
  { id: "data-science", name: "Data Science" },
  { id: "cooking", name: "Cooking" },
  { id: "more", name: "+ More", isSpecial: true },
];

const COURSES: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/course-thumb-1.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentCount: "26+",
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/course-thumb-2.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentCount: "26+",
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/course-thumb-3.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentCount: "26+",
  },
  {
    id: "productivity",
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/course-thumb-4.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentCount: "26+",
  },
  {
    id: "money-management",
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/course-thumb-5.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentCount: "26+",
  },
  {
    id: "startup-success",
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image: "/images/course-thumb-6.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentCount: "26+",
  },
];

export function ExploreCourses() {
  const [activeCategory, setActiveCategory] = useState<string>("featured");

  return (
    <section
      id="explore-courses"
      aria-label="Explore Courses"
      className="relative w-full bg-white pt-[72px] pb-[96px] overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* ========================================================================= */}
        {/* Frame 3: Heading & Subtitle                                              */}
        {/* Exact Figma: width: 917px, height: 180px, gap: 16px, auto-layout center  */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[917px] flex flex-col items-center text-center gap-4">
          <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold text-[#242528] tracking-tight leading-[1.2]">
            Discover Your Passion,<br className="hidden sm:inline" />{" "}
            Build Your Skills
          </h2>

          <p className="max-w-[917px] text-[15px] sm:text-[16px] text-[#666973] font-normal leading-[1.6]">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* Tab_Categories: 3 Rows of Filter Pills                                    */}
        {/* Exact Figma: width: 1086px, height: 43px per pill, radius: 24px, gap: 16px */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1086px] mt-[42px] flex flex-col items-center gap-[12px] sm:gap-[16px]">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-[10px] sm:gap-[16px]">
            {ROW_1.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`h-[43px] px-[16px] py-[12px] rounded-[24px] text-[14px] sm:text-[15px] font-medium transition-all duration-150 flex items-center justify-center shrink-0 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8] hover:text-[#242528]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-[10px] sm:gap-[16px]">
            {ROW_2.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`h-[43px] px-[16px] py-[12px] rounded-[24px] text-[14px] sm:text-[15px] font-medium transition-all duration-150 flex items-center justify-center shrink-0 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8] hover:text-[#242528]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-[10px] sm:gap-[16px]">
            {ROW_3.map((cat) => {
              const isActive = activeCategory === cat.id;
              const isSpecial = cat.isSpecial;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`h-[43px] px-[16px] py-[12px] rounded-[24px] text-[14px] sm:text-[15px] font-medium transition-all duration-150 flex items-center justify-center shrink-0 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-xs"
                      : isSpecial
                      ? "bg-[#F5F5F6] text-[#003BE2] font-semibold hover:bg-[#E5E6E8]"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8] hover:text-[#242528]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Frame 8: Course Cards Grid (3 Columns x 2 Rows = 6 Cards)                */}
        {/* Exact Figma: width: 1199px, height: 808px, gap: 40px, top: 1768px       */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1199px] mt-[56px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreCourses;
