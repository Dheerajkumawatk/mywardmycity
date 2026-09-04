/**
 * Site-wide content and configuration for MyCityMyWard.com (Bharat Pehchan).
 *
 * A single-page marketing site for a digital election-campaign service:
 * websites, posters, videos, social media and a full digital customized packaging for
 * municipal-body (नगर निकाय) candidates in Rajasthan.
 *
 * All copy is taken from the approved landing-page design. Phone / email /
 * social links are placeholders — swap them for the live handles before launch.
 */

export type IconName =
  | 'globe'
  | 'id'
  | 'image'
  | 'video'
  | 'thumbs'
  | 'whatsapp'
  | 'megaphone'
  | 'chart'
  | 'clock'
  | 'users'
  | 'rupee'
  | 'bars'
  | 'building';

export type NavItem = { id: string; href: string; labelHi: string };

export type PackageColor = 'green' | 'blue' | 'purple' | 'orange' | 'navy' | 'red';

export type Package = {
  id: string;
  nameEn: string;
  priceHi: string;
  color: PackageColor;
  features: string[];
  ctaHi: string;
  popular?: boolean;
  badgeHi?: string;
};

export const SITE = {
  name: 'MyCityMyWard.com',
  brandShort: 'MyCityMyWard',
  legalName: 'Bharat Pehchan Pvt. Ltd.',
  brandHi: 'भारत पहचान',
  tagline: 'Digital Pehchan, Jeet Ki Udaan!',
  taglineHi:
    'राजस्थान के नगर निकाय चुनाव 2026 के लिए डिजिटल अभियान का सबसे भरोसेमंद साथी',
  phone: '8290 123 456',
  phoneHref: 'tel:+918290123456',
  email: 'support@mycitymyward.com',
  whatsappHref: 'https://wa.me/918290123456',
  addressLine1: 'Bharat Pehchan Pvt. Ltd.',
  addressLine2: 'Jaipur, Rajasthan - 302001',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'hi-IN',
  hours: [
    { dHi: 'सोम – शनि', t: '9:30 AM - 8:00 PM' },
    { dHi: 'रविवार', t: '10:00 AM - 6:00 PM' },
  ],
  copyrightHi:
    '© 2025 MyCityMyWard.com | Bharat Pehchan Pvt. Ltd. | सभी अधिकार सुरक्षित',
} as const;

export const SOCIAL: { label: string; href: string; icon: 'facebook' | 'instagram' | 'youtube' | 'whatsapp' }[] = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
  { label: 'WhatsApp', href: SITE.whatsappHref, icon: 'whatsapp' },
];

export const CTA = {
  demoHi: 'मेरा डेमो बनाएं',
  talkHi: 'अभी बात करें',
  chooseHi: 'चुनें',
  contactUsHi: 'हमसे बात करें',
} as const;

/** Primary navigation — one route per page. */
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', href: '/', labelHi: 'होम' },
  { id: 'services', href: '/services', labelHi: 'सेवाएं' },
  { id: 'packages', href: '/packages', labelHi: 'हमारे पैकेज' },
  { id: 'demo', href: '/demo', labelHi: 'डेमो' },
  { id: 'about', href: '/about', labelHi: 'हमारे बारे में' },
  { id: 'contact', href: '/contact', labelHi: 'संपर्क करें' },
];

/** Per-page header block (breadcrumb label + hero copy). */
export const PAGE_HEADERS: Record<
  'services' | 'packages' | 'demo' | 'about' | 'contact',
  { crumbHi: string; eyebrowHi: string; titleHi: string; introHi: string }
