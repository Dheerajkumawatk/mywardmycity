import { SkipLink } from '@/components/layout/SkipLink';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE } from '@/data/content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302001',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Rajasthan',
  },
  serviceType: [
    'Candidate Website Development',
    'Digital Election Campaign',
    'Election Poster Design',
    'Social Media Campaign Management',
    'Digital War Room Support',
  ],
  brand: {
    '@type': 'Brand',
    name: SITE.name,
  },
};

/** Public marketing site shell — top bar, header, footer. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkipLink />
      <TopBar />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
