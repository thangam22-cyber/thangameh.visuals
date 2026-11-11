import React, { useState } from 'react';
import { TRANSLATIONS, type Language } from '../data/translations';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLanguage?: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLanguage = 'en' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = TRANSLATIONS[currentLanguage].testimonials;
  const isTamil = currentLanguage === 'ta';

  const items = t.items;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const activeTestimonial = items[currentIndex] || items[0];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
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
              <>Words From <span className="text-gold-gradient">Valued Clients</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-gold-card rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden text-center">
            {/* Background Decorative Gold Quote Mark */}
            <div className="absolute top-6 left-8 text-[#D4AF37]/15 pointer-events-none">
              <Quote className="w-20 h-20 rotate-180" />
            </div>

            {/* Clearly marked placeholder notice */}
            <div className="mb-6 inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[10px] font-mono text-[#F5D77A] tracking-wider">
              ✎ {t.sampleReviewNote}
            </div>

            {/* 5-Star Rating */}
            <div className="flex items-center justify-center gap-1.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="italic text-lg sm:text-2xl text-[#FAF6EC] leading-relaxed max-w-2xl mx-auto min-h-[100px] flex items-center justify-center font-serif-heading">
              "{activeTestimonial.quote}"
            </p>

            {/* Client Identity */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5D77A] to-[#8C6A1A] text-black font-cinzel font-bold text-sm flex items-center justify-center shadow-lg mb-3">
                {activeTestimonial.clientName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <h4 className="font-montserrat font-bold text-base text-[#FAF6EC]">
                {activeTestimonial.clientName}
              </h4>
              <p className="text-xs text-[#D4AF37] font-medium mt-0.5">
                {activeTestimonial.role} • {activeTestimonial.organization}
              </p>
              <span className="text-[11px] text-[#A8A398] mt-1 font-mono">
                {isTamil ? 'ப்ராஜெக்ட்: ' : 'Project: '} {activeTestimonial.projectType}
              </span>
            </div>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#181A20] border border-[#D4AF37]/40 text-[#FAF6EC] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:scale-110 flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label={isTamil ? "முந்தைய கருத்து" : "Previous testimonial"}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={isTamil ? `பக்கம் ${idx + 1}` : `Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#181A20] border border-[#D4AF37]/40 text-[#FAF6EC] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:scale-110 flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label={isTamil ? "அடுத்த கருத்து" : "Next testimonial"}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
