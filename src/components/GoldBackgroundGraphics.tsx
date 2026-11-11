import React from 'react';

export const GoldBackgroundGraphics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Film grain and carbon mesh texture */}
      <div className="absolute inset-0 film-grain opacity-30 mix-blend-screen" />

      {/* Subtle geometric dot grid pattern matching reference image */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(11,11,13,0.92)_100%)]" />

      {/* Ambient Gold Glow Spotlights */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#D4AF37]/15 via-[#8C6A1A]/10 to-transparent blur-[140px]" />
      <div className="absolute top-[22%] -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#F5D77A]/12 via-[#E9A23C]/8 to-transparent blur-[150px]" />
      <div className="absolute top-[58%] -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#D4AF37]/10 to-transparent blur-[140px]" />
      <div className="absolute -bottom-40 right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#D4AF37]/15 via-[#F5D77A]/8 to-transparent blur-[160px]" />

      {/* Flowing 3D Metallic Gold Ribbons & Swooshes (matching Image 1 & Image 2) */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 1000"
      >
        <defs>
          {/* High-metallic lustrous multi-stop gold gradients */}
          <linearGradient id="goldRibbonTopLeft" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#4A3408" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#8C6A1A" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="60%" stopColor="#FFF6D6" />
            <stop offset="75%" stopColor="#E5BF42" />
            <stop offset="90%" stopColor="#8C6A1A" />
            <stop offset="100%" stopColor="#2A1C04" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="goldRibbonTopRight" x1="100%" y1="0%" x2="20%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.9" />
            <stop offset="20%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#8C6A1A" />
            <stop offset="80%" stopColor="#F5D77A" />
            <stop offset="100%" stopColor="#3A2807" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="fineLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D77A" stopOpacity="0" />
            <stop offset="30%" stopColor="#FFF4D0" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8C6A1A" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ringGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF6D6" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#8C6A1A" />
            <stop offset="100%" stopColor="#E5BF42" />
          </linearGradient>

          <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* TOP-LEFT SWOOSH: Curves gracefully down into the viewport (matching reference Image 1) */}
        <path
          d="M -40 -20 C 120 180, 200 240, 260 480 C 290 600, 320 720, 280 880"
          stroke="url(#goldRibbonTopLeft)"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          opacity="0.75"
          filter="url(#ribbonGlow)"
        />
        {/* Specular highlight ridge on top-left ribbon */}
        <path
          d="M -30 -10 C 125 185, 205 245, 263 480 C 292 600, 321 720, 282 880"
          stroke="#FFFDF0"
          strokeWidth="2.5"
          fill="none"
          opacity="0.85"
        />

        {/* Parallel hairline wave */}
        <path
          d="M -10 30 C 150 220, 230 280, 290 510 C 330 650, 350 780, 310 930"
          stroke="url(#fineLineGrad)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* TOP-RIGHT SWOOSH: Sweeping loop on top right (matching reference Image 1) */}
        <path
          d="M 1480 30 C 1320 80, 1180 120, 1120 220 C 1060 320, 1140 440, 1300 420 C 1420 400, 1490 280, 1500 150"
          stroke="url(#goldRibbonTopRight)"
          strokeWidth="12"
          fill="none"
          opacity="0.7"
          filter="url(#ribbonGlow)"
        />
        {/* Specular ridge on top-right ribbon */}
        <path
          d="M 1480 30 C 1320 80, 1180 120, 1120 220 C 1060 320, 1140 440, 1300 420"
          stroke="#FFF8E0"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />

        {/* Mid-screen dynamic wave separating sections */}
        <path
          d="M -50 650 C 350 500, 750 820, 1200 580 C 1380 480, 1480 560, 1520 620"
          stroke="url(#fineLineGrad)"
          strokeWidth="2"
          fill="none"
        />

        {/* Bottom swoosh flowing into footer */}
        <path
          d="M 1500 880 C 1150 980, 680 840, 150 940 C 40 960, -30 920, -80 900"
          stroke="url(#goldRibbonTopLeft)"
          strokeWidth="8"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Decorative 3D Glossy Gold Rings (matching reference Image 2) */}
      {/* Top right prominent interlocking ring */}
      <div className="absolute top-[8%] right-[4%] hidden md:block opacity-75">
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" className="transform rotate-12">
          {/* Outer ring */}
          <circle
            cx="100"
            cy="100"
            r="82"
            stroke="url(#ringGradGold)"
            strokeWidth="10"
            className="drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          />
          {/* Inner ring highlight */}
          <circle cx="100" cy="100" r="82" stroke="#FFF4D0" strokeWidth="1.5" strokeOpacity="0.85" />
          {/* Intersecting secondary ring */}
          <circle
            cx="75"
            cy="125"
            r="55"
            stroke="url(#ringGradGold)"
            strokeWidth="6"
            strokeOpacity="0.6"
          />
        </svg>
      </div>

      {/* Top left 3D glossy gold sphere with realistic lighting (matching Image 2) */}
      <div className="absolute top-[14%] left-[6%] hidden lg:block animate-[pulse_7s_ease-in-out_infinite]">
        <div className="relative w-14 h-14 rounded-full bg-[radial-gradient(circle_at_32%_28%,#FFFFFF_0%,#FFF0BC_20%,#F5D77A_40%,#D4AF37_65%,#7A5810_90%,#302002_100%)] shadow-[0_10px_30px_rgba(212,175,55,0.45)]">
          {/* Specular pinpoint highlight */}
          <div className="absolute top-2 left-2.5 w-3 h-2 rounded-full bg-white blur-[0.6px] opacity-90 transform -rotate-30" />
        </div>
      </div>

      {/* Mid-right smaller 3D glossy gold sphere */}
      <div className="absolute top-[48%] right-[8%] hidden lg:block">
        <div className="relative w-8 h-8 rounded-full bg-[radial-gradient(circle_at_32%_28%,#FFFFFF_0%,#F5D77A_35%,#D4AF37_65%,#5A4008_100%)] shadow-[0_6px_20px_rgba(212,175,55,0.35)]">
          <div className="absolute top-1 left-1.5 w-1.5 h-1 rounded-full bg-white opacity-90" />
        </div>
      </div>

      {/* Lower left floating glossy gold ring */}
      <div className="absolute bottom-[20%] left-[3%] hidden lg:block opacity-60">
        <svg width="120" height="120" viewBox="0 0 140 140" fill="none" className="transform -rotate-25">
          <ellipse
            cx="70"
            cy="70"
            rx="56"
            ry="34"
            stroke="url(#ringGradGold)"
            strokeWidth="7"
            className="drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          />
          <ellipse cx="70" cy="70" rx="56" ry="34" stroke="#FFF4D0" strokeWidth="1" strokeOpacity="0.8" />
        </svg>
      </div>

      {/* Lower right floating gold sphere */}
      <div className="absolute bottom-[10%] right-[14%] hidden md:block">
        <div className="relative w-10 h-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFFFFF_0%,#FFF2C6_25%,#D4AF37_60%,#4A3406_100%)] shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
          <div className="absolute top-1.5 left-2 w-2 h-1.5 rounded-full bg-white opacity-95" />
        </div>
      </div>
    </div>
  );
};
