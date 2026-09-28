"use client";

import React from "react";

interface CategoryCardItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const CATEGORIES: CategoryCardItem[] = [
  {
    id: "design",
    name: "Design",
    icon: (
      <svg width="34" height="34" viewBox="0 0 60 60" fill="none">
        <path
          d="M36.36 29.2633L38.715 26.9083L33.09 21.2833L30.735 23.6383L24.525 17.4433C23.355 16.2733 21.45 16.2733 20.28 17.4433L17.43 20.2933C16.26 21.4633 16.26 23.3683 17.43 24.5383L23.625 30.7333L16.5 37.8733V43.4983H22.125L29.265 36.3583L35.46 42.5533C36.885 43.9783 38.805 43.4533 39.705 42.5533L42.555 39.7033C43.725 38.5333 43.725 36.6283 42.555 35.4583L36.36 29.2633ZM25.77 28.6033L19.56 22.4083L22.395 19.5583L24.3 21.4633L22.53 23.2483L24.645 25.3633L26.43 23.5783L28.605 25.7533L25.77 28.6033ZM37.59 40.4383L31.395 34.2433L34.245 31.3933L36.42 33.5683L34.635 35.3533L36.75 37.4683L38.535 35.6833L40.44 37.5883L37.59 40.4383Z"
          fill="#242528"
        />
        <path
          d="M43.065 22.5583C43.65 21.9733 43.65 21.0283 43.065 20.4433L39.555 16.9333C38.85 16.2283 37.875 16.4983 37.44 16.9333L34.695 19.6783L40.32 25.3033L43.065 22.5583Z"
          fill="#242528"
        />
      </svg>
    ),
  },
  {
    id: "development",
    name: "Development",
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
        <path
          d="M10.5 7.5H25.5V10.5H28.5V4.5C28.5 2.85 27.15 1.515 25.5 1.515L10.5 1.5C8.85 1.5 7.5 2.85 7.5 4.5V10.5H10.5V7.5ZM23.115 24.885L30 18L23.115 11.115L21 13.245L25.755 18L21 22.755L23.115 24.885ZM15 22.755L10.245 18L15 13.245L12.885 11.115L6 18L12.885 24.885L15 22.755ZM25.5 28.5H10.5V25.5H7.5V31.5C7.5 33.15 8.85 34.5 10.5 34.5H25.5C27.15 34.5 28.5 33.15 28.5 31.5V25.5H25.5V28.5Z"
          fill="#242528"
        />
      </svg>
    ),
  },
  {
    id: "it-software",
    name: "IT & Software",
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
        <path
          d="M30 27C31.65 27 32.985 25.65 32.985 24L33 9C33 7.35 31.65 6 30 6H6C4.35 6 3 7.35 3 9V24C3 25.65 4.35 27 6 27H0L0 30H36V27H30ZM6 9H30V24H6V9Z"
          fill="#242528"
        />
      </svg>
    ),
  },
  {
    id: "business",
    name: "Business",
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 10.5V7.5C18 5.85 16.65 4.5 15 4.5H6C4.35 4.5 3 5.85 3 7.5V28.5C3 30.15 4.35 31.5 6 31.5H30C31.65 31.5 33 30.15 33 28.5V13.5C33 11.85 31.65 10.5 30 10.5H18ZM9 28.5H6V25.5H9V28.5ZM9 22.5H6V19.5H9V22.5ZM9 16.5H6V13.5H9V16.5ZM9 10.5H6V7.5H9V10.5ZM15 28.5H12V25.5H15V28.5ZM15 22.5H12V19.5H15V22.5ZM15 16.5H12V13.5H15V16.5ZM15 10.5H12V7.5H15V10.5ZM28.5 28.5H18V25.5H21V22.5H18V19.5H21V16.5H18V13.5H28.5C29.325 13.5 30 14.175 30 15V27C30 27.825 29.325 28.5 28.5 28.5ZM27 16.5H24V19.5H27V16.5ZM27 22.5H24V25.5H27V22.5Z"
          fill="#242528"
        />
      </svg>
    ),
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
        <path
          d="M16.5 21H13.5C13.5 13.545 19.545 7.5 27 7.5V10.5C21.195 10.5 16.5 15.195 16.5 21ZM27 16.5V13.5C22.86 13.5 19.5 16.86 19.5 21H22.5C22.5 18.51 24.51 16.5 27 16.5ZM10.5 6C10.5 4.335 9.165 3 7.5 3C5.835 3 4.5 4.335 4.5 6C4.5 7.665 5.835 9 7.5 9C9.165 9 10.5 7.665 10.5 6ZM17.175 6.75H14.175C13.815 8.88 11.985 10.5 9.75 10.5H5.25C4.005 10.5 3 11.505 3 12.75V16.5H12V13.11C14.79 12.225 16.875 9.765 17.175 6.75ZM28.5 25.5C30.165 25.5 31.5 24.165 31.5 22.5C31.5 20.835 30.165 19.5 28.5 19.5C26.835 19.5 25.5 20.835 25.5 22.5C25.5 24.165 26.835 25.5 28.5 25.5ZM30.75 27H26.25C24.015 27 22.185 25.38 21.825 23.25H18.825C19.125 26.265 21.21 28.725 24 29.61V33H33V29.25C33 28.005 31.995 27 30.75 27Z"
          fill="#242528"
        />
      </svg>
    ),
  },
  {
    id: "photography",
    name: "Photography",
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
        <path
          d="M30 7.5H25.245L22.5 4.5H13.5L10.755 7.5H6C4.35 7.5 3 8.85 3 10.5V28.5C3 30.15 4.35 31.5 6 31.5H30C31.65 31.5 33 30.15 33 28.5V10.5C33 8.85 31.65 7.5 30 7.5ZM30 28.5H6V10.5H12.075L14.82 7.5H21.18L23.925 10.5H30V28.5Z"
          fill="#242528"
        />
        <path
          d="M18 19.5C19.6569 19.5 21 18.1569 21 16.5C21 14.8431 19.6569 13.5 18 13.5C16.3431 13.5 15 14.8431 15 16.5C15 18.1569 16.3431 19.5 18 19.5Z"
          fill="#242528"
        />
        <path
          d="M22.17 21.87C20.895 21.315 19.485 21 18 21C16.515 21 15.105 21.315 13.83 21.87C12.72 22.35 12 23.43 12 24.645V25.5H24V24.645C24 23.43 23.28 22.35 22.17 21.87Z"
          fill="#242528"
        />
      </svg>
    ),
  },
];

