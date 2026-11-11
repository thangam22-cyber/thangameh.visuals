/**
 * Master Portfolio Data for THANGAMEH - Visual Media Specialist
 * Easily update, add, or replace any media, pricing, contact details, or text here.
 */

export interface VideoProject {
  id: string;
  projectNumber: string;
  title: string;
  category: 'Event Promo' | 'Wedding Invite' | 'Motion Title' | 'Reels & Hype Edits';
  duration: string;
  orientation: '16:9' | '9:16';
  driveId: string;
  embedUrl: string;
  viewUrl: string;
  thumbnail: string;
  description: string;
  badge?: string;
  tags: string[];
  isFanEdit?: boolean;
}

export interface PhotoDesign {
  id: string;
  fileNumber: string;
  title: string;
  category: 'Birthday' | 'Family & Frames' | 'Anniversary' | 'Wedding, Engagement & Maternity' | 'God & Devotional';
  style: string;
  imageUrl: string;
  altText: string;
  description: string;
  featured?: boolean;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  subtitle: string;
  beforeSrc: string;
  afterSrc: string;
  tags: string[];
  beforeLabel?: string;
  afterLabel?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  deliveryTime: string;
  revisions: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  organization: string;
  rating: number;
  projectType: string;
  avatarText: string;
  isPlaceholderNote?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_CONFIG = {
  owner: {
    brandName: 'THANGAMEH',
    legalName: 'Thangamani M',
    tagline: 'VISUAL MEDIA SPECIALIST',
    serviceLine: 'Video Editing  •  Reels  •  Posters  •  Frames  •  Banners  •  Ad Creatives',
    tamilHeadline: 'தங்கத்தை போல் மின்னும் வீடியோ எடிட்ஸ்',
    englishHeadline: 'Edits That Shine Like Gold.',
    englishSubtext:
      'I turn raw footage and ideas into cinematic videos, scroll-stopping reels, and custom photo frames, posters, banners, and ad creatives for brands, events, weddings, and creators.',
    bio: "I'm Thangamani M, a freelance Visual Media Specialist based in Tamil Nadu, India. With 6+ years of hands-on experience, I design custom photo frames, posters, banners, and high-impact ad creatives, alongside cinematic video editing and viral reels. I blend visual storytelling, kinetic typography, and precision craft to produce content that instantly grabs attention and builds prestige.",
    location: 'Tamil Nadu, India',
    yearsExperience: '6+',
    experienceStats: [
      { label: 'Years Experience', value: '6+' },
      { label: 'Video Styles', value: '10+' },
      { label: 'Original Designs', value: '23' },
      { label: 'Client Satisfaction', value: '100%' },
    ],
  },
  contact: {
    phone: '+91 80151 69841',
    phoneTel: 'tel:+918015169841',
    whatsappNumber: '918015169841',
    whatsappLink:
      'https://wa.me/918015169841?text=Hi%20THANGAMEH%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project',
    email: 'thangameh.visuals@gmail.com',
    instagramUrl: 'https://www.instagram.com/thangameh.visuals',
    instagramHandle: '@thangameh.visuals',
    linkedinUrl: 'https://www.linkedin.com/in/thangam22/',
    githubUrl: 'https://github.com/thangam22-cyber',
  },
  tools: [
    { name: 'CapCut', experience: '5 yrs', badge: 'Power User' },
    { name: 'VN Video Editor', experience: '4 yrs', badge: 'Mobile Pro' },
    { name: 'InShot', experience: '6 yrs', badge: 'Speed Edit' },
    { name: 'Alight Motion', experience: '3 yrs', badge: 'Kinetic & VFX' },
    { name: 'Photoshop & Canva', experience: '6 yrs', badge: 'Frame & Poster Pro' },
    { name: 'AI Editing Tools', experience: 'Current', badge: 'Workflow 2.0' },
    { name: 'Google Gemini', experience: 'Concepting', badge: 'AI Prompts' },
    { name: 'AI Sound Design', experience: 'SFX & Foley', badge: 'Cinematic Audio' },
  ],
  pricingTerms: {
    posterStartingPrice: '₹150',
    adBannerStartingPrice: '₹300',
    pricingStrip: 'Photo Frame / Poster from ₹150 • Ad Banner / Creative from ₹300',
    terms: '50% advance • 2 free revisions included • 3-day revision window • Extra revisions charged at nominal fee • Custom quotes available for bespoke packages.',
  },
};

// 10 Real Google Drive Video Projects (All Landscape 16:9, Ordered: 01, 02, 03, 04, 06, 07, 08, 09, 05, 10)
export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'cykrypt-26-promo',
    projectNumber: '01',
    title: "CYKRYPT '26 – Red & Yellow Poster-Style Promo",
    category: 'Event Promo',
    duration: '31s',
    orientation: '16:9',
    driveId: '1q44rngxd8Gf0HS0cWze13F78bKsoA4u7',
    embedUrl: 'https://drive.google.com/file/d/1q44rngxd8Gf0HS0cWze13F78bKsoA4u7/preview',
    viewUrl: 'https://drive.google.com/file/d/1q44rngxd8Gf0HS0cWze13F78bKsoA4u7/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=1q44rngxd8Gf0HS0cWze13F78bKsoA4u7&sz=w1280',
    description: 'Bold graphic poster-style teaser with high-energy contrast, red & yellow color branding, rapid kinetic transitions, and campus buzz generation.',
    tags: ['Event Promo', 'Poster Style', 'Kinetic Typography', 'Sound FX'],
  },
  {
    id: 'fire-text-drone-promo',
    projectNumber: '02',
    title: 'Cyber Security Fire-Text Promo with Drone Shots',
    category: 'Event Promo',
    duration: '23s',
    orientation: '16:9',
    driveId: '13vm9fKUpxalncOqZkI0NVpnVWZIlqU1q',
    embedUrl: 'https://drive.google.com/file/d/13vm9fKUpxalncOqZkI0NVpnVWZIlqU1q/preview',
    viewUrl: 'https://drive.google.com/file/d/13vm9fKUpxalncOqZkI0NVpnVWZIlqU1q/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=13vm9fKUpxalncOqZkI0NVpnVWZIlqU1q&sz=w1280',
    description: "'Something Big Is Loading' hook featuring explosive fire text effects composited seamlessly over sweeping aerial drone campus footage.",
    tags: ['Drone Shots', 'Fire Text', 'VFX', 'Cyber Security'],
  },
  {
    id: 'arambhi-kalama-2025',
    projectNumber: '03',
    title: 'ARAMBHIKALAMA 2025 – Technical Quiz Promo',
    category: 'Event Promo',
    duration: '47s',
    orientation: '16:9',
    driveId: '1hZeF1Esk1Gs5tITLaQof7esInB1DT3VR',
    embedUrl: 'https://drive.google.com/file/d/1hZeF1Esk1Gs5tITLaQof7esInB1DT3VR/preview',
    viewUrl: 'https://drive.google.com/file/d/1hZeF1Esk1Gs5tITLaQof7esInB1DT3VR/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=1hZeF1Esk1Gs5tITLaQof7esInB1DT3VR&sz=w1280',
    description: 'Moody cyber-neon glitch styling combined with heart-racing countdown timer sound effects for a state-level technical quiz showdown.',
    tags: ['Technical Quiz', 'Countdown FX', 'Cyber Neon', 'Tamil Hook'],
  },
  {
    id: 'national-conference-nextgen',
    projectNumber: '04',
    title: 'National Conference – Next-Gen Cyber Security Teaser',
    category: 'Event Promo',
    duration: '58s',
    orientation: '16:9',
    driveId: '1kl2lGwwufaPRM61IpYGzU5akkAHHcot3',
    embedUrl: 'https://drive.google.com/file/d/1kl2lGwwufaPRM61IpYGzU5akkAHHcot3/preview',
    viewUrl: 'https://drive.google.com/file/d/1kl2lGwwufaPRM61IpYGzU5akkAHHcot3/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=1kl2lGwwufaPRM61IpYGzU5akkAHHcot3&sz=w1280',
    description: 'Clean luxury golden kinetic typography layered across deep blue matrix grids for an international academic and industry conference.',
    tags: ['Luxury Gold Text', 'Corporate Tech', 'Soundtrack Sync'],
  },
  {
    id: 'cykrypt-25-3d-reveal',
    projectNumber: '06',
    title: "CYKRYPT '25 – Typewriter & 3D Gold Title Reveal",
    category: 'Event Promo',
    duration: '20s',
    orientation: '16:9',
    driveId: '1e8Cci51OJxmU3YZnWBCTeS8pjtpakWZE',
    embedUrl: 'https://drive.google.com/file/d/1e8Cci51OJxmU3YZnWBCTeS8pjtpakWZE/preview',
    viewUrl: 'https://drive.google.com/file/d/1e8Cci51OJxmU3YZnWBCTeS8pjtpakWZE/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=1e8Cci51OJxmU3YZnWBCTeS8pjtpakWZE&sz=w1280',
    description: 'Cinematic teaser featuring mechanical typewriter soundscapes leading to an explosive 3D golden metallic title reveal with particle embers.',
    tags: ['3D Gold', 'Typewriter', 'Sound Design', 'Title Reveal'],
  },
  {
    id: '3d-classroom-registration',
    projectNumber: '07',
    title: '3D Classroom Registration Reel',
    category: 'Event Promo',
    duration: '12s',
    orientation: '16:9',
    driveId: '1I9mbb2ghvskAQP7y284TBgy2OQEVH1mW',
    embedUrl: 'https://drive.google.com/file/d/1I9mbb2ghvskAQP7y284TBgy2OQEVH1mW/preview',
    viewUrl: 'https://drive.google.com/file/d/1I9mbb2ghvskAQP7y284TBgy2OQEVH1mW/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=1I9mbb2ghvskAQP7y284TBgy2OQEVH1mW&sz=w1280',
    description: 'Dynamic 3D isometric classroom tour with kinetic chalkboard text and a quick registration call-to-action.',
    tags: ['3D Isometric', 'Chalkboard', 'QR Callout', 'Motion Graphics'],
  },
  {
    id: 'wedding-invite-yellow-gold',
    projectNumber: '08',
    title: 'Wedding Invitation Video – Yellow & Gold',
    category: 'Wedding Invite',
    duration: '62s',
    orientation: '16:9',
    driveId: '1WL2LySNt-uxkqquHPWIRpN7TC2JaBF1O',
    embedUrl: 'https://drive.google.com/file/d/1WL2LySNt-uxkqquHPWIRpN7TC2JaBF1O/preview',
    viewUrl: 'https://drive.google.com/file/d/1WL2LySNt-uxkqquHPWIRpN7TC2JaBF1O/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=1WL2LySNt-uxkqquHPWIRpN7TC2JaBF1O&sz=w1280',
    description: 'Traditional Tamil auspicious theme with marigold garlands, temple gold motifs, traditional nadaswaram cues, and sparkling golden bokeh.',
    tags: ['Traditional Tamil', 'Marigold & Gold', 'Bangles Bokeh', 'E-Invite'],
  },
  {
    id: 'cykrypt-25-gold-stars',
    projectNumber: '09',
    title: "CYKRYPT '25 – Gold Stars Title Teaser",
    category: 'Motion Title',
    duration: '15s',
    orientation: '16:9',
    driveId: '1qMtZZFi4t5QZpGRWtQ0CqgZnJ_D5WHa3',
    embedUrl: 'https://drive.google.com/file/d/1qMtZZFi4t5QZpGRWtQ0CqgZnJ_D5WHa3/preview',
    viewUrl: 'https://drive.google.com/file/d/1qMtZZFi4t5QZpGRWtQ0CqgZnJ_D5WHa3/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=1qMtZZFi4t5QZpGRWtQ0CqgZnJ_D5WHa3&sz=w1280',
    description: 'Mesmerizing celestial motion graphics with glittering gold stars converging into the official summit crest.',
    tags: ['Motion Title', 'Gold Particles', 'Logo Stinger'],
  },
  {
    id: 'hacker-theme-teaser',
    projectNumber: '05',
    title: 'Cyber Security Events Teaser – Hacker Theme',
    category: 'Event Promo',
    duration: '74s',
    orientation: '16:9',
    driveId: '13LndDJlz7XQExvxnJtyBDNsi4bcwV2Ut',
    embedUrl: 'https://drive.google.com/file/d/13LndDJlz7XQExvxnJtyBDNsi4bcwV2Ut/preview',
    viewUrl: 'https://drive.google.com/file/d/13LndDJlz7XQExvxnJtyBDNsi4bcwV2Ut/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=13LndDJlz7XQExvxnJtyBDNsi4bcwV2Ut&sz=w1280',
    description: 'Dark terminal aesthetics with green phosphorus & golden highlight codes, CTF challenge countdown, and intense cinematic bass drops.',
    tags: ['Terminal Code', 'Hacker Aesthetic', 'Bass Drops', 'CTF'],
  },
  {
    id: 'tamil-hype-montage',
    projectNumber: '10',
    title: 'Tamil Hype Montage – Kinetic Captions (Fan Edit / Sample)',
    category: 'Reels & Hype Edits',
    duration: '60s',
    orientation: '16:9',
    driveId: '1_fht5QU02dcx89nsa_6IYuxhc5RsdgbT',
    embedUrl: 'https://drive.google.com/file/d/1_fht5QU02dcx89nsa_6IYuxhc5RsdgbT/preview',
    viewUrl: 'https://drive.google.com/file/d/1_fht5QU02dcx89nsa_6IYuxhc5RsdgbT/view',
    thumbnail: 'https://drive.google.com/thumbnail?id=1_fht5QU02dcx89nsa_6IYuxhc5RsdgbT&sz=w1280',
    description: 'Beat-synced high-tempo montage with dynamic glowing Tamil kinetic subtitles, velocity remapping, screen shakes, and color grading pop.',
    isFanEdit: true,
    badge: 'Fan Edit / Sample',
    tags: ['Velocity Sync', 'Tamil Kinetic Captions', 'Color Pop', 'Fan Edit'],
  },
];

