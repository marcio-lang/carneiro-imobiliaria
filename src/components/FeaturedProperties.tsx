"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Maximize2, Bed, Bath, Car, ArrowRight, Sparkles } from "lucide-react";
import { featuredProperties } from "@/data/properties";
import { Property } from "@/types";
import { PropertyModal } from "./PropertyModal";

export function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const categories = ["Todos", "Alto Padrão", "Cobertura", "Residencial", "Investimento"];

  const filteredProperties = activeFilter === "Todos"
    ? featuredProperties
    : featuredProperties.filter((p) => p.category === activeFilter);

  const formatPrice = (value: number) => {
    if (!value || value === 0) return "Sob Consulta";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="imoveis" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] relative scroll-mt-24">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full gold-badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#F3E5AB] font-semibold">
              Curadoria Exclusiva
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Imóveis em <span className="gold-text-gradient">Destaque</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Oportunidades selecionadas com rigorosa análise de liquidez, valorização, segurança jurídica e padrão arquitetônico.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#B89222] text-[#0D0D0D] shadow-[0_4px_15px_rgba(212,175,55,0.3)] scale-105"
                  : "bg-[#161616] text-gray-300 hover:text-white border border-white/5 hover:border-[#D4AF37]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <article
              key={prop.id}
              className="dark-card-glass rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Photo Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-black/40">
                <Image
                  src={prop.imageUrl}
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                {/* Category and Status tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#0D0D0D]/80 text-[#F3E5AB] border border-[#D4AF37]/40 backdrop-blur-md">
                    {prop.category}
                  </span>
                  {prop.tag && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow-sm">
                      {prop.tag}
                    </span>
                  )}
                </div>

                {/* Price tag over photo */}
                <div className="absolute bottom-3 left-4 right-4 flex flex-col items-start">
                  {prop.pricePrefix && (
                    <span className="text-[11px] text-[#F3E5AB] drop-shadow font-medium tracking-wide">
                      {prop.pricePrefix}
                    </span>
                  )}
                  <span className="font-serif text-2xl font-bold text-white drop-shadow-md">
                    {formatPrice(prop.price)}
                  </span>
                </div>
              </div>

              {/* Property Specs Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-xs text-[#D4AF37] font-medium mb-2">
                    <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                    <span>{prop.neighborhood}, {prop.city}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors line-clamp-1 mb-4">
                    {prop.title}
                  </h3>

                  {/* 4 Key Spec Badges */}
                  <div className="grid grid-cols-4 gap-2 py-3 border-y border-white/5 text-center text-xs text-gray-300">
                    <div className="flex flex-col items-center">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37] mb-1" />
                      <span className="font-semibold text-white">
                        {typeof prop.area === "number" ? prop.area.toLocaleString("pt-BR") : prop.area} m²
                      </span>
                      <span className="text-[10px] text-gray-400">Área</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Bed className="w-3.5 h-3.5 text-[#D4AF37] mb-1" />
                      <span className="font-semibold text-white">{prop.bedrooms}</span>
                      <span className="text-[10px] text-gray-400">Quartos</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Bath className="w-3.5 h-3.5 text-[#D4AF37] mb-1" />
                      <span className="font-semibold text-white">{prop.bathrooms}</span>
                      <span className="text-[10px] text-gray-400">Banh.</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Car className="w-3.5 h-3.5 text-[#D4AF37] mb-1" />
                      <span className="font-semibold text-white">{prop.parkingSpaces}</span>
                      <span className="text-[10px] text-gray-400">Vagas</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedProperty(prop)}
                    className="w-full py-3 px-4 rounded-xl bg-[#1D1D1D] hover:bg-[#D4AF37] text-white hover:text-[#0D0D0D] border border-white/10 hover:border-[#D4AF37] text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-sm"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}
