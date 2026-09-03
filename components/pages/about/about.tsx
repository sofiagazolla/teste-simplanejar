import type { CSSProperties } from "react";
import Image from "next/image";
import { HiOutlineBookOpen, HiOutlineHeart, HiOutlineUserGroup } from "react-icons/hi2";
import { LuTarget } from "react-icons/lu";

export default function About() {
    const colors = { "--purple": "#7C4DFF" } as CSSProperties;

    return (
        <div style={colors} className="w-full px-4 py-3 sm:px-6 lg:px-8 lg:py-10 xl:px-10">
            <div className="mx-auto w-full max-w-[1600px] lg:flex lg:items-start lg:justify-center lg:gap-6 xl:gap-10">
                <div className="hidden w-[50px] shrink-0 flex-col justify-between py-[65px] lg:flex lg:self-stretch">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F2F0FD] drop-shadow-md">
                        <HiOutlineBookOpen size={24} color="var(--purple)" />
                    </div>

                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F2F0FD] drop-shadow-md">
                        <LuTarget size={24} color="var(--purple)" />
                    </div>

                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F2F0FD] drop-shadow-md">
                        <HiOutlineHeart size={24} color="var(--purple)" />
                    </div>

                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F2F0FD] drop-shadow-md">
                        <HiOutlineUserGroup size={24} color="var(--purple)" />
                    </div>
                </div>

                <div className="w-full min-w-0 lg:w-[clamp(420px,39vw,600px)] lg:shrink-0">
                    <div className="mt-3 grid items-start gap-x-4 gap-y-5 lg:mt-0 lg:block">
                        <div className="contents sm:block">
                            <div className="col-span-2 sm:col-auto">
                                <h2 className="text-[20px] xl:text-[24px] font-bold gradient-text whitespace-nowrap">
                                    SOBRE O SIM PLANEJAR
                                </h2>
                                <div className="gradient-background mt-2 h-[5px] w-[40px] rounded-[10px] lg:mt-3" />
                            </div>

                            <div className="col-start-1 row-start-2 min-w-0 sm:mt-5">
                                <h1 className="text-[24px] sm:text-[28px] md:text-[36px] xl:text-[48px] font-extrabold text-[#000416]">
                                    Você, protagonista
                                    <br />
                                    da sua <span className="gradient-text">vida financeira.</span>
                                </h1>

                                <div className="gradient-background mt-5 h-[5px] w-[40px] rounded-[10px]" />
                            </div>
                        </div>

                        <Image src="/about/about-img-mobile.svg" alt="" width={420} height={280} className="col-start-2 row-start-2 h-auto w-full self-center rounded-[8px] sm:row-start-1 lg:hidden" />
                    </div>

                    <div className="mt-7 flex items-center gap-3 lg:mt-4 lg:block">
                        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#F2F0FD] drop-shadow-md lg:hidden">
                            <HiOutlineBookOpen size={28} color="var(--purple)" />
                        </div>

                        <p className="min-w-0 flex-1 text-[14px] md:text-[16px] leading-[25px] xl:leading-[35px] font-medium text-[#000416]">
                            O SIM PLANEJAR acredita que todo brasileiro pode ser{" "}
                            <span className="font-bold text-[var(--purple)]">protagonista da sua própria vida financeira</span>{" "}
                            quando passa a compreender melhor a relação entre dinheiro, escolhas e futuro.
                        </p>
                    </div>

                    <div className="my-4 ml-[75px] h-[1px] bg-[#D9D9D9] lg:hidden" />

                    <div className="flex items-center gap-3 lg:mt-4 lg:block">
                        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#F2F0FD] drop-shadow-md lg:hidden">
                            <LuTarget size={28} color="var(--purple)" />
                        </div>

                        <p className="min-w-0 flex-1 text-[14px] md:text-[16px] leading-[25px] xl:leading-[35px] font-medium text-[#000416]">
                            Muitas pessoas sonham com a casa própria, uma aposentadoria mais tranquila, uma viagem ou simplesmente uma vida financeira mais organizada, mas não sabem por onde começar quando o assunto é{" "}
                            <span className="font-bold text-[var(--purple)]">planejamento financeiro</span>.
                        </p>
                    </div>

                    <div className="my-4 hidden h-[1px] w-full bg-[#D9D9D9] lg:block" />

                    <div className="relative mt-7 w-full rounded-[10px] bg-[#F2EDFF] px-[60px] py-[38px] lg:mt-4 lg:max-w-[560px] lg:rounded-none lg:bg-transparent lg:px-0 lg:py-3">
                        <div className="absolute top-5 left-4 inline-flex lg:top-0 lg:left-0">
                            <Image src="/about/quotes.svg" alt="" width={32} height={20} />
                        </div>

                        <p className="text-[18px] md:text-[20px] xl:text-[24px] font-bold text-[#020218] lg:mr-[25px] lg:mx-auto lg:w-[85%] lg:max-w-[475px]">
                            Acredito que a <span className="text-[var(--purple)]">educação</span>{" "}
                            transforma o indivíduo, consequentemente a sociedade e, por conseguinte,{" "}
                            <span className="text-[#2ED8E8]"> o planeta.</span>
                        </p>

                        <div className="absolute right-4 bottom-5 inline-flex rotate-180 lg:right-0 lg:bottom-0">
                            <Image src="/about/quotes.svg" alt="" width={32} height={20} />
                        </div>
                    </div>

                    <div className="my-4 hidden h-[1px] w-full bg-[#D9D9D9] lg:block" />
                </div>

                <div className="hidden min-w-0 shrink-0 lg:flex lg:w-[clamp(380px,42vw,680px)] lg:self-center lg:justify-center">
                    <Image src="/about/about-img-desktop.svg" alt="" width={680} height={680} className="h-auto w-full" priority />
                </div>
            </div>
        </div>
    );
}