# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router) + Framer Motion, deployed to Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`). Served on `*.workers.dev` for now; custom domain later. `prerithm.github.io` becomes a redirect-only GitHub Pages site.

## Users

FinTech, product, and startup hiring managers/recruiters evaluating Prerith M for roles and internships, usually skimming for 30–90 seconds from a résumé or LinkedIn link.

## Product Purpose

Personal portfolio. Success = a visitor understands within seconds that Prerith is a finance-literate builder who ships AI products, reads at least one case study, and downloads the résumé or makes contact.

## Positioning

A BBA (Applied Finance with FinTech, CHRIST University) student who architects systems and directs AI coding agents to ship real products — civic AI, robotics, mobile — rather than a traditional CS engineer. Openly frames AI-assisted development as a strength.

## Capabilities and Constraints

- Home page + case studies for 3 flagship builds: Pothole Tracker, RoverMania, Resume Builder.
- Compact "Lab" list: Arduino-Projects, Python-Projects, Easy-Editor, Codes of Memory.
- Career ticker tape backed by live GitHub stats (cached in Cloudflare KV).
- Contact form → Next.js route on Workers → Resend email, Turnstile spam protection.
- Primary CTAs: download résumé, copy email.
- Empty GitHub repos are never shown or linked.

## Brand Commitments

- Motto: "See the whole. Strip the noise. Own the core." — kept as a signature line, not the H1.
- H1 direction: "Finance student. AI product builder."
- Visual: Bloomberg-terminal-inspired, terminal-accented (readable sans body, mono only for data/labels). Ticker "PRTH".

## Evidence on Hand

- Résumé: `public/Prerith-M-Resume.pdf`
- Certificates: INSPIRE context, Unmesha Physics Club certificate, CuriousJr Python/JS certificates (in `public/certificates/`).
- Recognition: Govt. of India INSPIRE Award, ₹10,000 for Pothole Tracker (2nd PUC).
- No project photos/screenshots: visuals are authored architecture diagrams.
- No user counts, costs, or metrics exist — never invent them.

## Product Principles

1. Prove, don't claim: show architecture and decisions, not adjectives.
2. Honest about how things get built (AI-directed engineering).
3. Finance lens on every build: cost, operations, trade-offs.
4. Recruiter-skimmable first, depth one click away.
