import type { HeroContent } from "./types";

export const heroContent: HeroContent = {
  eyebrow: "EDUCAÇÃO FINANCEIRA PARA A VIDA",
  headline: [
    { text: "Seja protagonista\nda " },
    { text: "sua vida financeira!", highlight: true },
  ],
  subheadline: [
    { text: "Organize suas" },
    { text: " finanças, assuma o controle das suas decisões e transforme seus " },
    { text: "objetivos ", highlight: true },
    { text: "em " },
    { text: "conquistas! ", highlight: true },
  ],
  description: [
    { text: "O " },
    { text: "@simplanejar ", highlight: true },
    {
      text: "ajuda você a desenvolver hábitos financeiros saudáveis, fazer escolhas conscientes e construir uma vida financeira mais equilibrada, tornando-se protagonista da sua própria história.",
    },
  ],
  image: {
    src: "/images/image5.3.png",
    alt: "Pessoas em diferentes fases da vida organizando suas finanças e planejando o futuro",
  },
  buttons: [
    {
      label: "Conheça o Sim Planejar!",
      href: "/sobre",
      variant: "primary",
      icon: "sparkle",
    },
    {
      label: "Conheça a idealizadora Simone Costa",
      href: "/sobre#simone-costa",
      variant: "secondary",
      icon: "user",
    },
  ],
  featureCards: [
    {
      category: "Livro",
      categoryColor: "purple",
      title: "Planejamento Financeiro:\nVocê no Controle!",
      href: "/book",
      icon: "book",
    },
    {
      category: "Simuladores",
      categoryColor: "teal",
      title: "Explore nossas\nferramentas",
      href: "/simuladores",
      icon: "calculator",
    },
  ],
  trustBar: {
    items: [
      {
        title: "Organize",
        subtitle: "suas finanças",
        icon: "wallet",
      },
      {
        title: "Realize",
        subtitle: "seus sonhos",
        icon: "star",
      },
      {
        title: "Planeje",
        subtitle: "seu futuro",
        icon: "calendar",
      },
    ],
    headline: "Conteúdo 100% confiável e acessível",
    description:
      "Feito para apoiar você em todas as fases da sua vida financeira.",
  },
};