// Master 23 Real Design Items (Posters, Frames, Banners & Ad Creatives)
export const PHOTO_DESIGNS: PhotoDesign[] = [
  // 01 - Birthday (Featured 1)
  {
    id: 'photo-01',
    fileNumber: '01',
    title: 'Pradheesh Vibrant Birthday Wishes Poster',
    category: 'Birthday',
    style: 'Rainbow Splash Background with Brother Portraits',
    imageUrl: '/assets/aistudio/photo-01_e11b4fba.webp',
    altText: 'Custom birthday celebration poster with rainbow watercolor background and portraits',
    description: 'High-energy custom birthday celebration poster featuring a central portrait with colorful ambient splashes and family wishing cutouts.',
    featured: true,
  },
  // 02 - Birthday
  {
    id: 'photo-02',
    fileNumber: '02',
    title: 'Santhiya 26th Birthday Celebration Banner',
    category: 'Birthday',
    style: '3D Gold Typography with Sunset Cloudscape Grid',
    imageUrl: '/assets/aistudio/photo-02_9b46134b.webp',
    altText: 'Wide horizontal birthday banner with 3D typography and friends photo grid',
    description: 'Wide-format horizontal birthday flex banner featuring dramatic cloud aesthetics, 3D embossed lettering, and a retro monochrome portrait collage.',
    featured: false,
  },
  // 03 - Wedding, Engagement & Maternity (Featured 2)
  {
    id: 'photo-03',
    fileNumber: '03',
    title: 'Happy Engagement Day Keepsake Poster',
    category: 'Wedding, Engagement & Maternity',
    style: 'Auspicious Red-Gold Frame with Splash Photo Cutouts',
    imageUrl: '/assets/aistudio/photo-03_a9cc2ebf.webp',
    altText: 'South Indian engagement day celebration poster with ring exchange and couple portraits',
    description: 'Traditional South Indian engagement keepsake featuring the thamboolam plate exchange, couple portrait vignettes, and ring close-up.',
    featured: true,
  },
  // 04 - Anniversary (Featured 3)
  {
    id: 'photo-04',
    fileNumber: '04',
    title: 'Hari Krishnan & Santhiya Wedding Anniversary Poster',
    category: 'Anniversary',
    style: 'Romantic Deep Indigo & Gold Filigree Tribute',
    imageUrl: '/assets/aistudio/photo-04_3f5769d1.webp',
    altText: 'Wedding anniversary poster with golden typography and romantic couple portraits',
    description: 'Lush romantic anniversary tribute poster with gold henna floral motifs, golden cursive typography, and congratulatory photo cards.',
    featured: true,
  },
  // 05 - Anniversary
  {
    id: 'photo-05',
    fileNumber: '05',
    title: '24th Wedding Anniversary Family Tribute Frame',
    category: 'Anniversary',
    style: 'Lush Tropical Foliage & Golden Calligraphy',
    imageUrl: '/assets/aistudio/photo-05_f72e22de.webp',
    altText: '24th wedding anniversary family portrait frame with emerald greens and gold',
    description: 'Custom silver jubilee milestone anniversary banner with emerald green natural backdrop, gold jewelry highlighting, and family portrait alignment.',
    featured: false,
  },
  // 06 - Family & Frames (Featured 4)
  {
    id: 'photo-06',
    fileNumber: '06',
    title: 'Mother & Daughter Traditional Saree Portrait Frame',
    category: 'Family & Frames',
    style: 'Warm Ochre Studio Retouching & Silk Sheen',
    imageUrl: '/assets/aistudio/photo-06_ab96cf87.webp',
    altText: 'Traditional silk saree portrait retouching of mother and daughter',
    description: 'High-definition digital portrait enhancement and warm classical studio coloring for a mother and daughter heirloom frame.',
    featured: true,
  },
  // 07 - Wedding, Engagement & Maternity
  {
    id: 'photo-07',
    fileNumber: '07',
    title: 'Umesh & Shalini Monochromatic Love Collage',
    category: 'Wedding, Engagement & Maternity',
    style: 'B&W Grid with Vivid Full-Color Couple Pop',
    imageUrl: '/assets/aistudio/photo-07_9075c262.webp',
    altText: 'Couple love collage with black and white grid and color center portrait',
    description: 'Contemporary retrospective wedding & engagement collage featuring 10 monochrome photo memories framing an ultra-vibrant center couple cut-out.',
    featured: false,
  },
  // 08 - Birthday
  {
    id: 'photo-08',
    fileNumber: '08',
    title: 'Celebration Birthday Hero Poster',
    category: 'Birthday',
    style: 'Dynamic Typographic Portrait Poster',
    imageUrl: '/assets/aistudio/photo-08_995d974c.webp',
    altText: 'Custom birthday celebration poster design with bold portrait cutouts',
    description: 'High-contrast birthday design with dramatic lighting, custom personalized typography, and commemorative date badge.',
    featured: false,
  },
  // 09 - Birthday
  {
    id: 'photo-09',
    fileNumber: '09',
    title: 'Festive Birthday Special Creative',
    category: 'Birthday',
    style: 'Multi-layer Photo Cutout & Ambient Lighting',
    imageUrl: '/assets/aistudio/photo-09_2dd4dbb6.webp',
    altText: 'Birthday banner with layered photo cutouts and festive design accents',
    description: 'Striking birthday celebration poster with multi-layered photo styling, gold-rimmed silhouettes, and heartfelt wishes.',
    featured: false,
  },
  // 10 - Wedding, Engagement & Maternity
  {
    id: 'photo-10',
    fileNumber: '10',
    title: 'Santhiya Harikrishnan Ultrasound Heart Keepsake',
    category: 'Wedding, Engagement & Maternity',
    style: 'Baby Ultrasound Heart Nebula with Floral ECG Heartbeat',
    imageUrl: '/assets/aistudio/photo-10_714200fa.webp',
    altText: 'Baby ultrasound scan transformed into a heart silhouette with floral frame',
    description: 'Precious maternity and pregnancy keepsake transforming a baby ultrasound scan into a blossoming heart shape with medical gestational info and ECG heartbeat.',
    featured: false,
  },
  // 11 - Birthday
  {
    id: 'photo-11',
    fileNumber: '11',
    title: 'Special Birthday Tribute Poster',
    category: 'Birthday',
    style: 'Clean Studio Portrait with Festive Gold Motifs',
    imageUrl: '/assets/aistudio/photo-11_6942b9d8.webp',
    altText: 'Personalized birthday portrait poster with festive golden accents',
    description: 'Personalized birthday poster with warm balanced color grading, elegant typography, and personalized friendship greetings.',
    featured: false,
  },
  // 12 - Birthday
  {
    id: 'photo-12',
    fileNumber: '12',
    title: 'Youth Birthday Hype Poster',
    category: 'Birthday',
    style: 'Urban Kinetic Typography & Neon Accents',
    imageUrl: '/assets/aistudio/photo-12_5cc32c8a.webp',
    altText: 'Youthful birthday celebration creative with bold typography',
    description: 'Vibrant modern birthday creative designed for Instagram stories, WhatsApp statuses, and physical flex banner printing.',
    featured: false,
  },
  // 13 - Anniversary
  {
    id: 'photo-13',
    fileNumber: '13',
    title: 'Milestone Anniversary Couple Portrait Frame',
    category: 'Anniversary',
    style: 'Gold Foil Texture & Romantic Duo Blend',
    imageUrl: '/assets/aistudio/photo-13_0ecd6c93.webp',
    altText: 'Couple wedding anniversary tribute frame with golden textures',
    description: 'Exquisite anniversary frame with custom romantic quotes, gold foil border accents, and high-fidelity photo blending.',
    featured: false,
  },
  // 14 - Birthday
  {
    id: 'photo-14',
    fileNumber: '14',
    title: 'Friends & Brothers Birthday Tribute Banner',
    category: 'Birthday',
    style: 'Celebrity-Style Collage with Ambient Glow',
    imageUrl: '/assets/aistudio/photo-14_9ba400ae.webp',
    altText: 'Celebratory birthday banner with friends photo group and festive text',
    description: 'Large-scale birthday celebration banner incorporating candid moments, sibling portraits, and custom celebratory crown stamps.',
    featured: false,
  },
  // 15 - God & Devotional (Featured 5)
  {
    id: 'photo-15',
    fileNumber: '15',
    title: 'Sri Annamalaiyar & Unnamulaiyamman Divine Temple Poster',
    category: 'God & Devotional',
    style: 'Tiruvannamalai Deepam Temple & Utsava Murti Auspicious Art',
    imageUrl: '/assets/aistudio/photo-15_92a3841b.webp',
    altText: 'Tiruvannamalai temple gopuram with Sri Annamalaiyar and Unnamulaiyamman divine deities',
    description: 'Magnificent devotional poster featuring Tiruvannamalai Rajagopuram, Annamalai hill Karthigai Deepam flame, and gold-clad deities with Tamil lettering.',
    featured: true,
  },
  // 16 - Family & Frames
  {
    id: 'photo-16',
    fileNumber: '16',
    title: 'Generational Heritage Family Frame',
    category: 'Family & Frames',
    style: 'Classic Wood Tone & Warm Golden Lighting',
    imageUrl: '/assets/aistudio/photo-16_2de5b7ff.webp',
    altText: 'Generational family photo retouching and heritage frame design',
    description: 'Heirloom family wall frame design with balanced tones, skin retouching, and timeless gold border framing for living room display.',
    featured: false,
  },
  // 17 - Family & Frames
  {
    id: 'photo-17',
    fileNumber: '17',
    title: 'Royal Family Keepsake Wall Frame',
    category: 'Family & Frames',
    style: 'Deep Regal Framing with Enhanced Clarity',
    imageUrl: '/assets/aistudio/photo-17_19eb89ff.webp',
    altText: 'Family keepsake wall art frame with enhanced clarity and gold trim',
    description: 'High-resolution family portrait enhanced for large acrylic or canvas photo frame printing.',
    featured: false,
  },
  // 18 - Birthday
  {
    id: 'photo-18',
    fileNumber: '18',
    title: 'Milestone Birthday Party Poster',
    category: 'Birthday',
    style: 'Festive Confetti & Warm Golden Highlights',
    imageUrl: '/assets/aistudio/photo-18_70db691c.webp',
    altText: 'Festive birthday party poster with warm lighting and decorative flourishes',
    description: 'Joyful birthday announcement poster with warm studio retouching, festive design flourishes, and celebratory typography.',
    featured: false,
  },
  // 19 - Birthday
  {
    id: 'photo-19',
    fileNumber: '19',
    title: 'Signature Birthday Wishes Collage',
    category: 'Birthday',
    style: 'Creative Multi-angle Portrait Grid',
    imageUrl: '/assets/aistudio/photo-19_1284d2c2.webp',
    altText: 'Creative multi-photo birthday wishes collage design',
    description: 'Personalized birthday montage weaving childhood memories and recent celebrations into a harmonious wall poster.',
    featured: false,
  },
  // 20 - Family & Frames (Featured 6)
  {
    id: 'photo-20',
    fileNumber: '20',
    title: 'The Golden 22 Legacy – Murugan & Uthra 50+ Photo Collage Frame',
    category: 'Family & Frames',
    style: 'Massive Multi-Decade Retrospective Mosaic with Gold Seal',
    imageUrl: '/assets/aistudio/photo-20_af67e50b.webp',
    altText: '50 plus photo multi-decade family legacy collage frame Murugan and Uthra',
    description: 'Monumental 50+ photograph family legacy collage chronicling weddings, childhood, milestones, and family generations around a royal golden emblem.',
    featured: true,
  },
  // 21 - God & Devotional
  {
    id: 'photo-21',
    fileNumber: '21',
    title: 'Lord Veerbhadra Divine Watercolor Artwork',
    category: 'God & Devotional',
    style: 'Traditional Temple Watercolor Splatter & Celestial Halo',
    imageUrl: '/assets/aistudio/photo-21_2b5bddad.webp',
    altText: 'Lord Veerbhadra warrior deity traditional watercolor spiritual artwork',
    description: 'Intricate traditional watercolor painting style depicting Lord Veerbhadra holding divine weapons with vibrant blue-gold atmospheric wash.',
    featured: false,
  },
  // 22 - Family & Frames
  {
    id: 'photo-22',
    fileNumber: '22',
    title: 'Cherished Family Moments Canvas Frame',
    category: 'Family & Frames',
    style: 'Fine Art Soft Glow & Elegant Border',
    imageUrl: '/assets/aistudio/photo-22_b732b2c7.webp',
    altText: 'Cherished family photo frame with fine art finish and soft golden glow',
    description: 'Artistically blended family photo canvas design with softened vignette edges and custom Tamil family blessing verse.',
    featured: false,
  },
  // 23 - God & Devotional
  {
    id: 'photo-23',
    fileNumber: '23',
    title: 'Auspicious Temple Deity Devotional Creative',
    category: 'God & Devotional',
    style: 'Sacred Gold Ornaments & Divine Temple Backdrop',
    imageUrl: '/assets/aistudio/photo-23_12127bf4.webp',
    altText: 'Divine deity devotional poster with golden jewelry and sacred temple decor',
    description: 'Sacred spiritual poster crafted with pristine detail, glowing golden ornaments, and temple arch embellishments for pooja room frames.',
    featured: false,
  },
];

