import Image from "next/image";
import { ImageData, StyledText } from ".";

interface ContactFooterData {
    icon: ImageData;
    title: StyledText[];
    description: StyledText[];
    wave: ImageData;
}

const contactFooterMockData: ContactFooterData = {
    icon: {
        src: "/contact/chartUp.svg",
        alt: "Ícone de gráfico crescente com o traçado roxo."
    },
    title: [
        {text: "Dizer SIM é o primeiro passo para transformar a sua "},
        {text: "vida financeira.", highlighted: true}
    ],
    description: [
        {text: "Conte com o Sim Planejar para organizar suas finanças, realizar seus sonhos e construir "},
        {text: "um futuro com mais tranquilidade e liberdade.", highlighted: true}
    ],
    wave: {
        src: "/contact/wave.svg",
        alt: "Vetor em formato de onda azul escuro que divide a sessão atual e a próxima."
    }
    
}

export default function ContactFooter() {
    return (
        <section className="w-full relative bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] mt-10">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[27px] md:gap-17 px-10 md:px-[90px] pt-[30px] md:pt-[78px] pb-[48px] max-w-[1440px] m-auto">
                <span className="shrink-0 flex items-center justify-center h-25 w-25 md:h-[190px] md:w-[190px] bg-white rounded-full">
                    <Image src={contactFooterMockData.icon.src} alt={contactFooterMockData.icon.src} width={120} height={125} className="w-15 h-[63px] md:w-[120px] md:h-[125px]" />
                </span>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-[46px]">
                    <p className="text-[18px] md:text-[28px] text-white font-extrabold text-center">
                        {contactFooterMockData.title.map((part, i)=> (
                        <span key={i} className={part.highlighted === true ? "text-[#071F6B]" : ""}>
                            {part.text}
                        </span>
                        ))}
                    </p>
                    <span className="max-[1024px]:h-0.5 lg:w-0.5 self-stretch bg-white" />
                    <p className="text-[18px] md:text-[22px] font-extrabold text-white text-center lg:text-start">
                        {contactFooterMockData.description.map((part, i)=> (
                        <span key={i} className={part.highlighted === true ? "text-[#071F6B] text-[18px] md:text-[26px]" : ""}>
                            {part.text}
                        </span>
                        ))}
                    </p>
                </div>
            </div>
            <Image src={contactFooterMockData.wave.src} alt={contactFooterMockData.wave.alt} width={1440} height={42} className="w-full absolute bottom-[-1]" />
        </section>
    )
}