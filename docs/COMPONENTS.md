# COMPONENTS.md

Section-by-section technical breakdown of the prototype. Reference this when refactoring into components/partials.

## Page structure

```
nav
├── Hero
├── Trust bar
├── What we help with    (#help)
├── How it works         (#how)
├── Who it's for
├── Free tool / Audit    (#audit)
├── Case studies         (#cases)
├── Testimonials
├── Pricing              (#pricing)
├── Book a call          (#book)
└── Footer
```

All section IDs are referenced by the nav and inline links. Don't rename them without updating the nav.

---

## Shared primitives

### CSS variables
Defined in `:root`. See `docs/BRAND.md` for the full palette table.

### `.container`
Max-width 1240px, horizontal padding 32px. Use for every section's inner wrapper.

### `.display`
Applies Fraunces, weight 600, letter-spacing -0.025em, line-height 1.05. Add to every heading.

### `.btn-primary`
Pill-shaped CTA. Background `--ink`, white text. Has a hidden blue-gradient overlay that fades in on hover, plus an arrow that nudges right. Used for all primary CTAs.

### `.btn-secondary`
Text link with underline. Colour transitions to blue on hover. Used for "View all" / inline secondary CTAs.

### `.section-label`
Eyebrow label above each section heading. Small uppercase with a leading orange dash.

### `.reveal`
Add to any element. Translates up 28px and fades in when it enters the viewport. The `data-delay="1"` through `"6"` attributes stagger reveals in increments of 80ms.

### Reveal animation script
At the bottom of `<body>`. Uses `IntersectionObserver` to add the `.in` class. Unobserves after first trigger so it doesn't re-fire on scroll-back.

---

## Section: Nav

