import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import "@/app/layout";

import Alvo from "./assetsQuestionaire/alvo.svg";
import CaixaDeTexto from "./assetsQuestionaire/caixadetexto.svg";
import Casal from "./assetsQuestionaire/casal.png";
import Escudo from "./assetsQuestionaire/escudo.svg";
import Grafico from "./assetsQuestionaire/grafico.svg";
import HomemComputador from "./assetsQuestionaire/homemComputador.png";
import MulherComputador from "./assetsQuestionaire/mulherComputador.png";
import Presente from "./assetsQuestionaire/presente.svg";
import Senhora from "./assetsQuestionaire/senhora.png";

const gradient = "bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8]";

const imageAlt = {
    alvoAlt: "Alvo",
    caixadeTextoAlt: "Caixa de diálogo",
    casalAlt: "Casal sorrindo olhando para o tablet",
    escudoAlt: "Escudo com fechadura no centro",
    graficoAlt: "Gráfico de pizza",
    hComputadorAlt: "Homem sorrindo usando o notebook",
    mComputadorAlt: "Mulher anotando em caderno ao lado do notebook",
    presenteAlt: "Pacote de presente",
    senhoraAlt: "Senhora usando o tablet ao lado de um livro"
};

const firstText = {
    prev: "TESTE DE PERFIL DE INVESTIDOR", //degrade
    title: {
        t1: "Descubra qual é o seu ",
        t2: "perfil de investidor." //roxo
    },
    blueText: "Conhecer o seu perfil é o primeiro passo para tomar decisões mais conscientes.", //azul escuro
    text: "Mais importante do que buscar rentabilidades ou seguir tendências é compreender o seu perfil, o seu momento e o seu nível tolerância ao risco."
};

const secondText = {
    title: "Investir começa pelo autoconhecimento.",
    text: {
        t1: "Seja protagonista da sua vida financeira.",
        t2: "Você no controle." //roxo
    }
};

const box = {
    titles: {
        t1: "7 perguntas rápidas",
        t2: "Resultado imediato",
        t3: "100% gratuito",
        t4: "Educacional"
    },
    text: {
        p1: "Leva cerca de 2 minutos.",
        p2: "Você descobre seu perfil.",
        p3: "Sem custo.",
        p4: "Não representa recomendação de investimentos."
    }
};

const button = "Fazer o teste";

export function Box() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8 lg:my-12 p-5 sm:p-8 rounded-[10px] bg-[#FCFCFE] shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-[#F2F0FD]">
            <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F2F0FD] overflow-hidden flex items-center justify-center shrink-0">
                    <Image src={CaixaDeTexto} alt={imageAlt.caixadeTextoAlt} className="w-[50%] h-[50%] object-contain" />
                </div>
                <div className="flex flex-col justify-center min-w-0 text-[#071F6B]">
                    <h3 className="text-sm sm:text-base lg:text-lg m-0 font-bold leading-tight">{box.titles.t1}</h3>
                    <p className="text-sm m-0 font-semibold leading-snug">{box.text.p1}</p>
                </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F2F0FD] overflow-hidden flex items-center justify-center shrink-0">
                    <Image src={Grafico} alt={imageAlt.graficoAlt} className="w-[50%] h-[50%] object-contain" />
                </div>
                <div className="flex flex-col justify-center min-w-0 text-[#071F6B]">
                    <h3 className="text-sm sm:text-base lg:text-lg m-0 font-bold leading-tight">{box.titles.t2}</h3>
                    <p className="text-sm m-0 font-semibold leading-snug">{box.text.p2}</p>
                </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F2F0FD] overflow-hidden flex items-center justify-center shrink-0">
                    <Image src={Escudo} alt={imageAlt.escudoAlt} className="w-[50%] h-[50%] object-contain" />
                </div>
                <div className="flex flex-col justify-center min-w-0 text-[#071F6B]">
                    <h3 className="text-sm sm:text-base lg:text-lg m-0 font-bold leading-tight">{box.titles.t3}</h3>
                    <p className="text-sm m-0 font-semibold leading-snug">{box.text.p3}</p>
                </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F2F0FD] overflow-hidden flex items-center justify-center shrink-0">
                    <Image src={Presente} alt={imageAlt.presenteAlt} className="w-[50%] h-[50%] object-contain" />
                </div>
                <div className="flex flex-col justify-center min-w-0 text-[#071F6B]">
                    <h3 className="text-sm sm:text-base lg:text-lg m-0 font-bold leading-tight">{box.titles.t4}</h3>
                    <p className="text-sm m-0 font-semibold leading-snug">{box.text.p4}</p>
                </div>
            </div>
        </div>
    );
}

