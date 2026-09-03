import Link from "next/link";

import type { ButtonProps } from "./button.types";

const variantStyles = {
  primary:
    "text-white shadow-[0_1px_4px_rgba(0,0,0,0.25)] bg-[#7C4DFF] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200",
  secondary:
    "border border-brand-teal bg-white text-brand-teal hover:bg-brand-teal/5",
} as const;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="currentColor"
    >
      <path d="M2 2L10 10L2 18" stroke="currentColor" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

export function Button({
  label,
  href,
  variant = "primary",
  icon,
  showArrow = true,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[78px] items-center gap-3 rounded-[10px] px-6 text-lg font-semibold leading-[22px] transition-colors ${variantStyles[variant]} ${className}`}
    >
      {icon}
      <span>{label}</span>
      {showArrow ? (
        <ArrowIcon
          className={variant === "primary" ? "text-white" : "text-brand-teal"}
        />
      ) : null}
    </Link>
  );
}
