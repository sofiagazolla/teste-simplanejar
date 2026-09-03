import type { ReactNode } from "react";

export interface LegalSection {
    id: string;
    number: string;
    title: string;
    content: ReactNode;
}

interface LegalPageLayoutProps {
    eyebrow: string;
    title: string;
    welcome?: string;
    intro1: string;
    intro2: string;
    icon?: string;
    heroImage?: string;
    heroImageClassName?: string;
    sections: LegalSection[];
}

export function LegalPageLayout({
    eyebrow,
    title,
    welcome,
    intro1,
    intro2,
    icon,
    heroImage,
    heroImageClassName = "bg-right-top bg-[length:100px] sm:bg-[length:350px]",
    sections,
}: LegalPageLayoutProps) {

    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="relative overflow-hidden bg-[#F2F0FD]">

                {heroImage && (
                    <div
                        aria-hidden
                        className={`pointer-events-none absolute inset-0 bg-no-repeat ${heroImageClassName}`}
                        style={{ backgroundImage: `url(${heroImage})` }}
                    />
                )}

                <div className="relative mx-[5px] sm:mx-[50px] max-w-5xl px-6 py-16">
                    <span className="text-[16px] sm:text-[24px] font-bold uppercase tracking-wide text-[#7C4DFF]">
                        {eyebrow}
                    </span>

                    <h1 className="mt-2 max-w-2xl text-[26px] sm:text-[50px] font-extrabold text-[#071F6B]">
                        {title}
                    </h1>

                    {icon && (
                        <div className="my-6">
                            <img src={icon} alt="" className="h-15 w-20 sm:h-30 sm:w-40" />
                        </div>
                    )}

                    {welcome && (
                        <p className="mt-2 max-w-2xl text-[18px] sm:text-[22px] font-bold text-[#7C4DFF]">
                            {welcome}
                        </p>
                    )}

                    <p className="mt-4 max-w-2xl text-[18px] sm:text-[26px] font-bold text-[#000416]">
                        {intro1}
                    </p>

                    <p className="mt-4 max-w-2xl text-[16px] sm:text-[20px] font-semibold text-[#000416]">
                        {intro2}
                    </p>
                    
                </div>
            </section>

            {/* Sumário + Seções */}
            <div className="mx-auto max-w-5xl px-6 py-16">
                <nav
                    aria-label="Sumário"
                    className="mb-16 grid grid-cols-1 gap-x-8 gap-y-3 rounded-xl bg-[#F2F0FD] p-6 sm:grid-cols-2 sm:grid-flow-col"
                    style={{
                        gridTemplateRows: `repeat(${Math.ceil(sections.length / 2)}, auto)`,
                    }}
                >
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="text-[16px] sm:text-[24px] font-bold text-[#000416] transition-colors hover:text-[#7C4DFF]"
                        >
                            <span className="mr-1 font-semibold text-[#7C4DFF]">
                                {section.number}.
                            </span>
                            {section.title}
                        </a>
                    ))}
                </nav>

                <div>
                    {sections.map((section, index) => {
                        const isLast = index === sections.length - 1;

                        return (
                            <div key={section.id}>
                                <section
                                    id={section.id}
                                    className={
                                        isLast
                                            ? "scroll-mt-28 my-10 rounded-xl bg-[#F2F0FD] p-6 sm:p-10"
                                            : "scroll-mt-28 py-10"
                                    }
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-[50px] sm:text-[100px] font-bold leading-none text-[#E2DDFF]">
                                            {section.number}
                                        </span>
                                        <div>
                                            <h2 className="text-[24px] sm:text-[30px] font-extrabold text-[#071F6B]">
                                                {section.title}
                                            </h2>
                                            <div className="mt-2 h-[5px] w-[40px] rounded-[10px] bg-[#7C4DFF]" />
                                        </div>
                                    </div>
                                    <div className="mt-4 space-y-3 text-[16px] sm:text-[18px] font-semibold text-[#000416]">
                                        {section.content}
                                    </div>
                                </section>

                                {!isLast && (
                                    <hr className="border-t-2 border-[#D9D9D9]" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}