> = {
  services: {
    crumbHi: 'सेवाएं',
    eyebrowHi: 'हमारी सेवाएं',
    titleHi: 'चुनाव अभियान की हर डिजिटल ज़रूरत, एक छत के नीचे',
    introHi:
      'वेबसाइट से लेकर वॉर रूम तक — हर सेवा अनुभवी टीम, तय समय-सीमा और चुनावी समझ के साथ।',
  },
  packages: {
    crumbHi: 'हमारे पैकेज',
    eyebrowHi: 'पारदर्शी कीमत',
    titleHi: 'अपने बजट और ज़रूरत के अनुसार पैकेज चुनें',
    introHi:
      'कोई छिपा हुआ शुल्क नहीं। हर पैकेज में तय डिलिवरेबल्स और साफ़ समय-सीमा। ज़रूरत हो तो कस्टम प्लान भी।',
  },
  demo: {
    crumbHi: 'डेमो',
    eyebrowHi: 'फ्री डेमो',
    titleHi: 'अपनी डिजिटल पहचान का मुफ़्त डेमो देखें',
    introHi:
      'फ़ॉर्म भरें — 48 घंटे में आपके नाम और वार्ड पर बना सैंपल पेज, पोस्टर और रील आपको व्हाट्सएप पर मिलेगी।',
  },
  about: {
    crumbHi: 'हमारे बारे में',
    eyebrowHi: 'भारत पहचान',
    titleHi: 'हर उम्मीदवार को डिजिटल ताकत देना ही हमारा मक़सद',
    introHi:
      'राजस्थान के नगर निकाय चुनाव 2026 के लिए वेबसाइट, क्रिएटिव, सोशल मीडिया और डेटा — एक भरोसेमंद टीम के साथ।',
  },
  contact: {
    crumbHi: 'संपर्क करें',
    eyebrowHi: 'बात करें',
    titleHi: 'अपने अभियान की शुरुआत आज ही करें',
    introHi:
      'कॉल करें, व्हाट्सएप करें या नीचे फ़ॉर्म भरें — हमारी टीम कुछ ही घंटों में आपसे संपर्क करेगी।',
  },
};

