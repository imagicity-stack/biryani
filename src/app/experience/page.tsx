import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import {
  OrnateDivider,
  Medallion,
  Paisley,
  Spark,
  Crown,
} from "@/components/Ornaments";
import { EXPERIENCE, TESTIMONIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "Mirzava is not served. It is presided over. The arrival, the procession, the breaking of the seal — a ceremony in four acts.",
};

const SENSES = [
  {
    icon: Spark,
    name: "The Light",
    body: "Low candle and the gleam of brass. Nothing bright enough to break the spell.",
  },
  {
    icon: Paisley,
    name: "The Air",
    body: "Kept still and clean until the seal breaks — so the first perfume is the only perfume.",
  },
  {
    icon: Medallion,
    name: "The Silence",
    body: "Service that anticipates rather than interrupts. You will rarely hear us. You will always be tended.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="The Ritual"
        title="The Experience"
        intro="Mirzava is not consumed. It is presided over. What surrounds the dish is composed as carefully as the dish itself — a ceremony in four acts."
      />

      {/* The four acts */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Medallion className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 text-gold/[0.04]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          {EXPERIENCE.map((e, i) => (
            <div key={e.title}>
              <Reveal>
                <p className="font-display text-7xl text-gold/20 sm:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
                  {e.title}
                </h2>
                <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-cream-dim sm:text-lg">
                  {e.body}
                </p>
              </Reveal>
              {i < EXPERIENCE.length - 1 && (
                <OrnateDivider className="mx-auto my-14 max-w-sm" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* The senses */}
      <section className="relative border-y border-gold/15 bg-noir-soft py-24 sm:py-32">
        <div className="jali-bg pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="The Setting" title="Composed for the Senses" />
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {SENSES.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.name}>
                  <div className="hairline h-full bg-noir/40 p-9 text-center">
                    <Icon className="mx-auto h-10 w-10 text-gold" />
                    <h3 className="mt-5 font-display text-2xl text-cream">{s.name}</h3>
                    <div className="gold-line mx-auto my-4 w-10" />
                    <p className="font-body text-sm leading-relaxed text-cream-dim">
                      {s.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Testimonies */}
      <section className="relative py-28 sm:py-36">
        <div className="bg-radial-gold pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="From the Table" title="What They Carry Home" />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {TESTIMONIES.map((t, i) => (
              <Reveal key={t.by} delay={i * 0.08}>
                <figure className="hairline relative h-full bg-noir-soft/50 p-9">
                  <span className="font-display text-6xl leading-none text-gold/30">
                    “
                  </span>
                  <blockquote className="-mt-4 font-display text-2xl italic leading-[1.4] text-cream">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 font-label text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                    — {t.by}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-gold/15 bg-noir-soft py-28">
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <Crown className="mx-auto h-9 w-9 text-gold" />
            <h2 className="mt-6 font-display text-5xl leading-tight text-cream sm:text-6xl">
              Be <span className="text-gold-gradient">Received.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-cream-dim">
              The ceremony is kept for those who come to the pavilion itself.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-royal">
                Find the Pavilion
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
