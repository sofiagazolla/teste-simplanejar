import type { Answers, Question, Step, SubmissionEntry } from "./types";

function getQuestionText(question: Question): string {
    return question.plainTitle ?? (typeof question.title === "string" ? question.title : "");
}

export function buildSubmission(steps: Step[], answers: Answers): SubmissionEntry[] {
    const entries: SubmissionEntry[] = [];

    for (const step of steps) {
        for (const question of step.questions) {
            const value = answers[question.id];

            if (question.type === "matrix") {
                const rowAnswers = (value && typeof value === "object" ? value : {}) as Record<string, number>;
                for (const row of question.rows) {
                    const index = rowAnswers[row.id];
                    entries.push({
                        question: `${getQuestionText(question)} — ${row.label} (${row.sublabel})`,
                        answer: index !== undefined ? question.scaleLabels[index] : "",
                    });
                }
                continue;
            }

            if (question.type === "options") {
                const index = typeof value === "number" ? value : undefined;
                entries.push({
                    question: getQuestionText(question),
                    answer: index !== undefined ? question.options[index] : "",
                });
                continue;
            }

            entries.push({
                question: getQuestionText(question),
                answer: typeof value === "string" ? value : "",
            });
        }
    }

    return entries;
}
