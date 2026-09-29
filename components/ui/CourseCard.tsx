"use client";

import React from "react";
import Image from "next/image";
import { Course } from "@/lib/types";
import { AvatarStack } from "@/components/ui/AvatarStack";

export interface CourseCardProps {
  course: Course;
}

/**
 * CourseCard Component
 * Displays course thumbnail, title, rating, instructor, level badge, student avatars, and price.
 */
export function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      className="box-border w-full sm:w-[373px] h-[384px] bg-white border border-[#CED0D3] rounded-[24px] p-[16px] flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:border-neutral-300 group"
      style={{
        boxSizing: "border-box",
        borderRadius: "24px",
      }}
    >
      {/* 1. Thumbnail Image with Badges */}
      <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden shrink-0 bg-[#443131]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 341px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. Middle Block: Title, Rating, Author */}
      <div className="flex flex-col gap-[4px] mt-[8px]">
        {/* Title and Rating Row */}
        <div className="flex items-center justify-between gap-2">
          <h3
            className="text-[20px] font-bold text-[#242528] tracking-tight leading-[1.2] truncate"
            title={course.title}
          >
            {course.title}
          </h3>

          <div className="flex items-center gap-1 text-[17px] text-[#4B4C53] font-normal shrink-0">
            <span>{course.rating.toFixed(1)}</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="#B8BCC5"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Author Link */}
        <p className="text-[14px] text-[#666973]">
          by{" "}
          <span className="text-[#0043FF] font-medium hover:underline cursor-pointer">
            {course.author}
          </span>
        </p>
      </div>

      {/* 3. Level Badge & Student Avatars Row */}
      <div className="flex items-center justify-between pt-[4px]">
        {/* Level Badge */}
        <div className="h-[32px] px-[12px] py-[6px] bg-[#F5F5F6] rounded-[24px] flex items-center gap-[6px] text-[13px] text-[#4B4C53] font-medium">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="text-[#666973]"
            aria-hidden="true"
          >
            <rect x="2" y="9" width="3" height="5" rx="0.5" />
            <rect x="6.5" y="6" width="3" height="8" rx="0.5" />
            <rect x="11" y="3" width="3" height="11" rx="0.5" />
          </svg>
          <span>{course.level}</span>
        </div>

        {/* Student Avatars Overlapping Group */}
        <AvatarStack countBadge={course.studentCount} />
      </div>

      {/* 4. Price Row */}
      <div className="flex items-baseline gap-[2px] pt-[2px] pb-[4px]">
        <span className="text-[24px] font-bold text-[#0043FF] leading-none">
          {course.price}
        </span>
        <span className="text-[14px] font-normal text-[#666973]">
          {course.period}
        </span>
      </div>
    </article>
  );
}

export default CourseCard;
