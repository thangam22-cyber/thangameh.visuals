import React, { useState, useEffect, useRef } from 'react';
import { PHOTO_DESIGNS, PhotoDesign, PORTFOLIO_CONFIG, BEFORE_AFTER_PAIRS } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import {
  ZoomIn,
  ZoomOut,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Image as ImageIcon,
  Maximize2,
  ArrowRight,
} from 'lucide-react';

type TabKey =
  | 'All'
  | 'Birthday'
  | 'Family & Frames'
  | 'Anniversary'
  | 'Wedding, Engagement & Maternity'
  | 'God & Devotional';

interface PhotoGallerySectionProps {
  currentLanguage?: Language;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  currentLanguage = 'en',
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('All');
  const [activeModalPhoto, setActiveModalPhoto] = useState<PhotoDesign | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const t = TRANSLATIONS[currentLanguage];

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const tabList: { key: TabKey; label: string }[] = [
    { key: 'All', label: t.photos.tabs.all },
    { key: 'Birthday', label: t.photos.tabs.birthday },
    { key: 'Family & Frames', label: t.photos.tabs.familyFrames },
    { key: 'Anniversary', label: t.photos.tabs.anniversary },
    { key: 'Wedding, Engagement & Maternity', label: t.photos.tabs.weddingEngagementMaternity },
    { key: 'God & Devotional', label: t.photos.tabs.godDevotional },
  ];

  const getTranslatedCategory = (cat: string) => {
    switch (cat) {
      case 'Birthday':
        return t.photos.tabs.birthday;
      case 'Family & Frames':
        return t.photos.tabs.familyFrames;
      case 'Anniversary':
        return t.photos.tabs.anniversary;
      case 'Wedding, Engagement & Maternity':
        return t.photos.tabs.weddingEngagementMaternity;
      case 'God & Devotional':
        return t.photos.tabs.godDevotional;
      default:
        return cat;
    }
  };

  // Calculate counts for each tab
  const getCount = (key: TabKey) => {
    if (key === 'All') return PHOTO_DESIGNS.length;
    return PHOTO_DESIGNS.filter((p) => p.category === key).length;
  };

  const filteredPhotos =
    activeTab === 'All'
      ? PHOTO_DESIGNS
      : PHOTO_DESIGNS.filter((p) => p.category === activeTab);

  // 6 Featured designs
  const featuredDesigns = PHOTO_DESIGNS.filter((p) => p.featured).slice(0, 6);

  // Lightbox keyboard controls: ESC, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalPhoto) return;

      if (e.key === 'Escape') {
        setActiveModalPhoto(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalPhoto, filteredPhotos]);

  const openModal = (photo: PhotoDesign) => {
    setActiveModalPhoto(photo);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setActiveModalPhoto(null);
    setIsZoomed(false);
  };

