"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const seriesData = [
  {
    title: "Organize, Economize e Conquiste!",
    description: "Aprenda a organizar suas receitas e despesas, construir seu fluxo financeiro e entender para onde o seu dinheiro está indo.",
    videos: 3,
    ytId: "_dSnOOcSTYY"
  },
  {
    title: "Reservas Financeiras",
    description: "Aprenda a construir sua reserva de emergência, preparar sua aposentadoria e planejar seus sonhos e projetos.",
    videos: 3,
    ytId: "k79-i-Uh8RE"
  },
  {
    title: "Economia em casa",
    description: "Descubra como reduzir os gastos com água, energia elétrica, gás de cozinha e supermercado, economizando mais todos os meses.",
    videos: 4,
    ytId: "0fFTFSsdBdI"
  },
  {
    title: "Reputação Financeira",
    description: "Descubra qual é o seu score, como aumentar sua pontuação e onde consultar seu currículo financeiro no Registrato.",
    videos: 3,
    ytId: "FSLg4lH_H3g"
  },
  {
    title: "Cartão de Crédito",
    description: "Saiba como funciona o cartão de crédito, entenda sua fatura, tarifas, juros e utilize o cartão como um aliado do seu planejamento financeiro.",
    videos: 9,
    ytId: "AW8bl6rjSAs"
  },
  {
    title: "Sucessão",
    description: "Aprenda a preparar sua sucessão em vida, entendendo testamento, inventário, herdeiros e os principais aspectos do planejamento sucessório.",
    videos: 15,
    ytId: "iH0dh6WC2y4"
  },
];

const infiniteSeriesData = [...seriesData, ...seriesData, ...seriesData];

