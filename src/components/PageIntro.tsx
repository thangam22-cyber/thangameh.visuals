import React, { useEffect, useState } from 'react';

interface PageIntroProps {
  onFinish?: () => void;
}

export const PageIntro: React.FC<PageIntroProps> = ({ onFinish }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while intro is playing
    document.body.style.overflow = 'hidden';

    // Start fade out after the logo fades in and light sweep completes
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1600);

    // Completely unmount and reveal site after smooth fade-out
    const finishTimer = setTimeout(() => {
      setIsComplete(true);
      document.body.style.overflow = '';
      if (onFinish) onFinish();
    }, 2200);

    const handleSkip = () => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsComplete(true);
        document.body.style.overflow = '';
        if (onFinish) onFinish();
      }, 300);
    };

    window.addEventListener('keydown', handleSkip, { once: true });
    window.addEventListener('click', handleSkip, { once: true });

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  if (isComplete) return null;

  return (
    <aside
      aria-label="Loading THANGAMEH"
      className={`fixed inset-0 z-[100] bg-[#0B0B0D] flex flex-col items-center justify-center transition-opacity duration-600 ease-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background gold glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#D4AF37]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Logo container with single light-sweep */}
      <div className="relative overflow-hidden p-6 rounded-2xl flex items-center justify-center">
        {/* Full Logo image */}
        <img
          src="/assets/aistudio/thangameh-logo-full_0b8dc4b9.png"
          alt="THANGAMEH – Visual Media Specialist"
          className="h-20 sm:h-28 md:h-36 w-auto object-contain transition-transform duration-700 ease-out"
          style={{
            filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.35))',
          }}
        />

        {/* Single gold light-sweep overlay */}
        <div
          className="absolute inset-0 pointer-events-none animate-gold-single-sweep"
          style={{
            background:
              'linear-gradient(105deg, transparent 20%, rgba(255,244,208,0.2) 40%, rgba(245,215,122,0.85) 50%, rgba(255,255,255,0.95) 52%, rgba(212,175,55,0.8) 55%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
      </div>
    </aside>
  );
};
