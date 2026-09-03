"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { MdOutlinePeopleAlt, MdOutlineShoppingCart } from "react-icons/md";
import { PiClipboardText } from "react-icons/pi";
import { GrTarget } from "react-icons/gr";
import {
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    FlagIcon,
    MessageSquareQuote,
    Star,
} from "lucide-react";

const amazonLink =
    "https://www.amazon.com.br/Planejamento-Financeiro-Voc%C3%AA-no-controle/dp/6550471559";

type Feature = {
    icon: IconType;
    title: string;
    description: string;
    color: string;
    bg: string;
};

const features: Feature[] = [
    {
        icon: FlagIcon,
        title: "Conteúdo Prático",
        description: "Conhecimento para colocar em ação.",
        color: "#7C4DFF",
        bg: "#F2F0FD",
    },
    {
        icon: PiClipboardText,
        title: "Exercícios",
        description: "Da reflexão à prática.",
        color: "#01AEAA",
        bg: "#D7ECF1",
    },
    {
        icon: GrTarget,
        title: "Aplicação para a vida real",
        description: "Planejamento para seus objetivos.",
        color: "#071F6B",
        bg: "#DAE6F7",
    },
    {
        icon: MdOutlinePeopleAlt,
        title: "Protagonismo financeiro",
        description: "Você no controle da sua vida financeira.",
        color: "#7C4DFF",
        bg: "#F2F0FD",
    },
];

type Review = {
    rating: number;
    quote: string;
    author: string;
    initial: string;
};

const reviews: Review[] = [
    { rating: 5, quote: "Excelente Livro", author: "Rodolfo D. B.", initial: "R" },
    {
        rating: 5,
        quote: "Excelente produto. Recomendo a todos",
        author: "Tauma",
        initial: "T",
    },
    {
        rating: 5,
        quote:
            "Leitura prática, objetiva e fácil de aplicar no dia a dia. Me ajudou a organizar minhas finanças e ter clareza sobre meus objetivos.",
        author: "Carla M.",
        initial: "C",
    },
    {
        rating: 5,
        quote: "Mudou completamente a forma como eu penso o meu dinheiro.",
        author: "Bruno S.",
        initial: "B",
    },
];

