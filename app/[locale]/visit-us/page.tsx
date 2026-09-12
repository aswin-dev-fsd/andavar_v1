import React from 'react';
import { PageHero } from '@/components/sections/LayoutSections';
import { Breadcrumbs } from '@/components/design/Breadcrumbs';
import { Card } from '@/components/design/Card';
import { RowList, RowItem } from '@/components/design/RowList';
import { Eyebrow } from '@/components/design/Eyebrow';
import { PrimaryButton, GhostButton } from '@/components/design/Buttons';
import { OpenNowPill } from '@/components/design/OpenNowPill';

export default function VisitUsPage() {
  return (
    <main>
      {/* SECTION 1 - HERO */}
      <PageHero
        breadcrumbs={
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Visit us' }
            ]} 
          />
        }
        title="Opposite LMHSS School, Palladam Road."
        band="ground"
      >
        <div className="mt-2 mb-2">
          <OpenNowPill />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <PrimaryButton href="https://maps.app.goo.gl/placeholder" target="_blank" className="w-full sm:w-auto">Open in Maps</PrimaryButton>
          <GhostButton href="tel:+914259221000" className="w-full sm:w-auto">Call 04259 221 000</GhostButton>
        </div>
      </PageHero>

      {/* SECTION 2 - THE THREE FACTS */}
      <section className="bg-[var(--color-ground)] pb-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(24px,4vw,32px)]">
            <Card className="flex flex-col h-full gap-4">
              <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-blue-wash)] flex items-center justify-center mb-2 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 className="text-eyebrow text-[var(--color-ink-3)]">Address</h3>
              <p className="text-body text-[var(--color-ink)] font-medium">
                No. 73, Palladam Road<br/>
                Opposite LMHSS School<br/>
                T. Kottampatti<br/>
                Pollachi 642002
              </p>
              <div className="mt-auto pt-4">
                <p className="text-caption text-[var(--color-ink-2)]">The landmark is the school — everyone local knows it. We are directly opposite.</p>
              </div>
            </Card>

            <Card className="flex flex-col h-full gap-4">
              <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-green-wash)] flex items-center justify-center mb-2 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-eyebrow text-[var(--color-ink-3)]">Consulting hours</h3>
              <div className="text-body text-[var(--color-ink)] font-medium">
                <p className="mb-2">Monday to Saturday</p>
                <p className="text-[var(--color-ink-2)] font-normal">Morning: 10:00 AM — 2:00 PM</p>
                <p className="text-[var(--color-ink-2)] font-normal mb-2">Evening: 5:00 PM — 7:00 PM</p>
                <p>Sunday closed</p>
              </div>
            </Card>

            <Card className="flex flex-col h-full gap-4">
              <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-amber-wash)] flex items-center justify-center mb-2 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-amber)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 className="text-eyebrow text-[var(--color-ink-3)]">Telephone</h3>
              <p className="text-h3 text-[var(--color-ink)] mb-1">04259 221 000</p>
              <p className="text-body text-[var(--color-ink)] font-medium">94420 56767</p>
              <div className="mt-auto pt-4">
                <p className="text-caption text-[var(--color-ink-2)]">Call during consulting hours and someone will answer.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 - BEFORE YOU COME */}
      <section className="bg-[var(--color-warm)] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col lg:flex-row gap-[clamp(40px,8vw,80px)] items-start">
          <div className="flex-[1.15] w-full">
            <Eyebrow className="mb-6">Before you come</Eyebrow>
            <h2 className="text-h2 text-[var(--color-ink)] mb-10">Four things that make the visit shorter.</h2>
            <RowList>
              <RowItem title="Bring your glasses — all of them" description="Including the old pair you stopped using. They tell us more than you would expect." />
              <RowItem title="Bring any previous prescriptions or reports" description="Especially if you have been seen elsewhere, or have diabetes and carry a sugar record." />
              <RowItem title="Bring your scheme or insurance card" description="It saves a second trip if treatment turns out to be needed." />
              <RowItem title="Bring someone with you, if you can" description="If drops are needed to examine the retina, your vision will be blurred for a few hours afterwards. You should not drive yourself home." isLast />
            </RowList>
          </div>
          <div className="flex-[0.85] w-full lg:sticky lg:top-[104px]">
            <Card>
              <h4 className="text-h4 text-[var(--color-ink)] mb-4">Getting here</h4>
              <p className="text-body text-[var(--color-ink-2)] mb-8">
                On Palladam Road at T. Kottampatti, directly opposite LMHSS School. Town buses along the Palladam Road route stop within walking distance, and there is space to park a two-wheeler or car outside.
              </p>
              <PrimaryButton href="https://maps.app.goo.gl/placeholder" target="_blank" className="w-full mb-6">Open in Maps</PrimaryButton>
              <p className="text-caption text-[var(--color-ink-3)] text-center">
                No appointment is needed. If you would prefer a set time, call ahead.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}