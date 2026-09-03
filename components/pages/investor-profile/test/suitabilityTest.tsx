"use client"

import { useState } from "react";
import type { IconType } from "react-icons";
import { enviarEmail } from "@/src/lib/email";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaLightbulb,
  FaCircleExclamation,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRotateRight,
  FaCircleInfo,
  FaCircleCheck,
  FaGraduationCap,
  FaChartLine,
  FaArrowTrendUp,
  FaScaleBalanced,
  FaSeedling,
  FaInfinity,
  FaCalendarDays,
  FaHourglassHalf,
  FaRocket,
  FaClock,
  FaMagnifyingGlass,
  FaHeartCrack,
  FaPiggyBank,
  FaShieldHalved,
  FaBuildingColumns,
  FaHandHoldingDollar,
  FaHouse,
  FaLayerGroup,
  FaChartColumn,
  FaPercent,
  FaClockRotateLeft,
  FaEnvelope,
  FaTriangleExclamation,
  FaExclamation,
} from "react-icons/fa6";
import { TbDotsFilled } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/*  TEXTOS                                                                    */
/* -------------------------------------------------------------------------- */

const sidebar = {
  test: "TESTE DE PERFIL DE INVESTIDOR",
  title: "Descubra qual é o seu perfil de ",
  spanTitle: "investidor",
  subtitle:
    "Responda às perguntas a seguir com sinceridade para receber um resultado que combina com você.",
  card: {
    title: "Importante",
    body: "Este teste tem caráter educacional e não representa recomendação de investimentos.",
  },
};

type AnswerKey = "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7";

interface Question {
  title: string;
  answers: string[];
  icons: IconType[];
  // true = múltipla escolha (checkbox). Perguntas sem essa flag são de escolha única (radio).
  multiple?: boolean;
}

const questions: Record<AnswerKey, Question> = {
  q1: {
    title: "Como você avalia o seu conhecimento sobre investimentos?",
    answers: [
      "Possuo bom conhecimento sobre investimentos e normalmente tomo minhas decisões de forma independente.",
      "Possuo conhecimento moderado e gosto de complementar minhas decisões com informações ou apoio especializado.",
      "Possuo conhecimento básico sobre investimentos.",
      "Possuo pouco ou nenhum conhecimento sobre investimentos.",
    ],
    
    icons: [FaGraduationCap, FaGraduationCap, FaGraduationCap, FaGraduationCap],
  },
  q2: {
    title:
      "Qual das definições abaixo melhor reflete o seu objetivo financeiro com os investimentos?",
    answers: [
      "Busco aumento expressivo do patrimônio, inclusive aceitando perdas relevantes na busca por retornos superiores ao mercado.",
      "Busco crescimento do patrimônio e aceito oscilações em busca de retornos acima do mercado.",
      "Busco preservar o patrimônio, mas também obter ganhos superiores aos investimentos mais conservadores.",
      "Meu principal objetivo é preservar o patrimônio.",
    ],
    icons: [FaChartLine, FaArrowTrendUp, FaScaleBalanced, FaSeedling],
  },
  q3: {
    title:
      "Por quanto tempo você está disposto a manter seus investimentos para buscar melhores resultados?",
    answers: ["Mais de 1 ano.", "Entre 6 meses e 1 ano.", "Entre 3 e 6 meses.", "Até 3 meses."],
    icons: [FaInfinity, FaCalendarDays, FaHourglassHalf, FaRocket],
  },
  q4: {
    title:
      "Imagine o seguinte cenário: seus investimentos se valorizaram 20% em seis meses. No sétimo mês, houve uma queda de 15%. O que você faria?",
    answers: [
      "Aproveitaria o momento para aumentar os investimentos.",
      "Aguardaria mais um pouco e não tomaria nenhuma decisão imediata.",
      "Reduziria os investimentos mais arriscados e migraria para aplicações mais conservadoras.",
      "Resgataria todos os investimentos.",
    ],
    icons: [FaArrowTrendUp, FaClock, FaMagnifyingGlass, FaHeartCrack],
  },
  q5: {
    title: "Qual percentual de perda temporária você conseguiria suportar em momentos de oscilação do mercado?",
    answers: ["10% ou mais.", "Até 10%", "Até 5%.", "Até 1%."],
    icons: [FaRocket, FaChartLine, FaArrowTrendUp, FaPiggyBank],
  },
  // questões abaixo não entram na matriz de pontuação (ver SCORE_KEYS),
  q6: {
    title: "Existe previsão de utilização dos recursos investidos?",
    answers: [
      "Não existe previsão de utilização dos recursos no curto e médio prazo.",
      "Existe previsão de utilização em até 1 ano.",
      "Existe previsão de utilização em até 2 anos.",
      "Existe previsão de utilização em até 5 anos.",
    ],
    icons: [FaInfinity, FaCalendarDays, FaHourglassHalf, FaRocket],
  },
  q7: {
    title: "Quais produtos de investimentos você conhece?",
    multiple: true,
    answers: [
      "Poupança",
      "CDB e Fundos DI",
      "LCI e LCA",
      "Prefixados",
      "Indexados à inflação",
      "Fundos Imobiliários",
      "Fundos Multimercados",
      "Ações",
      "COE",
      "Antecipação de recebíveis",
    ],
    icons: [
      FaPiggyBank,
      FaBuildingColumns,
      FaHandHoldingDollar,
      FaShieldHalved,
      FaChartLine,
      FaHouse,
      FaLayerGroup,
      FaChartColumn,
      FaPercent,
      FaClockRotateLeft,
    ],
  },
};

