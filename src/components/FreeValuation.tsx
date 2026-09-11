"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import {
  FileText,
  Home,
  Building2,
  LandPlot,
  Store,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const valuationSchema = z.object({
  name: z.string().min(3, "Por favor, informe seu nome completo"),
  whatsapp: z.string().min(14, "Informe um WhatsApp válido com DDD"),
  email: z.string().email("Informe um e-mail válido"),
  address: z.string().min(5, "Informe o endereço ou condomínio do imóvel"),
  propertyType: z.enum(["Casa", "Apartamento", "Terreno", "Comercial"]),
  notes: z.string().optional(),
});

type ValuationFormData = z.infer<typeof valuationSchema>;

export function FreeValuation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ValuationFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ValuationFormData>({
    resolver: zodResolver(valuationSchema),
    defaultValues: {
      propertyType: "Apartamento",
      name: "",
      whatsapp: "",
      email: "",
      address: "",
      notes: "",
    },
  });

  const selectedType = watch("propertyType");

  // Format phone number with Brazilian mask: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    }
    setValue("whatsapp", value, { shouldValidate: true });
  };

  const onSubmit = async (data: ValuationFormData) => {
    // Simulate brief network submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmittedData(data);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F5DE87", "#FFFFFF"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const getSuccessWhatsAppUrl = () => {
    if (!submittedData) return siteConfig.getWhatsAppLink();
    const msg = `*Solicitação de Avaliação Gratuita*\n\n*Nome:* ${submittedData.name}\n*Tipo:* ${submittedData.propertyType}\n*Endereço:* ${submittedData.address}\n*WhatsApp:* ${submittedData.whatsapp}\n*E-mail:* ${submittedData.email}${
      submittedData.notes ? `\n*Obs:* ${submittedData.notes}` : ""
    }\n\nOlá! Acabei de preencher o formulário no site e gostaria da minha avaliação detalhada.`;
    return siteConfig.getWhatsAppLink(msg);
  };

  const propertyTypes = [
    { label: "Apartamento", icon: Building2 },
    { label: "Casa", icon: Home },
    { label: "Terreno", icon: LandPlot },
    { label: "Comercial", icon: Store },
  ] as const;

  return (
    <section id="avaliacao" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] relative overflow-hidden scroll-mt-24">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full gold-badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#F3E5AB] font-semibold">
              Análise de Mercado
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Quer saber quanto <span className="gold-text-gradient">vale seu imóvel?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Receba uma análise mercadológica fundamentada em transações reais recentes, sem custo e sem compromisso.
          </p>
        </div>

        {/* Form Container */}
        <div className="dark-card-glass rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/25 shadow-2xl relative">
          
          {isSubmitted && submittedData ? (
            /* Success Feedback View */
            <div className="text-center py-10 px-4 space-y-6 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="max-w-md mx-auto">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Obrigado, <strong className="text-[#F3E5AB]">{submittedData.name}</strong>. Nossa equipe já iniciou o levantamento de dados preliminar para o seu imóvel.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/5 max-w-md mx-auto text-left text-xs text-gray-400 space-y-1.5">
                <p><span className="text-gray-500">Tipo de Imóvel:</span> <strong className="text-white">{submittedData.propertyType}</strong></p>
                <p><span className="text-gray-500">Localização:</span> <strong className="text-white">{submittedData.address}</strong></p>
                <p><span className="text-gray-500">Retorno via WhatsApp:</span> <strong className="text-white">{submittedData.whatsapp}</strong></p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <a
                  href={getSuccessWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-btn-primary w-full py-4 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Acelerar pelo WhatsApp Agora</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    reset();
                  }}
                  className="w-full sm:w-auto text-xs text-gray-400 hover:text-white py-2 transition-colors"
                >
                  Enviar outro imóvel
                </button>
              </div>
            </div>
          ) : (
            /* Valuation Form */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Step 1: Property Type Selector */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                  1. Selecione o Tipo do Imóvel
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {propertyTypes.map(({ label, icon: Icon }) => (
                    <button
                      type="button"
                      key={label}
                      onClick={() => setValue("propertyType", label, { shouldValidate: true })}
                      className={`p-4 rounded-2xl border flex flex-col items-center justify-center transition-all duration-300 ${
                        selectedType === label
                          ? "bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "bg-[#0D0D0D] border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/40"
                      }`}
                    >
                      <Icon className={`w-6 h-6 mb-2 ${selectedType === label ? "text-[#D4AF37]" : "text-gray-400"}`} />
                      <span className="text-xs font-semibold">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Personal & Location Inputs */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                  2. Dados do Proprietário e Localização
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs text-gray-300 mb-1.5 font-medium">Nome Completo *</label>
                    <input
                      type="text"
                      placeholder="Ex: Roberto Carneiro"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors ${
                        errors.name ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.name.message}</span>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs text-gray-300 mb-1.5 font-medium">WhatsApp com DDD *</label>
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      {...register("whatsapp")}
                      onChange={handlePhoneChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors ${
                        errors.whatsapp ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.whatsapp && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.whatsapp.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-gray-300 mb-1.5 font-medium">E-mail *</label>
                    <input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors ${
                        errors.email ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs text-gray-300 mb-1.5 font-medium">Endereço / Condomínio / Bairro *</label>
                    <input
                      type="text"
                      placeholder="Ex: Condomínio Tamboré 2, Barueri"
                      {...register("address")}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors ${
                        errors.address ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.address && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.address.message}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 3: Observations */}
              <div>
                <label className="block text-xs text-gray-300 mb-1.5 font-medium">
                  Observações (Metragem aproximada, dormitórios, diferenciais ou reforma)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Imóvel recém-reformado, 4 suítes, vista livre, 3 vagas..."
                  {...register("notes")}
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
              </div>

              {/* Trust Badge */}
              <div className="flex items-center space-x-2 text-xs text-gray-400 py-1">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Seus dados são 100% confidenciais e protegidos sob sigilo profissional imobiliário.</span>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-btn-primary w-full py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  id="btn-submit-valuation"
                >
                  <FileText className="w-5 h-5 text-[#0D0D0D]" />
                  <span>{isSubmitting ? "Processando Análise..." : "Solicitar Avaliação Gratuita"}</span>
                  <ArrowRight className="w-4 h-4 text-[#0D0D0D]" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