// Interactive Before / After Retouching Breakdown Pairs
export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: 'baby-scan-keepsake',
    title: 'Baby Scan Keepsake Poster',
    subtitle: 'Drag the slider to see an original ultrasound scan turned into a heart-shaped keepsake poster.',
    beforeSrc: '/assets/aistudio/ba-01-before-scan_2abc828c.webp',
    afterSrc: '/assets/aistudio/ba-01-after-poster_c069aab5.webp',
    tags: [
      'Heart-shaped brush frame',
      'Custom Tamil/English typography',
      'Heartbeat line + floral details',
    ],
    beforeLabel: 'BEFORE • ORIGINAL SCAN',
    afterLabel: 'AFTER • DESIGNED BY THANGAMEH',
  },
];

// Services (6 Cards from Section 6)
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'reels-short-form',
    title: 'Reels & Short-Form Edits',
    tagline: 'Hook viewers in first 2 seconds & boost retention',
    description:
      'High-energy vertical videos tailored for Instagram Reels, YouTube Shorts, and TikTok. Includes kinetic typography, velocity cuts, SFX, and sound selection designed for algorithm traction.',
    deliverables: ['1080×1920 60FPS Delivery', 'Kinetic Tamil & English Subtitles', 'Sound Design & Foley', 'Trending Audio Sync'],
    tools: ['CapCut', 'Alight Motion', 'VN Video Editor'],
    icon: 'Smartphone',
  },
  {
    id: 'event-promo-videos',
    title: 'Event & Brand Promo Videos',
    tagline: 'Cinematic teasers that sell out tickets and conferences',
    description:
      'Turn dates, speaker lineups, and venue footage into Hollywood-grade teasers. Specialized in tech summits, hackathons, college culturals, and product launches with explosive title animations.',
    deliverables: ['16:9 and 9:16 Formats', 'Drone & Action Footage Grade', '3D Motion Title Cards', 'Countdown Stings'],
    tools: ['CapCut Pro', 'VN Pro', 'AI Tools'],
    icon: 'Video',
  },
  {
    id: 'wedding-invitations',
    title: 'Wedding & Invitation Videos',
    tagline: 'Timeless golden memories for your biggest celebrations',
    description:
      'Lush, traditional, and modern animated video invites. Rich marigold motifs, temple architecture cues, auspicious Tamil fonts, and glowing golden bokeh that families treasure and share proudly.',
    deliverables: ['Personalized Couple Story', 'Traditional Nadaswaram / Melodies', 'WhatsApp-Optimized Size', 'Printable Frame Still'],
    tools: ['Alight Motion', 'InShot', 'CapCut'],
    icon: 'HeartHandshake',
  },
  {
    id: 'motion-graphics-titles',
    title: 'Motion Graphics & Title Design',
    tagline: '3D metallic gold typography & logo stingers',
    description:
      'Custom title intros, lower thirds, countdown clocks, typewriter animations, and particle transitions that give your productions an unmistakably high-budget television aesthetic.',
    deliverables: ['Transparent Alpha Overlays', 'Custom 3D Gold Shading', 'Custom Sound Stems', 'Looping Stinger Animations'],
    tools: ['Alight Motion', 'CapCut', 'Canva Pro'],
    icon: 'Sparkles',
  },
  {
    id: 'photo-frames-posters-ads',
    title: 'Photo Frames, Posters & Ad Creatives',
    tagline: 'High-resolution digital keepsakes, flex banners & ad creatives',
    description:
      'Custom photo frames, event posters, flex banners, and high-converting ad creatives for birthdays, anniversaries, housewarmings, businesses, and devotional tributes. Starting from ₹150 for posters/frames and ₹300 for ad creatives.',
    deliverables: ['300 DPI High-Resolution Print Quality', 'Custom Photo Frames & Wall Collages', 'Flex Banners & Standees', 'High-Converting Social Media Ad Creatives'],
    tools: ['Photoshop Workflows', 'Canva Pro', 'AI Enhancers'],
    icon: 'Image',
  },
  {
    id: 'business-content',
    title: 'Social Media Content for Businesses',
    tagline: 'Calm, trustworthy, privacy-respecting content',
    description:
      'Tailored for clinics, hospitals, dental centers, wellness clinics, and yoga professionals. Dignified pacing, patient privacy compliance, warm informative motion graphics, and trustworthy branding.',
    deliverables: ['Educational Reels', 'Doctor/Therapist Spotlight', 'Patient Privacy Adherence', 'Monthly Consistent Branding'],
    tools: ['CapCut', 'InShot', 'AI Voiceovers'],
    icon: 'Building2',
  },
];

