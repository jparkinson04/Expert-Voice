# Expert Voice — Marketing Site

The marketing site for Expert Voice. One landing page, deliberately focused.

> **Put a face in front of the logo.**
> Personal-voice content that turns founders and key team members into the trust builders for the business.

---

## What's in this repo

```
.
├── CLAUDE.md                          ← Start here if you're Claude Code
├── README.md                          ← This file. For humans.
├── prototype/
│   └── expert-voice-landing.html      ← Single-file working prototype
└── docs/
    ├── BRAND.md                       ← Colours, fonts, voice
    ├── CONTENT.md                     ← Every copy block on the site
    ├── COMPONENTS.md                  ← Section-by-section technical breakdown
    ├── INTEGRATIONS.md                ← TidyCal, audit, analytics
    └── ROADMAP.md                     ← What's in v1, what's not
```

---

## Quick start

### View the prototype right now

```bash
open prototype/expert-voice-landing.html
```

That's it. No build step. Single file, works in any modern browser.

### Working in VS Code with Claude Code

1. Open this folder in VS Code.
2. `CLAUDE.md` is automatically read by Claude Code as project context.
3. Tell Claude what you want to work on. It'll know to read the relevant doc.

Example prompts:
- *"Refactor the prototype into an Astro project with components, following docs/COMPONENTS.md."*
- *"Add `prefers-reduced-motion` support across the whole page."*
- *"Build a proper mobile menu — the prototype just hides nav links and that's not good enough."*
- *"Swap the placeholder TidyCal block for this embed code: [paste]"*

---

## The most important things to know

### 1. The prototype is the design source of truth
Don't redesign. The visual direction is locked: warm paper background, Fraunces display + Inter Tight body, blue/orange/ink palette, editorial-leaning layout with deliberate motion.

### 2. Two audiences, one page
The site sells to founders/consultants *and* to companies activating their team. Both are present in the "Who it's for" section. Don't collapse to one.

### 3. Placeholders are placeholders
- TidyCal block — Jessie pastes embed code in
- Audit widget — Jessie pastes embed code in
- Pricing numbers — being revised
- Testimonial wording — pending client sign-off

Don't "fix" these by inventing replacements.

### 4. Real client numbers
The case study stats (Christian +93 ICP, AIR 10x traffic, Autonary +664, etc.) are real outcomes from real clients. Don't pad them. Don't invent more.

---

## Production checklist

See `docs/ROADMAP.md` for the full launch definition of done. Quick version:

- [ ] Real mobile nav (not just hidden links)
- [ ] `prefers-reduced-motion` support
- [ ] TidyCal embed live
- [ ] Audit embed live
- [ ] Real testimonials signed off
- [ ] Updated pricing in
- [ ] SEO meta + OG image
- [ ] Favicon set
- [ ] Plausible analytics
- [ ] Lighthouse 95+ Performance & Accessibility
- [ ] Domain → HTTPS → live

---

## Who this is for

Expert Voice clients fall into two camps:

**Founders & consultants** — solo or near-solo operators whose personal brand carries the business. Coaches, advisors, professional services.

**Companies & teams** — businesses that want to put real people (salespeople, consultants, subject-matter experts) in front of the audience instead of a logo.

Both audiences see the same page. The "Who it's for" section makes the dual route explicit.

---

## Brand at a glance

| | |
|---|---|
| Colours | Blue `#527FE6` · Orange `#FC9F5B` · Ink `#1A1A2E` · Paper `#FBFAF7` |
| Display font | Fraunces (Google Fonts) |
| Body font | Inter Tight (Google Fonts) |
| Voice | Direct, confident, plain-language, British English |
| Avoid | Purple gradients, em-dash clusters, three-adjective stacks, generic SaaS aesthetics |

Full detail in `docs/BRAND.md`.

---

## Contact

Built for Jessie at Expert Voice Ltd, Doncaster.

Domain: `expertvoice.co.uk`
Booking: `https://tidycal.com/jessieparkinson/free-intro-call`
