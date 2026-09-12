# SHRI ANDAVAR EYE CARE AND RETINA CENTRE

## MASTER AI BUILD PROMPT — PRODUCTION WEBSITE

You are the lead product designer, UX engineer, frontend architect, accessibility engineer, and QA engineer responsible for building the Shri Andavar Eye Care and Retina Centre website.

Your job is to build the website **exactly from the attached “Shri Andavar Website Page Specifications” document**, while using the implementation rules below to turn that specification into a polished, production-quality Next.js website.

Do not improvise visually when the specification already defines the answer.

Do not simplify the specification by removing sections, reducing typography, replacing components with generic UI, or introducing modern effects that are not requested.

The final result must feel like a **small, trustworthy, calm eye hospital**, not a generic medical template, corporate healthcare chain, SaaS website, or portfolio.

---

# 1. SOURCE OF TRUTH

The attached website specification is the primary source of truth.

Use it for:

* exact copy
* page structure
* section ordering
* visual hierarchy
* colors
* typography
* spacing
* breakpoints
* components
* motion
* accessibility rules
* responsive behavior
* bilingual behavior
* page-specific rules
* placeholder handling
* medical-content restrictions

When the specification and your personal design preference conflict, follow the specification.

Do not invent new visual styles merely because they are technically possible.

Do not add stock photography.

Do not add carousels.

Do not add parallax.

Do not add smooth-scroll hijacking.

Do not add page-load overlays.

Do not use generic glassmorphism.

Do not use gradients unless they are explicitly required.

Do not add decorative colors outside the specified palette.

---

# 2. PRODUCT GOAL

The website is for:

**Shri Andavar Eye Care and Retina Centre**

Location:

**No. 73, Palladam Road, Opposite LMHSS School, T. Kottampatti, Pollachi 642002**

Core positioning:

* cataract care
* retina care
* diabetic eye care
* glaucoma
* eye examinations
* spectacles and lenses
* one-surgeon continuity
* clear communication
* transparent cost discussion
* Tamil + English
* calm, human, local presentation

The primary audience is a worried patient, often older than 55, or an adult child researching care for a parent.

Every design decision must therefore prioritize:

1. readability
2. trust
3. clarity
4. low cognitive load
5. obvious phone/directions actions
6. excellent mobile usability
7. restrained visual motion
8. accessibility

The website must never feel rushed or visually noisy.

---

# 3. FINAL TECH STACK

Use:

* Next.js
* App Router
* TypeScript
* Tailwind CSS 4
* next-intl for localization
* CSS for the detailed design system
* custom React components
* inline SVG for aperture graphics and medical diagrams
* Lucide React or similarly lightweight icon library
* self-hosted Anek Tamil `.woff2`
* Vercel deployment

Use current stable versions compatible with the project environment.

Do not add unnecessary libraries.

Do not add a large component framework such as Material UI unless absolutely unavoidable.

Prefer lightweight custom components because the specification has a highly specific visual language.

Use Server Components by default.

Use Client Components only where interactivity requires them, such as:

* navigation menu
* language switch
* live opening-hours state
* scroll-state header behavior
* IntersectionObserver animation
* interactive mobile controls

---

# 4. PROJECT ARCHITECTURE

Build the site as a reusable system, not nine duplicated pages.

Recommended structure:

```text
app/
  [locale]/
    layout.tsx
    page.tsx
    our-surgeon/
      page.tsx
    treatments/
      page.tsx
    cataract-surgery/
      page.tsx
    schemes/
      page.tsx
    visit-us/
      page.tsx
    about/
      page.tsx
    patient-stories/
      page.tsx
    eye-health/
      page.tsx

components/
  layout/
    Header
    MobileMenu
    LanguageSwitcher
    StickyCallBar
    Footer

  navigation/
    Breadcrumbs

  design/
    Eyebrow
    Aperture
    PrimaryButton
    GhostButton
    ArrowLink
    OpenNowPill
    Card
    ServiceCard
    RowList
    Tick
    FactStrip

  sections/
    PageHero
    ClosingCall
    SurgeonSection
    CostSection
    TreatmentGrid
    SchemeGrid
    VisitFacts
    TestimonialGrid
    EyeHealthGrid

  medical/
    CataractDiagram
    RetinaDiagram
    DiabeticEyeDiagram
    GlaucomaDiagram

content/
  en/
  ta/

lib/
  clinic-hours.ts
  navigation.ts
  routes.ts
  localization.ts
  seo.ts

public/
  fonts/
  icons/
```

