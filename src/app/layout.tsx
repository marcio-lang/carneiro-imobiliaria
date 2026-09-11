import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carneiro Inteligência Imobiliária | Compra, Venda e Avaliação de Imóveis",
  description:
    "Especialista em compra, venda e avaliação de imóveis. Atendimento personalizado, inteligência de mercado e as melhores oportunidades para você.",
  keywords: [
    "corretor de imóveis",
    "imobiliária",
    "compra de imóveis",
    "venda de imóveis",
    "avaliação imobiliária",
    "investimento imobiliário",
    "imóveis de alto padrão",
    "Carneiro Inteligência Imobiliária",
    "CRECI SP",
    "imóveis de luxo São Paulo"
  ],
  authors: [{ name: "Carneiro Inteligência Imobiliária" }],
  creator: "Carneiro Inteligência Imobiliária",
  metadataBase: new URL("https://carneiroimoveis.com.br"),
  openGraph: {
    title: "Carneiro Inteligência Imobiliária | Compra, Venda e Avaliação de Imóveis",
    description:
      "Especialista em compra, venda e avaliação de imóveis utilizando inteligência de mercado e estratégias avançadas de negociação.",
    url: "https://carneiroimoveis.com.br",
    siteName: "Carneiro Inteligência Imobiliária",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Logotipo Carneiro Inteligência Imobiliária",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carneiro Inteligência Imobiliária",
    description: "Transformando imóveis em oportunidades com inteligência de mercado.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org RealEstateAgent structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    image: "https://carneiroimoveis.com.br/images/logo.jpg",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Centro Urbano Q. 302 Centro Urbano - Samambaia",
      addressLocality: "Brasília",
      addressRegion: "DF",
      postalCode: "72300-641",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -15.8640,
      longitude: -48.0804,
    },
    openingHours: "Mo-Fr 08:00-17:30",
    priceRange: "$$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "13",
      bestRating: "5",
      worstRating: "1",
    },
    url: "https://carneiroimoveis.com.br",
  };

  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${cinzel.variable} ${inter.variable} ${montserrat.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#111111] text-white font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0D0D0D]">
        <AnalyticsScripts />
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
