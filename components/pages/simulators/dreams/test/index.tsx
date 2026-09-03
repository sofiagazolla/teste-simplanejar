"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, TrendingUp, PiggyBank, User, Calendar, Smile, Target, Mail, HelpCircle, Loader2 } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { enviarEmail } from "@/src/lib/email";

function formatBRL(value: number) {
	return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatCurrencyInput(value: string) {
    const digits = value.replace(/\D/g, "");
	if (!digits) return "";
	return (parseFloat(digits) / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function parseCurrencyInputValue(formattedValue: string): number {
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

const POUPANCA_RATE_AA = 6.50;

const DREAM_TYPES = ["Casa própria", "Carro", "Viagem", "Intercâmbio", "Negócio próprio", "Educação", "Reforma", "Outro"];

const DREAM_LABEL: Record<string, string> = {
	"Casa própria": "sua casa própria",
	Carro: "seu carro",
	Viagem: "seu intercâmbio",
	Intercâmbio: "seu intercâmbio",
	"Negócio próprio": "seu negócio próprio",
	Educação: "sua educação",
	Reforma: "sua reforma",
	Outro: "seu sonho",
};

export default function SonhosSimulator() {
	const [form, setForm] = useState({
		name: "",
		dreamType: "",
		dreamName: "",
		value: "",
		period: "",
		periodUnit: "" as "" | "Meses" | "Anos",
		existing: "",
		returnType: "poupanca" as "poupanca" | "custom",
		customReturn: "",
	});
	const [showUnitDropdown, setShowUnitDropdown] = useState(false);
	const [showTypeDropdown, setShowTypeDropdown] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const resultsRef = useRef<HTMLDivElement>(null);

	const [email, setEmail] = useState("");
	const [isSending, setIsSending] = useState(false);

	const notifyError = (message?: string) =>
		toast.error(message || "Algo deu errado. Tente novamente.", {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: false,
			theme: "light",
			transition: Zoom,
		});

	const f = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => {
		setForm(p => ({ ...p, [k]: v }));
		setShowResults(false);
	};

	const handleCurrencyChange = (key: "value" | "existing", rawValue: string) => {
		f(key, formatCurrencyInput(rawValue));
	};

	const totalValue = parseCurrencyInputValue(form.value);
	const existing = parseCurrencyInputValue(form.existing);
	const annualReturn = form.returnType === "poupanca" ? POUPANCA_RATE_AA : parseFloat(form.customReturn.replace(",", ".")) || 0;
	const r = monthlyRate(annualReturn);
	const periodNum = parseInt(form.period) || 0;
	const unit = form.periodUnit || "Anos";
	const months = periodNum * (unit === "Anos" ? 12 : 1);
	const monthlyNeeded = months > 0 ? Math.max(calcPMT(totalValue, existing, r, months), 0) : 0;
	const tickInterval = months <= 24 ? 6 : months <= 72 ? 12 : 24;

	const chartPoints: number[] = [];
	for (let m = 0; m <= months; m += tickInterval) chartPoints.push(m);
	if (chartPoints[chartPoints.length - 1] !== months) chartPoints.push(months);

	const chartData = chartPoints.map(m => ({
		label: m === 0 ? "Início" : `${m} meses`,
		"Valor acumulado": Math.round(calcFV(existing, monthlyNeeded, r, m)),
		"Valor necessário": totalValue,
	}));

	const dreamLabel = form.dreamName || DREAM_LABEL[form.dreamType] || "seu sonho";
	const canCalculate = totalValue > 0 && months > 0;
	const inputContainerStyle = "bg-[#20357A] border border-[#455790] rounded-xl text-white";

	const handleSendEmail = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
        notifyError("Por favor, informe um e-mail válido.");
        return;
    }

    setIsSending(true);

    enviarEmail({
        tipo: "simuladorSonhos",
        subject: "Sua simulação de sonho",
		userEmail: email, 
        dados: {
            userName: form.name || "Futuro Realizador",
            userEmail: email,
            dreamLabel,
            monthlyNeeded: formatBRL(monthlyNeeded),
            months,
            totalValue: formatBRL(totalValue),
            existingValue: formatBRL(existing),
            returnRate: form.returnType === "poupanca" ? `Poupança (${POUPANCA_RATE_AA}% a.a.)` : `${annualReturn}% a.a.`,
        },
        extraParams: { to_email: email }, 
        mensagens: {
            success: "Sua simulação foi enviada por e-mail!",
            error: "Algo deu errado. Tente novamente.",
        },
        onSuccess: () => {
            setIsSending(false);
            setEmail("");
        },
        onError: () => setIsSending(false),
    });
};

	useEffect(() => {
		if (showResults && resultsRef.current) {
			resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, [showResults]);

	return (
		<div>
			{/* hero */}
			<div className="relative overflow-hidden bg-white">
				<div className="mx-auto flex max-w-[1360px] flex-col items-center justify-between gap-8 px-6 py-8 md:flex-row md:py-12">
					<div className="min-w-0 flex-1">
						<h2 className="gradient-text whitespace-nowrap text-[16px] font-bold md:text-[18px] xl:text-[24px]">SIMULADOR DE</h2>

						<h1 className="mt-1 text-[28px] font-extrabold text-[#071F6B] sm:text-[40px] lg:mt-0 xl:text-[50px]">
							<span className="text-[#7C4DFF]">Sonhos</span> e projetos
						</h1>

						<p className="text-[16px] font-bold text-[#071F6B] md:text-[20px] lg:text-[24px]">Planeje hoje e transforme seus<br />sonhos em conquistas reais.</p>
					</div>

					<div className="hidden max-h-[439px] max-w-[831px] flex-1 items-center justify-end md:flex">
						<img src="/dreams-simulator/test.svg" alt="Mesa decorada para planejamento de viagens com caderno aberto escrito 'Planos geram conquistas', passaporte brasileiro, avião em miniatura, mapa, globo e câmera fotográfica" className="h-auto max-h-[439px] w-full" />
					</div>
				</div>
			</div>

			{/* form */}
			<div className="bg-white px-4 py-8">
				<div className="mx-auto max-w-[1360px] rounded-3xl bg-[#071F6B] p-6  md:p-10">
					<div className="mb-8 flex items-center gap-3">
						<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-base font-bold text-white">1</div>
						<div>
							<h2 className="gradient-background bg-clip-text text-xl font-bold text-transparent md:text-2xl">Preencha os dados do seu sonho ou projeto</h2>
							<p className="text-base text-white">Informe suas metas para que possamos calcular o plano ideal para você.</p>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
						{/* coluna esquerda */}
						<div className="space-y-6">
							<div>
								<label className="mb-2 block text-[18px] font-semibold text-white">1. Qual é o seu nome?</label>
								<div className={`flex items-center px-4 py-3.5 ${inputContainerStyle}`}>
									<User className="mr-3 h-5 w-5 shrink-0 text-gray-400" />
									<input type="text" placeholder="Digite seu nome" value={form.name} onChange={e => f("name", e.target.value)} className="w-full bg-transparent text-[16px] text-white placeholder-gray-400 focus:outline-none" />
								</div>
							</div>

							<div>
								<label className="mb-2 block text-[18px] font-semibold text-white">3. Quanto você precisa para realizar o seu sonho ou projeto?</label>
								<div className={`flex items-center ${inputContainerStyle} overflow-hidden`}>
									<span className="border-r border-[#455790] bg-white/5 px-4 py-3.5 text-[16px] font-bold text-white">R$</span>
									<input type="text" inputMode="numeric" placeholder="0,00" value={form.value} onChange={e => handleCurrencyChange("value", e.target.value)} className="w-full bg-transparent px-4 py-3.5 text-[16px] text-white placeholder-gray-400 focus:outline-none" />
								</div>
							</div>

							<div>
								<label className="mb-2 block text-[18px] font-semibold text-white">4. Em quanto tempo você quer realizar seu sonho ou projeto?</label>
								<div className="flex flex-col gap-3 sm:flex-row">
									<div className={`flex flex-1 items-center px-4 py-3.5 ${inputContainerStyle}`}>
										<Calendar className="mr-3 h-5 w-5 shrink-0 text-gray-400" />
										<input type="number" placeholder="Digite o período" value={form.period} onChange={e => f("period", e.target.value)} className="w-full bg-transparent text-[16px] text-white placeholder-gray-400 focus:outline-none" />
									</div>

									<div className="relative sm:w-40">
										<button type="button" onClick={() => setShowUnitDropdown(v => !v)} className={`flex w-full items-center justify-between px-4 py-3.5 text-[16px] ${inputContainerStyle}`}>
											<span className={form.periodUnit ? "text-white" : "text-gray-400"}>{form.periodUnit || "Selecione"}</span>
											<ChevronDown className="h-5 w-5 text-gray-400" />
										</button>

										{showUnitDropdown && (
											<div className="absolute right-0 top-full z-20 mt-1 w-full overflow-hidden rounded-xl border border-[#455790] bg-[#20357A] shadow-2xl">
												{(["Meses", "Anos"] as const).map(u => (
													<button key={u} onClick={() => { f("periodUnit", u); setShowUnitDropdown(false); }} className="w-full px-4 py-3 text-left text-[16px] text-white transition-colors hover:bg-white/10">{u}</button>
												))}
											</div>
										)}
									</div>
								</div>
							</div>

							<div>
								<label className="mb-2 block text-[18px] font-semibold text-white">5. Quanto você já possui para esse objetivo?</label>
								<div className={`flex items-center ${inputContainerStyle} overflow-hidden`}>
									<span className="border-r border-[#455790] bg-white/5 px-4 py-3.5 text-[16px] font-bold text-white">R$</span>
									<input type="text" inputMode="numeric" placeholder="0,00" value={form.existing} onChange={e => handleCurrencyChange("existing", e.target.value)} className="w-full bg-transparent px-4 py-3.5 text-[16px] text-white placeholder-gray-400 focus:outline-none" />
								</div>
							</div>
						</div>

						{/* coluna direita */}
						<div className="space-y-6">
							<div>
								<label className="mb-2 block text-[18px] font-semibold text-white">2. Selecione o seu sonho ou projeto</label>
								<div className="relative">
									<button type="button" onClick={() => setShowTypeDropdown(v => !v)} className={`flex w-full items-center justify-between px-4 py-3.5 text-[16px] ${inputContainerStyle}`}>
										<span className={form.dreamType ? "text-white" : "text-gray-400"}>{form.dreamType || "Selecione uma opção"}</span>
										<ChevronDown className="h-5 w-5 text-gray-400" />
									</button>

									{showTypeDropdown && (
										<div className="absolute z-20 mt-1 w-full overflow-hidden rounded-xl border border-[#455790] bg-[#20357A] shadow-2xl">
											{DREAM_TYPES.map(t => (
												<button key={t} onClick={() => { f("dreamType", t); setShowTypeDropdown(false); }} className="w-full px-4 py-3 text-left text-[16px] text-white transition-colors hover:bg-white/10">{t}</button>
											))}
										</div>
									)}
								</div>

								<div className="mt-3 rounded-2xl border border-[#455790] bg-[#20357A] p-4 text-white">
									<label className="mb-2 block text-[16px] font-medium text-white">Identifique o seu sonho ou projeto</label>
									<input type="text" placeholder="Digite aqui o seu sonho ou projeto" value={form.dreamName} onChange={e => f("dreamName", e.target.value)} className={`w-full px-4 py-3 ${inputContainerStyle} text-[16px] placeholder-gray-400 focus:outline-none`} />
								</div>
							</div>

							<div>
								<label className="mb-2 block text-[18px] font-semibold text-white">6. Rentabilidade esperada (ao ano)</label>
								<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
									<button type="button" onClick={() => f("returnType", "poupanca")} className={`relative rounded-2xl border p-4 text-left transition-all ${form.returnType === "poupanca" ? "border-[#7C4DFF] bg-[#20357A] shadow-lg shadow-[#7C4DFF]/10" : "border-[#455790] bg-[#20357A]/60"}`}>
										<div className="mb-3 flex items-center gap-2">
											<div className={`flex h-5 w-5 items-center justify-center rounded-full border ${form.returnType === "poupanca" ? "border-[#7C4DFF]" : "border-gray-500"}`}>{form.returnType === "poupanca" && <div className="h-2.5 w-2.5 rounded-full bg-[#7C4DFF]" />}</div>
											<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"><PiggyBank className="h-5 w-5 text-[#2ED8E8]" /></div>
										</div>
										<div className="mb-1 text-[16px] font-bold text-white">Rentabilidade da poupança</div>
										<p className="mb-3 text-[16px] leading-snug text-white">Usar rentabilidade média da poupança na simulação.</p>
										<div className="text-[16px] font-bold text-[#2ED8E8]">{POUPANCA_RATE_AA}% a.a.*</div>
									</button>

									<button type="button" onClick={() => f("returnType", "custom")} className={`relative rounded-2xl border p-4 text-left transition-all ${form.returnType === "custom" ? "border-[#2ED8E8] bg-[#20357A] shadow-lg shadow-[#2ED8E8]/10" : "border-[#455790] bg-[#20357A]/60"}`}>
										<div className="mb-3 flex items-center gap-2">
											<div className={`flex h-5 w-5 items-center justify-center rounded-full border ${form.returnType === "custom" ? "border-[#2ED8E8]" : "border-gray-500"}`}>{form.returnType === "custom" && <div className="h-2.5 w-2.5 rounded-full bg-[#2ED8E8]" />}</div>
											<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"><TrendingUp className="h-5 w-5 text-[#2ED8E8]" /></div>
										</div>
										<div className="mb-1 text-[16px] font-bold text-white">Informar outra rentabilidade</div>
										<p className="mb-3 text-[16px] leading-snug text-white">Digite a rentabilidade anual que você deseja obter.</p>
										<div className="flex items-center gap-2">
											<input type="text" inputMode="decimal" value={form.customReturn} onChange={e => f("customReturn", e.target.value.replace(/[^0-9,.]/g, ""))} placeholder="0.00" className="w-20 rounded-lg border border-[#455790] bg-[#20357A] px-2 py-1.5 text-center text-[16px] text-white focus:outline-none" />
											<span className="text-[16px] font-semibold text-white">% a.a.</span>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>

					<button onClick={() => canCalculate && setShowResults(true)} className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-[18px] font-bold transition-all ${canCalculate ? "cursor-pointer bg-[#7C4DFF] text-white shadow-lg shadow-[#7C4DFF]/25 hover:bg-[#8e00e6]" : "cursor-not-allowed bg-[#21246d] text-gray-400"}`}>
						<Calendar className="h-6 w-6" />
						<span>Calcule o seu sonho ou projeto</span>
					</button>

					<p className="mt-4 text-[16px] text-white">* A rentabilidade utilizada é apenas uma referência para fins de simulação e não representa garantia de retorno.</p>
				</div>
			</div>

			{/* resultados */}
			<AnimatePresence>
				{showResults && (
					<motion.div ref={resultsRef} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="bg-white px-4 py-8">
						<div className="mx-auto max-w-[1360px]">
							<div className="mb-6 flex items-center gap-3">
								<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-sm font-bold text-white">2</div>
								<h2 className="gradient-background bg-clip-text text-lg font-bold text-transparent md:text-xl">Seu plano para realizar seu sonho</h2>
							</div>

							<div className="mb-8 text-center">
								<h3 className="mb-2 text-2xl font-extrabold text-[#0c1440] md:text-3xl">
									{form.name ? <><span className="text-[#7C4DFF]">{form.name}</span>, este é</> : "Este é"} o plano para conquistar <span className="text-[#01AEAA]">{dreamLabel}!</span>
								</h3>
								<p className="text-xs font-semibold text-[#3b4371] md:text-sm">Confira quanto você precisa poupar mensalmente para realizar seu sonho.</p>
							</div>

							<div className="mb-8 rounded-3xl border border-[#f0ebfe] bg-[#F7F6FE] p-6">
								<div className="flex flex-col flex-wrap gap-y-6 md:flex-row md:items-center md:gap-y-4">
									<div className="flex min-w-max flex-1 items-center gap-3 pr-4 border-gray-200/60 md:border-r">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ECE7FE]"><Smile className="h-5 w-5 text-[#7C4DFF]" /></div>
										<div>
											<div className="whitespace-nowrap text-xs font-semibold text-[#525a86]">Valor mensal necessário</div>
											<div className="whitespace-nowrap text-[20px] font-extrabold text-[#7C4DFF]">{formatBRL(monthlyNeeded)}</div>
										</div>
									</div>

									<div className="flex min-w-max flex-1 items-center gap-3 border-t border-gray-200/60 px-0 pt-4 md:border-r md:border-t-0 md:px-4 md:pt-0">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ECE7FE]"><Calendar className="h-5 w-5 text-[#7C4DFF]" /></div>
										<div>
											<div className="whitespace-nowrap text-xs font-semibold text-[#525a86]">Durante</div>
											<div className="whitespace-nowrap text-[20px] font-extrabold text-[#7C4DFF]">{months} meses</div>
										</div>
									</div>

									<div className="flex min-w-max flex-1 items-center gap-3 border-t border-gray-200/60 px-0 pt-4 md:border-r md:border-t-0 md:px-4 md:pt-0">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e3fcf7]"><Target className="h-5 w-5 text-[#01AEAA]" /></div>
										<div>
											<div className="whitespace-nowrap text-xs font-semibold text-[#525a86]">Para alcançar</div>
											<div className="whitespace-nowrap text-[20px] font-extrabold text-[#01AEAA]">{formatBRL(totalValue)}</div>
										</div>
									</div>

									<div className="flex min-w-max flex-1 items-center gap-3 border-t border-gray-200/60 pl-0 pt-4 md:border-t-0 md:pl-4 md:pt-0">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e3fcf7]"><PiggyBank className="h-5 w-5 text-[#01AEAA]" /></div>
										<div>
											<div className="whitespace-nowrap text-xs font-semibold text-[#525a86]">Você já possui</div>
											<div className="whitespace-nowrap text-[20px] font-extrabold text-[#01AEAA]">{formatBRL(existing)}</div>
										</div>
									</div>
								</div>

								<div className="mt-6 flex items-center justify-center gap-1.5 border-t border-gray-200/50 pt-4 text-xs text-[#3b4371]">
									<span className="font-bold">Rentabilidade considerada:</span>
									<span>{form.returnType === "poupanca" ? `Poupança (${POUPANCA_RATE_AA}% a.a.)` : `${annualReturn}% a.a.`}</span>
									<HelpCircle className="h-3.5 w-3.5 cursor-pointer text-gray-400" />
								</div>
							</div>

							<div className="mb-8">
								<div className="mb-4 text-sm font-extrabold text-[#0c1440]">Evolução do seu plano</div>

								<ResponsiveContainer width="100%" height={260}>
									<AreaChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
										<defs>
											<linearGradient id="dreamAreaGrad" x1="0" y1="0" x2="0" y2="1">
												<stop offset="0%" stopColor="#7C4DFF" stopOpacity={0.3} />
												<stop offset="100%" stopColor="#7C4DFF" stopOpacity={0.02} />
											</linearGradient>
										</defs>
										<CartesianGrid strokeDasharray="3 3" stroke="#f0ebfe" vertical={false} />
										<XAxis dataKey="label" tick={{ fontSize: 11, fill: "#525a86" }} tickLine={false} axisLine={false} />
										<YAxis tickFormatter={v => (v === 0 ? "R$ 0" : `R$ ${(v / 1000).toFixed(0)} mil`)} tick={{ fontSize: 11, fill: "#525a86" }} tickLine={false} axisLine={false} width={90} />
										<Tooltip formatter={(v, name) => [formatBRL(Number(v || 0)), name]} contentStyle={{ borderRadius: "12px", border: "1px solid #f0ebfe", fontSize: "12px" }} />
										<Legend iconType="plainline" formatter={value => <span style={{ color: "#3b4371", fontSize: "12px", fontWeight: 600 }}>{value}</span>} wrapperStyle={{ paddingBottom: "12px" }} />
										<Area type="monotone" dataKey="Valor acumulado" stroke="#7C4DFF" strokeWidth={2.5} fill="url(#dreamAreaGrad)" dot={{ r: 4, fill: "#7C4DFF", stroke: "#fff", strokeWidth: 2 }} activeDot={{ r: 6, fill: "#7C4DFF", stroke: "#fff", strokeWidth: 2 }} />
										<Area type="monotone" dataKey="Valor necessário" stroke="#01AEAA" strokeWidth={2} strokeDasharray="5 5" fill="none" dot={(props: any) => (props.index === chartData.length - 1 ? <circle key={props.index} cx={props.cx} cy={props.cy} r={5} fill="#01AEAA" stroke="#fff" strokeWidth={2} /> : null)} activeDot={{ r: 6, fill: "#01AEAA", stroke: "#fff", strokeWidth: 2 }} />
									</AreaChart>
								</ResponsiveContainer>
							</div>

							<div className="mb-8 rounded-3xl border border-[#f0ebfe] bg-[#F7F6FE] px-6 py-5 text-center">
								<p className="text-sm font-semibold text-[#0c1440]">
									Você precisa poupar <span className="text-[20px] font-extrabold text-[#7C4DFF]">{formatBRL(monthlyNeeded)}</span> mensais, durante <span className="text-[20px] font-extrabold text-[#01AEAA]">{months} meses</span>, para realizar seu sonho ou projeto.
								</p>
								<div className="mt-2 flex items-center justify-center gap-1 text-[11px] text-[#525a86]">
									<span>Os valores exibidos são brutos e não consideram a inflação.</span>
									<HelpCircle className="h-3.5 w-3.5 text-gray-400" />
								</div>
							</div>

							<form onSubmit={handleSendEmail} className="flex flex-col items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm md:flex-row">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ECE7FE]"><Mail className="h-6 w-6 text-[#7C4DFF]" /></div>
								<div className="flex-1 text-xs text-[#3b4371] md:text-sm">
									<span className="font-bold text-[#7C4DFF]">Bônus:</span> você pode enviar sua simulação por e-mail e guardar o plano para acompanhar sempre que quiser.
								</div>
								<div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
									<input type="email" required placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-xs text-[#0c1440] placeholder-gray-400 focus:outline-none sm:w-56 md:text-sm" />
									<button type="submit" disabled={isSending} className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#7C4DFF] px-5 py-2.5 text-xs font-bold text-[#7C4DFF] transition-colors hover:bg-[#7C4DFF] hover:text-white disabled:opacity-50 md:text-sm">
										{isSending ? (
											<>
												<Loader2 className="h-4 w-4 animate-spin" />
												<span>Enviando...</span>
											</>
										) : (
											<>
												<Mail className="h-4 w-4" />
												<span>Enviar resultado para meu e-mail</span>
											</>
										)}
									</button>
								</div>
							</form>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<ToastContainer />
		</div>
	);
}