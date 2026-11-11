import React, { useState, useEffect } from 'react';
import { ThangamehLogo } from './ThangamehLogo';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';
import { Menu, X, MessageSquare, ArrowUpRight, Globe } from 'lucide-react';

interface NavbarProps {
  currentLanguage: Language;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLanguage, onToggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = TRANSLATIONS[currentLanguage];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'work', 'photo-designs', 'services', 'process', 'pricing', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.work, href: '#work', id: 'work' },
    { name: t.nav.postersFrames, href: '#photo-designs', id: 'photo-designs' },
    { name: t.nav.services, href: '#services', id: 'services' },
    { name: t.nav.process, href: '#process', id: 'process' },
    { name: t.nav.pricing, href: '#pricing', id: 'pricing' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0D]/85 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
          >
            <ThangamehLogo size="md" />
          </a>

          {/* Desktop Navigation Links (No wrapping, clean single-line layout) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 bg-[#14151A]/60 px-3 xl:px-4 py-1.5 rounded-full border border-[#D4AF37]/20 backdrop-blur-md whitespace-nowrap flex-nowrap shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 rounded-full whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#FFF4D0]'
                      : 'text-[#A8A398] hover:text-[#FAF6EC]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F5D77A] rounded-full shadow-[0_0_8px_#D4AF37]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Button (Shows 'தமிழ்' in English mode and 'EN' in Tamil mode) */}
            <button
              onClick={onToggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#181A20]/80 border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all cursor-pointer"
              title={currentLanguage === 'en' ? 'தமிழில் படிக்க' : 'Switch to English'}
              aria-label={currentLanguage === 'en' ? 'Switch to Tamil language' : 'Switch to English language'}
            >
              <Globe className="w-3.5 h-3.5 text-[#F5D77A]" />
              <span>{currentLanguage === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>

            {/* "Hire Me" Gold Pill CTA Button */}
            <a
              href={PORTFOLIO_CONFIG.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-pill inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs xl:text-sm tracking-wider uppercase font-bold"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleLanguage}
              type="button"
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#181A20] border border-[#D4AF37]/40 text-[#D4AF37]"
              aria-label={currentLanguage === 'en' ? 'Switch to Tamil language' : 'Switch to English language'}
            >
              {currentLanguage === 'en' ? 'தமிழ்' : 'EN'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#FAF6EC] hover:text-[#F5D77A] bg-[#181A20] border border-[#D4AF37]/30 focus:outline-none"
              aria-label={t.nav.ariaMenuToggle}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0B0B0D]/95 backdrop-blur-2xl border-b border-[#D4AF37]/30">
          <div className="flex items-center justify-between p-5 border-b border-[#D4AF37]/20">
            <ThangamehLogo size="sm" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-[#FAF6EC]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-cinzel font-semibold tracking-wider text-[#FAF6EC] hover:text-gold-gradient transition-colors flex items-center justify-between py-2 border-b border-[#181A20]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span>{link.name}</span>
                <span className="text-[#D4AF37]/40 text-xs font-mono">0{index + 1}</span>
              </a>
            ))}

            <div className="pt-6 space-y-3">
              <a
                href={PORTFOLIO_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-pill w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.nav.hireMeWhatsapp}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-4 pt-4 text-xs text-[#A8A398]">
                <span>{t.nav.location}</span>
                <span>•</span>
                <span>+91 80151 69841</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