const questionOrder: AnswerKey[] = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];

// só estas entram na matriz de pontuação / cálculo do perfil
const SCORE_KEYS: AnswerKey[] = ["q1", "q2", "q3", "q4", "q5"];

// Etapa 1 = q1 + q2 | Etapa 2 = q3 + q4 | Etapa 3 = q5 + q6 | Etapa 4 = q7
const stepQuestionKeys: AnswerKey[][] = [
  ["q1", "q2"],
  ["q3", "q4"],
  ["q5", "q6"],
  ["q7"],
];

const steps = ["Conhecimento e experiência", "Comportamento diante do risco", "Conhecimento"];
// título exibido por etapa 
const stepTitles = [steps[0], steps[1], steps[1], steps[2]];

const buttons = {
  back: "Voltar",
  next: "Próxima etapa",
  redo: "Refazer o teste",
};

const featuresTitle = "Características deste perfil"

const confidential = "Suas respostas são confidenciais.";

const result = {
  title: "Resultado do seu perfil",
  subtitle: "Teste de perfil de investidor",
};

const inCommonResult = {
  title: "Seu perfil é",
  meaning: "Isso significa que você:",
  behaviour: "Como é o perfil ",
};

const moderate = {
  moderate: "Moderado",
  description:
    "Você busca equilíbrio entre segurança e crescimento. Está disposto(a) a assumir riscos moderados para obter retornos acima da média a longo prazo.",
  meaning: [
    "Aceita algum nível de risco para alcançar melhores resultados.",
    "Busca diversidade para equilibrar segurança e rentabilidade.",
    "Está aberto(a) a variações de curto prazo, desde que faça sentido no longo prazo.",
    "Valoriza o crescimento do patrimônio sem abrir mão da estabilidade.",
  ],
  behaviour:
    "Investidores moderados estão dispostos a aceitar riscos controlados em busca de melhores oportunidades. O objetivo é equilibrar crescimento e segurança, diversificando os investimentos para aproveitar boas oportunidades sem comprometer a estabilidade financeira.",
  features: [
    { title: "Risco moderado", text: "Você aceita oscilações moderadas em busca de retornos superiores.", icon: FaChartLine },
    {
      title: "Equilíbrio entre segurança e crescimento",
      text: "Suas escolhas combinam ativos mais seguros com opções voltadas para o crescimento.",
      icon: FaScaleBalanced,
    },
    {
      title: "Visão de médio a longo prazo",
      text: "Você entende que os melhores resultados vêm com consistência ao longo do tempo.",
      icon: FaClock,
    },
    {
      title: "Diversificação é essencial",
      text: "Você busca diferentes tipos de investimentos para reduzir riscos e aumentar as chances de bons resultados.",
      icon: FaSeedling,
    },
  ],
};

