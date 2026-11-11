import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
  glow?: boolean;
}

export const ThangamehLogo: React.FC<LogoProps> = ({
  size = 'md',
  showWordmark = true,
  showTagline = true,
  className = '',
  glow = true,
}) => {
  const iconDimensions = {
    sm: { imgClass: 'h-[36px]', textThangam: 'text-base', textTagline: 'text-[8.5px]' },
    md: { imgClass: 'h-[36px] lg:h-[44px]', textThangam: 'text-lg lg:text-xl', textTagline: 'text-[9px] lg:text-[10px]' },
    lg: { imgClass: 'h-[52px] lg:h-[64px]', textThangam: 'text-2xl lg:text-3xl', textTagline: 'text-xs' },
    xl: { imgClass: 'h-[72px] lg:h-[88px]', textThangam: 'text-3xl lg:text-4xl', textTagline: 'text-sm' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official THANGAMEH Icon on dark background with soft gold glow */}
      <div className="relative group flex-shrink-0">
        <img
          src="/assets/aistudio/thangameh-icon_b959e073.png"
          alt="THANGAMEH – Visual Media Specialist"
          className={`${iconDimensions.imgClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
          style={{
            filter: glow ? 'drop-shadow(0 0 24px rgba(212,175,55,0.35))' : 'none',
          }}
        />
      </div>

      {/* Wordmark and Tagline */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-montserrat font-extrabold tracking-[0.22em] text-gold-gradient uppercase leading-none drop-shadow-sm ${iconDimensions.textThangam}`}
            >
              THANGAMEH
            </span>
          </div>
          {showTagline && (
            <span
              className={`font-montserrat font-semibold tracking-[0.34em] text-[#C2A253] uppercase mt-1 leading-tight ${iconDimensions.textTagline}`}
            >
              VISUAL MEDIA SPECIALIST
            </span>
          )}
        </div>
      )}
    </div>
  );
};

