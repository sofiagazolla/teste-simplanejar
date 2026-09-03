'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import { IconType } from "react-icons";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { CgFlagAlt } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from 'next/image'


interface ValuesCardsData {
    title: string;
    description: string;
    icon: IconType;
}

interface ODSActionData {
    image: {
        path: string;
        alt: string;
    };
    description: string;
}

interface ValuesData {
    titleTag: string;
    title: string;
    valuesCard: ValuesCardsData[];
    odsSection: {
        title: {
            firstPart: string;
            secondPart: string;
        }
        description: {
            p1: string;
            p2: string
        };
        subtitle: string;
        actions: ODSActionData[];
    }
    goalsCard: {
        title: {
            s1: string;
            s2: string;
        }
        description: string;
        icon: string;
        iconAlt: string;
    }
}

const valuesMockData: ValuesData = {
    titleTag: "Os valores que nos guiam",
    title: "Princípios que orientam todas as nossas decisões.",
    valuesCard: [
        {
            title: "Educação",
            description: "Acreditamos no poder do conhecimento para transformar vidas.",
            icon: HiOutlineBookOpen
        },
        {
            title: "Protagonismo",
            description: "Você é o protagonista da sua história e das suas escolhas.",
            icon: CgFlagAlt
        },
        {
            title: "Consciência",
            description: "Promovemos escolhas conscientes hoje para um futuro melhor.",
            icon: FiHeart
        },
        {
            title: "Acessibilidade",
            description: "Informação de qualidade, simples e acessível para todos e todas.",
            icon: BsPersonArmsUp
        },
        {
            title: "Transformação social",
            description: "Educação financeira gerando impacto positivo na sociedade.",
            icon: FaUsers
        },
        {
            title: "Simplicidade",
            description: "Tornamos o complexo simples para que todos possam avançar.",
            icon: FaRegCircleCheck
        },
    ],
    odsSection: {
        title: {
            firstPart: "Sustentabilidade e ",
            secondPart: "responsabilidade social."
        },
        description: {
            p1: "O SIM PLANEJAR está comprometido com um mundo mais justo, sustentável e com oportunidades para todos.",
            p2: "Nossas ações estão alinhadas aos Objetivos de Desenvolvimento (ODS) da Organização das Nações Unidas."
        },
        subtitle: "Nossos compromissos em ação",
        actions: [
            {
                image: {
                    path: "/about/ods/SDG-4.png",
                    alt: "Logotipo do ODS 4: Educação de Qualidade. Quadrado vermelho com o número 4 e um livro aberto branco com uma caneta."
                },
                description: "Promovemos educação financeira de qualidade para todas as pessoas."
            },
            {
                image: {
                    path: "/about/ods/SDG-5.png",
                    alt: "Logotipo do ODS 5: Igualdade de Gênero. Quadrado vermelho-alaranjado com o número 5 e o símbolo do gênero feminino com um sinal de igual no centro."
                },
                description: "Incentivamos a autonomia e o empoderamento financeiro de mulheres."
            },
            {
                image: {
                    path: "/about/ods/SDG-8.png",
                    alt: "Logotipo do ODS 8: Trabalho Decente e Crescimento Econômico. Quadrado bordô com o número 8 e um gráfico de linha em ascensão com seta para cima."
                },
                description: "Apoiamos o crescimento econômico inclusivo e oportunidades para todos."
            },
            {
                image: {
                    path: "/about/ods/SDG-10.png",
                    alt: "Logotipo do ODS 10: Redução das Desigualdades. Quadrado magenta com o número 10 e o sinal de igualdade dentro de um círculo."
                },
                description: "Acreditamos em um futuro com mais inclusão, justiça e equidade financeira."
            },
            {
                image: {
                    path: "/about/ods/SDG-17.png",
                    alt: "Logotipo do ODS 17: Parcerias e Meios de Implementação. Quadrado azul-escuro com o número 17 e cinco círculos coloridos interligados."
                },
                description: "Atuamos em parceria para multiplicar conhecimento e gerar impacto positivo."
            }
        ]
    },
    goalsCard: {
        title: {
            s1: "Transforme objetivos em ",
            s2: "conquistas!"
        },
        description: "Organize suas finanças e faça escolhas conscientes para assumir o controle da sua vida financeira, tornando-se protagonista da sua própria história.",
        icon: "/about/hands-holding-heart.png",
        iconAlt: "Ícone de mãos segurando um coração."
    }
}