/** Long-form detail for each service (used on /services). Order matches SERVICES. */
export const SERVICE_DETAILS: {
  icon: IconName;
  tint: string;
  titleHi: string;
  descHi: string;
  pointsHi: string[];
}[] = [
  {
    icon: 'globe',
    tint: 'text-pkg-blue',
    titleHi: 'कैंडिडेट वेबसाइट',
    descHi:
      'अपने नाम की प्रोफेशनल वेबसाइट — परिचय, संकल्प-पत्र, फोटो-वीडियो गैलरी और सीधा संपर्क, सब एक जगह।',
    pointsHi: ['मोबाइल-फ्रेंडली डिज़ाइन', 'डोमेन व होस्टिंग सेटअप', 'हिंदी + लोकल भाषा', 'तेज़ लोडिंग व SEO'],
  },
  {
    icon: 'id',
    tint: 'text-pkg-navy',
    titleHi: 'डिजिटल प्रोफाइल',
    descHi:
      'एक लिंक जो आपका पूरा परिचय कराता है — व्हाट्सएप, सोशल मीडिया और विज़िटिंग कार्ड पर शेयर करने लायक।',
    pointsHi: ['बायो + उपलब्धियाँ', 'कॉल व व्हाट्सएप बटन', 'QR कोड', 'कभी भी अपडेट'],
  },
  {
    icon: 'image',
    tint: 'text-pkg-green',
    titleHi: 'पोस्टर & बैनर',
    descHi:
      'त्योहार, रैली, घोषणाएँ और रोज़ की पोस्ट — हर मौके के लिए प्रोफेशनल डिज़ाइन, आपके रंग और चिन्ह के साथ।',
    pointsHi: ['प्रिंट + डिजिटल साइज़', 'तेज़ डिलीवरी', 'एक जैसा ब्रांड लुक', 'एडिट करने योग्य फ़ाइलें'],
  },
  {
    icon: 'video',
    tint: 'text-pkg-purple',
    titleHi: 'वीडियो & रील्स',
    descHi:
      'छोटे, असरदार वीडियो जो आपका संदेश घर-घर पहुँचाएँ — इंट्रो, संकल्प, उपलब्धि और जनसंपर्क की झलक।',
    pointsHi: ['स्क्रिप्ट + एडिटिंग', 'सबटाइटल व म्यूज़िक', 'रील/शॉर्ट्स फ़ॉर्मेट', '15–60 सेकंड कट'],
  },
  {
    icon: 'thumbs',
    tint: 'text-pkg-blue',
    titleHi: 'सोशल मीडिया कैंपेन',
    descHi:
      'फेसबुक, इंस्टाग्राम और यूट्यूब पर रोज़ की एक्टिविटी — पोस्टिंग, कमेंट रिप्लाई और पेज ग्रोथ का ज़िम्मा हमारा।',
    pointsHi: ['कंटेंट कैलेंडर', 'रोज़ पोस्टिंग', 'पेज सेटअप व ऑप्टिमाइज़ेशन', 'ग्रोथ रिपोर्ट'],
  },
  {
    icon: 'whatsapp',
    tint: 'text-pkg-green',
    titleHi: 'व्हाट्सएप कैंपेन',
    descHi:
      'वार्ड के मतदाताओं तक सीधा संदेश — ब्रॉडकास्ट, ग्रुप मैनेजमेंट और बूथ-स्तर तक व्यवस्थित पहुँच।',
    pointsHi: ['ब्रॉडकास्ट सेटअप', 'बूथवार लिस्ट', 'मैसेज टेम्पलेट', 'डिलीवरी ट्रैकिंग'],
  },
  {
    icon: 'megaphone',
    tint: 'text-pkg-orange',
    titleHi: 'प्रचार सामग्री',
    descHi:
      'पर्चे, पम्पलेट, होर्डिंग और संकल्प-पत्र — प्रिंट के लिए तैयार फ़ाइलें, एक जैसे डिज़ाइन और भाषा में।',
    pointsHi: ['पम्पलेट व पर्चे', 'होर्डिंग डिज़ाइन', 'संकल्प-पत्र लेआउट', 'प्रिंट-रेडी PDF'],
  },
  {
    icon: 'chart',
    tint: 'text-pkg-red',
    titleHi: 'डिजिटल वॉर रूम',
    descHi:
      'पूरे अभियान की कमान एक जगह से — विज्ञापन प्रबंधन, लाइव डैशबोर्ड, टारगेटिंग और समर्पित सपोर्ट टीम।',
    pointsHi: ['विज्ञापन प्रबंधन', 'लाइव डैशबोर्ड', 'बूथ-स्तर टारगेटिंग', '24x7 प्रायोरिटी सपोर्ट'],
  },
];

/** "How it works" — shared across Services / Demo / Home. */
export const PROCESS_STEPS: { titleHi: string; descHi: string }[] = [
  { titleHi: 'बात करें', descHi: 'कॉल या व्हाट्सएप पर आपकी ज़रूरत, वार्ड और बजट समझते हैं।' },
  { titleHi: 'फ्री डेमो', descHi: '48 घंटे में आपके नाम पर सैंपल पेज, पोस्टर और रील तैयार।' },
  { titleHi: 'पैकेज व शुरुआत', descHi: 'पसंद आने पर पैकेज चुनें; टीम तुरंत काम शुरू करती है।' },
  { titleHi: 'अभियान व रिपोर्ट', descHi: 'रोज़ का कंटेंट, प्रचार और परफ़ॉर्मेंस रिपोर्ट चुनाव तक।' },
];

