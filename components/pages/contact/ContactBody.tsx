"use client"

import Image from "next/image";
import React, { SubmitEvent, useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastContainer, toast, Zoom } from 'react-toastify';

import { ImageData, StyledText } from ".";

import type { IconType } from "react-icons";
import { MdEditNote, MdOutlinePerson, MdOutlineMail } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoMdSend, IoMdArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";

{/*Form*/}
import { enviarEmail } from "@/src/lib/email";




interface FormField {
    text: string;
    icon: IconType;
    placeholder: string;
}

interface Channel {
    title: string;
    description: string;
    button: string;
    link: string;
    image: ImageData;
    arrow: IconType;
}

interface ContactBodyData {
    form: {
        title: {
            text: string;
            icon: IconType;
        },
        name: FormField;
        email: FormField;
        message: FormField;
        send: {
            text: string;
            icon: IconType;
        },
        notify: {
            success: string;
            error: string;
        }
    },
    contact: {
        title: string;
        contact: {
            text: string;
            link: string;
        }
        description: StyledText[];
        emailIcon: IconType;
        heartIcon: IconType;
        image: ImageData;
    },
    keepUp: {
        title: string;
        youtube: Channel;
        instagram: Channel;
    },
    card: {
        text: {
                p1: string;
                p2: string;
            }
        icon: IconType;
        stars: ImageData;
        button: {
            text: string;
            link: string;
            icon: IconType;
            arrow: IconType;
        }
    }
}

const contactBodyMockData: ContactBodyData = {
    form: {
        title: {
            text: "Envie sua mensagem",
            icon: MdEditNote
        },
        name: {
            text: "Nome",
            icon: MdOutlinePerson,
            placeholder: "Seu nome"
        },
        email: {
            text: "E-mail",
            icon: MdOutlineMail,
            placeholder: "Seu e-mail"
        },
        message: {
            text: "Mensagem",
            icon: BiSolidEditAlt,
            placeholder: "Escreva sua mensagem..."
        },
        send: {
            text: "Enviar mensagem",
            icon: IoMdSend
        },
        notify: {
            success: "Sua resposta foi enviada!",
            error: "Algo deu errado. Tente novamente."
        }
    },
    contact: {
        title: "Fale com o Sim Planejar",
        contact: {
            text: "contato@simplanejar.com",
            link: "mailto:contato@simplanejar.com"
        },
        description: [
            {text: "Estamos aqui para ajudar você a ser "},
            {text: "protagonista ", highlighted: true},
            {text: "da sua vida financeira."}
        ],
        emailIcon: MdOutlineMail,
        heartIcon: FaRegHeart,
        image: {
            src: "/contact/paperplane.svg",
            alt: "Desenho de um avião de papel voando com traçado roxo."
        }
    },
    keepUp: {
        title: "Acompanhe o Sim Planejar",
        youtube: {
            title: "YouTube",
            description: "Conheça nosso canal",
            button: "Visitar Canal",
            link: "https://www.youtube.com/channel/UCR5jivIv9WuMdR2Ss8QJ0Rg",
            image: {
                src: "/contact/youtube.png",
                alt: "Logo do YouTube."
            },
            arrow: IoMdArrowForward
        },
        instagram: {
            title: "Instagram",
            description: "Siga nosso perfil",
            button: "Seguir no Instagram",
            link: "https://www.instagram.com/simplanejar/",
            image: {
                src: "/contact/instagram.png",
                alt: "Logo do Instagram"
            },
            arrow: IoMdArrowForward
        }
    },
    card: {
        text: {
            p1: "Seja protagonista da sua vida financeira. ",
            p2: "Você no controle do seu presente e do seu futuro!"
        },
        icon: FaStar,
        stars: {
            src: "/contact/stars.svg",
            alt: "Três estrelas amarelas, como o emoji de brilho."
        },
        button: {
            text: "Conheça o livro",
            link: "AINDA NÃO TEM",
            icon: FiBookOpen,
            arrow: IoMdArrowForward
        }
    }
}

