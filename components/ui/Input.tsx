import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 * Reusable Input component with optional label and error state.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col items-start gap-[8px]">
        {label && (
          <label
            htmlFor={id}
            className="text-[14px] font-medium text-[#242528] leading-[120%] font-body"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full h-[52px] px-[24px] py-[12px] bg-[#FFFFFF] border border-[#E5E6E8] rounded-[12px] text-[18px] text-[#242528] placeholder:text-[#82868E] font-body focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <span className="text-[13px] text-red-500 font-body">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