/** About-page narrative. */
export const ABOUT = {
  leadHi:
    'भारत पहचान एक डिजिटल कैंपेन टीम है जो नगर निकाय चुनाव लड़ रहे उम्मीदवारों के लिए वेबसाइट, क्रिएटिव, सोशल मीडिया और डेटा — सब कुछ एक साथ संभालती है।',
  paraHi: [
    'चुनाव में समय सबसे बड़ी पूँजी है। अलग-अलग लोगों से वेबसाइट, पोस्टर, वीडियो और सोशल मीडिया करवाना महँगा भी पड़ता है और तालमेल भी बिगड़ता है। हम यही पूरा काम एक टीम, एक ज़िम्मेदारी और एक तय समय-सीमा में करते हैं।',
    'हमारी टीम में डिज़ाइनर, वीडियो एडिटर, कॉपीराइटर और डेटा एनालिस्ट शामिल हैं, जिन्हें ग्रामीण और शहरी दोनों तरह के वार्ड में प्रचार का अनुभव है। हर प्रोजेक्ट के लिए एक समर्पित समन्वयक होता है ताकि आपको बार-बार समझाना न पड़े।',
  ],
  missionHi:
    'हर ईमानदार उम्मीदवार — चाहे संसाधन कम हों — मज़बूत डिजिटल पहचान के साथ चुनाव लड़ सके।',
  valuesHi: [
    { titleHi: 'तय समय-सीमा', descHi: 'हर डिलिवरेबल की तारीख़ पहले से तय, लिखित में।' },
    { titleHi: 'पारदर्शी कीमत', descHi: 'पैकेज में जो लिखा है वही — कोई छिपा शुल्क नहीं।' },
    { titleHi: 'एक ज़िम्मेदारी', descHi: 'एक समन्वयक, एक व्हाट्सएप ग्रुप, पूरा अभियान।' },
    { titleHi: 'डेटा-आधारित', descHi: 'हर हफ़्ते रिपोर्ट, ताकि अगला कदम आँकड़ों पर तय हो।' },
  ],
} as const;

/** FAQ — shown on /packages and /contact. */
export const FAQ: { qHi: string; aHi: string }[] = [
  {
    qHi: 'डेमो सच में मुफ़्त है?',
    aHi: 'हाँ। फ़ॉर्म भरने के बाद हम आपके नाम और वार्ड पर एक सैंपल पेज, एक पोस्टर और एक रील बनाकर व्हाट्सएप पर भेजते हैं — इसका कोई शुल्क नहीं।',
  },
  {
    qHi: 'काम पूरा होने में कितना समय लगता है?',
    aHi: 'डिजिटल प्रोफाइल व पोस्टर 2–3 दिन में, वेबसाइट 4–7 दिन में। पैकेज शुरू होते ही हर डिलिवरेबल की तारीख़ लिखित में दी जाती है।',
  },
  {
    qHi: 'क्या पैकेज कस्टमाइज़ हो सकता है?',
    aHi: 'बिल्कुल। किसी पैकेज में से चीज़ें जोड़ी या हटाई जा सकती हैं, या पूरी तरह कस्टम प्लान बनाया जा सकता है। हमसे बात करें।',
  },
  {
    qHi: 'भुगतान कैसे होता है?',
    aHi: 'सामान्यतः 50% काम शुरू करते समय और 50% डिलीवरी पर। बड़े पैकेज के लिए किश्तें भी तय की जा सकती हैं।',
  },
  {
    qHi: 'क्या आप मेरे क्षेत्र में काम करते हैं?',
    aHi: 'हम पूरे राजस्थान में नगर निगम, नगर परिषद और नगर पालिका चुनावों के लिए काम करते हैं। काम रिमोट होता है, इसलिए दूरी कोई बाधा नहीं।',
  },
  {
    qHi: 'क्या आचार संहिता का ध्यान रखा जाता है?',
    aHi: 'हाँ। सभी क्रिएटिव और प्रचार सामग्री चुनाव आयोग की गाइडलाइन को ध्यान में रखकर बनाई जाती है; ज़रूरी डिस्क्लेमर जोड़े जाते हैं।',
  },
];


