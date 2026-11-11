import React, { useState } from 'react';
import { TRANSLATIONS, type Language } from '../data/translations';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  currentLanguage?: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLanguage = 'en' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = TRANSLATIONS[currentLanguage].faq;
  const isTamil = currentLanguage === 'ta';

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#0E0F13]/60 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif-heading tracking-tight text-[#FAF6EC]">
            {isTamil ? (
              <span className="text-gold-gradient">{t.title}</span>
            ) : (
              <>Frequently Asked <span className="text-gold-gradient">Questions</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`glass-gold-card rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#D4AF37]/60 shadow-[0_4px_25px_rgba(212,175,55,0.15)]' : 'border-[#D4AF37]/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-montserrat font-bold text-sm sm:text-base text-[#FAF6EC] flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full bg-[#181A20] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-black border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A8A398] leading-relaxed border-t border-[#D4AF37]/10 animate-fade-in pl-10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#14151A] border border-[#D4AF37]/25">
          <p className="text-sm text-[#FAF6EC] font-medium">
            {t.helpPrompt}
          </p>
          <a
            href="https://wa.me/918015169841?text=Hi%20THANGAMEH%2C%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#F5D77A] hover:underline mt-1 inline-flex items-center gap-1"
          >
            <span>{t.whatsappChat}</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
