"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUp
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-[#080808] border-t border-[#D4AF37]/20 text-gray-400 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="#hero" className="flex items-center space-x-3 group w-fit">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/60 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Image
                  src="/images/logo.jpg"
                  alt="Carneiro Inteligência Imobiliária"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                  CARNEIRO
                </span>
                <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase -mt-1 font-medium">
                  Inteligência Imobiliária
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Official CRECI Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#141414] border border-[#D4AF37]/30 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono font-medium">{siteConfig.creci}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141414] hover:bg-[#D4AF37] hover:text-[#0D0D0D] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141414] hover:bg-[#D4AF37] hover:text-[#0D0D0D] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141414] hover:bg-[#D4AF37] hover:text-[#0D0D0D] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-serif font-bold text-base tracking-wide uppercase">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#hero" className="hover:text-[#D4AF37] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="hover:text-[#D4AF37] transition-colors">
                  Diferenciais Competitivos
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#D4AF37] transition-colors">
                  Sobre o Corretor
                </Link>
              </li>
              <li>
                <Link href="#imoveis" className="hover:text-[#D4AF37] transition-colors">
                  Imóveis em Destaque
                </Link>
              </li>
              <li>
                <Link href="#avaliacao" className="hover:text-[#D4AF37] transition-colors">
                  Avaliação Gratuita
                </Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-[#D4AF37] transition-colors">
                  Avaliações Google Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-serif font-bold text-base tracking-wide uppercase">
              Contatos & Localização
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-gray-300">{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-[#D4AF37] transition-colors text-gray-300">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={siteConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors text-gray-300"
                >
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#D4AF37] transition-colors text-gray-300">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs text-gray-500">
                Horário de Atendimento: {siteConfig.workingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Carneiro Inteligência Imobiliária. Todos os direitos reservados.
          </p>

          <div className="flex items-center space-x-6">
            <span className="hover:text-gray-400 cursor-pointer">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Política de Privacidade</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center hover:text-[#D4AF37] transition-colors"
              aria-label="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