// Process (Section 8)
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Brief & Vision',
    description: 'We discuss your concept, target audience, reference videos, assets, deadlines, and preferred style over WhatsApp.',
    highlight: 'Instant alignment',
  },
  {
    step: '02',
    title: 'Concept & Script',
    description: 'I outline the narrative flow, sound design plan, kinetic text layout, and timing blueprint for maximum impact.',
    highlight: 'AI-assisted ideation',
  },
  {
    step: '03',
    title: 'Edit & Design',
    description: 'Crafting the cut: velocity remapping, colour grading in deep blacks and gold, sound effects, and kinetic subtitles.',
    highlight: 'Precision craft',
  },
  {
    step: '04',
    title: 'Watermarked Preview',
    description: 'You receive a private high-definition watermarked preview link to review the pacing and visual flow on your phone.',
    highlight: 'Fast turn-around',
  },
  {
    step: '05',
    title: 'Revisions & Polish',
    description: 'Up to 2 complimentary revision rounds to fine-tune text, timings, music cues, or color until you are 100% ecstatic.',
    highlight: '3-day window',
  },
  {
    step: '06',
    title: 'Final Golden Delivery',
    description: 'Upon final settlement, you receive pristine uncompressed files in multiple aspect ratios (1080p, 4K on request).',
    highlight: 'Ready to publish',
  },
];

