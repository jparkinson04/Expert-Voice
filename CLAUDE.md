# CLAUDE.md

> This file is the entry point for Claude Code working on this project. Read it first. It tells you what this project is, what's been decided, what's still open, and where to look for the details.

## What this project is

A standalone marketing website for **Expert Voice** — a content service that helps founders and key team members build trust online through personal-voice content (LinkedIn posts, blogs, newsletters, email campaigns).

The starting point is `prototype/expert-voice-landing.html` — a single self-contained HTML file that already nails the visual direction, copy positioning, and section structure. **Use it as the source of truth for design and content.** Your job is to take it from prototype to production-ready site.

## The one-line positioning

> **"Put a face in front of the logo."**
> *Personal-voice content that turns founders and key team members into the trust builders for the business.*

Everything on the site flows from this. If a copy change drifts away from this idea, push back.

## Audience — there are two

1. **Founders & consultants** — solo or near-solo operators where the person *is* the product. Coaches, advisors, professional services, HR/L&D specialists.
2. **Companies & teams** — businesses that want to activate their right people (salespeople, consultants, subject-matter experts) as the human voice of the brand.

The site sells to both. Don't collapse it into one.

## What's already decided

Read these before making any architectural calls:

- **`docs/BRAND.md`** — colours, fonts, voice, tone rules. Don't deviate without asking.
- **`docs/CONTENT.md`** — every copy block on the site, with notes on what's locked vs. placeholder.
- **`docs/COMPONENTS.md`** — section-by-section breakdown of the prototype, including animations.
- **`docs/INTEGRATIONS.md`** — TidyCal, the Founder Visibility Audit, analytics, forms. What plugs in where.
- **`docs/ROADMAP.md`** — what's in scope for v1 launch vs. later phases.

## What's a placeholder (do not invent)

These are slots, not features to design:

- **TidyCal embed** in the "Book a call" section — Jessie will paste the snippet. Currently a dashed placeholder block. Keep that block until the real embed lands.
- **Founder Visibility Audit** — Jessie has the embed code for this. Currently a mock score widget visual. Don't build a real audit — it exists elsewhere and gets embedded.
- **Pricing figures** — the current numbers (£459/£299/£199) are accurate today but a new pricing structure is incoming. Treat the pricing component as one Jessie will update.
- **Testimonials** — quotes are illustrative pending approved wording. Real client names attached are correct, but the words may change.
- **Case study links** — currently `#`. Individual case study pages aren't in v1 scope but the cards must be linkable when those pages exist.

## What's locked

- Brand colours, fonts, voice — see `docs/BRAND.md`.
- The "Put a face in front of the logo" headline.
- The section order: Hero → Trust bar → What we help with → How it works → Who it's for → Free tool → Case studies → Testimonials → Pricing → Book a call.
- The 4-step "How it works" process (Extract → Build → Grow → Review).
- The dual-audience framing.

## Tech direction

Prototype is single-file static HTML/CSS/JS. For v1 production, the working assumption is:

- **Stack**: Static site, deployed via Netlify or Vercel. Astro or 11ty if a static-site generator is preferred for organising components, otherwise plain HTML/CSS with partials.
- **No heavy framework** unless there's a real reason. The site is content-led, not app-led.
- **No CMS** for v1. Copy lives in the codebase. Blog can come later if/when needed.

If you propose a different stack, explain why in plain terms — don't switch silently.

## How to work on this with Jessie

Jessie prefers:
- **Direct, useful, low-fluff replies.** No "great question!" preambles.
- **Honest pushback** when something he's asked for would be a worse call than an alternative. Say so, briefly, then do the thing he asked unless he agrees.
- **Concise outputs.** One-pagers over multi-page anything. Don't restate context he already has.
- **Question grouping.** If you genuinely need clarification, batch the questions — don't drip them one by one.

When in doubt, default to building rather than asking. He'll redirect if you go off.

## What you should NOT do

- Don't redesign the brand. The blue/orange/ink palette and the Fraunces/Inter Tight pairing are locked.
- Don't introduce purple gradients, glassmorphism, or generic SaaS-template aesthetics. The site is editorial-leaning, not Stripe-template-leaning.
- Don't replace the rotating headline animation with something fancier. It's deliberate.
- Don't write fake case study results. The numbers in the prototype are real client outcomes — don't pad them or invent more.
- Don't add a chatbot, popup, or exit-intent modal. Anywhere.
- Don't add stock photography of generic people. If real photos are needed, ask.

## First task when picking this up

1. Read all the docs in `/docs`.
2. Open `prototype/expert-voice-landing.html` in a browser.
3. Confirm you understand what's locked vs. what's open before suggesting changes.
4. Then ask Jessie what he wants tackled first.
