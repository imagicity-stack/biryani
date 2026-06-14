"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monogram } from "./Ornaments";
import { BRAND } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("mirzava_intro");
    if (seen) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("mirzava_intro", "1");
      setShow(false);
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-noir"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="bg-radial-gold pointer-events-none absolute inset-0" />

          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease }}
          >
            <Monogram className="h-24 w-24 text-gold" />
          </motion.div>

          <div className="mt-6 overflow-hidden">
            <motion.h1
              className="font-display text-5xl tracking-wide text-gold-gradient"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease, delay: 0.4 }}
            >
              {BRAND.name}
            </motion.h1>
          </div>

          <motion.p
            className="eyebrow mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {BRAND.tagline}
          </motion.p>

          <motion.div
            className="mt-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 220, opacity: 1 }}
            transition={{ duration: 1.4, ease, delay: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
