import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, VIDEO_PROJECTS, VideoProject } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';
import { MessageCircle, Play, Sparkles, ShieldCheck, Zap, Award, Film } from 'lucide-react';

interface HeroSectionProps {
  currentLanguage: Language;
  onOpenVideoModal: (project: VideoProject) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLanguage, onOpenVideoModal }) => {
  const [thumbError, setThumbError] = useState(false);

  const t = TRANSLATIONS[currentLanguage];

  // Video 03 (ARAMBHIKALAMA 2025 – Technical Quiz Promo) for the 16:9 cinematic landscape showreel
  const featuredVideo =
    VIDEO_PROJECTS.find((v) => v.projectNumber === '03' || v.id === 'arambhi-kalama-2025') ||
    VIDEO_PROJECTS[2];

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden">
      {/* Decorative Glow Core */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-[#D4AF37]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 text-left space-y-6 z-10">
            {/* THANGAMEH Full Brand Logo */}
            <div className="inline-block">
              <img
                src="/assets/aistudio/thangameh-logo-full_0b8dc4b9.png"
                alt="THANGAMEH – Visual Media Specialist"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.35))' }}
              />
            </div>

            {/* Small Gold Pill Badge (Tagline stays in English as specified) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181A20]/90 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="font-montserrat font-bold tracking-[0.2em] text-[10px] sm:text-xs text-gold-gradient uppercase">
                {t.hero.tagline}
              </span>
              <span className="text-[#A8A398]/60 text-xs">•</span>
              <span className="text-[10px] sm:text-xs text-[#FAF6EC]/80 font-medium">
                {t.hero.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight font-cinzel leading-[1.12]">
              {currentLanguage === 'en' ? (
                <>
                  <span className="block text-[#FAF6EC]">{t.hero.headlineLine1}</span>
                  <span className="block text-gold-gradient drop-shadow-md">{t.hero.headlineLine2}</span>
                </>
              ) : (
                <>
                  <span className="block text-gold-gradient drop-shadow-md font-tamil-serif leading-tight">
                    {t.hero.headlineLine1} {t.hero.headlineLine2}
                  </span>
                </>
              )}
            </h1>

            {/* 60px Thin Gold Gradient Line */}
            <div className="w-[60px] h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent mt-3 mb-1" />

            {/* Clean Professional Service Line */}
            <div className="py-0.5 animate-fade-in font-montserrat font-medium text-xs sm:text-sm md:text-[15px] uppercase tracking-[0.18em] text-[#E9E2CC] leading-relaxed">
              {currentLanguage === 'en' ? (
                <div className="flex flex-wrap items-center">
                  <span>Video Editing</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none">•</span>
                  <span>Reels</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none">•</span>
                  <span>Posters</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none">•</span>
                  <span>Frames</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none">•</span>
                  <span>Banners</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none">•</span>
                  <span>Ad Creatives</span>
                </div>
              ) : (
                <div className="flex flex-wrap items-center font-tamil tracking-normal normal-case">
                  <span>வீடியோ எடிட்டிங்</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none font-sans">•</span>
                  <span>ரீல்ஸ்</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none font-sans">•</span>
                  <span>போஸ்டர்</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none font-sans">•</span>
                  <span>ஃப்ரேம்</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none font-sans">•</span>
                  <span>பேனர்</span>
                  <span className="text-[#D4AF37] mx-2 sm:mx-3 select-none font-sans">•</span>
                  <span>விளம்பர டிசைன்கள்</span>
                </div>
              )}
            </div>

            {/* Sub-text */}
            <p className="text-sm sm:text-lg text-[#A8A398] max-w-xl font-normal leading-relaxed">
              {t.hero.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="button"
                onClick={scrollToWork}
                className="btn-gold-pill px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-2.5 font-bold cursor-pointer"
              >
                <Film className="w-4 h-4" />
                <span>{t.hero.viewMyWork}</span>
              </button>

              <a
                href={PORTFOLIO_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-2.5 font-semibold cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.hero.startProject}</span>
              </a>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#A8A398]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.hero.revisionsBadge}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.hero.fastDeliveryBadge}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.hero.qualityBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic 16:9 Landscape Screen Frame */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end z-10 mt-6 lg:mt-0">
            <div className="relative group w-full max-w-xl">
              {/* External Viewfinder Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none z-20" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none z-20" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none z-20" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none z-20" />

              {/* Soft Golden Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 to-[#8C6A1A]/15 rounded-2xl sm:rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />

              {/* Cinematic Landscape 16:9 Screen Frame */}
              <div
                onClick={() => onOpenVideoModal(featuredVideo)}
                className="w-full aspect-video rounded-2xl sm:rounded-3xl bg-[#14151A] p-2 sm:p-2.5 shadow-[0_15px_50px_rgba(0,0,0,0.9)] border border-[#D4AF37]/50 relative overflow-hidden backdrop-blur-xl cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.25))',
                }}
              >
                {/* Inner Screen Surface */}
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative bg-[#0B0B0D]">
                  {/* Inside corner viewfinder brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] z-20 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] z-20 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] z-20 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] z-20 pointer-events-none" />

                  {/* Video 03 Thumbnail with slow Ken Burns zoom */}
                  {!thumbError ? (
                    <img
                      src={featuredVideo.thumbnail}
                      alt={featuredVideo.title}
                      onError={() => setThumbError(true)}
                      className="w-full h-full object-cover animate-ken-burns brightness-95 group-hover:brightness-105 transition-all"
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#181A20] via-[#0B0B0D] to-[#2B2310] flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F5D77A] via-[#D4AF37] to-[#8C6A1A] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)] mb-2">
                        <Play className="w-6 h-6 fill-current text-[#0B0B0D] translate-x-0.5" />
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold">
                        {t.hero.featuredShowreel}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#FAF6EC] mt-1 font-montserrat">
                        {featuredVideo.title}
                      </h4>
                    </div>
                  )}

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-black/40 pointer-events-none" />

                  {/* Top Live Bar */}
                  <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 border border-[#D4AF37]/50 text-[10px] font-mono uppercase tracking-wider text-[#F5D77A] backdrop-blur-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      {t.hero.recPromo}
                    </span>

                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 border border-white/10 text-[10px] font-mono text-[#FAF6EC] backdrop-blur-md">
                      {featuredVideo.duration}
                    </span>
                  </div>

                  {/* Center Pulsing Gold Play Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenVideoModal(featuredVideo);
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group/play z-20 cursor-pointer"
                    aria-label={`Play showreel preview: ${featuredVideo.title}`}
                  >
                    <span className="absolute -inset-3 rounded-full bg-[#D4AF37] opacity-45 animate-ping pointer-events-none" />
                    <span className="relative w-16 sm:w-18 h-16 sm:h-18 rounded-full bg-gradient-to-br from-[#F5D77A] via-[#D4AF37] to-[#8C6A1A] text-[#0B0B0D] flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.75)] group-hover/play:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 text-[#0B0B0D]" />
                    </span>
                  </button>

                  {/* Bottom Video Metadata */}
                  <div className="absolute bottom-3 left-4 right-4 z-20 text-left pointer-events-none">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                      {featuredVideo.category} • {featuredVideo.duration}
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#FAF6EC] truncate mt-0.5 font-montserrat">
                      {featuredVideo.title}
                    </h3>
                    <div className="mt-1 text-[11px] font-bold text-[#F5D77A] flex items-center gap-1">
                      <span>{t.hero.clickToPlay}</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip Below Hero */}
      <div className="w-full border-y border-[#D4AF37]/20 bg-[#14151A]/70 backdrop-blur-md py-4 mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around gap-y-3 text-xs sm:text-sm font-medium tracking-wider text-[#A8A398]">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37] font-bold font-cinzel text-base">6+</span>
              <span className="text-[#FAF6EC]">{t.hero.trustYears}</span>
            </div>
            <span className="text-[#D4AF37]/50 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37] font-bold font-cinzel text-base">10+</span>
              <span className="text-[#FAF6EC]">{t.hero.trustStyles}</span>
            </div>
            <span className="text-[#D4AF37]/50 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37] font-bold font-cinzel text-base">23</span>
              <span className="text-[#FAF6EC]">{t.hero.trustDesigns}</span>
            </div>
            <span className="text-[#D4AF37]/50 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#FAF6EC]">{t.hero.trustDelivery}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
