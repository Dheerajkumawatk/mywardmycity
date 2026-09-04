import Image from 'next/image';
import { ArrowRight, ExternalLink, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const NEWS = [
  {
    category: 'Rajasthan Election',
    title: 'कांग्रेस 49 और BJP 21 युवा उम्मीदवारों को मैदान में उतार सकती है',
    date: '14 जुलाई 2026',
    image: '/images/news-congress-bjp-youth.png',
  },
  {
    category: 'Local Body Election',
    title: 'राजस्थान हाईकोर्ट ने स्थानीय निकाय चुनाव 31 जुलाई तक कराने के निर्देश दिए',
    date: '14 जुलाई 2026',
    image: '/images/news-high-court-local-body.png',
  },
  {
    category: 'Youth Politics',
    title: 'कांग्रेस युवाओं के लिए 50% टिकट आरक्षित करने की तैयारी में',
    date: '14 जुलाई 2026',
    image: '/images/news-congress-youth-tickets.png',
  },
];

export function NewsChannelSection() {
  return (
    <section
      id="news-channel"
      aria-labelledby="news-channel-title"
      className="bg-surface py-section"
    >
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-jaipur-green">
              News Channel
            </p>
            <h2
              id="news-channel-title"
              className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl"
            >
              Channel009 से ताज़ा खबरें
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              राजनीति, राज्य और देश की जरूरी खबरों के लिए Channel009.news देखें।
            </p>
          </div>

          <Button
            href="http://channel009.news/"
            variant="secondary"
            size="lg"
            className="rounded-pill"
          >
            Channel009 देखें
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {NEWS.map((item) => (
            <a
              key={item.title}
              href="http://channel009.news/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-card border border-navy/10 bg-white shadow-card transition-colors hover:border-jaipur-saffron/60"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-sky-100">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-pill bg-[#EEF7F1] px-3 py-1 text-xs font-bold text-jaipur-green">
                    <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-ink-soft">{item.date}</span>
                </div>
                <h3 className="mt-4 flex-1 text-lg font-extrabold leading-snug text-navy">
                  {item.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-jaipur-saffron">
                  पूरी खबर पढ़ें
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