Adjust naming when necessary, but preserve the principle:

**one shared component system + page composition.**

---

# 5. PAGE ROUTING

Create nine launch pages:

```text
/en
/en/our-surgeon
/en/treatments
/en/cataract-surgery
/en/schemes
/en/visit-us
/en/about
/en/patient-stories
/en/eye-health
```

Tamil equivalents:

```text
/ta
/ta/our-surgeon
/ta/treatments
/ta/cataract-surgery
/ta/schemes
/ta/visit-us
/ta/about
/ta/patient-stories
/ta/eye-health
```

Use localized routing rather than hiding language entirely inside client-side state.

The language switch must preserve the current page whenever an equivalent localized page exists.

The selected language should persist.

Never allow a language switch to accidentally reset the user to the homepage unless necessary.

---

# 6. GLOBAL DESIGN SYSTEM

Implement these exact colors.

## Backgrounds

```text
Ground       #FBF8F3
Warm band    #F5EFE5
Cool band    #EFF3F5
Card         #FFFFFF
```

## Text

```text
Ink          #151A1C
Ink-2        #3E4A50
Ink-3        #6B7A81
```

## Brand

```text
Blue         #0B5C8A
Blue deep    #083F5F
Blue wash    #E3EEF5

Amber        #B8722C
Amber wash   #F6E8D6

Green        #2E7D5B
Green wash   #E1F0E8
```

## Lines

```text
Line         #E2DACE
Line cool    #D8E0E4
```

## Dark sections

```text
Background   #151A1C
Heading      #FFFFFF
Body         #C9D3D7
Muted        #8496A0
Eyebrow      #7FBBDC
Hairline     #2A3237
```

Do not introduce additional colors.

Blue is primarily for actions and specified structural accents.

Amber is for human/symptom emphasis and “worth knowing” content.

Green is reserved for open/covered states and tick indicators.

---

# 7. TYPOGRAPHY

Use **Anek Tamil** for both English and Tamil.

Self-host the font.

Never load it from a Google CDN.

Use only these weights:

```text
400
500
600
700
```

Typography:

```text
Display 1: clamp(38px, 5.4vw, 63px), 700
Display 2: clamp(32px, 5.2vw, 54px), 700
H2:        clamp(28px, 4.2vw, 44px), 700
H3:        clamp(21px, 2.5vw, 27px), 700
H4:        19px, 600
Lede:      clamp(19px, 2.1vw, 23px), 400
Body:      18px, 400, line-height 1.66
Small:     16.5px
Caption:   15px
Eyebrow:   14px, 600, uppercase, letter-spacing 0.1em
```

Minimum normal body size:

**18px.**

Do not reduce it for visual compactness.

Tamil should use weight 500 where specified to visually balance the Latin text.

Every heading must use:

```css
text-wrap: balance;
```

---

# 8. TEXT MEASURE

Body paragraphs:

```text
max-width: 64ch
```

Ledes:

```text
approximately 46ch
```

Headline `ch` constraints must be applied **to the heading itself**, not to a parent wrapper.

This is important.

Never do:

```css
.wrapper {
  max-width: 15ch;
}
```

when the intention is to constrain a large heading.

Instead:

```css
h1 {
  max-width: 15ch;
}
```

---

# 9. LAYOUT SYSTEM

Container:

```text
max-width: 1180px
margin-inline: auto
```

Page gutter:

