import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `${SITE.name} की गोपनीयता नीति — कौन-सा डेटा एकत्र किया जाता है, किस उद्देश्य से और उसे कैसे सुरक्षित रखा जाता है।`,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-content px-gutter py-section">
      <nav aria-label="ब्रेडक्रम्ब" className="text-sm text-ink-muted">
        <Link href="/" className="hover:text-navy">
          होम
        </Link>{' '}
        / <span className="font-medium text-navy">Privacy Policy</span>
      </nav>

      <h1 className="mt-4 text-3xl font-extrabold text-navy">गोपनीयता नीति</h1>
      <p className="mt-1 text-sm text-ink-soft">अंतिम अद्यतन: 3 सितम्बर 2026</p>

      <div className="prose-hi mt-6">
        <p>
          यह नीति <strong>{SITE.name}</strong> ({SITE.legalName}) की वेबसाइट पर आपके द्वारा साझा की गई
          जानकारी पर लागू होती है। हम केवल वही जानकारी माँगते हैं जो आपसे संपर्क करने और सेवा देने के लिए
          आवश्यक है।
        </p>

        <h2>1. हम कौन-सी जानकारी एकत्र करते हैं</h2>
        <ul>
          <li>संपर्क/डेमो अनुरोध पर दिया गया नाम, मोबाइल नंबर, ईमेल एवं आपका संदेश।</li>
          <li>वेबसाइट की सुरक्षा एवं दुरुपयोग-रोकथाम हेतु सीमित तकनीकी लॉग।</li>
        </ul>

        <h2>2. उपयोग का उद्देश्य</h2>
        <ul>
          <li>आपके अनुरोध पर प्रतिक्रिया देने, डेमो तैयार करने एवं सेवा समन्वय के लिए।</li>
          <li>बिलिंग, सहायता एवं सेवा-संबंधी सूचनाओं के लिए।</li>
        </ul>
        <p>हम आपकी जानकारी किसी विज्ञापन नेटवर्क या डेटा-ब्रोकर को नहीं बेचते।</p>

        <h2>3. साझा करना</h2>
        <p>
          जानकारी केवल सेवा-वितरण हेतु आवश्यक सेवा-प्रदाताओं (जैसे होस्टिंग, संदेश-सेवा) के साथ, आवश्यक
          न्यूनतम सीमा तक साझा की जाती है।
        </p>

        <h2>4. प्रतिधारण एवं सुरक्षा</h2>
        <p>
          जानकारी उचित अवधि तक रखी जाती है और परिवहन के दौरान HTTPS एवं मानक सुरक्षा नियंत्रणों से
          सुरक्षित की जाती है।
        </p>

        <h2>5. आपके अधिकार</h2>
        <p>
          आप अपनी जानकारी तक पहुँच, सुधार या विलोपन का अनुरोध{' '}
          <Link href="/contact">संपर्क फ़ॉर्म</Link> के माध्यम से कर सकते हैं।
        </p>

        <h2>6. नीति में परिवर्तन</h2>
        <p>परिवर्तन इसी पृष्ठ पर “अंतिम अद्यतन” तिथि के साथ प्रकाशित किए जाएँगे।</p>

        <h2>7. संपर्क</h2>
        <p>
          {SITE.legalName}, {SITE.addressLine2} · {SITE.phone}
        </p>
      </div>
    </div>
  );
}
