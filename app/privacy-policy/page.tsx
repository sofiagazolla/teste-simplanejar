import { LegalPageLayout } from "../../src/components/legal/LegalPageLayout";
import { privacySections } from "../../src/contents/privacy-content";

export const metadata = {
  title: "Política de Privacidade | Sim Planejar",
  description:
    "Saiba como o SIM PLANEJAR trata seus dados pessoais, em conformidade com a LGPD.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPageLayout
      eyebrow="POLÍTICA DE PRIVACIDADE"
      title="Política de Privacidade Sim Planejar"
      intro1="No SIM PLANEJAR, a privacidade e a proteção dos seus dados são tratadas com responsabilidade e transparência."
      intro2="Esta Política de Privacidade tem como objetivo explicar, de forma simples, quais informações podem ser coletadas, como elas são utilizadas e quais são os seus direitos em relação aos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018)."
      heroImage="/images/HeroPrivacidadeTermos.png"
      icon="/icons/IconPagPrivacidade.svg"
      sections={privacySections}
    />
  );
}