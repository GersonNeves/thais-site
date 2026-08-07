import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Especialidades from "@/components/Especialidades/Especialidades";
import Sobre from "@/components/Sobre/Sobre";
import AlemDaClinica from "@/components/AlemDaClinica/AlemDaClinica";
import Psicoterapia from "@/components/Psicoterapia/Psicoterapia";
import Modalidades from "@/components/Modalidades/Modalidades";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import WhatsappFloat from "@/components/WhatsappFloat/WhatsappFloat";
import { faq } from "@/content/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.join(" "),
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Especialidades />
        <Sobre />
        <AlemDaClinica />
        <Psicoterapia />
        <Modalidades />
        <Faq />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