export default function Values() {
    const textGradient = "bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent";
    return(
        <div id="nossos-valores" className="w-full overflow-hidden">
            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col items-center">
                <h2 className={`text-center uppercase text-lg sm:text-xl font-bold tracking-wide ${textGradient}`}>{valuesMockData.titleTag}</h2>
                <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-center leading-tight text-dark-blue max-w-3xl">{valuesMockData.title}</h1>
                <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {valuesMockData.valuesCard.map((card, index) => {
                        const Icon = card.icon;
                        const isPrimaryGroup = index < 3;
                        return (
                            <div key={index}
                                className="rounded-[10px] bg-[#FCFCFE] shadow-[0_4px_12px_rgba(242,240,253,0.8)] border border-[#F2F0FD] p-5 sm:p-6 flex items-center gap-4 sm:gap-5 w-full transition-shadow hover:shadow-md"
                            >
                                <div
                                    className={`shrink-0 flex justify-center items-center rounded-full w-16 h-16 sm:w-20 sm:h-20 ${
                                        isPrimaryGroup ? 'bg-[#F2F0FD]' : 'bg-[#D7ECF1]'
                                    }`}
                                >
                                    <Icon
                                        size={36}
                                        className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                            isPrimaryGroup ? 'text-[#7C4DFF]' : 'text-[#01AEAA]'
                                        }`}
                                    />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h3
                                        className={`text-lg sm:text-xl font-bold mb-1 ${
                                            isPrimaryGroup ? 'text-[#7C4DFF]' : 'text-[#01AEAA]'
                                        }`}
                                    >
                                        {card.title}
                                    </h3>
                                    <p className="text-sm sm:text-base font-semibold text-foreground/80 leading-snug">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start">
                    {/* Coluna Esquerda: Texto */}
                    <div className="flex flex-col">
                        <div className="w-10 h-[5px] rounded-[10px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] mb-4" />
                        <h2 className="text-xl sm:text-2xl font-extrabold mb-3 leading-tight">
                            <span>{valuesMockData.odsSection.title.firstPart}</span>
                            <span className={textGradient}>{valuesMockData.odsSection.title.secondPart}</span>
                        </h2>
                        <p className="font-semibold text-base text-foreground/80 leading-relaxed mb-3">
                            {valuesMockData.odsSection.description.p1}
                        </p>
                        <p className="font-semibold text-base text-foreground/80 leading-relaxed">
                            {valuesMockData.odsSection.description.p2}
                        </p>
                    </div>

                    <div className="flex flex-col lg:border-l lg:border-[#D9D9D9] lg:pl-8 xl:pl-12 w-full min-w-0">
                        <h2 className={`text-lg sm:text-xl font-bold uppercase mb-6 sm:mb-8 ${textGradient}`}>
                            {valuesMockData.odsSection.subtitle}
                        </h2>

                        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 w-full">
                            {valuesMockData.odsSection.actions.map((action, index) => (
                                <div key={index} className="flex flex-col items-start min-w-0">
                                    <Image
                                        src={action.image.path}
                                        alt={action.image.alt}
                                        width={180}
                                        height={180}
                                        className="w-full max-w-[160px] lg:max-w-[180px] h-auto object-contain rounded-lg"
                                    />
                                    <p className="font-semibold text-base text-foreground/90 mt-2 leading-snug">
                                        {action.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="md:hidden w-full overflow-hidden">
                            <Swiper
                                slidesPerView={'auto'}
                                centeredSlides={true}
                                spaceBetween={16}
                                draggable
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                className="mySwiper !pb-10"
                            >
                                {valuesMockData.odsSection.actions.map((action, index) => (
                                    <SwiperSlide key={index} className="!w-[200px]">
                                        <Image
                                            src={action.image.path}
                                            alt={action.image.alt}
                                            width={180}
                                            height={180}
                                            className="w-full h-auto object-contain rounded-lg"
                                        />
                                        <p className="font-semibold text-base text-foreground/90 mt-2 leading-none">
                                            {action.description}
                                        </p>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="w-full bg-[#071F6B] rounded-[10px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 shadow-md">
                    <div className="flex items-center gap-4 sm:gap-6 w-full lg:w-auto">
                        <div className="bg-[#F2F0FD] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex justify-center items-center shrink-0">
                            <Image
                                src={valuesMockData.goalsCard.icon}
                                width={85}
                                height={84}
                                alt={valuesMockData.goalsCard.iconAlt}
                                className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                            />
                        </div>
                        <h2 className="text-[20px] sm:text-[30px] lg:text-[38px] text-white font-extrabold leading-none max-w-md">
                            <span>{valuesMockData.goalsCard.title.s1}</span>
                            <span className="text-[#2ED8E8]">{valuesMockData.goalsCard.title.s2}</span>
                        </h2>
                    </div>

                    <div className="hidden lg:block w-px self-stretch bg-[#D9D9D9]/40 shrink-0" />

                    <p className="text-white text-base lg:text-[20px] font-semibold lg:max-w-md xl:max-w-lg leading-relaxed">
                        {valuesMockData.goalsCard.description}
                    </p>
                </div>
            </section>
        </div>
    );
}