- Sticky with `backdrop-filter: blur(16px)` on a translucent `--paper` background.
- Hides individual nav links at `< 820px`, keeping only the logo and the CTA. **TODO for production**: build a proper mobile menu (currently it's not great below 820px — links just disappear).
- Logo mark is a CSS-only construct in `.logo-mark`. See BRAND.md for swap-in plan when an SVG logo exists.

---

## Section: Hero

- Two-column grid: copy left, visual right. Stacks at `< 980px`.
- Headline uses an inline `.underline` span that gets an animated orange underline drawn in on load (`@keyframes underlineGrow`).
- Visual is three absolutely-positioned `.hero-card` elements:
  - `.hero-card.main` — central blue card with avatar stack and post mock
  - `.hero-card.float-a` — top-left stat card
  - `.hero-card.float-b` — bottom-right testimonial snippet
- Each has its own slow float animation (`floatA/B/C`, 5–7s loops).

**Watch out**: the hero visual is the most fragile bit at small screen widths. Centered max-width 420px at `< 980px` keeps it from breaking, but check it.

---

## Section: Trust bar

- Sits between hero and "What we help with" with a thin top border.
- Currently text-only client names. When real logos exist:
  - SVG preferred over PNG
  - Greyscale by default, full-colour on hover
  - All logos sized to the same visual height, not the same pixel height (some logos are wider than tall)

---

## Section: What we help with

The animated headline is the centrepiece. Mechanism:

```html
We help you build
<span class="help-rotate-wrapper">
  <span class="help-rotate">
    <span><em>trust.</em></span>
    <span><em>visibility.</em></span>
    <span><em>conversations.</em></span>
    <span><em>recognition.</em></span>
    <span><em>trust.</em></span>  <!-- repeated for seamless loop -->
  </span>
</span>
```

The wrapper has `overflow: hidden` and a fixed `height: 1.1em`. The inner stack translates up by 1.1em per phrase. The `@keyframes rotatePhrase` runs at 12s, with each phrase visible for ~22% of the cycle (about 2.6s). The first/last phrases are duplicates so the loop is seamless.

**Don't shorten the timing.** Faster feels frantic. 12s is the floor.

### The six help cards

Grid: 3 columns desktop, 2 cols at `< 900px`, 1 col at `< 620px`.

Each card:
- Card number `01–06` in muted text with a fading hairline
- Rounded-square icon in alternating `--blue-soft` / `--orange-soft`
- Fraunces title
- Inter Tight body copy
- Hover: lifts 6px, icon rotates `-4deg` and scales `1.1`

---

## Section: How it works

Two-column layout: sticky intro on the left, scrolling steps on the right.

- The intro uses `position: sticky` so it stays in view as the user scrolls through the steps. Tested in Chrome, Safari, Firefox.
- Each `.step` is a 2-col grid: large Fraunces number on the left, text on the right.
- Alternating step numbers: odd = blue, even = orange.

---

## Section: Who it's for

Dark background (`--ink`). Two side-by-side cards: founders/consultants on the left, companies/teams on the right.

- Cards use `backdrop-filter: blur(10px)` over a subtle white overlay (`rgba(255,255,255,0.04)`).
- Each has a coloured tag pill (blue for left, orange for right) and a bulleted list with a coloured dot.

---

## Section: Free tool / Audit

Single large card on warm paper background. Two-column inside: copy left, audit visual right.

The audit visual on the right is **a mock** — a circular score meter (`conic-gradient`) and three animated bars.

🚧 **When the real audit gets embedded**:
1. Locate the `<div class="audit-visual">` block.
2. Replace it entirely with the audit embed code.
3. The visual decorations (`::before` radial gradient on the card) and CTA button can stay.

---

## Section: Case studies

3-col grid at desktop, 2-col at `< 980px`, 1-col at `< 640px`.

Each card has a top accent line (alternating blue/orange) that scales in from 0 on hover.

Each card includes two stat numbers in Fraunces with a label. Numbers are real client results — verify against `docs/CONTENT.md` before changing.

---

## Section: Testimonials

3-col grid with a featured (blue background) card on the left at desktop. Stacks at `< 980px` and `< 640px`.

The featured card has a giant Fraunces quotation mark watermark in the top-right corner using `::before`.

Avatars are currently initials on a coloured circle. **If real photos exist**, swap the `.author-avatar` div for an `<img>` and keep the same dimensions (44×44px, border-radius 50%).

---

## Section: Pricing

3-col grid at desktop, 1-col at `< 880px`.

Middle (featured) card:
- Dark ink background
- Lifted by `translateY(-12px)` on desktop
- Has an orange "Core offer" badge pinned to the top-right

The two side cards have grey backgrounds and the side CTA uses `--paper-warm` for the button.

🚧 Numbers and feature lists are placeholders — see CONTENT.md.

---

## Section: Book a call

Big blue background section. Two-column: copy left, TidyCal embed slot right.

The right side is currently a dashed placeholder block reading "TidyCal embed goes here."

🚧 **When the TidyCal embed lands**:
1. Locate the `<div class="tidycal-slot">` block.
2. Replace its contents with the TidyCal embed snippet.
3. Keep the wrapping `<div class="tidycal-slot">` but remove the dashed border style (or move TidyCal styles into a new class).

The left-column CTA already links to the live TidyCal URL as a fallback: `https://tidycal.com/jessieparkinson/free-intro-call`.

---

## Section: Footer

4-col grid: brand block + three nav columns.

Stacks to 2-col at `< 820px` and 1-col at `< 480px`.

Footer is on `--ink` background.

---

## Component refactor plan

When moving from single-file prototype to a component-based structure (Astro/11ty/etc.), suggested partials:

```
components/
├── Nav.astro
├── Footer.astro
├── Hero.astro
├── TrustBar.astro
├── HelpGrid.astro              (with HelpCard.astro for each card)
├── HowItWorks.astro            (with Step.astro)
├── WhoItsFor.astro
├── AuditSection.astro
├── CaseStudies.astro           (with CaseCard.astro)
├── Testimonials.astro          (with Testimonial.astro)
├── Pricing.astro               (with PriceCard.astro)
└── BookACall.astro
```

Card content (help cards, case studies, testimonials, pricing tiers) lives in data files — keep copy editable without touching markup.

Suggested data structure (TypeScript-flavoured pseudo):
```ts
// data/help-cards.ts
export const helpCards = [
  { num: '01', icon: 'mic', title: '...', body: '...' },
  ...
];
```

This way, when copy changes, only the data file changes.