  const handleNextPhoto = () => {
    if (!activeModalPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activeModalPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActiveModalPhoto(filteredPhotos[nextIndex]);
    setIsZoomed(false);
  };

  const handlePrevPhoto = () => {
    if (!activeModalPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activeModalPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActiveModalPhoto(filteredPhotos[prevIndex]);
    setIsZoomed(false);
  };

  // Touch swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextPhoto();
    } else if (isRightSwipe) {
      handlePrevPhoto();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentModalIndex = activeModalPhoto
    ? filteredPhotos.findIndex((p) => p.id === activeModalPhoto.id)
    : -1;

  const orderWhatsAppUrl = (designTitle?: string) => {
    const text = designTitle
      ? `${t.whatsappMessages.lightboxOrder}"${designTitle}"`
      : t.whatsappMessages.posterOrder;
    return `https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="photo-designs" className="relative py-24 sm:py-32 bg-[#0E0F13]/60 border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t.photos.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-[#FAF6EC]">
            {currentLanguage === 'en' ? (
              <>
                Posters, Frames, Banners & <span className="text-gold-gradient">Ad Creatives</span>
              </>
            ) : (
              <span className="text-gold-gradient font-tamil-serif">{t.photos.title}</span>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
            {t.photos.subtitle}
          </p>

          {/* Quick Price Badge */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181A20]/90 border border-[#D4AF37]/40 text-xs font-mono font-bold text-[#F5D77A] shadow-[0_0_15px_rgba(212,175,55,0.15)] flex-wrap justify-center">
              <span>{t.photos.priceBadgePoster}</span>
              <span className="text-[#A8A398]">•</span>
              <span>{t.photos.priceBadgeAd}</span>
            </span>
          </div>
        </div>

        {/* Interactive Retouching Breakdown Before/After Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <BeforeAfterSlider pairs={BEFORE_AFTER_PAIRS} currentLanguage={currentLanguage} />
        </div>

        {/* 1. Featured Designs Strip (6 Best Designs) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#D4AF37]/20">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#F5D77A]" />
              <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-[#FAF6EC]">
                {t.photos.featuredHeading}{' '}
                <span className="text-[#D4AF37] text-sm font-mono font-normal">
                  {t.photos.featuredPicks}
                </span>
              </h3>
            </div>
            <span className="text-xs font-mono text-[#D4AF37] hidden sm:inline-block">
              {t.photos.featuredSub}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredDesigns.map((item) => {
              const itemTrans = (t.photos.items as Record<string, any>)[item.id] || {
                title: item.title,
                style: item.style,
                description: item.description,
                altText: item.altText,
              };

              return (
                <div
                  key={`featured-${item.id}`}
                  onClick={() => openModal(item)}
                  className="group relative rounded-xl overflow-hidden glass-gold-card border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex flex-col justify-between"
                >
                  <div className="relative aspect-[3/4] bg-black/60 overflow-hidden flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt={itemTrans.altText}
                      className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-black/85 text-[#F5D77A] border border-[#D4AF37]/40 backdrop-blur-sm">
                        {getTranslatedCategory(item.category).split(' ')[0]}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-5 h-5 text-[#FAF6EC] drop-shadow-md" />
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#14151A]/90 border-t border-[#D4AF37]/20">
                    <h4 className="text-[11px] font-bold text-[#FAF6EC] truncate group-hover:text-[#F5D77A] transition-colors">
                      {itemTrans.title}
                    </h4>
                    <p className="text-[10px] text-[#A8A398] truncate mt-0.5 font-mono">
                      #{item.fileNumber} • {itemTrans.style}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prominent Gold CTA Below Featured Designs */}
          <div className="mt-8 text-center">
            <a
              href={orderWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-pill inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.photos.featuredCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 2. Filter Tabs with Count Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabList.map((tab) => {
            const isActive = activeTab === tab.key;
            const count = getCount(tab.key);

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer inline-flex items-center gap-2 ${
                  isActive
                    ? 'btn-gold-pill shadow-[0_4px_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#181A20]/80 text-[#A8A398] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#FAF6EC]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[11px] font-mono font-bold ${
                    isActive
                      ? 'bg-black/40 text-black'
                      : 'bg-black/60 text-[#F5D77A] border border-[#D4AF37]/30'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. True Masonry Layout preserving original aspect ratio */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredPhotos.map((item) => {
            const itemTrans = (t.photos.items as Record<string, any>)[item.id] || {
              title: item.title,
              style: item.style,
              description: item.description,
              altText: item.altText,
            };
            const translatedCat = getTranslatedCategory(item.category);

            return (
              <div
                key={item.id}
                onClick={() => openModal(item)}
                className="break-inside-avoid mb-6 rounded-2xl overflow-hidden glass-gold-card border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 group cursor-pointer relative flex flex-col"
              >
                {/* Image Frame with 100% Natural Aspect Ratio */}
                <div className="relative bg-black/80 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={itemTrans.altText}
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02] brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />

                  {/* Subtle dark ambient vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none" />

                  {/* Top Corner Viewfinder Accents */}
                  <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Category & File Number Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/85 border border-[#D4AF37]/50 text-[#F5D77A] backdrop-blur-md shadow-sm">
                      {translatedCat}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#14151A]/85 border border-white/20 text-[#FAF6EC] backdrop-blur-sm">
                      #{item.fileNumber}
                    </span>
                  </div>

                  {/* Hover Center Zoom Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#181A20]/90 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-lg backdrop-blur-md">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-4 sm:p-5 space-y-2 bg-[#14151A]/95 border-t border-[#D4AF37]/20">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] font-semibold block">
                    {itemTrans.style}
                  </span>

                  <h3 className="font-montserrat font-bold text-sm sm:text-base text-[#FAF6EC] group-hover:text-[#F5D77A] transition-colors leading-snug">
                    {itemTrans.title}
                  </h3>

                  <p className="text-xs text-[#A8A398] line-clamp-2 leading-relaxed">
                    {itemTrans.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#D4AF37] border-t border-white/5">
                    <span className="text-[11px] font-mono text-[#A8A398] truncate max-w-[150px]">
                      {t.photos.cardPrintReady}
                    </span>
                    <span className="text-[#FAF6EC] text-[11px] font-mono font-bold">
                      {t.photos.cardOrderFrom}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Gold CTA Strip */}
        <div className="mt-16 text-center">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#181A20] via-[#1F222B] to-[#181A20] border border-[#D4AF37]/40 shadow-2xl max-w-4xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-[#FAF6EC]">
              {t.photos.bannerHeading}
            </h3>
            <p className="text-sm text-[#A8A398] max-w-xl mx-auto">
              {t.photos.bannerSubtitle}
            </p>
            <div className="pt-2">
              <a
                href={orderWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-pill inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_4px_25px_rgba(212,175,55,0.4)]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.photos.bannerCta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Fullscreen Lightbox Modal */}
      {activeModalPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-xl animate-fade-in"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Backdrop dismissal */}
          <div className="absolute inset-0" onClick={closeModal} />

          {/* Modal Container */}
          <div className="relative z-10 max-w-5xl w-full bg-[#14151A] border border-[#D4AF37]/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]">
            {/* Top Toolbar */}
            <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 pointer-events-auto">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 border border-[#D4AF37]/50 text-[#F5D77A] backdrop-blur-md">
                  {currentModalIndex + 1} / {filteredPhotos.length}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-black/80 border border-white/20 text-[#FAF6EC] backdrop-blur-md hidden sm:inline-block">
                  {getTranslatedCategory(activeModalPhoto.category)}
                </span>
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded-full bg-black/75 border border-[#D4AF37]/40 text-[#FAF6EC] hover:text-[#D4AF37] transition-all cursor-pointer"
                  title={isZoomed ? t.photos.lightbox.zoomOut : t.photos.lightbox.zoomIn}
                >
                  {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 rounded-full bg-black/75 border border-white/20 text-[#FAF6EC] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer"
                  title={t.photos.lightbox.close}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Left/Right Arrow Controls */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/75 border border-[#D4AF37]/40 text-[#FAF6EC] hover:text-[#D4AF37] hover:scale-110 transition-all cursor-pointer"
              title={t.photos.lightbox.prev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={handleNextPhoto}
              className="absolute right-3 md:right-[340px] top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/75 border border-[#D4AF37]/40 text-[#FAF6EC] hover:text-[#D4AF37] hover:scale-110 transition-all cursor-pointer"
              title={t.photos.lightbox.next}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo View Container */}
            <div
              className={`flex-1 bg-[#0B0B0D] flex items-center justify-center p-3 sm:p-6 min-h-[300px] md:min-h-[500px] overflow-auto select-none ${
                isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={activeModalPhoto.imageUrl}
                alt={
                  (t.photos.items as Record<string, any>)[activeModalPhoto.id]?.altText || activeModalPhoto.altText
                }
                className={`max-h-[78vh] w-auto max-w-full object-contain rounded-lg transition-transform duration-300 drop-shadow-2xl ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />
            </div>

            {/* Details Sidebar Column */}
            <div className="w-full md:w-80 p-5 sm:p-6 bg-[#14151A] flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#D4AF37]/20 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#D4AF37]/15 text-[#F5D77A] border border-[#D4AF37]/35 inline-block">
                    {getTranslatedCategory(activeModalPhoto.category)}
                  </span>
                  <span className="text-xs font-mono text-[#A8A398]">
                    #{activeModalPhoto.fileNumber}
                  </span>
                </div>

                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-[#FAF6EC]">
                  {(t.photos.items as Record<string, any>)[activeModalPhoto.id]?.title || activeModalPhoto.title}
                </h3>

                <p className="text-xs font-mono text-[#D4AF37]">
                  {(t.photos.items as Record<string, any>)[activeModalPhoto.id]?.style || activeModalPhoto.style}
                </p>

                <p className="text-xs text-[#A8A398] leading-relaxed">
                  {(t.photos.items as Record<string, any>)[activeModalPhoto.id]?.description ||
                    activeModalPhoto.description}
                </p>

                {/* Alt Text Note */}
                <div className="p-3 rounded-xl bg-[#181A20] border border-white/10 text-[11px] text-[#A8A398] space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#FAF6EC] font-bold block">
                    {t.photos.lightbox.altLabel}
                  </span>
                  <p className="italic">
                    {(t.photos.items as Record<string, any>)[activeModalPhoto.id]?.altText || activeModalPhoto.altText}
                  </p>
                </div>

                {/* Features Spec Box */}
                <div className="p-3.5 rounded-xl bg-[#181A20] border border-[#D4AF37]/25 text-xs space-y-1.5">
                  <div className="flex justify-between text-[#FAF6EC]">
                    <span>{t.photos.lightbox.printQualityLabel}</span>
                    <span className="text-[#F5D77A] font-bold">
                      {t.photos.lightbox.printQualityVal}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#FAF6EC]">
                    <span>{t.photos.lightbox.resolutionLabel}</span>
                    <span className="text-[#F5D77A] font-bold">
                      {t.photos.lightbox.resolutionVal}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#FAF6EC]">
                    <span>{t.photos.lightbox.deliveryLabel}</span>
                    <span className="text-[#F5D77A] font-bold">
                      {t.photos.lightbox.deliveryVal}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#FAF6EC]">
                    <span>{t.photos.lightbox.priceLabel}</span>
                    <span className="text-[#F5D77A] font-bold">
                      {t.photos.lightbox.priceVal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order on WhatsApp Button */}
              <div className="pt-6 space-y-2">
                <a
                  href={orderWhatsAppUrl(
                    (t.photos.items as Record<string, any>)[activeModalPhoto.id]?.title || activeModalPhoto.title
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-pill w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.photos.lightbox.orderWhatsapp}</span>
                </a>

                <div className="text-center">
                  <span className="text-[10px] font-mono text-[#A8A398]">
                    {t.photos.lightbox.keyboardHint}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
