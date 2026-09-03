import { LegalPageLayout } from "../../src/components/legal/LegalPageLayout";
import { termsSections } from "../../src/contents/termos-content";

export const metadata = {
    title: "Termos de Uso | Sim Planejar",
    description:
        "Conheça os Termos de Uso do SIM PLANEJAR e as condições de utilização da plataforma.",
};

export default function TermosDeUsoPage() {
    return (
        <LegalPageLayout
            eyebrow="TERMOS DE USO"
            title="Termos de Uso do Sim Planejar"
            welcome="Bem-vindo ao SIM PLANEJAR!"
            intro1="No SIM PLANEJAR, a privacidade e a proteção dos seus dados são tratadas com responsabilidade e transparência."
            intro2="Ao navegar pelo site, utilizar os simuladores, responder pesquisas ou acessar os conteúdos disponibilizados, você concorda com os presentes Termos de Uso."
            heroImage="/images/HeroPrivacidadeTermos.png"
            icon="/icons/IconPagTermos.svg"
            sections={termsSections}
        />
    );
}