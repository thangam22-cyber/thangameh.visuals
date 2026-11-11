import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { TRANSLATIONS, type Language } from '../data/translations';
import { MessageCircle, Sparkles, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLanguage?: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLanguage = 'en' }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const t = TRANSLATIONS[currentLanguage].floatingWhatsapp;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Quick helper tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#14151A]/95 border border-[#D4AF37]/45 text-xs text-[#FAF6EC] shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77A] flex-shrink-0" />
          <span>
            {t.chatBubble}
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#A8A398] hover:text-white ml-1 cursor-pointer"
            title={currentLanguage === 'ta' ? 'மூடுக' : 'Dismiss'}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with pulsing ring */}
      <a
        href={PORTFOLIO_CONFIG.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857] text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] border border-[#D4AF37]/50 hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer"
        aria-label={t.ariaLabel}
      >
        {/* Pulsing beacon effect */}
        <span className="absolute -inset-1 rounded-full bg-[#10B981]/30 animate-ping -z-10" />

        <MessageCircle className="w-6 h-6 fill-current" />

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-[#0B0B0D]" />
      </a>
    </div>
  );
};
