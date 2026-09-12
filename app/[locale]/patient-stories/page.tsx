import React from 'react';
import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/LayoutSections';
import { Card } from '@/components/design/Card';
import { PrimaryButton } from '@/components/design/Buttons';
import { Aperture } from '@/components/design/Aperture';

export default function PatientStoriesPage() {
  const StarRow = () => (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-amber)" stroke="var(--color-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ))}
    </div>
  );

  return (
    <main>
      {/* SECTION 1 - HERO */}
      <PageHero
        title="What people say afterwards."
        lede="Collected from patients and families who agreed to have their words published."
        band="warm"
      >
        <div className="absolute top-[32px] left-[clamp(20px,5vw,40px)] z-20 text-caption text-[var(--color-ink-3)] font-medium">
          <Link href="/" className="hover:text-[var(--color-blue)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-ink)]">Patient stories</span>
        </div>
      </PageHero>

      {/* SECTION 2 - THE STORIES */}
      <section className="bg-[var(--color-ground)] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col gap-8">
          
          <div className="border-[1.5px] border-dashed border-[var(--color-amber)] bg-[var(--color-amber-wash)] rounded-[14px] p-[clamp(20px,3vw,30px)]">
            <h4 className="text-h4 text-[var(--color-ink)] mb-2">A note for the hospital, not the patient</h4>
            <p className="text-body text-[var(--color-ink-2)]">
              These quotations are placeholders. Replace before launch. Google reviews can be pulled in automatically. Remove this box when the real quotations are in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(24px,4vw,32px)]">
            <Card className="flex flex-col h-full">
              <StarRow />
              <h4 className="text-eyebrow text-[var(--color-blue)] mb-4">Cataract surgery, both eyes</h4>
              <p className="text-body text-[var(--color-ink-2)] italic flex-grow mb-6">"I had stopped driving at night. A week after the second eye was done, the glare was gone and everything was sharp again."</p>
              <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
              <p className="text-body font-medium text-[var(--color-ink)]">R. Manickam</p>
              <p className="text-caption text-[var(--color-ink-3)]">Pollachi</p>
            </Card>

            <Card className="flex flex-col h-full">
              <StarRow />
              <h4 className="text-eyebrow text-[var(--color-blue)] mb-4">Diabetic eye screening</h4>
              <p className="text-body text-[var(--color-ink-2)] italic flex-grow mb-6">"My sugar has been high for years. The yearly checks here are fast, and he explains exactly what he sees at the back of the eye."</p>
              <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
              <p className="text-body font-medium text-[var(--color-ink)]">S. Lakshmi</p>
              <p className="text-caption text-[var(--color-ink-3)]">Zamin Uthukuli</p>
            </Card>

            <Card className="flex flex-col h-full">
              <StarRow />
              <h4 className="text-eyebrow text-[var(--color-blue)] mb-4">Retina, emergency</h4>
              <p className="text-body text-[var(--color-ink-2)] italic flex-grow mb-6">"I saw a curtain coming down over my vision. They saw me immediately and laser was done the same day to secure the tear."</p>
              <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
              <p className="text-body font-medium text-[var(--color-ink)]">A. Karthik</p>
              <p className="text-caption text-[var(--color-ink-3)]">Kinathukadavu</p>
            </Card>

            <Card className="flex flex-col h-full">
              <StarRow />
              <h4 className="text-eyebrow text-[var(--color-blue)] mb-4">Cataract surgery</h4>
              <p className="text-body text-[var(--color-ink-2)] italic flex-grow mb-6">"The entire process was smooth. My mother was nervous but Dr. Raghuram's calm explanation in Tamil really helped."</p>
              <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
              <p className="text-body font-medium text-[var(--color-ink)]">M. Devi</p>
              <p className="text-caption text-[var(--color-ink-3)]">Pollachi</p>
            </Card>

            <Card className="flex flex-col h-full">
              <StarRow />
              <h4 className="text-eyebrow text-[var(--color-blue)] mb-4">Glaucoma monitoring</h4>
              <p className="text-body text-[var(--color-ink-2)] italic flex-grow mb-6">"I appreciate that they don't prescribe unnecessary drops. Just honest advice and regular pressure checks."</p>
              <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
              <p className="text-body font-medium text-[var(--color-ink)]">V. Subramanian</p>
              <p className="text-caption text-[var(--color-ink-3)]">Anaimalai</p>
            </Card>

            <Card className="flex flex-col h-full">
              <StarRow />
              <h4 className="text-eyebrow text-[var(--color-blue)] mb-4">Spectacles and check-up</h4>
              <p className="text-body text-[var(--color-ink-2)] italic flex-grow mb-6">"Got my eyes tested and got a new pair of glasses from the opticals here. Very clear vision now."</p>
              <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
              <p className="text-body font-medium text-[var(--color-ink)]">P. Anitha</p>
              <p className="text-caption text-[var(--color-ink-3)]">Pollachi</p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 - ASK FOR ONE */}
      <section className="bg-[var(--color-dark-bg)] text-[var(--color-dark-body)] py-[clamp(80px,12vw,140px)] text-center px-[clamp(20px,5vw,40px)] relative overflow-hidden">
        <div className="absolute -bottom-32 -right-32 opacity-20 pointer-events-none">
          <Aperture size={560} ringCount={6} />
        </div>
        <div className="max-w-[42ch] mx-auto relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-display-2 text-[var(--color-dark-heading)]">Were you treated here?</h2>
          <p className="text-lede">A few sentences about your experience helps the next person decide whether to come in. Tell us at the desk, or leave a review on Google.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <PrimaryButton href="tel:+914259221000" className="w-full sm:w-auto bg-white text-[var(--color-ink)] hover:bg-[var(--color-ground)]">Call 04259 221 000</PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}