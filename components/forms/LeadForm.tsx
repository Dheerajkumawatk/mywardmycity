'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { SITE, LEAD_INTEREST_OPTIONS_HI, PACKAGES } from '@/data/content';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { createClient } from '@/lib/supabase/client';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().trim().min(2, 'कृपया अपना नाम लिखें'),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, '10 अंकों का सही मोबाइल नंबर लिखें'),
  place: z.string().trim().min(2, 'शहर / नगर निकाय लिखें'),
  ward: z.string().trim().optional(),
  interest: z.string().trim().optional(),
  message: z.string().trim().max(600, 'संदेश थोड़ा छोटा रखें').optional(),
});

type FormValues = z.infer<typeof schema>;

const WHATSAPP_DIGITS = SITE.whatsappHref.replace(/\D/g, '');

function fieldLabel(variant: 'demo' | 'contact') {
  return variant === 'demo' ? 'फ्री डेमो के लिए फ़ॉर्म भरें' : 'हमें संदेश भेजें';
}

export function LeadForm({ variant = 'contact' }: { variant?: 'demo' | 'contact' }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const [done, setDone] = useState(false);
  const [waLink, setWaLink] = useState<string>(SITE.whatsappHref);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Prefill the "interest" select from a ?plan=<id> query param (from pricing cards).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planId = params.get('plan');
    if (!planId) return;
    const pkg = PACKAGES.find((p) => p.id === planId);
    if (pkg) setValue('interest', `${pkg.nameEn} — ${pkg.priceHi}`);
  }, [setValue]);

  const onSubmit = async (v: FormValues) => {
    setSubmitError(null);

    // Save the lead to Supabase — this is what shows up in the admin panel.
    const supabase = createClient();
    const { error } = await supabase.from('leads').insert({
      type: variant,
      name: v.name,
      phone: v.phone,
      place: v.place,
      ward: v.ward || null,
      interest: v.interest || null,
      message: v.message || null,
      source: typeof window !== 'undefined' ? window.location.pathname : null,
    });

    if (error) {
      setSubmitError('अभी सबमिट नहीं हो पाया। कृपया दोबारा कोशिश करें या सीधे व्हाट्सएप/कॉल करें।');
      return;
    }

    // Also build a prefilled WhatsApp message for the success screen.
    const lines = [
      variant === 'demo' ? 'नमस्ते! मुझे फ्री डेमो चाहिए।' : 'नमस्ते! मैं जानकारी चाहता/चाहती हूँ।',
      `नाम: ${v.name}`,
      `मोबाइल: ${v.phone}`,
      `शहर / नगर निकाय: ${v.place}`,
      v.ward ? `वार्ड नं.: ${v.ward}` : null,
      v.interest ? `रुचि: ${v.interest}` : null,
      v.message ? `संदेश: ${v.message}` : null,
    ].filter(Boolean);
    setWaLink(`https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(lines.join('\n'))}`);
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-card border border-jaipur-green/30 bg-jaipur-green/[0.06] p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-jaipur-green" aria-hidden="true" />
        <h3 className="mt-3 text-lg font-extrabold text-navy">जानकारी दर्ज हो गई</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
          हमारी टीम को आपकी जानकारी मिल गई है और कुछ ही घंटों में आपसे संपर्क करेगी। चाहें तो अभी
          व्हाट्सएप या कॉल पर भी बात कर सकते हैं।
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-pill bg-jaipur-green px-5 text-sm font-bold text-white hover:bg-[#188a3f]"
          >
            <SocialIcon name="whatsapp" className="h-4 w-4" />
            व्हाट्सएप पर भेजें
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-pill border-2 border-navy bg-white px-5 text-sm font-bold text-navy hover:bg-surface"
          >
            {SITE.phone} पर कॉल करें
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label={fieldLabel(variant)}
      className="rounded-card border border-navy/12 bg-white p-6 shadow-card"
    >
      <h2 className="text-lg font-extrabold text-navy">{fieldLabel(variant)}</h2>
      <p className="mt-1 text-sm text-ink-muted">
        <span className="text-jaipur-saffron">*</span> ज़रूरी जानकारी। भेजने पर हमारी टीम आपसे संपर्क करेगी।
      </p>

      {submitError ? (
        <p
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-lg border border-pkg-red/30 bg-pkg-red/[0.06] px-3 py-2.5 text-sm font-medium text-pkg-red"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {submitError}
        </p>
      ) : null}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id="name" label="नाम" required error={errors.name?.message}>
          <input id="name" type="text" autoComplete="name" {...register('name')} className={inputCls(!!errors.name)} />
        </Field>

        <Field id="phone" label="मोबाइल नंबर" required error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10 अंक"
            {...register('phone')}
            className={inputCls(!!errors.phone)}
          />
        </Field>

        <Field id="place" label="शहर / नगर निकाय" required error={errors.place?.message}>
          <input id="place" type="text" {...register('place')} className={inputCls(!!errors.place)} />
        </Field>

        <Field id="ward" label="वार्ड नं. (यदि पता हो)" error={errors.ward?.message}>
          <input id="ward" type="text" {...register('ward')} className={inputCls(false)} />
        </Field>

        <Field id="interest" label="रुचि" className="sm:col-span-2" error={errors.interest?.message}>
          <select id="interest" {...register('interest')} className={cn(inputCls(false), 'bg-white')} defaultValue="">
            <option value="" disabled>
              चुनें…
            </option>
            {LEAD_INTEREST_OPTIONS_HI.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>

        <Field id="message" label="संदेश (वैकल्पिक)" className="sm:col-span-2" error={errors.message?.message}>
          <textarea id="message" rows={3} {...register('message')} className={inputCls(!!errors.message)} />
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-pill bg-jaipur-saffron px-6 text-base font-bold text-white shadow-card transition-colors hover:bg-[#d9571a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jaipur-saffron focus-visible:ring-offset-2 disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        {variant === 'demo' ? 'डेमो के लिए भेजें' : 'संदेश भेजें'}
      </button>

      <p className="mt-3 text-xs text-ink-soft">
        फ़ॉर्म भेजने पर आप हमारी{' '}
        <a href="/privacy" className="underline hover:text-navy">
          गोपनीयता नीति
        </a>{' '}
        से सहमत होते हैं। जानकारी केवल आपसे संपर्क के लिए उपयोग होती है।
      </p>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    'w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors',
    'focus-visible:ring-2 focus-visible:ring-jaipur-saffron focus-visible:ring-offset-1',
    hasError ? 'border-pkg-red' : 'border-navy/20 focus:border-navy',
  );
}

function Field({
  id,
  label,
  required = false,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
        {required ? <span className="text-jaipur-saffron"> *</span> : null}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p role="alert" className="mt-1 text-xs font-medium text-pkg-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}
