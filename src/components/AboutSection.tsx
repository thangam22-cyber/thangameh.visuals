import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { TRANSLATIONS, type Language } from '../data/translations';
import {
  Clock,
  Wrench,
  Cpu,
  Languages,
  MapPin,
  MessageSquare,
} from 'lucide-react';

interface AboutSectionProps {
  currentLanguage?: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLanguage = 'en' }) => {
  const t = TRANSLATIONS[currentLanguage].about;
  const isTamil = currentLanguage === 'ta';

  const icons = [Clock, Wrench, Cpu, Languages];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0E0F13]/70 border-t border-[#D4AF37]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Bio & Portrait, Right Feature Blocks & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-[360px] group">
              {/* Gold Viewfinder Corners that glow on card hover */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none z-20 group-hover:border-[#F5D77A] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.7)] transition-all duration-500" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none z-20 group-hover:border-[#F5D77A] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.7)] transition-all duration-500" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none z-20 group-hover:border-[#F5D77A] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.7)] transition-all duration-500" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none z-20 group-hover:border-[#F5D77A] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.7)] transition-all duration-500" />

              {/* Gentle Golden Glow Halo around the Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-[#D4AF37]/10 to-transparent rounded-3xl blur-2xl -z-10 group-hover:scale-105 group-hover:opacity-100 opacity-75 transition-all duration-700 pointer-events-none" />

              {/* Photo Frame Container (aspect-ratio 4/5) */}
              <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 bg-[#14151A] shadow-[0_20px_50px_rgba(0,0,0,0.85)] aspect-[4/5] group-hover:border-[#D4AF37]/70 transition-colors duration-500">
                {/* Real Profile Photo (Never stock or AI-generated) */}
                <img
                  src="/assets/aistudio/about-photo_ffa9d926.webp"
                  alt="Thangamani M, Visual Media Specialist, Tamil Nadu"
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Soft warm golden tone overlay (about 8% opacity) */}
                <div className="absolute inset-0 bg-[#D4AF37]/[0.08] pointer-events-none" />

                {/* Subtle dark-to-transparent gradient at bottom behind the name chip */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent pointer-events-none" />

                {/* Inset Badge with Legal Name, Location and PRO EDITOR */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#0B0B0D]/85 border border-[#D4AF37]/40 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="/assets/aistudio/thangameh-icon_b959e073.png"
                        alt="THANGAMEH – Visual Media Specialist"
                        className="h-10 w-auto object-contain flex-shrink-0"
                        style={{ filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.35))' }}
                      />
                      <div>
                        <h4 className="font-montserrat font-bold text-sm text-[#FAF6EC]">
                          {PORTFOLIO_CONFIG.owner.legalName}
                        </h4>
                        <p className="text-[11px] text-[#D4AF37] font-semibold flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{isTamil ? 'தமிழ்நாடு, இந்தியா' : PORTFOLIO_CONFIG.owner.location}</span>
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#FFF4D0] border border-[#D4AF37]/35 text-[10px] font-mono font-bold whitespace-nowrap">
                      {t.proEditorBadge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#A8A398]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span>{t.statusPill}</span>
            </div>
          </div>

          {/* Right Column: Bio, Numbers & 4 Feature Blocks */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
                <img
                  src="/assets/aistudio/thangameh-icon_b959e073.png"
                  alt="THANGAMEH – Visual Media Specialist"
                  className="h-4 sm:h-5 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.35))' }}
                />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#FAF6EC] leading-tight font-serif-heading">
                {isTamil ? (
                  <span className="text-gold-gradient">{t.title}</span>
                ) : (
                  <>Crafting Visuals That <span className="text-gold-gradient">Command Attention</span></>
                )}
              </h2>

              <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
                {t.bio}
              </p>
            </div>

            {/* Animated Counters Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-[#14151A] border border-[#D4AF37]/30">
              {[
                { value: '6+', label: t.stats.yearsExperience },
                { value: '10+', label: t.stats.videoStyles },
                { value: '23+', label: t.stats.originalDesigns },
                { value: '100%', label: t.stats.clientSatisfaction },
              ].map((stat, idx) => (
                <div key={idx} className="text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-cinzel text-gold-gradient">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#A8A398] font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Gold Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.features.map((block, idx) => {
                const Icon = icons[idx] || Clock;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#181A20]/80 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:bg-[#181A20] transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#F5D77A] group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded bg-black/40 border border-[#D4AF37]/20">
                        {block.stat}
                      </span>
                    </div>

                    <h4 className="font-montserrat font-bold text-sm text-[#FAF6EC] group-hover:text-[#F5D77A] transition-colors">
                      {block.title}
                    </h4>

                    <p className="text-xs text-[#A8A398] mt-1.5 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Contact WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={PORTFOLIO_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-pill px-7 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.ctaWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
