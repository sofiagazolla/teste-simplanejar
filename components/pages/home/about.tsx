import Image from "next/image";
import type { IconType } from "react-icons";
import { IoMdArrowForward } from "react-icons/io";
import { HiOutlineBookOpen } from "react-icons/hi";
import { MdOutlineOutlinedFlag, MdOutlinePeopleOutline } from "react-icons/md";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

interface StyledText {
    text: string;
    highlighted ?: boolean;
}

interface Belief {
    icon: IconType;
    title: string;
    text: string;
    color: string;
    bg: string;
}

interface AboutSimplanejarData {
    title: StyledText[];
    subtitle: string;
    text: StyledText[][];
    img: {
        src: string;
        alt: string;
    }
    button: {
        text: string;
        icon: IconType;
    };
    card: {
        title: string;
        beliefs: Belief[];
    }
    
}

const data: AboutSimplanejarData = {
    title: [
        {text: "Você no controle da "},
        {text: "sua vida financeira.", highlighted: true}
    ],
    subtitle: "Sobre o Sim Planejar",
    text: [
        [
            {text: "O SIM PLANEJAR acredita que todo brasileiro pode ser "},
            {text: "protagonista da própria vida financeira ", highlighted: true},
            {text: "quando passa a compreender melhor a relação entre dinheiro, escolhas e futuro."}
        ],
        [
            {text: "Muitas pessoas sonham com a casa própria, uma aposentadoria mais tranquila, uma viagem ou simplesmente uma vida financeira mais organizada, mas não sabem por onde começar quando o assunto é planejamento financeiro."}
        ]
    ],
    img: {
        src: "/aboutSimplanejar.png",
        alt: "Colagem com seis fotos de pessoas diversas em diferentes momentos: mãe e filha guardando moedas em um cofrinho, jovem estudando com notebook, mulher segurando uma bicicleta, indígena com cocar tradicional, casal maduro usando um tablet e mulher cadeirante trabalhando no computador."
    },
    button: {
        text: "Conheça nossa história",
        icon: IoMdArrowForward
    },
    card: {
        title: "O que acreditamos",
        beliefs: [
            {
                icon: HiOutlineBookOpen,
                title: "Educação",
                text: "Acreditamos no poder do conhecimento para transformar vidas. ",
                color: "#7C4DFF",
                bg: "#E8E2F8"
            },
            {
                icon: MdOutlineOutlinedFlag,
                title: "Protagonismo",
                text: "Você é o protagonista da sua história e das suas escolhas.",
                color: "#01AEAA",
                bg: "#D7ECF1"
            },
            {
                icon: BsPersonArmsUp,
                title: "Acessibilidade",
                text: "Informação de qualidade, simples e acessível para todos e todas",
                color: "#071F6B",
                bg: "#DAE6F7"
            },
            {
                icon: FaRegHeart,
                title: "Consciência",
                text: "Promovemos escolhas conscientes hoje para um futuro melhor.",
                color: "#7C4DFF",
                bg: "#E8E2F8"
            },
            {
                icon: MdOutlinePeopleOutline,
                title: "Transformação Social",
                text: "Educação financeira gerando impacto positivo na sociedade.",
                color: "#01AEAA",
                bg: "#D7ECF1"
            }
        ]
    }
}

function StyledParagraph({ parts }: { parts: StyledText[] }) {
    return (
        <p className="font-bold">
            {parts.map((part, i) =>
                part.highlighted ? (
                    <span key={i} className="text-[#7C4DFF]">
                        {part.text}
                    </span>
                ) : (
                    <span key={i}>{part.text}</span>
                )
            )}
        </p>
    );
}

export function About() {
     const ButtonIcon = data.button.icon;
 
    return (
        <section className="overflow-hidden w-full max-w-[1440px] mx-auto px-4 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[4fr_6fr] lg:gap-[77px]">
                {/* Text column */}
                <div className="flex flex-col lg:block order-2 lg:order-1">
                    <div className="mb-4">
                        <span className="bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-[20px] md:text-[24px] font-extrabold uppercase text-transparent">
                            {data.subtitle}
                        </span>
                        <div className="my-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8]" />
                    </div>
 
                    <h1 className="mb-4 text-[24px] md:text-[38px] font-extrabold leading-tight ">
                        {data.title.map((part, i) =>
                            part.highlighted ? (
                                <span
                                    key={i}
                                    className="text-[#7C4DFF]"
                                >
                                    {part.text}
                                </span>
                            ) : (
                                <span key={i}>{part.text}</span>
                            )
                        )}
                    </h1>
 
                    <div className="space-y-4">
                        {data.text.map((paragraph, i) => (
                            <StyledParagraph key={i} parts={paragraph} />
                        ))}
                    </div>
 
                    <a
                        type="button"
                        href="/sobre#nossa-jornada"
                        className="mt-8 inline-flex items-center gap-2 rounded-[10px] mx-auto px-10 py-5 font-extrabold text-white bg-[#7C4DFF] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                        {data.button.text}
                        <ButtonIcon className="text-[20px]" />
                    </a>
                </div>
 
                {/* Image column */}
                <div className="order-1 lg:order-2 shrink-0">
                    <Image src={data.img.src} alt={data.img.alt} width={808} height={640} className="mx-auto w-full max-w-md object-contain lg:max-w-none shrink-0" />
                </div>
                    
            </div>
 
            {/* Beliefs card */}
            <div className="mx-auto mt-12 max-w-[1383px]">
                <div className="rounded-[10px] bg-[#FCFCFE] py-8 px-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[30px]">
                        <div className="text-center lg:max-w-[103px] lg:w-44 lg:shrink-0 lg:text-left">
                            <h2 className="text-lg font-bold text-[#071F6B]">
                                {data.card.title}
                            </h2>
                            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#E8E2F8] lg:mx-0" />
                        </div>
 
                        <div className="flex justify-around flex-wrap lg:grid flex-1 grid-cols-3 gap-x-3 gap-y-8 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-slate-100">
                            {data.card.beliefs.map((belief, i) => {
                                const BeliefIcon = belief.icon;
                                return (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center text-center lg:items-start lg:px-3 lg:text-left first:lg:pl-0"
                                    >
                                        <div
                                            className="mb-3 flex h-11 lg:h-15 w-11 lg:w-15 items-center justify-center rounded-full"
                                            style={{ backgroundColor: belief.bg, color: belief.color }}
                                        >
                                            <BeliefIcon size={30} className="w-6 h-auto lg:w-[30px]" />
                                        </div>
                                        <h3
                                            className="mb-1 font-bold"
                                            style={{ color: belief.color }}
                                        >
                                            {belief.title}
                                        </h3>
                                        <p className="hidden text-sm leading-snug lg:block">
                                            {belief.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}