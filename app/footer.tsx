import React from 'react';
import Image from "next/image";
import { ImageData, StyledText } from "@/components/pages/contact";
import Link from "next/link";

interface PreFooterData {
    icon: ImageData;
    title: StyledText[];
    description: StyledText[];
    wave: ImageData;
}

const preFooterMockData: PreFooterData = {
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
        src: "/wave.svg",
        alt: "Vetor em formato de onda azul escuro que divide a sessão atual e a próxima."
    }
    
}

export function PreFooter() {
    const data = preFooterMockData;
    return (
        <section className="w-full relative bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] mt-10">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[27px] md:gap-17 px-10 md:px-[90px] pt-[30px] md:pt-[78px] pb-[48px] max-w-[1440px] m-auto">
                <span className="shrink-0 flex items-center justify-center h-25 w-25 md:h-[190px] md:w-[190px] bg-white rounded-full">
                    <Image src={data.icon.src} alt={data.icon.src} width={120} height={125} className="w-15 h-[63px] md:w-[120px] md:h-[125px]" />
                </span>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-[46px]">
                    <p className="text-[18px] md:text-[28px] text-white font-extrabold text-center">
                        {data.title.map((part, i)=> (
                        <span key={i} className={part.highlighted === true ? "text-[#071F6B]" : ""}>
                            {part.text}
                        </span>
                        ))}
                    </p>
                    <span className="max-[1024px]:h-0.5 lg:w-0.5 self-stretch bg-white" />
                    <p className="text-[18px] md:text-[22px] font-extrabold text-white text-center lg:text-start">
                        {data.description.map((part, i)=> (
                        <span key={i} className={part.highlighted === true ? "text-[#071F6B] text-[18px] md:text-[26px]" : ""}>
                            {part.text}
                        </span>
                        ))}
                    </p>
                </div>
            </div>
            <svg className="w-full absolute bottom-[-8px] h-[42px]" preserveAspectRatio="none">
  <defs>
    <pattern id="wave" x="0" y="0" width="1435" height="42" patternUnits="userSpaceOnUse">
      <image href={data.wave.src} width="1435" height="42" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#wave)" />
</svg>
        </section>
    )
}

export default function Footer() {
  return (
    <section>
      <PreFooter />
      <footer 
        className="w-full bg-[#071F6B] pt-16 pb-6 antialiased"
      >
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Coluna 1: Logo e Texto */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            
            <div className="flex flex-col items-center">
              <img 
                src="/logo_branco.svg" 
                alt="Logo Sim Planejar" 
                className="w-auto h-[277px] object-contain" 
              />
            </div>

            <div className="text-sm text-center text-white -mt-21 md:-mt-21">
              <p>Voce no controle da <span className="text-[#814CFF] font-semibold border-[#814CFF]">sua vida financeira.</span></p>
            </div>

            <p className="text-base leading-relaxed text-center text-white -mt-2 max-w-[430px] mx-auto">
              <strong className="text-white">Transforme objetivos em conquistas!</strong><br />
              Organize suas finanças e faça escolhas conscientes para
              assumir o controle da sua vida financeira,
              tornando-se protagonista da sua própria história.
            </p>
          </div>

          {/* Coluna 2: Navegue (ATUALIZADA) */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start w-full">
            <h3 className="text-white font-bold text-xl mb-6 text-center md:text-left">Navegue</h3>
            
            <ul className="grid grid-cols-2 gap-y-4 gap-x-4 w-full max-w-[280px] text-center text-white text-lg font-normal md:max-w-none md:flex md:flex-col md:items-start md:text-left md:w-auto md:gap-6">
              <li><Link href='/' >Home</Link></li>
              <li><Link href='/sobre'> Sobre</Link></li>
              <li><Link href="/o-livro">Livro</Link></li>
              <li><Link href="#">Simuladores</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Informações */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6">Informações</h3>
            <ul className="space-y-6 text-white text-lg font-normal flex flex-col items-center md:items-start">
              <li><Link href="/lgpd">Política de Privacidade</Link></li>
              <li><Link href="/termos-de-uso">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="md:col-span-2 flex flex-col items-center">
            <h3 className="text-white font-bold text-lg mb-3">Siga o Sim Planejar</h3>
            
            <div className="flex gap-4 mb-3">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/simplanejar/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity w-10 h-10 flex items-center justify-center"
              >
                <img 
                  src="/instagram.svg" 
                  alt="Instagram" 
                  className="w-full h-full object-contain" 
                />
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/channel/UCR5jivIv9WuMdR2Ss8QJ0Rg" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:opacity-80 transition-opacity w-10 h-10 flex items-center justify-center"
              >
                <img 
                  src="/youtube.svg" 
                  alt="YouTube" 
                  className="w-full h-full object-contain" 
                />
              </a>
            </div>

            <div className="text-center text-sm font-semibold">
              <p className="text-white mb-2">Seja protagonista de sua<br /> vida financeira</p>
              <a href="mailto:contato@simplanejar.com" className="text-white font-normal">
                contato@simplanejar.com
              </a>
            </div>
          </div>

        </div>

        {/* Linha de Créditos */}
        <div className="max-w-7xl mx-auto pt-6 flex justify-center md:justify-end">
          <p className="text-sm text-white text-medium">
            Desenvolvido por Pixel - Soluções Digitais
          </p>
        </div>
      </footer>
    </section>
  );
}