import Image from "next/image";
import { ImageData } from '.'
import type { IconType } from "react-icons";
import { LuMessageSquare } from "react-icons/lu";

interface MixedText {
    normal: string;
    highlight: string;
}

interface ContactHeroData {
    title: MixedText;
    description: MixedText;
    icon: IconType;
    imageDesktop: ImageData;
    imageMobile: ImageData;
}

const contactHeroMockData: ContactHeroData = {
    title: {
        normal: "Vamos ",
        highlight: "conversar!"
    },
    description: {
        normal: "Estamos aqui para ajudar você a alcançar seus ",
        highlight: "objetivos financeiros."
    },
    icon: LuMessageSquare,
    imageDesktop: {
        src: "/contact/HeroDesktop.png",
        alt: "Mulher negra sentada mexendo no seu computador. Ela está em um ambiente fechado e, atrás, tem um quadro com as frases 'Planeje. Aja. Realize'."
    }, 
    imageMobile: {
        src: "/contact/HeroMobile.png",
        alt: "Mulher negra sentada mexendo no seu computador. Ela está em um ambiente fechado e, atrás, tem um quadro com as frases 'Planeje. Aja. Realize'."
    }
}

export default function ContactHero() {
    const Icon = contactHeroMockData.icon;
    const data = contactHeroMockData;
    return (
        <section className="mx-auto max-w-[1440px] flex w-full md:h-[309px] justify-between items-end md:items-center overflow-hidden">
            <div className="flex max-[1112px]:flex-col max-[1112px]:gap-2 max-[1112px]:mt-[6px] gap-6 pl-[10px] md:pl-5 max-w-[430px] md:mr-6 row-0">
                <div className="w-10 h-10 md:w-20 md:h-20 aspect-square rounded-[80px] bg-[#F2F0FD] flex items-center justify-center">
                    <Icon color="#7C4DFF" className="w-5 h-5 md:w-10 md:h-10" />
                </div>
                <div>
                    <h1 className="text-[24px] md:text-[46px] font-extrabold leading-tight mb-2"><span>{data.title.normal}</span><span className="text-[#7C4DFF]">{data.title.highlight}</span></h1>
                    <div className="w-[50px] mb-2 h-1 rounded-[10px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8]"/>
                    <p className="font-semibold text-[14px] md:text-[16px] "><span>{data.description.normal}</span><span className="font-bold text-[#7C4DFF]">{data.description.highlight}</span></p>
                </div>
            </div>
            <div className="hidden md:block relative w-[807px] h-full shrink-0 grow-0 overflow-hidden">
                <Image src={data.imageDesktop.src} alt={data.imageDesktop.alt} fill priority sizes="807px" className="object-cover object-left" />
            </div>
            <div className="md:hidden shrink-0">
                <Image src={data.imageMobile.src} alt={data.imageMobile.alt} width={180} height={164} priority className="w-[180px] h-auto"/>
            </div>
        </section>
    );
}