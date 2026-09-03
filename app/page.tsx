import { Hero } from "@/components/pages/home/hero";
import { Book } from "@/components/pages/home/book";
import { Videos } from "@/components/pages/home/videos";
import Simulators from "@/components/pages/home/simulators";
import Founder from "@/components/pages/home/founder";
import { About } from "@/components/pages/home/about";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Book></Book>
      <About/>
      <Founder/>
      <Simulators></Simulators>
      <Videos></Videos>
    </>
  );
}