```text
clamp(20px, 5vw, 40px)
```

Section vertical padding:

```text
clamp(64px, 11vw, 136px)
```

Grid gap:

```text
clamp(22px, 3.4vw, 40px)
```

Split gap:

```text
clamp(32px, 5vw, 80px)
```

Card padding:

```text
clamp(26px, 3.4vw, 38px)
```

Card radius:

```text
26px large
14px small
999px pills
```

Minimum button height:

```text
58px
```

Minimum touch target:

```text
48px
```

Minimum gap between touch targets:

```text
8px
```

---

# 10. RESPONSIVE BREAKPOINTS

Use these exact behavioral breakpoints:

```text
1040px
Navigation collapses.

900px
Home hero becomes one column.
Hero aperture becomes a background element.

860px
Two/three-column grids become one column.
Sticky mobile call bar appears.

480px
Four-column grids become one column.

430px
Brand sub-label hides.
Brand mark shrinks.
```

The site must be visually correct at:

```text
390px
430px
480px
768px
860px
900px
1040px
1280px
1440px
```

Do not only test desktop and one mobile width.

---

# 11. SHARED HEADER

Build one header used across all nine pages.

Characteristics:

* sticky
* minimum 78px height
* warm translucent background
* `rgba(251,248,243,.86)`
* backdrop blur 14px
* initially no bottom border
* once scroll exceeds 10px:

  * bottom border appears
  * subtle shadow appears

Desktop:

Left:

* aperture mark
* Shri Andavar
* EYE CARE & RETINA CENTRE

Center:

* Treatments
* Our Surgeon
* Schemes
* Visit Us
* About

Right:

* EN / த language switch

Mobile:

```text
brand | language | menu
```

The brand must be allowed to shrink.

Never let the brand push the menu button off-screen.

Mobile menu:

* full-width panel
* slides down from header
* 48×48 menu button
* bars become X when open
* proper keyboard behavior
* accessible focus handling
* Escape closes menu
* menu is not dependent on hover

---

# 12. STICKY MOBILE CALL BAR

Only display below 860px.

Fixed to viewport bottom.

Two equal buttons:

```text
Call the hospital
Directions
```

Height:

```text
56px
```

Use safe-area padding.

Add enough bottom body padding so content is never hidden behind the bar.

Outside consulting hours the call button must change to:

```text
Call — opens 5:00 PM
```

Do not misleadingly encourage calling when the stated consulting session is closed.

---

# 13. LIVE OPENING STATUS

Clinic sessions:

```text
Monday–Saturday
10:00 AM–2:00 PM
5:00 PM–7:00 PM

Sunday closed
```

Calculate status using the clinic's intended IST timezone behavior.

The status must not depend on the visitor's local timezone.

Visitors abroad should still see the clinic's true India time status.

States:

* Open now
* Closing soon if appropriate
* Closed
* Opens at 5:00 PM when relevant

Green for open state.

Amber wash for closed state.

Do not fake “live” behavior with static text.

---

# 14. APERTURE SYSTEM

The aperture is the core visual motif.

Build it as reusable SVG.

Characteristics:

* concentric circles
* 1px strokes
* #E2DACE
* one blue ring at approximately 45% opacity
* innermost ring may use #E3EEF5
* decorative only
* pointer-events none
* `aria-hidden="true"`
* positioned absolutely
* clipped by an overflow-hidden parent

It must never cover important text.

It must never become the visual subject instead of supporting content.

Use one reusable Aperture component with configurable:

```text
size
opacity
position
ring count
animation
```

---

# 15. MOTION

Only use the specified motion language.

Primary entrance animation:

```text
opacity: 0
filter: blur(9px)
transform: translateY(22px) scale(.985)

to:

opacity: 1
filter: blur(0)
transform: translateY(0) scale(1)
```

Timing:

```text
0.85s
cubic-bezier(.22,.68,.28,1)
```

Stagger:

```text
0.09s
maximum five steps
```

