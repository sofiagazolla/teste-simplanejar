"use client";

import Image from "next/image";
import type { Question } from "./types";

interface QuestionFieldProps {
    question: Question;
    value: number | string | Record<string, number> | undefined;
    onChange: (value: number | string | Record<string, number>) => void;
}

function NumberBadge({ number }: { number: number }) {
    return (
        <span className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white sm:size-[46px] sm:text-xl">
            {number}
        </span>
    );
}

function RadioIndicator({ selected }: { selected: boolean }) {
    return (
        <span className="flex size-[25px] shrink-0 items-center justify-center rounded-full border-2 border-primary">
            {selected && <span className="size-3 rounded-full bg-primary" />}
        </span>
    );
}

function OptionsField({
    columns,
    align = "left",
    options,
    value,
    onSelect,
}: {
    columns: number;
    align?: "left" | "center";
    options: string[];
    value: number | undefined;
    onSelect: (index: number) => void;
}) {
    // Para grids com muitas colunas (ex: 5 opções), no mobile usamos grid de 1 coluna
    // e restauramos as colunas do design apenas em telas maiores (lg: >= 800px).
    return (
        <div
            className={`grid gap-3 grid-cols-1 ${
                columns > 2 ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2"
            }`}
        >
            {options.map((option, index) => {
                const selected = value === index;
                return (
                    <button
                        key={option}
                        type="button"
                        onClick={() => onSelect(index)}
                        aria-pressed={selected}
                        className={`flex min-h-[60px] sm:min-h-[74px] cursor-pointer items-center gap-3 rounded-[10px] border-2 p-3 sm:p-4 text-left transition-colors ${
                            align === "center"
                                ? "flex-row sm:flex-col justify-start sm:justify-center text-left sm:text-center"
                                : ""
                        } ${
                            selected
                                ? "border-primary bg-[#F2F0FD]"
                                : "border-[#E9E7F5] bg-[#FDFDFD] hover:border-primary/50"
                        }`}
                    >
                        <RadioIndicator selected={selected} />
                        <span className="text-[14px] sm:text-[16px] font-semibold text-foreground leading-tight">
                            {option}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

export function QuestionField({ question, value, onChange }: QuestionFieldProps) {
    return (
        <div className="border-t border-[#E9E7F5] pt-6 first:border-t-0 first:pt-0">
            <div className="mb-4 flex items-start gap-3 sm:gap-4">
                <NumberBadge number={question.number} />
                <div>
                    <p className="text-[18px] sm:text-[20px] font-extrabold text-foreground leading-snug">
                        {question.title}
                    </p>
                    {question.helper && <p className="mt-1 text-[14px] sm:text-[16px] italic">{question.helper}</p>}
                </div>
            </div>

            {question.type === "options" && (
                <OptionsField
                    columns={question.columns}
                    align={question.align}
                    options={question.options}
                    value={typeof value === "number" ? value : undefined}
                    onSelect={(index) => onChange(index)}
                />
            )}

            {question.type === "text" && (
                <div className="relative rounded-[10px] border-2 border-[#EEECF7] bg-card-bg">
                    <textarea
                        value={typeof value === "string" ? value : ""}
                        onChange={(event) => onChange(event.target.value.slice(0, question.maxLength))}
                        maxLength={question.maxLength}
                        placeholder="Escreva sua resposta aqui..."
                        rows={4}
                        className="w-full resize-none rounded-[10px] bg-transparent p-4 pb-8 text-[15px] sm:text-[16px] text-foreground placeholder:text-[#AFAFAF] focus:outline-none"
                    />
                    <span className="absolute bottom-2 right-4 text-[13px] sm:text-[14px] text-foreground">
                        {(typeof value === "string" ? value.length : 0)}/{question.maxLength} caracteres
                    </span>
                </div>
            )}

            {question.type === "matrix" && (
                <div className="flex flex-col gap-3">
                    {question.rows.map((row) => {
                        const rowAnswers = (value && typeof value === "object" ? value : {}) as Record<string, number>;
                        const selectedIndex = rowAnswers[row.id];

                        return (
                            <div
                                key={row.id}
                                className="flex flex-col gap-4 rounded-[10px] border-2 border-[#E9E7F5] bg-[#FDFDFD] p-4 lg:flex-row lg:items-center"
                            >
                                <div className="flex items-center gap-3 lg:w-[220px] lg:shrink-0">
                                    <Image src={row.icon} alt="" width={44} height={44} />
                                    <div>
                                        <p className="text-[15px] sm:text-[16px] font-bold text-foreground">{row.label}</p>
                                        <p className="text-[15px] sm:text-[16px] font-bold text-foreground">{row.sublabel}</p>
                                    </div>
                                </div>

                                <div className="grid flex-1 grid-cols-5 gap-1 sm:gap-2 border-t border-[#E9E7F5] pt-3 lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
                                    {question.scaleLabels.map((label, index) => {
                                        const selected = selectedIndex === index;
                                        return (
                                            <button
                                                key={label}
                                                type="button"
                                                onClick={() =>
                                                    onChange({ ...rowAnswers, [row.id]: index })
                                                }
                                                aria-pressed={selected}
                                                className="flex cursor-pointer flex-col items-center gap-1.5"
                                            >
                                                <RadioIndicator selected={selected} />
                                                <span className="text-center text-[10px] sm:text-[12px] leading-tight text-foreground">
                                                    {label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}