import React from 'react';
import { PORTFOLIO_CONFIG, PRICING_PLANS } from '../data/portfolioData';
import { TRANSLATIONS, type Language } from '../data/translations';
import { Check, Sparkles, MessageCircle, Clock, RotateCcw } from 'lucide-react';

interface PricingSectionProps {
  currentLanguage?: Language;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ currentLanguage = 'en' }) => {
  const t = TRANSLATIONS[currentLanguage].pricing;
  const isTamil = currentLanguage === 'ta';

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#0E0F13]/60 border-t border-[#D4AF37]/15 overflow-hidden">
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
              <>Transparent, <span className="text-gold-gradient">Value-Packed Pricing</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const planKey = plan.id as keyof typeof t.plans;
            const planTrans = t.plans[planKey] || {
              name: plan.name,
              idealFor: plan.idealFor,
              deliveryTime: plan.deliveryTime,
              revisions: plan.revisions,
              features: plan.features,
            };

            const whatsappPlanUrl = `https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              isTamil
                ? `வணக்கம் THANGAMEH, நான் "${planTrans.name}" (${plan.price}) பேக்கேஜில் எனது ப்ராஜெக்ட்டை தொடங்க விரும்புகிறேன்!`
                : `Hi THANGAMEH, I want to book the "${planTrans.name}" (${plan.price}) package for my project!`
            )}`;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-[#181A20] border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.25)] lg:-translate-y-3'
                    : 'glass-gold-card border border-[#D4AF37]/25'
                }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="btn-gold-pill px-4 py-1 rounded-full text-[10px] font-mono font-extrabold tracking-wider shadow-md whitespace-nowrap">
                      {t.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-montserrat font-bold text-xl text-[#FAF6EC]">
                      {planTrans.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#A8A398] mt-2 min-h-[36px]">
                    {planTrans.idealFor}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-5 pb-6 border-b border-[#D4AF37]/20 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-cinzel text-gold-gradient">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xs text-[#A8A398] font-mono">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Turnaround & Revisions Info */}
                  <div className="py-4 space-y-2 border-b border-[#D4AF37]/15 text-xs text-[#FAF6EC]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{planTrans.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{planTrans.revisions}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold block">
                      {t.includedHeading}
                    </span>
                    <ul className="space-y-2.5">
                      {planTrans.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8A398]">
                          <Check className="w-4 h-4 text-[#F5D77A] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="pt-4">
                  <a
                    href={whatsappPlanUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-full flex items-center justify-center gap-2 text-xs font-bold transition-all text-center ${
                      isPopular
                        ? 'btn-gold-pill'
                        : 'btn-gold-outline'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{t.chooseButton} {planTrans.name}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Poster Design Highlight & Terms Strip */}
        <div className="mt-14 max-w-4xl mx-auto space-y-4">
          {/* Quick Poster & Banner Strip */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#181A20] via-[#1F222B] to-[#181A20] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F5D77A] font-bold text-sm flex-shrink-0">
                ₹
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#FAF6EC]">
                  {t.quickBannerTitle}
                </h4>
                <p className="text-xs text-[#A8A398] mt-0.5">
                  {t.quickBannerSub}
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                isTamil
                  ? 'வணக்கம் THANGAMEH, நான் ஒரு போட்டோ ஃப்ரேம், போஸ்டர், பேனர் அல்லது விளம்பர டிசைன் ஆர்டர் செய்ய விரும்புகிறேன்!'
                  : 'Hi THANGAMEH, I want to order a photo frame, poster, banner or ad creative!'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-pill px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shadow-md hover:scale-105 transition-transform"
            >
              {t.quickBannerBtn}
            </a>
          </div>

          {/* Standard Terms & Custom Quote Note */}
          <div className="p-4 rounded-xl bg-[#14151A]/70 border border-white/5 text-center text-xs text-[#A8A398] leading-relaxed">
            <p className="text-[#FAF6EC] font-medium">
              {t.termsText}
            </p>
            <p className="text-[11px] text-[#A8A398] mt-1">
              {t.customQuoteText}{' '}
              <a href="#contact" className="text-[#F5D77A] underline hover:text-white">
                {t.customQuoteLink}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
