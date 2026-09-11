import { GoogleReview, Testimonial } from "@/types";

export const googleReviews: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Karina Lorrayne",
    role: "Cliente - Compra de Imóvel",
    rating: 5,
    date: "4 meses atrás",
    comment: "Ótimo corretor , venda e pós venda , Do início até a entrega das chaves recomendo.",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Erislany Alves",
    role: "Cliente - Aquisição de Imóvel",
    rating: 5,
    date: "1 mês atrás",
    comment: "Quero te agradecer pelo atendimento! Você foi super atencioso, paciente e me deixou segura em todas as etapas. Excelente profissional 👏",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Emanuel Correia",
    role: "Cliente",
    rating: 5,
    date: "2 meses atrás",
    comment: "Um dos melhores corretores atencioso prestativo e resolve mesmo",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Chapolin Edits",
    role: "Comprador de Apartamento",
    rating: 5,
    date: "2 meses atrás",
    comment: "Melhor corretor de Samambaia, me ajudou conquistar meu apartamento",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Lanny Alves",
    role: "Cliente",
    rating: 5,
    date: "1 mês atrás",
    comment: "Desde do início foi muito prestativo e atencioso. Excelente profissional. Ficamos muito satisfeitos com seu atendimento!",
    verified: true,
  },
  {
    id: "rev-6",
    author: "Regina Alves",
    role: "Cliente",
    rating: 5,
    date: "1 ano atrás",
    comment: "Genilton excelente corretor, pode confiar!",
    verified: true,
  },
  {
    id: "rev-7",
    author: "Junior Souza",
    role: "Cliente",
    rating: 5,
    date: "1 ano atrás",
    comment: "O melhor do Centro Oeste🙌 🏆🥇",
    verified: true,
  },
  {
    id: "rev-8",
    author: "Ozenildo Gomes Da Silva",
    role: "Cliente",
    rating: 5,
    date: "1 ano atrás",
    comment: "Ótimo um excelente profissional excelente condomínio",
    verified: true,
  }
];

export const highlightedTestimonials: Testimonial[] = [
  {
    id: "test-1",
    client: "Karina Lorrayne",
    transaction: "Compra & Pós-venda de Imóvel",
    rating: 5,
    quote: "Ótimo corretor , venda e pós venda , Do início até a entrega das chaves recomendo."
  },
  {
    id: "test-2",
    client: "Erislany Alves",
    transaction: "Assessoria Completa de Compra",
    rating: 5,
    quote: "Quero te agradecer pelo atendimento! Você foi super atencioso, paciente e me deixou segura em todas as etapas. Excelente profissional."
  },
  {
    id: "test-3",
    client: "Chapolin Edits",
    transaction: "Conquista do Apartamento em Samambaia",
    rating: 5,
    quote: "Melhor corretor de Samambaia, me ajudou conquistar meu apartamento."
  }
];
