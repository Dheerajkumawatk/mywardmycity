import { CLOSING_CTA_HI } from '@/data/content';
import { CtaBand } from './CtaBand';

/** Home-page closing CTA — thin wrapper over the reusable band. */
export function ClosingCta() {
  return <CtaBand headingHi={CLOSING_CTA_HI} />;
}