// Pricing Plans (Section 9)
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Reel',
    price: '₹1,500',
    period: 'per video',
    popular: false,
    idealFor: 'Content creators, hype clips & quick social announcements',
    features: [
      '20–30s High-Energy Reel',
      'Kinetic Captions (Tamil / English)',
      'Curated Trending Audio & SFX',
      'Smooth Velocity Transitions',
      '2 Revision Rounds Included',
      'Full HD (1080×1920) Delivery',
    ],
    deliveryTime: '3-Day Fast Delivery',
    revisions: '2 Free Revisions',
  },
  {
    id: 'pro-popular',
    name: 'Pro Event / Promo',
    price: '₹3,000',
    period: 'per video',
    popular: true,
    idealFor: 'College summits, weddings, brand launches & conferences',
    features: [
      'Up to 60–90s Cinematic Video',
      '3D Metallic Gold Title Cards',
      'Custom Multi-Layer Sound Design & Foley',
      'Cinematic Color Grading (Teal/Gold)',
      'Drone & Action Footage Integration',
      'Dual Ratios (16:9 + 9:16 Cuts)',
      '2 Comprehensive Revision Rounds',
    ],
    deliveryTime: '3–4 Days Delivery',
    revisions: '2 Free Revisions',
  },
  {
    id: 'monthly-retainer',
    name: 'Monthly Growth Retainer',
    price: '₹15,000',
    period: 'per month',
    popular: false,
    idealFor: 'Brands, clinics, event firms & ambitious business owners',
    features: [
      '12 Reels / Short Videos per Month',
      'Bonus 4 Premium Poster / Photo Designs',
      'Priority Turnaround (24–48hr fast track)',
      'Content Strategy & Hook Brainstorming',
      'Dedicated WhatsApp Channel Support',
      'Consistent Visual Brand Identity',
      'Commercial Music Clearance Guidance',
    ],
    deliveryTime: 'Priority Turnaround',
    revisions: 'Unlimited Minor Tweaks',
  },
];

