import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { TRANSLATIONS, Language } from '../data/translations';
import { Cpu, Film, Sparkles, Music, Scissors } from 'lucide-react';

interface ToolsMarqueeProps {
  currentLanguage?: Language;
}

export const ToolsMarquee: React.FC<ToolsMarqueeProps> = ({ currentLanguage = 'en' }) => {
  const t = TRANSLATIONS[currentLanguage];

  const getToolIcon = (name: string) => {
    if (name.includes('CapCut') || name.includes('InShot')) return <Scissors className="w-3.5 h-3.5 text-[#F5D77A]" />;
    if (name.includes('VN') || name.includes('Alight')) return <Film className="w-3.5 h-3.5 text-[#F5D77A]" />;
    if (name.includes('AI Sound')) return <Music className="w-3.5 h-3.5 text-[#F5D77A]" />;
    if (name.includes('Gemini') || name.includes('ChatGPT')) return <Cpu className="w-3.5 h-3.5 text-[#F5D77A]" />;
    return <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />;
  };

  // Duplicate items for seamless continuous looping
  const duplicatedTools = [...PORTFOLIO_CONFIG.tools, ...PORTFOLIO_CONFIG.tools, ...PORTFOLIO_CONFIG.tools];

  return (
    <div className="relative w-full py-8 bg-[#0B0B0D]/90 overflow-hidden border-b border-[#D4AF37]/15">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0B0D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0B0D] to-transparent z-10 pointer-events-none" />

      {/* Film strip perforated top and bottom dots */}
      <div className="flex justify-between px-4 pb-2 opacity-25">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-sm bg-[#D4AF37]" />
        ))}
      </div>

      <div className="animate-marquee flex items-center gap-4 py-2">
        {duplicatedTools.map((tool, index) => {
          const badgeText = (t.tools.toolBadges as Record<string, string>)[tool.name] || tool.badge;
          return (
            <div
              key={`${tool.name}-${index}`}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#181A20]/80 border border-[#D4AF37]/35 shadow-[0_2px_12px_rgba(212,175,55,0.1)] hover:border-[#F5D77A] hover:bg-[#181A20] transition-all cursor-default group"
            >
              <div className="p-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 group-hover:scale-110 transition-transform">
                {getToolIcon(tool.name)}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-montserrat font-bold text-xs sm:text-sm text-[#FAF6EC] tracking-wide whitespace-nowrap">
                  {tool.name}
                </span>
                <span className="text-[11px] font-mono text-[#D4AF37] font-semibold">
                  ({tool.experience})
                </span>
              </div>

              <span className="px-2 py-0.5 rounded-md text-[9px] uppercase tracking-wider font-bold bg-[#D4AF37]/15 text-[#FFF4D0] border border-[#D4AF37]/25">
                {badgeText}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between px-4 pt-2 opacity-25">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-sm bg-[#D4AF37]" />
        ))}
      </div>
    </div>
  );
};
