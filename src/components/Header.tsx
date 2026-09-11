"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Sobre o Corretor", href: "#sobre" },
    { name: "Imóveis", href: "#imoveis" },
    { name: "Avaliação Gratuita", href: "#avaliacao" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Top micro bar for authority */}
      <div className="hidden lg:block border-b border-white/5 pb-2 mb-2 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-[#D4AF37]">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              {siteConfig.creci}
            </span>
            <span className="text-gray-500">•</span>
            <span>{siteConfig.workingHours}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" />
              {siteConfig.phone}
            </a>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">{siteConfig.address.split(",")[0]}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center space-x-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D4AF37]/60 shadow-[0_0_12px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.jpg"
              alt="Carneiro Inteligência Imobiliária"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.2em] font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors">
              CARNEIRO
            </span>
            <span className="text-[9px] tracking-[0.28em] text-[#D4AF37] uppercase -mt-1 font-medium">
              Inteligência Imobiliária
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-[#D4AF37] transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={siteConfig.getWhatsAppLink("Olá! Gostaria de falar com o corretor especialista.")}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn-primary px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-bold flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <a
            href={siteConfig.getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-200 hover:text-[#D4AF37] focus:outline-none"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-gray-200 hover:text-[#D4AF37] py-2 border-b border-white/5 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={siteConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="gold-btn-primary w-full py-3 rounded-full text-center text-xs tracking-wider uppercase font-bold flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          <div className="text-center pt-2 text-xs text-gray-400">
            <p className="text-[#D4AF37] font-medium">{siteConfig.creci}</p>
            <p className="mt-1">{siteConfig.phone}</p>
          </div>
        </div>
      )}
    </header>
  );
}
