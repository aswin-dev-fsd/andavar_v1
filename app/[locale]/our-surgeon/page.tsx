import React from 'react';
import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/LayoutSections';
import { Card } from '@/components/design/Card';
import { RowList, RowItem } from '@/components/design/RowList';
import { Eyebrow } from '@/components/design/Eyebrow';
import { PrimaryButton, GhostButton } from '@/components/design/Buttons';

export default function OurSurgeonPage() {
  return (
    <main>
      {/* SECTION 1 - PAGE HERO */}
      <PageHero
        title="Dr. A. Raghuram"
        lede="MBBS • DO • DNB (Ophthalmology) • FICO (UK) • FRCS (Glasgow)"
        band="ground"
        className="pb-0" // Section 2 continues on ground with no top pad
      >
        <div className="absolute top-[32px] left-[clamp(20px,5vw,40px)] z-20 text-caption text-[var(--color-ink-3)] font-medium">
          <Link href="/" className="hover:text-[var(--color-blue)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-ink)]">Our surgeon</span>
        </div>
      </PageHero>

      {/* SECTION 2 - WHO HE IS */}
      <section className="relative bg-[var(--color-ground)] pb-[clamp(80px,12vw,140px)] pt-[clamp(32px,5vw,64px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col min-[900px]:flex-row gap-[clamp(40px,8vw,80px)]">
          <div className="flex-[1.15] flex flex-col gap-[34px]">
            <p className="text-lede text-[var(--color-ink)]">
              Dr. Raghuram founded this practice in 2013 and has run it since. He performs the examinations, he performs the surgery, and he conducts the follow-ups himself.
            </p>
            <p className="text-body text-[var(--color-ink-2)]">
              That continuity is not a small thing. A cataract operation is a conversation before it is a procedure — about what you will be able to see afterwards, what lens suits the life you actually lead, and what the recovery will really be like. Those conversations work better when the person having them with you is the person holding the instrument.
            </p>
            <p className="text-body text-[var(--color-ink-2)]">
              His specialist interest is the retina — which is why the hospital carries 'and Retina Centre' in its name — alongside a high volume of cataract surgery for patients across Pollachi and the villages around it.
            </p>
          </div>
          <div className="flex-[0.85]">
            <Card variant="blue">
              <h3 className="text-eyebrow text-[var(--color-ink-3)] mb-6">What this means for you</h3>
              <RowList>
                <RowItem title="One face, start to finish" description="You will not have to explain your history again to a new doctor at each visit." />
                <RowItem title="Surgery decided with you" description="Lens options and timing are explained in plain Tamil or English before anything is booked." />
                <RowItem title="Follow-up with the same surgeon" description="The person who operated is the person who checks the result." isLast />
              </RowList>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 - A FIRST VISIT */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-warm)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col gap-12">
          <div className="flex flex-col gap-6 text-center items-center">
            <Eyebrow>A first visit</Eyebrow>
            <h2 className="text-h2 text-[var(--color-ink)] max-w-lede">What actually happens when you come in.</h2>
          </div>
          
          <div className="max-w-[800px] mx-auto w-full">
            <RowList>
              <RowItem number="01" title="You arrive" description="Walk in during consulting hours, or call ahead and we will give you a time. Bring your glasses, any previous prescriptions, and your scheme card if you have one." />
              <RowItem number="02" title="Vision and pressure" description="An optometrist checks your vision and the pressure inside your eye. This part is quick and nothing touches the eye itself." />
              <RowItem number="03" title="Drops, then a wait" description="If the retina needs looking at, drops widen the pupil. They take about thirty minutes to work and leave your vision blurry for a few hours — so do not plan to drive yourself home." />
              <RowItem number="04" title="The examination" description="Dr. Raghuram examines both eyes and explains what he finds, in the language you are most comfortable in." />
              <RowItem number="05" title="What next" description="If nothing needs doing, you are told so plainly. If something does, you will know what it costs and what your scheme covers before you leave." isLast />
            </RowList>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CLOSING CALL */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-ground)] text-center px-[clamp(20px,5vw,40px)]">
        <div className="max-w-[44ch] mx-auto flex flex-col items-center gap-6">
          <h2 className="text-h2 text-[var(--color-ink)]">Come and have your eyes looked at.</h2>
          <p className="text-lede text-[var(--color-ink-2)]">No appointment is needed. If you would rather have a set time, call and we will arrange one.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <PrimaryButton href="tel:+914259221000" className="w-full sm:w-auto">Call 04259 221 000</PrimaryButton>
            <GhostButton href="https://maps.app.goo.gl/placeholder" target="_blank" className="w-full sm:w-auto">How to find us</GhostButton>
          </div>
        </div>
      </section>
    </main>
  );
}