# ROADMAP.md

Scope discipline for the Expert Voice site build. What's in for launch, what's deliberately deferred.

## v1 — Launch scope

The single landing page in production. This is the only deliverable for v1.

### Must-haves
- [ ] All sections from the prototype, refined and production-clean
- [ ] Responsive across mobile, tablet, desktop (test at 375, 768, 1024, 1440)
- [ ] Real mobile navigation (the prototype just hides links — that's not acceptable)
- [ ] `prefers-reduced-motion` support — disable float animations and rotating headline
- [ ] WCAG AA accessibility floor (contrast, focus states, alt text, semantic markup)
- [ ] TidyCal embed live in the Book a call section
- [ ] Founder Visibility Audit embedded in the Free Tool section
- [ ] Real testimonial wording (sign-off from Christian, Denise, Phil — pending)
- [ ] Updated pricing structure swapped in (Jessie supplying)
- [ ] SEO meta tags including Open Graph + Twitter card
- [ ] OG image designed and exported (1200×630)
- [ ] Favicon (16×16, 32×32, plus apple-touch-icon 180×180)
- [ ] Plausible (or Fathom) analytics installed
- [ ] Domain pointing to deployment, HTTPS confirmed
- [ ] Sitemap.xml and robots.txt
- [ ] Page speed pass — aim for Lighthouse 95+ on Performance and Accessibility

### Nice-to-haves for v1 (only if time allows)
- [ ] Subtle scroll-progress indicator
- [ ] LinkedIn share preview optimisation tested
- [ ] 404 page matching site design

---

## v1.5 — First iteration after launch

Likely to come up within a few weeks of launch based on what Jessie hears from prospects.

### Likely additions
- [ ] Dedicated case study pages — one per case study (currently linked to `#`)
- [ ] Blog index page + at least 3 starter articles in Jessie's voice
- [ ] About page (Jessie's story + the philosophy behind Expert Voice)
- [ ] FAQ section or page (driven by what prospects actually ask on calls)

### Likely refinements
- [ ] A/B test the headline ("Put a face in front of the logo" vs. alternatives) if conversion data justifies it
- [ ] Real client logos in the trust bar (replacing text)
- [ ] Real photography — Jessie, workspace, client photos with permission
- [ ] Newsletter signup in the footer (Buttondown or similar)

---

## v2 — Larger expansion

Months out, not weeks. Don't pre-build for these — they may not happen.

- [ ] Client portal / dashboard area (the existing Expert Voice Dashboard might integrate here or stay separate)
- [ ] Resource library — downloadable templates, frameworks, the Visibility Audit results as a saveable PDF
- [ ] Multi-language support (Welsh first if any — could be a differentiator for UK-focused work)
- [ ] Video case studies / testimonial reel

---

## Explicitly out of scope (and likely staying that way)

These are deliberate decisions, not omissions. Push back if Jessie asks for them.

- ❌ E-commerce / cart / payment processing on-site
- ❌ Member-only areas behind login
- ❌ Multi-product catalogue (Expert Voice is *one* offer with add-ons, not a marketplace)
- ❌ Mega-menu navigation
- ❌ Chatbot
- ❌ AI-generated dynamic copy on the marketing site (ironic for a content company)
- ❌ Heavy JavaScript frameworks where they're not earning their weight

---

## Decisions still open

Things Jessie hasn't decided yet — flag if these block work:

1. **Final stack** — Astro vs 11ty vs plain HTML. Default to plain HTML with includes for v1 unless there's a strong reason.
2. **CMS** — does any copy need to be editable without a code change? If yes, Sanity (or Decap CMS) layered on top of the static build. If no, copy lives in the codebase. Default: no CMS for v1.
3. **Pricing structure** — current numbers are placeholders; new structure incoming.
4. **Testimonial wording** — pending client sign-off.
5. **Case study pages** — out of v1 scope but cards need to be wired for future links. Confirm the URL pattern (`/case-studies/[slug]`?).
6. **Logo** — wordmark + the CSS-mark works for v1, but if Jessie commissions a proper logo, swap-in plan in BRAND.md.

---

## Definition of done for launch

A launch is signed off when:

1. All "must-haves" above are ticked.
2. The site has been tested on a real iPhone, real Android, and at least two desktop browsers (Chrome + Safari).
3. The TidyCal embed actually books a call end-to-end.
4. The audit embed actually completes a flow and returns a result.
5. Plausible is recording page views.
6. Jessie has read the live site word-for-word at least once and is happy with every line.
7. A test booking has been made and the calendar invite appears correctly.

No launch ships before all seven.
