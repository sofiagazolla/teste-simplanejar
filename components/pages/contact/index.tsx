import ContactBody from "./ContactBody";
import ContactFooter from "./ContactFooter";
import ContactHero from "./ContactHero";

export interface ImageData {
    src: string;
    alt: string;
}

export interface StyledText {
    text: string;
    highlighted ?: boolean;
}


export default function ContactPage() {
  return (
    <>
    <ContactHero />
    <ContactBody />
    </>
  )
}
