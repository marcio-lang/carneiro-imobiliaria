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
  },
  {
    id: "mansao-lago-sul-sunset",
    title: "Mansão Contemporânea Sunset Infinity",
    category: "Alto Padrão",
    neighborhood: "Lago Sul",
    city: "Brasília - DF",
    price: 8900000,
    area: 750,
    bedrooms: 5,
    suites: 5,
    bathrooms: 7,
    parkingSpaces: 6,
    imageUrl: "/images/property-1.jpg",
    galleryUrls: [
      "/images/property-1.jpg",
      "/images/property-2.jpg",
      "/images/property-3.jpg",
    ],
    features: [
      "Piscina aquecida com borda infinita e hidromassagem",
      "Espaço gourmet de padrão internacional integrado",
      "Automação residencial completa por voz e smartphone",
      "Adega climatizada para 350 rótulos",
      "Energia solar fotovoltaica sustentável",
      "Guarita blindada e circuito de segurança 24h",
      "Suíte master com closet duplo e banheira de imersão"
    ],
    description: "Extraordinária mansão de arquitetura contemporânea em uma das quadras mais nobres e seguras do Lago Sul. Living imponente com pé-direito duplo integrado ao deck com vista panorâmica. Um refúgio de sofisticação, conforto e privacidade absoluta.",
    isFeatured: true,
  },
  {
    id: "cobertura-duplex-noroeste",
    title: "Cobertura Duplex Panoramic View",
    category: "Cobertura",
    neighborhood: "Setor Noroeste",
    city: "Brasília - DF",
    price: 6450000,
    area: 480,
    bedrooms: 4,
    suites: 4,
    bathrooms: 6,
    parkingSpaces: 4,
    imageUrl: "/images/property-2.jpg",
    galleryUrls: [
      "/images/property-2.jpg",
      "/images/property-1.jpg",
      "/images/property-3.jpg",
    ],
    features: [
      "Piscina privativa no rooftop com cascata e solarium",
      "Escada helicoidal escultural",
      "Vista livre definitiva para o pôr do sol de Brasília",
      "Bancadas em mármore importado e projeto luminotécnico",
      "Home theater acústico exclusivo",
      "Elevador privativo que atende aos dois pisos",
      "Depósito individual privativo na garagem"
    ],
    description: "Exclusiva cobertura duplex no Setor Noroeste, o bairro ecológico mais nobre de Brasília. Espaços amplos, acabamentos de altíssimo padrão e área de lazer privativa no terraço superior, ideal para momentos memoráveis com família e amigos.",
    isFeatured: true,
  },
  {
    id: "residencia-park-way-nature",
    title: "Residência Bioclimática Bosque Privativo",
    category: "Residencial",
    neighborhood: "Park Way",
    city: "Brasília - DF",
    price: 4950000,
    area: 620,
    bedrooms: 4,
    suites: 4,
    bathrooms: 6,
    parkingSpaces: 4,
    imageUrl: "/images/property-3.jpg",
    galleryUrls: [
      "/images/property-3.jpg",
      "/images/property-1.jpg",
      "/images/property-2.jpg",
    ],
    features: [
      "Terreno privativo com paisagismo nativo do cerrado",
      "Piscina natural com prainha e deck em madeira de lei",
      "Brises térmicos arquitetônicos",
      "Espaço spa com sauna envidraçada",
      "Condomínio fechado com portaria 24 horas",
      "Localização privilegiada com fácil acesso ao aeroporto e Plano Piloto"
    ],
    description: "Residência contemporânea no Park Way projetada para integração orgânica entre os ambientes e a natureza exuberante. Grandes panos de vidro que embutem nas paredes, permitindo ventilação cruzada e iluminação natural incomparável.",
    isFeatured: true,
  },
  {
    id: "aguas-claras-investment",
    title: "Apartamento de Alto Padrão Park View",
    category: "Investimento",
    neighborhood: "Águas Claras / Samambaia",
    city: "Brasília - DF",
    price: 1850000,
    area: 195,
    bedrooms: 3,
    suites: 3,
    bathrooms: 4,
    parkingSpaces: 3,
    imageUrl: "/images/hero-bg.jpg",
    galleryUrls: [
      "/images/hero-bg.jpg",
      "/images/property-2.jpg",
      "/images/property-3.jpg",
    ],
    features: [
      "Varanda gourmet integrada com churrasqueira",
      "Acabamentos em porcelanato 120x120 e marcenaria planejada",
      "Lazer completo estilo resort no condomínio",
      "Andar alto com vista desimpedida",
      "Excelente liquidez e alto potencial de valorização",
      "Próximo a shoppings, metrô e principais vias de acesso"
    ],
    description: "Excelente opção tanto para moradia nobre quanto para blindagem patrimonial com ótima taxa de rentabilidade de locação. Condomínio moderno com infraestrutura completa de segurança e lazer.",
    isFeatured: false,
  }
];
