import React from 'react';
import { useTranslations } from 'next-intl';
import { OpenNowPill } from '@/components/design/OpenNowPill';
import { PrimaryButton, GhostButton, ArrowLink } from '@/components/design/Buttons';
import { Aperture } from '@/components/design/Aperture';
import { Eyebrow } from '@/components/design/Eyebrow';
import { ServiceCard } from '@/components/design/ServiceCard';
import { Card } from '@/components/design/Card';
import { RowList, RowItem, Tick } from '@/components/design/RowList';
import { FactStrip } from '@/components/design/FactStrip';
import { ClosingCall } from '@/components/sections/LayoutSections';

export default function HomePage() {
  const tNav = useTranslations('Navigation');
  // Temporary placeholders for body text until actual translations are available
  // The spec requires EN/TA toggle for the whole UI.
  // I will use English strings here. For a full app, these would be in messages/en.json and messages/ta.json.

  return (
    <main>
      {/* SECTION 1 - HERO */}
      <section className="relative overflow-hidden pt-[clamp(64px,10vw,120px)] pb-[clamp(64px,8vw,96px)] bg-[var(--color-ground)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] relative z-10 flex flex-col min-[900px]:flex-row gap-[clamp(40px,8vw,80px)]">
          {/* Left Col */}
          <div className="flex-1 flex flex-col gap-6 items-start relative z-20">
            <div className="animate-reveal" style={{ animationDelay: '0s' }}>
              <OpenNowPill />
            </div>
            
            <h1 className="text-display-1 max-w-hero text-[var(--color-ink)] animate-reveal" style={{ animationDelay: '0.1s' }}>
              <span lang="en">Cataract and retina care in Pollachi, by the surgeon who examines you.</span>
              {/* <span lang="ta" className="hidden">...Tamil here...</span> */}
            </h1>
            
            <p className="text-lede max-w-lede text-[var(--color-ink-2)] animate-reveal" style={{ animationDelay: '0.2s' }}>
              Dr. A. Raghuram has looked after this district's eyes since 2013. He examines you, he operates, and he is the one who sees you at your follow-up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2 animate-reveal w-full sm:w-auto" style={{ animationDelay: '0.3s' }}>
              <PrimaryButton href="tel:+914259221000" className="w-full sm:w-auto">Call 04259 221 000</PrimaryButton>
              <GhostButton href="https://maps.app.goo.gl/placeholder" target="_blank" className="w-full sm:w-auto">Get directions</GhostButton>
            </div>
            
            <p className="text-caption max-w-[54ch] text-[var(--color-ink-3)] mt-2 animate-reveal" style={{ animationDelay: '0.4s' }}>
              Opposite LMHSS School, Palladam Road. Walk in, or call and we will give you a time.
            </p>
          </div>

          {/* Right Col */}
          <div className="flex-1 relative flex justify-center items-center pointer-events-none">
            {/* Desktop aperture */}
            <div className="hidden min-[900px]:block animate-reveal" style={{ animationDelay: '0.2s' }}>
              <Aperture size={520} ringCount={6} />
            </div>
            {/* Mobile aperture (background) */}
            <div className="min-[900px]:hidden absolute -top-40 -right-20 opacity-55">
              <Aperture size={520} ringCount={6} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE SURGEON */}
      <section className="relative overflow-hidden py-[clamp(80px,12vw,140px)] bg-[var(--color-warm)]">
        <div className="absolute -bottom-32 -left-32 opacity-50 pointer-events-none">
          <Aperture size={540} ringCount={4} />
        </div>
        
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] relative z-10 flex flex-col min-[900px]:flex-row gap-[clamp(40px,8vw,80px)]">
          {/* Left */}
          <div className="flex-[1.15] flex flex-col gap-6 items-start">
            <Eyebrow>Your surgeon</Eyebrow>
            <h2 className="text-display-2 text-[var(--color-ink)]">Dr. A. Raghuram</h2>
            <p className="text-lede max-w-lede text-[var(--color-ink-2)]">
              At a large chain you are seen by whoever is on duty that day. Here there is one surgeon, and he will still be here at your follow-up next year.
            </p>
            <ArrowLink href="/our-surgeon" className="mt-4">More about Dr. Raghuram</ArrowLink>
          </div>
          
          {/* Right */}
          <div className="flex-[0.85]">
            <Card>
              <h3 className="text-eyebrow text-[var(--color-ink-3)] mb-6">Qualifications, in plain words</h3>
              <RowList>
                <RowItem title="MBBS, DO" description="Medical degree, then a diploma in ophthalmology — eyes only." />
                <RowItem title="DNB (Ophthalmology)" description="The national board qualification for eye specialists in India." />
                <RowItem title="FICO (United Kingdom)" description="Fellowship of the International Council of Ophthalmology." />
                <RowItem title="FRCS (Glasgow)" description="A surgical fellowship of the Royal College of Surgeons — unusual in a town this size." isLast />
              </RowList>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHAT WE TREAT */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-ground)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col gap-12">
          <div className="flex flex-col gap-6 text-center items-center">
            <Eyebrow>What we treat</Eyebrow>
            <h2 className="text-h2 text-[var(--color-ink)]">Start with what you have noticed.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              symptom="Things look cloudy, faded or washed out"
              title="Cataract surgery"
              description="A 15-minute daycare procedure using advanced phacoemulsification."
              href="/cataract-surgery"
              linkText="Read more"
            />
            <ServiceCard 
              symptom="A shadow, floaters or sudden blurring"
              title="Retina care"
              description="Comprehensive retinal screening and treatment for tears, detachments and age-related changes."
              href="/treatments"
              linkText="Read more"
            />
            <ServiceCard 
              symptom="You have diabetes and have not had your eyes checked"
              title="Diabetic eye care"
              description="Yearly screening to prevent diabetic retinopathy, and laser treatment if needed."
              href="/treatments"
              linkText="Read more"
            />
            <ServiceCard 
              symptom="Headaches, or glaucoma in the family"
              title="Glaucoma & check-ups"
              description="Pressure testing, optic nerve evaluation and full comprehensive examinations."
              href="/treatments"
              linkText="Read more"
            />
          </div>
          
          <div className="flex justify-center mt-4">
            <ArrowLink href="/treatments">See everything we treat</ArrowLink>
          </div>
        </div>
      </section>

      {/* SECTION 4 - COST */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-cool)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col min-[900px]:flex-row gap-[clamp(40px,8vw,80px)]">
          <div className="flex-1 flex flex-col gap-6 items-start">
            <Eyebrow>Cost</Eyebrow>
            <h2 className="text-h2 text-[var(--color-ink)]">Ask about the money. Everybody does.</h2>
            <p className="text-lede max-w-lede text-[var(--color-ink-2)]">
              It is the question people are most embarrassed to ask and most worried about. Here are the schemes we accept, stated plainly.
            </p>
            <GhostButton href="/schemes" className="mt-4 bg-white/50">View all schemes</GhostButton>
          </div>
          <div className="flex-1">
            <Card>
              <div className="flex gap-4 mb-6 items-start">
                <Tick />
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Chief Minister's Comprehensive Health Insurance Scheme</h4>
                  <p className="text-body text-[var(--color-ink-2)]">CMCHIS — bring your scheme card and Aadhaar.</p>
                </div>
              </div>
              <div className="w-full h-px bg-[var(--color-line)] mb-6"></div>
              
              <div className="flex gap-4 mb-6 items-start">
                <Tick />
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Pensioners Health Scheme</h4>
                  <p className="text-body text-[var(--color-ink-2)]">For retired government employees and their dependants.</p>
                </div>
              </div>
              <div className="w-full h-px bg-[var(--color-line)] mb-6"></div>
              
              <div className="flex gap-4 items-start mb-8">
                <Tick />
                <div>
                  <h4 className="text-h4 text-[var(--color-ink)] mb-1">Star Health Insurance</h4>
                  <p className="text-body text-[var(--color-ink-2)]">Cashless, subject to your policy terms.</p>
                </div>
              </div>

              <div className="w-full h-px bg-[var(--color-line)] mb-6"></div>
              <p className="text-caption text-[var(--color-ink-3)]">
                Not sure whether yours is covered? Call and ask — it takes a minute and costs nothing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FACT STRIP */}
      <section className="py-[clamp(60px,8vw,100px)] bg-[var(--color-ground)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)]">
          <FactStrip facts={[
            { number: "13 yrs", caption: "In Pollachi since 2013" },
            { number: "1", caption: "Surgeon, from first visit to last follow-up" },
            { number: "2", caption: "Sessions a day — morning and evening" },
            { number: "3", caption: "Schemes and insurances accepted" }
          ]} />
        </div>
      </section>

      {/* SECTION 6 - IN THEIR WORDS */}
      <section className="py-[clamp(80px,12vw,140px)] bg-[var(--color-warm)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,40px)] flex flex-col min-[900px]:flex-row items-center gap-[clamp(40px,8vw,80px)]">
          <div className="flex-1 w-full">
            <Eyebrow className="mb-8">In their words</Eyebrow>
            <blockquote className="text-[clamp(22px,3vw,34px)] font-semibold text-[var(--color-ink)] max-w-[20ch] leading-[1.3] -indent-[0.45em]">
              “Patients must feel safe and reassured that they will be treated with the utmost care.”
            </blockquote>
          </div>
          <div className="flex-[1.2] w-full">
            <Card variant="blue" radius="small">
              <p className="text-body text-[var(--color-ink-2)] italic mb-4">
                "Wait, this is a placeholder for real patient stories. Once we receive real consent and quotes from the hospital, we will populate this."
              </p>
              <ArrowLink href="/patient-stories">Read more experiences</ArrowLink>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 7 - CLOSING CALL */}
      <ClosingCall dark={true} />
    </main>
  );
}
