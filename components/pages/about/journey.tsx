import { VscFlag } from "react-icons/vsc";
import { FiYoutube, FiTarget } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegStar, FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const data = {
    title: "NOSSA JORNADA",
    subtitle: "Uma história construída **etapa por etapa.**",
    description: "Desde 2014, o SIM PLANEJAR tem como propósito tornar o planejamento financeiro mais acessível, simples e próximo da realidade das pessoas, incentivando maior consciência financeira e ajudando cada indivíduo a **assumir o controle da própria vida financeira** por meio de pequenas mudanças e decisões mais conscientes no dia a dia.",
    quote: "Acreditamos que pequenas mudanças hoje constroem **grandes conquistas** amanhã.",
    dates: [
        {
            year: "2014",
            title: "O início de um propósito",
            description: "O SIM PLANEJAR nasce com o objetivo de disseminar educação financeira de forma simples, prática e acessível para todos os brasileiros.",
            icon: VscFlag
        },
        {
            year: "2016",
            title: "Conteúdo que transforma",
            description: "Lançamento do canal no YouTube com séries educativas que ajudaram milhares de pessoas a entender melhor suas finanças.",
            icon: FiYoutube
        },
        {
            year: "2018",
            title: "Crescimento da comunidade",
            description: "A comunidade SIM PLANEJAR se fortalece nas redes sociais, levando informação de qualidade para ainda mais pessoas.",
            icon: PiUsersThree
        },
        {
            year: "2020",
            title: "Chegada do livro",
            description: "Publicação do livro \"Planejamento Financeiro: Você no controle!\", ampliando o impacto e gerando ainda mais transformações.",
            color: "#01AEAA",
            icon: GoBook
        },
        {
            year: "2022",
            title: "Novos recursos e ferramentas",
            description: "Criação de simuladores e ferramentas gratuitas para apoiar decisões financeiras mais conscientes e planejadas.",
            color: "#01AEAA",
            icon: BsGraphUpArrow
        },
        {
            year: "Hoje",
            title: "Um futuro com mais possibilidades",
            description: "Seguimos evoluindo para inspirar, educar e apoiar ainda mais pessoas a conquistarem seus sonhos e construírem uma vida financeira melhor.",
            color: "#01AEAA",
            icon: FaRegStar
        }
    ],
    lowcard: {
        top: "Nossa missão continua a mesma:",
        main: "Levar educação financeira para a vida real, de forma **simples, humana e transformadora.**",
        icons: [
            {
                icon: CiHeart,
                text: "Mais conhecimento para melhores escolhas."
            },
            {
                icon: FiTarget,
                text: "Mais planejamento para alcançar objetivos."
            }, 
            {
                icon: PiUsersThree,
                text: "Mais pessoas protagonistas da sua vida financeira."
            }
        ]
    }
};

const CONNECTOR_SECONDARY_COLOR = "#01AEAA";

function renderHighlightedText(
  text: string,
  color: string = "text-primary",
  newLine: boolean = false
) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} className={`${color} ${newLine ? "block" : ""}`}>{part}</span>
      : part
  );
}

function QuoteBox({ className = "" }: { className?: string }) {
    return (
        <div className={`relative w-full min-h-[120px] flex items-center justify-center p-5 sm:p-6 bg-card-bg shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[10px] ${className}`}>
            <img
                className="absolute top-3 left-3 sm:top-4 sm:left-4 w-5 h-3 sm:w-6 sm:h-4"
                src="/about/journey/open-quote.png"
                alt=""
            />
            <p className="font-bold text-center text-base sm:text-lg md:text-2xl px-6 sm:px-10 md:px-16 py-2 break-words">
                {renderHighlightedText(data.quote)}
            </p>
            <img
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-5 h-3 sm:w-6 sm:h-4"
                src="/about/journey/close-quote.png"
                alt=""
            />
        </div>
    );
}