function FormInput({ field, isTextarea = false }: { field: FormField; isTextarea?: boolean }) {
    const Icon = field.icon;
 
    return (
        <div className="flex flex-col gap-1">
            <label className="font-bold text-[#000416]">{field.text}</label>
            {isTextarea ? (
                <div className="flex items-start gap-5 rounded-[10px] border border-[#D9D9D9] px-3 py-3 focus-within:border-[#7C4DFF]">
                    <Icon className="mt-0.5 shrink-0 text-[#7C4DFF]" size={20} />
                    <textarea
                        placeholder={field.placeholder}
                        rows={4}
                        name="message"
                        required
                        className="w-full resize-none bg-transparent text-gray-700 placeholder:text-[rgba(7,31,107,0.60)] outline-none placeholder:font-bold autofill:shadow-[inset_0_0_0px_1000px_#fff] autofill:text-[#6a7a9b]"
                        
                    />
                </div>
            ) : (
                <div className="flex items-center gap-5 rounded-[10px] border border-[#D9D9D9] px-3 py-3 focus-within:border-[#7C4DFF]">
                    <Icon className="shrink-0 text-[#7C4DFF]" size={20} />
                    <input
                        type={field.text === "E-mail" ? 'email' : 'text' }
                        name={field.text === "E-mail" ? 'email' : 'name' }
                        placeholder={field.placeholder}
                        required
                        className="w-full bg-transparent text-gray-700 placeholder:text-[rgba(7,31,107,0.60)] outline-none placeholder:font-bold autofill:shadow-[inset_0_0_0px_1000px_#fff] autofill:text-[#6a7a9b]"
                        
                    />
                </div>
            )}
        </div>
    );
}

function FormCard({ data }: { data: ContactBodyData["form"] }) {
    const TitleIcon = data.title.icon;
    const SendIcon = data.send.icon;

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const dados = new FormData(form.current);

    enviarEmail({
        tipo: "contato", // ou o tipo certo desse form específico
        subject: "Novo contato - Site",
        dados,
        mensagens: data.notify,
        onSuccess: () => form.current?.reset(),
    });
};

 
    return (
        <div className="rounded-[10px] bg-[#FCFCFE] px-4 md:pl-[35px] md:pr-[45px] pt-3 pb-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-2 md:mt-0 ">
            <div className="mb-2 flex items-center justify-center md:justify-start gap-3 ">
                <span className="flex h-10 w-10 md:h-15 md:w-15 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-white">
                    <TitleIcon className="text-[20px] md:text-[30px]" />
                </span>
                <h2 className="text-[20px] text-[#071F6B] font-extrabold">{data.title.text}</h2>
            </div>
 
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
                <FormInput field={data.name} />
                <FormInput field={data.email} />
                <FormInput field={data.message} isTextarea />
 
                <button
                    type="submit"
                    className="mt-3 flex items-center justify-center gap-6 rounded-[10px] bg-[#7C4DFF] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 py-3 md:text-[20px] font-bold text-white cursor-pointer"
                >
                    <SendIcon size={18} />
                    {data.send.text}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}
 
