import React, { useEffect } from 'react';
import { VideoProject, PORTFOLIO_CONFIG } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';
import { X, ChevronLeft, ChevronRight, MessageCircle, ExternalLink, Clock, Tag } from 'lucide-react';

interface VideoModalProps {
  project: VideoProject | null;
  currentLanguage?: Language;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  project,
  currentLanguage = 'en',
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  const t = TRANSLATIONS[currentLanguage];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!project) return null;

  const description = (t.videos.descriptions as Record<string, string>)[project.id] || project.description;

  const whatsappProjectLink = `https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    `${t.whatsappMessages.videoDiscuss}"${project.title}" (${project.category})`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/92 backdrop-blur-2xl animate-fade-in"
    >
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1100px] max-h-[85vh] bg-[#14151A] border border-[#D4AF37]/45 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#D4AF37]/20 bg-[#0B0B0D]/90 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D4AF37]/20 text-[#FFF4D0] border border-[#D4AF37]/40">
              #{project.projectNumber}
            </span>

            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#181A20] text-[#F5D77A] border border-[#D4AF37]/30">
              {project.category}
            </span>

            <div className="flex items-center gap-1 text-xs text-[#A8A398]">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{project.duration}</span>
            </div>

            {project.isFanEdit && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {t.videos.fanEditBadge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={project.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-[#181A20] border border-[#D4AF37]/30 text-[#F5D77A] hover:bg-[#D4AF37]/20 transition-colors mr-1"
              title="Open video directly on Google Drive"
            >
              <span>Drive Link</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="p-1.5 rounded-lg bg-[#181A20] border border-[#D4AF37]/30 text-[#FAF6EC] hover:text-[#F5D77A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Previous project (Left arrow)"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="p-1.5 rounded-lg bg-[#181A20] border border-[#D4AF37]/30 text-[#FAF6EC] hover:text-[#F5D77A] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Next project (Right arrow)"
              aria-label="Next video"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#181A20] border border-red-500/30 text-[#FAF6EC] hover:red-400 hover:border-red-500/60 transition-colors ml-1 sm:ml-2"
              title={t.videos.modalClose}
              aria-label={t.videos.modalClose}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 16:9 Landscape Video Player Display Area */}
        <div className="bg-[#0B0B0D] relative flex items-center justify-center p-2 sm:p-4 flex-1 min-h-0 overflow-hidden">
          <div className="w-full aspect-video max-h-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#D4AF37]/40 relative shadow-2xl bg-black">
            <iframe
              src={project.embedUrl}
              title={project.title}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom Details & Direct Link Bar */}
        <div className="p-4 sm:p-5 bg-[#14151A] border-t border-[#D4AF37]/15 space-y-3 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h2 id="video-modal-title" className="text-base sm:text-lg font-bold font-montserrat text-[#FAF6EC] line-clamp-1">
                {project.title}
              </h2>
              <p className="text-xs text-[#A8A398] line-clamp-1 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={project.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline px-3.5 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5"
              >
                <span>Direct Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={whatsappProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-pill px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? 'Inquire' : 'விசாரிக்க'}</span>
              </a>
            </div>
          </div>

          {/* Tags row */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-[#A8A398]">
            <span className="text-[#D4AF37] font-semibold flex items-center gap-1 mr-1">
              <Tag className="w-3 h-3" />
              <span>{currentLanguage === 'en' ? 'Tags:' : 'டேக்ஸ்:'}</span>
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-[#181A20] border border-white/5"
              >
                #{(t.videos.tags as Record<string, string>)[tag] || tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
