"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show notification badge/tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="mb-3 relative max-w-xs bg-[#161616] text-white p-3.5 rounded-2xl shadow-2xl border border-[#D4AF37]/30 backdrop-blur-md animate-fade-in flex items-start space-x-2">
          <div className="flex-1 text-xs">
            <p className="font-semibold text-[#D4AF37]">Carneiro Imobiliária</p>
            <p className="text-gray-300 mt-0.5">
              Olá! Como podemos te ajudar hoje? Encontre ou avalie seu imóvel agora.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={siteConfig.getWhatsAppLink("Olá! Gostaria de falar com o corretor da Carneiro Inteligência Imobiliária.")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_6px_35px_rgba(37,211,102,0.6)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Falar no WhatsApp"
        id="btn-whatsapp-floating"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4AF37]"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </a>
    </aside>
  );
}