type AmazonReviewsProps = {
    reviews: Review[];
    page: number;
    onPrev: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
};

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="max-w-[1440px] w-full flex min-h-[150px] flex-col justify-between rounded-[10px] bg-card-bg p-4 shadow-[0_4px_0_0_#00000025]">
            <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                    <Image
                        src="/assets/quotation.png"
                        alt=""
                        width={40}
                        height={29}
                        className="h-5 w-auto shrink-0"
                    />
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`h-3.5 w-3.5 ${
                                    i < review.rating
                                        ? "fill-[#FFC107] text-[#FFC107]"
                                        : "fill-gray-200 text-gray-200"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <p className="mb-4 font-nunito text-xs font-bold text-dark-blue">
                    “{review.quote}”
                </p>
            </div>

            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
                        {review.initial}
                    </div>
                    <span className="font-nunito text-[11px] font-bold text-dark-blue">
                        {review.author}
                    </span>
                </div>

                <div className="flex items-center gap-1 text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span className="font-nunito text-[10px] font-semibold">
                        Compra verificada
                    </span>
                </div>
            </div>
        </div>
    );
}

function AmazonReviews({ reviews, page, onPrev, onNext, onSelect }: AmazonReviewsProps) {
    const pageSize = 2;
    const pageCount = Math.ceil(reviews.length / pageSize);
    const visibleReviews = reviews.slice(page * pageSize, page * pageSize + pageSize);

    return (
        <div className="w-full lg:w-[300px] xl:w-[320px] lg:shrink-0 mx-auto lg:mx-0">
            <div className="rounded-[10px] bg-card-bg p-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <div className="mb-4 flex items-start gap-2">
                    <MessageSquareQuote className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                        <p className="font-nunito text-sm font-extrabold text-dark-blue">
                            Avaliações de leitores na Amazon
                        </p>
                        <p className="mt-1 font-nunito text-xs font-semibold text-foreground/70">
                            Confira experiências reais de quem já leu e transformou
                            sua vida financeira.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {visibleReviews.map((review) => (
                        <ReviewCard key={review.author} review={review} />
                    ))}
                </div>

                <div className="mt-4 flex items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={onPrev}
                        aria-label="Página anterior de avaliações"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm transition-colors hover:bg-gray-50"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: pageCount }).map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => onSelect(index)}
                                aria-label={`Ir para página ${index + 1} de avaliações`}
                                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                                    index === page ? "bg-primary" : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={onNext}
                        aria-label="Próxima página de avaliações"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm transition-colors hover:bg-gray-50"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                <a
                    href={amazonLink}
                    target="_blank"
                    rel="noreferrer"
                    className="-mx-6 mt-4 flex items-center justify-center gap-2 bg-gray-200 px-4 py-4
                    font-nunito text-[12px] font-bold text-[#071F6B] transition-colors hover:bg-gray-200"
                >
                    <Image
                        src="/book/amazon-logo.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 shrink-0"
                    />
                    Ver todas as avaliações na Amazon
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
            </div>
        </div>
    );
}

export function Book() {
    const [page, setPage] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const pageCount = Math.ceil(reviews.length / 2);
    const goTo = (index: number) => setPage((index + pageCount) % pageCount);

    return (
        <div className="flex flex-col items-center p-[2%] w-full max-w-[1440px] mx-auto">
            <div className="flex flex-col w-full p-4 md:p-8 lg:p-10">
                <h1 className="font-nunito text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    LIVRO
                </h1>

                <div className="mt-4 flex flex-col gap-6 md:mt-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                    <div className="flex flex-col items-center gap-4 shrink-0 mx-auto lg:mx-0">
                        <Image
                            src="/book/book-home.png"
                            alt="Livro Planejamento Financeiro: Você no Controle, da autora Simone Costa."
                            width={411}
                            height={643}
                            className="w-[220px] md:w-[280px] lg:w-[290px] xl:w-[340px] h-auto object-contain"
                        />

                        <a
                            href={amazonLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 rounded-[10px] bg-white px-4 py-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.15)]"
                        >
                            <Image
                                src="/book/amazon-logo.svg"
                                alt="Amazon"
                                width={40}
                                height={40}
                                className="h-9 w-9 shrink-0"
                            />
                            <span className="font-nunito text-sm font-semibold text-dark-blue">
                                Disponível na Amazon
                                <span className="block text-xs font-normal text-foreground/70">
                                    Compra segura e entrega rápida.
                                </span>
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col flex-1 min-w-0 lg:max-w-[520px] xl:max-w-[600px]">
                        <h2 className="text-dark-blue font-nunito text-2xl md:text-[32px] xl:text-[38px] font-extrabold mb-2.5 leading-tight">
                            Planejamento Financeiro:{" "}
                            <span className="text-primary">Você no Controle!</span>
                        </h2>

                        <p className="text-foreground font-nunito text-sm md:text-base font-semibold my-4">
                            Já parou para refletir se você tem trabalhado para o dinheiro ou
                            se é ele que trabalha para você? Melhor: o dinheiro tem
                            contribuído para que você alcance aquilo que tanto almeja?
                        </p>

                        <div className={showMore ? "block" : "hidden md:block"}>
                            <p className="text-foreground font-nunito text-sm md:text-base font-semibold mb-4">
                                Simone Costa, por meio de textos objetivos, exemplos e
                                exercícios práticos, convida você a ser protagonista da sua
                                vida financeira, assumindo o controle do seu dinheiro para
                                transformar objetivos em conquistas.
                            </p>

                            <p className="text-primary font-nunito text-sm md:text-base font-bold mb-4">
                                Não perca tempo, ingresse na jornada do planejamento
                                financeiro e assuma o controle do seu dinheiro - e da sua
                                vida.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowMore((v) => !v)}
                            className="mb-2 self-start font-nunito text-sm font-bold text-primary underline md:hidden"
                        >
                            {showMore ? "Ver menos" : "Ver mais"}
                        </button>

                        <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={feature.title} className="flex flex-col items-start gap-2">
                                        <div
                                            className="flex h-11 w-11 items-center justify-center rounded-full"
                                            style={{ backgroundColor: feature.bg }}
                                        >
                                            <Icon size={20} style={{ color: feature.color }} />
                                        </div>
                                        <p
                                            className="font-nunito text-sm font-extrabold leading-tight"
                                            style={{ color: feature.color }}
                                        >
                                            {feature.title}
                                        </p>
                                        <p className="font-nunito text-xs font-semibold leading-tight text-foreground/70">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row flex-wrap xl:flex-nowrap">
                            <a
                                href={amazonLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[10px] bg-[#7C4DFF] px-5 py-4 font-nunito text-sm xl:text-base font-extrabold text-white shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200"
                            >
                                <MdOutlineShoppingCart size={20} />
                                Comprar agora na Amazon
                                <ChevronRight className="h-4 w-4" />
                            </a>

                            <Link
                                href="/o-livro"
                                className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[10px] border border-primary px-5 py-4 font-nunito text-sm xl:text-base font-extrabold text-primary hover:bg-primary/5 hover:shadow-lg transition-all duration-200"
                            >
                                Conheça mais sobre o livro
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div> 

                    <AmazonReviews
                        reviews={reviews}
                        page={page}
                        onPrev={() => goTo(page - 1)}
                        onNext={() => goTo(page + 1)}
                        onSelect={goTo}
                    />
                </div>
            </div>

            <div className="w-full flex items-center gap-4 rounded-[10px] bg-card-bg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-4 md:p-8 mt-4 md:mt-6">
                <MdOutlinePeopleAlt size={24} className="shrink-0 text-dark-blue" />
                <p className="font-nunito text-sm font-bold text-dark-blue md:text-base">
                    Assuma o controle do seu dinheiro e transforme{" "}
                    <span className="text-primary">objetivos em conquistas!</span>
                </p>
            </div>
        </div>
    );
}