Trigger:

IntersectionObserver

Root margin:

```text
0 0 -12% 0
```

Threshold:

```text
0.08
```

Animate:

* headings
* cards
* tiles
* list blocks
* images
* button rows

Do NOT animate long paragraphs using blur.

Use a JS fallback timeout so content cannot remain invisible.

Use `.no-js` fallback so all content is visible without JavaScript.

Use:

```css
@media (prefers-reduced-motion: reduce)
```

to disable transitions, animation, stagger, and pulse.

---

# 16. MICRO-INTERACTIONS

Buttons:

```text
translateY(-2px)
0.25s
```

Cards:

```text
translateY(-5px)
deeper shadow
0.35s
```

Arrow links:

gap:

```text
9px → 15px
```

Service-card aperture:

```text
scale(1.12)
rotate(8deg)
```

Open-now dot:

2.6s pulse ring.

Do not use hover-only meaning.

Everything important must remain understandable without hover.

---

# 17. SHARED COMPONENT SYSTEM

Create these reusable components:

### Eyebrow

* 26px blue rule
* label
* one per section maximum

### Primary button

* blue fill
* white text
* pill radius
* 58px minimum height
* icon + label

### Ghost button

* 1.5px line
* translucent/light fill
* ink text
* pill shape

### Arrow link

* blue
* weight 600
* arrow icon
* animated gap only

### Card

* white
* 26px radius
* 1px border
* soft shadow

Variants:

```text
default
blue tint
amber tint
```

### Service Card

Anatomy:

```text
symptom line
H3
body
Read more
aperture
```

The bottom link must align across cards using flex layout.

### Row List

* hairline separators
* optional tabular blue number
* H4
* body

### Tick

30px green-wash circle.

### Fact Strip

One rounded bordered container.

Four cells desktop.

Large number first.

Caption second.

---

# 18. BAND USAGE

Preferred rhythm:

```text
Ground
Warm
Ground
Cool
...
```

However:

**adjacent sections may share the same band when they belong together.**

Do not force artificial color changes merely to satisfy a pattern.

The goal is visual rhythm, not rigid alternation.

Dark sections are limited to:

* Home
* Cataract Surgery
* Patient Stories

and should be the single strongest closing action/statement on those pages.

---

# 19. LAUNCH PAGES

Build exactly these nine pages.

## PAGE 1 — HOME

Route:

```text
/[locale]
```

Seven sections:

1. Hero
2. The Surgeon
3. What We Treat
4. Cost
5. Fact Strip
6. In Their Words
7. Visit

Home priority:

1. Are you open?
2. Who will see me?
3. Where are you?
4. How do I contact you?

The primary conversion goal is a phone call.

Hero:

* live open-now pill
* H1
* lede
* Call button
* Directions button
* location caption
* large six-ring aperture

Hero becomes one column below 900px.

Hero aperture becomes a background at reduced opacity on mobile.

The H1 must use the specified 15ch constraint.

Use the exact copy in the source specification.

Do not rewrite it.

Section 2:

Surgeon intro + plain-language qualifications card.

Section 3:

Four service cards.

Section 4:

Cost + scheme summary.

Section 5:

Four facts:

```text
13 yrs
1
2
3
```

Section 6:

Patient quote + supporting paragraph.

Section 7:

Dark visit CTA.

No additional dark section.

---

# 20. PAGE 2 — OUR SURGEON

Route:

```text
/[locale]/our-surgeon
```

Four sections:

1. Page hero
2. Who he is
3. A first visit
4. Closing call

Hero:

```text
Dr. A. Raghuram
MBBS · DO · DNB (Ophthalmology) · FICO (UK) · FRCS (Glasgow)
```

Section 2:

* three paragraphs
* blue-tinted “What this means for you” card
* optional portrait support

If portrait exists:

* place at top of Section 2 left column
* 1:1 crop
* 26px radius
* do not redesign layout around it

Section 3:

Five sequential rows:

