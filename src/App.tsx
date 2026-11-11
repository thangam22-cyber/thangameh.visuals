import React, { useState, useEffect } from 'react';
import { PageIntro } from './components/PageIntro';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ToolsMarquee } from './components/ToolsMarquee';
import { VideoSection } from './components/VideoSection';
import { VideoModal } from './components/VideoModal';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GoldBackgroundGraphics } from './components/GoldBackgroundGraphics';
import { GoldCursorGlow } from './components/GoldCursorGlow';
import { VIDEO_PROJECTS, VideoProject } from './data/portfolioData';
import { TRANSLATIONS, type Language } from './data/translations';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('thangameh_language');
      if (saved === 'ta' || saved === 'en') {
        return saved;
      }
    } catch {
      // localStorage may fail in restricted/private iframes
    }
    return 'en';
  });

  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('thangameh_language', currentLanguage);
    } catch {
      // ignore
    }

    document.documentElement.lang = currentLanguage;

    const t = TRANSLATIONS[currentLanguage];
    document.title = t.meta.pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.metaDescription);
    }
  }, [currentLanguage]);

  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const handleOpenVideoModal = (project: VideoProject) => {
    setSelectedVideo(project);
  };

  const handleCloseVideoModal = () => {
    setSelectedVideo(null);
  };

  const handleNextVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = VIDEO_PROJECTS.findIndex((p) => p.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % VIDEO_PROJECTS.length;
    setSelectedVideo(VIDEO_PROJECTS[nextIndex]);
  };

  const handlePrevVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = VIDEO_PROJECTS.findIndex((p) => p.id === selectedVideo.id);
    const prevIndex = (currentIndex - 1 + VIDEO_PROJECTS.length) % VIDEO_PROJECTS.length;
    setSelectedVideo(VIDEO_PROJECTS[prevIndex]);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#FAF6EC] selection:bg-[#D4AF37]/30 selection:text-[#FAF6EC] overflow-x-hidden font-['Inter',sans-serif]">
      {/* 0. Page-Load Intro with Full Logo & Gold Light-Sweep */}
      <PageIntro />

      {/* 3D Gold Ambient Background Graphics (Flowing swooshes, rings, spheres, light streaks) */}
      <GoldBackgroundGraphics />

      {/* Desktop Golden Trailing Cursor Glow */}
      <GoldCursorGlow />

      {/* 1. Sticky Navbar */}
      <Navbar currentLanguage={currentLanguage} onToggleLanguage={toggleLanguage} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 2. Hero Section with 9:16 vertical phone showreel */}
        <HeroSection
          currentLanguage={currentLanguage}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* 3. Tools Marquee */}
        <ToolsMarquee currentLanguage={currentLanguage} />

        {/* 4. Selected Video Work / Showreel */}
        <VideoSection
          currentLanguage={currentLanguage}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* 5. Photo Edits & Poster Designs Gallery */}
        <PhotoGallerySection currentLanguage={currentLanguage} />

        {/* 6. Bespoke Visual Services */}
        <ServicesSection currentLanguage={currentLanguage} />

        {/* 7. Why Choose Me / About Section */}
        <AboutSection currentLanguage={currentLanguage} />

        {/* 8. Process & Pipeline */}
        <ProcessSection currentLanguage={currentLanguage} />

        {/* 9. Value-Packed Pricing */}
        <PricingSection currentLanguage={currentLanguage} />

        {/* 10. Client Testimonials Carousel */}
        <TestimonialsSection currentLanguage={currentLanguage} />

        {/* 11. Frequently Asked Questions */}
        <FaqSection currentLanguage={currentLanguage} />

        {/* 12. Contact & Project Inquiry Form */}
        <ContactSection currentLanguage={currentLanguage} />
      </main>

      {/* 13. Instagram Strip + Comprehensive Footer */}
      <Footer currentLanguage={currentLanguage} />

      {/* Floating Bottom-Right WhatsApp Quick Contact */}
      <FloatingWhatsApp currentLanguage={currentLanguage} />

      {/* Cinematic Lightbox Video Player Modal */}
      {selectedVideo && (
        <VideoModal
          project={selectedVideo}
          currentLanguage={currentLanguage}
          onClose={handleCloseVideoModal}
          onNext={handleNextVideo}
          onPrev={handlePrevVideo}
          hasNext={true}
          hasPrev={true}
        />
      )}
    </div>
  );
}
