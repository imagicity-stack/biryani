# Mirzava — The Sovereign Biryani

A luxury, multi-page brand experience for **Mirzava**, a fictional sovereign
biryani born of royal Mughal kitchens. This is not an e-commerce store — it is a
*defining* site, built to convey royalty, rarity and a deeply premium feel.

> _Reigning since the age of emperors._

## ✦ The Experience

A bespoke, image-free design system (so it builds and deploys reliably anywhere)
rendered entirely with custom SVG ornaments, gradient meshes and motion:

- **Cinematic hero** — parallax medallion, drifting saffron particles, a rotating
  royal epithet and a one-per-session intro reveal.
- **Hand-built Mughal ornaments** — monogram crest, crown, cusped arches, jali
  lattice, filigree dividers and rotating medallions, all as crisp inline SVG.
- **Scroll-choreographed sections** — masked text reveals, staggered entrances and
  animated stat counters via Framer Motion.
- **Fully responsive** with a full-screen mobile menu and reduced-motion support.

## ✦ Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, manifesto, the three vows, stats, collection & heritage teasers |
| `/heritage` | The lineage, told as a royal timeline |
| `/craft` | The elements and the six-act ritual of dum |
| `/collection` | Six sovereign biryanis as a showcase (no prices — by enquiry) |
| `/experience` | The dining ceremony in four acts |
| `/contact` | An elegant by-enquiry form & the pavilion details |

## ✦ Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3** with a custom royal design token system
- **Framer Motion** for choreography
- **next/font** (Cormorant Garamond · Marcellus · Jost), self-hosted at build

## ✦ Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## ✦ Build & Deploy

```bash
npm run build
npm start
```

Optimized for **Vercel** — push the repo and import it; the framework preset is
auto-detected, no configuration required.

---

_Mirzava is a design concept. Names, dishes and history are crafted for the
brand experience._
