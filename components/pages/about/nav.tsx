"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollLink } from "./ScrollLink";

type NavItem = {
  id: string;
  label: string;
  path: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "sobre-sim-planejar", label: "Sobre o Sim Planejar", path: "/sobre" },
  { id: "nossa-jornada", label: "Nossa Jornada", path: "/sobre/#nossa-jornada" },
  { id: "nossos-valores", label: "Nossos Valores", path: "/sobre/#nossos-valores" },
  { id: "a-idealizadora", label: "A Idealizadora", path: "/sobre/#a-idealizadora" },
];

export default function SobreNavbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <span className="bg-gradient-to-r from-purple-600 to-sky-400 bg-clip-text text-[20px] font-bold tracking-wide text-transparent">
          SOBRE
        </span>

        <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <ScrollLink 
              key={item.id}
                to={item.id}
                className={[
                  "flex items-center justify-center rounded-[5px] h-[30px] w-[150px] md:w-[200px] border text-sm md:text-base font-medium text-center transition-colors duration-150",
                  isActive
                    ? "border-transparent bg-[#7C4DFF] text-white"
                    : "border-[#7C4DFF] bg-white text-[#7C4DFF] hover:bg-purple-50",
                ].join(" ")}
              >
                {item.label}
              </ScrollLink>
              // <Link
              //   key={item.id}
              //   href={item.path}
              //   className={[
              //     "flex items-center justify-center rounded-[5px] h-[30px] w-[150px] md:w-[200px] border text-sm md:text-base font-medium text-center transition-colors duration-150",
              //     isActive
              //       ? "border-transparent bg-[#7C4DFF] text-white"
              //       : "border-[#7C4DFF] bg-white text-[#7C4DFF] hover:bg-purple-50",
              //   ].join(" ")}
              // >
              //   {item.label}
              // </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}