export default function Journey() {
    return (
        <section id="nossa-jornada" className="w-full py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto font-nunito overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col">
                    <h1 className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-left">
                        {data.title}
                    </h1>
                    <div className="w-[40px] h-[5px] my-4 bg-gradient-to-r from-primary to-secondary rounded-[10px]"/>
                    <h2 className="text-[24px] sm:text-[28px] md:text-[36px] xl:text-[48px] font-extrabold text-[#000416] mb-4 text-left leading-tight">
                        {renderHighlightedText(
                            data.subtitle, 
                            "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", 
                            true
                        )}
                    </h2>
                    <p className="font-semibold text-base md:text-lg text-foreground leading-relaxed">
                        {renderHighlightedText(data.description)}
                    </p>

                    <QuoteBox className="hidden lg:block mt-8" />
                </div>

                <div className="w-full flex items-center justify-center">
                    <img
                        src="/about/journey/journey.png"
                        alt="Ilustração da Nossa Jornada com marcos e objetivos"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <QuoteBox className="lg:hidden mt-2" />
            </div>

            <div className="flex xl:hidden flex-col w-full max-w-2xl mx-auto gap-8 my-12 px-2">
                {data.dates.map((dt, index) => {
                    const Icon = dt.icon;
                    const isLast = index === data.dates.length - 1;
                    const accentColor = dt.color ? dt.color : undefined;

                    return (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-x-4 gap-y-1 w-full items-start">
                            <div className="flex flex-col items-center justify-start h-full">
                                <Icon
                                    className="h-8 w-8 text-primary shrink-0"
                                    style={accentColor ? { color: accentColor } : undefined}
                                />
                                {!isLast ? (
                                    <div
                                        className="w-[2px] flex-1 my-2 bg-primary min-h-[40px]"
                                        style={accentColor ? { backgroundColor: accentColor } : undefined}
                                    />
                                ) : (
                                    <FaArrowRight
                                        className="text-base rotate-90 mt-2 shrink-0"
                                        style={{ color: CONNECTOR_SECONDARY_COLOR }}
                                    />
                                )}
                            </div>

                            <div className="flex flex-col pb-4">
                                <h3
                                    className="text-primary font-bold text-lg"
                                    style={accentColor ? { color: accentColor } : undefined}
                                >
                                    {dt.year} — {dt.title}
                                </h3>
                                <p className="text-base font-semibold text-foreground/80 mt-1">
                                    {dt.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="hidden xl:flex xl:flex-row w-full justify-between items-start my-16">
                {data.dates.map((dt, index) => {
                    const Icon = dt.icon;
                    const isLast = index === data.dates.length - 1;
                    const isSecondHalf = index >= 3;
                    const accentColor = dt.color ? dt.color : undefined;

                    return (
                        <div key={index} className="flex flex-row items-start flex-1">
                            <div className="flex flex-col items-center text-center shrink-0 w-36 lg:w-40">
                                <h3
                                    className="text-primary font-bold text-lg"
                                    style={accentColor ? { color: accentColor } : undefined}
                                >
                                    {dt.year}
                                </h3>

                                <Icon
                                    className="text-primary h-10 w-10 my-2"
                                    style={accentColor ? { color: accentColor } : undefined}
                                />

                                <h4
                                    className="text-primary font-semibold mb-2 text-base leading-snug"
                                    style={accentColor ? { color: accentColor } : undefined}
                                >
                                    {dt.title}
                                </h4>

                                <p className="text-base text-foreground/80 leading-relaxed">{dt.description}</p>
                            </div>

                            {!isLast ? (
                                <div className="flex-1 flex items-center h-4 mt-[50px] px-2">
                                    <div
                                        className={`w-full h-[2px] ${!isSecondHalf ? "bg-primary" : ""}`}
                                        style={isSecondHalf ? { backgroundColor: CONNECTOR_SECONDARY_COLOR } : undefined}
                                    />
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 lg:mt-16 w-full rounded-[10px] bg-[#F2F0FD] shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-6 lg:p-8 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 xl:gap-8">
                <div className="flex items-center gap-4 w-full xl:w-auto xl:max-w-md">
                    <div className="bg-primary rounded-full p-4 shrink-0">
                        <PiUsersThree className="text-white h-7 w-7 lg:h-9 lg:w-9"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-base sm:text-[18px] text-dark-blue">{data.lowcard.top}</h3>
                        <h2 className="font-extrabold text-base sm:text-xl lg:text-[22px] leading-snug">
                            {renderHighlightedText(
                                data.lowcard.main, 
                                "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", 
                                true
                            )}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full xl:w-auto flex-1">
                    {data.lowcard.icons.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className="flex items-center gap-3 p-3 rounded-[10px] bg-[#F2F0FD]/60 sm:bg-transparent" key={index}>
                                <div className="bg-[#E2DDFF] shadow-[0_2px_8px_rgba(0,0,0,0.15)] rounded-full p-3 shrink-0">
                                    <Icon className="text-primary h-6 w-6 lg:h-7 lg:w-7"/>
                                </div>
                                <p className="font-semibold text-base text-foreground leading-snug">{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}