// Testimonials (Section 10 - 3 marked placeholders with realistic sample clients)
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    quote:
      'Thangamani delivered our CYKRYPT promo with insane cinematic energy! The 3D gold title reveal and drone cut set the entire campus abuzz. Registrations crossed our record within 24 hours.',
    clientName: 'Karthik Raja',
    role: 'Student Coordinator',
    organization: "CYKRYPT '25 Tech Symposium",
    rating: 5,
    projectType: 'Event Promo & Title Reveal',
    avatarText: 'KR',
    isPlaceholderNote: 'Sample Review – Replace with client feedback anytime',
  },
  {
    id: 't-2',
    quote:
      'Our wedding invitation video felt like an opening scene of a luxury film. The marigold details, Tamil lettering, and golden bokeh made my entire family emotional. Worth every rupee.',
    clientName: 'Priya & Vignesh',
    role: 'Newlyweds',
    organization: 'Chennai, Tamil Nadu',
    rating: 5,
    projectType: 'Traditional Gold Wedding Invite',
    avatarText: 'PV',
    isPlaceholderNote: 'Sample Review – Replace with client feedback anytime',
  },
  {
    id: 't-3',
    quote:
      'Finding an editor who understands subtle, dignified medical content is rare. THANGAMEH created patient-friendly reels for our clinic with total privacy respect and clean typography.',
    clientName: 'Dr. S. Aravind',
    role: 'Lead Physiotherapist & Director',
    organization: 'Apex Wellness Center, Coimbatore',
    rating: 5,
    projectType: 'Healthcare Social Media Retainer',
    avatarText: 'DA',
    isPlaceholderNote: 'Sample Review – Replace with client feedback anytime',
  },
];

