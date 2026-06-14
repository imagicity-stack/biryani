import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import {
  OrnateDivider,
  Medallion,
  Paisley,
  Crown,
} from "@/components/Ornaments";
import { TIMELINE, TESTIMONIES, MARQUEE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Heritage",
  description:
    "The lineage of Mirzava — born of the imperial kitchen, a recipe never written, only entrusted from master to disciple.",
};

const CREED = [
  {
    title: "Patience over Pace",
    body: "We will never hurry what the emperors were content to wait for.",
  },
  {
    title: "Hands over Ledgers",
    body: "The method lives in memory and muscle, taught the only way it has ever been taught.",
  },
  {
    title: "Rarity over Reach",
    body: "We would rather be remembered by a few than diluted for the many.",
  },
];

export default function HeritagePage() {
  const quote = TESTIMONIES[2];

  return (
    <>
      <PageHeader
        eyebrow="Our Lineage"
        title="Heritage"
        intro="Every grain of Mirzava carries four centuries of court craft. This is the story of a recipe that was never written — only entrusted."
      />

      {/* Opening manifesto */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <Medallion className="pointer-events-none absolute -left-48 top-0 h-[560px] w-[560px] text-gold/[0.05]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="drop-cap font-body text-lg leading-[1.9] text-cream/90">
              In the shahi bawarchikhana — the imperial kitchen — biryani was no
              ordinary meal. It was a measure of a court&apos;s grandeur, a quiet
              diplomacy conducted in saffron and smoke. The royal cooks guarded
              their craft as jealously as a vizier guards a secret, and the
              finest among them were entrusted with a single, sovereign recipe.
              Mirzava is the direct descendant of that lineage — unbroken,
              unwritten, and uncompromising.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative border-y border-gold/15 bg-noir-soft py-24 sm:py-32">
        <div className="jali-bg pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
          <Reveal className="mb-20">
            <SectionHeading eyebrow="Through the Ages" title="The Line of Succession" />
          </Reveal>

          <ol className="relative">
            {TIMELINE.map((t, i) => (
              <li key={t.era} className="flex gap-6 sm:gap-10">
                {/* Rail */}
                <div className="relative flex flex-col items-center pt-1">
                  <span className="relative flex h-5 w-5 rotate-45 items-center justify-center border border-gold bg-noir">
                    <span className="h-1.5 w-1.5 bg-gold" />
                  </span>
                  {i < TIMELINE.length - 1 && (
                    <span className="w-px flex-1 bg-gradient-to-b from-gold/50 to-gold/10" />
                  )}
                </div>
                {/* Content */}
                <Reveal className="flex-1 pb-16 last:pb-0" delay={i * 0.05}>
                  <p className="font-display text-6xl leading-none text-gold/25">
                    0{i + 1}
                  </p>
                  <p className="mt-3 font-label text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                    {t.era}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-cream sm:text-4xl">
                    {t.title}
                  </h3>
                  <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-cream-dim">
                    {t.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Marquee items={MARQUEE} />

      {/* Creed */}
      <section className="relative py-28 sm:py-36">
        <div className="bg-radial-gold pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="What We Hold To" title="The Mirzava Creed" />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {CREED.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="hairline h-full bg-noir-soft/40 p-9 text-center">
                  <Paisley className="mx-auto h-8 w-8 text-gold" />
                  <h3 className="mt-5 font-display text-2xl text-cream">{c.title}</h3>
                  <div className="gold-line mx-auto my-4 w-10" />
                  <p className="font-body text-sm leading-relaxed text-cream-dim">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + CTA */}
      <section className="relative overflow-hidden border-t border-gold/15 bg-noir-soft py-28">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Crown className="mx-auto h-9 w-9 text-gold" />
            <blockquote className="mt-7 font-display text-3xl italic leading-[1.4] text-cream sm:text-4xl">
              “{quote.quote}”
            </blockquote>
            <OrnateDivider className="mx-auto my-8 max-w-xs" />
            <cite className="font-label text-xs uppercase not-italic tracking-[0.3em] text-gold">
              {quote.by}
            </cite>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <Link href="/craft" className="btn-royal">
                Witness the Craft
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
