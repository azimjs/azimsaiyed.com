# Design System: azimsaiyed.com

## Product Context
| | |
|---|---|
| What | Personal site for Azim Saiyed, Growth Engineering Manager at Collective |
| Audience | Engineering leaders, recruiters, and peers evaluating an eng manager at the intersection of engineering, product, and growth |
| Type | Single page, sticky left column + scrolling right column |
| Source of truth | Content in `src/lib/site-content.ts`, styles in `src/app/site.css`, markup in `src/components/site/` |

## Aesthetic Direction
| | |
|---|---|
| Direction | Clean white + Collective purple, bold modern personal site |
| Mood | Confident, bright, energetic, professional. A leader who ships. |
| Decoration | Oversized display type, big outlined section numbers, two marquee strips, soft lavender glow behind the portrait |
| Not this | Terminal/hacker themes, glitch effects, neon, scroll-jacking, dark mode |

## Typography
Loaded with `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables.

| Role | Font | Variable | Usage |
|---|---|---|---|
| Display | Bricolage Grotesque 700/800 | `--font-display` | Headline, section titles, card titles, numbers, nav keys |
| Body | Inter 400/500/600 | `--font-body` | Paragraphs, labels, buttons, chips |
| Accent | Instrument Serif italic 400 | `--font-serif` | One or two italic words per heading (`.serif`) |

| Element | Size | Notes |
|---|---|---|
| Hero headline | `clamp(44px, 7.6vw, 138px)` | 800, letter-spacing -0.055em, line-height 0.88 |
| Section number | `clamp(76px, 10vw, 176px)` | Outlined (`-webkit-text-stroke`), or filled purple with `.fill` |
| Section title (`.h2`) | `clamp(38px, 5.2vw, 84px)` | Max 14ch |
| Case metric | `clamp(52px, 5.6vw, 92px)` | |
| Body | 17px desktop, 16px mobile | line-height 1.55 |
| Eyebrow / kicker | 13px uppercase | letter-spacing 0.12 to 0.14em, purple |

## Color
Collective brand palette. Tokens live on `:root` in `src/app/site.css`. Light mode only.

| Token | Hex | Usage |
|---|---|---|
| `--accent` | `#87369B` | Single accent: buttons, links, numbers, active states, contact block |
| `--accent-deep` | `#6B2A7B` | Pressed/hover depth |
| `--tint` | `#F0E2F3` | Tinted cards, chips, stat card, row hover |
| `--blob` | `#D9BCF5` | Glows, accents on purple surfaces only |
| `--ink` | `#1D1D1F` | Text, dark card, active nav, secondary marquee |
| `--ink-2` | `#424245` | Body copy |
| `--muted` | `#86868B` | Labels, years, keys |
| `--line` | `#E8E8E6` | Hairlines |
| `--bg` / `--card` | `#FFFFFF` / `#F8F8F7` | Page / flat cards (no shadow) |

Never use the Collective logo red (`#EF492D`) as a UI color.

## Layout
| Area | Rule |
|---|---|
| Shell | Grid: sticky aside `clamp(280px, 24vw, 340px)` + main. Below 960px the aside becomes a top header with wrapping nav chips. |
| Aside | Name mark, "Leading Growth Engineering at" + black Collective logo, 10+ years stat, section nav, Dallas clock, email, socials |
| Content width | `.wrap` max 1180px, gutter `clamp(16px, 3.4vw, 56px)`, 16px on mobile |
| Section padding | `clamp(72px, 9vw, 136px)` vertical, hairline between sections |
| Grids | What I do: 2 col. Work: 2 col, first Collective case spans full width. Impact: 4 col bento (2 on tablet/mobile). |
| Radius | Chips 999px, small cards 20px, cards 24 to 28px, contact block 32px |
| Mobile | Everything single column at 760px, no horizontal page scroll at 390px |

## Sections
| # | Section | Notes |
|---|---|---|
| | Hero | Kicker, 3-line headline with rotating last word (grow / convert / scale / ship), lede, CTAs, portrait. Two marquees: focus areas (purple), stack (ink). |
| 01 | What I do | 4 pillar cards: experimentation, funnels, data, teams |
| 02 | Work | Collective cases first, kept intentionally vague (approximate numbers only, no internal names like `/start`). Then Blend and BBVA. Ends with a dashed CTA card. |
| ++ | Impact | Bento of count-up stats. Vary the numbers; don't repeat the same figure (e.g. 40%) more than needed. |
| 03 | How I lead | 4 principles, numbered P/01 to P/04 |
| 04 | Career | Timeline with logo, years, company, title, bullets. Promotions within a company use the `steps` mini timeline (current step has a purple dot). Education cards below. |
| 05 | Contact | Full purple block, mega headline, email link, socials, footer |

## Logos
| Rule | Detail |
|---|---|
| Location | `public/logos/` |
| Collective | Black wordmark on light surfaces, white wordmark on purple/dark |
| Company and school logos | Grayscale (`filter: grayscale(1)`), no box or border, 36px in the timeline, 22px in case headers |

## Motion
| Effect | Implementation |
|---|---|
| Reveals | `.rv` fade + 24px rise, 550ms, IntersectionObserver, once per element |
| Count-up | `[data-count]` numbers animate 0 to target over 900ms when visible |
| Hero | Headline lines slide up on load; last word rotates every 2.2s |
| Marquees | Pure CSS `translate3d` loop, 40s and 48s, opposite directions |
| Nav | Active section via IntersectionObserver |
| Hover | Small lifts (2 to 4px), icon rotate, color swaps. Transform and opacity only. |

**Hard rules:** no scroll listeners, no scroll-jacking or pinned horizontal sections, no smooth-scroll libraries, no `backdrop-filter` or large blur filters, and `prefers-reduced-motion` turns all animation off. All of this runs from `src/components/site/SiteEffects.tsx`.

## Copy
- No em dashes anywhere.
- Collective work stays high level with approximate numbers (~10%, 2x).
- Mentoring is "20+ engineers mentored across my career".

## Decisions Log
| Date | Decision | Rationale |
|---|---|---|
| 2026-03-17 | Terminal OS aesthetic (green on slate, glitch system) | Original redesign direction |
| 2026-10-28 | Terminal aesthetic retired | Felt too funky for a new Growth Engineering Manager role |
| 2026-10-28 | Explored editorial, dark bento, and bold personal directions | Bold personal (option C) chosen |
| 2026-10-28 | Collective purple replaces orange; C3 clean white + sticky left column locked | Ties the site to the current role, brighter and more professional |
| 2026-10-28 | Pinned horizontal case-study scroll removed | Scroll felt slow and bumpy; native scroll only |
| 2026-10-29 | Company logos grayscale, no chip box | Boxed color logos looked busy |
| 2026-10-29 | Collective shown as Staff Engineer (2025) to Engineering Manager (2026) | Internal promotion is a stronger signal than a lateral manager hire |
