import { GoLightBulb } from "react-icons/go";
import { FiThumbsUp } from "react-icons/fi";
import { CiTrophy, CiFaceSmile, CiFaceMeh, CiFaceFrown } from "react-icons/ci";
import { TfiFaceSad } from "react-icons/tfi";
import { FaRegSadCry } from "react-icons/fa";

const data = {
    h2: "Entenda o seu **resultado**",
    p: "O Índice de Saúde Financeira do Brasileiro é uma ferramenta desenvolvida pela **FEBRABAN**, que ajuda você a entender melhor sua relação com o dinheiro.",
    pbold: "Confira abaixo o que significa cada faixa do seu resultado:",
    lowp1: "Conhecer o significado do seu resultado é o primeiro passo para **transformar sua vida financeira.**",
    lowp2: "Agora, descubra como evoluir e **conquistar seus objetivos!**",
    cards: [
        {
            number: "83-100",
            icon: "/financial-health/otima.svg",
            classification: "Ótima",
            p: "Vida financeira sem estresse, no caminho certo para realizar seus sonhos e ter tranquilidade financeira no presente e no futuro.",
            colour: "#59A565"
        },
        {
            number: "69-82",
            icon: "/financial-health/muitoboa.svg",
            classification: "Muito boa",
            p: "Você está no caminho certo, mas ainda pode melhorar alguns pontos para alcançar total tranquilidade financeira.",
            colour: "#A0C45A"
        },
        {
            number: "61-68",
            icon: "/financial-health/boa.svg",
            classification: "Boa",
            p: "Com disciplina e alguns ajustes, você pode melhorar sua saúde financeira e conquistar seus objetivos com mais segurança.",
            colour: "#518FD5"
        },
        {
            number: "57-60",
            icon: "/financial-health/ok.svg",
            classification: "Ok",
            p: "Sua vida financeira está em equilíbro, mas é importante ficar atento e buscar melhorias para não sair desse nível.",
            colour: "#68C6D2"
        },
        {
            number: "50-56",
            icon: "/financial-health/baixa.svg",
            classification: "Baixa",
            p: "Alguns cuidados são necessários para reorganizar suas finanças e evitar problemas futuros.",
            colour: "#F2B855"
        },
        {
            number: "37-49",
            icon: "/financial-health/muitobaixa.svg",
            classification: "Muito baixa",
            p: "Sua saúde financeira está comprometida e ações são necessárias para evitar dívidas e recuperar controle.",
            colour: "#F49565"
        },
        {
            number: "0-36",
            icon: "/financial-health/ruim.svg",
            classification: "Ruim",
            p: "Sua situação financeira requer atenção urgente para evitar maiores problemas e recuperar sua estabilidade.",
            colour: "#F56370"
        },
    ]
};

function renderHighlightedText(
    text: string,
    color: string = "text-primary",
    newLine: boolean = false
) {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1
            ? <span key={i} className={`${color} ${(newLine ? "block" : undefined)}`}>{part}</span>
            : part
    );
}

export function AboutResult() {
    return (
        <div className="w-full px-4 py-3 sm:px-6 lg:px-8 lg:py-10 xl:px-10">
            <section className="w-full max-w-[1440px] mx-auto mt-12">
                <div>
                    <div className="text-primary bg-[#E1D6FE] w-fit py-[6px] px-[12px] rounded-[10px] font-bold text-sm mb-4">
                        {renderHighlightedText(data.h2)}
                    </div>
                    
                    <h2 className="font-bold text-3xl sm:text-4xl text-[#000416]">
                        {renderHighlightedText(data.h2)}
                    </h2>
                    
                    <div className="w-[40px] h-[5px] my-5 bg-gradient-to-r from-primary to-secondary rounded-[10px]" />
                    
                    <p className="w-full lg:w-1/2 text-base sm:text-lg mb-2 text-foreground/80 leading-relaxed">
                        {renderHighlightedText(data.p)}
                    </p>
                    
                    <p className="font-bold mb-8 sm:mb-10 text-base sm:text-lg text-[#000416]">
                        {data.pbold}
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Container da lista de cards */}
                    <div className="w-full bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] rounded-[10px] p-3 sm:p-5">
                        {data.cards.map((card, index) => {
                            const colour = card.colour;
                            return (
                                <div 
                                    key={index} 
                                    className="bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] rounded-[10px] flex flex-row my-4 items-center justify-between min-h-[90px] md:h-32 border border-slate-100 overflow-hidden"
                                >
                                    <div 
                                        style={{ background: colour }} 
                                        className="text-white w-[25%] sm:w-[15%] md:w-[12%] h-full flex items-center text-center justify-center text-lg sm:text-2xl lg:text-3xl shrink-0"
                                    >
                                        <p className="font-bold">{card.number}</p>
                                    </div>
                                    
                                    <div className="p-3 sm:p-5 flex flex-row justify-between items-center w-[75%] sm:w-[85%] md:w-[88%] h-full gap-2 sm:gap-4">
                                        <img src={card.icon} alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 shrink-0 object-contain" />
                                        
                                        <p style={{ color: colour }} className="w-[20%] sm:w-[18%] font-bold text-sm sm:text-lg md:text-xl shrink-0">
                                            {card.classification}
                                        </p>
                                        
                                        <div style={{ background: colour }} className="h-12 md:h-16 w-[2px] shrink-0" />
                                        
                                        <p className="text-[#000416] w-[60%] sm:w-[65%] text-xs sm:text-sm md:text-base leading-snug">
                                            {card.p}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Banner inferior */}
                    <div className="w-full bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] rounded-[10px] flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 gap-4">
                        <div className="flex flex-row items-center gap-4 sm:gap-6">
                            <div className="bg-primary rounded-full p-3 sm:p-4 shrink-0">
                                <GoLightBulb className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                            </div>
                            <div className="text-sm sm:text-base md:text-lg text-left">
                                <p>{renderHighlightedText(data.lowp1)}</p>
                                <p>{renderHighlightedText(data.lowp2)}</p>
                            </div>
                        </div>
                        <img src="/financial-health/ladder.png" className="w-28 sm:w-40 md:w-56 shrink-0 object-contain" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}