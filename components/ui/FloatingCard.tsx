import React from "react";
import { cn } from "@/lib/utils";

export interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Reusable FloatingCard container with rounded corners and elevated shadow.
 */
export function FloatingCard({ children, className, ...props }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[20px] p-[20px] shadow-[0px_10px_40px_rgba(0,0,0,0.08)] border border-[#CED0D3]/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default FloatingCard;
