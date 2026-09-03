import Link from "next/link";

import {
  BookIcon,
  CalculatorIcon,
  CardArrowIcon,
} from "@/components/icons";

import type { HeroFeatureCard } from "./types";

const categoryColorStyles = {
  purple: "text-brand-purple",
  teal: "text-[#01AEAA]",
} as const;

const iconMap = {
  book: BookIcon,
  calculator: CalculatorIcon,
} as const;

type HeroFeatureCardProps = {
  card: HeroFeatureCard;
  className?: string;
};

export function HeroFeatureCardItem({ card, className = "" }: HeroFeatureCardProps) {
  const Icon = iconMap[card.icon];

  return (
    <Link
        href={card.href}
        className={`flex min-h-[70px] items-center gap-2 rounded-[10px] bg-white p-3 shadow-[0_1px_4px_rgba(0,0,0,0.25)] transition-shadow duration-200 hover:shadow-[0_3px_8px_rgba(0,0,0,0.18)] sm:min-h-[95px] sm:gap-4 sm:px-5 sm:py-4 ${className}`}
    >
      <Icon className="shrink-0" />
      <div className="min-w-0 flex-1">
        <p
          className={`text-[14px] font-semibold leading-[22px] md:text-[16px] lg:text-[18px] ${categoryColorStyles[card.categoryColor]}`}
        >
          {card.category}
        </p>
        <p className="hidden whitespace-pre-line text-[14px] font-semibold leading-5 text-brand-dark-blue sm:block md:text-[16px] lg:text-[18px]">
          {card.title}
        </p>
      </div>
      <CardArrowIcon className="hidden shrink-0 text-brand-purple md:block" />
    </Link>
  );
}
