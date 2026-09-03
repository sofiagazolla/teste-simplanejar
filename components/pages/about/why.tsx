import Image from "next/image";

interface WhyData {
	titleTag: string;
	title: string;
	paragraph1: string
    paragraph2: string[]
	image: {
		path: string;
		alt: string;
	};
}

const whyMockData: WhyData = {
	titleTag: "Por que o Sim Planejar?",
	title: "Por que o Sim Planejar?",
	paragraph1: "O nome SIM PLANEJAR carrega um significado profundo: SIM é acreditar que é possível transformar a própria vida financeira com pequenas decisões conscientes. PLANEJAR é o caminho que nos leva do sonho à realização, com organização, propósito e disciplina",
	paragraph2: [
        "Quando unimos o ",
        "SIM",
        " e ",
        "PLANEJAR,",
        " criamos um convite diário para assumir o controle da própria vida financeira e dizer ",
        "SIM",
        " para um futuro com mais tranquilidade, liberdade e escolhas. ",
    ],
	image: {
		path: "/about/compass.png",
		alt: "Ilustração de uma bússola cercada por ícones de livro, alvo, pessoas, gráfico, coração e globo, representando os pilares do Sim Planejar.",
	},
};

export default function Why() {
	const textGradient = "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent";

	return (
		<section className="w-full max-w-[1440px] mx-auto">
			<div className="flex flex-col md:flex-row md:items-center">
				<div className="flex w-full flex-col p-6 md:w-[50%] md:p-15">
					<h2 className={`inline-block self-start text-lg font-extrabold uppercase md:text-2xl ${textGradient}`}>
						{whyMockData.titleTag}
					</h2>
					<div className="mt-5 mb-5 h-[5px] w-[40px] rounded-[10px] bg-gradient-to-r from-primary to-secondary" />
					<h1 className="mb-5 text-[24px] sm:text-[28px] md:text-[36px] xl:text-[48px] font-extrabold text-[#000416]"> Por que <br/> <span className="gradient-text"> Sim Planejar?</span></h1>
					<div className="mt-2 mb-5 h-[5px] w-[40px] rounded-[10px] bg-gradient-to-r from-primary to-secondary" />

					<p className="mb-4 text-lg font-medium last:mb-0">
						{whyMockData.paragraph1}
					</p>
                    <p className="mb-4 text-lg font-medium last:mb-0">
						{whyMockData.paragraph2.map((value, index) => {
                            return(
                                <span key={index} className={`font-bold ${index % 2 === 1 ? " text-primary" : undefined}`}>{value}</span>
                            );
                        })}
					</p>
					
				</div>

				<div className="flex w-full justify-center p-6 md:w-[50%] md:p-15">
					<Image
						src={whyMockData.image.path}
						alt={whyMockData.image.alt}
						width={706}
						height={605}
						className="h-auto w-full max-w-[480px] object-contain"
					/>
				</div>
			</div>
		</section>
	);
}
