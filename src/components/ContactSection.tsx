import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { TRANSLATIONS, type Language } from '../data/translations';
import {
  MessageCircle,
  Phone,
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

interface ContactSectionProps {
  currentLanguage?: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLanguage = 'en' }) => {
  const t = TRANSLATIONS[currentLanguage].contact;
  const isTamil = currentLanguage === 'ta';

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const projectOptions = Object.values(t.form.projectTypeOptions);
  const budgetOptions = [
    '₹150 – ₹1,500 (Poster / Mini)',
    '₹1,500 – ₹3,000 (Standard Reel)',
    '₹3,000 – ₹7,000 (Event / Wedding)',
    '₹15,000+ (Monthly Retainer)',
  ];
  const deadlineOptions = isTamil
    ? ['24 மணி நேரம் (அவசரம்)', '2–3 நாட்களுக்குள்', '1 வாரத்திற்குள்', 'திட்டமிட்டு மெதுவாக']
    : ['24 Hours (Rush Order)', 'Within 2–3 Days', 'Within 1 Week', 'Flexible / Planning Ahead'];

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState(projectOptions[0]);
  const [budget, setBudget] = useState(budgetOptions[1]);
  const [deadline, setDeadline] = useState(deadlineOptions[1]);
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError(t.form.validations.nameRequired);
      return;
    }
    if (!phone.trim()) {
      setFormError(t.form.validations.phoneRequired);
      return;
    }

    setFormError('');

    // Construct WhatsApp message prefill
    const intro = isTamil
      ? 'வணக்கம் THANGAMEH! உங்களுடன் ஒரு ப்ராஜெக்ட் தொடங்க விரும்புகிறேன்:'
      : 'Hi THANGAMEH! I want to start a project with you:';
    const waText = `${intro}
• ${isTamil ? 'பெயர்' : 'Name'}: ${name.trim()}
• ${isTamil ? 'தொலைபேசி' : 'Phone'}: ${phone.trim()}
• ${isTamil ? 'ப்ராஜெக்ட் வகை' : 'Project Type'}: ${projectType}
• ${isTamil ? 'பட்ஜெட்' : 'Budget'}: ${budget}
• ${isTamil ? 'காலக்கெடு' : 'Deadline'}: ${deadline}
• ${isTamil ? 'விவரங்கள்' : 'Details'}: ${message.trim() || (isTamil ? 'வாட்ஸ்அப்பில் பேசுவோம்!' : 'Let us discuss details on chat!')}`;

    const waUrl = `https://wa.me/${PORTFOLIO_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      waText
    )}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Cards & Copy-to-Clipboard */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181A20] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-serif-heading text-[#FAF6EC] leading-tight">
                {isTamil ? (
                  <span className="text-gold-gradient">{t.heading}</span>
                ) : (
                  <>Let's Create <br /><span className="text-gold-gradient">Something Golden</span></>
                )}
              </h2>

              <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Direct Clickable Contact Cards with Copy Feature */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <div className="glass-gold-card p-5 rounded-2xl flex items-center justify-between gap-4 group hover:border-[#F5D77A]">
                <a
                  href={PORTFOLIO_CONFIG.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#D4AF37] block font-bold">
                      {isTamil ? 'நேரடி WhatsApp (விரைவானது)' : 'Direct WhatsApp (Fastest)'}
                    </span>
                    <span className="font-montserrat font-bold text-base text-[#FAF6EC] block truncate">
                      {PORTFOLIO_CONFIG.contact.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_CONFIG.contact.phone, 'whatsapp')}
                    className="p-2 rounded-lg bg-[#181A20] border border-white/10 hover:border-[#D4AF37] text-[#A8A398] hover:text-[#FAF6EC] transition-colors"
                    title={isTamil ? "எண்ணை நகலெடுக்கவும்" : "Copy phone number"}
                  >
                    {copiedField === 'whatsapp' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={PORTFOLIO_CONFIG.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F5D77A] hover:bg-[#D4AF37] hover:text-black transition-all"
                    title={isTamil ? "WhatsApp திறக்கவும்" : "Open WhatsApp chat"}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct Phone Call Card */}
              <div className="glass-gold-card p-5 rounded-2xl flex items-center justify-between gap-4 group hover:border-[#F5D77A]">
                <a
                  href={PORTFOLIO_CONFIG.contact.phoneTel}
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F5D77A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#D4AF37] block font-bold">
                      {isTamil ? 'நேரடி தொலைபேசி அழைப்பு' : 'Direct Phone Call'}
                    </span>
                    <span className="font-montserrat font-bold text-base text-[#FAF6EC] block truncate">
                      {PORTFOLIO_CONFIG.contact.phone}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PORTFOLIO_CONFIG.contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-[#181A20] border border-white/10 hover:border-[#D4AF37] text-[#A8A398] hover:text-[#FAF6EC] transition-colors flex-shrink-0"
                  title={isTamil ? "எண்ணை நகலெடுக்கவும்" : "Copy phone number"}
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div className="glass-gold-card p-5 rounded-2xl flex items-center justify-between gap-4 group hover:border-[#F5D77A]">
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.contact.email}`}
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F5D77A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-[#D4AF37] block font-bold">
                      {t.directInfo.emailLabel}
                    </span>
                    <span className="font-montserrat font-semibold text-xs sm:text-sm text-[#FAF6EC] block truncate">
                      {PORTFOLIO_CONFIG.contact.email}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PORTFOLIO_CONFIG.contact.email, 'email')}
                  className="p-2 rounded-lg bg-[#181A20] border border-white/10 hover:border-[#D4AF37] text-[#A8A398] hover:text-[#FAF6EC] transition-colors flex-shrink-0"
                  title={isTamil ? "மின்னஞ்சலை நகலெடுக்கவும்" : "Copy email address"}
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs text-[#A8A398]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>{t.directInfo.locationVal}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>{t.directInfo.hoursVal}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Contact Form (Prefills WhatsApp) */}
          <div className="lg:col-span-7">
            <div className="glass-gold-card rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative">
              <div className="mb-6 text-left">
                <h3 className="font-serif-heading font-bold text-xl sm:text-2xl text-[#FAF6EC]">
                  {isTamil ? 'ப்ராஜெக்ட் தேவைகள் படிவம்' : 'Project Inquiry Form'}
                </h3>
                <p className="text-xs text-[#A8A398] mt-1">
                  {isTamil
                    ? "கீழே உங்கள் விவரங்களை உள்ளிடுங்கள். 'WhatsApp-ல் அனுப்பவும்' என்பதைக் கிளிக் செய்தால் உடனே பதில் கிடைக்கும்."
                    : 'Fill in your project requirements below. Clicking "Send Inquiry" pre-formats all details for an instant response.'}
                </p>
              </div>

              {formError && (
                <div className="mb-5 p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs text-left">
                  {formError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#D4AF37] font-semibold">
                      {t.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-white/10 text-[#FAF6EC] placeholder-[#A8A398]/40 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#D4AF37] font-semibold">
                      {t.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.form.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-white/10 text-[#FAF6EC] placeholder-[#A8A398]/40 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#D4AF37] font-semibold">
                      {t.form.projectTypeLabel}
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-[#0B0B0D] border border-white/10 text-[#FAF6EC] focus:border-[#D4AF37] focus:outline-none text-xs"
                    >
                      {projectOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#D4AF37] font-semibold">
                      {t.form.budgetLabel}
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-[#0B0B0D] border border-white/10 text-[#FAF6EC] focus:border-[#D4AF37] focus:outline-none text-xs"
                    >
                      {budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Target Deadline */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#D4AF37] font-semibold">
                      {isTamil ? 'தேவைப்படும் காலம்' : 'Target Deadline'}
                    </label>
                    <select
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-[#0B0B0D] border border-white/10 text-[#FAF6EC] focus:border-[#D4AF37] focus:outline-none text-xs"
                    >
                      {deadlineOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#D4AF37] font-semibold">
                    {t.form.detailsLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.form.detailsPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-white/10 text-[#FAF6EC] placeholder-[#A8A398]/40 focus:border-[#D4AF37] focus:outline-none text-xs sm:text-sm resize-none"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-gold-pill w-full py-4 rounded-xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>{t.form.submitButton}</span>
                  </button>
                  <p className="text-[11px] text-[#A8A398] text-center mt-2.5">
                    {isTamil
                      ? 'வாட்ஸ்அப்பில் விவரங்கள் தயாராக இருக்கும் • 100% இலவச ஆலோசனை'
                      : 'Instant redirect to WhatsApp with your details prefilled • 100% Free Consultation'}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
