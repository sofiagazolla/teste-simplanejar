import type { Step } from "./types";

export const bookTitle = "Planejamento Financeiro: Você no Controle!";

export const intro = {
    eyebrow: "Conte-me sua ",
    titleHighlight: "experiência com o livro",
    greeting: "Olá!",
    paragraphs: [
        "Obrigada por responder esta pesquisa.",
        `O objetivo é compreender como os conceitos e exercícios práticos apresentados no livro "${bookTitle}" contribuíram para a organização de sua vida financeira.`,
        "Desejo que você assuma o controle da sua vida financeira e seja protagonista de sua própria história.",
    ],
    signature: "Simone Costa",
    startButton: "Iniciar pesquisa",
    privacyNote: "Suas respostas são confidenciais e utilizadas apenas para fins de análise.",
};

export const cardHeader = {
    title: "Conte-me sua experiência com o livro",
    helper: "Suas respostas são muito importantes para compreendermos como o livro contribuiu para a organização da sua vida financeira.",
};

export const tipBox = {
    title: "Não existe resposta certa ou errada.",
    text: "O mais importante é a sua opinião sincera.",
};

export const feedbackTipBox = {
    title: "Sua opinião faz a diferença!",
    text: "Suas respostas ajudam outras pessoas a tomarem decisões e nos ajudam a levar ainda mais conteúdo de qualidade para você.",
};

export const navButtons = {
    back: "Voltar",
    next: "Continuar",
};

export const success = {
    titlePrefix: "O formulário foi enviado com ",
    titleHighlight: "sucesso",
    text: "Agradecemos seu feedback, ele é muito importante para nós.",
    button: "Voltar a página inicial",
};

const scaleLabels = ["Nada", "Pouco", "Mais ou menos", "Muito", "Totalmente"];

export const steps: Step[] = [
    {
        questions: [
            {
                id: "concluiuLeitura",
                type: "options",
                number: 1,
                title: (
                    <>
                        Você concluiu a leitura do livro <span className="text-primary">“{bookTitle}”</span>?
                    </>
                ),
                plainTitle: `Você concluiu a leitura do livro "${bookTitle}"?`,
                columns: 2,
                options: ["Sim", "Não"],
            },
            {
                id: "organizacaoAntes",
                type: "options",
                number: 2,
                title: "Como era a sua organização financeira antes da leitura do livro?",
                columns: 2,
                options: ["Muito desorganizada", "Desorganizada", "Mais ou menos organizada", "Organizada"],
            },
        ],
    },
    {
        questions: [
            {
                id: "organizacaoAtual",
                type: "options",
                number: 3,
                title: "Como está a sua organização financeira atualmente?",
                columns: 1,
                options: ["Muito desorganizada", "Desorganizada", "Mais ou menos organizada", "Organizada"],
            },
        ],
    },
    {
        questions: [
            {
                id: "contribuicaoEtapas",
                type: "matrix",
                number: 4,
                title: "Em que medida os conceitos e ferramentas do livro contribuíram para o seu entendimento e organização financeira em cada etapa?",
                helper: "Selecione uma opção para cada etapa.",
                scaleLabels,
                rows: [
                    { id: "autoconhecimento", icon: "/book/questionnaire/icon-etapa-1.svg", label: "Etapa I", sublabel: "Autoconhecimento" },
                    { id: "fluxoFinanceiro", icon: "/book/questionnaire/icon-etapa-2.svg", label: "Etapa II", sublabel: "Fluxo Financeiro" },
                    { id: "reservasFinanceiras", icon: "/book/questionnaire/icon-etapa-3.svg", label: "Etapa III", sublabel: "Reservas Financeiras" },
                    { id: "planejamentoFinanceiro", icon: "/book/questionnaire/icon-etapa-4.svg", label: "Etapa IV", sublabel: "Planejamento Financeiro" },
                    { id: "protagonismoFinanceiro", icon: "/book/questionnaire/icon-etapa-5.svg", label: "Etapa V", sublabel: "Protagonismo Financeiro" },
                ],
            },
        ],
    },
    {
        questions: [
            {
                id: "aplicouExercicios",
                type: "options",
                number: 5,
                title: "Você aplicou os exercícios práticos sugeridos no livro?",
                columns: 2,
                options: ["Sim", "Não"],
            },
            {
                id: "exerciciosAjudaram",
                type: "options",
                number: 6,
                title: "Em que medida os exercícios práticos ajudaram você a organizar sua vida financeira?",
                columns: 5,
                align: "center",
                options: scaleLabels,
            },
        ],
    },
    {
        questions: [
            {
                id: "recomendaria",
                type: "options",
                number: 7,
                title: "Você recomendaria este livro para outras pessoas?",
                columns: 4,
                options: ["Sim, com certeza", "Talvez", "Não", "Não sei"],
            },
            {
                id: "atendeuExpectativas",
                type: "options",
                number: 8,
                title: "O livro atendeu às suas expectativas?",
                columns: 3,
                align: "center",
                options: [
                    "Superou minhas expectativas",
                    "Atendeu completamente",
                    "Atendeu parcialmente",
                    "Não atendeu minhas expectativas",
                    "Ficou muito abaixo das minhas expectativas",
                ],
            },
        ],
    },
    {
        questions: [
            {
                id: "principalInsight",
                type: "text",
                number: 9,
                title: "Qual foi o principal insight ou aprendizado que você levou do livro?",
                helper: "Descreva com suas palavras.",
                maxLength: 500,
            },
            {
                id: "mudouFormaDePensar",
                type: "options",
                number: 10,
                title: "O livro mudou sua forma de pensar ou agir em relação ao dinheiro?",
                columns: 5,
                align: "center",
                options: ["Mudou completamente", "Mudou bastante", "Mudou parcialmente", "Mudou um pouco", "Não mudou"],
            },
        ],
    },
    {
        questions: [
            {
                id: "topicoAprofundar",
                type: "text",
                number: 11,
                title: "Há algum tópico ou conteúdo que você gostaria que fosse mais aprofundado no livro?",
                helper: "Descreva sua sugestão.",
                maxLength: 500,
            },
            {
                id: "comentario",
                type: "text",
                number: 12,
                title: "Deixe aqui um comentário ou mensagem sobre o livro.",
                helper: "Fique à vontade!",
                maxLength: 500,
            },
        ],
    },
];
