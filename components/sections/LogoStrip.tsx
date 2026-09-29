import React from "react";
import Image from "next/image";

/**
 * LogoStrip Section
 * Displays trusted partner logos across a clean 1440px container ribbon.
 */
export function LogoStrip() {
  return (
    <section
      aria-label="Partner Logos"
      className="relative w-full bg-[#F5F5F6] overflow-hidden"
    >
      <div className="w-full flex items-center justify-center">
        <div className="relative w-full max-w-[1440px] h-[100px] sm:h-[140px] md:h-[170px] lg:h-[202px] flex items-center justify-center">
          <Image
            src="/images/partner-logos.svg"
            alt="Trusted partner logos"
            width={1440}
            height={202}
            priority
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
}

export default LogoStrip;
