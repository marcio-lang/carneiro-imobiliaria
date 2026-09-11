"use client";

import Image from "next/image";
import { ShieldCheck, Award, TrendingUp, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AboutRealtor() {
  return (
    <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] relative overflow-hidden scroll-mt-24">
      {/* Background ambient accents */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Realtor Portrait with luxury framing */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative gold accent borders */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#161616]">
                <Image
                  src="/images/realtor.png"
                  alt="Corretor G. S. Carneiro - Carneiro Inteligência Imobiliária"
                  fill
                  className="object-cover object-top filter contrast-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />

                {/* Bottom photo overlay caption */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D0D0D]/85 backdrop-blur-md border border-[#D4AF37]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-serif font-bold text-lg">{siteConfig.realtorName}</h4>
                      <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
                        Consultor & Estrategista Imobiliário
                      </p>
                    </div>
                    <div className="flex items-center text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30 text-xs font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                      {siteConfig.creci}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-[#161616] border border-[#D4AF37]/40 shadow-2xl backdrop-blur-xl flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Atuação Imobiliária</p>
                  <p className="text-white font-serif font-bold text-base">+{siteConfig.metrics.yearsOfExperience} Anos de Mercado</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio, Vision and Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center mt-6 lg:mt-0">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full gold-badge w-fit mb-4">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#F3E5AB] font-semibold">
                Autoridade & Credibilidade
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Quem está por trás da{" "}
              <span className="gold-text-gradient">Carneiro Inteligência Imobiliária?</span>
            </h2>

            <div className="mt-6 space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Profissional especializado em consultoria imobiliária, focado em gerar resultados através da combinação de tecnologia, análise de mercado e atendimento personalizado.
              </p>
              <p>
                Trabalhando com transparência, segurança e inteligência para proporcionar as melhores oportunidades aos clientes — seja na aquisição do imóvel ideal, na blindagem patrimonial através de investimentos sólidos ou na liquidez rápida de patrimônio imobiliário de alto padrão.
              </p>
            </div>

            {/* Checklist items */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Consultoria baseada em inteligência preditiva</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Acompanhamento do início ao pós-escritura</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">Total sigilo e discrição nas negociações</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">CRECI 34325 ativo com rigorosa conformidade legal</span>
              </div>
            </div>

            {/* Quick stats and CTA */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37]">
                    {siteConfig.metrics.propertiesSold}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1 text-[#D4AF37]" />
                    Imóveis Negociados
                  </p>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37]">
                    {siteConfig.metrics.negotiatedVolume}
                  </p>
                  <p className="text-xs text-gray-400">Em VGV Transacionado</p>
                </div>
              </div>

              <a
                href={siteConfig.getWhatsAppLink("Olá! Gostaria de agendar uma reunião de consultoria com o corretor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn-primary px-6 py-3.5 rounded-full text-xs tracking-wider uppercase font-bold flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Consultoria</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
