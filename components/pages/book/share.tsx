import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { FaRegClipboard } from "react-icons/fa6";

const data = {
  title: "LEU O LIVRO E FEZ SENTIDO PARA VOCÊ?",
  call: "Compartilhe sua **experiência e resultados!**",
  description: "Responda à pesquisa sobre o livro **“Planejamento Financeiro: Você no Controle!”** e, se desejar, deixe uma mensagem para a autora. Será um **prazer conhecer a sua jornada** e as conquistas alcançadas ao longo das cinco etapas.",
  cards: [{
    title: "Sua experiência com o livro",
    call: "Responder à pesquisa",
    description: "Conte como os **conceitos e exercícios práticos** apresentados no livro “Planejamento Financeiro: Você no Controle!” contribuíram para a organização da sua vida financeira e compartilha os **resultados alcançados ao longo das cinco etapas.**",
    href: "/o-livro/form",
  },
  {
    title: "Fale com a autora",
    call: "Deixar uma mensagem",
    description: "Compartilhe uma **mensagem**, uma **reflexão** ou conte como foi a sua **experiência durante a leitura** e a aplicação dos conteúdos do livro.",
    href: "/contato",
  }]
}

export function renderHighlightedText(
  text: string,
  color: string = "var(--color-primary)",
  newLine: boolean = false
) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} style={{ color }} className={newLine ? "block" : undefined}>{part}</span>
      : part
  )
}

export function Share() {
  return (
    <div className="font-nunito items-center flex flex-col p-6 md:p-20 md:bg-[url('/pages/share.png')] md:bg-cover md:bg-center bg-no-repeat">
		<div className="items-start md:items-center flex flex-col mb-12 md:mb-20 w-full">
		<h1 className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-left md:text-center">
			{data.title}
		</h1>
		<div className="w-[50px] h-[6px] mt-5 mb-5 bg-gradient-to-r from-primary to-secondary rounded-[10px]" />
		<h2 className="text-2xl md:text-4xl font-extrabold mb-5 text-left md:text-center">
			{renderHighlightedText(data.call)}
		</h2>
		<p className="w-[90%] md:w-[60%] text-left md:text-center">
			{renderHighlightedText(data.description)}
		</p>
	</div>

      <div className="flex flex-col lg:flex-row w-full md:w-[90%] lg:w-[80%] gap-4">
        {data.cards.map((card, index) => (
          <div
            className="bg-card-bg w-full lg:w-[50%] px-6 md:px-16 lg:px-25 py-5 flex flex-col shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px] m-2 md:m-4 justify-between"
            key={index}
          >
            <div className="flex flex-col items-start">
              {index == 0 ? (
                <FaRegClipboard className="text-primary h-16 w-16 md:h-20 md:w-20 mb-4" />
              ) : (
                <MdOutlineChat className="text-primary h-16 w-16 md:h-20 md:w-20 mb-4" />
              )}
              <div className="flex flex-col items-start w-full">
                <h1 className="text-2xl md:text-4xl font-extrabold text-left">{card.title}</h1>
                <div className="w-[50px] h-[6px] mt-3 mb-3 bg-primary rounded-[10px]" />
                <h2 className="font-bold text-xl md:text-2xl text-left">{card.call}</h2>
              </div>
            </div>

            <p className="text-left mt-4">{renderHighlightedText(card.description)}</p>

            <Link
                href={card.href}
                className={`cursor-pointer mt-10 flex flex-row ${
                    index == 0
                    ? "bg-primary text-background hover:bg-[#6939E8] hover:shadow-lg"
                    : "bg-card-bg text-primary border-2 border-primary border-solid hover:bg-primary/5 hover:shadow-lg"
                } rounded-[10px] p-3 pr-10 pl-10 items-center justify-between m-5 transition-all duration-200`}
                >
                {index == 0 ? (
                    <SlNote className="h-7 w-7" />
                ) : (
                    <MdOutlineChat className="h-7 w-7" />
                )}
                <p className="text-xl font-bold">{card.call}</p>
                <FaArrowRight className="h-5 w-5" />
                </Link>
          </div>
        ))}
      </div>
    </div>
  )
}