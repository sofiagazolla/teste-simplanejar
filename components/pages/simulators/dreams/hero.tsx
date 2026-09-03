import type { CSSProperties } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
	const colors = { "--purple": "#7C4DFF" } as CSSProperties;

	return (
		<div style={colors} className="bg-[#FAF9FE] w-full px-4 py-3 sm:px-6 lg:px-8 lg:py-10 xl:px-10">
			<div className="mx-auto w-full max-w-[1440px] lg:flex lg:w-fit lg:items-center lg:justify-center lg:gap-6 xl:gap-10">
				<div className="w-full lg:w-[clamp(480px,41vw,600px)] lg:shrink-0">
					<div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(260px,380px)] md:items-center md:gap-x-6 lg:block">
						<div className="md:col-start-1">
							<h2 className="text-[16px] md:text-[18px] xl:text-[24px] font-bold gradient-text whitespace-nowrap">SIMULADOR DE SONHOS E PROJETOS</h2>

							<h1 className="mt-1 text-[28px] font-extrabold leading-[32px] text-[#000416] sm:text-[40px] sm:leading-[46px] lg:mt-0 xl:text-[50px] xl:leading-[58px]">
								A realização dos seus <br /> <span className="text-[var(--purple)]">sonhos</span> começa quando <br /> você decide <span className="text-[var(--purple)]">dar <br /> o primeiro passo</span>
							</h1>

							<div className="gradient-background mt-3 h-[5px] w-[40px] rounded-full lg:mt-5" />

							<div className="mt-5 space-y-4 lg:mt-8 lg:space-y-2 xl:space-y-3">
								<p className="w-full max-w-[530px] text-[16px] font-semibold leading-[18px] text-[#000416] md:text-[18px] md:leading-[21px] lg:leading-[28px] xl:text-[20px] xl:leading-[32px]">
									Casa própria, carro, viagem, intercâmbio, negócio próprio ou qualquer outro sonho importante...
								</p>

								<p className="w-full max-w-[530px] text-[16px] font-semibold leading-[18px] text-[#000416] md:text-[18px] md:leading-[21px] lg:leading-[28px] xl:text-[20px] xl:leading-[32px]">
									Planejar é transformar desejos em metas alcançáveis, definindo quanto guardar, por quanto tempo e com qual estratégia para chegar lá com mais segurança e tranquilidade.
								</p>

								<p className="w-full max-w-[530px] text-[16px] font-extrabold leading-[18px] text-[#000416] md:text-[18px] md:leading-[21px] lg:leading-[28px] xl:text-[20px] xl:leading-[32px]">
									Seja protagonista da sua vida financeira. <span className="text-[var(--purple)]">Você no controle!</span>
								</p>
							</div>

							{/* substituir o # pelo caminho certo, não consegui fazer isso funcionar :( */}
							<Link href="de-sonhos-e-projetos/form" className="mt-3 flex h-[59px] w-full sm:max-w-[250px] cursor-pointer items-center justify-center gap-4 rounded-[10px] bg-[var(--purple)] font-bold text-white hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 ">
								<p className="text-[16px]">Acessar o simulador</p>
								<FaArrowRight className="text-[16px]" />
							</Link>
						</div>

						<Image src="/dreams-simulator/hero.svg" alt="Composição com miniaturas de metas de vida: maquete de casa, carro, avião, mala de viagem, cofrinho, passaporte brasileiro e celular com gráfico de planejamento financeiro" width={600} height={350} className="mx-auto mt-3 h-auto w-full max-w-[380px] md:col-start-2 md:row-start-1 md:mt-0 md:max-w-[380px] lg:hidden" />
					</div>
				</div>

				<div className="hidden lg:flex lg:w-[clamp(500px,45vw,760px)] lg:shrink-0 lg:items-center">
					<Image src="/dreams-simulator/hero.svg" alt="Composição com miniaturas de metas de vida: maquete de casa, carro, avião, mala de viagem, cofrinho, passaporte brasileiro e celular com gráfico de planejamento financeiro" width={800} height={800} className="h-auto w-full max-w-[760px]" />
				</div>
			</div>
		</div>
	);
}