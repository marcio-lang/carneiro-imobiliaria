"use client";

import Link from "next/link";
import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-[#D4AF37]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-16 text-center border-2 border-[#D4AF37]/40 bg-gradient-to-b from-[#181818] to-[#101010] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(212,175,55,0.15)] overflow-hidden">
          
          {/* Subtle gold ornamental corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/60 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]/60 rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-2xl pointer-events-none" />

          {/* Eyebrow badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold">
              Oportunidade de Mercado
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Pronto para fazer um{" "}
            <span className="gold-text-gradient">excelente negócio?</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-gray-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Entre em contato agora mesmo e descubra as melhores oportunidades do mercado imobiliário com assessoria especializada e sob medida.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={siteConfig.getWhatsAppLink("Olá! Gostaria de conversar agora sobre oportunidades imobiliárias.")}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn-primary w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase font-bold flex items-center justify-center space-x-3 shadow-xl"
              id="btn-final-whatsapp"
            >
              <MessageCircle className="w-5 h-5 text-[#0D0D0D]" />
              <span>Chamar no WhatsApp</span>
            </a>

            <Link
              href="#avaliacao"
              className="gold-btn-secondary w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase font-semibold flex items-center justify-center space-x-3"
              id="btn-final-schedule"
            >
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              <span>Agendar Atendimento</span>
            </Link>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-xs text-gray-400">
            Atendimento exclusivo e confidencial • {siteConfig.creci}
          </p>

        </div>
      </div>
    </section>
  );
}
