type SvgIconProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

function SvgIcon({ src, width, height, className }: SvgIconProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      className={`shrink-0 ${className ?? ""}`}
    />
  );
}

export function SparkleIcon({ className }: { className?: string }) {
  return (
    <SvgIcon
      src="/icons/Vector1.svg"
      width={44}
      height={25}
      className={className}
    />
  );
}

export function UserIcon({ className }: { className?: string }) {
  return (
    <SvgIcon
      src="/icons/Vector2.svg"
      width={28}
      height={28}
      className={className}
    />
  );
}

export function BookIcon({ className }: { className?: string }) {
  return (
    <SvgIcon
      src="/icons/Vector3.svg"
      width={38}
      height={37}
      className={className}
    />
  );
}

export function CalculatorIcon({ className }: { className?: string }) {
  return (
    <SvgIcon
      src="/icons/Vector4.svg"
      width={39}
      height={40}
      className={className}
    />
  );
}

export function WalletIcon({ className }: { className?: string }) {
  return (
    <SvgIcon
      src="/icons/Vector5.svg"
      width={30}
      height={30}
      className={className}
    />
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <SvgIcon
      src="/icons/Vector6.svg"
      width={30}
      height={30}
      className={className}
    />
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <SvgIcon
      src="/icons/Vector7.svg"
      width={30}
      height={30}
      className={className}
    />
  );
}

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <SvgIcon
      src="/icons/Vector8.svg"
      width={30}
      height={30}
      className={className}
    />
  );
}

export function CardArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M4 2L12 8L4 14" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
