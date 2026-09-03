import { ComingSoon } from "@/components/pages/book/coming_soon";
import { Share } from "@/components/pages/book/share";
import { About } from "@/components/pages/book/About";
import { Reviews } from "@/components/pages/book/reviews";
import  Stars  from "@/components/pages/book/stars";


export default function Book() {
  return (
    <>
        <About/>
        <Reviews/>
        <Stars/>
        <Share/>
        <ComingSoon/>
    </>
  );
}