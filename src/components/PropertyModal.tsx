"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, MapPin, Maximize2, Bed, Bath, Car, Check, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
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

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(property.price);

  const whatsappMessage = `Olá! Tenho interesse no imóvel "${property.title}" (${property.neighborhood} - ${property.city}), no valor de ${formattedPrice}. Gostaria de receber mais informações e agendar uma visita!`;

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

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0D0D0D]/80 text-[#F3E5AB] border border-[#D4AF37]/40 backdrop-blur-md">
                {property.category}
              </span>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? "border-[#D4AF37] scale-105" : "border-transparent opacity-60"
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
                <span className="text-xs text-gray-400 block uppercase tracking-wider">Valor de Investimento</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  {formattedPrice}
                </span>
              </div>
            </div>

            {/* Spec Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0D0D0D] border border-white/5">
              <div className="flex items-center space-x-3 p-2">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Área Privativa</p>
                  <p className="font-bold text-white">{property.area} m²</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Dormitórios</p>
                  <p className="font-bold text-white">{property.bedrooms} Quartos ({property.suites} Suítes)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Bath className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Banheiros</p>
                  <p className="font-bold text-white">{property.bathrooms} Banheiros</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Vagas Cobertas</p>
                  <p className="font-bold text-white">{property.parkingSpaces} Vagas</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Sobre a Propriedade
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
                Imóvel disponível para visitação exclusiva com hora marcada
              </div>

              <a
                href={siteConfig.getWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn-primary w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Visita via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
