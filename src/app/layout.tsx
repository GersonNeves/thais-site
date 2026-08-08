import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Thais Fontana | Psicóloga Clínica",
  description:
    "Thais Fontana, Psicóloga Clínica. Espaço seguro para sua jornada de autoconhecimento, atendimento psicológico online.",
  keywords: [
    "Psicóloga",
    "Psicologia Clínica",
    "Atendimento Psicológico Online",
    "Terapia",
    "Saúde Mental",
    "Psicanálise",
    "Terapia para Mulheres",
  ],
  openGraph: {
    title: "Thais Fontana | Psicóloga Clínica",
    description:
      "Espaço seguro para sua jornada de autoconhecimento, atendimento psicológico online.",
    url: SITE_URL,
    siteName: "Thais Fontana | Psicóloga Clínica",
    images: ["/images/thais.jpg"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thais Fontana | Psicóloga Clínica",
    description:
      "Espaço seguro para sua jornada de autoconhecimento, atendimento psicológico online.",
    images: ["/images/thais.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Thais Fontana",
  description:
    "Psicóloga clínica e escolar especializada em saúde mental, desenvolvimento humano, Psicanálise e educação permanente.",
  image: `${SITE_URL}/images/thais.jpg`,
  url: SITE_URL,
  sameAs: [siteConfig.instagramUrl, siteConfig.linkedinUrl].filter(
    (href) => href && href !== "#"
  ),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${robotoSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
