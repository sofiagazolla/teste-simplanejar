import type { ReactNode } from "react";

interface BaseQuestion {
    id: string;
    number: number;
    title: ReactNode;
    /** Plain-text version of `title`, used when `title` is JSX. Falls back to `title` when it's already a string. */
    plainTitle?: string;
    helper?: string;
}

export interface OptionsQuestion extends BaseQuestion {
    type: "options";
    options: string[];
    columns: number;
    align?: "left" | "center";
}

export interface MatrixRow {
    id: string;
    icon: string;
    label: string;
    sublabel: string;
}

export interface MatrixQuestion extends BaseQuestion {
    type: "matrix";
    scaleLabels: string[];
    rows: MatrixRow[];
}

export interface TextQuestion extends BaseQuestion {
    type: "text";
    maxLength: number;
    placeholder?: string;
}

export type Question = OptionsQuestion | MatrixQuestion | TextQuestion;

export interface Step {
    questions: Question[];
}

export type AnswerValue = number | string | Record<string, number>;

export type Answers = Partial<Record<string, AnswerValue>>;

export interface SubmissionEntry {
    question: string;
    answer: string;
}