// FAQ items (Section 11)
export const FAQ_LIST: FAQItem[] = [
  {
    question: 'What is your typical turnaround time for an edit?',
    answer:
      'Standard reels (20–30s) are delivered in 2–3 days. Comprehensive event promos and wedding invitations take 3–4 days. If you have an urgent event deadline, 24-hour rush delivery can be arranged upon request for a small priority surcharge.',
  },
  {
    question: 'How do revisions work?',
    answer:
      'Every project includes 2 complimentary revision rounds within a 3-day window after the initial watermarked preview is sent. Revisions cover text changes, timing trims, music cue adjustments, and color tweaks. Major script changes after initial sign-off are billed nominally.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'We require a 50% advance before project commencement to lock the production schedule. The remaining 50% is payable upon your final approval of the watermarked preview, right before the clean uncompressed high-resolution files are transferred.',
  },
  {
    question: 'What file formats and resolutions do you deliver?',
    answer:
      'By default, vertical reels are delivered in crisp 1080×1920 (9:16) at 60 FPS optimized for Instagram and YouTube algorithms. Horizontal videos are provided in 1080p Full HD (1920×1080) or 4K Ultra HD on request. Posters are rendered at 300 DPI in print-ready PDF and RGB PNG formats.',
  },
  {
    question: 'How are background music and copyright handled?',
    answer:
      'For social media reels, we curate trending royalty-free sounds or trending audio tracks suitable for in-app Instagram/YouTube monetization. For corporate and commercial brand films, we utilize licensed library tracks with no copyright strike risk.',
  },
  {
    question: 'Do you shoot on-location or strictly edit provided footage?',
    answer:
      'I am primarily a post-production specialist (video editor, motion designer, and sound artist). You provide the raw phone videos, camera footage, or drone clips via Google Drive/Telegram, and I turn them into gold. If you need stock or 3D visuals, I source and composite them directly.',
  },
  {
    question: 'What languages do you edit for?',
    answer:
      'I specialize in bilingual content: Tamil (தமிழ்) and English. I am adept at kinetic Tamil font pairing, rhyming dialogue sync, and cultural nuances for audiences across Tamil Nadu and global diaspora.',
  },
];
