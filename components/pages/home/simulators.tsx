import { Card, cardData, renderHighlightedText } from "../../reusable/Card"

interface simulatorsData {
    title : string,
    subtitle : string,
    description : string,
    button : string,
    cards : cardData[],
    bottomItems: bottomItem[],
    mainBottomItem: bottomItem
}

interface bottomItem {
    iconPath: string,
    description: string
}

const data : simulatorsData = {
    title : "SIMULADORES E FERRAMENTAS",
    subtitle: "O futuro financeiro começa pelas decisões de hoje",
    description: "Organizar a vida financeira vai muito além do dinheiro. O planejamento financeiro influencia escolhas, segurança, liberdade e a realização de objetivos importantes ao longo da vida. O SIM PLANEJAR disponibiliza simuladores e ferramentas práticas para apoiar você nessa construção de forma simples e acessível.",
    button: "Conheça todos os simuladores",
    cards: [{
        name: "CONSTRUA SEU SONHO",
        title: "Simulador de **Reserva de sonhos e Projetos**",
        description: "Descubra quanto precisa guardar para alcançar seus sonhos e transformá-los em realidade.",
        image: "/simulators/simulators-images/simulators0.png",
        alt: "",
        icon: "/simulators/simulators-icons/simulator0.png",
        href: "/simulador/de-sonhos-e-projetos",
        color: "#7C4DFF",
        smallImage: "/simulators/simulators-images/s0.png"
    },
    {
        name: "PLANEJAMENTO DE LONGO PRAZO",
        title: "Simulador de **Reserva para Aposentadoria**",
        description: "Planeja seu futuro e veja quanto você precisa investir para ter mais tranquilidade na aposentadoria.",
        image: "/simulators/simulators-images/simulators1.png",
        alt: "",
        icon: "/simulators/simulators-icons/simulator1.png",
        href: "/simulador/de-renda-na-aposentadoria",
        color: "#071F6B",
        smallImage: "/simulators/simulators-images/s1.png"
    },
    {
        name: "AUTOCONHECIMENTO",
        title: "Índice de **Saúde Financeira**",
        description: "Avalie sua situação financeira atual e receba dicas personalizadas para melhorar seu controle.",
        image: "/simulators/simulators-images/simulators2.png",
        alt: "",
        icon: "/simulators/simulators-icons/simulator2.png",
        href: "/indice-de-saude-financeira",
        color: "#01AEAA",
        smallImage: "/simulators/simulators-images/s2.png"
    },
    {
        name: "INVESTIMENTOS",
        title: "Perfil de **Investidor (Suitability)**",
        description: "Descubra seu perfil de investidor e conheça os investimentos mais adequados para você.",
        image: "/simulators/simulators-images/simulators3.png",
        alt: "",
        icon: "/simulators/simulators-icons/simulator3.png",
        href: "/suitability",
        color: "#7C4DFF",
        smallImage: "/simulators/simulators-images/s3.png"
    }],
    bottomItems: [
        { iconPath: "simulators/simulators-icons/bottomIcon0.svg", description: "Seguros e confiáveis" },
        { iconPath: "simulators/simulators-icons/bottomIcon1.svg", description: "Baseados em dados reais" },
        { iconPath: "simulators/simulators-icons/bottomIcon2.svg", description: "Simples e acessíveis" },
        { iconPath: "simulators/simulators-icons/bottomIcon3.svg", description: "Privacidade garantida" }
    ],
    mainBottomItem: {
        iconPath: "simulators/simulators-icons/bottomIcon3.svg",
        description: "Todos os simuladores são **gratuitos** e foram desenvolvidos para apoiar suas decisões financeiras."
    }
}

export default function Simulators() {
    return(
        <section id="simuladores" className="w-full py-6 md:py-10 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
            <div className="mx-auto flex flex-col items-center gap-8 lg:gap-10">
                
                <div className="flex flex-col xl:flex-row w-full gap-8 xl:gap-10 items-stretch">
                    
                    <div className="flex flex-col w-full xl:w-[35%] xl:shrink-0 justify-between">
                        <div>
                            <h1 className="font-nunito text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {data.title}
                            </h1>

                            <h2 className="text-dark-blue font-nunito text-2xl md:text-[38px] font-extrabold mt-3 md:mt-4 mb-2.5 leading-tight">
                                {data.subtitle}
                            </h2>
                            <div className="w-[50px] h-[5px] rounded-[10px] bg-gradient-to-r from-primary to-secondary mb-4 md:mb-6"/>
                            
                            <p className="text-foreground font-nunito text-base font-semibold leading-relaxed mb-6">
                                {data.description}
                            </p>
                        </div>

                        {/* Botão (Desktop/Tablet) */}
                        
                    </div>

                    {/* Coluna dos Cards */}
                    <div className="w-full xl:w-[65%] flex justify-center xl:justify-end">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:flex xl:flex-row xl:gap-4 w-full max-w-[560px] xl:max-w-none mx-auto xl:mx-0 items-stretch">
                            {data.cards.map((card, index) => (
                                <Card key={index} props={card} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* Banner Inferior */}
                <div className="w-full p-4 sm:p-6 xl:p-[30px] flex flex-col xl:flex-row xl:items-center xl:justify-between rounded-[10px] bg-card-bg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-dark-blue font-nunito text-sm md:text-base font-extrabold gap-5 xl:gap-0">

                    {/* Item Principal */}
                    <div className="flex flex-row items-center bg-[#F2F0FD] sm:bg-transparent p-3 sm:p-0 rounded-[10px]">
                        <div className="mr-3 sm:mr-4 ml-1 sm:ml-2 shrink-0">
                            <img src={data.mainBottomItem.iconPath} alt="" className="w-6 h-auto"/>
                        </div>
                        <p className="leading-snug">{renderHighlightedText(data.mainBottomItem.description)}</p>
                    </div>

                    {/* 4 Itens: Grid 2x2 em telas médias/móveis e Flex horizontal apenas no desktop grande (xl) */}
                    <div className="grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-8 xl:flex xl:flex-row xl:items-center">
                        {data.bottomItems.map((item, index) => (
                            <div className="flex flex-row items-center" key={index}>
                                <div className="hidden xl:block w-0.5 h-[45px] bg-primary mx-6 xl:mx-8 shrink-0"/>
                                <div className="mr-3 ml-1 xl:ml-0 shrink-0">
                                    <img
                                        src={item.iconPath}
                                        alt=""
                                        className={index === 1 ? "w-7 h-auto" : "w-6 h-auto"}
                                    />
                                </div>
                                <div className="leading-tight">{item.description}</div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}