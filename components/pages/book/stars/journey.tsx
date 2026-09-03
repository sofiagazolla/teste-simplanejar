import { FaStar } from "react-icons/fa";
import type { CardsProps } from "./cards";

interface JourneyProps {
	etapas: Pick<CardsProps, "etapa" | "cor">[];
	etapaAtiva: number;
	onEtapaClick?: (etapa: number) => void;
}

export function Journey({ etapas, etapaAtiva, onEtapaClick }: JourneyProps) {
	return (
		<div className="w-full max-w-[512px] sm:max-w-[544px]">
			<p className="mb-4 text-center text-base font-semibold text-[#7C4DFF]">
				SUA JORNADA EM 5 ETAPAS
			</p>

			<div className="flex w-full items-start overflow-hidden pb-1">
				{etapas.map((item, index) => {
					const estaAtiva = etapaAtiva === item.etapa;

					return (
						<div key={item.etapa} className={`flex items-start ${index < etapas.length - 1 ? "flex-1 sm:flex-none" : "shrink-0"}`}>
							<button onClick={() => onEtapaClick?.(item.etapa)} className="flex w-[50px] shrink-0 flex-col items-center sm:w-[64px]">
								<div style={estaAtiva ? { backgroundColor: item.cor, borderColor: item.cor, boxShadow: `0 3px 8px ${item.cor}55` } : undefined} className={`cursor-pointer flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 sm:h-[50px] sm:w-[50px] ${estaAtiva ? "text-white" : "border-[#BDBDBD] bg-white text-[#BDBDBD]"}`}>
									<FaStar className="text-[15px] sm:text-[25px]" />
								</div>

								<span style={estaAtiva ? { backgroundColor: item.cor } : undefined} className={`mt-2 flex h-[16px] w-[16px] items-center justify-center rounded-[2px] text-[9px] font-bold text-white sm:mt-3 sm:h-[18px] sm:w-[18px] sm:text-[10px] ${estaAtiva ? "" : "bg-[#BDBDBD]"}`}>
									{item.etapa}
								</span>

								<span style={{ color: estaAtiva ? item.cor : "#A5A5A5" }} className="mt-1 whitespace-nowrap text-xs font-semibold sm:text-base">
									ETAPA {item.etapa}
								</span>
							</button>

							{index < etapas.length - 1 && (
								<div className="-mx-[9px] mt-[14px] min-w-[12px] flex-1 border-t-2 border-dotted border-[#C8C8C8] sm:-mx-[7px] sm:mt-[24px] sm:w-[70px] sm:min-w-[70px] sm:flex-none" />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}