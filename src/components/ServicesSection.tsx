import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem, PORTFOLIO_CONFIG } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';
import {
  Smartphone,
  Video,
  HeartHandshake,
  Sparkles,
  Image,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Wand2,
} from 'lucide-react';

interface ServicesSectionProps {
  currentLanguage?: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLanguage = 'en',
}) => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const t = TRANSLATIONS[currentLanguage];

  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#F5D77A]' };
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Image':
        return <Image {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            <Wand2 className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-[#FAF6EC]">
            {currentLanguage === 'en' ? (
              <>
                Bespoke <span className="text-gold-gradient">Visual Services</span>
              </>
            ) : (
              <span className="text-gold-gradient font-tamil-serif">{t.services.title}</span>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => {
            const isExpanded = expandedCardId === service.id;
            const itemKey = service.id as keyof typeof t.services.items;
            const itemTrans = t.services.items[itemKey] || {
              title: service.title,
              tagline: service.tagline,
              description: service.description,
              deliverables: service.deliverables,
            };

            return (
              <div
                key={service.id}
                className="glass-gold-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#181A20] to-[#121316] border border-[#D4AF37]/40 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:border-[#F5D77A] group-hover:scale-105 transition-all">
                      {getIcon(service.icon)}
                    </div>

                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#D4AF37] bg-[#181A20] px-2.5 py-1 rounded-full border border-[#D4AF37]/20 text-right">
                      {itemTrans.deliverables[0]}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[#FAF6EC] group-hover:text-[#F5D77A] transition-colors">
                    {itemTrans.title}
                  </h3>

                  <div className="mt-2 text-xs font-semibold text-[#D4AF37] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{itemTrans.tagline}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A8A398] mt-3 leading-relaxed">
                    {itemTrans.description}
                  </p>

                  {/* Expanded Deliverables Checklist */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#D4AF37]/20 space-y-2.5 animate-fade-in">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5D77A] font-bold">
                        {t.services.includedDeliverables}
                      </span>
                      <ul className="space-y-1.5">
                        {itemTrans.deliverables.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-[#FAF6EC]/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        <span className="text-[10px] text-[#A8A398] font-mono">{t.services.toolsLabel}</span>
                        {service.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0B0D] text-[#D4AF37] border border-[#D4AF37]/30"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-4 border-t border-[#D4AF37]/15 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-semibold text-[#A8A398] hover:text-[#FAF6EC] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? t.services.showLess : t.services.learnMore}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <a
                    href={`https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                      `${t.whatsappMessages.serviceInquire}${itemTrans.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#D4AF37] hover:text-[#F5D77A] inline-flex items-center gap-1 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t.services.inquire}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
