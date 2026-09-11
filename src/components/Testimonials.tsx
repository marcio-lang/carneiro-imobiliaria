"use client";

import { Star, Quote, Sparkles } from "lucide-react";
import { highlightedTestimonials } from "@/data/reviews";

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full gold-badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#F3E5AB] font-semibold">
              Histórias de Sucesso
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            O que nossos <span className="gold-text-gradient">clientes dizem</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            A satisfação dos nossos clientes é o nosso maior patrimônio e indicador de eficácia.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlightedTestimonials.map((item) => (
            <div
              key={item.id}
              className="dark-card-glass rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-[#D4AF37] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute -top-3 -left-2 -z-10" />
                  <p className="font-serif italic text-lg sm:text-xl text-gray-100 leading-relaxed group-hover:text-white transition-colors">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/5">
                <h4 className="font-bold text-white text-base font-serif">
                  {item.client}
                </h4>
                <p className="text-xs text-[#D4AF37] mt-0.5 font-medium">
                  {item.transaction}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