const conservative = {
  conservative: "Conservador",
  description:
    "Você prioriza segurança, estabilidade e a preservação do seu patrimônio. Prefere retornos previsíveis e evita riscos desnecessários.",
  meaning: [
    "Valoriza a segurança e a previsibilidade nas suas decisões financeiras.",
    "Prefere investir em opções mais estáveis e com menor volatilidade.",
    "Está focado(a) em construir e proteger seu patrimônio no longo prazo.",
  ],
  behaviour:
    "Investidores com este perfil buscam mais tranquilidade e preferem aplicações de menor risco, mesmo que isso signifique retornos potencialmente menores. O foco principal é manter o patrimônio seguro e garantir estabilidade financeira.",
  features: [
    { title: "Baixa tolerância a riscos", text: "Você prefere evitar oscilações e perdas, mesmo que pequenas.", icon: FaChartLine },
    { title: "Foco na segurança", text: "Suas escolhas priorizam a proteção do patrimônio.", icon: FaShieldHalved },
    { title: "Visão de longo prazo", text: "Você valoriza a constância e a construção gradual dos resultados.", icon: FaClock },
    {
      title: "Preferência por previsibilidade",
      text: "Você se sente mais confortável com retornos estáveis e conhecidos.",
      icon: FaScaleBalanced,
    },
  ],
};

const arrojado = {
  arrojado: "Arrojado",
  description:
    "Você tem alta disposição para assumir riscos em busca de grandes oportunidades. Está confortável com oscilações e busca maximizar seus retornos no longo prazo.",
  meaning: [
    "Tem alta tolerância a riscos para buscar retornos superiores.",
    "Está disposto(a) a enfrentar variações significativas no curto prazo.",
    "Prioriza o crescimento acelerado do patrimônio, mesmo que isso envolva mais volatilidade.",
    "Busca explorar oportunidades mais arrojadas e inovadoras.",
    "Tem foco de longo prazo e confiança para manter seus investimentos.",
  ],
  behaviour:
    "Investidores arrojados buscam o máximo de crescimento possível e aceitam correr riscos elevados para alcançar resultados expressivos. O objetivo é aproveitar oportunidades de alto potencial, entendendo que oscilações fazem parte do caminho.",
  features: [
    { title: "Alta tolerância a riscos", text: "Você aceita grandes oscilações em busca de retornos potencialmente mais altos.", icon: FaChartLine },
    {
      title: "Foco em grandes oportunidades",
      text: "Você busca investimentos com alto potencial de crescimento, mesmo que mais voláteis.",
      icon: FaMagnifyingGlass,
    },
    {
      title: "Visão de longo prazo",
      text: "Você entende que grandes resultados exigem tempo e paciência para superar os desafios no caminho.",
      icon: FaClock,
    },
    {
      title: "Diversificação estratégica",
      text: "Você busca diversificar em diferentes ativos e setores para potencializar seus resultados.",
      icon: FaSeedling,
    },
    {
      title: "Mentalidade de crescimento",
      text: "Você está sempre em busca de aprender, evoluir e aproveitar novas tendências e mercados.",
      icon: FaArrowTrendUp,
    },
  ],
};

