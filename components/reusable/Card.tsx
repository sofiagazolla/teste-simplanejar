import Link from "next/link"

export interface cardData {
    name: string
    title: string
    description: string
    image: string
    alt: string
    icon: string
    href: string
    color?: string
    smallImage?: string
}
interface prop { props: cardData }

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

export function Card({ props }: prop) {
    const accent = props.color ?? "#7C4DFF"

    return (
        <Link
            href={props.href}
            className="w-full md:w-[220px] m-[8px] relative flex flex-col"
            style={{ "--card-accent": accent } as React.CSSProperties}
        >
            <span className="hidden md:block absolute -translate-y-1/2 left-2.5 z-[2] rounded-[10px] bg-[var(--card-accent)] text-white px-3 py-1.5 font-nunito text-[10px] font-extrabold w-fit m-0">
                {props.name}
            </span>
            <div className="bg-card-bg rounded-[10px] overflow-hidden text-foreground flex flex-col items-center flex-1 shadow-[0_4px_0_0_#00000025]">
                <div className="w-full">
                    <img src={props.image} alt={props.alt} className="w-full h-full object-cover block"/>
                </div>

                <div className="hidden md:flex relative -translate-y-1/2 bg-[var(--card-accent)] w-fit h-auto p-[13px] rounded-full aspect-square items-center justify-center">
                    <img src={props.icon} alt="" className="w-9 h-9 object-contain"/>
                </div>

                <div className="flex flex-col p-3 flex-1 md:-mt-[34px]">
                    <h2 className="text-foreground font-nunito text-base md:text-xl font-extrabold mb-2 mt-0">
                        {renderHighlightedText(props.title, accent, true)}
                    </h2>

                    <p className="hidden md:block text-foreground font-nunito text-sm font-semibold mb-3 mt-0">
                        {props.description}
                    </p>

                    <div className="flex flex-col mt-auto">
                        <img src={props.smallImage} alt="" className="hidden md:block"/>

                        <div className="w-full h-px bg-[var(--card-accent)]"/>

                        <div className="flex flex-row justify-between px-[5px] pt-2.5">
                            <span className="text-[var(--card-accent)] font-nunito font-bold text-sm md:text-base">
                                Acessar Simulador
                            </span>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0312 11.0416H0V8.95844H16.0312L8.53125 1.45844L10 0L20 10L10 20L8.53125 18.5416L16.0312 11.0416Z" fill="var(--card-accent)"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}