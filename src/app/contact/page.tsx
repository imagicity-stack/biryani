import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Medallion, Paisley, Crown } from "@/components/Ornaments";
import { CONTACT, BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquire",
  description:
    "Mirzava is prepared in limited number and served by enquiry. Share your occasion, and our kitchen will write to you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Request the Table"
        title="Enquire"
        intro={CONTACT.invite}
      />

      <section className="relative overflow-hidden pb-32">
        <Medallion className="pointer-events-none absolute -right-52 top-10 h-[640px] w-[640px] text-gold/[0.04]" />
        <div className="relative mx-auto max-w-royal px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            {/* Form */}
            <Reveal>
              <ContactForm />
            </Reveal>

            {/* Details */}
            <Reveal delay={0.1}>
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
