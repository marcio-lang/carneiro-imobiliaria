"use client";

import {
  BarChart3,
  UserCheck,
  Zap,
  Scale,
  Megaphone,
  Network,
  Sparkles
} from "lucide-react";

export function Differentials() {
  const differentials = [
    {
      icon: BarChart3,
      title: "Avaliação Inteligente",
      description: "Análise precisa baseada em dados reais de mercado, histórico de transações e tendências econômicas.",
      tag: "Dados & Métricas",
    },
    {
      icon: UserCheck,
      title: "Atendimento Personalizado",
      description: "Soluções exclusivas desenhadas para o perfil e objetivo de cada cliente, garantindo discrição e excelência.",
      tag: "Exclusividade",
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Processos rápidos, eficientes e desburocratizados para acelerar o fechamento de grandes negócios.",
      tag: "Tempo & Foco",
    },
    {
      icon: Scale,
      title: "Segurança Jurídica",
      description: "Acompanhamento minucioso de toda a documentação cartorária e contratual para blindagem total das partes.",
      tag: "Conformidade Legal",
    },
    {
      icon: Megaphone,
      title: "Estratégia Comercial",
      description: "Marketing digital e offline direcionado ao público qualificado com poder de compra comprovado.",
      tag: "Alcance Qualificado",
    },
    {
      icon: Network,
      title: "Rede de Relacionamentos",
      description: "Ampla carteira ativa de compradores, fundos de investimento e investidores privados de alto patrimônio.",
      tag: "Network Exclusivo",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] relative overflow-hidden scroll-mt-24">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full gold-badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#F3E5AB] font-semibold">
              Pilares de Excelência
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Por que escolher a{" "}
            <span className="gold-text-gradient">Carneiro Inteligência Imobiliária?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Combinamos inteligência analítica de dados, discrição corporativa e negociação de alto nível para proteger e valorizar o seu patrimônio.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="dark-card-glass rounded-2xl p-7 sm:p-8 relative group border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1F1B12] to-[#121212] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono text-[#D4AF37]/80 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-[#D4AF37]/70 font-medium group-hover:text-[#D4AF37] transition-colors">
                  <span>Padrão Carneiro</span>
                  <span className="mx-2">•</span>
                  <span>Inteligência de Mercado</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
