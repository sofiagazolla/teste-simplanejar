import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

// Configuração única da fonte Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Sim Planejar",
  description:
    "Educação financeira para a vida. Organize suas finanças e seja protagonista da sua vida financeira.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="bg-[#FAF9FE] min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
