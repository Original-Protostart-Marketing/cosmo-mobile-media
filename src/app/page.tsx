import Cities from "@/components/Home/Cities";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import QuickFact from "@/components/Home/QuickFact";
import Reach from "@/components/Home/Reach";
import Services from "@/components/Home/Services";
import Slogans from "@/components/Home/Slogans";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Reach />
      <QuickFact />
      <Services />
      <Contact />
      {/* Preview your campaign */}
      <Cities />
      <Testimonials />
      <Slogans />
      {/* Mini Gallery */}
    </>
  );
}
