"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEventHandler } from "react";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

interface SimulatorLink {
    label: string;
    href: string;
}

const simulatorLinks: SimulatorLink[] = [
    {
        label: "Simulador de Reserva de Sonhos e Projetos",
        href: "/simulador/de-sonhos-e-projetos",
    },
    {
        label: "Simulador de Reserva para Aposentadoria",
        href: "/simulador/de-renda-na-aposentadoria",
    },
    {
        label: "Índice de Saúde Financeira",
        href: "/indice-de-saude-financeira",
    },
    {
        label: "Perfil de Investidor (Suitability)",
        href: "/suitability",
    },
];

interface ButtonProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function Button({ className = "", onClick }: ButtonProps) {
    return (
        <Link href="/sobre" onClick={onClick} className={`flex items-center justify-center gap-2 rounded-xl bg-[#7C4DFF] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 px-4 py-3 text-base font-semibold text-white ${className}`}>
            <span>Conheça o Sim Planejar!</span>
            <IoIosArrowForward className="shrink-0 text-xl" />
        </Link>
    );
}

export default function Navbar() {
    const pathname = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSimulatorMenuOpen, setIsSimulatorMenuOpen] = useState(false);

    const desktopDropdownRef = useRef<HTMLDivElement | null>(null);
    const mobileDropdownRef = useRef<HTMLDivElement | null>(null);
    const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
    const mobileNavigationRef = useRef<HTMLDivElement | null>(null);    

    function normalizePath(path: string) {
        if (path === "/") {
            return "/";
        }

        return path.replace(/\/+$/, "");
    }

    function isActive(href: string) {
        const currentPath = normalizePath(pathname);
        const linkPath = normalizePath(href);

        if (linkPath === "/") {
            return currentPath === "/";
        }

        return currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);
    }

    function getLinkColor(href: string) {
        return isActive(href) ? "text-[#7C4DFF]" : "text-[#071F6B]";
    }

    const isSimulatorPageActive = simulatorLinks.some((simulator) => isActive(simulator.href));

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!(event.target instanceof Node)) {
                return;
            }

            const clickedInsideDesktopDropdown = desktopDropdownRef.current?.contains(event.target);
            const clickedInsideMobileDropdown = mobileDropdownRef.current?.contains(event.target);
            const clickedInsideMobileButton = mobileMenuButtonRef.current?.contains(event.target);
            const clickedInsideMobileNavigation = mobileNavigationRef.current?.contains(event.target);

            if (!clickedInsideDesktopDropdown && !clickedInsideMobileDropdown) {
                setIsSimulatorMenuOpen(false);
            }

            if (!clickedInsideMobileButton && !clickedInsideMobileNavigation) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function closeMenus() {
        setIsMobileMenuOpen(false);
        setIsSimulatorMenuOpen(false);
    }

    function toggleMobileMenu() {
        setIsMobileMenuOpen((isOpen) => !isOpen);
        setIsSimulatorMenuOpen(false);
    }

    function toggleSimulatorMenu() {
        setIsSimulatorMenuOpen((isOpen) => !isOpen);
    }

    return (
        <header className="relative z-50 w-full bg-white h-[44px] md:h-[80px]">
            <nav className="flex items-center justify-between px-5">
                <Link href="/" onClick={closeMenus} className="shrink-0">
                    <Image src="/logo.svg" alt="Logo Sim Planejar" width={120} height={80} className="h-[44px] w-[66px] md:h-[80px] md:w-[120px]" />
                </Link>

                {/* Desktop */}
                <div className="hidden items-center gap-12 font-semibold lg:flex">
                    <Link href="/" className={`text-xl hover:text-[#7C4DFF] ${getLinkColor("/")}`}>
                        Home
                    </Link>

                    <Link href="/sobre" className={`text-xl hover:text-[#7C4DFF] ${getLinkColor("/sobre")}`}>
                        Sobre
                    </Link>

                    <Link href="/o-livro" className={`text-xl hover:text-[#7C4DFF] ${getLinkColor("/o-livro")}`}>
                        Livro
                    </Link>

                    {/* Simuladores Desktop*/}
                    <div ref={desktopDropdownRef} className="relative">
                        <button onClick={toggleSimulatorMenu} className={`flex items-center gap-2 text-xl hover:text-[#7C4DFF] ${isSimulatorMenuOpen || isSimulatorPageActive ? "text-[#7C4DFF]" : "text-[#071F6B]"}`}>
                            Simuladores
                            <IoIosArrowDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isSimulatorMenuOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown menu */}
                        <div className={`absolute left-1/2 top-full mt-[18px] w-80 -translate-x-1/2 rounded-[5px] bg-white p-3 shadow-[0_18px_50px_rgba(52,0,105,0.16)] transition-opacity duration-300 ${isSimulatorMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                            <div className="flex flex-col gap-2">
                                {simulatorLinks.map((simulator) => {
                                    const simulatorIsActive = isActive(simulator.href);

                                    return (
                                        <Link key={simulator.href} href={simulator.href} onClick={closeMenus} className={`group flex items-center justify-between gap-4 p-3 font-semibold hover:text-[#7C4DFF] ${simulatorIsActive ? "text-[#7C4DFF]" : "text-[#071F6B]"}`}>
                                            <span>{simulator.label}</span>
                                            <IoIosArrowForward className="shrink-0 text-lg transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <Link href="/contato" className={`text-xl hover:text-[#7C4DFF] ${getLinkColor("/contato")}`}>
                        Contato
                    </Link>
                </div>

                <Button className="hidden lg:flex" />

                {/* Hamburger menu icon */}
                <button onClick={toggleMobileMenu} ref={mobileMenuButtonRef} className="flex h-11 w-11 items-center justify-center rounded-lg text-[#7C4DFF] lg:hidden">
                    <span className="relative block h-5 w-6">
                        <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-2 rotate-45" : "top-0"}`} />
                        <span className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-2 -rotate-45" : "top-4"}`} />
                    </span>
                </button>
            </nav>

            {/* Mobile*/}
            <div ref={mobileNavigationRef} className={`absolute left-0 top-full w-full bg-white shadow-xl transition-all duration-300 lg:hidden grid ${isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <div className="flex flex-col p-5 font-semibold">
                        <Link href="/" onClick={closeMenus} className={`p-3 hover:text-[#7C4DFF] ${getLinkColor("/")}`}>
                            Home
                        </Link>

                        <Link href="/sobre" onClick={closeMenus} className={`p-3 hover:text-[#7C4DFF] ${getLinkColor("/sobre")}`}>
                            Sobre
                        </Link>

                        <Link href="/o-livro" onClick={closeMenus} className={`p-3 hover:text-[#7C4DFF] ${getLinkColor("/o-livro")}`}>
                            Livro
                        </Link>

                        {/* Simuladores Mobile */}
                        <div ref={mobileDropdownRef}>
                            <button onClick={toggleSimulatorMenu} className={`flex w-full items-center justify-between p-3 hover:text-[#7C4DFF] ${isSimulatorMenuOpen || isSimulatorPageActive ? "text-[#7C4DFF]" : "text-[#071F6B]"}`}>
                                Simuladores
                                <IoIosArrowDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isSimulatorMenuOpen ? "rotate-180" : ""}`} />
                            </button>

                            <div className={`grid overflow-hidden transition-all duration-300 ${isSimulatorMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className="min-h-0">
                                    <div className="ml-4 flex flex-col gap-1 border-l-2 border-purple-100 py-2 pl-3">
                                        {simulatorLinks.map((simulator) => {
                                            const simulatorIsActive = isActive(simulator.href);

                                            return (
                                                <Link key={simulator.href} href={simulator.href} onClick={closeMenus} className={`group flex items-center justify-between gap-4 p-3 text-sm font-semibold hover:text-[#7C4DFF] ${simulatorIsActive ? "text-[#7C4DFF]" : "text-[#071F6B]"}`}>
                                                    <span>{simulator.label}</span>
                                                    <IoIosArrowForward className="shrink-0 text-lg transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/contato" onClick={closeMenus} className={`p-3 hover:text-[#7C4DFF] ${getLinkColor("/contato")}`}>
                            Contato
                        </Link>

                        <Button onClick={closeMenus} className="mt-4 flex w-[245px]" />
                    </div>
                </div>
            </div>
        </header>
    );
}