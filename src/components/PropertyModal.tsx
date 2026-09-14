"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Maximize2,
  Bed,
  Bath,
  Car,
  Check,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Wallet,
  Coins,
  FileText
} from "lucide-react";
import { Property } from "@/types";
import { siteConfig } from "@/data/siteConfig";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (property) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const images = property.galleryUrls && property.galleryUrls.length > 0
    ? property.galleryUrls
    : [property.imageUrl];

  const formattedPrice = property.price && property.price > 0
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0,
      }).format(property.price)
    : "Sob Consulta";

  const priceText = property.price && property.price > 0
    ? ` ${property.pricePrefix ? property.pricePrefix.toLowerCase() : "no valor de"} ${formattedPrice}`
    : "";

  const whatsappMessage = property.category === "Loteamento"
    ? `Olá! Tenho interesse no "${property.title}" (${property.neighborhood} - ${property.city})${priceText}. Gostaria de mais informações sobre os lotes a partir de 300m², entrada de R$ 5 mil e parcelas de R$ 5 mil!`
    : `Olá! Tenho interesse no imóvel "${property.title}" (${property.neighborhood} - ${property.city})${priceText}. Gostaria de receber mais informações e agendar uma visita!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#141414] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[92vh] flex flex-col">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:text-[#D4AF37] hover:bg-black/90 border border-white/10 flex items-center justify-center transition-all duration-200"
          aria-label="Fechar detalhes do imóvel"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          {/* Main Photo Gallery Carousel */}
          <div className="relative h-72 sm:h-96 w-full bg-black">
            <Image
              src={images[activeImageIndex]}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />

            {/* Gallery Navigation arrows */}
            {images.length > 1 && (
              <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                  }}
                  className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-colors"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                  }}
                  className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-colors"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Category and tag badges */}
            <div className="absolute top-4 left-4 right-16 flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0D0D0D]/80 text-[#F3E5AB] border border-[#D4AF37]/40 backdrop-blur-md">
                {property.category}
              </span>
              {property.tag && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow-sm">
                  {property.tag}
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-4 right-4 flex space-x-2 overflow-x-auto pb-1 scrollbar-thin">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative flex-shrink-0 w-14 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? "border-[#D4AF37] scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="Miniatura" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Title, Location & Price */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center text-sm text-[#D4AF37] font-medium mb-1.5">
                  <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                  <span>{property.neighborhood}, {property.city}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {property.title}
                </h3>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs text-gray-400 block uppercase tracking-wider">
                  {property.pricePrefix || "Valor de Investimento"}
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  {formattedPrice}
                </span>
              </div>
            </div>

            {/* Spec Icons Grid */}
            {property.category === "Loteamento" || (!property.bedrooms && !property.bathrooms) ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-white/5">
                <div className="flex items-center space-x-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Tamanho dos Lotes</p>
                    <p className="font-bold text-white">
                      A partir de {typeof property.area === "number" ? property.area.toLocaleString("pt-BR") : property.area} m²
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Entrada Facilitada</p>
                    <p className="font-bold text-white">
                      {property.downPayment || "R$ 5.000"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Parcelamento</p>
                    <p className="font-bold text-white">
                      {property.installmentPayment ? `${property.installmentPayment} / mês` : "R$ 5.000 / mês"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Documentação</p>
                    <p className="font-bold text-emerald-300">
                      100% Legalizado
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-white/5">
                <div className="flex items-center space-x-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Área Privativa</p>
                    <p className="font-bold text-white">
                      {typeof property.area === "number" ? property.area.toLocaleString("pt-BR") : property.area} m²
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Dormitórios</p>
                    <p className="font-bold text-white">
                      {property.bedrooms} {property.bedrooms === 1 ? "Quarto" : "Quartos"}
                      {property.suites && property.suites > 0 ? ` (${property.suites} ${property.suites === 1 ? "Suíte" : "Suítes"})` : ""}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Bath className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Banheiros</p>
                    <p className="font-bold text-white">
                      {property.bathrooms} {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Vagas Cobertas</p>
                    <p className="font-bold text-white">
                      {property.parkingSpaces} {property.parkingSpaces === 1 ? "Vaga" : "Vagas"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Sobre a Propriedade
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features / Differentials list */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Destaques e Comodidades
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-200">
                    <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action bottom bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-400 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                Atendimento consultivo e plantão de vendas com CRECI-DF 34325
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                {property.brochureUrl && (
                  <a
                    href={property.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 bg-[#1C1C1C] hover:bg-[#252525] text-[#F3E5AB] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 shadow-sm"
                  >
                    <FileText className="w-4 h-4 text-[#D4AF37]" />
                    <span>Baixar Book (PDF)</span>
                  </a>
                )}

                <a
                  href={siteConfig.getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-btn-primary w-full sm:w-auto px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