const agressive = {
  agressive: "Agressivo",
  description:
    "Você tem máxima disposição para assumir riscos em busca de retornos muito acima da média. Está confortável com alta volatilidade e busca aproveitar ao máximo as oportunidades do mercado no longo prazo.",
  meaning: [
    "Tem alta tolerância a riscos e não se incomoda com grandes oscilações.",
    "Busca retornos muito superiores à média do mercado.",
    "Está disposto(a) a assumir riscos significativos para alcançar seus objetivos financeiros.",
    "Prioriza o crescimento acelerado do patrimônio no longo prazo.",
    "Acredita que oportunidades excepcionais exigem coragem para agir.",
  ],
  behaviour:
    "Investidores agressivos têm foco total no crescimento máximo do patrimônio e aceitam grandes variações de curto prazo para alcançar resultados excepcionais. O objetivo é aproveitar ao máximo oportunidades de alto potencial, entendendo que riscos elevados fazem parte da estratégia.",
  features: [
    {
      title: "Máxima tolerância a riscos",
      text: "Você está confortável com grandes oscilações e perdas significativas em busca de retornos muito altos.",
      icon: FaChartLine,
    },
    {
      title: "Foco em alto potencial",
      text: "Você prioriza investimentos com altíssimo potencial de crescimento, mesmo que mais voláteis.",
      icon: FaMagnifyingGlass,
    },
    {
      title: "Visão de longo prazo",
      text: "Você entende que grandes resultados vêm no longo prazo e tem paciência para atravessar momentos de alta volatilidade.",
      icon: FaClock,
    },
    {
      title: "Diversificação ampla e estratégica",
      text: "Você busca diversificar em diferentes classes de ativos, mercados e setores para potencializar resultados.",
      icon: FaSeedling,
    },
    {
      title: "Mentalidade de performance",
      text: "Você está sempre em busca de performance superior e disposto(a) a explorar estratégias mais arrojadas e inovadoras.",
      icon: FaArrowTrendUp,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  MATRIZ DE PONTUAÇÃO / PERFIS                                              */
/* -------------------------------------------------------------------------- */

// pontos por índice de resposta: A(0)=120, B(1)=60, C(2)=30, D(3)=15
const POINTS_BY_INDEX = [120, 60, 30, 15];

type ProfileKey = "conservador" | "moderado" | "arrojado" | "agressivo";

interface ProfileData {
  key: ProfileKey;
  name: string;
  description: string;
  meaning: string[];
  behaviour: string;
  features: { title: string; text: string; icon: IconType }[];
  icon: IconType;
}

const profiles: Record<ProfileKey, ProfileData> = {
  conservador: {
    key: "conservador",
    name: conservative.conservative,
    description: conservative.description,
    meaning: conservative.meaning,
    behaviour: conservative.behaviour,
    features: conservative.features,
    icon: FaShieldHalved,
  },
  moderado: {
    key: "moderado",
    name: moderate.moderate,
    description: moderate.description,
    meaning: moderate.meaning,
    behaviour: moderate.behaviour,
    features: moderate.features,
    icon: FaScaleBalanced,
  },
  arrojado: {
    key: "arrojado",
    name: arrojado.arrojado,
    description: arrojado.description,
    meaning: arrojado.meaning,
    behaviour: arrojado.behaviour,
    features: arrojado.features,
    icon: FaRocket,
  },
  agressivo: {
    key: "agressivo",
    name: agressive.agressive,
    description: agressive.description,
    meaning: agressive.meaning,
    behaviour: agressive.behaviour,
    features: agressive.features,
    icon: FaRocket,
  },
};

function getProfileFromScore(score: number): ProfileKey {
  if (score <= 105) return "conservador";
  if (score <= 180) return "moderado";
  if (score <= 360) return "arrojado";
  return "agressivo";
}

/* -------------------------------------------------------------------------- */
/*  ENVIO DO RESULTADO POR E-MAIL (EmailJS)                                  */
/* -------------------------------------------------------------------------- */

type AnswerValue = number | number[];

interface ResultsPayload {
  submittedAt: string;
  profile: string;
  score: number;
  answers: { question: string; answer: string }[];
}

function buildResultsPayload(
  answers: Partial<Record<AnswerKey, AnswerValue>>,
  score: number,
  profileName: string
): ResultsPayload {
  return {
    submittedAt: new Date().toISOString(),
    profile: profileName,
    score,
    answers: questionOrder.map((key) => {
      const question = questions[key];
      const value = answers[key];
      let answerText = "—";
      if (Array.isArray(value)) {
        answerText = value.length ? value.map((i) => question.answers[i]).join("; ") : "Nenhuma opção selecionada";
      } else if (typeof value === "number") {
        answerText = question.answers[value];
      }
      return { question: question.title, answer: answerText };
    }),
  };
}

function sendResultsByEmail(
  payload: ResultsPayload,
  onSuccess: () => void,
  onError: () => void
) {
  enviarEmail({
    tipo: "suitabilidade",
    subject: "Novo teste de perfil de investidor",
    dados: {
      profile: payload.profile,
      score: payload.score,
      submittedAt: new Date(payload.submittedAt).toLocaleString("pt-BR"),
      respostas: payload.answers,
    },
    mensagens: {
      success: "Resultado salvo com sucesso!",
      error: "Não foi possível salvar o seu resultado.",
    },
    onSuccess,
    onError,
  });
}

/* -------------------------------------------------------------------------- */
/*  COMPONENTE                                                                */
/* -------------------------------------------------------------------------- */

const TOTAL_STEPS = stepQuestionKeys.length;
const TOTAL_QUESTIONS = questionOrder.length;

function isAnswered(value: AnswerValue | undefined): boolean {
  if (Array.isArray(value)) return value.length > 0;
  return typeof value === "number";
}

export default function SuitabilityTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<AnswerKey, AnswerValue>>>({});
  const [showResult, setShowResult] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const currentKeys = stepQuestionKeys[step];
  const answeredCount = questionOrder.filter((k) => isAnswered(answers[k])).length;
  const progressPercent = Math.round(((step + 1) / TOTAL_STEPS) * 100);
  const isStepComplete = currentKeys.every((k) => isAnswered(answers[k]));
  const isLastStep = step === TOTAL_STEPS - 1;

  function selectAnswer(key: AnswerKey, index: number) {
    setAnswers((prev) => {
      if (questions[key].multiple) {
        const current = (prev[key] as number[] | undefined) ?? [];
        const next = current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index];
        return { ...prev, [key]: next };
      }
      return { ...prev, [key]: index };
    });
  }

  function handleNext() {
    if (!isStepComplete) return;
    if (isLastStep) {
      setShowResult(true);
      setEmailStatus("sending");
      const payload = buildResultsPayload(answers, score, profile.name);
      sendResultsByEmail(
        payload,
        () => setEmailStatus("sent"),
        () => setEmailStatus("error")
      );
      return;
    }
    setStep((s) => s + 1);
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function handleRedo() {
    setAnswers({});
    setStep(0);
    setShowResult(false);
    setEmailStatus("idle");
  }

  const score = SCORE_KEYS.reduce((sum, key) => {
    const value = answers[key];
    const idx = typeof value === "number" ? value : undefined;
    return sum + (idx !== undefined ? POINTS_BY_INDEX[idx] : 0);
  }, 0);

  const profile = profiles[getProfileFromScore(score)];

  return (
    <section className="w-full bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[320px_1fr] lg:gap-8">
        <Sidebar complete={showResult} />

        {showResult ? (
          <ResultPanel profile={profile} onRedo={handleRedo} emailStatus={emailStatus} />
        ) : (
          <QuestionPanel
            step={step}
            totalSteps={TOTAL_STEPS}
            progressPercent={progressPercent}
            answeredCount={answeredCount}
            totalQuestions={TOTAL_QUESTIONS}
            keys={currentKeys}
            answers={answers}
            onSelect={selectAnswer}
            onBack={handleBack}
            onNext={handleNext}
            canGoBack={step > 0}
            canGoNext={isStepComplete}
          />
        )}
      </div>
      <ToastContainer />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SIDEBAR                                                                   */
/* -------------------------------------------------------------------------- */

function Sidebar({ complete }: { complete: boolean }) {
  return (
    <aside className="lg:sticky lg:top-8 lg:self-start">
      <span className="self-start bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent text-[20px] font-extrabold">{sidebar.test}</span>

      <div className="mt-4 flex size-16 items-center justify-center rounded-full bg-[#F2F0FD]">
        <FaLightbulb className="size-8 text-[#7C4DFF]" />
      </div>

      <h2 className="mt-4 text-[24px] font-extrabold leading-snug">
        {sidebar.title}
        <span className="text-[#7C4DFF]"> {sidebar.spanTitle}</span>
      </h2>

      <div className="mt-4 h-1 w-24 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full w-full rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] transition-all"
        />
      </div>

      <p className="mt-4 text-[16px]">{sidebar.subtitle}</p>

      <div className="mt-6 flex flex-col gap-3 rounded-xl bg-[#E2DDFF] p-4">
        <div className="mt-0.5 size-10 shrink-0 rounded-full bg-[#F2F0FD] flex items-center justify-center"> 
          <FaExclamation className="shrink-0 text-[#7C4DFF] size-6"/> 
        </div>
        <div>
          <p className="text-[16px] font-extrabold">{sidebar.card.title}</p>
          <p className="mt-1 text-[16px]">{sidebar.card.body}</p>
        </div>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAINEL DE PERGUNTAS                                                       */
/* -------------------------------------------------------------------------- */

interface QuestionPanelProps {
  step: number;
  totalSteps: number;
  progressPercent: number;
  answeredCount: number;
  totalQuestions: number;
  keys: AnswerKey[];
  answers: Partial<Record<AnswerKey, AnswerValue>>;
  onSelect: (key: AnswerKey, index: number) => void;
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
}

function QuestionPanel({
  step,
  totalSteps,
  progressPercent,
  answeredCount,
  totalQuestions,
  keys,
  answers,
  onSelect,
  onBack,
  onNext,
  canGoBack,
  canGoNext,
}: QuestionPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      {/* Cabeçalho / progresso */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-[18px] font-extrabold text-[#7C4DFF]">
            Etapa {step + 1} de {totalSteps}
          </span>
          <p className="text-[16px] font-extralight">{stepTitles[step]}</p>
        </div>
        <span className="text-[16px] font-extralight">
          {answeredCount} de {totalQuestions} perguntas
        </span>
      </div>

      <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-[#7C4DFF]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="mb-8 text-center text-[16px] font-extrabold text-[#7C4DFF] border-b border-slate-300 pb-4">{progressPercent}%</p>

      {/* Perguntas da etapa */}
      <div className="space-y-10">
        {keys.map((key, qIndexInStep) => {
          const question = questions[key];
          const questionNumber = questionOrder.indexOf(key) + 1;
          return (
            <div key={key}>
              <h3 className="mb-4 flex items-center gap-4 text-[16px] sm:text-[20px] font-extrabold sm:text-lg">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-[16px] font-bold text-white">
                  {questionNumber}
                </span>
                {question.title}
              </h3>

              <div
                className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${
                  question.answers.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-4"
                }`}
              >
                {question.answers.map((answerText, aIndex) => {
                  const Icon = question.icons[aIndex];
                  const currentValue = answers[key];
                  const selected = question.multiple
                    ? Array.isArray(currentValue) && currentValue.includes(aIndex)
                    : currentValue === aIndex;
                  return (
                    <button
                      key={aIndex}
                      type="button"
                      onClick={() => onSelect(key, aIndex)}
                      aria-pressed={selected}
                      className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all lg:flex-col lg:items-center lg:gap-3 lg:p-6 lg:text-center ${
                        selected
                          ? "border-violet-500 bg-violet-50 ring-1 ring-violet-500"
                          : "border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50/40"
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center border-2 lg:absolute lg:hidden ${
                          question.multiple ? "rounded-[4px]" : "rounded-full"
                        } ${
                          selected ? "border-violet-600 bg-violet-600" : "border-slate-300"
                        }`}
                      >
                        {selected && !question.multiple && <span className="h-2 w-2 rounded-full bg-white" />}
                        {selected && question.multiple && <FaCircleCheck className="h-3 w-3 text-white" />}
                      </span>

                      <span
                        className={`hidden h-11 w-11 shrink-0 items-center justify-center rounded-full lg:flex ${
                          selected ? "bg-violet-200" : "bg-violet-50"
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${selected ? "text-violet-700" : "text-violet-500"}`} />
                      </span>

                      <span className="text-sm leading-snug">{answerText}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Ações */}
      <div className="flex justify-center">
        <span className="flex items-center gap-1.5 text-sm text-slate-400 mt-5 sm:hidden">
            <FaLock className="h-3.5 w-3.5" />
            {confidential}
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-300 pt-6">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#7C4DFF] px-4 py-2.5 text-[14px] sm:text-[18px] font-semibold text-[#7C4DFF] transition-colors hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FaChevronLeft className="h-4 w-4 text-[#7C4DFF]" />
          {buttons.back}
        </button>

        <span className="hidden items-center gap-1.5 text-sm text-slate-400 sm:flex">
          <FaLock className="h-3.5 w-3.5" />
          {confidential}
        </span>

        <button
          type="button"
          onClick={onNext}
          disabled={!canGoNext}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#7C4DFF] px-5 py-2.5 text-[14px] sm:text-[18px] font-semibold text-white transition-colors hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {buttons.next}
          <FaChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAINEL DE RESULTADO                                                       */
/* -------------------------------------------------------------------------- */

function ResultPanel({
  profile,
  onRedo,
  emailStatus,
}: {
  profile: ProfileData;
  onRedo: () => void;
  emailStatus: "idle" | "sending" | "sent" | "error";
}) {
  const Icon = profile.icon;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <span className="text-[18px] font-extrabold text-[#7C4DFF]">{result.title}</span>
      <p className="mb-4 text-[16px] font-extralight">{result.subtitle}</p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 border-t border-slate-300 pt-6">
        {/* Coluna esquerda: perfil, descrição e "isso significa que você" */}
        <div className="text-center lg:text-left">
          <div className="flex flex-col items-center mb-5">
            <div
              className={`mx-auto flex size-24 items-center justify-center rounded-full lg:mx-0 bg-[#F2F0FD]`}
            >
              <Icon className={`size-12 text-[#7C4DFF]`} />
            </div>
            <p className="mt-4 text-[20px] font-semibold">{inCommonResult.title}</p>
            <h2 className={`text-[40px] font-extrabold text-[#7C4DFF] leading-10`}>{profile.name}</h2>
          </div>

          <div className="mt-4 rounded-xl bg-[#E2DDFF] p-4 text-[16px] text-center">
            {profile.description}
          </div>

          <p className={`mt-5 text-left text-[16px] font-semibold text-[#7C4DFF]`}>
            {inCommonResult.meaning}
          </p>
          <ul className="mt-3 space-y-2.5 text-left">
            {profile.meaning.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <FaRegCheckCircle className={`mt-0.5 h-4 w-4 shrink-0 text-[#7C4DFF]`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna direita: comportamento + características */}
        <div>
          <div className="rounded-xl border border-violet-100 bg-white p-4">
            <p className="flex items-center gap-2 text-[20px] font-extrabold text-violet-600">
              <FaCircleInfo className="size-6" />
              {inCommonResult.behaviour}
              {profile.name}?
            </p>
            <p className="mt-2 text-[16px] leading-relaxed">{profile.behaviour}</p>
          </div>

          <div className="mt-4 rounded-xl bg-[#E2DDFF] p-4">
            <p className="mb-4 text-[16px] font-extrabold text-[#7C4DFF]">{featuresTitle}</p>
            <div className="grid grid-cols-1 gap-4 ">
              {profile.features.map((feature, i) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={i} className="flex gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#7C4DFF]`}
                    >
                      <FeatureIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[16px] font-semibold ">{feature.title}</p>
                      <p className="mt-0.5 text-[16px] ">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-300 pt-6 sm:flex-row">
        <div className="flex flex-col gap-1 sm:gap-0.5">
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <FaLock className="h-3.5 w-3.5" />
            {confidential}
          </span>
          {emailStatus === "sending" && (
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <TbDotsFilled className="h-3.5 w-3.5" />
              Salvando seus resultados...
            </span>
          )}
          {emailStatus === "sent" && (
            <span className="flex items-center gap-1.5 text-xs text-emerald-600">
              <FaCircleCheck className="h-3.5 w-3.5" />
              Resultado salvo.
            </span>
          )}
          {emailStatus === "error" && (
            <span className="flex items-center gap-1.5 text-xs text-amber-600">
              <FaTriangleExclamation className="h-3.5 w-3.5" />
              Não foi possível salvar o seu resultado.
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onRedo}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-violet-600 px-5 py-2.5 text-[18px] font-semibold text-white transition-colors hover:bg-violet-700 sm:w-auto"
        >
          <FaArrowRotateRight className="h-4 w-4" />
          {buttons.redo}
        </button>
      </div>
    </div>
  );
}