import Image from "next/image";

import { Button } from "@/components/button";
import { SparkleIcon, UserIcon } from "@/components/icons";

import { heroContent } from "./data";
import { HeroFeatureCardItem } from "./hero-feature-card";
import { HeroTrustBarSection } from "./hero-trust-bar";
import { HighlightedText } from "./highlighted-text";
import type { HeroContent } from "./types";

const buttonIconMap = {
  sparkle: SparkleIcon,
  user: UserIcon,
} as const;

type HeroProps = {
  content?: HeroContent;
};

export function Hero({ content = heroContent }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden px-4 py-6 sm:px-6 sm:py-11 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(400px,760px)] lg:items-center lg:gap-10">
          
          <div className="order-1 flex flex-col">
            <p className="gradient-text text-[20px] font-bold leading-8 xl:text-[24px]">
              {content.eyebrow}
            </p>

            <h1 className="mt-3 text-[24px] font-extrabold leading-[1.2] text-[#071F6B] sm:mt-5 sm:text-[28px] md:text-[36px] xl:text-[48px]">
              <HighlightedText segments={content.headline} />
            </h1>

            <p className="mt-4 text-[20px] font-bold leading-[1.17] text-[#071F6B] sm:mt-6 sm:text-[22px] md:text-[24px] xl:text-[28px]">
              <HighlightedText segments={content.subheadline} />
            </p>

            <p className="mt-4 text-[16px] font-semibold leading-[1.5] text-[#071F6B] sm:mt-6 sm:text-xl">
              <HighlightedText segments={content.description} />
            </p>
          </div>

          <div className="order-2 relative mx-auto w-full max-w-[280px] sm:max-w-[420px] md:max-w-[520px] lg:order-2 lg:mx-0 lg:max-w-none lg:self-start">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={823}
              height={781}
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 520px, 760px"
              className="h-auto w-full object-contain object-top"
            />
          </div>

<div className="order-3 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:flex-wrap sm:gap-5 lg:order-3">
  {content.buttons.map((button, index) => {
    const Icon = button.icon ? buttonIconMap[button.icon] : null;

    return (
      <Button
        key={button.label}
        label={button.label}
        href={button.href}
        variant={button.variant}
        icon={Icon ? <Icon /> : undefined}
        className={`w-full justify-center px-3 text-center text-[14px] transition-all md:text-[16px] lg:text-[18px] sm:w-auto ${
	        index === 0 ? "" : "border-2 border-[#01AEAA] text-[#01AEAA] hover:bg-[#D7ECF1] hover:shadow-lg transition-all duration-200"
        }`}
      />
    );
  })}
</div>

          <div className="order-4 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-5 lg:order-4">
            {content.featureCards.map((card) => (
              <HeroFeatureCardItem
                key={card.category}
                card={card}
                className="w-full flex-1"
              />
            ))}
          </div>

        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 w-full max-w-[1398px] sm:mt-12">
        <HeroTrustBarSection trustBar={content.trustBar} />
      </div>
    </section>
  );
}
