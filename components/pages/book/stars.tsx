"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Cards, type CardsProps } from "./stars/cards";
import { Journey } from "./stars/journey";

const etapas: CardsProps[] = [
	{
		etapa: 1,
		titulo: "Autoconhecimento",
		descricao:
			"Conhecer a situação financeira atual: receitas, despesas e dívidas.",
		cor: "#7C4DFF",
		corHover: "#6939E8",
		corClara: "#F2F0FD",
	},
	{
		etapa: 2,
		titulo: "Fluxo Financeiro",
		descricao: "Construir e otimizar o seu fluxo financeiro.",
		cor: "#01AEAA",
		corHover: "#018C89",
		corClara: "#D7ECF1",
	},
	{
		etapa: 3,
		titulo: "Reservas e Proteção",
		descricao:
			"Construir e planejar as reservas de emergência, aposentadoria, sonhos e projetos, proteção e sucessão.",
		cor: "#7C4DFF",
		corHover: "#6939E8",
		corClara: "#F2F0FD",
	},
	{
		etapa: 4,
		titulo: "Protagonismo",
		descricao:
			"Praticar e monitorar o seu planejamento financeiro pessoal.",
		cor: "#E95802",
		corHover: "#C44802",
		corClara: "#FEEFE9",
	},
	{
		etapa: 5,
		titulo: "Agora é com você!",
		descricao:
			"Celebre sua conquista e siga transformando seus planos em realidade.",
		cor: "#EFA901",
		corHover: "#C58C01",
		corClara: "#FFF5DC",
	},
];

export default function Stars() {
	const [indiceAtivo, setIndiceAtivo] = useState(0);

	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const etapaAtiva = etapas[indiceAtivo].etapa;

	const cancelarHover = () => {
		if (hoverTimerRef.current === null) {
			return;
		}

		clearTimeout(hoverTimerRef.current);
		hoverTimerRef.current = null;
	};

	const selecionarIndice = (novoIndice: number) => {
		const indiceSeguro = Math.max(
			0,
			Math.min(novoIndice, etapas.length - 1),
		);

		cancelarHover();
		setIndiceAtivo(indiceSeguro);

		if (window.innerWidth < 1280) {
			requestAnimationFrame(() => {
				cardRefs.current[indiceSeguro]?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center",
				});
			});
		}
	};

	const iniciarHover = (index: number) => {
		cancelarHover();

		if (index === indiceAtivo) {
			return;
		}

		hoverTimerRef.current = setTimeout(() => {
			selecionarIndice(index);
		}, 250);
	};

	const irParaAnterior = () => {
		selecionarIndice(indiceAtivo - 1);
	};

	const irParaProxima = () => {
		selecionarIndice(indiceAtivo + 1);
	};

	const irParaEtapa = (etapa: number) => {
		const index = etapas.findIndex((item) => item.etapa === etapa);

		if (index !== -1) {
			selecionarIndice(index);
		}
	};

	useEffect(() => {
		return () => {
			if (hoverTimerRef.current !== null) {
				clearTimeout(hoverTimerRef.current);
			}
		};
	}, []);

	return (
		<div className="min-h-screen bg-[#FAF9FE] px-5 py-6">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col">
				<div className="mb-10 flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
					<div className="w-full max-w-xl text-left">
						<h2 className="text-[clamp(20px,1.6vw,24px)] font-bold gradient-text whitespace-nowrap">
							RESGATE AS SUAS ESTRELAS
						</h2>

						<div className="gradient-background my-2 h-[5px] w-[40px] rounded-[10px]" />

						<h1 className="text-[clamp(28px,4.5vw,46px)] font-extrabold text-[#000416]">
							Sua jornada, suas conquistas,{" "}
							<span className="text-[#7C4DFF]">
								suas estrelas!
							</span>
						</h1>

						<p className="mt-4 text-base font-semibold text-[#000416]">
							Cada etapa concluída é uma conquista na sua jornada rumo ao protagonismo financeiro!
						</p>

						<p className="mt-4 text-base font-semibold text-[#000416]">
							Selecione a etapa que você concluiu, faça o download da sua estrela e compartilhe essa conquista nas suas redes sociais!
						</p>
					</div>

					<div className="flex w-full justify-center lg:w-auto lg:shrink-0 lg:justify-end">
						<Journey etapas={etapas} etapaAtiva={etapaAtiva} onEtapaClick={irParaEtapa} />
					</div>
				</div>

				<div className="flex items-center justify-center gap-2 sm:hidden">
					<button onClick={irParaAnterior} disabled={indiceAtivo === 0} className="cursor-pointer disabled:cursor-default flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F0FD] text-[#7C4DFF] drop-shadow-[0_1px_1px_#7C4DFF] disabled:opacity-30">
						<FaChevronLeft />
					</button>

					<div className="w-[250px] shrink-0">
						<Cards key={etapas[indiceAtivo].etapa} {...etapas[indiceAtivo]} isActive />
					</div>

					<button onClick={irParaProxima} disabled={indiceAtivo === etapas.length - 1} className="cursor-pointer disabled:cursor-default flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F2F0FD] text-[#7C4DFF] drop-shadow-[0_1px_1px_#7C4DFF] disabled:opacity-30">
						<FaChevronRight />
					</button>
				</div>

				<div className="relative hidden sm:block">
					<button onClick={irParaAnterior} disabled={indiceAtivo === 0} className="cursor-pointer disabled:cursor-default absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#F2F0FD] text-[#7C4DFF] drop-shadow-[0_1px_1px_#7C4DFF] disabled:opacity-30 xl:hidden">
						<FaChevronLeft />
					</button>

					<div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-12 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:overflow-visible xl:px-0">
						{etapas.map((item, index) => (
							<div key={item.etapa} ref={(element) => { cardRefs.current[index] = element; }} onMouseEnter={() => iniciarHover(index)} onMouseLeave={cancelarHover} onClick={() => selecionarIndice(index)} onFocusCapture={() => selecionarIndice(index)} className="min-w-0 shrink-0 snap-center basis-[calc((100%_-_1rem)/2)] cursor-pointer transition-all duration-200 hover:shadow-lg lg:basis-[calc((100%_-_2rem)/3)] xl:basis-[calc((100%_-_4rem)/5)]">
								<Cards {...item} isActive={etapaAtiva === item.etapa} />
							</div>
						))}
					</div>

					<button onClick={irParaProxima} disabled={indiceAtivo === etapas.length - 1} className="cursor-pointer disabled:cursor-default absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#F2F0FD] text-[#7C4DFF] drop-shadow-[0_1px_1px_#7C4DFF] disabled:opacity-30 xl:hidden">
						<FaChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
}