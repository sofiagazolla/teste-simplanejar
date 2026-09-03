import Link from "next/link";
import Image from "next/image";
import Alvo from "@/assets/alvo.png";
import Board from "@/assets/board.png";
import Checklist from "@/assets/checklist.png";
import Livro from "@/assets/livro.png";
import Pessoa from "@/assets/pessoa.png";
import Seta from "@/assets/seta.png";
import Livro_Gigante from "@/assets/livro gigante.png";

export function Book() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 my-8 lg:my-16 font-sans overflow-hidden">
      
      {/* ================= LAYOUT MOBILE (< lg) ================= */}
      <div className="flex flex-col items-center text-center lg:hidden">
        {/* Tag Superior */}
        <span className="font-extrabold text-[#7C4DFF] rounded-full bg-[#7C4DFF]/15 px-5 py-2.5 text-sm uppercase tracking-wide mb-4">
          QUER MUDAR ESSA REALIDADE?
        </span>

        {/* Título Mobile */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#000416] leading-tight mb-4">
          O que fazer com o <br />
          <span className="bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent">
            seu resultado?
          </span>
        </h1>

        {/* Barrinha de Gradiente */}
        <div className="gradient-background h-[5px] w-[40px] rounded-[10px] mb-6 mx-auto" />

        {/* Textos Centralizados (Ajustados para text-base) */}
        <div className="font-semibold text-base text-[#000416] leading-relaxed space-y-3 mb-6 max-w-md">
          <p>
            Conhecer a situação financeira é importante, mas a transformação começa quando você{" "}
            <span className="text-[#7C4DFF]">decide agir.</span>
          </p>
          <p>
            Conheça o livro{" "}
            <span className="text-[#7C4DFF]">Planejamento Financeiro.</span>
          </p>
          <p>
            O melhor momento para começar não é quando tudo estiver perfeito,{" "}
            <span className="text-[#7C4DFF]">é agora.</span>
          </p>
          <p>
            Transforme conhecimento em{" "}
            <span className="text-[#7C4DFF]">ação.</span>
          </p>
        </div>

        {/* Imagem do Livro no Meio */}
        <div className="w-full flex justify-center mb-6">
          <Image
            src={Livro_Gigante}
            alt="Livro Planejamento Financeiro - Simone Costa"
            className="w-full max-w-[240px] sm:max-w-[280px] h-auto object-contain"
          />
        </div>

        {/* Container Lilás com os 4 Cards */}
        <div className="w-full bg-[#F2F0FD] rounded-2xl p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 items-start mb-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image src={Board} alt="Prancheta" className="w-full h-full object-contain" />
            </div>
            <p className="font-bold text-[#071F6B] text-sm leading-snug">
              Conhecimento para colocar em ação.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image src={Checklist} alt="Checklist" className="w-full h-full object-contain" />
            </div>
            <p className="font-bold text-[#071F6B] text-sm leading-snug">
              Da reflexão à prática
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image src={Alvo} alt="Alvo" className="w-full h-full object-contain" />
            </div>
            <p className="font-bold text-[#071F6B] text-sm leading-snug">
              Planejamento para seus objetivos
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Image src={Pessoa} alt="Pessoa" className="w-full h-full object-contain" />
            </div>
            <p className="font-bold text-[#071F6B] text-sm leading-snug">
              Você no controle da sua vida financeira
            </p>
          </div>
        </div>

        {/* Botão Mobile */}
        <Link
          href="/o-livro"
          className="w-full bg-[#7C4DFF] hover:bg-[#6939E8] transition-all duration-200 text-white font-bold text-base py-3.5 px-5 rounded-xl flex items-center justify-between shadow-md"
        >
          <Image src={Livro} alt="Ícone livro" width={28} height={20} className="w-7 h-auto object-contain" />
          <span>Conhecer o livro</span>
          <Image src={Seta} alt="Ícone seta" width={20} height={20} className="w-5 h-5 object-contain" />
        </Link>
      </div>

      {/* ================= LAYOUT DESKTOP (>= lg) ================= */}
      <div className="hidden lg:flex flex-row items-center justify-between gap-12">
        {/* Coluna da Esquerda */}
        <div className="w-[60%] flex flex-col items-start z-10">
          <span className="font-extrabold text-[#7C4DFF] rounded-full bg-[#7C4DFF]/10 px-6 py-2.5 text-base mb-6">
            QUER MUDAR ESSA REALIDADE?
          </span>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#000416] leading-tight mb-6">
            Quer mudar <br /> essa{" "}
            <span className="bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent">
              realidade?
            </span>
          </h1>

          <div className="gradient-background h-[5px] w-[40px] rounded-[10px] mb-6" />

          <p className="font-semibold text-lg lg:text-xl text-[#000416] leading-relaxed mb-8">
            Conhecer a situação financeira é importante, mas a transformação começa quando você{" "}
            <span className="text-[#7C4DFF]">decide agir.</span> <br />
            Conheça o livro{" "}
            <span className="text-[#7C4DFF]">
              Planejamento Financeiro.
            </span>{" "}
            <br />
            O melhor momento para começar não é quando tudo estiver perfeito,{" "}
            <span className="text-[#7C4DFF]">é agora.</span> <br />
            Transforme conhecimento em{" "}
            <span className="text-[#7C4DFF]">ação.</span>
          </p>

          <div className="w-full bg-[#FCFCFE] rounded-2xl p-8 shadow-sm border border-[#F2F0FD] grid grid-cols-4 gap-6 items-center justify-items-center mb-10">
            <div className="flex flex-col items-center text-center">
              <Image src={Board} alt="Vetor prancheta" width={72} height={72} className="w-18 h-18 object-contain" />
              <p className="mt-4 font-bold text-[#071F6B] text-sm lg:text-base leading-tight">
                Conhecimento <br /> para colocar <br /> em ação
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src={Checklist} alt="Vetor checklist" width={72} height={72} className="w-18 h-18 object-contain" />
              <p className="mt-4 font-bold text-[#071F6B] text-sm lg:text-base leading-tight">
                Da reflexão à <br /> prática
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src={Alvo} alt="Vetor alvo" width={72} height={72} className="w-18 h-18 object-contain" />
              <p className="mt-4 font-bold text-[#071F6B] text-sm lg:text-base leading-tight">
                Planejamento <br /> para seus <br /> objetivos
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src={Pessoa} alt="Vetor pessoa" width={72} height={72} className="w-18 h-18 object-contain" />
              <p className="mt-4 font-bold text-[#071F6B] text-sm lg:text-base leading-tight">
                Você no controle <br /> da sua vida <br /> financeira
              </p>
            </div>
          </div>

          <Link
            href="/o-livro"
            className="bg-[#7C4DFF] hover:bg-[#6939E8] transition-all duration-200 text-white font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-6 shadow-md"
          >
            <Image src={Livro} alt="Vetor livro" width={32} height={24} className="w-8 h-auto object-contain" />
            <span>Conhecer o livro</span>
            <Image src={Seta} alt="Vetor seta" width={24} height={24} className="w-6 h-6 object-contain" />
          </Link>
        </div>

        {/* Coluna da Direita (Imagem do Livro) */}
        <div className="w-[40%] flex justify-center items-center shrink-0">
          <Image
            src={Livro_Gigante}
            alt="Livro de Simone Costa: Planejamento Financeiro"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>

    </section>
  );
}