"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, FileText, Award, Star, TrendingUp, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background image with cinematic dark gradient overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Imóveis de Alto Padrão - Carneiro Inteligência Imobiliária"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.45] contrast-125 transition-transform duration-10000 hover:scale-100"
        />
        {/* Gradients to blend smoothly into dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#0D0D0D]/60 to-[#0D0D0D]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0D0D]/50 to-[#0D0D0D]/90" />
        
        {/* Subtle decorative gold ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center z-10">
        
        {/* Centerpiece Official Logo Badge */}
        <div className="relative mb-6 group cursor-default">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/50 via-[#F5DE87]/30 to-[#D4AF37]/50 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/70 shadow-[0_0_35px_rgba(212,175,55,0.35)] bg-[#0D0D0D]">
            <Image
              src="/images/logo.jpg"
              alt="Carneiro Inteligência Imobiliária"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Small gold eyebrow tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge mb-6">
          <Award className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#F3E5AB] font-semibold">
            Consultoria e Inteligência Imobiliária
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
          Transformando imóveis em{" "}
          <span className="gold-text-gradient underline decoration-[#D4AF37]/30 underline-offset-8">
            oportunidades.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
          Especialista em compra, venda e avaliação de imóveis utilizando inteligência de mercado e estratégias avançadas de negociação.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-16">
          <a
            href={siteConfig.getWhatsAppLink("Olá! Gostaria de conversar com um especialista da Carneiro Imóveis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn-primary w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase font-bold flex items-center justify-center space-x-3 shadow-xl"
            id="btn-hero-whatsapp"
          >
            <MessageCircle className="w-5 h-5 text-[#0D0D0D]" />
            <span>Falar no WhatsApp</span>
          </a>

          <Link
            href="#avaliacao"
            className="gold-btn-secondary w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase font-semibold flex items-center justify-center space-x-3"
            id="btn-hero-valuation"
          >
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span>Solicitar Avaliação Gratuita</span>
          </Link>
        </div>

        {/* Authority stats strip */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[#D4AF37] font-serif text-2xl sm:text-3xl font-bold">
              {siteConfig.metrics.negotiatedVolume}
            </span>
            <span className="text-xs text-gray-400 mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 text-[#D4AF37] mr-1" />
              Volume Negociado
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[#D4AF37] font-serif text-2xl sm:text-3xl font-bold">
              +{siteConfig.metrics.yearsOfExperience} Anos
            </span>
            <span className="text-xs text-gray-400 mt-1 flex items-center">
              <Award className="w-3 h-3 text-[#D4AF37] mr-1" />
              Expertise de Mercado
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[#D4AF37] font-serif text-2xl sm:text-3xl font-bold">
              {siteConfig.metrics.propertiesSold}
            </span>
            <span className="text-xs text-gray-400 mt-1 flex items-center">
              <ShieldCheck className="w-3 h-3 text-[#D4AF37] mr-1" />
              Imóveis Conduzidos
            </span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center text-[#D4AF37] font-serif text-2xl sm:text-3xl font-bold">
              <span>{siteConfig.metrics.googleRating}</span>
              <div className="flex text-[#D4AF37] ml-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">
              Google ({siteConfig.metrics.googleReviewCount} avaliações)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