export const HERO = {
  eyebrowHi: 'नगर निकाय चुनाव लड़ रहे हैं?',
  titleAccentHi: 'अपनी डिजिटल पहचान',
  titleRestHi: 'तुरंत तैयार करें।',
  subHi:
    'वेबसाइट, पोस्टर, वीडियो, सोशल मीडिया और पूरा डिजिटल अभियान — एक जगह, एक टीम, एक ज़िम्मेदारी।',
  chipsHi: ['तेज़ डिलीवरी', 'प्रोफेशनल टीम', 'किफायती पैकेज', 'पूर्ण डिजिटल सपोर्ट'],
  stats: [
    { value: '500+', labelHi: 'खुश उम्मीदवार' },
    { value: '99,000+', labelHi: 'ग्रामीण नेटवर्क' },
    { value: 'फास्ट डिलीवरी', labelHi: '24x7 सपोर्ट' },
  ],
} as const;

export const SERVICES: { icon: IconName; labelHi: string; tint: string }[] = [
  { icon: 'globe', labelHi: 'कैंडिडेट वेबसाइट', tint: 'text-pkg-blue' },
  { icon: 'id', labelHi: 'डिजिटल प्रोफाइल', tint: 'text-pkg-navy' },
  { icon: 'image', labelHi: 'पोस्टर & बैनर', tint: 'text-pkg-green' },
  { icon: 'video', labelHi: 'वीडियो & रील्स', tint: 'text-pkg-purple' },
  { icon: 'thumbs', labelHi: 'सोशल मीडिया कैंपेन', tint: 'text-pkg-blue' },
  { icon: 'whatsapp', labelHi: 'व्हाट्सएप कैंपेन', tint: 'text-pkg-green' },
  { icon: 'megaphone', labelHi: 'प्रचार सामग्री', tint: 'text-pkg-orange' },
  { icon: 'chart', labelHi: 'डिजिटल वॉर रूम', tint: 'text-pkg-red' },
];

export const PACKAGES: Package[] = [
  {
    id: 'digital-identity',
    nameEn: 'DIGITAL IDENTITY',
    priceHi: '₹2,999',
    color: 'green',
    ctaHi: 'चुनें',
    features: ['डिजिटल प्रोफाइल', 'कैंडिडेट बायो पेज', 'फोटो गैलरी', 'कॉन्टैक्ट बटन', 'शेयर लिंक'],
  },
  {
    id: 'start',
    nameEn: 'START',
    priceHi: '₹5,999',
    color: 'blue',
    ctaHi: 'चुनें',
    features: [
      'डिजिटल प्रोफाइल',
      '5 पोस्टर (डिज़ाइन)',
      '2 सोशल मीडिया पोस्ट/दिन',
      'कैंपेन कवर इमेज',
      '4 रील्स (टेम्पलेट बेस्ड)',
    ],
  },
  {
    id: 'election-starter',
    nameEn: 'ELECTION STARTER',
    priceHi: '₹9,999',
    color: 'purple',
    ctaHi: 'चुनें',
    features: [
      'कैंडिडेट वेबसाइट',
      '10 पोस्टर (डिज़ाइन)',
      '3 रील्स (डायनामिक)',
      '3 वीडियो (15-30 सेकंड)',
      'सोशल मीडिया मैनेजमेंट',
    ],
  },
  {
    id: 'grow',
    nameEn: 'GROW',
    priceHi: '₹19,999',
    color: 'orange',
    ctaHi: 'चुनें',
    popular: true,
    badgeHi: 'सबसे लोकप्रिय',
    features: [
      'कैंडिडेट वेबसाइट (डोमेन सहित)',
      '20 पोस्टर (डिज़ाइन)',
      '10 रील्स (डायनामिक)',
      '5 वीडियो (30-60 सेकंड)',
      'सोशल मीडिया मैनेजमेंट',
      'व्हाट्सएप ब्रॉडकास्ट (2 कैंपेन)',
      'मासिक परफॉर्मेंस रिपोर्ट',
    ],
  },
  {
    id: 'pro',
    nameEn: 'PRO',
    priceHi: '₹39,999',
    color: 'navy',
    ctaHi: 'चुनें',
    features: [
      'एडवांस कैंडिडेट वेबसाइट',
      'असीमित पोस्टर (डिज़ाइन)',
      'असीमित रील्स',
      '10+ प्रोफेशनल वीडियो',
      'सोशल मीडिया मैनेजमेंट',
      'व्हाट्सएप ब्रॉडकास्ट (4 कैंपेन)',
      'प्रचार सामग्री (PDF/प्रिंट)',
      'साप्ताहिक परफॉर्मेंस रिपोर्ट',
      'डेडिकेटेड सपोर्ट मैनेजर',
    ],
  },
  {
    id: 'war-room',
    nameEn: 'DIGITAL customized packaging',
    priceHi: '₹75,000+',
    color: 'red',
    ctaHi: 'हमसे बात करें',
    features: [
      'PRO की सभी सुविधाएं',
      'एडवांस विज्ञापन प्रबंधन',
      'लाइव डैशबोर्ड & डेटा एनालिटिक्स',
      'वॉर रूम सपोर्ट टीम',
      'कॉल सेंटर सपोर्ट',
      'एडवांस टारगेटिंग कैंपेन',
      '24x7 प्रायोरिटी सपोर्ट',
    ],
  },
];

