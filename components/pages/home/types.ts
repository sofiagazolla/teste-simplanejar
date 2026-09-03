export type TextSegment = {
  text: string;
  highlight?: boolean;
};

export type ButtonVariant = "primary" | "secondary";

export type HeroButton = {
  label: string;
  href: string;
  variant: ButtonVariant;
  icon?: "sparkle" | "user";
};

export type FeatureCategoryColor = "purple" | "teal";

export type HeroFeatureCard = {
  category: string;
  categoryColor: FeatureCategoryColor;
  title: string;
  href: string;
  icon: "book" | "calculator";
};

export type HeroTrustIcon = "wallet" | "star" | "calendar" | "shield";

export type HeroTrustItem = {
  title: string;
  subtitle: string;
  icon: HeroTrustIcon;
};

export type HeroTrustBar = {
  items: HeroTrustItem[];
  headline: string;
  description: string;
};

export type HeroImage = {
  src: string;
  alt: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: TextSegment[];
  subheadline: TextSegment[];
  description: TextSegment[];
  image: HeroImage;
  buttons: HeroButton[];
  featureCards: HeroFeatureCard[];
  trustBar: HeroTrustBar;
};
