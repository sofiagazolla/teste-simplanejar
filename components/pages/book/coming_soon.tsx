import React from "react";

export function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 flex items-center justify-center relative order-2 lg:order-1 my-6 lg:my-0">
          <div className="absolute -top-4 left-4 sm:left-12 z-20 bg-gradient-to-br from-[#2ED8E8] to-[#7C4DFF] text-white w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center p-2 text-center shadow-xl transform -rotate-12 border-4 border-white/90">
            <span className="font-['Dancing_Script'] text-xl sm:text-2xl font-bold leading-none drop-shadow-md">
              Nova edição
            </span>
          </div>

          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto flex items-center justify-center">
            <img
              src="/assets/book-mockup.png"
              alt="Livro Planejamento Financeiro: Você no controle! - Segunda Edição"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 space-y-6">
          <div className="w-full flex items-center justify-center lg:justify-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
            <span className="w-8 sm:w-12 h-1 bg-brand-purple rounded-full"></span>

            <div className="px-6 py-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-sans font-bold text-sm sm:text-base tracking-widest shadow-md">
              EM BREVE
            </div>

            <span className="w-8 sm:w-12 h-1 bg-brand-purple rounded-full"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
          </div>

          <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-gray-900 leading-none">
            SEGUNDA <span className="text-brand-purple">EDIÇÃO</span>
          </h1>

          <div className="flex flex-col items-center lg:items-start w-full relative -mt-2 z-10">
            <p className="font-['Dancing_Script'] text-[#2ED8E8] text-2xl sm:text-3xl md:text-4xl z-10">
              Uma nova jornada está chegando!
            </p>
          </div>

          <p className="font-sans text-gray-700 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-bold">
            A segunda edição do livro{" "}
            <span className="text-brand-purple">
              “Planejamento Financeiro: Você no controle!”
            </span>{" "}
            trará novos conteúdos, desafios e reflexões práticas para
          </p>

          <div className="relative w-full max-w-lg flex items-center justify-center my-2 px-6 sm:px-0">
            <div className="absolute left-1 sm:-left-12 w-6 sm:w-10 h-auto pointer-events-none z-10">
              <img
                src="/assets/left-detail.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="w-full border-2 border-brand-purple rounded-2xl p-4 sm:p-3">
              <p className="font-bebas text-sm sm:text-xl md:text-2xl text-gray-900 tracking-wider text-center leading-snug">
                AJUDAR VOCÊ A{" "}
                <span className="text-brand-purple">CONTINUAR CONSTRUINDO</span>{" "}
                UMA RELAÇÃO{" "}
                <span className="text-brand-cyan">MAIS CONSCIENTE</span> COM O
                DINHEIRO.
              </p>
            </div>

            <div className="absolute right-1 sm:-right-12 w-6 sm:w-10 h-auto pointer-events-none z-10">
              <img
                src="/assets/right-detail.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full max-w-lg">
            <div className="w-12 h-12 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/30 flex items-center justify-center shrink-0 shadow-sm p-2.5">
              <img
                src="/assets/protagonista-icon.svg"
                alt="Ícone Protagonista"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="block h-8 w-0.5 bg-[#7C4DFF] rounded-full shrink-0"></div>

            <p className="font-['Nunito'] text-gray-800 text-sm sm:text-base font-semibold text-left font-bold">
              Continue sendo protagonista da sua vida financeira.
            </p>
          </div>

          <div className="relative mt-2 w-full max-w-xs sm:max-w-sm h-auto flex items-center justify-center">
            <img
              src="/assets/brush-bg.png"
              alt=""
              className="w-full h-auto object-contain pointer-events-none"
            />
            <span className="absolute -mt-2 font-['Dancing_Script'] text-white text-2xl sm:text-3xl tracking-wide drop-shadow-md z-10 pointer-events-none">
              Aguarde as novidades!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
