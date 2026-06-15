import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Medallion, MughalArch, Paisley, Crown } from "@/components/Ornaments";
import { CONTACT, BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find Mirzava — a single pavilion in the old quarter of Hyderabad, beside the Charminar. Location, hours and direct contact.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where to Find Us"
        title="The Pavilion"
        intro={CONTACT.invite}
      />

      <section className="relative overflow-hidden pb-32">
        <Medallion className="pointer-events-none absolute -right-52 top-10 h-[640px] w-[640px] text-gold/[0.04]" />
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Decorative visual */}
            <Reveal className="order-2 lg:order-1">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                <div className="arch-clip absolute inset-0 bg-gradient-to-b from-gold/40 to-gold/5" />
                <div className="arch-clip absolute inset-[1.5px] overflow-hidden bg-noir-ink">
                  <Medallion className="animate-spinSlow absolute left-1/2 top-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 text-gold/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <Crown className="h-16 w-16 text-gold/70" />
                    <p className="font-display text-3xl italic text-gold/80">
                      Hyderabad
                    </p>
                    <p className="font-label text-[0.6rem] uppercase tracking-[0.3em] text-cream-dim">
                      By the Charminar
                    </p>
                  </div>
                  <div className="animate-pulseGlow absolute -bottom-8 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-saffron/25 blur-3xl" />
                </div>
                <MughalArch className="pointer-events-none absolute -inset-4 -z-10 text-gold/15" />
              </div>
            </Reveal>

            {/* Details */}
            <Reveal className="order-1 lg:order-2" delay={0.1}>
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3">
                    <Paisley className="h-6 w-6 text-gold" />
                    <p className="eyebrow">{CONTACT.pavilion}</p>
                  </div>
                  <ul className="mt-4 space-y-1 font-display text-2xl text-cream">
                    {CONTACT.address.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div className="gold-line w-full" />

                <div>
                  <div className="flex items-center gap-3">
                    <Paisley className="h-6 w-6 text-gold" />
                    <p className="eyebrow">Hours of the House</p>
                  </div>
                  <ul className="mt-4 space-y-1 font-body text-base text-cream-dim">
                    {CONTACT.hours.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div className="gold-line w-full" />

                <div>
                  <div className="flex items-center gap-3">
                    <Paisley className="h-6 w-6 text-gold" />
                    <p className="eyebrow">Direct</p>
                  </div>
                  <ul className="mt-4 space-y-2 font-body text-base">
                    <li>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="link-underline text-cream transition-colors hover:text-gold"
                      >
                        {CONTACT.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                        className="link-underline text-cream transition-colors hover:text-gold"
                      >
                        {CONTACT.phone}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="hairline bg-noir-soft/40 p-6 text-center">
                  <Crown className="mx-auto h-7 w-7 text-gold" />
                  <p className="mt-3 font-label text-[0.62rem] uppercase tracking-[0.3em] text-gold/80">
                    {BRAND.promise}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
