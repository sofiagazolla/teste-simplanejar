"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { ParagraphRender } from "./paragraphRender";

type Cor = "roxo" | "verde";

interface CorEstilo {
  fundo: string;
  fonte: string;
}

const CORES: Record<Cor, CorEstilo> = {
  roxo: {
    fundo: "bg-[#F2F0FD]",
    fonte: "text-[#7C4DFF]",
  },
  verde: {
    fundo: "bg-[#D7ECF1]",
    fonte: "text-[#01AEAA]",
  },
};

interface CardIdealizadoraProps {
  title: string;
  text: Record<string, string>;
  cor: Cor;
  icon: IconType;
}

export function CardIdealizadora({ title, text, cor, icon: Icon }: CardIdealizadoraProps) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div
      className={`${CORES[cor].fundo} rounded-[10px] py-[16px] px-[20px] mt-[15px]
        flex flex-col gap-[12px]
        md:flex-row md:items-center md:gap-[20px] md:py-[11px] md:mt-[25px]`}
    >
      {/* ícone + título: em linha nos dois breakpoints, só o gap muda */}
      <div className="flex items-center gap-[12px] md:gap-[20px]">
        <div className="rounded-full bg-white size-fit p-[12px] shrink-0">
          <Icon className={`${CORES[cor].fonte} text-[28px]`} />
        </div>
        <h3 className={`${CORES[cor].fonte} text-[16px] md:text-[18px] font-bold md:w-[110px] md:shrink-0`}>
          {title}
        </h3>
      </div>

      <div>
        
        <ParagraphRender text={text} cor={cor} className={`text-[16px] md:text-[20px] ${!expandido ? "line-clamp-3 md:line-clamp-none" : ""}`} />
        

        <button
          type="button"
          onClick={() => setExpandido((prev) => !prev)}
          className={`${CORES[cor].fonte} md:hidden flex items-center gap-1 text-[16px] font-semibold mt-1`}
        >
          {expandido ? "Ver menos" : "Ver mais"}
          <svg
            className={`size-3 transition-transform ${expandido ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}