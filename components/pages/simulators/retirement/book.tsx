import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiHeart, FiTarget, FiTrendingUp } from "react-icons/fi";

const features = [
  { title: "Conteúdo Prático", icon: FiBookOpen },
  { title: "Exercícios aplicáveis", icon: FiTarget },
  { title: "Planejamento para objetivos reais", icon: FiTrendingUp },
  { title: "Linguagem simples e acessível", icon: FiHeart },
];

export default function Book() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-16">
        <div className="flex justify-center lg:col-span-5">
          <Image
            src="/book/book-home.png"
            alt="Livro Planejamento Financeiro: Você no Controle, da autora Simone Costa."
            width={411}
            height={643}
            className="h-auto w-[200px] object-contain drop-shadow-xl sm:w-[260px] lg:w-[320px] xl:w-[380px]"
          />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7 lg:max-w-[640px] xl:gap-7">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-primary sm:h-14 sm:w-14">
                <FiBookOpen className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h2 className="text-[28px] font-extrabold leading-tight text-dark-blue sm:text-[36px] xl:text-[42px]">
                Quer ir além?
              </h2>
            </div>

            <div className="gradient-background ml-16 mt-2 h-[5px] w-[40px] rounded-full sm:ml-[72px]" />
          </div>

          <p className="text-sm font-semibold leading-relaxed text-dark-blue sm:text-base xl:text-[18px]">
            A simulação apresenta uma estimativa baseada nas informações informadas. O livro{" "}
            <span className="font-bold text-primary">Planejamento Financeiro: Você no Controle!</span> ajuda você a
            compreender os resultados, tomar decisões mais conscientes e transformar objetivos em um plano financeiro
            consistente para o futuro.
          </p>

          <div className="flex items-center gap-4 rounded-2xl border border-purple-100/60 bg-[#F4EFFF] p-4 sm:gap-5 sm:p-5 xl:p-6">
            <FiTarget className="h-10 w-10 shrink-0 text-primary sm:h-12 sm:w-12 xl:h-14 xl:w-14" />
            <div className="h-12 w-[2px] shrink-0 bg-purple-200/70 xl:h-14" />
            <p className="text-sm font-semibold leading-snug text-dark-blue sm:text-base xl:text-[18px]">
              Defina <span className="font-bold text-primary">metas</span>, organize suas decisões e construa um{" "}
              <span className="font-bold text-primary">planejamento financeiro consistente</span> para a sua{" "}
              <span className="font-bold text-primary">aposentadoria</span>.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-primary sm:h-12 sm:w-12">
              <FiTrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <p className="text-sm font-semibold leading-snug text-dark-blue sm:text-base xl:text-[18px]">
              O primeiro passo é fazer a simulação. O próximo é transformar esse resultado em um{" "}
              <span className="font-bold text-primary">plano para a sua vida financeira</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4 sm:gap-x-0 sm:divide-x sm:divide-[#DCD7F5]">
            {features.map(({ title, icon: Icon }) => (
              <div key={title} className="flex flex-col items-center gap-2 px-2 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E8FF] text-primary xl:h-12 xl:w-12">
                  <Icon className="h-5 w-5 xl:h-6 xl:w-6" />
                </div>
                <span className="text-xs font-semibold leading-tight text-dark-blue xl:text-sm">{title}</span>
              </div>
            ))}
          </div>

          <Link
            href="/o-livro"
            className="flex h-[52px] w-full items-center justify-center gap-3 self-center rounded-[10px] bg-primary px-6 text-base font-bold text-white transition-all duration-200 hover:bg-[#6939E8] hover:shadow-lg sm:w-fit sm:min-w-[220px]"
          >
            <FiBookOpen className="h-5 w-5" />
            <span>Conhecer o livro</span>
            <FiArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