export function Videos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const ITEM_WIDTH = 216; // 200px de largura + 16px de gap

  // Posicionamento inicial seguro após carregamento do DOM
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: seriesData.length * ITEM_WIDTH,
          behavior: 'instant' as ScrollBehavior,
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Movimento automático (Auto-play) no mobile
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current && window.innerWidth < 1024) {
        scrollRef.current.scrollBy({
          left: ITEM_WIDTH,
          behavior: 'smooth',
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    const currentIndex = Math.round(scrollLeft / ITEM_WIDTH);
    setActiveIndex(currentIndex % seriesData.length);

    // Loop infinito imperceptível sem sobressaltos
    if (scrollLeft <= 10) {
      scrollRef.current.scrollTo({
        left: seriesData.length * ITEM_WIDTH,
        behavior: 'instant' as ScrollBehavior,
      });
    } else if (scrollLeft + clientWidth >= scrollWidth - 10) {
      scrollRef.current.scrollTo({
        left: scrollLeft - (seriesData.length * ITEM_WIDTH),
        behavior: 'instant' as ScrollBehavior,
      });
    }
  };

  return (
    <section className="w-full bg-[#FCFCFE] py-12 lg:py-20 font-['Nunito',sans-serif] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 justify-between">
          
          {/* ================= COLUNA ESQUERDA ================= */}
          <div className="w-full lg:w-[400px] flex flex-col shrink-0">
            {/* Título com Gradiente */}
            <div className="mb-6 lg:mb-8">
              <h3 className="font-extrabold text-[20px] lg:text-[24px] leading-[27px] lg:leading-[33px] uppercase bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent">
                Acompanhe o Sim Planejar
              </h3>
              <div className="w-[40px] h-[5px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] rounded-[10px] mt-2"></div>
            </div>
            
            <h2 className="font-extrabold text-[24px] leading-[33px] lg:text-[48px] lg:leading-[65px] text-[#071F6B] mb-6">
              Transforme <br className="hidden lg:block"/>
              conhecimento <br className="hidden lg:block"/>
              em ação
            </h2>
            
            <p className="font-semibold text-[16px] leading-[25px] text-[#000416] mb-8 lg:mb-10">
              Acompanhe o SIM PLANEJAR no <span className="text-[#FF3838]">YouTube</span> e no <span className="text-[#7C4DFF]">Instagram</span> e tenha acesso a conteúdos, reflexões e dicas práticas para organizar suas finanças e assumir o controle da sua vida financeira.
            </p>

            {/* Redes Sociais - Versão MOBILE */}
            <div className="flex lg:hidden gap-3 mb-8 w-full">
              <Link 
                href="https://www.instagram.com/simplanejar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 h-[50px] bg-[#FCFCFE] border border-[#7C4DFF] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-2 px-2 hover:bg-primary/5 hover:shadow-lg transition-all duration-200"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-[20px] h-[20px] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[13px] sm:text-[14px] leading-[15px] text-[#7C4DFF]">Instagram</span>
                  <span className="font-semibold text-[12px] sm:text-[14px] leading-[15px] text-[#7C4DFF]">@simplanejar</span>
                </div>
              </Link>

              <Link 
                href="https://www.youtube.com/@simplanejar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 h-[50px] bg-[#FCFCFE] border border-[#FF3838] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-2 px-2 hover:bg-[#FF3838]/5 hover:shadow-lg transition-all duration-200"
              >
                <img src="/youtube.svg" alt="YouTube" className="w-[24px] h-[19px] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[13px] sm:text-[14px] leading-[15px] text-[#FF3838]">YouTube</span>
                  <span className="font-semibold text-[12px] sm:text-[14px] leading-[15px] text-[#FF3838]">SIM PLANEJAR</span>
                </div>
              </Link>
            </div>

            {/* Redes Sociais - Versão DESKTOP */}
            <div className="hidden lg:block">
              
              {/* Card Instagram */}
              <div className="w-full lg:w-[400px] min-h-[223px] bg-[#FCFCFE] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] p-6 mb-6 flex flex-col items-center justify-between">
                
                <div className="flex items-start gap-4 w-full">
                  <div className="w-[90px] h-[90px] rounded-full bg-[#FCFCFE] border border-[#F2F0FD] shadow-[0px_4px_4px_#F2F0FD] flex items-center justify-center shrink-0">
                    <img src="/instagram.svg" alt="Instagram Logo" className="w-[45px] h-[45px] shrink-0" />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <p className="font-semibold text-[18px] leading-[25px] text-[#000416]">
                      <span className="text-[#7C4DFF]">Instagram</span> <br/> @simplanejar
                    </p>
                    <p className="font-normal text-[15px] leading-[22px] text-[#000416] mt-1">
                      Conteúdos rápidos, reflexões e dicas práticas para o dia a dia.
                    </p>
                  </div>
                </div>

                <Link 
                  href="https://www.instagram.com/simplanejar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full h-[50px] mt-4 bg-[#FCFCFE] border border-[#7C4DFF] shadow-[0px_1px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-2 text-[#7C4DFF] font-semibold text-[16px] hover:bg-[#F2F0FD] transition-colors"
                >
                  Acompanhar no instagram
                  <img src="/seta-clean.svg" alt="Seta" className="w-[20px] h-[20px]" />
                </Link>

              </div>

              {/* Card YouTube */}
              <div className="w-full lg:w-[400px] min-h-[223px] bg-[#FCFCFE] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] p-6 mb-6 flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-[90px] h-[90px] rounded-full bg-[#FCFCFE] border border-[#F2F0FD] shadow-[0px_4px_4px_#F2F0FD] flex items-center justify-center shrink-0">
                    <img src="/youtube.svg" alt="YouTube Logo" className="w-[45px] h-[35px] shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-[18px] leading-[25px] text-[#FF3838]">YouTube <br/> <span className="text-[#000416]">SIM PLANEJAR</span></p>
                    <p className="font-normal text-[15px] leading-[22px] text-[#000416] mt-1">
                      Séries organizadas para aprofundar seu conhecimento em planejamento financeiro.
                    </p>
                  </div>
                </div>
                <Link 
                  href="https://www.youtube.com/@simplanejar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full h-[50px] mt-4 border border-[#FF3838] shadow-[0px_1px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-2 text-[#FF3838] font-semibold text-[16px] hover:bg-red-50 transition-colors"
                >
                  Conhecer o canal no YouTube
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0312 11.0416H0V8.95844H16.0312L8.53125 1.45844L10 0L20 10L10 20L8.53125 18.5416L16.0312 11.0416Z" fill="#FF3838"/>
                  </svg>
                </Link>
              </div>

              {/* Banner Inferior Esquerdo */}
              <div className="w-full lg:w-[400px] h-[45px] bg-[#F2F0FD] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-3 px-4">
                <img src="/gift.svg" alt="Ícone de Presente" className="w-[20px] h-[21px] shrink-0" />
                <p className="font-normal text-[15px] leading-[22px] text-[#000416]">
                  Conteúdo <span className="text-[#7C4DFF] font-semibold">gratuito</span> organizado por séries.
                </p>
              </div>

            </div>
          </div>

          {/* ================= COLUNA DIREITA ================= */}
          <div className="w-full lg:flex-1 flex flex-col min-w-0">
            
            <div className="flex items-center gap-3 mb-6">
              <img src="/youtube.svg" alt="YouTube Icon" className="w-[40px] h-[30px] shrink-0" />
              <h3 className="font-extrabold text-[16px] text-[#000416] uppercase">
                Séries disponíveis no YouTube
              </h3>
            </div>

            {/* Carrossel Horizontal (Mobile) / Lista Vertical (Desktop) */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-6 pb-6 lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full lg:flex-col lg:overflow-visible"
            >
              {infiniteSeriesData.map((serie, index) => {
                const isClone = index >= seriesData.length;

                return (
                  <Link 
                    key={index} 
                    href={`https://www.youtube.com/watch?v=${serie.ytId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-[200px] lg:w-full lg:h-[140px] shrink-0 snap-center lg:bg-[#FCFCFE] lg:shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] lg:p-5 flex flex-col lg:flex-row items-start lg:items-center gap-4 group ${isClone ? 'lg:hidden' : ''}`}
                  >
                    
                    {/* Thumbnail do YouTube */}
                    <div className="relative w-[200px] h-[120px] lg:w-[170px] lg:h-[95px] bg-[#D9D9D9] rounded-[10px] flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://img.youtube.com/vi/${serie.ytId}/hqdefault.jpg`} 
                        alt={serie.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <img src="/youtube-play-video.svg" alt="Play Video" className="absolute w-[50px] h-[50px] group-hover:scale-105 transition-transform shadow-sm" />
                    </div>

                    <div className="hidden lg:flex flex-col flex-1 min-w-0 justify-center">
                      <h4 className="font-semibold text-[17px] leading-[24px] text-[#000416] group-hover:text-[#7C4DFF] transition-colors line-clamp-2">
                        {serie.title} — {serie.description}
                      </h4>

                      <div className="flex items-center gap-2 font-medium text-[15px] leading-[22px] text-[#000416] mt-2">
                        <img
                          src="/youtube-pequeno-preto.svg"
                          alt="YouTube Icon"
                          className="w-[20px] h-[16px] shrink-0"
                        />
                        {serie.videos} vídeos
                      </div>
                    </div>

                    <img src="/seta-fundo-roxo.svg" alt="Seta Roxa" className="hidden lg:block w-[45px] h-[45px] flex-shrink-0 group-hover:translate-x-1 transition-transform ml-2" />
                  </Link>
                );
              })}
            </div>

            {/* Indicadores de Paginação (Apenas Mobile) */}
            <div className="flex lg:hidden justify-center items-center gap-[9px] mt-2 mb-8">
              {seriesData.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-[10px] h-[10px] rounded-full transition-colors ${activeIndex === i ? 'bg-[#7C4DFF]' : 'bg-[#D9D9D9]'}`}
                ></div>
              ))}
            </div>

            {/* Banner Inferior Direito */}
            <div className="bg-[#F2F0FD] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] h-auto lg:h-[80px] p-5 lg:py-0 lg:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 mt-2 lg:mt-6 w-full">
              
              <div className="flex items-center gap-4">
                <svg width="35" height="28" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M24.25 1.25C47.25 1.25 47.25 1.25 47.25 18.75C47.25 36.25 47.25 36.25 24.25 36.25C1.25 36.25 1.25 36.25 1.25 18.75C1.25 1.25 1.25 1.25 24.25 1.25Z" pathLength="1" stroke="#7C4DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 1"/>
                  <path d="M19.1389 10L34.4722 18.75L19.1389 27.5V10Z" fill="#7C4DFF"/>
                </svg>

                <div className="flex flex-col">
                  <h4 className="font-bold text-[15px] lg:hidden text-[#000416]">E tem muito mais!</h4>
                  <p className="font-semibold text-[14px] lg:text-[17px] leading-[22px] text-[#000416]">
                    <span className="hidden lg:inline font-bold">E tem muito mais! </span>
                    Acesse o canal e descubra todas as séries e conteúdos disponíveis
                  </p>
                </div>
              </div>

              <Link 
                href="https://www.youtube.com/@simplanejar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full lg:w-auto lg:px-6 h-[48px] bg-[#7C4DFF] rounded-[10px] flex items-center justify-center gap-3 bg-[#7C4DFF] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 shrink-0"
              >
                <span className="font-semibold text-[15px] leading-[20px] text-[#FFFFFF] text-center">
                  Ver todas as séries no YouTube
                </span>
                <img src="/icone-ver-todas-as-series-no-yt.svg" alt="Ícone Ver Séries" className="w-[18px] h-[18px] shrink-0" />
              </Link>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}