```text
01 You arrive
02 Vision and pressure
03 Drops, then a wait
04 The examination
05 What next
```

Section 4:

Centered call CTA.

No dark section on this page.

---

# 21. PAGE 3 — TREATMENTS

Route:

```text
/[locale]/treatments
```

Three sections:

1. Hero
2. Six treatments
3. Not sure

Six service cards:

1. Cataract surgery
2. Retina care
3. Diabetic eye care
4. Glaucoma
5. Full eye examination
6. Spectacles & lenses

Lead with symptoms.

Medical term comes second.

Do not reverse that order.

Only Cataract Surgery links to its current detail page.

The remaining treatment cards may point back to the Treatments hub until their detail pages are created.

Do not invent fake detail pages.

No dark section.

---

# 22. PAGE 4 — CATARACT SURGERY

Route:

```text
/[locale]/cataract-surgery
```

This page is also the structural template for the five future treatment-detail pages.

Five sections:

1. Hero
2. What a cataract actually is
3. The day itself
4. Choices and myths
5. Closing call

Section 2 includes a custom SVG anatomy diagram.

Requirements:

* `viewBox="0 0 572 300"`
* globe
* cornea
* iris
* clouded lens
* retina
* optic nerve
* labels outside globe
* leader lines
* no label crossing globe outline
* safe margins inside viewBox

Section 3 contains six numbered steps.

Section 4 contains:

Left:

* Lens options

Right:

* Worth knowing
* amber tint

Section 5 is the only dark band.

The remaining five treatment-detail pages must clone this information architecture while changing:

* title
* clinical copy
* medical diagram
* steps
* choices
* myths
* closing CTA

Do not create six unrelated treatment-page layouts.

---

# 23. FUTURE TREATMENT PAGES

The five future treatment pages are:

```text
Retina care
Diabetic eye care
Glaucoma
Full eye examination
Spectacles & lenses
```

They are future pages, not part of the nine-page launch count.

Build the architecture so adding them requires content, not a new layout system.

Each must retain the same five-section structure:

```text
Hero
What it is
Steps/day/process
Choices and worth knowing
Closing call
```

Each requires its own SVG medical diagram.

Medical claims must be clinically verified before publication.

Never invent procedures the practice does not perform.

---

# 24. PAGE 5 — SCHEMES AND INSURANCE

Route:

```text
/[locale]/schemes
```

Four sections:

1. Hero
2. Three schemes
3. If you have no scheme
4. Counter questions

Hero is the only page hero using the cool band.

Three scheme cards:

1. CMCHIS
2. Pensioners Health Scheme
3. Star Health Insurance

Each card must include:

* green tick
* scheme name
* tag
* body
* divider
* Bring With You
* three items

Make “Bring With You” align vertically at the bottom of cards.

Section 3:

Transparent cost explanation.

Section 4:

five questions.

No dark section.

All scheme information must remain clearly marked as requiring hospital verification before launch.

Do not imply eligibility beyond what the verified scheme terms support.

---

# 25. PAGE 6 — VISIT US

Route:

```text
/[locale]/visit-us
```

Three sections:

1. Hero
2. Three facts
3. Before you come

Hero headline:

```text
Opposite LMHSS School, Palladam Road.
```

The landmark comes before the full address.

Three fact cards:

* Address
* Consulting hours
* Telephone

Section 3:

Four preparation rows + “Getting here” card.

The “Getting here” card:

* sticky on desktop
* normal-flow on mobile

Optional future map:

* full width
* between Sections 2 and 3
* 26px radius
* 400px height
* lazy loaded

Do not allow a map to push important phone information below the fold.

No dark section.

---

# 26. PAGE 7 — ABOUT

Route:

```text
/[locale]/about
```

Four sections:

1. Hero
2. Story
3. How we work
4. Closing call

Section 2:

* three paragraphs
* blue-tinted “In short” card

Section 3:

three principles:

