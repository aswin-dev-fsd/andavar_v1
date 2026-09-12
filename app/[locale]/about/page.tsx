import React from 'react';
import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/LayoutSections';
import { Card } from '@/components/design/Card';
import { Eyebrow } from '@/components/design/Eyebrow';
import { PrimaryButton, GhostButton } from '@/components/design/Buttons';

export default function AboutPage() {
  return (
    <main>
      {/* SECTION 1 - PAGE HERO */}
      <PageHero
        title="A small hospital that has stayed in one place."
        lede="Shri Andavar Eye Care and Retina Centre has been on Palladam Road since 2013, run by the surgeon who founded it."
        band="ground"
        className="pb-0" // The story below is on ground
      >
        <div className="absolute top-[32px] left-[clamp(20px,5vw,40px)] z-20 text-caption text-[var(--color-ink-3)] font-medium">
          <Link href="/" className="hover:text-[var(--color-blue)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-ink)]">About</span>
        </div>
      </PageHero>

      {/* SECTION 2 - THE STORY */}
      <section className="bg-[var(--color-ground)] pb-[clamp(80px,12vw,140px)] pt-[clamp(32px,5vw,64px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col min-[900px]:flex-row gap-[clamp(40px,8vw,80px)]">
          <div className="flex-[1.15] flex flex-col gap-[34px]">
            <p className="text-lede text-[var(--color-ink)]">
              There are larger eye hospitals within an hour of here, and they do good work. What they cannot offer is the thing a small practice gives for free: the same surgeon, every time, for as long as you need him.
            </p>
            <p className="text-body text-[var(--color-ink-2)]">
              Most of the people who walk through the door were sent by someone — a neighbour who had their cataract done here, a family doctor who has been referring patients for years, a son who searched and read about the surgeon before bringing his mother in. Reputation in a town this size is slow to build and very hard to fake.
            </p>
            <p className="text-body text-[var(--color-ink-2)]">
              The practice takes retina work seriously enough to put it in its own name. Alongside that sits a steady volume of cataract surgery, diabetic eye screening, glaucoma monitoring and routine examinations — the everyday work that keeps a district seeing.
            </p>
          </div>
          <div className="flex-[0.85]">
            <Card variant="blue">
              <h3 className="text-eyebrow text-[var(--color-ink-3)] mb-6">In short</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Founded</h4>
                  <p className="text-body text-[var(--color-ink-2)]">2013, in Pollachi, by Dr. A. Raghuram.</p>
                </div>
                <div className="w-full h-px bg-[var(--color-line)] opacity-50"></div>
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Focus</h4>
                  <p className="text-body text-[var(--color-ink-2)]">Retina and cataract, with full general eye care.</p>
                </div>
                <div className="w-full h-px bg-[var(--color-line)] opacity-50"></div>
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Languages</h4>
                  <p className="text-body text-[var(--color-ink-2)]">Tamil and English, throughout — at the counter and in the consulting room.</p>
                </div>
                <div className="w-full h-px bg-[var(--color-line)] opacity-50"></div>
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Where</h4>
                  <p className="text-body text-[var(--color-ink-2)]">One location, on Palladam Road. No branches, by choice.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW WE WORK */}
      <section className="bg-[var(--color-cool)] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)]">
          <div className="flex flex-col gap-6 text-center items-center mb-12">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="text-h2 text-[var(--color-ink)]">Three things we hold to.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(24px,4vw,32px)]">
            <Card className="flex flex-col h-full gap-4">
              <div className="text-display-2 text-[var(--color-blue)] leading-none mb-2">01</div>
              <h3 className="text-h4 text-[var(--color-ink)] mb-2">Nothing is recommended that is not needed</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                If your eyes are fine, you will be told they are fine. An unnecessary procedure is a betrayal of thirteen years of trust, and it is not worth it.
              </p>
            </Card>

            <Card className="flex flex-col h-full gap-4">
              <div className="text-display-2 text-[var(--color-blue)] leading-none mb-2">02</div>
              <h3 className="text-h4 text-[var(--color-ink)] mb-2">You will understand what is happening</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                Explanations in the language you think in, without medical vocabulary, for as long as it takes. Bring your questions written down if that helps.
              </p>
            </Card>

            <Card className="flex flex-col h-full gap-4">
              <div className="text-display-2 text-[var(--color-blue)] leading-none mb-2">03</div>
              <h3 className="text-h4 text-[var(--color-ink)] mb-2">The cost is stated before you commit</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                What the visit costs, what the procedure costs, and what your scheme covers — said out loud, in advance, every time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CLOSING CALL */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-ground)] text-center px-[clamp(20px,5vw,40px)]">
        <div className="max-w-[44ch] mx-auto flex flex-col items-center gap-6">
          <h2 className="text-h2 text-[var(--color-ink)]">Come and meet the surgeon.</h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <PrimaryButton href="tel:+914259221000" className="w-full sm:w-auto">Call 04259 221 000</PrimaryButton>
            <GhostButton href="/our-surgeon" className="w-full sm:w-auto">About Dr. Raghuram</GhostButton>
          </div>
        </div>
      </section>
    </main>
  );
}