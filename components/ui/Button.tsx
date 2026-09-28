import React from "react";

export type ButtonVariant =
  | "primary"
  | "blue"
  | "secondary"
  | "outline"
  | "ghost"
  | "white";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-secondary-500 text-neutral-950 hover:bg-secondary-400 active:bg-secondary-600 shadow-sm",
  blue:
    "bg-primary-600 text-white hover:bg-primary-500 active:bg-primary-700 shadow-sm",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300",
  outline:
    "border border-neutral-200 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100",
  ghost:
    "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 active:bg-neutral-200",
  white:
    "bg-white text-neutral-950 hover:bg-neutral-50 active:bg-neutral-100 shadow-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-label-s gap-1.5",
  md: "h-11 px-6 text-label-m gap-2",
  lg: "h-13 px-8 text-label-l gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      disabled,
      leftIcon,
      rightIcon,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center font-medium rounded-full cursor-pointer select-none transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 ${
          variantStyles[variant]
        } ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
