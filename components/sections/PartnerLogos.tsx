import React from "react";

export function PartnerLogos() {
  return (
    <section
      aria-label="Partner Logos"
      className="relative w-full bg-[#F5F5F6] overflow-hidden"
      style={{
        backgroundColor: "#F5F5F6",
      }}
    >
      {/* Centered 1440px Frame matching Figma Frame 2 (width: 1440px, height: 202px, top: 1024px) */}
      <div className="w-full flex items-center justify-center">
        <div className="relative w-full max-w-[1440px] h-[100px] sm:h-[140px] md:h-[170px] lg:h-[202px] flex items-center justify-center">
          <img
            src="/images/partner-logos.svg"
            alt="Trusted partner logos"
            width={1440}
            height={202}
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
}

export default PartnerLogos;
