import React from 'react';
import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/LayoutSections';
import { ServiceCard } from '@/components/design/ServiceCard';
import { PrimaryButton, GhostButton } from '@/components/design/Buttons';

export default function TreatmentsPage() {
  return (
    <main>
      {/* SECTION 1 - HERO */}
      <PageHero
        title="What we treat"
        lede="Listed by what you have noticed rather than by its medical name — because nobody arrives knowing they have posterior subcapsular cataract."
        band="ground"
        className="pb-0" // The grid below is also on ground
      >
        <div className="absolute top-[32px] left-[clamp(20px,5vw,40px)] z-20 text-caption text-[var(--color-ink-3)] font-medium">
          <Link href="/" className="hover:text-[var(--color-blue)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-ink)]">Treatments</span>
        </div>
      </PageHero>

      {/* SECTION 2 - THE SIX */}
      <section className="bg-[var(--color-ground)] pb-[clamp(80px,12vw,140px)] pt-[clamp(32px,5vw,64px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(24px,4vw,32px)]">
            <ServiceCard 
              symptom="Things look cloudy, faded, or washed out"
              title="Cataract surgery"
              description="The lens inside your eye has clouded. It is replaced with a clear artificial one in a day-care procedure — in by morning, home by evening."
              href="/cataract-surgery"
              linkText="Read more"
            />
            <ServiceCard 
              symptom="A shadow, floaters, or sudden blurring"
              title="Retina care"
              description="Retinal detachment, macular disease and laser treatment. The retina is Dr. Raghuram's specialist interest and the reason for the hospital's name."
              href="/treatments"
              linkText="Read more"
            />
            <ServiceCard 
              symptom="You have diabetes, and your eyes have not been checked this year"
              title="Diabetic eye care"
              description="Diabetes damages the back of the eye long before you notice anything. A yearly screening takes twenty minutes and is the single most useful thing you can do."
              href="/treatments"
              linkText="Read more"
            />
            <ServiceCard 
              symptom="Glaucoma in the family, or pressure already found"
              title="Glaucoma"
              description="Pressure testing, visual field analysis and long-term monitoring. Glaucoma takes sight quietly, which is why regular checks matter more than symptoms."
              href="/treatments"
              linkText="Read more"
            />
            <ServiceCard 
              symptom="It has simply been a while"
              title="Full eye examination"
              description="Vision, pressure, retina and a prescription — all in one sitting, usually under an hour."
              href="/treatments"
              linkText="Read more"
            />
            <ServiceCard 
              symptom="You need glasses, or your old ones no longer work"
              title="Spectacles & lenses"
              description="Testing and dispensing on site, with honest advice about what you need and what you do not."
              href="/treatments"
              linkText="Read more"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 - NOT SURE */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-cool)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col min-[900px]:flex-row items-center gap-[clamp(40px,8vw,80px)]">
          <div className="flex-[1.2] flex flex-col gap-6 items-start w-full">
            <h2 className="text-h2 text-[var(--color-ink)]">Not sure which of these is you?</h2>
            <p className="text-lede text-[var(--color-ink-2)] max-w-lede">
              That is normal, and it is what the first examination is for. Come in, or call and describe what you have noticed — nobody will make you feel foolish for asking.
            </p>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 min-[900px]:mt-0 min-[900px]:justify-end">
            <PrimaryButton href="tel:+914259221000" className="w-full sm:w-auto">Call 04259 221 000</PrimaryButton>
            <GhostButton href="/schemes" className="w-full sm:w-auto bg-white/50">What it costs</GhostButton>
          </div>
        </div>
      </section>
    </main>
  );
}