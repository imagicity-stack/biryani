import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { DishArch } from "@/components/DishArch";
import { Marquee } from "@/components/Marquee";
import { OrnateDivider, Spark, Crown } from "@/components/Ornaments";
import { COLLECTION, MARQUEE } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Six sovereign expressions of Mirzava — from Noor-e-Zaffran to Sikandari Raan. A showcase of the house, not a shop.",
};

export default function CollectionPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Royal Collection"
        title="The Collection"
        intro="Six sovereign expressions, each a crown in its own right. We list no prices here — Mirzava is a sovereign, not a commodity."
      />

      <section className="relative py-12 sm:py-20">
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <div className="space-y-28 sm:space-y-36">
            {COLLECTION.map((dish, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={dish.name}>
                  <article className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
                    {/* Visual */}
                    <div className={reversed ? "md:order-2" : "md:order-1"}>
                      <div className="mx-auto max-w-sm">
                        <DishArch
                          accent={dish.accent}
                          initial={dish.name.charAt(0)}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`${reversed ? "md:order-1 md:text-right" : "md:order-2"}`}
                    >
                      <p className="font-display text-7xl leading-none text-gold/15">
                        0{i + 1}
                      </p>
                      <p className="-mt-4 font-label text-[0.7rem] uppercase tracking-[0.3em] text-gold">
                        {dish.origin}
                      </p>
                      <h2 className="mt-3 font-display text-5xl text-cream sm:text-6xl">
                        {dish.name}
                      </h2>
                      <p className="mt-2 font-display text-2xl italic text-gold/85">
                        {dish.title}
                      </p>
                      <div
                        className={`gold-line my-6 w-16 ${reversed ? "md:ml-auto" : ""}`}
                      />
                      <p
                        className={`max-w-md font-body text-base leading-relaxed text-cream-dim ${
                          reversed ? "md:ml-auto" : ""
                        }`}
                      >
                        {dish.body}
                      </p>
                      <div
                        className={`mt-6 flex items-center gap-3 ${
                          reversed ? "md:justify-end" : ""
                        }`}
                      >
                        <Spark className="h-4 w-4 text-gold" />
                        <p className="font-label text-[0.65rem] uppercase tracking-[0.25em] text-cream-dim">
                          {dish.note}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE} />

      {/* CTA */}
      <section className="relative overflow-hidden py-28 sm:py-32">
        <div className="bg-radial-gold pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <Crown className="mx-auto h-9 w-9 text-gold" />
            <h2 className="mt-6 font-display text-5xl leading-tight text-cream sm:text-6xl">
              Six Crowns, <span className="text-gold-gradient">One Standard.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-cream-dim">
              No two are alike, and none can be hurried. Discover the ritual that
              brings each sovereign to the table.
            </p>
            <OrnateDivider className="mx-auto my-10 max-w-xs" />
            <Link href="/experience" className="btn-royal">
              The Experience
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
