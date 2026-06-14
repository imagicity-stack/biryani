"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Medallion, Crown } from "@/components/Ornaments";
import { BRAND, HERO_WORDS } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

// Deterministic particle field (avoids hydration mismatch)
const PARTICLES = Array.from({ length: 22 }).map((_, i) => {
  const seed = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return {
    left: `${Math.round(seed(1) * 100)}%`,
    top: `${Math.round(seed(2) * 100)}%`,
    size: 1 + Math.round(seed(3) * 3),
    delay: seed(4) * 6,
    duration: 7 + seed(5) * 8,
    opacity: 0.15 + seed(6) * 0.5,
  };
});

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMedallion = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setWordIndex((v) => (v + 1) % HERO_WORDS.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="bg-radial-gold pointer-events-none absolute inset-0" />
      <motion.div
        style={{ y: yMedallion }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Medallion className="animate-spinSlow h-[140vmin] w-[140vmin] text-gold/[0.07]" />
      </motion.div>
      <div className="jali-bg pointer-events-none absolute inset-0 opacity-[0.04]" />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{ y: [0, -26, 0], opacity: [p.opacity, p.opacity * 0.3, p.opacity] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity: fade }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <Crown className="h-9 w-9 text-gold" />
          <p className="eyebrow mt-5">{BRAND.promise}</p>
        </motion.div>

        <h1 className="mt-6 overflow-hidden">
          <motion.span
            className="block font-display text-[20vw] font-light leading-[0.82] text-gold-sheen sm:text-[16vw] lg:text-[13rem]"
            initial={{ y: "108%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.3, ease, delay: 0.35 }}
          >
            {BRAND.name}
          </motion.span>
        </h1>

        <motion.p
          className="mt-2 font-display text-2xl italic text-cream sm:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {BRAND.tagline}
        </motion.p>

        {/* Rotating epithet */}
        <motion.div
          className="mt-9 flex items-center justify-center gap-2 font-body text-sm uppercase tracking-[0.25em] text-cream-dim sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <span>A</span>
          <span className="relative inline-flex h-7 w-[7.5rem] items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                className="absolute font-label text-gold"
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -22, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                {HERO_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>Inheritance</span>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.3 }}
        >
          <Link href="/collection" className="btn-royal">
            View the Collection
          </Link>
          <Link href="/contact" className="btn-ghost">
            Request the Table
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-label text-[0.6rem] uppercase tracking-[0.4em] text-cream-dim">
            Scroll
          </span>
          <motion.span
            className="block h-10 w-px bg-gradient-to-b from-gold to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
