"use client";

import { ParagraphRender } from "../../utils/paragraphRender";
import { CardIdealizadora } from "../../utils/cardIdealizadora";

import { MdOutlinePerson, MdOutlineSchool, MdOutlineStarBorder } from "react-icons/md";
import { FaLinkedinIn, FaRegCompass, FaRegHeart } from "react-icons/fa";
import { PiHandHeartLight } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineBookOpen, HiOutlineExternalLink } from "react-icons/hi";

import Image from "next/image";
import simone from "@/assets/simone.png";

const titles = {
  prev: "SOBRE A IDEALIZADORA",
  main: {
    t1: "Conhecimento que se",
    t2: "transforma em propósito.",
  },
  name: "Simone Costa",
  subname: "IDEALIZADORA DO SIMPLANEJAR",
};

const cardText = {
  fromWhere: {
    title: "De onde veio o propósito",
    text: {
      t1: "Com",
      t2: "origem simples,",
      t3: "Simone Costa acredita que a",
      t4: "educação e a educação financeira",
      t5: "tiveram papel fundamental na",
      t6: "transformação de sua própria história.",
      t7: "Ao longo da vida, experimentou na prática como o",
      t8: "conhecimento, o planejamento e as escolhas conscientes",
      t9: "podem",
      t10: "ampliar oportunidades, proporcionar mais segurança e construir novos caminhos.",
    },
  },
  experience: {
    title: "A experiência construída ao longo da carreira",
    text: {
      t1: "Executiva do mercado financeiro com",
      t2: "mais de 15 anos de experiência",
      t3: "em",
      t4: "investimentos, estratégia de negócios, desenvolvimento organizacional e transformação corporativa,",
      t5: "liderou projetos de",
      t6: "crescimento, governança, performance comercial, analytics, experiência do cliente",
      t7: "e",
      t8: "gestão de pessoas",
      t9: "em instituições financeiras e empresas de investimentos.",
    },
  },
  graduation: {
    title: "A formação que sustenta essa atuação",
    text: {
      t1: "Possui sólida",
      t2: "formação acadêmica nacional e internacional,",
      t3: "incluindo",
      t4: "Doutorado Internacional, Mestrado Internacional e MBA em Economia pela USP,",
      t5: "além de certificações financeiras globais como",
      t6: "CFP®, CAMS®, SIE® e MiFID II.",
      t7: "Sua atuação combina",
      t8: "visão estratégica, conhecimento técnico",
      t9: "e o compromisso de tornar a",
      t10: "educação financeira mais acessível e transformadora",
      t11: "para a sociedade.",
    },
  },
  motivation: {
    title: "Por que nasceu o SIM PLANEJAR",
    text: {
      t1: "Idealizadora do",
      t2: "SIM PLANEJAR",
      t3: "e autora do livro",
      t4: "“Planejamento Financeiro: Você no Controle!”,",
      t5: "Simone Costa acredita que a educação financeira é uma",
      t6: "ferramenta de transformação social",
      t7: "capaz de ampliar a",
      t8: "consciência financeira,",
      t9: "fortalecer o",
      t10: "protagonismo individual",
      t11: "e ajudar as pessoas a",
      t12: "realizarem seus sonhos,",
      t13: "conquistarem",
      t14: "objetivos",
      t15: "e construírem um futuro com mais",
      t16: "liberdade, segurança e possibilidades.",
    },
  },
  conviction: {
    title: "A convicção que permanece",
    text: {
      t1: "Sua própria trajetória é um",
      t2: "reflexo daquilo que acredita",
      t3: "e procura compartilhar por meio do",
      t4: "SIM PLANEJAR.",
      t5: "A educação e a educação financeira tiveram papel importante na",
      t6: "transformação de sua história",
      t7: "e reforçam a convicção de que",
      t8: "conhecimento, planejamento e escolhas conscientes",
      t9: "podem",
      t10: "ampliar oportunidades",
      t11: "e construir um futuro com mais",
      t12: "liberdade, segurança e possibilidades.",
    },
  },
  global: {
    p1: {
      t1: "Simone Costa acredita que a",
      t2: "educação financeira",
      t3: "é um dos",
      t4: "principais motores",
      t5: "da",
      t6: "transformação social.",
    },
    star: {
      t1: "Acredita que a",
      t2: "educação financeira transforma vidas.",
    },
    compass: {
      t1: "Seu propósito é inspirar e apoiar mais pessoas a serem",
      t2: "protagonistas",
      t3: "das suas escolhas e construírem um futuro com mais",
      t4: "tranquilidade",
      t5: "e",
      t6: "liberdade.",
    },
    button: "Acessar meu LinkedIn",
  },
  values: ["Propósito", "Educação", "Transformação", "Direção", "Protagonismo"],
};

