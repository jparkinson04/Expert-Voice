# INTEGRATIONS.md

Third-party services and embeds that plug into the site.

## TidyCal

**Purpose**: Booking widget for the "Book a call" section.

**Live URL**: `https://tidycal.com/jessieparkinson/free-intro-call`

**Embed location**: The `<div class="tidycal-slot">` block in the Book a call section.

**Embed approach**:
1. Get the embed snippet from TidyCal's "Embed on your site" option.
2. Drop it inside the `.tidycal-slot` div, replacing the placeholder content.
3. The TidyCal embed loader injects an iframe — set a `min-height` of around 600px on `.tidycal-slot` so the layout doesn't jump while loading.
4. If TidyCal offers an inline (non-popup) embed option, use that.

**Fallback**: The button on the left column already direct-links to the public TidyCal page. If the embed ever fails to load, users still have a working route to book.

**Things to test**: Does the embed work in dark mode (the section background is `--blue`)? TidyCal might need a `style="background: var(--paper); border-radius: 16px;"` wrapper to look right on dark.

---

## Founder Visibility Audit

**Purpose**: Free self-serve 7-question audit. Returns a score out of 35 plus 3 immediate fixes.

**Status**: Jessie has the embed code for the audit tool. Awaiting paste.

**Embed location**: The `<div class="audit-visual">` block in the Free Tool section.

**Embed approach**:
1. Replace the entire `.audit-visual` div with the embed code.
2. Keep the surrounding `.tool-card` wrapper and its styling intact.
3. Audit tool probably has its own internal styling — confirm it doesn't conflict with the site's CSS variables. If it does, consider iframing it.

**CTA reconciliation**: The "Start the audit" button on the left currently links to `#`. When the audit embeds inline on the same section, that button can either:
- Scroll-anchor to the audit (preferred — keeps user on-page), or
- Be removed (the audit is right there visible)

Decide based on the audit's UX — does it need a "start" CTA or does it auto-prompt for the first answer?

---

## Email / forms

**No form integration in v1.** All "contact us" routes through the TidyCal booking or the `hello@expertvoice.co.uk` mailto link.

If a newsletter signup is added later, recommend:
- **Buttondown** (writer-friendly, clean) or **ConvertKit** if it grows
- Form embed in the footer
- Double opt-in required

---

## Analytics

**Not in the prototype.** Add during the production pass:

- **Plausible** (privacy-friendly, lightweight, no cookie banner needed in most jurisdictions) — preferred.
- Or **Fathom** as an equivalent alternative.
- **Avoid Google Analytics 4** unless there's a specific reason — heavier, requires cookie consent UI.

**Events to track on launch**:
- "Book a call" CTA clicks (any location on the page)
- "Start the audit" clicks
- Audit completions (if the audit tool can fire a callback)
- Case study card clicks
- Footer LinkedIn / email clicks

---

## SEO

**On-page**:
- Title + meta description in `<head>` (see CONTENT.md for current draft).
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`.
- Twitter card: `summary_large_image`.
- Structured data: `Organization` schema for Expert Voice, `Service` schema for the offer. JSON-LD format.

**Sitemap**: Generate `sitemap.xml` at build time. For v1 (single page), it's trivial — one URL.

**Robots**: `robots.txt` with `User-agent: *` / `Allow: /` and a reference to the sitemap.

---

## LinkedIn

Not an integration, but worth noting:

- Footer LinkedIn link → Jessie's personal LinkedIn (`https://linkedin.com/in/jessie` — verify the exact URL).
- Optional: add a "LinkedIn Insight Tag" pixel during the production pass if there's any intention to run LinkedIn ads to the site later. Otherwise skip.

---

## Hosting & deploy

**Recommended**: Netlify or Vercel — both offer free tiers, instant CI on push, branch previews.

**Domain**: `expertvoice.co.uk` (existing). Set up DNS to point to the deploy target.

**HTTPS**: Both Netlify and Vercel issue Let's Encrypt certs automatically.

**Build command** (if using a static site generator):
- Astro: `npm run build` outputs to `dist/`
- 11ty: `npx @11ty/eleventy` outputs to `_site/`
- Plain HTML: no build step, deploy the directory directly.

---

## Things that are NOT integrating in v1

To save Jessie from being asked about these:

- ❌ Chatbots / live chat
- ❌ Cookie consent banner (Plausible doesn't need one in UK/EU)
- ❌ Exit-intent popups
- ❌ Newsletter signup form
- ❌ Login / member area
- ❌ Blog CMS (blog can live as static MDX/markdown if added)
- ❌ Payment processing (booking happens off-site)
- ❌ A/B testing tools

If Jessie asks for any of these later, that's a v2 conversation.
