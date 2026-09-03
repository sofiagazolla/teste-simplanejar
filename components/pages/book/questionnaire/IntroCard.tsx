"use client";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { intro } from "./data";

interface IntroCardProps {
    onStart: () => void;
}

export function IntroCard({ onStart }: IntroCardProps) {
    return (
        <div className="mx-auto max-w-[1297px] rounded-[10px] bg-card-bg p-6 shadow-[-4px_-4px_4px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
            <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
                <div className="w-full lg:flex-1">
                    <Image src="/book/questionnaire/icon-chat-heart.svg" alt="" width={93} height={93} className="mb-4 size-16 sm:size-[93px]" />

                    <h1 className="mb-1 text-[32px] font-extrabold leading-tight text-foreground sm:text-[46px]">
                        {intro.eyebrow}
                        <span className="text-primary">{intro.titleHighlight}</span>
                    </h1>
                    <div className="mb-6 h-[5px] w-[134px] rounded-[10px] bg-gradient-to-r from-brand-purple to-brand-cyan" />

                    <p className="mb-4 text-[24px] font-extrabold text-[#733DE0]">{intro.greeting}</p>

                    <div className="mb-6 flex flex-col gap-4 text-[16px] leading-[1.6] text-foreground">
                        {intro.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <p className="mb-8 font-dancing text-[32px] text-[#733DE0] sm:text-[40px]">
                        {intro.signature}
                    </p>

                    <button
                        type="button"
                        onClick={onStart}
                        className="flex h-[60px] w-full items-center justify-center gap-2 rounded-[10px] bg-primary text-[20px] font-extrabold text-white transition-colors hover:bg-[#A280FF] sm:w-[375px] cursor-pointer"
                    >
                        {intro.startButton}
                        <IoIosArrowForward className="size-5" />
                    </button>

                    <p className="mt-4 text-center text-[16px] text-black sm:text-left">{intro.privacyNote}</p>
                </div>

                <div className="relative aspect-square w-full max-w-[280px] shrink-0 lg:w-[380px] lg:max-w-none">
                    <Image src="/book/questionnaire/objeto.png" alt="Capa do livro Planejamento Financeiro: Você no Controle!" fill className="object-contain" priority />
                </div>
            </div>
        </div>
    );
}