const altImg = "Simone Costa";
const linkedInLink = "https://www.linkedin.com/in/simone-costa-cfp/";

const valuesData = [
  { icon: TbTargetArrow, label: cardText.values[0], text: "text-[#7C4DFF]" },
  { icon: HiOutlineBookOpen, label: cardText.values[1], text: "text-[#7C4DFF]" },
  { icon: FaRegHeart, label: cardText.values[2], text: "text-[#7C4DFF]" },
  { icon: FaRegCompass, label: cardText.values[3], text: "text-[#01AEAA]" },
  { icon: MdOutlinePerson, label: cardText.values[4], text: "text-[#01AEAA]" },
];

export default function Founder() {
  return (
    <section id="a-idealizadora" className="flex flex-col px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-[1440px] w-full items-center mx-auto overflow-hidden">
      {/* ---------- MOBILE (< md) ---------- */}
      <div className="flex flex-col text-left items-center w-full max-w-2xl lg:hidden">
        <h2 className="self-start text-[20px] xl:text-[24px] font-bold gradient-text whitespace-nowrap">
          {titles.prev}
        </h2>
        <div className="self-start bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] h-[5px] w-[40px] rounded-[10px] my-[8px]" />

        <h1 className="self-start text-[24px] sm:text-[28px] md:text-[36px] xl:text-[48px] font-extrabold ">
          {titles.main.t1} <span className="text-[#7C4DFF]">{titles.main.t2}</span>
        </h1>
        <h2 className="self-start font-extrabold text-xl sm:text-2xl text-[#7C4DFF] mt-2">{titles.name}</h2>
        <h3 className="self-start font-bold text-base sm:text-lg mb-4">{titles.subname}</h3>

        <div className="self-start w-full">
          <ParagraphRender text={cardText.global.p1} cor="roxo" tamanho={16} />
        </div>

        <Image src={simone} alt={altImg} className="rounded-[24px] w-full max-w-[320px] h-auto mt-6 object-cover shadow-md" />

        <div className="bg-[#F2F0FD] rounded-[20px] w-full mt-6 p-5 sm:p-6 flex flex-col gap-5 border border-[#F2F0FD]">
          <div className="flex gap-3 items-start">
            <div className="bg-white rounded-full p-2.5 shrink-0 shadow-sm">
              <MdOutlineStarBorder className="text-[#7C4DFF] text-[24px]" />
            </div>
            <ParagraphRender text={cardText.global.star} cor="roxo" tamanho={16} />
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-white rounded-full p-2.5 shrink-0 shadow-sm">
              <FaRegCompass className="text-[#7C4DFF] text-2xl" />
            </div>
            <ParagraphRender text={cardText.global.compass} cor="roxo" tamanho={16} />
          </div>

          <a href={linkedInLink} target="_blank" className="w-full">
            <button className="w-full flex gap-[10px] bg-[#0A66C2] rounded-[10px] px-[16px] py-[12px] text-white font-bold text-[16px] items-center justify-center cursor-pointer hover:bg-[#084e96] transition-colors duration-200 ease-in-out">
              <FaLinkedinIn />
              {cardText.global.button}
              <HiOutlineExternalLink />
            </button>
          </a>
        </div>

        <div className="flex flex-col gap-4 w-full mt-8">
          <CardIdealizadora cor="roxo" icon={PiHandHeartLight} title={cardText.fromWhere.title} text={cardText.fromWhere.text} />
          <CardIdealizadora cor="verde" icon={BsGraphUpArrow} title={cardText.experience.title} text={cardText.experience.text} />
          <CardIdealizadora cor="roxo" icon={MdOutlineSchool} title={cardText.graduation.title} text={cardText.graduation.text} />
          <CardIdealizadora cor="verde" icon={PiHandHeartLight} title={cardText.motivation.title} text={cardText.motivation.text} />
          <CardIdealizadora cor="roxo" icon={FaRegCompass} title={cardText.conviction.title} text={cardText.conviction.text} />
        </div>
      </div>

      {/* ---------- DESKTOP (>= lg) ---------- */}
      <div className="hidden lg:flex gap-10 xl:gap-12 w-full items-start">
        <div className="w-[340px] xl:w-[380px] shrink-0">
          <h2 className="self-start text-[20px] xl:text-[24px] font-bold gradient-text whitespace-nowrap">
            {titles.prev}
          </h2>
          <div className="bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] h-[5px] w-[40px] rounded-[10px] mt-3 mb-6" />
          <Image src={simone} alt={altImg} className="rounded-[30px] xl:rounded-[40px] w-full h-auto object-cover shadow-md" />
          <div className="bg-[#F2F0FD] rounded-[16px] w-full mt-[24px] p-6 flex flex-col items-center">
            <div className="w-full flex flex-col gap-6">
              <ParagraphRender text={cardText.global.p1} cor="roxo" tamanho={18} />
              
              <div className="flex gap-4 items-start">
                <div className="bg-white rounded-full p-2.5 shrink-0 shadow-sm">
                  <MdOutlineStarBorder className="text-[#7C4DFF] text-2xl" />
                </div>
                <ParagraphRender text={cardText.global.star} cor="roxo" tamanho={18} />
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white rounded-full p-2.5 shrink-0 shadow-sm">
                  <FaRegCompass className="text-[#7C4DFF] text-2xl" />
                </div>
                <ParagraphRender text={cardText.global.compass} cor="roxo" tamanho={18} />
              </div>
            </div>

            <a href={linkedInLink} target="_blank" rel="noreferrer" className="w-full mt-6">
              <button className="w-full flex gap-2 bg-[#0A66C2] rounded-[10px] px-5 py-3.5 text-white font-bold text-base items-center justify-center hover:bg-[#084e96] transition-colors duration-200">
                <FaLinkedinIn />
                {cardText.global.button}
                <HiOutlineExternalLink />
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <h1 className="self-start text-[24px] sm:text-[28px] md:text-[36px] xl:text-[48px] font-extrabold ">
            {titles.main.t1} <span className="text-[#7C4DFF]">{titles.main.t2}</span>
          </h1>
          <h2 className="font-extrabold text-[30px] xl:text-[40px] text-[#7C4DFF] mt-1 leading-tight">{titles.name}</h2>
          <h3 className="font-bold text-lg xl:text-xl text-foreground/80 mb-2">{titles.subname}</h3>
          <CardIdealizadora cor="roxo" icon={PiHandHeartLight} title={cardText.fromWhere.title} text={cardText.fromWhere.text} />
          <CardIdealizadora cor="verde" icon={BsGraphUpArrow} title={cardText.experience.title} text={cardText.experience.text} />
          <CardIdealizadora cor="roxo" icon={MdOutlineSchool} title={cardText.graduation.title} text={cardText.graduation.text} />
          <CardIdealizadora cor="verde" icon={PiHandHeartLight} title={cardText.motivation.title} text={cardText.motivation.text} />
          <CardIdealizadora cor="roxo" icon={FaRegCompass} title={cardText.conviction.title} text={cardText.conviction.text} />
        </div>
      </div>

      {/* ---------- VALORES (compartilhado) ---------- */}
      <div className="mt-12 lg:mt-16 w-full bg-[#FCFCFE] p-6 lg:p-8 shadow-[0_8px_4px_0_#F2F0FD] border border-[#F2F0FD] rounded-[10px]">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 lg:gap-8 items-center justify-items-center">
          {valuesData.map(({ icon: Icon, label, text }, i) => (
            <div key={i} className={`flex flex-col items-center gap-2 ${text}`}>
              <div className="flex items-center justify-center p-2">
                <Icon className="text-[36px] lg:text-[48px]" />
              </div>
              <p className="text-[14px] md:text-[16px] lg:text-[22px] font-bold text-center leading-snug">{label}</p>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}