"use client";

import Image from "next/image";
import { FaLightbulb, FaTriangleExclamation } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cardHeader, navButtons, tipBox } from "./data";
import { QuestionField } from "./QuestionField";
import type { Answers, Step } from "./types";

interface QuestionnaireCardProps {
    step: Step;
    stepNumber: number;
    totalSteps: number;
    answers: Answers;
    onAnswer: (questionId: string, value: Answers[string]) => void;
    onBack: () => void;
    onNext: () => void;
    isSubmitting?: boolean;
    submitError?: boolean;
}

export function QuestionnaireCard({
    step,
    stepNumber,
    totalSteps,
    answers,
    onAnswer,
    onBack,
    onNext,
    isSubmitting = false,
    submitError = false,
}: QuestionnaireCardProps) {
    const progressPercent = Math.round((stepNumber / totalSteps) * 100);

    return (
        <div className="mx-auto max-w-[1297px] rounded-[10px] bg-card-bg p-6 shadow-[-4px_-4px_4px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
                <div className="min-w-0 flex-1">
                    <div className="mb-6 flex items-center gap-4">
                        <Image src="/book/questionnaire/icon-chat-heart.svg" alt="" width={93} height={93} className="size-16 shrink-0 sm:size-[93px]" />
                        <div className="w-full">
                            <h1 className="text-[28px] font-extrabold leading-tight text-foreground sm:text-[40px]">
                                {cardHeader.title}
                            </h1>
                            <div className="mt-3 flex items-center gap-4">
                                <div className="h-[5px] flex-1 overflow-hidden rounded-[10px] bg-[#E5E1F5]">
                                    <div
                                        className="h-full rounded-[10px] bg-primary transition-all"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                                <span className="shrink-0 text-[16px] text-foreground">
                                    Passo <span className="font-bold">{stepNumber}</span> de {totalSteps}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="mb-6 border-b border-[#E9E7F5] pb-6 text-[16px] text-dark-blue">
                        {cardHeader.helper}
                    </p>

                    <div className="flex flex-col gap-6">
                        {step.questions.map((question) => (
                            <QuestionField
                                key={question.id}
                                question={question}
                                value={answers[question.id]}
                                onChange={(value) => onAnswer(question.id, value)}
                            />
                        ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3 rounded-[10px] bg-[#F2F0FD] p-4 lg:hidden">
                        <FaLightbulb className="size-8 shrink-0 text-primary" />
                        <div>
                            <p className="text-[16px] font-bold text-foreground">{tipBox.title}</p>
                            <p className="text-[16px] text-foreground">{tipBox.text}</p>
                        </div>
                    </div>
                </div>

                <aside className="hidden shrink-0 flex-col gap-6 lg:flex lg:w-[380px]">
                    <div className="relative mx-auto aspect-square w-full max-w-[320px]">
                        <Image src="/book/questionnaire/objeto.png" alt={`Capa do livro "${cardHeader.title}"`} fill className="object-contain" />
                    </div>
                    <div className="flex items-center gap-3 rounded-[10px] bg-[#F2F0FD] p-4">
                        <FaLightbulb className="size-8 shrink-0 text-primary" />
                        <div>
                            <p className="text-[16px] font-bold text-foreground">{tipBox.title}</p>
                            <p className="text-[16px] text-foreground">{tipBox.text}</p>
                        </div>
                    </div>
                </aside>
            </div>

            <div className="mt-10 border-t border-[#E9E7F5] pt-6">
                {submitError && (
                    <p className="mb-4 flex items-center justify-center gap-1.5 text-sm font-semibold text-amber-600">
                        <FaTriangleExclamation className="size-3.5 shrink-0" />
                        Algo deu errado ao enviar seu feedback. Tente novamente.
                    </p>
                )}

                <div className="flex items-center justify-between gap-4">
                    <button
                        type="button"
                        onClick={onBack}
                        disabled={isSubmitting}
                        className="flex h-[50px] w-[163px] items-center justify-center gap-2 rounded-[10px] border-2 border-primary text-[16px] font-semibold text-primary transition-colors hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                    >
                        <IoIosArrowBack className="size-4" />
                        {navButtons.back}
                    </button>

                    <button
                        type="button"
                        onClick={onNext}
                        disabled={isSubmitting}
                        className="flex h-[50px] w-[163px] items-center justify-center gap-2 rounded-[10px] bg-primary text-[16px] font-semibold text-white transition-colors hover:bg-[#A280FF] disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                    >
                        {isSubmitting ? "Enviando..." : navButtons.next}
                        {!isSubmitting && <IoIosArrowForward className="size-4" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
