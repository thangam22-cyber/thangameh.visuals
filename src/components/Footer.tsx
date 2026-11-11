import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { TRANSLATIONS, type Language } from '../data/translations';
import {
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
  MessageCircle,
  ExternalLink,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  currentLanguage?: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage = 'en' }) => {
  const t = TRANSLATIONS[currentLanguage].footer;
  const nav = TRANSLATIONS[currentLanguage].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: nav.home, href: '#home' },
    { name: nav.work, href: '#work' },
    { name: nav.photoDesigns, href: '#photo-designs' },
    { name: nav.services, href: '#services' },
    { name: nav.process, href: '#process' },
    { name: nav.pricing, href: '#pricing' },
    { name: currentLanguage === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'FAQ', href: '#faq' },
    { name: nav.contact, href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#070709] border-t border-[#D4AF37]/25 overflow-hidden">
      {/* 1. Instagram Strip Above Footer */}
      <div className="relative py-10 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20 bg-gradient-to-r from-[#14151A] via-[#1A1815] to-[#14151A]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F5D77A]/20 via-[#D4AF37]/30 to-[#8C6A1A]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#F5D77A] shadow-[0_0_20px_rgba(212,175,55,0.25)] flex-shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold block">
                {currentLanguage === 'ta' ? 'தினசரி வீடியோ எடிட்டிங் & மேக்கிங் காட்சிகள்' : 'DAILY BEHIND-THE-SCENES & BREAKDOWNS'}
              </span>
              <h3 className="font-montserrat font-bold text-base sm:text-lg text-[#FAF6EC] mt-0.5">
                {t.instagramHeading}{' '}
                <span className="text-gold-gradient font-extrabold">{PORTFOLIO_CONFIG.contact.instagramHandle}</span>
              </h3>
            </div>
          </div>

          <a
            href={PORTFOLIO_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-pill px-6 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-2 whitespace-nowrap shadow-lg"
          >
            <Instagram className="w-4 h-4" />
            <span>{t.followInstagram}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Brand & Bio */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <a href="#home" className="inline-block group">
              <img
                src="/assets/aistudio/thangameh-logo-full_0b8dc4b9.png"
                alt="THANGAMEH – Visual Media Specialist"
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.35))' }}
              />
            </a>

            {/* Footer text-only logo */}
            <div className="pt-1">
              <img
                src="/assets/aistudio/thangameh-wordmark_a0c9138e.png"
                alt="THANGAMEH – Visual Media Specialist"
                className="h-7 sm:h-8 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.35))' }}
              />
            </div>

            <p className="text-xs sm:text-sm text-[#A8A398] max-w-sm leading-relaxed">
              {PORTFOLIO_CONFIG.owner.legalName} • {t.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium pt-1">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{currentLanguage === 'ta' ? 'தமிழ்நாடு, இந்தியா • உலகம் முழுவதும் சேவை' : 'Tamil Nadu, India • Working Worldwide'}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={PORTFOLIO_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181A20] border border-[#D4AF37]/35 text-[#F5D77A] hover:bg-[#D4AF37] hover:text-black hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:scale-110"
                title="Follow on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_CONFIG.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181A20] border border-[#D4AF37]/35 text-[#F5D77A] hover:bg-[#D4AF37] hover:text-black hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:scale-110"
                title="Connect on LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_CONFIG.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181A20] border border-[#D4AF37]/35 text-[#F5D77A] hover:bg-[#D4AF37] hover:text-black hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:scale-110"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181A20] border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:scale-110"
                title="WhatsApp Chat"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 text-left">
            <h4 className="font-serif-heading font-bold text-sm text-[#FAF6EC] uppercase tracking-wider mb-4 border-b border-[#D4AF37]/20 pb-2">
              {t.quickLinksHeading}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#A8A398] hover:text-[#F5D77A] transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]/60" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Quick List */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-serif-heading font-bold text-sm text-[#FAF6EC] uppercase tracking-wider mb-4 border-b border-[#D4AF37]/20 pb-2">
              {t.servicesHeading}
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A398]">
              {(currentLanguage === 'ta'
                ? [
                    'இன்ஸ்டாகிராம் ரீல்ஸ் (9:16)',
                    'ஈவென்ட் ப்ரோமோக்கள் (16:9 & 9:16)',
                    'திருமண வீடியோ அழைப்பிதழ்கள்',
                    '3D மெட்டாலிக் டைட்டில் அனிமேஷன்',
                    'போட்டோ ஃப்ரேம் & போஸ்டர் டிசைன்',
                  ]
                : [
                    'Instagram Reels (9:16)',
                    'Event Promos (16:9 & 9:16)',
                    'Wedding Video Invites',
                    '3D Metallic Title Reveals',
                    'Custom Poster Retouching',
                  ]
              ).map((service, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Bottom Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A398]">
          <p>{currentLanguage === 'ta' ? '© 2026 THANGAMEH. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' : '© 2026 THANGAMEH. All rights reserved.'}</p>

          <p className="flex items-center gap-1 font-tamil">
            <span>{currentLanguage === 'ta' ? 'தங்க தரம் வாய்ந்த வீடியோக்கள் • தமிழ்நாடு, இந்தியா' : 'Cinematic Gold Standard • Tamil Nadu, India'}</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181A20] border border-[#D4AF37]/35 text-[#D4AF37] hover:text-[#FFF4D0] hover:border-[#D4AF37] transition-all cursor-pointer group"
          >
            <span>{currentLanguage === 'ta' ? 'மேலே செல்ல' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
