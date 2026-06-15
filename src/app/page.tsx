import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Preloader } from "@/components/Preloader";
import { Marquee } from "@/components/Marquee";
import { Counter } from "@/components/Counter";
import { DishTile } from "@/components/DishTile";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/PageHeader";
import { OrnateDivider, Medallion, MughalArch, Crown, Paisley } from "@/components/Ornaments";
import { BRAND, MARQUEE, STATS, PILLARS, COLLECTION, TIMELINE, TESTIMONIES } from "@/lib/content";

export default function HomePage() {
  const featured = COLLECTION.slice(0, 3);
  const headline = TESTIMONIES[0];

  return (
    <>
      <Preloader />
      <Hero />

      <Marquee items={MARQUEE} />

      {/* ===================== MANIFESTO ===================== */}
      <section className="relative overflow-hidden py-28 sm:py-40">
        <Medallion className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 text-gold/[0.05]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Paisley className="mx-auto h-9 w-9 text-gold" />
            <p className="eyebrow mt-6">The Meaning of the Name</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-3xl leading-[1.35] text-cream sm:text-4xl md:text-[2.7rem]">
              <span className="text-gold-gradient">Mirzava</span> is not a dish.
              It is an inheritance — saffron and patience handed down through the
              kitchens of kings, sealed in a single pot and revealed only when it
              is{" "}
              <span className="font-display italic text-gold">perfect.</span>
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <OrnateDivider className="mx-auto mt-12 max-w-md" />
            <p className="mx-auto mt-8 max-w-xl font-body text-base leading-relaxed text-cream-dim">
              {BRAND.meaning}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== PILLARS ===================== */}
      <section className="relative border-y border-gold/15 bg-noir-soft py-28 sm:py-36">
        <div className="jali-bg pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Why It Reigns"
              title="Three Vows We Will Not Break"
            />
          </Reveal>

          <Stagger className="mt-20 grid grid-cols-1 gap-px overflow-hidden md:grid-cols-3">
            {PILLARS.map((p) => (
              <StaggerItem
                key={p.no}
                className="group relative bg-noir/40 p-10 transition-colors duration-500 hover:bg-noir-ink/60"
              >
                <span className="font-display text-7xl text-gold/30 transition-colors duration-500 group-hover:text-gold/60">
                  {p.no}
                </span>
                <h3 className="mt-5 font-display text-3xl text-cream">{p.title}</h3>
                <div className="gold-line my-5 w-12" />
                <p className="font-body text-sm leading-relaxed text-cream-dim">
                  {p.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="relative py-24">
        <div className="bg-radial-gold pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <Stagger className="grid grid-cols-2 gap-y-14 lg:grid-cols-4">
            {STATS.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-display text-7xl text-gold-gradient sm:text-8xl">
                  <Counter value={Number(s.value)} suffix={s.suffix} />
                </p>
                <p className="mx-auto mt-3 max-w-[12rem] font-label text-[0.7rem] uppercase tracking-[0.22em] text-cream-dim">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== COLLECTION TEASER ===================== */}
      <section className="relative overflow-hidden border-t border-gold/15 py-28 sm:py-36">
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="The Royal Collection"
              title="Each One a Crown"
            />
          </Reveal>

          <Stagger className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((dish) => (
              <StaggerItem key={dish.name}>
                <DishTile dish={dish} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-20 flex justify-center" delay={0.1}>
            <Link href="/collection" className="btn-royal">
              Behold the Full Collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== HERITAGE TEASER ===================== */}
      <section className="relative overflow-hidden border-t border-gold/15 bg-noir-soft py-28 sm:py-36">
        <div className="relative mx-auto grid max-w-royal grid-cols-1 items-center gap-16 px-6 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="arch-clip absolute inset-0 bg-gradient-to-b from-gold/40 to-gold/5" />
              <div className="arch-clip absolute inset-[1.5px] overflow-hidden bg-noir-ink">
                <Medallion className="animate-spinSlow absolute left-1/2 top-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 text-gold/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Crown className="h-20 w-20 text-gold/70" />
                </div>
                <div className="animate-pulseGlow absolute -bottom-8 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-saffron/25 blur-3xl" />
              </div>
              <MughalArch className="pointer-events-none absolute -inset-4 -z-10 text-gold/15" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Our Lineage</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-cream sm:text-5xl">
                A Recipe Never Written,
                <br />
                <span className="text-gold-gradient">Only Entrusted.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-lg font-body text-base leading-relaxed text-cream-dim">
                Mirzava descends from the shahi bawarchikhana — the imperial
                kitchen — where biryani measured the grandeur of a court. The
                method was handed master to disciple, held in the hands and never
                the ledger. We keep it precisely the same way.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-9 space-y-4">
                {TIMELINE.slice(0, 2).map((t) => (
                  <li key={t.era} className="flex gap-4">
                    <Paisley className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="font-label text-[0.65rem] uppercase tracking-[0.25em] text-gold/80">
                        {t.era}
                      </p>
                      <p className="font-display text-xl text-cream">{t.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/heritage"
                className="link-underline mt-10 inline-flex font-label text-xs uppercase tracking-[0.25em] text-gold"
              >
                Read the Full Heritage →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONY ===================== */}
      <section className="relative overflow-hidden py-32">
        <Medallion className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 text-gold/[0.04]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-display text-8xl leading-none text-gold/40">“</span>
            <blockquote className="-mt-6 font-display text-3xl italic leading-[1.4] text-cream sm:text-4xl">
              {headline.quote}
            </blockquote>
            <OrnateDivider className="mx-auto my-8 max-w-xs" />
            <cite className="font-label text-xs uppercase not-italic tracking-[0.3em] text-gold">
              {headline.by}
            </cite>
          </Reveal>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative overflow-hidden border-t border-gold/15 bg-gradient-to-b from-noir-soft to-noir py-32">
        <div className="bg-radial-gold pointer-events-none absolute inset-0" />
        <div className="jali-bg pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <Crown className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-6 font-display text-5xl leading-tight text-cream sm:text-6xl">
              Kept for
              <br />
              <span className="text-gold-gradient">the Few.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-cream-dim">
              Mirzava is prepared in limited number, by hands that will not be
              hurried. It is not sold by the plate — it is kept as a standard.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/collection" className="btn-royal">
                Behold the Collection
              </Link>
              <Link href="/experience" className="btn-ghost">
                The Experience
              </Link>
            </div>
            <p className="mt-10 font-label text-[0.62rem] uppercase tracking-[0.4em] text-cream-dim/70">
              {BRAND.promise}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
