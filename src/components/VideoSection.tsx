import React, { useState } from 'react';
import { VIDEO_PROJECTS, VideoProject } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';
import { Play, Clock, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';

interface VideoSectionProps {
  currentLanguage?: Language;
  onOpenVideoModal: (project: VideoProject) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  currentLanguage = 'en',
  onOpenVideoModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [failedThumbs, setFailedThumbs] = useState<Record<string, boolean>>({});

  const t = TRANSLATIONS[currentLanguage];

  const categories = [
    { key: 'All', label: t.videos.tabs.all },
    { key: 'Event Promo', label: t.videos.tabs.eventPromo },
    { key: 'Wedding Invite', label: t.videos.tabs.weddingInvite },
    { key: 'Motion Title', label: t.videos.tabs.motionTitle },
    { key: 'Reels & Hype Edits', label: t.videos.tabs.reelsHype },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? VIDEO_PROJECTS
      : VIDEO_PROJECTS.filter((p) => p.category === activeCategory);

  const getCategoryCount = (catKey: string) => {
    if (catKey === 'All') return VIDEO_PROJECTS.length;
    return VIDEO_PROJECTS.filter((p) => p.category === catKey).length;
  };

  const getTranslatedCategory = (cat: string) => {
    switch (cat) {
      case 'Event Promo':
        return t.videos.tabs.eventPromo;
      case 'Wedding Invite':
        return t.videos.tabs.weddingInvite;
      case 'Motion Title':
        return t.videos.tabs.motionTitle;
      case 'Reels & Hype Edits':
        return t.videos.tabs.reelsHype;
      default:
        return cat;
    }
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative timeline divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative flex items-center justify-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          <div className="absolute px-4 bg-[#0B0B0D] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
              SHOWREEL // PORTFOLIO
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.videos.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-[#FAF6EC]">
            {currentLanguage === 'en' ? (
              <>
                Selected <span className="text-gold-gradient">Video Work</span>
              </>
            ) : (
              <span className="text-gold-gradient font-tamil-serif">{t.videos.badge}</span>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
            {t.videos.subtitle}
          </p>
        </div>

        {/* Filter Tabs with Count Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            const count = getCategoryCount(cat.key);
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'btn-gold-pill shadow-[0_4px_20px_rgba(212,175,55,0.4)]'
                    : 'bg-[#181A20]/80 text-[#A8A398] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#FAF6EC]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-black/30 text-[#0B0B0D]'
                      : 'bg-black/50 text-[#D4AF37] border border-[#D4AF37]/30'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Balanced Uniform 16:9 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.projectNumber === '01';
            const hasFailedThumb = failedThumbs[project.id];
            const description = (t.videos.descriptions as Record<string, string>)[project.id] || project.description;
            const translatedCat = getTranslatedCategory(project.category);

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCardId(project.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => onOpenVideoModal(project)}
                className={`glass-gold-card group rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 relative border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 ${
                  isFeatured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Media Preview Container with 16:9 Aspect Ratio */}
                <div className="relative w-full aspect-video overflow-hidden bg-[#0B0B0D]">
                  {!hasFailedThumb ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      onError={() =>
                        setFailedThumbs((prev) => ({ ...prev, [project.id]: true }))
                      }
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#181A20] via-[#0B0B0D] to-[#2B2310] flex flex-col items-center justify-center p-6 text-center select-none">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F5D77A] via-[#D4AF37] to-[#8C6A1A] text-[#0B0B0D] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.5)] mb-3 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current translate-x-0.5 text-[#0B0B0D]" />
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] font-bold">
                        {translatedCat}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#FAF6EC] mt-1.5 font-montserrat line-clamp-2 px-2">
                        {project.title}
                      </h4>
                      <span className="text-xs text-[#A8A398] mt-1 font-mono">
                        {project.duration}
                      </span>
                    </div>
                  )}

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14151A] via-transparent to-black/35 opacity-80 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 gap-1.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0B0B0D]/85 border border-[#D4AF37]/50 text-[#F5D77A] backdrop-blur-md">
                        #{project.projectNumber}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#0B0B0D]/85 border border-[#D4AF37]/40 text-[#FAF6EC] backdrop-blur-md">
                        {translatedCat}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/85 border border-white/15 text-[#FFF4D0] backdrop-blur-md">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      {project.duration}
                    </span>
                  </div>

                  {project.isFanEdit && (
                    <div className="absolute top-11 left-3 z-10">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-500/90 text-[#0B0B0D] shadow-md">
                        {t.videos.fanEditBadge}
                      </span>
                    </div>
                  )}

                  {/* Center Golden Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br from-[#F5D77A] via-[#D4AF37] to-[#8C6A1A] text-[#0B0B0D] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.65)] transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 sm:w-7 h-6 sm:h-7 fill-current translate-x-0.5 text-[#0B0B0D]" />
                    </div>
                  </div>

                  {/* Aspect Ratio Badge */}
                  <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-black/80 text-[#D4AF37] border border-[#D4AF37]/30">
                      {project.orientation}
                    </span>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-montserrat font-bold text-sm sm:text-base text-[#FAF6EC] group-hover:text-[#F5D77A] transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#A8A398] line-clamp-2 mt-1.5 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Tags & Action row */}
                  <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-[#A8A398] bg-[#14151A] px-2 py-0.5 rounded border border-white/5"
                        >
                          #{(t.videos.tags as Record<string, string>)[tag] || tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                      <span>{t.videos.watchButton}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Drive link helper strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#14151A]/85 border border-[#D4AF37]/30 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D4AF37]/20 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#F5D77A] flex-shrink-0">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-sm sm:text-base text-[#FAF6EC]">
                  {currentLanguage === 'en'
                    ? 'If a video does not load, open it directly'
                    : 'வீடியோ பிளே ஆகவில்லை என்றால் நேரடியாகத் திறக்கவும்'}
                </h4>
                <p className="text-xs text-[#A8A398] mt-0.5">
                  {currentLanguage === 'en'
                    ? 'Click any project link below to view the master cut directly in Google Drive.'
                    : 'கீழே உள்ள இணைப்பை கிளிக் செய்து Google Drive-ல் நேரடியாகப் பாருங்கள்.'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2.5">
            {VIDEO_PROJECTS.map((video) => (
              <a
                key={video.id}
                href={video.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-[#181A20] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#1F222B] transition-all text-xs"
                title={`Open ${video.title} on Google Drive`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="font-mono font-bold text-[#D4AF37] text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-[#D4AF37]/30 flex-shrink-0">
                    {video.projectNumber}
                  </span>
                  <span className="text-[#FAF6EC] group-hover:text-[#F5D77A] truncate font-medium">
                    {video.title.split('–')[0].trim()}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]/70 group-hover:text-[#F5D77A] flex-shrink-0 ml-1.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
