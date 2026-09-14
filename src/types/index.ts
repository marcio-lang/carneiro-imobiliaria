export interface Property {
  id: string;
  title: string;
  category: 'Residencial' | 'Alto Padrão' | 'Cobertura' | 'Investimento' | 'Loteamento';
  neighborhood: string;
  city: string;
  price: number;
  pricePrefix?: string;
  tag?: string;
  area: number; // m²
  bedrooms?: number;
  suites?: number;
  bathrooms?: number;
  parkingSpaces?: number;
  downPayment?: string;
  installmentPayment?: string;
  brochureUrl?: string;
  imageUrl: string;
  galleryUrls?: string[];
  features: string[];
  description: string;
  isFeatured?: boolean;
}

export interface GoogleReview {
  id: string;
  author: string;
  role?: string;
  rating: number;
  date: string;
  comment: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  transaction: string;
  rating: number;
}

export interface ValuationFormData {
  name: string;
  whatsapp: string;
  email: string;
  address: string;
  propertyType: 'Casa' | 'Apartamento' | 'Terreno' | 'Comercial';
  intent: 'Vender' | 'Avaliar' | 'Alugar' | 'Investir';
  notes?: string;
}
