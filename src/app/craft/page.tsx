import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import {
  OrnateDivider,
  Medallion,
  Paisley,
  Spark,
  MughalArch,
  Crown,
} from "@/components/Ornaments";
import { CRAFT_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Craft",
  description:
    "Twenty-one hours of devotion — single-origin rice, hand-pounded spice, and the sealed dum that defines Mirzava.",
};

const ELEMENTS = [
  {
    icon: Spark,
    name: "The Saffron",
    body: "Late-harvest Kashmiri strands, weighed by the gram and bloomed in warm milk until they gild each grain gold.",
  },
  {
    icon: Paisley,
    name: "The Rice",
    body: "Single-origin long grain, aged a full year so every grain stays sovereign, separate and proud.",
  },
  {
    icon: Medallion,
    name: "The Masala",
    body: "Thirty-seven whole spices, hand-pounded on stone at dawn. We grind nothing we cannot smell awaken.",
  },
];

export default function CraftPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Art of Dum"
        title="The Craft"
        intro="Mirzava is not cooked so much as conducted — twenty-one hours of fire, patience and silence, sealed beneath dough until the moment of reveal."
      />

      {/* The three elements */}
      <section className="relative py-16 sm:py-20">
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {ELEMENTS.map((el, i) => {
              const Icon = el.icon;
              return (
                <Reveal key={el.name} delay={i * 0.08}>
                  <div className="hairline group h-full bg-noir-soft/40 p-9 text-center transition-colors duration-500 hover:bg-noir-ink/60">
                    <Icon className="mx-auto h-10 w-10 text-gold" />
                    <h3 className="mt-5 font-display text-2xl text-cream">
                      {el.name}
                    </h3>
                    <div className="gold-line mx-auto my-4 w-10" />
                    <p className="font-body text-sm leading-relaxed text-cream-dim">
                      {el.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* The process */}
      <section className="relative border-t border-gold/15 bg-noir-soft py-24 sm:py-32">
        <div className="jali-bg pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <Reveal className="mx-auto mb-24 max-w-2xl">
            <SectionHeading eyebrow="From Stone to Sovereign" title="Six Acts of Devotion" />
          </Reveal>

          <div className="space-y-24">
            {CRAFT_STEPS.map((s, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={s.step}>
                  <div className="grid items-center gap-10 md:grid-cols-12">
                    {/* Visual */}
                    <div
                      className={`md:col-span-5 ${reversed ? "md:order-2" : "md:order-1"}`}
                    >
                      <div className="relative mx-auto max-w-xs">
                        <div className="arch-clip absolute inset-0 bg-gradient-to-b from-gold/45 to-gold/5" />
                        <div className="arch-clip absolute inset-[1.5px] flex aspect-square items-center justify-center overflow-hidden bg-noir-ink">
                          <Medallion className="animate-spinSlow absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 text-gold/10" />
                          <span className="font-display text-[7rem] leading-none text-gold-gradient">
                            {s.step}
                          </span>
                          <div className="animate-pulseGlow absolute -bottom-8 left-1/2 h-28 w-44 -translate-x-1/2 rounded-full bg-saffron/25 blur-3xl" />
                        </div>
                        <MughalArch className="pointer-events-none absolute -inset-3 -z-10 text-gold/12" />
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`md:col-span-7 ${
                        reversed ? "md:order-1 md:text-right" : "md:order-2"
                      }`}
                    >
                      <p className="font-label text-[0.7rem] uppercase tracking-[0.35em] text-gold">
                        Act {s.step}
                      </p>
                      <h3 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
                        {s.title}
                      </h3>
                      <div
                        className={`gold-line my-6 w-16 ${reversed ? "md:ml-auto" : ""}`}
                      />
                      <p
                        className={`max-w-lg font-body text-base leading-relaxed text-cream-dim ${
                          reversed ? "md:ml-auto" : ""
                        }`}
                      >
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative overflow-hidden py-28 sm:py-32">
        <div className="bg-radial-gold pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <Crown className="mx-auto h-9 w-9 text-gold" />
            <p className="mt-7 font-display text-3xl leading-[1.4] text-cream sm:text-4xl">
              When the seal is finally broken, the perfume rises before the steam.
              That first breath is the dish announcing itself —{" "}
              <span className="text-gold-gradient">and everything before it
              was in service of that single moment.</span>
            </p>
            <OrnateDivider className="mx-auto my-10 max-w-md" />
            <Link href="/collection" className="btn-royal">
              See What It Becomes
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
