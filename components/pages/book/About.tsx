'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineShoppingCart, MdOutlineKeyboardArrowUp, MdOutlinePeopleAlt } from "react-icons/md";
import { PiBookOpenText, PiClipboardText } from "react-icons/pi";
import { GrTarget } from "react-icons/gr";
import { IconType } from "react-icons";

interface DescriptionPart {
  text: string;
  highlight?: boolean;
  display?: string;
}

interface AboutData {
    tag: string,
    title: {
        title: string,
        span: string
    },
    description: DescriptionPart[][],
    pitch: string,
    bookImage: {
        src: string,
        alt: string
    },
    buyButton: {
        text: string,
        link: string
    },
    availableButton: {
        text: string,
        src: string,
        alt: string
    },
    showMore: {
        off: string,
        on: string
    }
}

const aboutMockData: AboutData = {
    tag: 'Livro',
    title: {
        title: "Planejamento Financeiro: ",
        span: "Você no Controle!"
    },
    description: [
    // parágrafo 1
    [
      { text: "Um poderoso método de " },
      { text: "planejamento financeiro", highlight: true },
      { text: " para fazer qualquer pessoa promover a sua " },
      { text: "transformação financeira", highlight: true },
      { text: ". " },
      { text: "Você se tornará financeiramente inteligente de uma forma como nunca se sentiu antes.", display: "hidden md:inline" }
    ],
    // p2 no mobile
    [
      { text: "Você se tornará financeiramente inteligente de uma forma como nunca se sentiu antes.", display: "md:hidden" }
    ],
    // parágrafo 2
    [
      { text: "São " },
      { text: "ideias inovadoras", highlight: true },
      { text: " e energéticas, reveladoras, " },
      { text: "práticas", highlight: true },
      { text: " e que começam a funcionar de imediato na sua mente, levando você a ações precisas para mudanças irreversíveis, duradouras e necessárias em sua vida financeira. Você jamais será o mesmo depois de colocar essas ideias em " },
      { text: "prática", highlight: true },
      { text: "!" },
    ],
    // parágrafo 3
    [
      { text: "Ao longo de uma " },
      { text: "jornada em cinco etapas", highlight: true },
      { text: ", você será convidado a assumir o " },
      { text: "protagonismo", highlight: true },
      { text: " da sua vida financeira, transformando conhecimento em ação e sonhos em conquistas." },
    ]
  ],
    pitch: "Dê o primeiro passo para sua transformação financeira!" ,
    bookImage:{
        src: "/book/book-about.png",
        alt: "Livro Planejamento Financeiro: Você no Controle, da autora Simone Costa."
    },
    buyButton: {
        text: "Comprar agora na Amazon  >",
        link: "https://www.amazon.com.br/Planejamento-Financeiro-Voc%C3%AA-no-controle/dp/6550471559/ref=asc_df_6550471559?mcid=6fc688970b95384795e11ebdbce99e58&tag=googleshopp00-20&linkCode=df0&hvadid=709856848245&hvpos=&hvnetw=g&hvrand=15531010741051199456&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9102216&hvtargid=pla-1661282036085&psc=1&hvocijid=15531010741051199456-6550471559-&hvexpln=0&language=pt_BR"
    },
    availableButton: {
        text: "Disponível na Amazon",
        src: "/book/amazon-logo.svg",
        alt: "Logo da amazon."
    },
    showMore: {
        off: "Ver mais",
        on: "Ver menos"
    }
}

interface CardData {
    title: string,
    description: string,
    icon: IconType,
    iconColor: string,
    bgColor: string
}

const cardsMockData: CardData[] = [
    {
        title: "Conteúdo prático", 
        description: "Conhecimento para colocar em ação.",
        icon: PiBookOpenText,
        iconColor: "#7C4DFF",
        bgColor: "#F2F0FD"
    },
    {
        title: "Exercícios práticos", 
        description: "Da reflexão à prática.",
        icon: PiClipboardText,
        iconColor: "#01AEAA",
        bgColor: "#D7ECF1"
    },
    {
        title: "Aplicação para a vida real", 
        description: "Planejamento para objetivos reais.",
        icon: GrTarget,
        iconColor: "#071F6B",
        bgColor: "#DAE6F7"
    },
    {
        title: "Protagonismo financeiro", 
        description: "Você no controle da sua vida financeira.",
        icon:  MdOutlinePeopleAlt,
        iconColor: "#7C4DFF",
        bgColor: "#F2F0FD"
    }
]
    
function renderBookImage(display: string): React.JSX.Element {
    return (
        <div className={`flex-col gap-[14px] w-full md:w-auto items-center justify-center shrink-0 ${display}`}>
            <Image 
                src={aboutMockData.bookImage.src} 
                alt={aboutMockData.bookImage.alt} 
                width={579} 
                height={737} 
                className='w-[240px] h-auto md:w-[360px] lg:w-[460px] xl:w-[520px] max-w-full object-contain'
            />
            <button className='flex content-center items-center gap-[10px] py-[4px] px-[12px] md:px-[20px] rounded-[10px] bg-[#FCFCFE] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-pointer'>
                <Image src={aboutMockData.availableButton.src} alt={aboutMockData.availableButton.alt} width={48} height={48} className='h-[37px] w-[37px] md:h-[48px] md:w-[48px]' />
                <span className='text-[14px] md:text-[16px] font-semibold'>{aboutMockData.availableButton.text}</span>
            </button>
        </div>
    )
}

