'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Nunito } from 'next/font/google';
import { ChevronLeft, ChevronRight, CheckCircle2, ExternalLink, Star } from 'lucide-react';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

interface Review {
  id: number;
  title: string;
  comment: string;
  rating: number;
  author: string;
  initial: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    title: 'Livro Interessante',
    comment: 'Gostei muito do livro, têm me ajudado muito no repensar de como ministrar minhas finanças. Ótimo livro.',
    rating: 5,
    author: 'Eliane',
    initial: 'E',
  },
  {
    id: 2,
    title: 'Bom livro',
    comment: 'Muito bom para quem deseja construir um propósito financeiro e ter controle de suas ações financeiras.',
    rating: 4,
    author: 'Carlos',
    initial: 'C',
  },
  {
    id: 3,
    title: 'Excelente',
    comment: 'Simplesmente maravilhoso. Para iniciantes, bem mais completo.',
    rating: 4,
    author: 'Aline',
    initial: 'A',
  },
  {
    id: 4,
    title: 'Transformador',
    comment: 'Mudou completamente minha visão sobre investimentos e organização pessoal.',
    rating: 5,
    author: 'Roberto',
    initial: 'R',
  },
  {
    id: 5,
    title: 'Recomendo a todos',
    comment: 'Leitura leve, fluida e com conceitos práticos que podem ser aplicados no dia a dia.',
    rating: 5,
    author: 'Mariana',
    initial: 'M',
  },
  {
    id: 6,
    title: 'Didático e direto',
    comment: 'Sem enrolação, vai direto ao ponto com exemplos muito práticos.',
    rating: 4,
    author: 'Lucas',
    initial: 'L',
  },
];

// Lista triplicada para permitir o carrossel infinito sem cortes
const extendedReviews = [...reviewsData, ...reviewsData, ...reviewsData];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(reviewsData.length);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex >= reviewsData.length * 2) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - reviewsData.length);
    } else if (currentIndex < reviewsData.length) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + reviewsData.length);
    }
  };

  // Suporte a swipe no celular
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className={`bg-[#faf9ff] py-16 px-4 md:px-8 lg:px-16 overflow-hidden ${nunito.className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Responsivo */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div className="max-w-2xl">
            {/* Tag / Linha decorativa */}
            <div className="mb-4">
              <span className="text-[20px] xl:text-[24px] font-bold gradient-text whitespace-nowrap">
                AVALIAÇÕES DOS LEITORES
              </span>
              <div className="h-1.5 w-16 bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] rounded-full mt-1.5"></div>
            </div>

            {/* Título Principal */}
            <h2 className="text-[24px] md:text-[36px] lg:text-[48px] font-extrabold leading-[32px] md:leading-[46px] lg:leading-[60px] text-[#000416] mb-4 break-words">
             Histórias reais de <br className="hidden md:block" />
             <span className="text-[#7C4DFF] inline">
             transformação financeira.
            </span>
            </h2>

            {/* Subtítulo */}
            <p className="text-gray-700 text-lg md:text-xl font-medium mt-6">
              Veja o que os leitores estão dizendo sobre o livro e como ele faz diferença na vida deles.
            </p>
          </div>

          {/* Botão Amazon - Desktop */}
          <div className="hidden md:block mt-8 md:mt-0">
            <a
              href="#"
              className="inline-flex items-center gap-4 px-6 py-3.5 border-2 border-[#7C4DFF] rounded-xl bg-white hover:bg-[#6939E8]/5 hover:shadow-lg transition-all duration-200"
            >
              <Image
                src="/images/amazon-logo.png"
                alt="Amazon Logo"
                width={100}
                height={28}
                unoptimized
                className="h-6 sm:h-7 w-auto object-contain flex-shrink-0"
              />
              <span className="text-[#7C4DFF] font-bold text-base whitespace-nowrap ">
                Ver todas as avaliações na Amazon
              </span>
              <ExternalLink className="w-5 h-5 text-[#7C4DFF]" />
            </a>
          </div>

          {/* Botão Amazon - Mobile */}
          <div className="md:hidden mt-8 w-full">
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-4 py-4 border-2 border-[#7C4DFF] rounded-xl bg-white hover:bg-[#7C4DFF]/5 transition-colors shadow-sm w-full"
            >
              <Image
                src="/images/amazon-logo.png"
                alt="Amazon Logo"
                width={100}
                height={28}
                className="h-6 sm:h-7 w-auto object-contain flex-shrink-0"
              />
              <span className="text-[#7C4DFF] font-bold text-[15px] sm:text-base">
                Ver todas as avaliações na Amazon
              </span>
              <ExternalLink className="w-5 h-5 text-[#7C4DFF] flex-shrink-0 hidden sm:block" />
            </a>
          </div>
        </div>

        {/* Carrossel Infinito */}
        <div className="relative px-0 md:px-12 py-2">
          {/* Botão Esquerdo (Desktop) */}
          <button
            onClick={prevSlide}
            aria-label="Anterior"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full border border-gray-200 bg-white text-[#7C4DFF] hover:bg-gray-50 transition-colors shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="overflow-hidden [--items-per-view:1] md:[--items-per-view:3]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / var(--items-per-view))))`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedReviews.map((review, idx) => (
                <div key={`${review.id}-${idx}`} className="w-full md:w-[33.333333%] flex-shrink-0 px-3">
                  <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full min-h-[340px]">
                    
                    {/* Aspas + Estrelas */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#a682ff]/80 text-6xl font-serif mt-6 leading-[0]">“</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating ? 'text-[#ffc107] fill-[#ffc107]' : 'text-gray-200 fill-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-grow">
                      <h3 className="font-extrabold text-[19px] text-[#0e1738] mb-3">
                        {review.title}
                      </h3>
                      <p className="text-gray-600 font-medium text-[15px] leading-relaxed mb-6">
                        {review.comment}
                      </p>
                    </div>

                    {/* Rodapé do Card Ajustado */}
                    <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-2 mt-auto pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2.5 shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#7C4DFF] flex items-center justify-center text-white text-base sm:text-lg font-extrabold shadow-sm shrink-0">
                          {review.initial}
                        </div>
                        <span className="font-bold text-[#0e1738] text-sm sm:text-[15px]">
                          {review.author}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-[#7C4DFF] shrink-0 whitespace-nowrap">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span className="font-bold text-[12px] sm:text-[13px]">
                          Compra verificada
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Direito (Desktop) */}
          <button
            onClick={nextSlide}
            aria-label="Próximo"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full border border-gray-200 bg-white text-[#7C4DFF] hover:bg-gray-50 transition-colors shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicadores */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTransitionEnabled(true);
                setCurrentIndex(index + reviewsData.length);
              }}
              aria-label={`Ir para o slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                (currentIndex % reviewsData.length) === index
                  ? 'w-8 bg-[#7C4DFF]'
                  : 'w-2.5 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}