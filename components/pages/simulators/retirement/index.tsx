import Image from 'next/image';
import entry31 from '../../../../media/entry-3-1.png';
import entry32 from '../../../../media/entry-3-2.png';
import entry33 from '../../../../media/entry-3-3.png';
import mobile1 from '../../../../media/entry-mobile-1.png';
import mobile2 from '../../../../media/entry-mobile-2.png';
import mobile3 from '../../../../media/entry-mobile-3.png';
import person from '../../../../media/person.svg';
import target from '../../../../media/target.svg';
import savings from '../../../../media/savings.svg';
import stocks from '../../../../media/stocks.svg';
import sofa from '../../../../media/sofa.svg';
import arrow from '../../../../media/arrow.svg';
import plant from '../../../../media/plant.svg';
import house from '../../../../media/house.svg';
import elipse1 from '../../../../media/elipse-1.svg';
import elipse2 from '../../../../media/elipse-2.svg';
import elipse3 from '../../../../media/elipse-3.svg';

const IconPerson = ({ className = "w-10 h-10" }: { className?: string }) => (
  <Image src={person} alt="Pessoa" className={className} />
);

const IconTarget = ({ className = "w-10 h-10" }: { className?: string }) => (
  <Image src={target} alt="Alvo" className={className} />
);

const IconSavings = ({ className = "w-10 h-10" }: { className?: string }) => (
  <Image src={savings} alt="Cofrinho" className={className} />
);

const IconStocks = ({ className = "w-10 h-10" }: { className?: string }) => (
  <Image src={stocks} alt="Gráfico de rentabilidade" className={className} />
);

const IconSofa = ({ className = "w-11 h-11" }: { className?: string }) => (
  <Image src={sofa} alt="Sofá" className={className} />
);

const IconPlant = ({ className = "w-11 h-11" }: { className?: string }) => (
  <Image src={plant} alt="Planta" className={className} />
);

const IconPatrimonio = ({ className = "w-11 h-11" }: { className?: string }) => (
  <Image src={house} alt="Casa" className={className} />
);

const IconArrow = ({ className = "w-4 h-4" }: { className?: string }) => (
  <Image src={arrow} alt="" className={className} />
);

export default function RetirementSimulator() {

  const featureCards = [
    {
      icon: IconPlant,
      title: 'Comece hoje',
      description: 'Pequenas escolhas constroem grandes conquistas.',
      mobileImage: mobile1,
      panelImage: entry31,
    },
    {
      icon: IconPatrimonio,
      title: 'Construa seu patrimônio',
      description: 'Planeje, invista e proteja o que é importante para você e sua família.',
      mobileImage: mobile2,
      panelImage: entry32,
    },
    {
      icon: IconSofa,
      title: 'Viva sua tranquilidade',
      description: 'Realize seus sonhos e desfrute do futuro com segurança financeira.',
      mobileImage: mobile3,
      panelImage: entry33,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        
        {/* elipses*/}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <Image
            src={elipse2}
            alt=""
            width={713}
            height={651}
            className="absolute left-[42.7%] top-[3.4%] w-[36.8%] h-auto"
          />
          <Image
            src={elipse1}
            alt=""
            width={512}
            height={651}
            className="absolute right-[-10.5%] top-[39.3%] w-[29.1%] h-auto"
          />
          <Image
            src={elipse3}
            alt=""
            width={623}
            height={651}
            className="absolute left-[53.5%] top-[28.8%] w-[39.4%] h-auto"
          />
        </div>

        {/* Left Column Text */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          <span className="block lg:!hidden gradient-text text-base break-words font-extrabold tracking-wide text-[#7343E0] uppercase">
            SIMULADOR DE RESERVA PARA APOSENTADORIA
          </span>

          <div className="hidden lg:block space-y-1">
            <span className="block text-2xl font-extrabold gradient-text whitespace-nowrap uppercase">
              SIMULADOR DE
            </span>
            <h1 className="text-5xl font-extrabold leading-[60px]">
              <span className="text-[#00194E]">Reserva para </span>
              <span className="text-primary">aposentadoria</span>
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold leading-8">
            <span className="text-black lg:text-[#00194E]">Planeje hoje a sua tranquilidade de </span>
            <span className="text-[#7343E0] lg:text-[#00194E]">amanhã.</span>
          </h2>

          <div className="w-10 h-[5px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-[10px]" />

          <p className="text-base sm:text-xl lg:text-2xl font-bold leading-9 text-foreground">
            Organize sua <span className="text-primary">vida financeira</span> e descubra quanto você precisa{' '}
            <span className="text-primary">investir por mês</span> para construir uma aposentadoria mais tranquila e alcançar seus objetivos.
          </p>

          <p className="text-base sm:text-lg lg:text-xl font-semibold leading-7 lg:leading-9 text-foreground">
            Explore diferentes cenários e tome decisões mais conscientes para o seu futuro financeiro.
          </p>

          <div className="hidden sm:block pt-2">
            <a
              href="/simulador/de-renda-na-aposentadoria/form"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#7343E0] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-violet-200 transition-all text-base"
            >
              Acessar o Simulador
              <IconArrow />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 mt-2 lg:mt-0">
          <div className="hidden lg:grid grid-cols-3 gap-3 xl:gap-4 w-full items-end">
            {featureCards.map(({ icon: Icon, title, description, panelImage }, idx) => (
              <div
                key={title}
                className={`flex flex-col items-center relative ${idx === 1 ? '-translate-y-10 xl:-translate-y-14' : ''}`}
              >
                <div className="w-full rounded-3xl overflow-hidden relative min-h-[350px] lg:min-h-[400px] xl:min-h-[460px]">
                  <Image
                    src={panelImage}
                    alt={title}
                    fill
                    className="object-cover block"
                  />
                </div>

                <div className="w-[92%] -mt-10 xl:-mt-12 relative z-10 bg-white rounded-3xl shadow-[0_12px_40px_rgb(0,0,0,0.08)] flex flex-col items-center text-center px-2 pb-5 pt-8 xl:pt-10 xl:pb-6">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <Icon className="w-9 h-9" />
                  </div>
                  <h3 className="font-bold text-black text-[15px] xl:text-[17px] mb-2 mt-1 leading-tight">{title}</h3>
                  <p className="text-[12px] xl:text-[14px] font-medium text-slate-600 leading-snug">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex lg:hidden flex-col">
            {featureCards.map(({ icon: Icon, title, description, mobileImage }, i) => (
              <div
                key={title}
                className={`flex items-start gap-4 py-3.5 ${i !== featureCards.length - 1 ? 'border-b border-[#D9D9D9]/60' : ''}`}
              >
                <Image src={mobileImage} alt={title} className="w-[114px] h-[85px] rounded-xl object-cover flex-shrink-0" />
                <Icon className="w-9 h-9 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#7343E0] text-base mb-1">{title}</h3>
                  <p className="text-base text-slate-600 leading-snug">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 sm:hidden flex justify-center w-full">
            <a
                href="/simulador/de-renda-na-aposentadoria/form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#7343E0] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all text-base text-center"
            >
                Acessar o simulador
                <IconArrow />
            </a>
            </div>
        </div>
      </section>
    </div>
  );
}