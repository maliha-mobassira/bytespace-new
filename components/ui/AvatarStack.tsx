import React from "react";
import Image from "next/image";

export interface AvatarStackProps {
  avatars: string[];
  count?: string;
  size?: "xs" | "sm" | "md";
  className?: string;
}

const sizeMap = {
  xs: "w-6 h-6 text-[9px] -space-x-1.5 border-[1.5px]",
  sm: "w-7 h-7 text-[10px] -space-x-2 border-2",
  md: "w-8 h-8 text-[11px] -space-x-2.5 border-2",
};

const dimensionMap = {
  xs: 24,
  sm: 28,
  md: 32,
};

export function AvatarStack({
  avatars,
  count,
  size = "sm",
  className = "",
}: AvatarStackProps) {
  const dim = dimensionMap[size];

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center -space-x-2">
        {avatars.map((src, index) => (
          <div
            key={index}
            className={`relative rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0 ${
              size === "xs" ? "w-6 h-6" : size === "md" ? "w-8 h-8" : "w-7 h-7"
            }`}
          >
            <Image
              src={src}
              alt={`Student ${index + 1}`}
              width={dim}
              height={dim}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {count && (
          <div
            className={`relative rounded-full overflow-hidden bg-neutral-950 text-white font-medium flex items-center justify-center border-2 border-white shrink-0 ${
              size === "xs"
                ? "w-6 h-6 text-[9px]"
                : size === "md"
                ? "w-8 h-8 text-[11px]"
                : "w-7 h-7 text-[10px]"
            }`}
          >
            {count}
          </div>
        )}
      </div>
    </div>
  );
}

export default AvatarStack;