```text
01 Nothing is recommended that is not needed
02 You will understand what is happening
03 The cost is stated before you commit
```

These are principles, not process steps.

No dark section.

When facility photography exists later, support placing a two-up photo layout beneath the third paragraph without redesigning the section.

---

# 27. PAGE 8 — PATIENT STORIES

Route:

```text
/[locale]/patient-stories
```

Three sections:

1. Hero
2. Stories
3. Ask for one

This page may contain placeholder testimonials during development.

BUT:

The six placeholder testimonials are not real patient testimonials.

They must never appear as real published reviews.

During development:

* display the internal dashed note
* clearly identify them as placeholders
* visually distinguish internal content

Before production:

* replace them with real consented quotations
* or use verified Google reviews
* remove the internal note

Never invent:

* patient names
* outcomes
* locations
* quotations

Six weak/fictional testimonials are worse than fewer real ones.

Section 3 is the only dark section.

---

# 28. PAGE 9 — EYE HEALTH

Route:

```text
/[locale]/eye-health
```

Three sections:

1. Hero
2. Six answers
3. Closing call

Six article/card headings:

```text
If you have diabetes, your eyes need a check every year

A cataract does not need to be "ripe"

Children rarely say they cannot see

Floaters are usually harmless. A curtain is not.

Screens do not damage your eyes, but they do dry them

Do not buy a pressure reading from a machine alone
```

These headings are conclusions, not questions.

Each has a short answer.

Include the internal editorial note during development.

No dark section.

All clinical claims require doctor verification before launch.

---

# 29. BILINGUAL SYSTEM

Every translatable string must have English and Tamil content.

Prefer structured message dictionaries rather than scattered hard-coded strings.

Example:

```ts
{
  heroTitle: "...",
  heroTitleTa: "...",
}
```

Better:

```ts
{
  heroTitle: {
    en: "...",
    ta: "..."
  }
}
```

The UI must switch:

* navigation
* buttons
* labels
* headings
* body
* status labels
* CTA text
* footer
* breadcrumbs
* critical content

Do not switch only the article body.

Do not leave English UI labels in Tamil mode.

Do not machine-translate medical content.

Until medically reviewed Tamil copy exists, maintain an explicit content-status mechanism rather than pretending translation is final.

---

# 30. ACCESSIBILITY

Build for older users.

Requirements:

* semantic HTML
* real heading hierarchy
* keyboard navigation
* visible focus states
* high readable contrast
* 48px minimum touch targets
* no hover-only functionality
* meaningful link text
* buttons vs links used correctly
* `aria-hidden="true"` for decorative apertures
* language attributes where appropriate
* no keyboard traps
* Escape closes mobile menu
* `aria-expanded` for menu controls
* `aria-current` for active navigation
* accessible status text for open/closed state
* telephone links using `tel:`
* directions links using a real navigation URL
* images require useful alt text when meaningful
* decorative images use empty alt text
* no flashing animation

The website must remain fully usable with JavaScript disabled except for genuinely interactive enhancements.

---

# 31. SEO

Implement production-quality SEO without changing the visual design.

For every page:

* unique title
* unique meta description
* canonical URL
* localized metadata
* language alternates/hreflang
* Open Graph metadata
* Twitter/X metadata when appropriate
* semantic heading hierarchy
* sitemap
* robots configuration
* clean URLs

Include localized metadata for English and Tamil.

Use structured data where appropriate, especially for the medical organization/local business, but do not fabricate facts.

Only use organization information that has been verified.

---

# 32. PERFORMANCE

Optimize for a mid-range mobile device.

Rules:

* avoid unnecessary client components
* avoid huge JS bundles
* lazy load non-critical content
* load fonts efficiently
* preload only truly critical font files
* use `next/image` for actual photography
* use SVG for simple diagrams
* avoid expensive animation libraries
* avoid scroll listeners when IntersectionObserver is sufficient
* avoid layout shift
* avoid giant background assets
* do not ship unused icon libraries wholesale

