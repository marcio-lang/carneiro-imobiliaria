import { Property } from "@/types";

/**
 * =======================================================================
 * GUIA: COMO CADASTRAR OU EDITAR IMÓVEIS NO SITE
 * =======================================================================
 * 1. FOTOS DO IMÓVEL:
 *    Coloque as fotos na pasta: public/images/
 *    Exemplo: public/images/meu-imovel-1.jpg
 *    No código abaixo, aponte para: "/images/meu-imovel-1.jpg"
 *
 * 2. CADASTRAR NOVO IMÓVEL:
 *    Copie o bloco de um imóvel existente, cole na lista abaixo e preencha:
 *    - id: identificador único (sem espaços nem acentos, ex: "apartamento-samambaia-sul")
 *    - title: Nome de destaque do imóvel
 *    - category: 'Alto Padrão' | 'Cobertura' | 'Residencial' | 'Investimento'
 *    - neighborhood: Nome do bairro (ex: "Samambaia Norte", "Águas Claras", "Lago Sul")
 *    - city: Cidade e Estado (ex: "Brasília - DF")
 *    - price: Valor numérico sem pontos nem R$ (ex: 750000 para R$ 750.000)
 *    - area: Metragem em m² (ex: 85)
 *    - bedrooms: Quantidade de quartos
 *    - suites: Quantidade de suítes
 *    - bathrooms: Quantidade de banheiros
 *    - parkingSpaces: Quantidade de vagas de garagem
 *    - imageUrl: Foto principal que aparece no card
 *    - galleryUrls: Lista de fotos para o carrossel quando o cliente clica em "Ver Detalhes"
 *    - features: Lista de diferenciais (piscina, varanda, armários, etc.)
 *    - description: Descrição completa e atrativa do imóvel
 *    - isFeatured: true ou false
 * =======================================================================
 */

export const featuredProperties: Property[] = [
  {
    id: "kyoto-residence-samambaia",
    title: "Kyoto Residence",
    category: "Residencial",
    neighborhood: "Samambaia (QS)",
    city: "Brasília - DF",
    price: 376860,
    pricePrefix: "A partir de",
    tag: "Obras 94% • Entrega Dez/2026",
    area: 57,
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parkingSpaces: 1,
    imageUrl: "/images/properties/kyoto/kyoto-sala-cozinha.jpg",
    galleryUrls: [
      "/images/properties/kyoto/kyoto-sala-cozinha.jpg",
      "/images/properties/kyoto/kyoto-sala-tv.jpg",
      "/images/properties/kyoto/kyoto-quarto-casal.jpg",
      "/images/properties/kyoto/kyoto-quarto-casal-tv.jpg",
      "/images/properties/kyoto/kyoto-quarto-escritorio.jpg",
      "/images/properties/kyoto/kyoto-corredor.jpg",
      "/images/properties/kyoto/kyoto-banheiro.jpg",
      "/images/properties/kyoto/kyoto-fachada.jpg",
    ],
    features: [
      "Unidades de 2 quartos (sendo 1 suíte) e 2 banheiros completos",
      "Plantas inteligentes de 56 m² a 57 m² com excelente iluminação",
      "Alto padrão de acabamento em todos os ambientes",
      "Cozinha americana integrada à sala com bancada gourmet em granito",
      "Obras em ritmo acelerado: 94% concluídas (Entrega em Dezembro/2026)",
      "1 vaga de garagem privativa",
      "Quarto de casal climatizado e opções com armários planejados",
      "Segundo quarto versátil para dormitório ou home office",
      "Edifício moderno com elevador e estrutura de lazer e segurança",
      "Localização privilegiada em Samambaia (QS)"
    ],
    description: "O Kyoto Residence traz para Samambaia um novo patamar de moradia e investimento. Apartamentos com alto padrão de acabamento a partir de R$ 376.860, com 57,00 m² de área privativa, 2 quartos (sendo 1 suíte), 2 banheiros e 1 vaga de garagem privativa. Empreendimento com obras 94% concluídas e entrega prevista para dezembro de 2026. Excelente oportunidade de valorização e qualidade de vida.",
    isFeatured: true,
  }
];
