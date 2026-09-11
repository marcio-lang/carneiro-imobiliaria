export const siteConfig = {
  name: "Carneiro Inteligência Imobiliária",
  shortName: "Carneiro",
  realtorName: "Genilton Carneiro",
  tagline: "Transformando imóveis em oportunidades.",
  description: "Especialista em compra, venda e avaliação de imóveis utilizando inteligência de mercado e estratégias avançadas de negociação em Brasília e região.",

  // Contatos Reais do Google Business
  phone: "(61) 98264-1387",
  phoneRaw: "5561982641387",
  whatsapp: "(61) 98264-1387",
  whatsappRaw: "5561982641387",
  email: "contato@carneirointeligencia.com.br",
  creci: "CRECI-DF 34325",
  creciNumber: "CRECI 34325",
  address: "Centro Urbano Q. 302 Centro Urbano - Samambaia, Brasília - DF, 72300-641",
  city: "Brasília - DF",
  workingHours: "Segunda a Sexta, das 08h às 17:30 (Plantão WhatsApp)",

  // Links do Google Business Profile & Busca Google
  googleShareUrl: "https://www.google.com/search?q=carneiro+corretor",
  googleMapsUrl: "https://www.google.com/maps/place/CARNEIRO+CORRETOR+DE+IM%C3%93VEIS+DF/@-15.8640256,-48.0804491,17z",

  // Links de redes sociais
  socials: {
    instagram: "https://instagram.com/gscarneiro_corretordeimoveis",
    facebook: "https://facebook.com/carneiroimoveis",
    linkedin: "https://linkedin.com/company/carneiroimoveis",
    youtube: "https://youtube.com/@carneiroimoveis",
  },

  // Métricas de autoridade reais do Google
  metrics: {
    yearsOfExperience: 15,
    negotiatedVolume: "+R$ 120M",
    propertiesSold: "+280",
    clientSatisfaction: "99.6%",
    googleRating: 4.4,
    googleReviewCount: 13,
  },

  // Função geradora de links do WhatsApp
  getWhatsAppLink: (customMessage?: string) => {
    const phone = "5561982641387";
    const defaultMsg = "Olá, Carneiro! Vim através do site da Carneiro Inteligência Imobiliária e gostaria de falar sobre imóveis.";
    const msg = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${phone}?text=${msg}`;
  },

  // Tags para Analytics / Marketing
  tracking: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    pixelId: process.env.NEXT_PUBLIC_PIXEL_ID || "",
  }
};
