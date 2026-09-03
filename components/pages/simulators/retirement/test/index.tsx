"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, Info, Mail, RefreshCcw, ArrowRightLeft, ShieldCheck, Loader2 } from 'lucide-react';
import { enviarEmail } from '@/src/lib/email';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import entry2 from '../../../../../media/entry-2.png';
import person from '../../../../../media/person.svg';
import targetIcon from '../../../../../media/target.svg';
import savings from '../../../../../media/savings.svg';
import stocks from '../../../../../media/stocks.svg';
import calculator from '../../../../../media/calculator.svg';
import menu from '../../../../../media/menu.svg';
import idea from '../../../../../media/idea.svg';
import stack from '../../../../../media/stack.svg';
import wallet from '../../../../../media/wallet.svg';
import targetProgress from '../../../../../media/target-progress.svg';
import check from '../../../../../media/check.svg';
import warning from '../../../../../media/warning.svg';
import safe from '../../../../../media/safe.svg'
import stocksBlue from '../../../../../media/stocks-blue.svg';

const IconSafe = ({ className = "w-4 h-4" }: { className?: string }) => (
  <Image src={safe} alt="Segurança" className={className} />
);

// --- Funções de Formatação e Matemática ---
function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function formatCurrencyInput(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const amount = parseFloat(digits) / 100;
  return amount.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function parseCurrencyInputValue(formattedValue: string): number {
  if (!formattedValue) return 0;
  const digits = formattedValue.replace(/\D/g, "");
  return digits ? parseFloat(digits) / 100 : 0;
}

function monthlyRate(annualPct: number) {
  return Math.pow(1 + annualPct / 100, 1 / 12) - 1;
}

function calcPMT(fv: number, pv: number, r: number, n: number): number {
  if (r === 0) return (fv - pv) / n;
  const factor = Math.pow(1 + r, n);
  return ((fv - pv * factor) * r) / (factor - 1);
}

function calcFV(pv: number, pmt: number, r: number, n: number): number {
  if (r === 0) return pv + pmt * n;
  return pv * Math.pow(1 + r, n) + (pmt * (Math.pow(1 + r, n) - 1)) / r;
}

const POUPANCA_RATE_AA = 6.5;

// --- Componentes de Ícones ---
const IconPerson = ({ className = "w-10 h-10" }: { className?: string }) => <Image src={person} alt="Pessoa" className={className} />;
const IconTarget = ({ className = "w-10 h-10" }: { className?: string }) => <Image src={targetIcon} alt="Alvo" className={className} />;
const IconSavings = ({ className = "w-10 h-10" }: { className?: string }) => <Image src={savings} alt="Cofrinho" className={className} />;
const IconStocks = ({ className = "w-10 h-10" }: { className?: string }) => <Image src={stocks} alt="Gráfico" className={className} />;
const IconCalculator = ({ className = "w-4 h-4" }: { className?: string }) => <Image src={calculator} alt="" className={className} />;
const IconMenu = ({ className = "w-4 h-4" }: { className?: string }) => <Image src={menu} alt="" className={className} />;
const IconIdea = ({ className = "w-4 h-4" }: { className?: string }) => <Image src={idea} alt="" className={className} />;

export default function Simulator() {
  const [form, setForm] = useState({
    currentAge: '',
    retirementAge: '',
    desiredIncome: '',
    yearsReceiving: '',
    currentReserve: '',
    monthlyInvestment: '',
    rentabilityType: 'poupanca' as 'poupanca' | 'outro',
    customRate: '',
  });

  const [showResults, setShowResults] = useState(false);

  const updateField = (key: keyof typeof form, value: string) => {
    setForm(p => ({ ...p, [key]: value }));
    setShowResults(false);
  };

  const handleCurrencyChange = (key: keyof typeof form, rawValue: string) => {
    const formatted = formatCurrencyInput(rawValue);
    updateField(key, formatted);
  };

  // Estados de E-mail
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);

  const notifyError = (message?: string) => toast.error(message || "Algo deu errado. Tente novamente.", {
    position: "bottom-right", autoClose: 3000, hideProgressBar: true,
    closeOnClick: false, pauseOnHover: false, draggable: false, theme: "light", transition: Zoom,
  });

  const currentAge = parseInt(form.currentAge) || 0;
  const retirementAge = parseInt(form.retirementAge) || 0;
  const yearsReceiving = parseInt(form.yearsReceiving) || 0;

  const monthsAccumulating = Math.max((retirementAge - currentAge) * 12, 0);
  const monthsReceiving = Math.max(yearsReceiving * 12, 0);

  const desiredIncome = parseCurrencyInputValue(form.desiredIncome);
  const currentReserve = parseCurrencyInputValue(form.currentReserve);
  const monthlyInvestment = parseCurrencyInputValue(form.monthlyInvestment);
  
  const annualReturn = form.rentabilityType === "poupanca" ? POUPANCA_RATE_AA : parseFloat(form.customRate.replace(",", ".")) || 0;
  const r = monthlyRate(annualReturn);


  let targetReserve = 0;
  if (r > 0 && monthsReceiving > 0) {
    targetReserve = desiredIncome * ((1 - Math.pow(1 + r, -monthsReceiving)) / r);
  } else if (r === 0 && monthsReceiving > 0) {
    targetReserve = desiredIncome * monthsReceiving;
  }

  const requiredPMT = r > 0 ? calcPMT(targetReserve, currentReserve, r, monthsAccumulating) : 0;
  
  const estimatedReserve = calcFV(currentReserve, monthlyInvestment, r, monthsAccumulating);

  let estimatedIncome = 0;
  if (r > 0 && monthsReceiving > 0 && estimatedReserve > 0) {
    estimatedIncome = estimatedReserve * (r / (1 - Math.pow(1 + r, -monthsReceiving)));
  } else if (r === 0 && monthsReceiving > 0) {
    estimatedIncome = estimatedReserve / monthsReceiving;
  }

  // Diferenciação de Cenários (Alcançado, Próximo, Distante)
  const ratio = targetReserve > 0 ? estimatedReserve / targetReserve : 0;
  const deficit = Math.max(targetReserve - estimatedReserve, 0);

  const isOnTrack = ratio >= 1;
  const isClose = ratio >= 0.75 && ratio < 1; // 75% a 99% da meta
  const isFar = ratio < 0.75; // Abaixo de 75% da meta

  // Idade em que atinge o objetivo
  let ageGoalReached: number | null = null;
  if (targetReserve > 0 && r > 0) {
    for (let m = 1; m <= monthsAccumulating; m++) {
      if (calcFV(currentReserve, monthlyInvestment, r, m) >= targetReserve) {
        ageGoalReached = currentAge + Math.floor(m / 12);
        break;
      }
    }
  }

  // Comparativos
  const rPoupanca = monthlyRate(POUPANCA_RATE_AA);
  const patrimonioPoupanca = calcFV(currentReserve, monthlyInvestment, rPoupanca, monthsAccumulating);
  
  const compareRateAA = form.rentabilityType === 'poupanca' ? 10 : annualReturn;
  const rCompare = monthlyRate(compareRateAA);
  const patrimonioCompare = calcFV(currentReserve, monthlyInvestment, rCompare, monthsAccumulating);
  const diferencaCenarios = Math.abs(patrimonioCompare - patrimonioPoupanca);

  const canCalculate = currentAge > 0 && retirementAge > currentAge && desiredIncome > 0 && yearsReceiving > 0;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (canCalculate) setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    window.scrollTo({ top: document.getElementById("simulador")?.offsetTop, behavior: 'smooth' });
  };

 const handleSendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !email.includes("@")) {
    notifyError("Por favor, informe um e-mail válido.");
    return;
  }

  setIsSending(true);

  enviarEmail({
    tipo: "simuladorAposentadoria",
    subject: "Sua simulação de aposentadoria",
    userEmail: email, 
    dados: {
      userEmail: email,
      idadeAtual: currentAge,
      idadeAposentadoria: retirementAge,
      rendaDesejada: formatBRL(desiredIncome),
      patrimonioEstimado: formatBRL(estimatedReserve),
      rendaEstimada: formatBRL(estimatedIncome),
      taxaConsiderada: form.rentabilityType === "poupanca" ? `Poupança (${POUPANCA_RATE_AA}% a.a.)` : `${annualReturn}% a.a.`,
    },
    extraParams: { to_email: email }, 
    mensagens: {
      success: "Sua simulação foi enviada por e-mail!",
      error: "Algo deu errado. Tente novamente.",
    },
    onSuccess: () => {
      setIsSending(false);
      setEmail("");
      setShowEmailInput(false);
    },
    onError: () => setIsSending(false),
  });
};

  // Pontos do Gráfico
  const chartData = [];
  if (monthsAccumulating > 0) {
    const intervalYears = Math.max(Math.floor((retirementAge - currentAge) / 10), 1);
    
    for (let age = currentAge; age <= retirementAge; age += intervalYears) {
      const m = (age - currentAge) * 12;
      chartData.push({
        label: `${age} anos`,
        "Seu patrimônio": Math.round(calcFV(currentReserve, monthlyInvestment, r, m)),
        "Patrimônio necessário": Math.round(calcFV(currentReserve, Math.max(requiredPMT, 0), r, m)),
      });
    }
    if (chartData[chartData.length - 1].label !== `${retirementAge} anos`) {
      chartData.push({
        label: `${retirementAge} anos`,
        "Seu patrimônio": Math.round(calcFV(currentReserve, monthlyInvestment, r, monthsAccumulating)),
        "Patrimônio necessário": Math.round(calcFV(currentReserve, Math.max(requiredPMT, 0), r, monthsAccumulating)),
      });
    }
  }

  return (
    <div id='#simulador' className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      <section id="simulador" className="max-w-4xl mx-auto text-center px-4 sm:px-6 pt-6 pb-6 lg:mt-8">
        <div className="inline-flex items-center gap-2 text-[#7343E0] text-sm sm:text-base font-extrabold tracking-wide uppercase mb-2">
          <IconMenu />
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">SIMULADOR DE RESERVA PARA APOSENTADORIA</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight sm:leading-10 text-foreground">
          Descubra quanto você precisa investir para construir uma <span className="text-primary">aposentadoria mais tranquila.</span>
        </h2>
      </section>

      <section className="max-w-[1378px] mx-auto px-2 sm:px-6 lg:px-[30px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <form onSubmit={handleCalculate} className="lg:col-span-8 bg-white p-5 sm:px-5 sm:py-4 rounded-2xl sm:rounded-3xl shadow-sm border border-[#D9D9D9]/60 space-y-4 h-full">
            {/* Step 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <IconPerson className="w-10 h-10 sm:w-11 sm:h-11" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">1. Seus dados</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-foreground mb-1">Idade atual</label>
                  <div className="relative">
                    <input type="number" value={form.currentAge} onChange={e => updateField('currentAge', e.target.value)} placeholder="Ex.: 25" className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-primary text-base font-semibold" />
                    <span className="absolute right-3 top-3 text-sm font-semibold text-[#918FA5] pointer-events-none">anos</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-foreground mb-1">Com quantos anos deseja se aposentar?</label>
                  <div className="relative">
                    <input type="number" value={form.retirementAge} onChange={e => updateField('retirementAge', e.target.value)} placeholder="Ex.: 60" className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-primary text-base font-semibold" />
                    <span className="absolute right-3 top-3 text-sm font-semibold text-[#918FA5] pointer-events-none">anos</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-[#D9D9D9]/60" />

            {/* Step 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <IconTarget className="w-10 h-10 sm:w-11 sm:h-11" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">2. Seu objetivo</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-foreground mb-1">Qual renda mensal deseja receber?</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-sm font-semibold text-[#918FA5] pointer-events-none">R$</span>
                    <input type="text" value={form.desiredIncome} onChange={e => handleCurrencyChange('desiredIncome', e.target.value)} placeholder="Ex.: 10.000,00" className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-primary text-base font-semibold" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-foreground mb-1">Por quantos anos pretende receber essa renda?</label>
                  <div className="relative flex items-center">
                    <input type="number" value={form.yearsReceiving} onChange={e => updateField('yearsReceiving', e.target.value)} placeholder="Ex.: 30" className="w-full pl-3.5 pr-14 py-2.5 rounded-xl border border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-primary text-base font-semibold" />
                    <span className="absolute right-3 text-sm font-semibold text-[#918FA5] pointer-events-none">anos</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-[#D9D9D9]/60" />

            {/* Step 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <IconSavings className="w-10 h-10 sm:w-11 sm:h-11" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">3. Sua reserva para aposentadoria</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-foreground mb-1">Quanto você já possui acumulado?</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-sm font-semibold text-[#918FA5] pointer-events-none">R$</span>
                    <input type="text" value={form.currentReserve} onChange={e => handleCurrencyChange('currentReserve', e.target.value)} placeholder="Ex.: 10.000,00" className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-primary text-base font-semibold" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-foreground mb-1">Quanto você consegue investir por mês?</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-sm font-semibold text-[#918FA5] pointer-events-none">R$</span>
                    <input type="text" value={form.monthlyInvestment} onChange={e => handleCurrencyChange('monthlyInvestment', e.target.value)} placeholder="Ex.: 1.000,00" className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-primary text-base font-semibold" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-[#D9D9D9]/60" />

            {/* Step 4 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <IconStocks className="w-10 h-10 sm:w-11 sm:h-11" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">4. Rentabilidade considerada</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base font-semibold text-foreground">
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${form.rentabilityType === 'poupanca' ? 'border-primary' : 'border-[#D2D2D2]'}`}>
                      {form.rentabilityType === 'poupanca' && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </span>
                    <input type="radio" value="poupanca" checked={form.rentabilityType === 'poupanca'} onChange={() => updateField('rentabilityType', 'poupanca')} className="sr-only" />
                    Utilizar rendimento médio da poupança
                  </label>
                  <div className="bg-[#F2F0FD] border border-[#E2DDFF] p-3 rounded-xl text-center">
                    <span className="block text-[#7343E0] font-bold text-base">{POUPANCA_RATE_AA}% a.a.</span>
                    <span className="text-[13px] font-normal text-black">Rendimento da poupança (média)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base font-semibold text-foreground">
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${form.rentabilityType === 'outro' ? 'border-primary' : 'border-[#D2D2D2]'}`}>
                      {form.rentabilityType === 'outro' && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </span>
                    <input type="radio" value="outro" checked={form.rentabilityType === 'outro'} onChange={() => updateField('rentabilityType', 'outro')} className="sr-only" />
                    Informar outra rentabilidade
                  </label>
                  <div className="relative flex items-center">
                    <input type="text" inputMode="decimal" value={form.customRate} onChange={e => updateField('customRate', e.target.value.replace(/[^0-9,.]/g, ""))} disabled={form.rentabilityType !== 'outro'} placeholder="Ex.: 10" className="w-full pr-8 pl-3.5 py-2.5 rounded-xl border border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-primary text-base font-semibold disabled:bg-slate-50 disabled:text-slate-400" />
                    <span className="absolute right-3 text-sm font-semibold text-[#918FA5] pointer-events-none">%</span>
                  </div>
                </div>
            </div>
                            <p className="flex items-start gap-1.5 text-xs sm:text-sm font-normal text-[#737373]">
                <IconSafe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                A rentabilidade utilizada é apenas uma estimativa para fins de simulação e não apresenta garantia de retorno.
              </p>
              </div>
            <button type="submit" disabled={!canCalculate} className={`w-full font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base ${canCalculate ? "bg-primary hover:bg-[#7343E0] text-white shadow-violet-200" : "bg-[#F2F0FD] text-gray-400 cursor-not-allowed"}`}>
              <IconCalculator className="w-5 h-5" />
              Calcular minha reserva de aposentadoria
            </button>
          </form>

          {/* Banner Sidebar */}
          <div className="lg:col-span-4 w-full bg-[#F5F4FB] rounded-2xl sm:rounded-3xl pt-6 lg:pt-8 border border-[#E2DDFF] flex flex-row-reverse items-center lg:flex-col h-full overflow-hidden">
            <div className="space-y-2 sm:space-y-5 px-3 md:px-6 lg:px-8 mb-6 lg:flex-shrink-0">
              <IconIdea className="w-12 h-12" />
              <h3 className="sm:text-2xl font-bold leading-tight text-foreground">Seu futuro começa com uma <span className="text-primary">decisão hoje.</span></h3>
              <p className="text-base font-semibold text-foreground leading-snug">Planejar a aposentadoria é transformar objetivos de longo prazo em escolhas conscientes no presente.</p>
            </div>
            <div className="w-full mt-auto flex flex-col justify-end">
              <Image src={entry2} alt="Casal sorrindo" className="w-full h-auto block rounded-b-2xl min-w-[135px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Animação */}
      <AnimatePresence>
        {showResults && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pb-20"
          >
            <div className="text-center mb-8">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
                <Image src={stocks} alt={""} className="" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00194E] mb-2">Resultado da sua simulação</h3>
              <p className="text-sm text-slate-600 font-medium">Veja como suas escolhas de hoje podem impactar sua aposentadoria.</p>
            </div>

            {/* Card Principal */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2DDFF] mb-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                
                <div className="lg:w-[45%] text-center lg:text-left">
                  {/* Ícones Mapeados (3 Casos) */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4`}>
                    
                    {isOnTrack && <Image src={check} alt="no caminho certo" className="" />}
                    
                    {isClose && (
                        <Image src={targetProgress} alt="próximo do objetivo" className="" />
                    )}
                    
                    {isFar && <Image src={warning} alt="não alcança" className="" />}
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-bold text-[#00194E] mb-3 leading-tight">
                    {isOnTrack && <> <span className="text-[#7C4DFF]">Você está no caminho certo!</span></>}
                    {isClose && <>Você está <span className="text-[#7C4DFF]">próximo</span> do seu objetivo</>}
                    {isFar && <>Sua projeção ainda <span className="text-[#F03D3D]">não alcança</span> o objetivo informado.</>}
                  </h4>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {isOnTrack 
                      ? <>Com os valores informados, sua projeção indica que você conseguirá gerar aproximadamente <span className="text-[#7C4DFF] font-bold">{formatBRL(estimatedIncome)} por mês</span> na aposentadoria durante {yearsReceiving} anos.</>
                      : <>Sua projeção está próxima da renda desejada. Pequenos ajustes no valor investido, no prazo ou na rentabilidade considerada podem aproximar você do objetivo.</>}
                      {isFar && <>Com os valores informados, o patrimônio estimado não será suficiente para gerar a renda mensal desejada.</>}
                  </p>
                </div>

                <div className="lg:w-[55%] flex flex-col sm:flex-row w-full bg-white border border-[#E2DDFF] rounded-2xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[#E2DDFF]">
                  <div className="flex-1 p-6 flex flex-col items-center text-center">
                    <Image src={savings} alt="" className="w-14 h-14 mb-3" />
                    <span className="text-xs font-bold text-[#00194E] mb-1">Patrimônio estimado na aposentadoria</span>
                    <span className="text-xl font-extrabold text-[#7C4DFF]">{formatBRL(estimatedReserve)}</span>
                  </div>
                  <div className="flex-1 p-6 flex flex-col items-center text-center">
                    <Image src={wallet} alt="" className="w-14 h-14 mb-3" />
                    <span className="text-xs font-bold text-[#00194E] mb-1">Renda mensal estimada na aposentadoria</span>
                    <span className="text-xl font-extrabold text-[#7C4DFF]">{formatBRL(estimatedIncome)}</span>
                  </div>
                  <div className="flex-1 p-6 flex flex-col items-center text-center">
                    <Image src={targetIcon} alt="" className="w-14 h-14 mb-3" />
                    <span className="text-xs font-bold text-[#00194E] mb-1">Sua meta de renda mensal na aposentadoria</span>
                    <span className="text-xl font-extrabold text-[#7C4DFF]">{formatBRL(desiredIncome)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gráfico Scrollável */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2DDFF] mb-6 relative">
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-[#00194E]">Projeção do patrimônio ao longo do tempo</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-0.5 bg-[#7C4DFF]"></span>
                      <span className="text-[13px] font-semibold text-slate-600">Patrimônio que você terá (com investimento mensal informado)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-0.5 border-b-2 border-dashed border-[#01AEAA]"></span>
                      <span className="text-[13px] font-semibold text-slate-600">Patrimônio necessário para gerar a renda desejada</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 max-w-xs">
                  <div className="bg-[#F2F0FD] p-2 rounded-full flex-shrink-0"><Info className="w-4 h-4 text-[#7C4DFF]" /></div>
                  <p className="text-[12px] text-slate-500 font-medium leading-snug">O gráfico mostra a evolução do patrimônio que você terá em comparação com o necessário para gerar a renda que deseja na aposentadoria.</p>
                </div>
              </div>

              <div className="relative">
                
                <div className="w-full overflow-x-auto pb-4 custom-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                  <div className="min-w-[700px] h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="patrimonioGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7C4DFF" stopOpacity={0.15} />
                            <stop offset="100%" stopColor="#7C4DFF" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                        <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#64748b", fontWeight: 600 }} tickLine={false} axisLine={false} />
                        <YAxis tickFormatter={v => `${formatBRL(v)}`} tick={{ fontSize: 10, fill: "#000416", fontWeight: 600 }} tickLine={false} axisLine={false} width={70} />
                        <Tooltip formatter={(value, name) => [formatBRL(Number(value)), name]} contentStyle={{ borderRadius: "12px", border: "1px solid #E2DDFF", fontSize: "12px", fontWeight: "bold", fontFamily: "inherit" }} />
                        <Area type="monotone" dataKey="Seu patrimônio" stroke="#7C4DFF" strokeWidth={3} fill="url(#patrimonioGrad)" activeDot={{ r: 6, fill: "#7C4DFF", stroke: "#fff", strokeWidth: 2 }} />
                        <Area type="monotone" dataKey="Patrimônio necessário" stroke="#01AEAA" strokeWidth={2} strokeDasharray="5 5" fill="none" activeDot={{ r: 6, fill: "#01AEAA", stroke: "#fff", strokeWidth: 2 }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {isOnTrack && ageGoalReached ? (
                  <div className="hidden sm:block absolute bottom-12 right-6 bg-white border border-[#E2DDFF] shadow-lg rounded-xl py-2 px-5 text-center pointer-events-none">
                    <span className="block text-xs font-medium text-slate-500">Você atinge seu</span>
                    <span className="block text-xs font-medium text-slate-500">objetivo aos <span className="font-bold text-[#7C4DFF]">{ageGoalReached} anos</span></span>
                  </div>
                ) : (!isOnTrack && (
                  <div className="hidden sm:block absolute bottom-12 right-6 bg-white border border-[#E2DDFF] shadow-lg rounded-xl py-2 px-5 text-center pointer-events-none">
                    <span className="block text-[11px] font-semibold text-slate-500 mb-0.5">Déficit estimado:</span>
                    <span className="block text-sm font-extrabold text-[#D93B3B]">{formatBRL(deficit)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparativo de Cenários */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2DDFF] mb-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
                <div className="lg:w-[25%]">
                  <h4 className="text-lg font-bold text-[#00194E]">Comparativo de cenários</h4>
                  <p className="text-sm text-slate-600 font-medium mt-1">Mesmo investimento mensal de <span className="font-bold text-[#7C4DFF]">{formatBRL(monthlyInvestment)}</span></p>
                </div>
                
                <div className="lg:w-[75%] grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#F9F8FF] rounded-2xl p-5 flex items-start gap-4">
                    <Image src={savings} alt="" className="w-12 h-12 flex-shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-[#00194E]">Cenário 1</span>
                      <span className="block text-[11px] text-slate-500 mb-1">Rentabilidade média da poupança (6,5% a.a.)</span>
                      <span className="block text-lg font-extrabold text-[#7C4DFF]">{formatBRL(patrimonioPoupanca)}</span>
                    </div>
                  </div>

                  <div className="bg-[#F4F9FF] rounded-2xl p-5 flex items-start gap-4">
                    <Image src={stocksBlue} alt="" className="w-12 h-12 flex-shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-[#00194E]">Cenário 2</span>
                      <span className="block text-[11px] text-slate-500 mb-1">Rentabilidade informada ({compareRateAA}% a.a.)</span>
                      <span className="block text-lg font-extrabold text-[#3B82F6]">{formatBRL(patrimonioCompare)}</span>
                    </div>
                  </div>

                  <div className="bg-[#F0FDF8] rounded-2xl p-5 flex items-start gap-4">
                    <div className="bg-[#CCFBF1] p-3 rounded-full flex-shrink-0"><ArrowRightLeft className="w-5 h-5 text-[#01AEAA]" /></div>
                    <div>
                      <span className="block text-xs font-bold text-[#00194E]">Diferença acumulada</span>
                      <span className="block text-lg font-extrabold text-[#01AEAA]">+ {formatBRL(diferencaCenarios)}</span>
                      <span className="block text-[10px] text-slate-500 leading-tight mt-1">Diferença no patrimônio estimado entre os cenários</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações e Disclaimer */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              
              {!showEmailInput ? (
                <button 
                  onClick={() => setShowEmailInput(true)} 
                  className="w-full sm:w-auto bg-[#7C4DFF] hover:bg-[#6b3deb] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-violet-200 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Mail className="w-5 h-5" />
                  Enviar resultado para meu e-mail
                </button>
              ) : (
                <form onSubmit={handleSendEmail} className="flex w-full sm:w-auto gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full sm:w-56 px-4 py-3.5 rounded-xl border border-[#E2DDFF] focus:outline-none focus:ring-2 focus:ring-[#7C4DFF] text-sm text-[#00194E] placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-[#7C4DFF] hover:bg-[#6b3deb] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-violet-200 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Mail className="w-5 h-5" />}
                    {isSending ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              )}

              <button onClick={handleReset} className="w-full sm:w-auto bg-white border-2 border-[#E2DDFF] hover:bg-slate-50 text-[#7C4DFF] font-bold py-3.5 px-8 rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                <RefreshCcw className="w-5 h-5" />
                Fazer uma nova simulação
              </button>
            </div>

            <div className="flex items-start gap-3 max-w-3xl mx-auto">
              <ShieldCheck className="w-5 h-5 text-[#7C4DFF] flex-shrink-0" />
              <p className="text-xs text-slate-500 font-medium text-left leading-relaxed">
                Esta simulação apresenta estimativas baseadas nas informações informadas e na rentabilidade considerada, não constituindo recomendação de investimento nem garantia de resultados futuros.
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <ToastContainer/>
    </div>
  );
}