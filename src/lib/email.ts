// src/lib/email.ts
import type { SubmissionEntry } from "@/components/pages/book/questionnaire/types"; // ajusta o caminho conforme sua estrutura
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast, Zoom } from "react-toastify";

const emailSimPlanejar = process.env.NEXT_PUBLIC_DESTINATION_EMAIL;

const toastOptions = {
  position: "bottom-right" as const,
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  theme: "light" as const,
  transition: Zoom,
};

// 1. Um builder por formulário 
const builders = {
  contato: (dados: FormData) => `
    <h2>Novo contato</h2>
    <p><strong>Nome:</strong> ${dados.get("name")}</p>
    <p><strong>Email:</strong> ${dados.get("email")}</p>
    <p><strong>Mensagem:</strong> ${dados.get("message")}</p>
  `,
  feedbackLivro: (dados: { respostas: SubmissionEntry[] }) => `
  <h2>Feedback do livro</h2>
  ${dados.respostas
    .map((r) => `<p><strong>${r.question}:</strong> ${r.answer}</p>`)
    .join("")}
`,
  simuladorSonhos: (dados: {
    userName: string;
    userEmail: string;
    dreamLabel: string;
    monthlyNeeded: string;
    months: number;
    totalValue: string;
    existingValue: string;
    returnRate: string;
  }) => `
    <h2>Simulação de sonho - ${dados.dreamLabel}</h2>
    <p><strong>Nome:</strong> ${dados.userName}</p>
    <p><strong>Email:</strong> ${dados.userEmail}</p>
    <p><strong>Valor mensal necessário:</strong> ${dados.monthlyNeeded}</p>
    <p><strong>Prazo:</strong> ${dados.months} meses</p>
    <p><strong>Valor total:</strong> ${dados.totalValue}</p>
    <p><strong>Já possui:</strong> ${dados.existingValue}</p>
    <p><strong>Rentabilidade:</strong> ${dados.returnRate}</p>
  `,
  simuladorAposentadoria: (dados: {
  userEmail: string;
  idadeAtual: number;
  idadeAposentadoria: number;
  rendaDesejada: string;
  patrimonioEstimado: string;
  rendaEstimada: string;
  taxaConsiderada: string;
}) => `
  <h2>Simulação de aposentadoria</h2>
  <p><strong>Email:</strong> ${dados.userEmail}</p>
  <p><strong>Idade atual:</strong> ${dados.idadeAtual}</p>
  <p><strong>Idade de aposentadoria:</strong> ${dados.idadeAposentadoria}</p>
  <p><strong>Renda desejada:</strong> ${dados.rendaDesejada}</p>
  <p><strong>Patrimônio estimado:</strong> ${dados.patrimonioEstimado}</p>
  <p><strong>Renda estimada:</strong> ${dados.rendaEstimada}</p>
  <p><strong>Taxa considerada:</strong> ${dados.taxaConsiderada}</p>
`,
  suitabilidade: (dados: {
    profile: string;
    score: number;
    submittedAt: string;
    respostas: { question: string; answer: string }[];
  }) => `
    <h2>Novo teste de perfil de investidor</h2>
    <p><strong>Perfil:</strong> ${dados.profile}</p>
    <p><strong>Pontuação:</strong> ${dados.score}</p>
    <p><strong>Data:</strong> ${dados.submittedAt}</p>
    ${dados.respostas
      .map((r) => `<p><strong>${r.question}:</strong> ${r.answer}</p>`)
      .join("")}
  `,
} satisfies Record<string, (dados: never) => string>;

type FormType = keyof typeof builders;

interface EnviarEmailParams<T extends FormType> {
  tipo: T;
  subject: string;
  dados: Parameters<(typeof builders)[T]>[0];
  userEmail?: string; 
  extraParams?: Record<string, string>; 
  mensagens: { success: string; error: string };
  onSuccess?: () => void;
  onError?: (error: EmailJSResponseStatus) => void;
}


export function enviarEmail<T extends FormType>({
  tipo,
  subject,
  dados,
  userEmail,
  extraParams,
  mensagens,
  onSuccess,
  onError,
}: EnviarEmailParams<T>) {
  const builder = builders[tipo] as (dados: unknown) => string;
  const corpoHtml = builder(dados);

  return emailjs
    .send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      { corpo_html: 
          corpoHtml, 
          subject, 
          to_simplanejar_email: emailSimPlanejar, 
          to_user_email: userEmail ?? "",
          ...extraParams },
      { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY! }
    )
    .then(
      () => {
        toast.success(mensagens.success, toastOptions);
        onSuccess?.();
      },
      (error: EmailJSResponseStatus) => {
        console.error("FAILED...", error.text);
        toast.error(mensagens.error, toastOptions);
        onError?.(error);
      }
    );
}