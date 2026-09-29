import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

/**
 * Reusable Button component adhering to ByteSpace design tokens.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-body transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary: "bg-[#D4FB20] text-[#242528] rounded-[24px] hover:brightness-105 shadow-sm",
    secondary: "bg-[#003BE2] text-white rounded-[24px] hover:bg-[#0034C7]",
    outline: "border border-[#CED0D3] text-[#242528] rounded-[16px] hover:bg-neutral-50",
    ghost: "bg-transparent text-[#242528] hover:bg-neutral-100",
  };

  const sizeStyles = {
    sm: "h-[36px] px-[16px] py-[8px] text-[14px] leading-[120%]",
    md: "h-[46px] px-[24px] py-[12px] text-[18px] leading-[120%]",
    lg: "h-[52px] px-[32px] py-[14px] text-[18px] leading-[120%]",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
