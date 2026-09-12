import React from 'react';
import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/LayoutSections';
import { Card } from '@/components/design/Card';
import { RowList, RowItem } from '@/components/design/RowList';
import { Eyebrow } from '@/components/design/Eyebrow';
import { PrimaryButton, GhostButton } from '@/components/design/Buttons';
import { Aperture } from '@/components/design/Aperture';

export default function CataractSurgeryPage() {
  return (
    <main>
      {/* SECTION 1 - PAGE HERO */}
      <PageHero
        title="Cataract surgery"
        lede="In by morning, home by evening, seeing better. The most common operation we perform, and the one people worry about most unnecessarily."
        band="ground"
      >
        <div className="absolute top-[32px] left-[clamp(20px,5vw,40px)] z-20 text-caption text-[var(--color-ink-3)] font-medium">
          <Link href="/" className="hover:text-[var(--color-blue)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/treatments" className="hover:text-[var(--color-blue)] transition-colors">Treatments</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-ink)]">Cataract surgery</span>
        </div>
      </PageHero>

      {/* SECTION 2 - WHAT IT ACTUALLY IS */}
      <section className="bg-[var(--color-ground)] pb-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col min-[900px]:flex-row items-center gap-[clamp(40px,8vw,80px)]">
          <div className="flex-[1.15] flex flex-col gap-6 w-full">
            <h2 className="text-h2 text-[var(--color-ink)]">What a cataract actually is</h2>
            <p className="text-body text-[var(--color-ink-2)]">
              Behind your pupil sits a clear lens, about the size of a lentil, that focuses light onto the back of the eye. With age it slowly turns cloudy. Light scatters instead of focusing, and the world looks faded, hazy, or as though you are looking through a dirty window.
            </p>
            <p className="text-body text-[var(--color-ink-2)]">
              It is not a growth, it is not a film over the eye, and no drop will clear it. The only treatment that works is to replace the lens — which is a fifteen-minute, day-care procedure.
            </p>
          </div>
          <div className="flex-[0.85] w-full">
            {/* SVG Anatomy Diagram */}
            <svg viewBox="0 0 572 300" className="w-full h-auto" aria-hidden="true">
              {/* Globe */}
              <circle cx="286" cy="150" r="100" fill="#E3EEF5" stroke="var(--color-blue)" strokeWidth="1.4" />
              {/* Cornea (Left Arc) */}
              <path d="M 230 70 A 90 90 0 0 0 230 230" fill="none" stroke="var(--color-blue)" strokeWidth="1.4" />
              {/* Iris (Short strokes) */}
              <line x1="230" y1="90" x2="230" y2="135" stroke="var(--color-blue)" strokeWidth="1.4" />
              <line x1="230" y1="210" x2="230" y2="165" stroke="var(--color-blue)" strokeWidth="1.4" />
              {/* Clouded lens (Amber ellipse) */}
              <ellipse cx="240" cy="150" rx="10" ry="25" fill="#F6E8D6" stroke="var(--color-blue)" strokeWidth="1.4" />
              {/* Retina (Right thick arc) */}
              <path d="M 336 63 A 98 98 0 0 1 336 237" fill="none" stroke="var(--color-blue)" strokeWidth="3" />
              {/* Optic Nerve (Short stroke leaving bottom right) */}
              <path d="M 360 218 C 390 230 400 240 420 250" fill="none" stroke="var(--color-blue)" strokeWidth="3" />
              
              {/* Labels */}
              <text x="180" y="80" textAnchor="end" className="text-caption fill-[var(--color-ink)]" fontSize="15">Cornea</text>
              <line x1="185" y1="76" x2="215" y2="76" stroke="var(--color-line-cool)" strokeWidth="1" />
              
              <text x="180" y="140" textAnchor="end" className="text-caption fill-[var(--color-ink)]" fontSize="15">Clouded lens</text>
              <line x1="185" y1="136" x2="230" y2="136" stroke="var(--color-line-cool)" strokeWidth="1" />

              <text x="430" y="150" textAnchor="start" className="text-caption fill-[var(--color-ink)] font-semibold" fontSize="15">Retina</text>
              <text x="430" y="170" textAnchor="start" className="text-caption fill-[var(--color-ink-3)]" fontSize="13">where the image forms</text>
              <line x1="345" y1="146" x2="425" y2="146" stroke="var(--color-line-cool)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE DAY ITSELF */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-warm)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col gap-12">
          <div className="flex flex-col gap-6 text-center items-center">
            <Eyebrow>The day itself</Eyebrow>
            <h2 className="text-h2 text-[var(--color-ink)] max-w-lede">What happens, hour by hour.</h2>
          </div>
          
          <div className="max-w-[800px] mx-auto w-full">
            <RowList>
              <RowItem number="01" title="You arrive in the morning" description="Fasting is usually not required — you will be told beforehand if anything is different in your case. Bring someone with you; you will not be able to drive home." />
              <RowItem number="02" title="Drops and preparation" description="Drops widen the pupil and numb the eye. There is no injection and no general anaesthetic for a routine cataract." />
              <RowItem number="03" title="The operation — about fifteen minutes" description="A very small opening is made, the cloudy lens is broken up and removed, and a clear artificial lens is placed where it was. You are awake, you feel no pain, and there is usually no stitch." />
              <RowItem number="04" title="Rest, then home" description="You rest for a short while and go home the same day with a shield over the eye and a schedule of drops." />
              <RowItem number="05" title="The day after" description="You come back the next morning so Dr. Raghuram can check the eye. Most people notice the difference by then." />
              <RowItem number="06" title="The weeks after" description="Drops continue for a few weeks. Avoid dust, swimming and rubbing the eye. A final prescription for glasses is given once the eye has settled, usually around four weeks." isLast />
            </RowList>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CHOICES AND MYTHS */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-ground)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,5vw,60px)] items-start">
            <Card>
              <Eyebrow className="mb-6">Lens options</Eyebrow>
              <p className="text-body text-[var(--color-ink)] mb-6">
                The artificial lens is a permanent part of the eye, so the choice is worth a proper conversation. In broad terms:
              </p>
              <div className="flex flex-col gap-4 mb-6">
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] inline">Monofocal</h4>
                  <span className="text-body text-[var(--color-ink-2)]"> — Sharp at one distance, usually far. You will still need reading glasses. Covered by most schemes.</span>
                </div>
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] inline">Toric</h4>
                  <span className="text-body text-[var(--color-ink-2)]"> — Corrects astigmatism at the same time, for eyes that have it.</span>
                </div>
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] inline">Multifocal</h4>
                  <span className="text-body text-[var(--color-ink-2)]"> — Aims to reduce dependence on glasses at more than one distance. Suits some eyes and some lifestyles, not all.</span>
                </div>
              </div>
              <div className="w-full h-px bg-[var(--color-line)] mb-6"></div>
              <p className="text-caption text-[var(--color-ink-3)]">
                Which one suits you depends on your eye and on the life you actually lead. Dr. Raghuram will go through it with you before anything is decided.
              </p>
            </Card>

            <Card variant="amber">
              <div className="flex flex-col gap-[14px] mb-6">
                <div className="w-[26px] h-[3px] bg-[var(--color-amber)]"></div>
                <h2 className="text-eyebrow text-[var(--color-amber)]">Worth knowing</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Should I wait until it is ripe?</h4>
                  <p className="text-body text-[var(--color-ink-2)]">That advice is out of date. A cataract does not need to be mature before it is removed, and waiting too long makes surgery harder. The right time is when it starts to interfere with what you want to do.</p>
                </div>
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Will it come back?</h4>
                  <p className="text-body text-[var(--color-ink-2)]">The cataract itself does not. Some people develop a cloudy film behind the new lens months or years later — that is cleared in a few minutes with a laser, in the clinic, no cutting.</p>
                </div>
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Is it covered?</h4>
                  <p className="text-body text-[var(--color-ink-2)]">
                    Cataract surgery is covered under the schemes we accept, subject to their terms. Ask us before you decide — <Link href="/schemes" className="text-[var(--color-blue)] font-semibold hover:underline">see schemes and insurance</Link>.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5 - CLOSING CALL (INK) */}
      <section className="bg-[var(--color-dark-bg)] text-[var(--color-dark-body)] py-[clamp(80px,12vw,140px)] text-center px-[clamp(20px,5vw,40px)] relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 opacity-20 pointer-events-none">
          <Aperture size={560} ringCount={6} />
        </div>
        <div className="max-w-[46ch] mx-auto relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-display-2 text-[var(--color-dark-heading)]">Have it looked at before it starts deciding things for you.</h2>
          <p className="text-lede">Giving up night driving, reading, or the newspaper is not something you have to accept.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <PrimaryButton href="tel:+914259221000" className="w-full sm:w-auto bg-white text-[var(--color-ink)] hover:bg-[var(--color-ground)]">Call 04259 221 000</PrimaryButton>
            <GhostButton href="/our-surgeon" className="w-full sm:w-auto text-[var(--color-dark-heading)] border-[var(--color-dark-hairline)] hover:bg-[var(--color-dark-hairline)]">Meet the surgeon</GhostButton>
          </div>
        </div>
      </section>
    </main>
  );
}