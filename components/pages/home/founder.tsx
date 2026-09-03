import React from 'react';

export default function Founder() {
  return (
    //Seção princial
    <section id="sobre" className="relative w-full max-w-[1440px] mx-auto pt-20 pb-14 px-4 md:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative">

        {/* Título mobile, aparece apenas em celulares */}
        <div className="block md:hidden mb-8 text-left">
          <div className="mb-4">
            <h3 className="font-extrabold text-[20px] leading-[27px] uppercase bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent">
              Sobre a Idealizadora
            </h3>
            {/* Linha de destaque abaixo do subtítulo */}
            <div className="w-[40px] h-[5px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] rounded-[10px] mt-2"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Conhecimento que se <br />
            transforma em <span className="text-[#814CFF]">propósito.</span>
          </h2>
        </div>

        {/*Grid principal*/}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 lg:gap-10 items-center">
          
          <div className="relative flex justify-center md:justify-start">

            <div className="relative z-10 w-full max-w-[480px]">
              {/* Foto principal */}
              <img 
                src="images/simone.jpg"
                alt="Simone Costa - Idealizadora do Sim Planejar" 
                className="w-full h-auto rounded-[40px] shadow-lg object-cover aspect-[4/5]"
              />
              
              {/* Ícone da imagem, oculto no celular*/}
              <img 
                src="icons/Vector10.svg"
                alt="Ícone de destaque" 
                className="hidden md:block absolute bottom-2 md:bottom-4 md:-left-12 z-20 w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/*Texto e botões*/}
          <div className="flex flex-col items-start text-left z-10 mt-8 md:mt-0 w-full max-w-[650px]">
            
            {/*Título desktop*/}
            <div className="hidden md:block">
              <div className="mb-6 lg:mb-8">
                <h3 className="font-extrabold text-[20px] lg:text-[24px] leading-[27px] lg:leading-[33px] uppercase bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent">
                  Sobre a Idealizadora
                </h3>
                <div className="w-[40px] h-[5px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] lg:from-[#7C4DFF] lg:to-[#7C4DFF] rounded-[10px] mt-2"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Conhecimento que se <br className="hidden md:block"/>
                transforma em <span className="text-[#814CFF]">propósito.</span>
              </h2>
            </div>

            {/*Bloco de nome e cargo*/}
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Simone Costa</h3>
              <p className="text-[#814CFF] text-md font-medium">Idealizadora do Sim Planejar</p>
            </div>

            {/*Parágrafos de biografia*/}
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed font-bold">
              <p>
                Simone Costa é executiva do mercado financeiro, autora do livro 
                <strong> “Planejamento Financeiro: Você no Controle!”</strong> e idealizadora do SIM PLANEJAR.
              </p>
              <p>
                Acredita que <span className="text-[#814CFF] font-semibold">educação financeira</span> é um dos principais motores da transformação 
                social e que toda pessoa pode desenvolver uma relação mais consciente com o 
                dinheiro, conquistar objetivos e assumir o <span className="text-[#814CFF] font-semibold">protagonismo da própria vida financeira.</span>
              </p>
              <p>
                Sua trajetória reúne experiência executiva, pesquisa acadêmica e atuação prática 
                em educação financeira, com <span className="text-[#814CFF] font-semibold">Doutorado e Mestrado Internacional, MBA em 
                Economia pela USP e certificações financeiras globais.</span>
              </p>
            </div>

            {/*Botões*/}
            <div className="flex flex-col md:flex-row gap-4 mt-8 w-full">
              {/*Botão principal, deixei sem nada, por enquanto*/}
              <a href="sobre#simone-costa" className="flex items-center justify-center gap-2 bg-[#7C4DFF] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 text-white font-medium py-3 px-6 rounded-lg shadow-md w-full md:w-auto">
                Conheça minha trajetória
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              
              {/*Botão do linkedin*/}
              <a 
                href="https://www.linkedin.com/in/simone-costa-cfp/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block hover:opacity-80 hover:shadow-lg transition-all duration-200 transition-opacity mx-auto md:mx-0" 
                aria-label="LinkedIn"
              >
                <img 
                  src="icons/botao_linkedin.svg"
                  alt="Acessar LinkedIn" 
                  className="h-12 w-auto" 
                />
              </a>
            </div>
          </div>
        </div>

        {/*Banner inferior*/}
        <div className="mt-4 md:mt-6 relative z-20">
          
          <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] border border-gray-100 py-4 px-6 md:py-6 md:px-8 flex flex-col md:flex-row items-center justify-start gap-4 text-left">
            
            <div className="text-[#814CFF] flex-shrink-0">
              <img 
                src="icons/Vector9.svg"
                alt="Ícone de pessoas" 
                className="w-8 h-8 object-contain" 
              />
            </div>
            
            <p className="text-gray-700 font-bold text-sm md:text-base">
              Assuma o controle do seu dinheiro e <span className="text-[#814CFF] font-bold">transforme objetivos em conquistas!</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}