import type { CSSProperties } from "react";
import Image from "next/image";
import { LuClipboardList, LuLockKeyhole } from "react-icons/lu";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function Test() {
	const colors = { "--purple": "#7C4DFF" } as CSSProperties;

	return (
		<div style={colors} className="bg-[#FAF9FE] w-full px-4 py-3 sm:px-6 lg:px-8 lg:py-10 xl:px-10">
			<div className="mx-auto w-full max-w-[1440px] lg:flex lg:w-fit lg:items-center lg:justify-center lg:gap-6 xl:gap-10">
				<div className="w-full lg:w-[clamp(480px,41vw,600px)] lg:shrink-0">
					<div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-x-6 lg:block">
						<div className="md:col-start-1 md:row-start-1">
							
                            <h1 className="mt-1 text-[28px] font-extrabold leading-[32px] text-[#000416] sm:text-[40px] sm:leading-[46px] lg:mt-0 xl:text-[50px] xl:leading-[58px]">
								Índice de <br /> <span className="gradient-text">Saúde Financeira</span>
							</h1>

							<div className="gradient-background mt-3 h-[5px] w-[40px] rounded-full lg:mt-5" />
						</div>

						<p className="mt-2 max-w-[480px] text-[20px] font-extrabold leading-[21px] text-[#020218] md:col-start-1 md:row-start-2 md:mt-3 md:text-[26px] md:leading-[27px] lg:mt-4 xl:text-[30px] xl:leading-[36px]">
							Se você fosse dar uma nota para <br className="hidden lg:block" /> a sua saúde financeira de <br /> <span className="text-[var(--purple)]">0 a 100, qual seria?</span>
						</p>

						<Image src="/financial-health/about-img-mobile.svg" alt="" width={600} height={350} className="mx-auto mt-3 h-auto w-full max-w-[300px] md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:max-w-[380px] lg:hidden" />
                    </div>

					<div className="mt-5 space-y-4 lg:mt-8 lg:space-y-2 xl:space-y-3">
						
                        <p className="text-[14px] font-semibold leading-[18px] text-[#000416] md:text-[16px] md:leading-[21px] lg:leading-[28px] xl:text-[18px] xl:leading-[32px]">
							Muitas pessoas <span className="font-bold text-[var(--purple)]">sonham</span> com a casa própria, uma aposentadoria mais tranquila, uma viagem ou simplesmente uma vida financeira mais organizada, mas <span className="font-bold text-[var(--purple)]">não sabem por onde começar</span> quando o assunto é planejamento financeiro.
						</p>

						<p className="text-[14px] font-semibold leading-[18px] text-[#000416] md:text-[16px] md:leading-[21px] lg:leading-[28px] xl:text-[18px] xl:leading-[32px]">
							O Índice de Saúde Financeira do Brasileiro, desenvolvido pela <span className="font-bold text-[var(--purple)]">FEBRABAN</span>, ajuda você a entender melhor sua relação com o dinheiro e a identificar pontos importantes para melhorar.
						</p>

						<p className="text-[14px] font-semibold leading-[18px] text-[#000416] md:text-[16px] md:leading-[21px] lg:leading-[28px] xl:text-[18px] xl:leading-[32px]">
							Porque o primeiro passo para transformar sua vida financeira é <span className="font-bold text-[var(--purple)]">conhecer onde você está agora.</span>
						</p>
					</div>

					<div className="mt-5 flex w-full items-center gap-3 rounded-[10px] bg-[#F2EDFF] px-3 py-4 lg:mt-7 lg:max-w-[520px] lg:gap-4 lg:px-4 lg:py-3">
						<div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[var(--purple)] lg:h-[58px] lg:w-[58px]">
							<FaArrowRotateLeft className="text-[30px] text-white lg:text-[32px]" />
						</div>

						<p className="min-w-0 flex-1 text-[13px] font-semibold leading-[18px] text-[#020218] sm:text-[14px] sm:leading-[19px] lg:leading-[18px]">
							Após concluir o teste, retorne ao site do Sim Planejar para entender o significado do seu resultado e descobrir os próximos passos da sua jornada financeira.
						</p>
					</div>

                    <a href="https://indice.febraban.org.br/calcule-seu-indice" target="_blank" rel="noopener noreferrer" className="mt-3 flex h-[44px] w-[329px] cursor-pointer items-center justify-center gap-4 rounded-[10px] bg-[var(--purple)] font-bold text-white hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 lg:h-[80px] lg:w-[400px]">
                        <LuClipboardList className="text-[30px] lg:text-[50px]" />
                        <p className="text-[20px] lg:text-[26px]">Fazer o teste</p>
                    </a>

					<div className="mt-2 flex items-start gap-2">
						<LuLockKeyhole className="mt-[1px] text-[17px] text-[#020218]" />
						<p className="text-center text-[12px] text-[#020218] sm:text-[13px]">Você será direcionado para o site do Índice de Saúde Financeira do Brasileiro</p>
					</div>
				</div>

				<div className="hidden lg:flex lg:w-[clamp(500px,45vw,760px)] lg:shrink-0 lg:items-center">
					<Image src="/financial-health/about-img-desktop.svg" alt="" width={800} height={800} className="h-auto w-full max-w-[760px]" priority />
				</div>
			</div>
		</div>
	);
}