const renderParagraphs = (paragraphs: DescriptionPart[][]) => (
paragraphs.map((paragraph, i) => 
    <p key={i} className='my-[20px] md:my-[24px] text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-relaxed'>
        {paragraph.map((part, j) => 
            part.highlight ? 
                <span key={j} className="text-[#7C4DFF] font-bold">{part.text}</span>
            :
                <span key={j} className={part.display}>{part.text}</span>
        )}
    </p>)
)

export function About(){
    const [isVisible, setIsVisible] = useState(false);

    function toggleView() {
        setIsVisible(!isVisible)
    }

    return(
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[64px] font-nunito overflow-hidden">
            {/* Seção Principal */}
            <section className="flex flex-col md:flex-row items-start justify-between gap-[32px] md:gap-[48px] lg:gap-[64px] w-full mt-[40px] md:mt-[56px] mb-[40px] md:mb-[60px]">
                {renderBookImage("hidden md:flex")}
                
                <div className='w-full md:flex-1 md:max-w-[637px]'>
                    <div>
                        <span className='text-[20px] md:text-[24px] mb-[14px] font-bold bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent uppercase'>{aboutMockData.tag}</span>
                        <div className='w-[40px] h-[5px] rounded-[10px] mt-[11px] mb-[6px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8]'></div>
                    </div>
                    <h1 className='text-[24px] md:text-[36px] lg:text-[48px] font-extrabold leading-[32px] md:leading-[46px] lg:leading-[60px] text-[#000416]'>
                        {aboutMockData.title.title} 
                        <span className='text-[#7C4DFF]'>{aboutMockData.title.span}</span>
                    </h1>
                    
                    {renderBookImage("md:hidden flex m-auto my-[30px]")}
                    
                    {renderParagraphs(aboutMockData.description.slice(0,2))}
                    
                    <div className='hidden md:block'>
                        {renderParagraphs(aboutMockData.description.slice(2))}
                    </div>
                    
                    <div className={`md:hidden ${isVisible ? '' : 'hidden'}`}>
                        {renderParagraphs(aboutMockData.description.slice(2))}
                    </div>
                    
                    <button onClick={toggleView}
                            className='flex items-center text-[14px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent underline font-semibold md:hidden'>
                        {isVisible ? aboutMockData.showMore.on : aboutMockData.showMore.off}
                        <svg width="0" height="0" className="absolute">
                            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2ED8E8" />
                            <stop offset="100%" stopColor="#7C4DFF" />
                            </linearGradient>
                        </svg>

                        <MdOutlineKeyboardArrowUp 
                            size={20}
                            style={{ fill: 'url(#icon-gradient)' }}
                            className={`transition-transform duration-200 ${isVisible ? '' : 'rotate-180'}`} 
                        />
                    </button>
                    
                    <p className='text-[#7C4DFF] text-[18px] md:text-[20px] lg:text-[22px] font-extrabold mt-[28px] md:mt-[36px] text-center md:text-left'>{aboutMockData.pitch}</p>
                    
                    <a href={aboutMockData.buyButton.link} target="_blank" rel="noreferrer">
                        <button className='flex items-center text-white content-center p-4 md:py-[16px] md:px-[24px] mt-[12px] md:mt-[24px] gap-[8px] rounded-[10px] bg-[#7C4DFF] font-bold hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 cursor-pointer mx-auto md:mx-0'>
                            <MdOutlineShoppingCart className='w-[20px] h-[20px]' />
                            {aboutMockData.buyButton.text}
                        </button>
                    </a>
                </div>
            </section>

            {/* Cards Versão Desktop / Tablet */}
            <section className="hidden md:grid grid-cols-2 lg:grid-cols-4 bg-white rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-6 lg:p-8 w-full my-[40px] md:my-[60px] border border-[#F2F0FD]">
                {cardsMockData.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center gap-3 px-4 py-6 lg:py-4 lg:px-6 border-[#F2F0FD]
                                ${index === 1 ? "border-r-0 lg:border-r-2" : ""}
                                ${index % 2 === 0 ? "border-r-2" : ""}
                                ${index <= 1 ? "border-b-2 lg:border-b-0" : ""}
                            `}
                        >
                            <div
                                className="w-[80px] h-[80px] lg:w-[105px] lg:h-[105px] rounded-full flex items-center justify-center shrink-0"
                                style={{ backgroundColor: card.bgColor }}
                            >
                                <Icon size={40} style={{ color: card.iconColor }} />
                            </div>

                            <h3 className="text-[18px] lg:text-[20px] text-center font-bold leading-tight">
                                {card.title}
                            </h3>
                            <span className="text-[14px] lg:text-[18px] font-semibold leading-snug text-center text-foreground/80">
                                {card.description}
                            </span>
                        </div>
                    );
                })}
            </section>

            {/* Cards Versão Mobile */}
            <section className='md:hidden grid grid-cols-2 gap-2 w-full mb-[40px]'>
                {cardsMockData.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div key={index}
                            className='rounded-[15px] flex gap-2 items-center min-h-[60px] px-3 py-4'
                            style={{ backgroundColor: card.bgColor }}
                        >
                            <Icon size={21} style={{ color: card.iconColor }} className='shrink-0' />
                            <span className='text-[14px] font-extrabold leading-tight break-words hyphens-auto'
                                  style={{color: card.iconColor}}
                            > {card.title} </span>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}