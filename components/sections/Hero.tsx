import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Check } from 'lucide-react';
import { HERO, CTA } from '@/data/content';

/**
 * Hero.
 *
 * Desktop (lg+): the finished artwork `public/images/banner-1.png` is shown
 * full-bleed and the live text is positioned on top of it — the headline block
 * on the left, and the three proof-point labels dropped into the three boxes
 * baked into the artwork. All overlay geometry is expressed as a percentage of
 * the banner, and every overlay font uses `cqw` (a share of the banner's own
 * width) via `[container-type:inline-size]`, so the text tracks the artwork at
 * any screen size.
 *
 * Mobile: the banner is dropped and a normal stacked layout is used instead.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#e6f4ff] scroll-mt-24"
    >
      {/* ================= DESKTOP ================= */}
      <div className="relative mx-auto hidden w-full max-w-[2048px] [container-type:inline-size] lg:block">
        <Image
          src="/images/banner-1.png"
          alt=""
          width={2048}
          height={914}
          priority
          sizes="100vw"
          className="block h-auto w-full select-none"
        />

        {/* ---- left: headline + pitch + CTAs ---- */}
        <div className="absolute left-[5%] top-1/2 z-20 w-[41%] -translate-y-1/2">
          <h1 id="hero-title" className="font-extrabold leading-[1.22]">
            <span className="block text-navy [font-size:clamp(26px,2.45cqw,50px)]">
              {HERO.eyebrowHi}
            </span>
            <span className="block text-jaipur-saffron [font-size:clamp(26px,2.45cqw,50px)]">
              {HERO.titleAccentHi}
            </span>
            <span className="block text-navy [font-size:clamp(26px,2.45cqw,50px)]">
              {HERO.titleRestHi}
            </span>
          </h1>

          <p className="mt-[3cqw] max-w-[34cqw] leading-relaxed text-ink-muted [font-size:clamp(13px,1.02cqw,19px)] xl:mt-[1.6cqw]">
            {HERO.subHi}
          </p>

          <ul className="mt-[2cqw] flex flex-wrap items-center gap-x-3 gap-y-2 font-medium text-navy [font-size:clamp(12px,0.86cqw,16px)]">
            {HERO.chipsHi.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-navy/20" />}
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-navy/25">
                    <Check className="h-3.5 w-3.5 text-navy" aria-hidden="true" />
                  </span>
                  {c}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-[2.6cqw] flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-jaipur-saffron px-6 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9571a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jaipur-saffron focus-visible:ring-offset-2 [font-size:clamp(13px,0.9cqw,16px)]"
            >
              {CTA.demoHi}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-navy bg-white px-6 font-bold text-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f6f9fc] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jaipur-saffron focus-visible:ring-offset-2 [font-size:clamp(13px,0.9cqw,16px)]"
            >
              {CTA.talkHi}
              <Phone className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* ---- right: the three baked-in boxes ---- */}
        {/* Box 1 — dark navy: 500+ / खुश उम्मीदवार */}
        <div className="absolute left-[82.7%] top-[27.8%] z-30 flex h-[17.6%] w-[14.1%] flex-col items-center justify-center gap-[0.5cqw] px-[1cqw] text-center">
          <p className="whitespace-nowrap font-extrabold leading-none text-white [font-size:clamp(22px,2.55cqw,50px)]">
            500+
          </p>
          <p className="whitespace-nowrap font-bold leading-tight text-white [font-size:clamp(11px,1.22cqw,25px)]">
            खुश उम्मीदवार
          </p>
        </div>

        {/* Box 2 — white: 99,000+ / ग्रामीण नेटवर्क */}
        <div className="absolute left-[82.7%] top-[48%] z-30 flex h-[17.4%] w-[14.3%] flex-col items-center justify-center gap-[0.4cqw] px-[1cqw] text-center">
          <p className="whitespace-nowrap font-extrabold leading-none text-[#ef681f] [font-size:clamp(18px,2.05cqw,42px)]">
            99,000+
          </p>
          <p className="whitespace-nowrap font-bold leading-tight text-navy [font-size:clamp(11px,1.2cqw,25px)]">
            ग्रामीण नेटवर्क
          </p>
        </div>

        {/* Box 3 — white: फास्ट डिलीवरी / 24x7 सपोर्ट */}
        <div className="absolute left-[82.8%] top-[66.8%] z-30 flex h-[15.4%] w-[14.2%] flex-col items-center justify-center gap-[0.3cqw] px-[1cqw] text-center">
          <p className="whitespace-nowrap font-extrabold leading-tight text-[#ef681f] [font-size:clamp(14px,1.6cqw,33px)]">
            फास्ट डिलीवरी
          </p>
          <p className="whitespace-nowrap font-bold leading-tight text-navy [font-size:clamp(12px,1.32cqw,28px)]">
            24x7 सपोर्ट
          </p>
        </div>
      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="relative px-5 py-10 sm:px-8 lg:hidden">
        <h1 id="hero-title-mobile" className="text-3xl font-extrabold leading-[1.25] sm:text-4xl">
          <span className="block text-navy">{HERO.eyebrowHi}</span>
          <span className="block text-jaipur-saffron">{HERO.titleAccentHi}</span>
          <span className="block text-navy">{HERO.titleRestHi}</span>
        </h1>

        <p className="mt-5 text-base leading-relaxed text-ink-muted">{HERO.subHi}</p>

        <ul className="mt-6 flex flex-col gap-3 text-sm font-medium text-navy">
          {HERO.chipsHi.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-navy/25">
                <Check className="h-3.5 w-3.5 text-navy" aria-hidden="true" />
              </span>
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/demo"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-jaipur-saffron px-6 font-bold text-white shadow-lg"
          >
            {CTA.demoHi}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-navy bg-white px-6 font-bold text-navy"
          >
            {CTA.talkHi}
            <Phone className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#092b57] px-4 py-5 text-center shadow-lg">
            <p className="text-2xl font-extrabold text-white">500+</p>
            <p className="mt-1 font-bold text-white">खुश उम्मीदवार</p>
          </div>
          <div className="rounded-2xl bg-white px-4 py-5 text-center shadow-lg ring-1 ring-navy/10">
            <p className="text-2xl font-extrabold text-[#ef681f]">99,000+</p>
            <p className="mt-1 font-bold text-navy">ग्रामीण नेटवर्क</p>
          </div>
          <div className="rounded-2xl bg-white px-4 py-5 text-center shadow-lg ring-1 ring-navy/10">
            <p className="text-xl font-extrabold text-[#ef681f]">फास्ट डिलीवरी</p>
            <p className="mt-1 font-bold text-navy">24x7 सपोर्ट</p>
          </div>
        </div>
      </div>
    </section>
  );
}
