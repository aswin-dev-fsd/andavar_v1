import React from 'react';
import { PrimaryButton, GhostButton } from '../design/Buttons';
import { Aperture } from '../design/Aperture';
import { useTranslations } from 'next-intl';
import { Reveal } from '../design/Reveal';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
  band?: 'ground' | 'warm' | 'cool';
  className?: string;
}

export function PageHero({ eyebrow, title, lede, children, band = 'ground', className = '' }: PageHeroProps) {
  let bgClass = 'bg-[var(--color-ground)]';
  if (band === 'warm') bgClass = 'bg-[var(--color-warm)]';
  if (band === 'cool') bgClass = 'bg-[var(--color-cool)]';

  return (
    <section className={`relative overflow-hidden pt-[clamp(36px,5vw,64px)] pb-[clamp(48px,8vw,80px)] ${bgClass} ${className}`}>
      {/* Background Aperture (Top Right) */}
      <div className="absolute top-0 right-0 max-w-full opacity-20 min-[900px]:opacity-60 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <Aperture size={600} ringCount={5} />
      </div>

      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] relative z-10">
        <Reveal className="max-w-[800px] flex flex-col gap-6">
          {eyebrow && <span className="text-eyebrow text-[var(--color-blue)]">{eyebrow}</span>}
          <h1 className="text-display-1 max-w-hero">{title}</h1>
          {lede && <p className="text-lede max-w-lede text-[var(--color-ink-2)]">{lede}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function ClosingCall({ dark = false }: { dark?: boolean }) {
  const t = useTranslations('Buttons');
  
  if (dark) {
    return (
      <section className="bg-[var(--color-dark-bg)] text-[var(--color-dark-body)] py-[clamp(80px,12vw,140px)] text-center px-[clamp(20px,5vw,40px)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <Aperture size={800} ringCount={6} />
        </div>
        <Reveal className="max-w-[600px] mx-auto relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-display-2 text-[var(--color-dark-heading)]">Ready to see us?</h2>
          <p className="text-lede">Call to arrange a consultation or ask a question. We are here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <PrimaryButton href="tel:+914259000000" className="w-full sm:w-auto">{t('callHospital')}</PrimaryButton>
            <GhostButton href="/visit-us" className="w-full sm:w-auto text-[var(--color-dark-heading)] border-[var(--color-dark-hairline)] hover:bg-[var(--color-dark-hairline)]">{t('directions')}</GhostButton>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="bg-[var(--color-warm)] py-[clamp(80px,12vw,140px)] text-center px-[clamp(20px,5vw,40px)]">
      <Reveal className="max-w-[600px] mx-auto flex flex-col items-center gap-8">
        <h2 className="text-display-2 text-[var(--color-ink)]">Ready to see us?</h2>
        <p className="text-lede text-[var(--color-ink-2)]">Call to arrange a consultation or ask a question. We are here to help.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <PrimaryButton href="tel:+914259000000" className="w-full sm:w-auto">{t('callHospital')}</PrimaryButton>
          <GhostButton href="/visit-us" className="w-full sm:w-auto">{t('directions')}</GhostButton>
        </div>
      </Reveal>
    </section>
  );
}