export function LearningPaths() {
  return (
    <section
      id="learning-paths"
      aria-label="Learning Paths"
      className="relative w-full bg-white pt-[72px] pb-[80px] overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* ========================================================================= */}
        {/* Frame 9: Header Block                                                    */}
        {/* Exact Figma: width: 917px, height: 117px, gap: 16px, auto-layout center  */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[917px] flex flex-col items-center text-center gap-[16px]">
          {/* Heading S */}
          <h2
            className="w-full max-w-[792px] text-[30px] sm:text-[36px] font-semibold text-[#040819] tracking-[-0.01em] leading-[120%]"
            style={{
              fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
            }}
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>

          {/* Body L */}
          <p
            className="w-full max-w-[917px] text-[16px] sm:text-[18px] text-[#82868E] font-normal leading-[160%]"
            style={{
              fontFamily: "var(--font-body, 'Satoshi', sans-serif)",
            }}
          >
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring
            there&apos;s something for everyone. Unleash your potential and explore
            our carefully curated categories.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* Frame 10: Categories Cards Grid (6 Cards, 167px x 167px each, gap 40px)   */}
        {/* Exact Figma: width: 1202px, height: 167px, top: 2833px                   */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1202px] mt-[68px]">
          <div className="flex flex-wrap items-center justify-center gap-[24px] sm:gap-[32px] lg:gap-[40px]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className="box-border w-[167px] h-[167px] bg-white border border-[#CED0D3] rounded-[24px] flex flex-col items-center justify-center gap-[16px] cursor-pointer transition-all duration-200 hover:shadow-md hover:border-neutral-400 hover:-translate-y-1 group select-none"
                style={{
                  borderRadius: "24px",
                }}
              >
                {/* Frame 4: Electric Lime Icon Circle (60px x 60px) */}
                <div
                  className="w-[60px] height-[60px] h-[60px] bg-[#D4FB20] rounded-[40px] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-xs shrink-0"
                  style={{
                    borderRadius: "40px",
                  }}
                >
                  {cat.icon}
                </div>

                {/* Category Label */}
                <span className="text-[16px] font-medium text-[#242528] tracking-tight leading-none text-center">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningPaths;
