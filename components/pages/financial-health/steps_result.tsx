import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { FiTarget } from "react-icons/fi";
import { RiStairsFill } from "react-icons/ri";
import { LiaMountainSolid } from "react-icons/lia";

const data = {
    top: "O QUE FAZER COM O SEU RESULTADO?",
    title: "O que fazer com o **seu resultado?**",
    p: " Entender seu Índice de Saúde Financeira é mais do que conhecer uma nota: é **descobrir oportunidades** para tomar decisões mais conscientes e transformar sua relação com o dinheiro. Cada resultado onde você está hoje e o que pode melhorar para alcançar seus objetivos.",
    cards: [
        {
            icon: FaMagnifyingGlassChart,
            number: "01",
            title: "Conheça e aceite seu ponto de partida",
            p: "Reconhecer sua realidade financeira é o primeiro passo para qualquer mudança duradoura.",
            colour: "#7C4DFF"
        },
        {
            icon: GoChecklist,
            number: "02",
            title: "Identifique oportunidades de melhoria",
            p: "Seu resultado mostra pontos que precisam de atenção e áreas onde você já está indo bem",
            colour: "#006FDB"
        },
        {
            icon: FiTarget,
            number: "03",
            title: "Defina Prioridades e crie hábitos",
            p: "Pequenas ações consistentes no dia a dia geram grandes transformações no futuro",
            colour: "#01AEAA"
        },
        {
            icon: RiStairsFill,
            number: "04",
            title: "Acompanhe sua evolução e celebre conquistas",
            p: "Reavaliar e ajustar sua jornada é essencial para manter o foco e alcançar seus sonhos",
            colour: "#7C4DFF"
        }
    ],
    bottom: {
        icon: LiaMountainSolid,
        title: "A sua jornada financeira continua!",
        p: "Use seu resultado como um guia para tomar decisões melhores, fortalecer seus hábitos e construir uma vida financeira mais equilibrada e alinhada com seus sonhos."
    }
}

function renderHighlightedText(
  text: string,
  color: string = "text-primary",
  newLine: boolean = false
) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} className={`${color} ${(newLine ? "block" : undefined)}`}>{part}</span>
      : part
  )
}

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Seta mais grossa e conectada com as pontas (sem espaço entre a linha e a ponta)
function CardArrow({ colour = "#7C4DFF" }: { colour?: string }) {
  return (
    <div className="hidden lg:flex items-center justify-center shrink-0 w-6 self-center">
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
        <line x1="0" y1="7" x2="21" y2="7" stroke={colour} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 1.5L27 7L20 12.5" stroke={colour} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function StepsResults() {
    return(
        <section className="max-w-[1440px] p-5 mx-auto">
            {/* Texto de cima: igual, porém menor e mais estreito no mobile */}
            <div className="flex flex-col items-center text-center">
                <div className="text-primary bg-[#E1D6FE] w-fit py-[5px] px-[8px] rounded-[10px] font-bold text-xs sm:text-sm mb-4 sm:mb-5">{data.top}</div>
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl w-[90%] sm:w-full">{renderHighlightedText(data.title)}</h2>
                <div className="w-[40px] h-[5px] mt-4 mb-4 sm:mt-5 sm:mb-5 bg-gradient-to-r from-primary to-secondary rounded-[10px]"/>
                <p className="w-[85%] sm:w-[80%] md:w-[70%] lg:w-[80%] text-sm sm:text-base">
                    {renderHighlightedText(data.p)}
                </p>
            </div>

            <div className="flex flex-col gap-4 w-full py-8 lg:hidden">
                {data.cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center gap-4 rounded-[10px] p-4 w-full"
                        style={{ backgroundColor: hexToRgba(card.colour, 0.1) }}
                    >
                        <div
                            className="rounded-full w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center border-4 border-white box-border"
                            style={{ backgroundColor: hexToRgba(card.colour, 0.1) }}
                        >
                            <card.icon size={28} color={card.colour} />
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <h5 className="text-primary font-bold text-lg sm:text-xl shrink-0">{card.number}</h5>
                                <h4 className="font-semibold text-sm sm:text-base">{card.title}</h4>
                            </div>
                            <div className="bg-primary w-8 h-1 my-2 rounded-[10px]"/>
                            <p className="text-xs sm:text-sm">{card.p}</p>
                        </div>
                    </div>
                ))}
            </div>

<div className="hidden lg:grid grid-cols-4 gap-2 items-stretch w-full py-8">
    {data.cards.map((card, index) => (
        <div key={index} className="flex items-center">
            <div
                className="flex flex-col w-full h-130 rounded-[10px] p-10 items-center overflow-hidden"
                style={{ backgroundColor: hexToRgba(card.colour, 0.1) }}
            >
                <div
                    className="rounded-full w-[120px] h-[120px] mb-4 flex items-center justify-center shrink-0 border-4 border-white box-border"
                    style={{ backgroundColor: hexToRgba(card.colour, 0.1) }}
                >
                    <card.icon size={60} color={card.colour} />
                </div>
                <div className="text-left w-full flex flex-col flex-1 min-h-0">
                    <h5 style={{color: hexToRgba(card.colour, 1)}}  className="font-bold text-4xl mb-1">{card.number}</h5>
                    <h4 className="font-semibold text-2xl leading-tight overflow-hidden h-[3.5rem]">{card.title}</h4>
                    <div style={{backgroundColor: hexToRgba(card.colour, 1)}} className="w-8 h-1 my-5 rounded-[10px] shrink-0"/>
                    <p className="text-xl overflow-hidden line-clamp-4">{card.p}</p>
                </div>
            </div>
            {index < data.cards.length - 1 && <CardArrow colour="#7C4DFF" />}
        </div>
    ))}
</div>

            <div className="lg:hidden w-full min-h-45 flex flex-col bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px] border border-primary overflow-hidden">
                <div className="flex flex-col gap-4 p-5">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary rounded-full w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center box-border">
                            <data.bottom.icon size={34} color="#fff" />
                        </div>
                        <h3 className="text-lg sm:text-2xl text-primary font-bold flex-1">{data.bottom.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base">{data.bottom.p}</p>
                </div>
                <div className="flex justify-end">
                    <img
                        src="/flag.png"
                        alt=""
                        className="h-20 sm:h-24 object-contain"
                    />
                </div>
            </div>

            <div className="hidden lg:flex w-full min-h-45 items-stretch gap-6 bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px] border border-primary overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6 p-5 sm:pl-10 lg:pl-20 sm:py-10 flex-1">
                    <div className="p-3 bg-primary rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-35 lg:h-35 shrink-0 flex items-center justify-center box-border">
                        <data.bottom.icon size={100} color="#fff" />
                    </div>
                    <div className="flex flex-col flex-1 text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl text-primary font-bold">{data.bottom.title}</h3>
                        <p className="w-full lg:w-[90%] text-base sm:text-lg mt-3 sm:mt-5">{data.bottom.p}</p>
                    </div>
                </div>
                <div className="flex items-end shrink-0">
                    <img
                        src="/flag.png"
                        alt=""
                        className="h-40 xl:h-48 object-contain"
                    />
                </div>
            </div>
        </section>
    )
}