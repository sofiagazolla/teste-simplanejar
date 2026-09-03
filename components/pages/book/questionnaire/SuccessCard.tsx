"use client";

import Image from "next/image";
import Link from "next/link";
import { success } from "./data";

export function SuccessCard() {
    return (
        <div className="mx-auto max-w-[1297px] rounded-[10px] bg-card-bg p-6 shadow-[-4px_-4px_4px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
            <div className="flex flex-col items-center py-16 text-center">
                <h1 className="mb-8 text-[28px] font-extrabold leading-tight text-foreground sm:text-[40px]">
                    {success.titlePrefix}
                    <span className="text-primary">{success.titleHighlight}</span>!
                </h1>

                <Image src="/book/questionnaire/icon-success-check.svg" alt="" width={93} height={93} className="mb-6" />

                <p className="mb-10 text-[20px] font-semibold text-black">{success.text}</p>

                <Link
                    href="/book"
                    className="flex h-[60px] w-full max-w-[375px] items-center justify-center rounded-[10px] bg-primary text-[20px] font-extrabold text-white transition-colors hover:bg-[#A280FF] cursor-pointer"
                >
                    {success.button}
                </Link>
            </div>
        </div>
    );
}
