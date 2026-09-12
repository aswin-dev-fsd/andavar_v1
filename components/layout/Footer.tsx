import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Aperture } from '../design/Aperture';

export function Footer() {
  const t = useTranslations('Navigation');
  // Need English translations for footer text if we are translating, 
  // but we can hardcode for now or use next-intl. Let's use simple text for now 
  // and we'll translate it later if needed, or stick to English if acceptable.
  // The spec says: "Every translatable string must have English and Tamil content."
  // For the sake of the structural component, I'll put placeholders here and we'll add to json later.
  
  return (
    <footer className="relative bg-[var(--color-dark-bg)] text-[var(--color-dark-body)] overflow-hidden pt-[clamp(64px,11vw,136px)] pb-[clamp(32px,5vw,64px)]">
      {/* Decorative Aperture */}
      <div className="absolute -bottom-32 -right-32 opacity-10 pointer-events-none">
        <Aperture size={400} ringCount={4} />
      </div>

      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] relative z-10">
        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 min-[860px]:grid-cols-4 gap-[clamp(32px,5vw,80px)]">
          
          {/* Col 1: Brand & Desc */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="font-bold text-[19px] leading-tight text-[var(--color-dark-heading)]">Shri Andavar</span>
              <span className="text-[11px] font-semibold text-[var(--color-dark-eyebrow)] tracking-wider uppercase">Eye Care & Retina Centre</span>
            </div>
            <p className="text-caption">
              A calm, trustworthy eye hospital in Pollachi providing cataract surgery, retina care, and comprehensive eye examinations.
            </p>
          </div>

          {/* Col 2: Treatments */}
          <div className="flex flex-col gap-4">
            <h4 className="text-eyebrow text-[var(--color-dark-heading)]">Treatments</h4>
            <ul className="flex flex-col gap-3 text-caption">
              <li><Link href="/cataract-surgery" className="hover:text-white transition-colors min-h-[48px] flex items-center">Cataract surgery</Link></li>
              <li><Link href="/treatments" className="hover:text-white transition-colors min-h-[48px] flex items-center">Retina care</Link></li>
              <li><Link href="/treatments" className="hover:text-white transition-colors min-h-[48px] flex items-center">Diabetic eye care</Link></li>
              <li><Link href="/treatments" className="hover:text-white transition-colors min-h-[48px] flex items-center">Glaucoma</Link></li>
              <li><Link href="/treatments" className="hover:text-white transition-colors min-h-[48px] flex items-center">Full eye examination</Link></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-eyebrow text-[var(--color-dark-heading)]">Hospital</h4>
            <ul className="flex flex-col gap-3 text-caption">
              <li><Link href="/our-surgeon" className="hover:text-white transition-colors min-h-[48px] flex items-center">{t('ourSurgeon')}</Link></li>
              <li><Link href="/schemes" className="hover:text-white transition-colors min-h-[48px] flex items-center">{t('schemes')}</Link></li>
              <li><Link href="/visit-us" className="hover:text-white transition-colors min-h-[48px] flex items-center">{t('visitUs')}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors min-h-[48px] flex items-center">{t('about')}</Link></li>
              <li><Link href="/patient-stories" className="hover:text-white transition-colors min-h-[48px] flex items-center">Patient stories</Link></li>
              <li><Link href="/eye-health" className="hover:text-white transition-colors min-h-[48px] flex items-center">Eye health</Link></li>
            </ul>
          </div>

          {/* Col 4: Visit */}
          <div className="flex flex-col gap-4">
            <h4 className="text-eyebrow text-[var(--color-dark-heading)]">Visit</h4>
            <address className="not-italic text-caption flex flex-col gap-4">
              <p>
                No. 73, Palladam Road<br/>
                Opposite LMHSS School<br/>
                T. Kottampatti<br/>
                Pollachi 642002
              </p>
              <div>
                <span className="block text-[var(--color-dark-muted)] mb-1">Consulting hours:</span>
                <p>Mon–Sat: 10am–2pm, 5pm–7pm<br/>Sunday: Closed</p>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <a href="tel:+914259000000" className="text-[var(--color-dark-eyebrow)] hover:text-white transition-colors font-medium min-h-[48px] flex items-center">Call the hospital</a>
                <a href="https://maps.app.goo.gl/placeholder" target="_blank" rel="noopener noreferrer" className="text-[var(--color-dark-eyebrow)] hover:text-white transition-colors font-medium min-h-[48px] flex items-center">Get directions</a>
              </div>
            </address>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-dark-hairline)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-caption text-[var(--color-dark-muted)]">
          <p>© {new Date().getFullYear()} Shri Andavar Eye Care and Retina Centre.</p>
        </div>
      </div>
    </footer>
  );
}