export default function Questionaire() {
    return (
        <section className="font-sans overflow-x-hidden my-[50px] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 max-w-[1440px] mx-auto">

            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">

                <div className="flex flex-col w-full lg:w-[55%] xl:w-[60%] gap-6 lg:gap-8">

                    {/* primeiro parágrafo */}
                    <div className="flex flex-col gap-3 mt-2 lg:mt-4">
                        <h3 className="text-[20px] xl:text-[24px] font-bold gradient-text whitespace-nowrap">{firstText.prev}</h3>
                        <h1 className="w-full font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000416] leading-tight">
                            {firstText.title.t1}
                            <span className="text-[#7C4DFF]">{firstText.title.t2}</span>
                        </h1>
                        <h2 className="text-[#071F6B] font-bold text-lg sm:text-xl lg:text-2xl leading-snug">{firstText.blueText}</h2>
                        <p className="font-semibold text-sm sm:text-base text-foreground/80 leading-relaxed">{firstText.text}</p>
                    </div>

                    {/* imagens 1 mobile */}
                    <div className="grid grid-cols-2 gap-4 w-full lg:hidden">
                        <Image
                            src={MulherComputador}
                            alt={imageAlt.mComputadorAlt}
                            className="w-full aspect-[5/4] object-cover rounded-2xl block shadow-sm"
                        />
                        <Image
                            src={Casal}
                            alt={imageAlt.casalAlt}
                            className="w-full aspect-[5/4] object-cover rounded-2xl block shadow-sm"
                        />
                    </div>

                    {/* segundo parágrafo */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[#7C4DFF] font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight">{secondText.title}</h1>
                        <div className="gradient-background my-2 h-[5px] w-[40px] rounded-[10px]" />
                        <p className="font-extrabold text-lg sm:text-xl text-[#000416] leading-snug">{secondText.text.t1} <br /> <span className="text-[#071F6B]">{secondText.text.t2}</span></p>
                    </div>

                    {/* botão desktop */}
                    <div className="font-bold hidden md:block mt-4">
                        <Link href="/suitability/form" className="w-full md:w-fit md:max-w-[320px] flex flex-row justify-center items-center gap-3 py-3.5 px-8 border-none cursor-pointer rounded-xl bg-[#7C4DFF] text-white transition-colors duration-300 ease-in-out hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200">
                            <Image src={Alvo} alt={imageAlt.alvoAlt} className="w-6 h-6 object-contain" />
                            {button}
                        </Link>
                    </div>
                </div>

                {/* imagens laterais (desktop) */}
                <div className="w-full lg:w-[45%] xl:w-[40%] hidden lg:grid grid-cols-2 gap-4 xl:gap-6 shrink-0">
                    <Image src={MulherComputador} alt={imageAlt.mComputadorAlt} className="w-full h-auto rounded-2xl object-cover shadow-sm" />
                    <Image src={Casal} alt={imageAlt.casalAlt} className="w-full h-auto rounded-2xl object-cover shadow-sm" />
                    <Image src={HomemComputador} alt={imageAlt.hComputadorAlt} className="w-full h-auto rounded-2xl object-cover shadow-sm" />
                    <Image src={Senhora} alt={imageAlt.senhoraAlt} className="w-full h-auto rounded-2xl object-cover shadow-sm" />
                </div>
            </div>

            {/* box */}
            <div>
                <Box />
            </div>

            {/* imagens 2 mobile */}
            <div className="grid grid-cols-2 gap-4 w-full lg:hidden my-6">
                <Image
                    src={HomemComputador}
                    alt={imageAlt.hComputadorAlt}
                    className="w-full aspect-[5/4] object-cover rounded-2xl block shadow-sm"
                />
                <Image
                    src={Senhora}
                    alt={imageAlt.senhoraAlt}
                    className="w-full aspect-[5/4] object-cover rounded-2xl block shadow-sm"
                />
            </div>

            {/* botão mobile */}
            <div className="font-bold block md:hidden my-6">
                <Link href="/suitability/form" className="w-full flex flex-row justify-center items-center gap-3 py-3.5 px-6 border-none cursor-pointer rounded-xl bg-[#7C4DFF] text-white transition-colors duration-300 ease-in-out hover:bg-[#6939E8]">
                    <Image src={Alvo} alt={imageAlt.alvoAlt} className="w-6 h-6 object-contain" />
                    {button}
                </Link>
            </div>
        </section>
    );
}