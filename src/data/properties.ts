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
    id: "cidade-inteligente-parque-do-futuro",
    title: "Loteamento Cidade Inteligente - O Parque do Futuro",
    category: "Loteamento",
    neighborhood: "Região Metropolitana (a 22km de Samambaia)",
    city: "Entorno DF / Santo Antônio do Descoberto",
    price: 150000,
    pricePrefix: "Lotes a partir de",
    tag: "Entrada R$ 5 mil • Parcelas R$ 500",
    area: 300,
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    parkingSpaces: 0,
    downPayment: "R$ 5.000",
    installmentPayment: "R$ 500",
    brochureUrl: "/docs/revista-cidade-inteligente.pdf",
    imageUrl: "/images/properties/cidade-inteligente/cidade-inteligente-capa.jpg",
    galleryUrls: [
      "/images/properties/cidade-inteligente/cidade-inteligente-capa.jpg",
      "/images/properties/cidade-inteligente/gallery/02-lago-praia-artificial.jpg",
      "/images/properties/cidade-inteligente/gallery/03-mapa-linear-equipamentos.jpg",
      "/images/properties/cidade-inteligente/gallery/04-quadras-lazer-esportes.jpg",
      "/images/properties/cidade-inteligente/gallery/05-espaco-pet-tenis-kids.jpg",
      "/images/properties/cidade-inteligente/gallery/06-calcadao-ciclovia-estacionamento.jpg",
      "/images/properties/cidade-inteligente/gallery/07-capela-poupatempo-auditorio.jpg",
      "/images/properties/cidade-inteligente/gallery/08-secretarias-saude-educacao.jpg",
      "/images/properties/cidade-inteligente/gallery/09-batalhao-policia-militar-seguranca.jpg",
      "/images/properties/cidade-inteligente/gallery/10-masterplan-etapas-vendidas.jpg",
      "/images/properties/cidade-inteligente/gallery/11-mapa-localizacao-acessos.jpg",
      "/images/properties/cidade-inteligente/gallery/12-obras-reais-terraplenagem.jpg",
      "/images/properties/cidade-inteligente/gallery/13-obras-reais-estruturas.jpg",
      "/images/properties/cidade-inteligente/gallery/14-obras-reais-iluminacao-led-noturna.jpg",
    ],
    features: [
      "Lotes residenciais e comerciais a partir de 300 m² (os maiores da região)",
      "Condições facilitadas: Entrada de apenas R$ 5.000 e parcelas a partir de R$ 500",
      "O Parque do Futuro: Parque linear exclusivo com 1,7 km de extensão e 40m de largura",
      "Lago privativo com Praia Artificial de 30.000 m²",
      "Batalhão da Polícia Militar integrado com monitoramento por câmeras 24 horas",
      "Polo de serviços públicos: Poupatempo (Na Hora), Auditório e Capela Ecumênica",
      "Secretaria Municipal de Saúde e Secretaria de Educação dentro do bairro",
      "Complexo de esportes: Quadra de tênis, poliesportiva, 2 quadras de areia e campo de futebol",
      "Inclusão e lazer: Praça Azul (exclusiva TEA), Praça Infantil, Espaço Pet e Academia ao ar livre",
      "Mobilidade e bem-estar: Calçadão e ciclovia de 1,7 km com 16 bolsões de estacionamento (686 vagas)",
      "Obras aceleradas: 11.000 m² de galerias pluviais 100% concluídas e iluminação pública em LED instalada",
      "Loteamento 100% Legalizado: Alvará de Aprovação nº 001/2020 e Certidão de Matrícula",
      "Sucesso comprovado: 1ª Etapa e Etapa do Lago 100% Vendidas",
      "Localização estratégica: a apenas 22 km de Samambaia e a 20 minutos de Brasília"
    ],
    description: "O Loteamento Cidade Inteligente - O Parque do Futuro é o primeiro bairro planejado sob o conceito Smart City na região metropolitana do DF, realizado pela consagrada incorporadora FBZ (+19 anos e desenvolvedores do Singapura Shopping). Com lotes amplos a partir de 300 m², o projeto integra sustentabilidade, infraestrutura de primeiro mundo e lazer completo com lago e praia artificial de 30.000 m².\n\nO grande diferencial é 'O Parque do Futuro', um parque linear com 1,7 km de extensão que abriga ciclovia, quadras de tênis e esportes, praça TEA adaptada, espaço pet, e órgãos públicos consolidados como Secretarias de Saúde e Educação, Poupatempo Na Hora, Auditório e Batalhão da Polícia Militar com monitoramento 24h por câmeras.\n\nCom a 1ª Etapa e a Etapa do Lago 100% vendidas, galerias pluviais concluídas, iluminação LED funcionando e documentação 100% regularizada (Alvará nº 001/2020), esta é a maior oportunidade de valorização e segurança para sua família ou investimento. Lotes a partir de R$ 150.000, com entrada facilitada de R$ 5.000 e parcelas a partir de R$ 500.",
    isFeatured: true,
  },
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
