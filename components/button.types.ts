import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  showArrow?: boolean;
  className?: string;
};
