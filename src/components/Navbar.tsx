"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monogram, OrnateDivider } from "./Ornaments";
import { BRAND, NAV } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-gold/15 bg-noir/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-royal items-center justify-between px-5 py-4 sm:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3" aria-label={BRAND.name}>
            <Monogram className="h-10 w-10 text-gold transition-transform duration-700 group-hover:rotate-[8deg]" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl tracking-wide text-cream">
                {BRAND.name}
              </span>
              <span className="font-label text-[0.55rem] uppercase tracking-[0.42em] text-gold/80">
                Sovereign Biryani
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-9 lg:flex">
            {NAV.slice(0, -1).map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline font-label text-[0.78rem] uppercase tracking-wide2 transition-colors duration-300 ${
                    active ? "text-gold" : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-ghost !px-6 !py-2.5">
              Enquire
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-px w-7 bg-gold transition-all duration-500 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-7 bg-gold transition-all duration-500 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-7 bg-gold transition-all duration-500 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex flex-col bg-noir/97 backdrop-blur-2xl lg:hidden"
          >
            <div className="jali-bg pointer-events-none absolute inset-0 opacity-20" />
            <div className="relative mt-28 flex flex-1 flex-col px-8">
              <OrnateDivider className="mb-10" />
              <nav className="flex flex-col gap-2">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline gap-4 border-b border-gold/10 py-5"
                    >
                      <span className="font-label text-xs text-gold/60">
                        0{i + 1}
                      </span>
                      <span className="font-display text-4xl text-cream">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pb-10 pt-8">
                <p className="font-label text-[0.6rem] uppercase tracking-[0.4em] text-gold/70">
                  {BRAND.promise}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