The site must feel fast even on average mobile hardware.

---

# 33. VISUAL QUALITY CONTROL

Do not stop when the page technically renders.

After implementation, inspect every page visually at:

```text
390px
430px
768px
860px
1040px
1280px
1440px
```

Check specifically for:

* overflow
* clipped text
* broken headings
* incorrect line wrapping
* excessive whitespace
* cramped cards
* uneven card heights
* misaligned buttons
* aperture overlapping content
* header collisions
* language-toggle collisions
* mobile menu overflow
* sticky call-bar overlap
* footer layout problems
* Tamil text overflow
* diagram-label collisions
* insufficient contrast
* accidental horizontal scroll

Zero horizontal scroll is mandatory at 390px.

---

# 34. CARD ALIGNMENT

Service cards and scheme cards must align cleanly.

Use flex/grid structure such as:

```text
card
  content
  spacer/flex-grow
  action
```

Do not achieve alignment using arbitrary fixed heights.

Use natural content where possible.

Avoid content clipping.

When languages produce different text lengths, the layout must remain stable.

---

# 35. MEDICAL DIAGRAM RULES

All diagrams must be custom SVG, not generic image assets.

Use:

* consistent stroke widths
* specified palette
* simple anatomical abstraction
* no unnecessary 3D shading
* no photorealistic illustration
* labels outside important shapes
* sufficient whitespace
* mobile scaling without label collisions

Each future treatment page must receive its own accurate diagram.

Do not reuse a cataract diagram for unrelated conditions.

---

# 36. CONTENT SAFETY

Never invent medical facts.

Never invent:

* procedures offered
* doctor credentials
* treatment outcomes
* prices
* insurance eligibility
* patient reviews
* patient names
* patient locations
* opening times

The specification contains content that is explicitly marked for hospital/doctor verification.

Preserve those verification requirements.

Use clearly defined content placeholders where necessary.

Do not silently convert placeholders into published-looking facts.

---

# 37. INTERNAL CONTENT STATUS

Support a simple content status model:

```ts
type ContentStatus =
  | "final"
  | "placeholder"
  | "needs-medical-review"
  | "needs-tamil-review"
  | "needs-hospital-verification"
```

Use it during development.

Examples:

* patient testimonials → placeholder
* medical statements → needs-medical-review
* insurance coverage → needs-hospital-verification
* incomplete Tamil medical copy → needs-tamil-review

Production content should not expose internal notes unless the specification explicitly says to display them.

---

# 38. FOOTER

Use one identical footer component across all nine pages.

Dark ink section.

Four columns desktop.

Two columns at 860px.

One column at 520px.

Include:

* brand
* short hospital description
* treatments
* hospital navigation
* visit information
* phone links
* directions
* consulting hours
* bottom copyright row

Do not accidentally uppercase the descriptive paragraph by applying brand styling to all nested spans.

Aperture sits bottom-right at very low opacity.

---

# 39. DESIGN CHARACTER

The resulting website should communicate:

**quiet confidence**

not:

* hospital-corporate
* futuristic
* overly luxurious
* childish
* sterile
* generic medical
* startup
* AI-generated

The warmth must come from:

* off-white backgrounds
* restrained amber
* calm spacing
* human copy
* one-surgeon continuity
* local landmark language
* clear cost communication

The “luxury” quality should come from **precision, spacing, typography, restraint, and consistency**, not gold gradients, giant animations, excessive shadows, or decorative clutter.

---

# 40. WHAT NOT TO DO

Never:

* introduce extra colors
* use stock photography
* use a generic medical hero image
* use giant rounded blobs
* use excessive gradients
* use carousels
* use parallax
* use Lenis/smooth-scroll hijacking
* use autoplay video
* blur long body text during entrance animation
* reduce body text below 18px
* allow text to sit directly underneath the mobile call bar
* create different card styles for different pages without specification
* duplicate page layouts unnecessarily
* fake testimonials
* machine-translate medical Tamil content
* make clinical claims without verification
* use hard-coded desktop-only spacing
* create horizontal scrolling
* hide important information behind interaction
* make accessibility secondary to aesthetics

