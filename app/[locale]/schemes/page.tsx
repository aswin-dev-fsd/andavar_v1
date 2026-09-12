import React from 'react';
import { PageHero } from '@/components/sections/LayoutSections';
import { Breadcrumbs } from '@/components/design/Breadcrumbs';
import { Card } from '@/components/design/Card';
import { Tick, RowList, RowItem } from '@/components/design/RowList';
import { Eyebrow } from '@/components/design/Eyebrow';
import { PrimaryButton } from '@/components/design/Buttons';

export default function SchemesPage() {
  return (
    <main>
      {/* SECTION 1 - HERO */}
      <PageHero
        breadcrumbs={
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Schemes & insurance' }
            ]} 
          />
        }
        title="Schemes and insurance"
        lede="The question people are most embarrassed to ask and most worried about. So here it is in plain language, before you have to ask anyone."
        band="cool"
      />

      {/* SECTION 2 - THE THREE SCHEMES */}
      <section className="bg-[var(--color-ground)] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(24px,4vw,32px)]">
            {/* Card 1 */}
            <Card className="flex flex-col h-full">
              <div className="flex gap-4 mb-4">
                <Tick />
                <h3 className="text-h3 text-[var(--color-ink)]">Chief Minister's Comprehensive Health Insurance Scheme</h3>
              </div>
              <div className="mb-4">
                <span className="inline-flex flex-wrap gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-cool)] text-caption text-[var(--color-ink-3)] font-medium leading-relaxed">
                  <span>CMCHIS</span>
                  <span>•</span>
                  <span>முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம்</span>
                </span>
              </div>
              <p className="text-body text-[var(--color-ink-2)] mb-8 flex-grow">
                The Tamil Nadu government scheme. Cataract surgery and a number of other eye procedures are covered.
              </p>
              <div className="mt-auto">
                <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
                <h4 className="text-eyebrow text-[var(--color-ink-3)] mb-4">Bring with you</h4>
                <ul className="flex flex-col gap-2 text-caption text-[var(--color-ink)] font-medium">
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> Your CMCHIS card</li>
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> Aadhaar card</li>
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> Ration card, if you have it</li>
                </ul>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="flex flex-col h-full">
              <div className="flex gap-4 mb-4">
                <Tick />
                <h3 className="text-h3 text-[var(--color-ink)]">Pensioners Health Scheme</h3>
              </div>
              <div className="mb-4">
                <span className="inline-flex flex-wrap gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-cool)] text-caption text-[var(--color-ink-3)] font-medium leading-relaxed">
                  <span>For retired government employees</span>
                  <span>•</span>
                  <span>ஓய்வூதியதாரர்கள் மருத்துவத் திட்டம்</span>
                </span>
              </div>
              <p className="text-body text-[var(--color-ink-2)] mb-8 flex-grow">
                Covers retired state government employees and their dependants under the scheme's terms.
              </p>
              <div className="mt-auto">
                <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
                <h4 className="text-eyebrow text-[var(--color-ink-3)] mb-4">Bring with you</h4>
                <ul className="flex flex-col gap-2 text-caption text-[var(--color-ink)] font-medium">
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> Your pensioner ID</li>
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> Scheme card</li>
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> A recent pension slip</li>
                </ul>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="flex flex-col h-full">
              <div className="flex gap-4 mb-4">
                <Tick />
                <h3 className="text-h3 text-[var(--color-ink)]">Star Health Insurance</h3>
              </div>
              <div className="mb-4">
                <span className="inline-flex flex-wrap gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-cool)] text-caption text-[var(--color-ink-3)] font-medium leading-relaxed">
                  <span>Private cover</span>
                  <span>•</span>
                  <span>தனியார் காப்பீடு</span>
                </span>
              </div>
              <p className="text-body text-[var(--color-ink-2)] mb-8 flex-grow">
                Cashless treatment subject to your policy terms and prior approval where required.
              </p>
              <div className="mt-auto">
                <div className="w-full h-px bg-[var(--color-line)] mb-4"></div>
                <h4 className="text-eyebrow text-[var(--color-ink-3)] mb-4">Bring with you</h4>
                <ul className="flex flex-col gap-2 text-caption text-[var(--color-ink)] font-medium">
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> Policy card or number</li>
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> A photo ID</li>
                  <li className="flex gap-3 items-start"><span className="text-[var(--color-blue)] font-bold">—</span> Any referral letter</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 - IF YOU HAVE NO SCHEME */}
      <section className="bg-[var(--color-warm)] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col min-[900px]:flex-row gap-[clamp(40px,8vw,80px)] items-center">
          <div className="flex-[1.15] flex flex-col gap-6 w-full">
            <Eyebrow>If you have no scheme</Eyebrow>
            <h2 className="text-h2 text-[var(--color-ink)]">You will be told the cost before anything is booked.</h2>
            <p className="text-lede text-[var(--color-ink-2)] max-w-lede">
              Not after. Not on the day. The consultation fee, what the procedure would cost, and what is included — stated up front so you can decide without pressure.
            </p>
          </div>
          <div className="flex-[0.85] w-full">
            <Card>
              <h4 className="text-h4 text-[var(--color-ink)] mb-4">Two minutes on the phone settles it</h4>
              <p className="text-body text-[var(--color-ink-2)] mb-6">
                Tell us which scheme you hold, or that you hold none, and what you have noticed about your eyes. We will tell you what a first visit costs and what is likely to be covered.
              </p>
              <PrimaryButton href="tel:+914259221000" className="w-full sm:w-auto">Call 04259 221 000</PrimaryButton>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4 - COUNTER QUESTIONS */}
      <section className="bg-[var(--color-ground)] py-[clamp(80px,12vw,140px)]">
        <div className="max-w-[760px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col gap-10">
          <h2 className="text-h2 text-[var(--color-ink)]">Questions people actually ask at the counter</h2>
          
          <RowList>
            <RowItem title="Do I need a referral to use my scheme?" />
            <RowItem title="Will I have to pay and claim it back?" />
            <RowItem title="Does the scheme cover both eyes?" />
            <RowItem title="What about spectacles afterwards?" />
            <RowItem title="I am not from Pollachi. Can I still use my scheme?" isLast />
          </RowList>

          <p className="text-caption text-[var(--color-ink-3)] bg-[var(--color-cool)] p-6 rounded-[14px]">
            Scheme rules change. If anything here does not match what you have been told, call us — we would rather correct it than have you turned away at the counter.
          </p>
        </div>
      </section>
    </main>
  );
}