import {
  CalendarIcon,
  ShieldIcon,
  StarIcon,
  WalletIcon,
} from "@/components/icons";

import type { HeroTrustBar } from "./types";

const trustIconMap = {
  wallet: WalletIcon,
  star: StarIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
} as const;

function TrustDivider() {
  return (
    <span
      aria-hidden="true"
      className="mx-1.5 h-6 w-px shrink-0 bg-brand-purple sm:mx-2 lg:mx-3"
    />
  );
}

type HeroTrustBarProps = {
  trustBar: HeroTrustBar;
};

export function HeroTrustBarSection({ trustBar }: HeroTrustBarProps) {
  const Shield = trustIconMap.shield;

  return (
    <div className="w-full">
      {/* Layout Mobile */}
      <div className="flex flex-col gap-6 lg:hidden">
        <div className="grid grid-cols-3 gap-2 text-center">
          {trustBar.items.map((item) => {
            const Icon = trustIconMap[item.icon];
            return (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10">
                  <Icon />
                </div>
                <p className="text-[14px] leading-4 text-brand-dark-blue">
                  <span className="block font-bold">{item.title}</span>
                  <span className="font-semibold">{item.subtitle}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 rounded-[10px] bg-white p-4 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-purple/10">
            <Shield />
          </div>
          <div>
            <p className="text-[14px] font-bold leading-4 text-brand-dark-blue">
              {trustBar.headline}
            </p>
            <p className="text-[14px] font-semibold leading-4 text-brand-dark-blue">
              {trustBar.description}
            </p>
          </div>
        </div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden rounded-[10px] bg-white px-2 lg:block sm:px-3 lg:px-4">
        <div className="flex min-h-[72px] w-full items-center">
          <div className="flex shrink-0 items-center">
            {trustBar.items.map((item, index) => {
              const Icon = trustIconMap[item.icon];

              return (
                <div key={item.title} className="flex items-center">
                  {index > 0 ? <TrustDivider /> : null}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="shrink-0 scale-90 sm:scale-100">
                      <Icon />
                    </span>
                    <p className="text-[14px] leading-4 text-brand-dark-blue lg:text-base lg:leading-5">
                      <span className="block font-bold">{item.title}</span>
                      <span className="font-semibold">{item.subtitle}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <TrustDivider />

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <span className="shrink-0 scale-90 sm:scale-100">
              <Shield />
            </span>
            <p className="max-w-[9rem] text-[14px] font-bold leading-4 text-brand-dark-blue sm:max-w-none lg:text-lg lg:leading-5">
              {trustBar.headline}
            </p>
          </div>

          <TrustDivider />

          <p className="min-w-0 flex-1 text-[14px] font-semibold leading-4 text-brand-dark-blue lg:text-lg lg:leading-5">
            {trustBar.description}
          </p>
        </div>
      </div>
    </div>
  );
}