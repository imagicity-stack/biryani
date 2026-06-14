import Link from "next/link";
import { Monogram, OrnateDivider, Crown } from "./Ornaments";
import { BRAND, NAV, CONTACT, FOOTER_NOTE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-noir-soft">
      <div className="jali-bg pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto max-w-royal px-6 py-20 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <Crown className="mb-5 h-8 w-8 text-gold" />
          <Monogram className="h-16 w-16 text-gold" />
          <h2 className="mt-6 font-display text-5xl text-cream sm:text-6xl">
            {BRAND.name}
          </h2>
          <p className="mt-3 eyebrow">{BRAND.tagline}</p>
          <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-cream-dim">
            {FOOTER_NOTE}
          </p>
        </div>

        <OrnateDivider className="my-12" tone="dim" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="text-center md:text-left">
            <p className="eyebrow mb-4">The Pavilion</p>
            <ul className="space-y-1 font-body text-sm text-cream-dim">
              {CONTACT.address.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 font-body text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-cream-dim transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p className="eyebrow mb-4">By Enquiry</p>
            <ul className="space-y-1 font-body text-sm text-cream-dim">
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
              <li className="pt-2 font-label uppercase tracking-wide2 text-gold/80">
                Tuesday — Sunday
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-label text-[0.62rem] uppercase tracking-[0.3em] text-cream-dim/70">
            © {new Date().getFullYear()} {BRAND.name} — All Rights Reserved
          </p>
          <p className="font-label text-[0.62rem] uppercase tracking-[0.3em] text-cream-dim/70">
            {BRAND.est}
          </p>
        </div>
      </div>
    </footer>
  );
}
