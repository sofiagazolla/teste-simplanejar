import type { CSSProperties } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FiBook, FiTarget, FiTrendingUp, FiHeart } from "react-icons/fi";

export default function BookSection() {
	const colors = { "--purple": "#7C4DFF" } as CSSProperties;

	const features = [
		{ title: "Conteúdo Prático", icon: FiBook },
		{ title: "Método em 5 etapas", icon: FiTarget },
		{ title: "Objetivos que se tornam reais", icon: FiTrendingUp },
		{ title: "Linguagem simples e acessível", icon: FiHeart },
	];

	return (
		<div style={colors} className="w-full bg-[#FAF9FE] px-4 py-8 sm:px-6 lg:px-10 lg:py-16 xl:px-14 xl:py-20">
			<div className="mx-auto w-full max-w-[1440px]">
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center lg:gap-x-10 xl:gap-x-14 lg:gap-y-5">
					<div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
						<div className="flex items-center gap-3 lg:gap-4">
							<div className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-[#F3E8FF] text-[var(--purple)] shrink-0">
								<FiBook className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
							</div>
							<h1 className="mt-1 text-[28px] font-extrabold leading-[32px] text-[#000416] sm:text-[40px] sm:leading-[46px] lg:mt-0 xl:text-[50px] xl:leading-[58px]">Quer ir além?</h1>
						</div>

						<div className="gradient-background mt-3 h-[5px] w-[40px] rounded-full lg:mt-5" />

						<p className="mt-3 lg:mt-5 text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] font-semibold leading-[20px] sm:leading-[24px] lg:leading-[28px] xl:leading-[34px] text-[#000416] lg:max-w-[700px]">
							Conheça o livro <span className="text-[var(--purple)] font-bold">"Planejamento Financeiro: Você no Controle!"</span> e descubra um método prático em cinco etapas para ajudar você a assumir o controle da sua vida financeira e transformar objetivos em conquistas.
						</p>
					</div>

					<div className="grid grid-cols-[120px_1fr] xs:grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-3 items-center lg:contents">
						<div className="w-full lg:col-span-3 xl:col-span-3 lg:col-start-1 lg:row-start-2 lg:row-span-3 lg:flex lg:items-center lg:justify-center">
							<Image src="/dreams-simulator/book.svg" alt="Livro Planejamento Financeiro - Simone Costa" width={310} height={452} className="h-auto w-full object-contain lg:h-[380px] xl:h-[452px] lg:w-auto" />
						</div>

						<div className="flex flex-col gap-2 lg:col-span-4 xl:col-span-4 lg:col-start-4 lg:row-start-2 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-purple-100/80 lg:rounded-2xl lg:bg-white lg:p-4 xl:lg:p-5 lg:shadow-md lg:border lg:border-purple-50 lg:gap-0">
							{features.map((item, idx) => {
								const Icon = item.icon;
								return (
									<div key={idx} className="flex items-center gap-2.5 p-2 sm:p-2.5 bg-white rounded-xl shadow-sm border border-purple-50 lg:flex-col lg:items-center lg:justify-center lg:text-center lg:px-2 lg:py-1 lg:gap-2.5 lg:bg-transparent lg:rounded-none lg:shadow-none lg:border-none">
										<div className="flex h-8 w-8 sm:h-9 sm:w-9 lg:h-11 lg:w-11 xl:h-12 xl:w-12 items-center justify-center rounded-full bg-[#F5EEFF] text-[var(--purple)] shrink-0">
											<Icon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
										</div>
										<span className="text-[14px] lg:text-[12px] xl:text-[14px] font-medium text-[#000416] leading-tight lg:leading-snug">{item.title}</span>
									</div>
								);
							})}
						</div>
					</div>

					<div className="w-full rounded-2xl overflow-hidden shadow-sm my-1 lg:hidden">
						<Image src="/dreams-simulator/mosaic-mobile.svg" alt="Família de três gerações sorrindo e abraçada ao ar livre em um parque" width={400} height={200} className="h-auto w-full object-cover rounded-2xl" />
					</div>

					<div className="flex items-center gap-3 lg:gap-4 xl:gap-5 rounded-2xl bg-[#F4EFFF] p-4 lg:p-5 xl:p-6 border border-purple-100/50 lg:border-purple-100/60 lg:col-span-4 xl:col-span-4 lg:col-start-4 lg:row-start-3">
						<div className="flex h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 items-center justify-center rounded-full text-[var(--purple)] shrink-0">
							<FiTarget className="text-[25px] lg:text-[32px] xl:text-[40px]" />
						</div>
						<div className="h-8 lg:h-10 w-[2px] bg-purple-200/70 shrink-0" />
						<p className="text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#000416] leading-snug">
							Transforme <span className="text-[var(--purple)] font-extrabold">conhecimento em ação</span> e dê o próximo passo da sua jornada financeira.
						</p>
					</div>

					{/* colocar o caminho certo pro botão, ainda não tinha no projeto então eu não sabia qual era */}
					<div className="lg:col-span-4 xl:col-span-4 lg:col-start-4 lg:row-start-4">
						<a href="#" className="mt-3 flex h-[59px] w-full sm:max-w-[250px] cursor-pointer items-center justify-center gap-4 rounded-[10px] bg-[var(--purple)] font-bold text-white hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 ">
							<FiBook className="w-5 h-5 lg:w-6 lg:h-6" />
							<span>Conhecer o livro</span>
							<FaArrowRight className="text-[14px] lg:text-[16px]" />
						</a>
					</div>

					<div className="hidden lg:flex lg:col-span-5 xl:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-4 lg:justify-end">
						<Image src="/dreams-simulator/mosaic-desktop.svg" alt="Mosaico com imagens de conquistas e momentos em família: mulher tomando café, pai estudando com a filha, casa própria amarela, estudante com mochila, mulher trabalhando no notebook e família unida em um parque" width={620} height={889} className="h-auto w-full max-h-[889px] object-contain rounded-2xl" />
					</div>
				</div>
			</div>
		</div>
	);
}