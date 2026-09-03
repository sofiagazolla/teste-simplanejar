import Journey from "@/components/pages/about/journey";
import SobreNavbar from "@/components/pages/about/nav";
import Values from "@/components/pages/about/Values";
import Why from "@/components/pages/about/why";
import  AboutAbout  from "@/components/pages/about/about";
import  Founder  from "@/components/pages/about/founder";

export default function About() {
  return (
    <>
      <SobreNavbar />
      < AboutAbout/>
      <Journey/>
      <Why/>
      <Values/>
      <Founder/>
    </>
  );
}
