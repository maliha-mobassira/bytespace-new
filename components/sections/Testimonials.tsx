"use client";

import React from "react";
import Image from "next/image";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  cardHeightClass?: string;
  offsetClass?: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonial-1.jpg",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    cardHeightClass: "md:h-[436px]",
    offsetClass: "md:translate-y-0",
  },
  {
    id: "james-l",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonial-2.jpg",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    cardHeightClass: "md:h-[436px]",
    offsetClass: "md:translate-y-[32px]",
  },
  {
    id: "alex-b",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonial-3.jpg",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    cardHeightClass: "md:h-[436px]",
    offsetClass: "md:translate-y-0",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Community Testimonials"
      className="relative w-full min-h-[784px] bg-[#FAFAFA] overflow-hidden flex flex-col items-center justify-center py-[64px] lg:py-[74px]"
    >
      {/* ========================================================================= */}
      {/* Background Decorative Glow Ellipses (Exact Figma Specs)                  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center z-0">
        <div className="relative w-full max-w-[1440px] h-full min-h-[784px]">
          {/* Ellipse 11: Top Right Lime Radial Glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "1137px",
              height: "1137px",
              left: "842px",
              top: "-241px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
              filter: "blur(20px)",
            }}
          />

          {/* Ellipse 12: Top Center/Right Lime Accent */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "672px",
              height: "672px",
              left: "395px",
              top: "-138px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
              filter: "blur(20px)",
            }}
          />

          {/* Ellipse 8: Bottom Left Blue Radial Glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "1137px",
              height: "1137px",
              left: "-442px",
              top: "149px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
              filter: "blur(20px)",
            }}
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Content Container (width: 1204px, gap: 72px)                              */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1204px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col items-start gap-[48px] lg:gap-[72px]">
        {/* Header Row: Title & Intro Paragraph */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-[24px] lg:gap-[43px]">
          {/* Heading M */}
          <h2 className="w-full lg:w-[577px] text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-[#000000] tracking-[-0.01em] leading-[120%] font-heading">
            Discover What Our Community Is Saying
          </h2>

          {/* Body L / Intro */}
          <p className="w-full lg:w-[580px] text-[16px] sm:text-[17px] lg:text-[18px] text-[#4F4F4F] font-normal leading-[160%] font-body">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Cards Row (Exact Figma 374px cards, 41px gap) */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-[24px] lg:gap-[41px]">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`w-full max-w-[374px] md:w-[374px] ${item.cardHeightClass || "h-auto"} ${
                item.offsetClass || ""
              } bg-[#FFFFFF] rounded-[24px] p-[24px] flex flex-col items-start gap-[24px] shadow-[0px_4px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1`}
              style={{
                borderRadius: "24px",
              }}
            >
              {/* Circular Avatar (80px x 80px) */}
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              {/* Author Info Stack */}
              <div className="flex flex-col items-start">
                <h3 className="text-[20px] font-semibold text-[#000000] tracking-[-0.01em] leading-[120%] font-heading">
                  {item.name}
                </h3>
                <span className="text-[18px] font-normal text-[#003BE2] leading-[160%] font-body">
                  {item.role}
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-[18px] font-normal text-[#4F4F4F] leading-[160%] font-body">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
