import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_PAIRS, BeforeAfterPair } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';
import { Sparkles, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  pairs?: BeforeAfterPair[];
  currentLanguage?: Language;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  pairs = BEFORE_AFTER_PAIRS,
  currentLanguage = 'en',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);
  const isUserInteractingRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);

  const t = TRANSLATIONS[currentLanguage];
  const currentPair: BeforeAfterPair = pairs[currentIndex] || BEFORE_AFTER_PAIRS[0];

  // Auto-sweep animation on first scroll into view: 50% → 20% → 80% → 50%
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current && !isUserInteractingRef.current) {
          hasAnimatedRef.current = true;

          const duration = 2200; // ms total duration
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (isUserInteractingRef.current) return;
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            let pos = 50;
            if (progress < 0.25) {
              // 50% -> 20%
              const t = progress / 0.25;
              const ease = 0.5 - 0.5 * Math.cos(Math.PI * t);
              pos = 50 - 30 * ease;
            } else if (progress < 0.75) {
              // 20% -> 80%
              const t = (progress - 0.25) / 0.5;
              const ease = 0.5 - 0.5 * Math.cos(Math.PI * t);
              pos = 20 + 60 * ease;
            } else {
              // 80% -> 50%
              const t = (progress - 0.75) / 0.25;
              const ease = 0.5 - 0.5 * Math.cos(Math.PI * t);
              pos = 80 - 30 * ease;
            }

            setSliderPosition(pos);

            if (progress < 1) {
              animationFrameRef.current = requestAnimationFrame(animate);
            }
          };

          const timeout = setTimeout(() => {
            if (!isUserInteractingRef.current) {
              animationFrameRef.current = requestAnimationFrame(animate);
            }
          }, 350);

          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Update slider position from client X
  const updateSliderFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (clientX: number) => {
    isUserInteractingRef.current = true;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsDragging(true);
    updateSliderFromClientX(clientX);
  };

  // Global mouse listeners during dragging
  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      updateSliderFromClientX(e.clientX);
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, updateSliderFromClientX]);

  // Touch move handler
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updateSliderFromClientX(e.touches[0].clientX);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    isUserInteractingRef.current = true;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  const handlePrevPair = () => {
    setCurrentIndex((prev) => (prev - 1 + pairs.length) % pairs.length);
    setSliderPosition(50);
  };

  const handleNextPair = () => {
    setCurrentIndex((prev) => (prev + 1) % pairs.length);
    setSliderPosition(50);
  };

  const tagsToDisplay = t.photos.beforeAfter.tags || currentPair.tags;

  return (
    <div
      ref={sectionRef}
      className="glass-gold-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#D4AF37]/35 relative overflow-hidden shadow-2xl"
    >
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-[10px] font-mono uppercase font-bold tracking-widest text-[#D4AF37]">
          <Sparkles className="w-3 h-3 text-[#F5D77A]" />
          <span>{t.photos.beforeAfter.badge}</span>
        </div>

        <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#FAF6EC]">
          {t.photos.beforeAfter.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#A8A398] leading-relaxed max-w-lg mx-auto">
          {t.photos.beforeAfter.subtitle}
        </p>
      </div>

      {/* Comparison Frame (Centered 2:3 portrait ratio, max-height 80vh, object-fit cover perfectly aligned) */}
      <div className="flex justify-center w-full">
        <div
          ref={containerRef}
          role="slider"
          aria-label={t.photos.beforeAfter.ariaSlider}
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseDown={(e) => handlePointerDown(e.clientX)}
          onTouchStart={(e) => {
            if (e.touches.length > 0) {
              handlePointerDown(e.touches[0].clientX);
            }
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
          className="relative w-full max-w-[420px] aspect-[2/3] max-h-[80vh] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#D4AF37]/40 shadow-[0_0_35px_rgba(212,175,55,0.25)] bg-[#0B0B0D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5D77A]"
        >
          {/* AFTER Image (Full container backdrop) */}
          <img
            src={currentPair.afterSrc}
            alt={`After: ${currentPair.title}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            loading="eager"
          />

          {/* Right Label: AFTER • DESIGNED BY THANGAMEH */}
          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/85 border border-[#D4AF37]/50 text-[10px] sm:text-[11px] font-mono font-bold text-[#F5D77A] pointer-events-none shadow-lg backdrop-blur-md">
            {t.photos.beforeAfter.afterLabel}
          </div>

          {/* BEFORE Image (Clipped with exact polygon clip-path for 100% pixel-perfect alignment) */}
          <img
            src={currentPair.beforeSrc}
            alt={`Before: ${currentPair.title}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-10"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
            loading="eager"
          />

          {/* Left Label: BEFORE • ORIGINAL SCAN */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/85 border border-white/20 text-[10px] sm:text-[11px] font-mono font-bold text-[#A8A398] pointer-events-none shadow-lg backdrop-blur-md">
            {t.photos.beforeAfter.beforeLabel}
          </div>

          {/* Vertical Divider Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F5D77A] via-[#D4AF37] to-[#8C6A1A] z-20 pointer-events-none shadow-[0_0_15px_rgba(212,175,55,0.9)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Center Handle Knob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#181A20] border-2 border-[#F5D77A] shadow-[0_0_20px_rgba(212,175,55,0.8)] flex items-center justify-center text-[#F5D77A]">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* 3 Short Gold Chips Describing the Work */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
        {tagsToDisplay.map((tag, idx) => (
          <span
            key={idx}
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#181A20]/90 text-[#F5D77A] border border-[#D4AF37]/35 shadow-[0_0_12px_rgba(212,175,55,0.12)] flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>{tag}</span>
          </span>
        ))}
      </div>

      {/* Navigation Controls: Only rendered if pairs.length > 1 */}
      {pairs.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-white/5">
          <button
            type="button"
            onClick={handlePrevPair}
            className="p-2 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:text-[#FAF6EC] transition-all cursor-pointer"
            aria-label="Previous comparison pair"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {pairs.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setSliderPosition(50);
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 bg-gradient-to-r from-[#D4AF37] to-[#F5D77A]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNextPair}
            className="p-2 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:text-[#FAF6EC] transition-all cursor-pointer"
            aria-label="Next comparison pair"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Drag & Accessibility Hint */}
      <div className="text-center mt-4">
        <span className="text-[11px] font-mono text-[#A8A398]/80">
          {t.photos.beforeAfter.dragHint}
        </span>
      </div>
    </div>
  );
};
