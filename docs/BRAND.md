# BRAND.md

The Expert Voice brand system. All visual and verbal decisions reference this.

## Colour palette

These are the only colours used on the site. No additions without sign-off.

| Token | Hex | Where it's used |
|---|---|---|
| `--blue` | `#527FE6` | Primary accent. Headline accents, primary icons, featured pricing card. |
| `--blue-dark` | `#3B5FB8` | Hover states on primary blue, gradients. |
| `--blue-soft` | `#E8EFFD` | Icon backgrounds, soft fills. |
| `--orange` | `#FC9F5B` | Secondary accent. Badges, highlights, the underline animation, alternating numbers. |
| `--orange-soft` | `#FFE8D6` | Icon backgrounds, soft fills. |
| `--ink` | `#1A1A2E` | Body text, dark sections, primary button background. |
| `--ink-soft` | `#4A4A66` | Secondary text, captions, labels. |
| `--paper` | `#FBFAF7` | Default page background. Warm off-white, not pure white. |
| `--paper-warm` | `#F5F1EA` | Alternate section backgrounds. |
| `--white` | `#FFFFFF` | Card backgrounds only. |
| `--line` | `rgba(26, 26, 46, 0.08)` | Subtle borders. |
| `--line-strong` | `rgba(26, 26, 46, 0.18)` | Stronger borders. |

### Colour rules

- **Blue and orange are partners, not equals.** Blue carries more of the visual weight; orange punctuates. Roughly 70/30.
- **Never use pure white (`#FFFFFF`) as a page background.** Use `--paper`. The warm off-white is part of the editorial feel.
- **Never use pure black** for text. Use `--ink`. Pure black against warm paper looks harsh.
- **Avoid purple, green, or red** anywhere. Even for error states — use ink with bold weight, not red.

## Typography

Two fonts. Loaded from Google Fonts.

### Display: Fraunces

- Used for: All headings (h1–h3), pull quotes, large numerals, italicised emphasis.
- Weights used: 500, 600, 700 (occasionally 900 for huge display).
- `font-variation-settings: "opsz" 144;` is set globally for large display sizes.
- Italics are a feature — Fraunces italic is distinctive. Use `<em>` deliberately, not just for emphasis but as a visual rhythm tool.

### Body: Inter Tight

- Used for: All body copy, buttons, navigation, captions, eyebrow labels.
- Weights used: 400, 500, 600, 700.
- Use 500 as the default for buttons, nav, and labels. 400 for body text.

### Type rules

- **No other fonts.** No Inter, no Space Grotesk, no Roboto. The pairing is deliberate.
- **Headlines use Fraunces 600.** Don't go heavier unless it's a true display moment.
- **Letter spacing on display**: `-0.025em` for large headlines, `-0.02em` for medium, `-0.01em` for small. Tight, but not too tight.
- **Line height**: 1.05 for large display, 1.2 for medium headings, 1.6 for body.
- **Eyebrow labels** (section labels): Inter Tight 600, uppercase, `letter-spacing: 0.16em`, 12px.

## Voice & tone

The Expert Voice voice for marketing copy.

### Core principles

- **Direct, not corporate.** "We help you build trust" not "We empower businesses to leverage authentic communication strategies."
- **Confident, not boastful.** State what's true. Don't dress it up.
- **Plain words, sharp ideas.** Short sentences. Long ones only when they earn it.
- **British English.** Colour, not color. Optimise, not optimize.
- **Active voice by default.** "We build your content engine" not "Your content engine is built."

### What to avoid

- "Empower," "leverage," "unlock," "supercharge," "ecosystem," "synergy."
- "Game-changer," "next-level," "10x," "rockstar," "ninja."
- Three-adjective stacks ("dynamic, innovative, scalable").
- Emojis in marketing copy. Acceptable only in actual social posts being shown as examples.
- Em dashes used in clusters — they signal AI-written copy when overused. One per paragraph max.
- Starting paragraphs with "In today's fast-paced world…" or any variant.

### The tonal anchor

Read the hero section of `prototype/expert-voice-landing.html`. That's the voice. If new copy doesn't sound like it could sit next to the hero, rewrite it.

## Logo & mark

The current mark is a CSS-only construct: a small rotated blue rounded square with an orange dot in the upper right.

```html
<a href="#" class="logo">
  <span class="logo-mark"></span>
  Expert Voice
</a>
```

This is fine for v1. **If Jessie produces a proper SVG logo later**, swap the `.logo-mark` div for an `<svg>` and keep dimensions equivalent (32×32px).

## Iconography

- **Stroke icons only.** Inline SVG, `stroke-width="2"`, no fills.
- **Sourced from Lucide** by default. Don't introduce other icon sets.
- Icon containers are 14px border-radius rounded squares in either `--blue-soft` or `--orange-soft`, alternating across grids.
- Icons rotate `-4deg` and scale `1.1` on hover where they're inside interactive cards.

## Imagery

- Currently: no photography on the site. The design works without it.
- If photos are added: real photos of real people only (Jessie, clients with permission, real workspace shots). No stock photography of generic professionals.
- Subtle grain or warmth filter acceptable. No heavy filters, no duotone treatments.

## Motion

- **Reveal-on-scroll** is the default for first-fold-down sections. Don't overdo it deeper down the page.
- **Float animations** on hero cards are slow (5–7s) and subtle. Resist the urge to make them faster.
- **The rotating headline phrase** in "What we help with" is locked at 12s. Don't speed it up — it's meant to feel considered, not flashy.
- **Hover states** lift cards by 4–6px and add a deeper shadow. Don't add scale beyond 1.02.
- **Transitions** use `cubic-bezier(0.65, 0, 0.35, 1)` for entrances and `cubic-bezier(0.34, 1.56, 0.64, 1)` for playful lifts. Don't switch to linear or default ease.

## Accessibility floor

Non-negotiable:

- WCAG AA contrast on all body text. The `--ink-soft` on `--paper` is the tightest — keep an eye on it for captions.
- Focus states visible on every interactive element. Don't `outline: none` without replacing it.
- `prefers-reduced-motion: reduce` should disable the float animations and rotating headline. (Not yet in the prototype — add it during the production pass.)
- All images need alt text. Decorative SVGs get `aria-hidden="true"`.
- Buttons are `<button>` or `<a>`. Never `<div>` with a click handler.
