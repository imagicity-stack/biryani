"use client";

import { motion } from "framer-motion";
import { MughalArch, OrnateDivider } from "./Ornaments";

const ease = [0.16, 1, 0.3, 1] as const;

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
      <div className="bg-radial-gold pointer-events-none absolute inset-0" />
      <MughalArch className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[420px] -translate-x-1/2 text-gold/10" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          {eyebrow}
        </motion.p>

        <h1 className="mt-6 overflow-hidden">
          <motion.span
            className="block font-display text-6xl leading-[0.95] text-gold-gradient sm:text-7xl md:text-8xl"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
          >
            {title}
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <OrnateDivider className="mx-auto my-8 max-w-md" />
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-cream-dim sm:text-lg">
            {intro}
          </p>
        </motion.div>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {align === "center" && <OrnateDivider className="mt-7 w-full max-w-sm" />}
    </div>
  );
}
