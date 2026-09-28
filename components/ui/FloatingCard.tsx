import React from "react";

export interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "lime";
  children: React.ReactNode;
  className?: string;
}

export function FloatingCard({
  variant = "white",
  children,
  className = "",
  ...props
}: FloatingCardProps) {
  const variantStyles =
    variant === "lime"
      ? "bg-secondary-500 text-neutral-950 shadow-xl border border-secondary-400/40"
      : "bg-white text-neutral-950 shadow-xl border border-white/60";

  return (
    <div
      className={`rounded-2xl p-4 transition-transform duration-300 hover:scale-105 select-none ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default FloatingCard;