function ContactCard({ data }: { data: ContactBodyData["contact"] }) {
    const EmailIcon = data.emailIcon;
    const HeartIcon = data.heartIcon;
 
    return (
        <div className="relative rounded-[10px] bg-[#F2F0FD] py-8 px-5 md:px-9">
            <div className="pointer-events-none hidden md:block absolute right-[10px] top-3">
                <Image src={data.image.src} alt={data.image.alt} width={146} height={58} />
            </div>
 
            <div className="flex items-start gap-2 md:gap-8">
                <span className="flex h-10 w-10 md:h-15 md:w-15 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-white">
                    <EmailIcon className="text-[20px] md:text-[30px]" />
                </span>
                <div className="flex flex-col">
                    <h2 className="text-[18px] md:text-[20px] text-[#071F6B] font-bold">{data.title}</h2>
                    <span className="mt-2 h-1 w-[50px] rounded-[10px] bg-[#7C4DFF]" />
                    <a
                        href={data.contact.link}
                        className="mt-[10px] text-[18px] md:text-[20px] font-bold text-[#7C4DFF] hover:underline cursor-pointer"
                    >
                        {data.contact.text}
                    </a>
                </div>
            </div>
 
            <hr className="my-4 border-[#E2DDFF]" />
 
            <div className="flex items-start gap-2 md:gap-8">
                <span className="flex h-10 w-10 md:h-15 md:w-15 shrink-0 items-center justify-center rounded-full bg-[#E2DDFF] text-[#7C4DFF]">
                    <HeartIcon className="text-[20px] md:text-[30px]" />
                </span>
                <p className="leading-relaxed font-semibold max-w-[261px]">
                    {data.description.map((part, i) => (
                        <span
                            key={i}
                            className={part.highlighted ? "font-bold text-[#7C4DFF]" : undefined}
                        >
                            {part.text}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}
 
function ChannelCard({ data }: { data: Channel }) {
    const ArrowIcon = data.arrow;
 
    return (
        <div className="flex flex-col gap-2 rounded-[10px] bg-[#FCFCFE] px-6 py-4">
            <div className="flex items-center gap-3">
                <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    width={60}
                    height={42}
                    className="shrink-0 h-auto"
                />
                <div className="flex flex-col">
                    <span className="text-[20px] text-[#071F6B] font-bold">{data.title}</span>
                    <span className="font-semibold">{data.description}</span>
                </div>
            </div>
            <a
                href={data.link}
                className="flex items-center justify-center gap-2 rounded-[10px] border border-[#7C4DFF] hover:bg-primary/5 hover:shadow-lg transition-all duration-200 text-[20px] p-[10px] font-bold text-[#7C4DFF] cursor-pointer "
                target="_blank"
            >
                {data.button}
                <ArrowIcon size={20} className="shrink-0" />
            </a>
        </div>
    );
}
 
function KeepUpCard({ data }: { data: ContactBodyData["keepUp"] }) {
    return (
        <div className="rounded-[10px] bg-[#F2F0FD] px-4 md:px-9 py-6">
            <h2 className="text-[20px] font-bold text-[#071F6B]">{data.title}</h2>
            <span className="mt-[1px] mb-3 block h-1 w-[50px] rounded-[10px] bg-[#7C4DFF]" />
 
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ChannelCard data={data.youtube} />
                <ChannelCard data={data.instagram} />
            </div>
        </div>
    );
}
 
function BookCard({ data }: { data: ContactBodyData["card"] }) {
    const StarIcon = data.icon;
    const ButtonIcon = data.button.icon;
    const ArrowIcon = data.button.arrow;
 
    return (
        <div className="mt-11 mx-[10px] md:mx-[50px] flex flex-col items-center md:justify-between gap-4 rounded-[10px] bg-[#F2F0FD] p-[10px] md:py-5 md:px-11 md:flex-row">
            <div className="flex items-center">
                <span className="flex h-15 w-15 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-white">
                    <StarIcon className="text-[30px] md:text-[50px]" />
                </span>
                    <Image
                        src={data.stars.src}
                        alt={data.stars.alt}
                        width={61}
                        height={78}
                        className="w-[41px] h-[63px] md:w-[61px] md:h-[78px]"
                    />
                <div className="ml-2 md:ml-4">
                    <p className="md:text-[20px] leading-tight font-extrabold text-[#071F6B] sm:text-base">
                        {data.text.p1}
                    </p>
                    <p className="md:text-[20px] leading-tight font-extrabold text-[#071F6B] sm:text-base">
                        {data.text.p2}
                    </p>
                </div>
            </div>
 
            <a
                href={data.button.link}
                className="flex w-full items-center justify-center gap-[30px] rounded-[10px] bg-[#7C4DFF] hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200 px-5 md:px-6 py-2 md:py-5 text-[20px] font-bold text-white md:w-auto cursor-pointer"
            >
                <ButtonIcon size={30} className="shrink-0" />
                {data.button.text}
                <ArrowIcon size={20} className="shrink-0" />
            </a>
        </div>
    );
}
 

export default function ContactBody() {
    return (
         <section className="w-full max-w-[1440px] m-auto">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mx-4 md:mx-8">
                <FormCard data={contactBodyMockData.form} />
                <div className="flex flex-col gap-6">
                    <ContactCard data={contactBodyMockData.contact} />
                    <KeepUpCard data={contactBodyMockData.keepUp} />
                </div>
            </div>
 
            <BookCard data={contactBodyMockData.card} />
        </section>
    )
}