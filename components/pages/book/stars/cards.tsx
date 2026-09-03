import type { CSSProperties } from "react";
import { useState } from "react";
import { FaInstagram, FaStar } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

async function baixarImagem(url: string, nomeArquivo: string) {
	const response = await fetch(url);
	const blob = await response.blob();
	const blobUrl = URL.createObjectURL(blob);

	const link = document.createElement("a");
	link.href = blobUrl;
	link.download = nomeArquivo;

	document.body.appendChild(link);
	link.click();
	link.remove();

	setTimeout(() => {
		URL.revokeObjectURL(blobUrl);
	}, 1000);
}

async function compartilharImagem(
	url: string,
	nomeArquivo: string,
) {
	const response = await fetch(url);
	const blob = await response.blob();
	const file = new File([blob], nomeArquivo, { type: blob.type });

	if (navigator.canShare && navigator.canShare({ files: [file] })) {
		await navigator.share({
			files: [file],
		});

		return;
	}

	await baixarImagem(url, nomeArquivo);
	alert(
		"Seu navegador não permite compartilhar direto. A imagem foi baixada, é só postar manualmente no Instagram!",
	);
}

interface DownloadButtonProps {
	imageUrl: string;
	nomeArquivo: string;
	className?: string;
}

function DownloadButton({imageUrl, nomeArquivo, className = "",}: DownloadButtonProps) {
	const [carregando, setCarregando] = useState(false);

	const handleClick = async () => {
		try {
			setCarregando(true);
			await baixarImagem(imageUrl, nomeArquivo);
		} catch (error) {
			console.error("Erro ao baixar a estrela:", error);
		} finally {
			setCarregando(false);
		}
	};

	return (
		<button onClick={handleClick} disabled={carregando} className={`cursor-pointer flex h-[40px] w-full items-center justify-center gap-2 px-4 text-white rounded-[10px] bg-[var(--stage-color)] transition-all duration-200 ease-in-out hover:bg-[var(--stage-hover)] hover:shadow-lg md:h-[52px] xl:h-[40px] ${className}`}>
			<MdDownload className="shrink-0 text-lg" />
			<p className="whitespace-nowrap text-base font-semibold md:whitespace-normal md:text-center xl:whitespace-nowrap">
				{carregando ? "Baixando..." : "Download da Estrela"}
			</p>
		</button>
	);
}

interface InstagramButtonProps {
	imageUrl: string;
	nomeArquivo: string;
	className?: string;
}

function InstagramButton({ imageUrl, nomeArquivo, className = "" }: InstagramButtonProps) {
	const [carregando, setCarregando] = useState(false);

	const handleClick = async () => {
		try {
			setCarregando(true);
			await compartilharImagem(imageUrl, nomeArquivo);
		} catch (error) {
			console.error("Erro ao compartilhar a estrela:", error);
		} finally {
			setCarregando(false);
		}
	};

	return (
		<button onClick={handleClick} disabled={carregando} className={`cursor-pointer flex h-[40px] w-full items-center justify-center gap-1 rounded-[10px] border-2 border-[var(--stage-color)] bg-white px-4 text-[var(--stage-color)] transition-all duration-200 ease-in-out hover:bg-[var(--stage-light)] hover:shadow-lg md:h-[52px] xl:h-[40px] ${className}`}>
			<FaInstagram className="shrink-0 text-base" />
			<p className="whitespace-nowrap text-sm font-semibold md:whitespace-normal md:text-center xl:whitespace-nowrap">
				{carregando ? "Abrindo..." : "Compartilhar no Instagram"}
			</p>
		</button>
	);
}

export interface CardsProps {
	etapa: number;
	titulo: string;
	descricao: string;
	cor: string;
	corHover: string;
	corClara: string;
	isActive?: boolean;
	className?: string;
}

export function Cards({etapa, titulo, descricao, cor, corHover, corClara, isActive = false, className = "",}: CardsProps) {

    const stageColors = {"--stage-color": cor, "--stage-hover": corHover, "--stage-light": corClara,} as CSSProperties;
	const imageUrl = `/stars/${etapa}.jpeg`;
	const nomeArquivo = `etapa-${etapa}.jpeg`;

	return (
		<div style={{ ...stageColors, borderTopColor: cor }}
            className={`flex h-[345px] w-full shrink-0 flex-col rounded-[10px] border-t-[7px] bg-white p-2 transition-all duration-200 ease-out sm:h-[380px] sm:px-[10px] sm:py-4 lg:h-[360px] xl:h-[355px] ${isActive ? "sm:-translate-y-1 sm:scale-[1.015] shadow-lg" : "sm:scale-100 hover:shadow-lg"} ${className}`}		
        >
			<div className="mb-5 flex shrink-0 items-center gap-4 px-1">
				
                <div style={{ borderColor: corClara, boxShadow: `0 3px 8px ${cor}55`,}} className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-[var(--stage-light)] text-[var(--stage-color)]">
					<FaStar className="text-[28px]" />
				</div>

				<p className="text-base font-bold text-[var(--stage-color)]"> ETAPA {etapa} </p>
			
            </div>

			<h2 className="text-[20px] font-bold text-[#000416] md:text-[18px] xl:text-[20px]"> {titulo} </h2>
			<p className="mt-2 text-base font-semibold text-[#000416]"> {descricao} </p>

			<div className="mt-auto">
				<DownloadButton imageUrl={imageUrl} nomeArquivo={nomeArquivo} className="mb-[10px]"/>
				<InstagramButton imageUrl={imageUrl} nomeArquivo={nomeArquivo}/>
			</div>
		</div>
	);
}
