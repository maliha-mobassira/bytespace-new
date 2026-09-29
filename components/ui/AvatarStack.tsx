import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarStackProps {
  avatars?: string[];
  countBadge?: string;
  className?: string;
}

const DEFAULT_AVATARS = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
];

/**
 * Reusable AvatarStack component showing overlapping circular user avatars with optional badge.
 */
export function AvatarStack({
  avatars = DEFAULT_AVATARS,
  countBadge = "26+",
  className,
}: AvatarStackProps) {
  return (
    <div className={cn("flex items-center -space-x-[8px]", className)}>
      {avatars.map((avatar, idx) => (
        <div
          key={idx}
          className="relative w-[28px] h-[28px] rounded-full border-2 border-white overflow-hidden bg-neutral-200 shrink-0"
        >
          <Image src={avatar} alt="" fill sizes="28px" className="object-cover" />
        </div>
      ))}
      {countBadge && (
        <div className="relative w-[28px] h-[28px] rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] text-[11px] font-bold flex items-center justify-center select-none shadow-xs shrink-0">
          {countBadge}
        </div>
      )}
    </div>
  );
}

export default AvatarStack;