---

# 41. IMPLEMENTATION ORDER

Build in this order.

## Phase 1 — Foundation

Create:

* Next.js application
* TypeScript
* App Router
* localization architecture
* global CSS
* Tailwind integration
* Anek Tamil
* design tokens
* route structure

Do not build pages yet.

## Phase 2 — Shared shell

Build and validate:

* Header
* language switch
* mobile menu
* sticky call bar
* footer
* open-now logic
* buttons
* breadcrumb
* aperture

Test this shell independently.

## Phase 3 — Core components

Build:

* eyebrow
* card
* service card
* row list
* tick
* fact strip
* page hero
* closing CTA
* dark CTA
* tinted panels

## Phase 4 — Pages

Build in this order:

1. Home
2. Our Surgeon
3. Treatments
4. Cataract Surgery
5. Schemes
6. Visit Us
7. About
8. Patient Stories
9. Eye Health

## Phase 5 — Localization

Complete:

* English
* Tamil structure
* language switching
* localized metadata
* layout verification for both languages

## Phase 6 — QA

Test:

* desktop
* tablet
* 390px mobile
* keyboard
* reduced motion
* JavaScript disabled
* slow network
* long Tamil strings
* mobile sticky bar
* all links
* all phone links
* directions
* menus
* language switching

---

# 42. ACCEPTANCE CRITERIA

The build is not finished until all are true.

### Visual

* The site matches the specification's visual language.
* No unexpected colors.
* No inconsistent card styles.
* No broken spacing.
* No awkward heading wraps.
* Apertures are visually subordinate to content.
* Desktop and mobile layouts both look intentionally designed.

### Responsive

* No horizontal scroll at 390px.
* No header collisions.
* No sticky-bar obstruction.
* No card overflow.
* No SVG label collisions.
* Tamil layout remains stable.

### Functional

* All navigation works.
* Language switch works.
* Mobile menu works.
* Call buttons use `tel:`.
* Directions buttons work.
* Open/closed status is correct.
* Scroll-based header state works.
* Reduced-motion mode works.

### Accessibility

* Keyboard navigation works.
* Focus states visible.
* Menu is accessible.
* Decorative SVG is hidden from assistive technology.
* Correct semantic elements are used.
* Text remains readable.

### Performance

* No unnecessary client rendering.
* No large unused dependencies.
* Images optimized.
* Fonts optimized.
* Animations lightweight.

### Content

* Exact copy remains exact.
* Placeholder testimonials remain clearly marked until replaced.
* Medical claims remain flagged until reviewed.
* Insurance claims remain flagged until verified.
* Tamil medical content is not falsely presented as professionally reviewed.

---

# 43. FINAL DESIGN REVIEW

Before declaring completion, compare the implementation against the specification page by page.

For every page verify:

1. Correct number of sections.
2. Correct section order.
3. Correct background band.
4. Correct heading.
5. Correct body copy.
6. Correct CTA.
7. Correct aperture placement.
8. Correct responsive behavior.
9. Correct typography.
10. Correct spacing.
11. Correct mobile behavior.
12. Correct footer.
13. Correct sticky call bar.
14. Correct language behavior.

Do not declare success merely because:

```bash
npm run build
```

passes.

The website must also pass visual inspection.

---

# 44. FINAL DEVELOPMENT PRINCIPLE

Build this as a **carefully designed real hospital website**, not as an AI-generated approximation.

When a detail in the specification is precise, obey it precisely.

When the specification intentionally leaves room for implementation, choose the simplest technically robust solution that preserves the visual intent.

Prioritize:

**clarity → trust → accessibility → responsiveness → performance → visual refinement.**

Never sacrifice the first four merely to create visual drama.

The final site should look so coherent that all nine pages feel like one carefully designed system rather than nine separate AI-generated pages.
