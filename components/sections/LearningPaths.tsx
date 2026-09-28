import React from "react";

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
      </div>
    </section>
  );
}

export default LearningPaths;
