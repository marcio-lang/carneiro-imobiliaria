"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, ExternalLink } from "lucide-react";
import { googleReviews } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 6 seconds if not paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === googleReviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === googleReviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = googleReviews[currentIndex];

  return (
    <section id="avaliacoes" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] relative overflow-hidden scroll-mt-24">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Brand Header with Carneiro Logo + Google Reviews Rating */}
        <div className="text-center flex flex-col items-center mb-16">
          
          <a
            href={siteConfig.googleShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 p-3 sm:px-6 sm:py-2.5 rounded-full bg-[#161616] hover:bg-[#1C1C1C] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 shadow-xl mb-6 transition-all duration-300 group cursor-pointer"
            title="Clique para ver nosso perfil oficial no Google Maps"
          >
            {/* Carneiro Logo */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/60 flex-shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.jpg"
                alt="Carneiro Inteligência Imobiliária"
                fill
                className="object-cover"
              />
            </div>

            <div className="h-4 w-[1px] bg-white/20" />

            {/* Google Multi-color G icon */}
            <div className="flex items-center space-x-1.5">
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span className="text-white font-bold text-sm tracking-tight">Google</span>
            </div>

            <div className="h-4 w-[1px] bg-white/20" />

            {/* Rating Stars & Value */}
            <div className="flex items-center space-x-1.5">
              <span className="font-serif font-bold text-white text-base sm:text-lg">
                {siteConfig.metrics.googleRating}/5
              </span>
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
            </div>
          </a>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Avaliações no <span className="gold-text-gradient">Google Business</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Nota <strong className="text-white">{siteConfig.metrics.googleRating} estrelas</strong> com base em{" "}
            <strong className="text-[#D4AF37]">{siteConfig.metrics.googleReviewCount} avaliações reais</strong> no Google para <em>Carneiro Corretor de Imóveis DF</em>.
          </p>
        </div>

        {/* Carousel Card */}
        <div
          className="relative dark-card-glass rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote mark accent */}
          <div className="absolute top-6 right-8 text-[#D4AF37]/15 pointer-events-none">
            <Quote className="w-20 h-20" />
          </div>

          <div className="relative z-10 flex flex-col justify-between min-h-[200px]">
            {/* Review Stars & Date */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <div className="flex items-center space-x-1 text-[#D4AF37]">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {currentReview.date}
              </span>
            </div>

            {/* Comment Text */}
            <p className="text-base sm:text-xl text-gray-200 font-serif italic leading-relaxed mb-8">
              &ldquo;{currentReview.comment}&rdquo;
            </p>

            {/* Review Author & Verification */}
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-lg">
                  {currentReview.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base flex items-center">
                    {currentReview.author}
                    {currentReview.verified && (
                      <span title="Avaliação Verificada" className="inline-flex items-center ml-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-gray-400">{currentReview.role || "Cliente Verificado"}</p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-[#161616] hover:bg-[#D4AF37] text-gray-300 hover:text-[#0D0D0D] border border-white/10 hover:border-[#D4AF37] transition-all"
                  aria-label="Avaliação anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-[#161616] hover:bg-[#D4AF37] text-gray-300 hover:text-[#0D0D0D] border border-white/10 hover:border-[#D4AF37] transition-all"
                  aria-label="Próxima avaliação"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {googleReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#D4AF37]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ir para avaliação ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* CTA to Google Search / Maps */}
        <div className="mt-8 text-center">
          <a
            href={siteConfig.googleShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#161616] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0D0D0D] border border-[#D4AF37]/30 text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md"
          >
            <span>Ver todas as {siteConfig.metrics.googleReviewCount} avaliações reais no Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
