import React from 'react';
import { TRANSLATIONS, type Language } from '../data/translations';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessSectionProps {
  currentLanguage?: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ currentLanguage = 'en' }) => {
  const t = TRANSLATIONS[currentLanguage].process;
  const isTamil = currentLanguage === 'ta';

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif-heading tracking-tight text-[#FAF6EC]">
            {isTamil ? (
              <span className="text-gold-gradient">{t.title}</span>
            ) : (
              <>From Raw Idea to <span className="text-gold-gradient">Polished Gold</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Desktop & Tablet Timeline Grid */}
        <div className="relative">
          {/* Glowing Gold Horizontal Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#F5D77A] to-[#D4AF37]/20 shadow-[0_0_12px_rgba(212,175,55,0.6)] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-4 relative z-10">
            {t.steps.map((step, idx) => (
              <div
                key={step.step}
                className="glass-gold-card rounded-2xl p-5 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Step Circle with Golden Glow */}
                  <div className="flex items-center justify-between lg:justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#181A20] border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center font-cinzel font-bold text-sm text-[#F5D77A] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                      {step.step}
                    </div>

                    <span className="lg:hidden text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#F5D77A] border border-[#D4AF37]/30">
                      {isTamil ? `படி ${idx + 1} / 6` : `Step ${idx + 1} of 6`}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-base text-[#FAF6EC] group-hover:text-[#F5D77A] transition-colors text-left lg:text-center">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#A8A398] mt-2 leading-relaxed text-left lg:text-center">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D4AF37]/15 text-left lg:text-center">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-[#D4AF37]">
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                    <span>{step.highlight}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Guarantee Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#14151A]/80 border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#F5D77A] flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#FAF6EC]">
                {isTamil
                  ? 'ஒவ்வொரு ப்ராஜெக்ட்டுக்கும் 2 இலவச திருத்தங்கள் (Revisions) உண்டு'
                  : 'Every project includes 2 complimentary revision rounds'}
              </h4>
              <p className="text-xs text-[#A8A398]">
                {isTamil
                  ? 'முழு திருப்திக்குப் பிறகே இறுதி டெலிவரி. 100% நம்பகமானது.'
                  : 'Watermarked preview provided before final settlement. 100% peace of mind.'}
              </p>
            </div>
          </div>

          <a
            href="#pricing"
            className="text-xs font-bold text-[#D4AF37] hover:text-[#F5D77A] inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>{isTamil ? 'கட்டண விவரங்களைப் பார்க்க' : 'Explore Pricing'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