export const PACKAGES_NOTE_HI =
  'नोट: पैकेज और ज़रूरत के अनुसार कस्टम समाधान भी उपलब्ध हैं।';

/** Options for the lead form's "interest" select (declared after PACKAGES). */
export const LEAD_INTEREST_OPTIONS_HI: string[] = [
  'फ्री डेमो',
  ...PACKAGES.map((p) => `${p.nameEn} — ${p.priceHi}`),
  'कस्टम / डिजिटल वॉर रूम',
  'अभी तय नहीं',
];

export const WHY_US: { icon: IconName; labelHi: string; tint: string }[] = [
  { icon: 'clock', labelHi: 'तेज और समय पर डिलीवरी', tint: 'text-pkg-orange' },
  { icon: 'users', labelHi: 'प्रोफेशनल और क्रिएटिव टीम', tint: 'text-pkg-green' },
  { icon: 'rupee', labelHi: 'किफायती कीमत में बेहतरीन सेवा', tint: 'text-pkg-purple' },
  { icon: 'bars', labelHi: 'टेक्नोलॉजी और डेटा का उपयोग', tint: 'text-[#4aa3ff]' },
  { icon: 'building', labelHi: 'ग्रामीण और शहरी दोनों में अनुभव', tint: 'text-jaipur-saffron' },
];

export const TESTIMONIAL = {
  quoteHi:
    'भारत पहचान टीम ने मेरे चुनाव अभियान को नई पहचान दी। वेबसाइट, पोस्टर, रील्स सब कुछ समय पर और बेहतरीन क्वालिटी में मिला।',
  nameHi: 'विकास शर्मा',
  roleHi: 'पार्षद प्रत्याशी, जयपुर',
} as const;

export const WHY_US_HEADING_HI = 'क्यों चुनें भारत पहचान?';

export const CLOSING_CTA_HI =
  'आज ही शुरुआत करें और अपने चुनाव अभियान को डिजिटल ताकत दें!';

export const FOOTER = {
  aboutHi:
    'भारत पहचान का अभियान — राजस्थान के हर उम्मीदवार और aspirant को डिजिटल ताकत देने के लिए प्रतिबद्ध।',
  quickLinks: NAV_ITEMS.filter((n) => n.id !== 'about'),
  servicesHi: [
    'कैंडिडेट वेबसाइट',
    'डिजिटल प्रोफाइल',
    'पोस्टर & बैनर',
    'वीडियो & रील्स',
    'सोशल मीडिया कैंपेन',
    'डिजिटल वॉर रूम',
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ],
} as const;
