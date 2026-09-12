import React from 'react';
import { PageHero } from '@/components/sections/LayoutSections';
import { Breadcrumbs } from '@/components/design/Breadcrumbs';
import { Card } from '@/components/design/Card';
import { PrimaryButton, GhostButton } from '@/components/design/Buttons';

export default function EyeHealthPage() {
  return (
    <main>
      {/* SECTION 1 - PAGE HERO */}
      <PageHero
        breadcrumbs={
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Eye health' }
            ]} 
          />
        }
        title="Questions people ask at the counter."
        lede="Written by Dr. Raghuram, in answer to the things patients actually ask — not a blog for the sake of having one."
        band="ground"
      />

      {/* SECTION 2 - THE SIX ANSWERS */}
      <section className="bg-[var(--color-ground)] pb-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col gap-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(24px,4vw,32px)]">
            <Card>
              <h3 className="text-h4 text-[var(--color-ink)] mb-4">If you have diabetes, your eyes need a check every year</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                Diabetic damage to the back of the eye happens long before you notice any blur. By the time vision is affected, treatment is much harder. A simple yearly pupil-dilated check can catch changes early and prevent permanent loss.
              </p>
            </Card>

            <Card>
              <h3 className="text-h4 text-[var(--color-ink)] mb-4">A cataract does not need to be "ripe"</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                This is old advice from an era of older surgical techniques. Waiting until a cataract is hard and mature actually makes the surgery more difficult and increases recovery time. The right time to remove it is when it stops you doing things you enjoy.
              </p>
            </Card>

            <Card>
              <h3 className="text-h4 text-[var(--color-ink)] mb-4">Children rarely say they cannot see</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                A child does not know what normal vision looks like, so they will not complain that the board is blurry. Instead, they might sit too close to the television, rub their eyes, or lose interest in reading. A routine check before school starts is the only way to know.
              </p>
            </Card>

            <Card>
              <h3 className="text-h4 text-[var(--color-ink)] mb-4">Floaters are usually harmless. A curtain is not.</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                Seeing a few faint spots or threads floating in your vision is normal as you age. But a sudden shower of new floaters, flashes of light in the dark, or a dark curtain coming across your vision is a retinal emergency. That needs checking the same day.
              </p>
            </Card>

            <Card>
              <h3 className="text-h4 text-[var(--color-ink)] mb-4">Screens do not damage your eyes, but they do dry them</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                Looking at a phone or computer will not weaken your prescription or damage the eye itself. However, you blink half as often when staring at a screen, which leads to dry, tired, and burning eyes. The twenty-twenty rule — looking twenty feet away every twenty minutes — usually fixes it.
              </p>
            </Card>

            <Card>
              <h3 className="text-h4 text-[var(--color-ink)] mb-4">Do not buy a pressure reading from a machine alone</h3>
              <p className="text-body text-[var(--color-ink-2)]">
                The puff-of-air machines in optical shops are good for screening, but they are not a glaucoma diagnosis. Pressure changes throughout the day, and corneal thickness affects the reading. If a machine says your pressure is high, you need a full examination, not just eye drops.
              </p>
            </Card>
          </div>

          <div className="border-[1.5px] border-dashed border-[var(--color-amber)] bg-[var(--color-amber-wash)] rounded-[14px] p-[clamp(20px,3vw,30px)] mt-4">
            <h4 className="text-h4 text-[var(--color-ink)] mb-2">A note for the hospital, not the patient</h4>
            <p className="text-body text-[var(--color-ink-2)]">
              Six entries is enough to launch. This page only earns its keep if it is fed one answer a month. Leaving it as is beats letting it visibly go stale with dates attached to it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - CLOSING CALL */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-cool)] text-center px-[clamp(20px,5vw,40px)]">
        <div className="max-w-[44ch] mx-auto flex flex-col items-center gap-6">
          <h2 className="text-h2 text-[var(--color-ink)]">Something here sound like you?</h2>
          <p className="text-lede text-[var(--color-ink-2)]">
            Come in and have it looked at properly. No appointment needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <PrimaryButton href="tel:+914259221000" className="w-full sm:w-auto">Call 04259 221 000</PrimaryButton>
            <GhostButton href="/treatments" className="w-full sm:w-auto bg-white/50">What we treat</GhostButton>
          </div>
        </div>
      </section>
    </main>
  );
}