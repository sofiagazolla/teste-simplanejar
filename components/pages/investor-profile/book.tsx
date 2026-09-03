import React from 'react';
import { IoMdStar, IoMdArrowForward } from "react-icons/io";
import { FiBookOpen, FiTarget, FiUser, FiTrendingUp, FiShield, FiPieChart } from "react-icons/fi";
import { FaPiggyBank } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const bookImage = "/book/book-investor.png";

export default function Book() {
    return (
        <section className='w-full max-w-[1440px] mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 bg-[#F8F9FF]'>
            <header className="text-center max-w-3xl mb-10 lg:mb-12 flex flex-col items-center">
                
                <div className='flex items-center gap-3 text-[#7C4DFF] border rounded-full border-[#F2F0FD] mb-4 lg:mb-5 pr-5 shadow-sm font-semibold text-sm'>
                    <div className="bg-[#F2F0FD] rounded-full p-2">
                        <IoMdStar color="#7C4DFF" size="28px" className="sm:w-8 sm:h-8"/>
                    </div>
                    
                    <span className="flex-1 text-center font-bold text-sm">QUER IR ALÉM?</span>
                </div>
                
                <h1 className='text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#000416] leading-tight mb-4'>
                    Antes de investir, construa uma <span className='text-[#7C4DFF]'>base financeira sólida.</span>
                </h1>
                <p className='text-[#000416] font-normal text-base sm:text-lg'>
                    Conheça o livro que já ajudou milhares de pessoas a organizar suas finanças, definir objetivos e assumir o controle da própria vida financeira.
                </p>
            </header>

            
            <div className='w-full flex flex-col lg:flex-row items-center gap-8 xl:gap-12 mb-10 lg:mb-12 justify-center'>
                
                <div className='w-full lg:w-5/12 xl:w-1/2 flex justify-center items-center'>
                    <Image 
                        src={bookImage} 
                        alt="Capa do Livro Planejamento Financeiro" 
                        width={450} 
                        height={450}
                        className="w-[260px] sm:w-[340px] lg:w-[380px] xl:w-[450px] h-auto object-contain"
                    />    
                </div>   

                <div className='w-full lg:w-7/12 xl:w-1/2 bg-[#FCFCFE] rounded-3xl shadow-xl p-6 sm:p-8 xl:p-10 flex flex-col justify-center border border-[#F2F0FD]'>

                    <div className="flex flex-col items-start gap-1 mb-3 lg:mb-4">
                        <h2 className="text-[20px] xl:text-[24px] font-bold gradient-text whitespace-nowrap">LIVRO</h2>
                        <div className="gradient-background h-[5px] w-[40px] rounded-[10px]" />
                    </div>

                    <h2 className='text-[#000416] text-2xl sm:text-3xl font-extrabold mb-3 lg:mb-4 leading-tight'>
                        Planejamento Financeiro: <br/> <span className='text-[#7C4DFF]'>Você no Controle!</span>
                    </h2>
                    <p className='text-[#000416] mb-6 lg:mb-8 xl:mb-10 leading-relaxed text-sm sm:text-base'>
                        Simone Costa, por meio de textos objetivos, exemplos e exercícios práticos, convida você a ser o protagonista da sua vida financeira, obtendo o controle do seu dinheiro em prol da concretização de metas a curto, médio e longo prazo.
                    </p>

                    {/* Grid responsivo: 2 colunas em lg (1024px) e 4 colunas em xl (1280px+) */}
                    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8'>
                        <div className='flex flex-col sm:flex-row lg:flex-row items-center sm:items-start text-center sm:text-left gap-2.5'>
                            <div className="bg-[#F2F0FD] p-2.5 rounded-full shrink-0">
                                <FiBookOpen color='#7C4DFF' size={20} />
                            </div>
                            <div className='flex flex-col min-w-0'>
                                <h3 className="font-bold text-sm text-[#000416] mb-0.5 leading-tight">Conteúdo prático</h3>
                                <p className="text-sm text-[#000416]/80 leading-snug">Conhecimento para colocar em ação.</p>
                            </div>   
                        </div>

                        <div className='flex flex-col sm:flex-row lg:flex-row items-center sm:items-start text-center sm:text-left gap-2.5'>
                            <div className="bg-[#F2F0FD] p-2.5 rounded-full shrink-0">
                                <FiTarget color='#01AEAA' size={20} />
                            </div>
                            <div className='flex flex-col min-w-0'>
                                <h3 className="font-bold text-sm text-[#000416] mb-0.5 leading-tight">Exercícios</h3>
                                <p className="text-sm text-[#000416]/80 leading-snug">Da reflexão à prática.</p>
                            </div>   
                        </div>

                        <div className='flex flex-col sm:flex-row lg:flex-row items-center sm:items-start text-center sm:text-left gap-2.5'>
                            <div className="bg-[#F2F0FD] p-2.5 rounded-full shrink-0">
                                <FiUser color='#071F6B' size={20} />
                            </div>
                            <div className='flex flex-col min-w-0'>
                                <h3 className="font-bold text-sm text-[#000416] mb-0.5 leading-tight">Para todos</h3>
                                <p className="text-sm text-[#000416]/80 leading-snug">Linguagem simples e acessível.</p>
                            </div>   
                        </div>

                        <div className='flex flex-col sm:flex-row lg:flex-row items-center sm:items-start text-center sm:text-left gap-2.5'>
                            <div className="bg-[#F2F0FD] p-2.5 rounded-full shrink-0">
                                <FiTrendingUp color='#7C4DFF' size={20} />
                            </div>
                            <div className='flex flex-col min-w-0'>
                                <h3 className="font-bold text-sm text-[#000416] mb-0.5 leading-tight">Transformação</h3>
                                <p className="text-sm text-[#000416]/80 leading-snug">Ferramentas para mudar sua realidade.</p>
                            </div>   
                        </div>
                    </div>

                    <Link href="/o-livro" className='w-full sm:w-fit bg-[#7C4DFF] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 text-base'>
                        <FiBookOpen size={20} /> Conhecer o livro <IoMdArrowForward size={20}/>
                    </Link>
                </div>
            </div>


            {/* Faixa Inferior */}
            <div className="w-full bg-[#FCFCFE] rounded-3xl p-6 xl:p-8 flex flex-col lg:flex-row items-center shadow-sm border border-[#F2F0FD] gap-6 lg:gap-4 xl:gap-0">
                
                <div className="flex flex-row items-center text-left gap-4 w-full lg:w-[40%] xl:w-[45%] border-b lg:border-b-0 lg:border-r border-[#DCD7F5] pb-6 lg:pb-0 lg:pr-6">
                    <div className="bg-[#F2F0FD] p-3 rounded-full shadow-sm shrink-0 flex items-center justify-center">
                        <FiShield color="#7C4DFF" size={26} />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[#071F6B] text-base sm:text-lg lg:text-[19px] mb-1">Transforme conhecimento em ação</h3>
                        <p className="text-[#071F6B] text-sm leading-relaxed">Dê o próximo passo da sua jornada financeira e construa um futuro com mais tranquilidade e liberdade.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 xl:grid-cols-4 w-full lg:w-[60%] xl:w-[55%] gap-4 xl:gap-0">
                    <div className="flex items-center gap-2.5 xl:border-r border-[#DCD7F5] xl:px-4">
                        <div className="bg-[#F2F0FD] p-2.5 rounded-full shrink-0">
                            <FaPiggyBank color='#7C4DFF' size={18} />
                        </div>
                        <span className="text-sm font-bold text-[#000416] leading-tight">Organize<br/> suas finanças</span>
                    </div>

                    <div className="flex items-center gap-2.5 xl:border-r border-[#DCD7F5] xl:px-4">
                        <div className="bg-[#F2F0FD] p-2.5 rounded-full shrink-0">
                            <FiPieChart color='#7C4DFF' size={18} />
                        </div>
                        <span className="text-sm font-bold text-[#000416] leading-tight">Construa reservas<br/> e segurança</span>
                    </div>
                    
                    <div className="flex items-center gap-2.5 xl:border-r border-[#DCD7F5] xl:px-4">
                        <div className="bg-[#F2F0FD] p-2.5 rounded-full shrink-0">
                            <FiTarget color='#7C4DFF' size={18} />
                        </div>
                        <span className="text-sm font-bold text-[#000416] leading-tight">Defina objetivos<br/> e conquistas</span>
                    </div>
                    
                    <div className="flex items-center gap-2.5 xl:px-4">
                        <div className="bg-[#F2F0FD] p-2.5 rounded-full shrink-0">
                            <FiUser color='#7C4DFF' size={18} />
                        </div>
                        <span className="text-sm font-bold text-[#000416] leading-tight">Assuma o controle<br/> da sua vida</span>
                    </div>
                    
                </div>
            </div>

        </section>
    );
}