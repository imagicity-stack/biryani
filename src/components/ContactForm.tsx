"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monogram, OrnateDivider } from "./Ornaments";

const fieldClass =
  "w-full border-b border-gold/25 bg-transparent py-3 font-body text-cream placeholder:text-cream-dim/40 outline-none transition-colors duration-300 focus:border-gold";
const labelClass =
  "font-label text-[0.62rem] uppercase tracking-[0.28em] text-gold/80";

const OCCASIONS = [
  "Private Dinner",
  "Celebration",
  "A State Affair",
  "Festival of the House",
  "Other",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No commerce, no backend — Mirzava is served by enquiry.
    // We acknowledge the request gracefully.
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hairline-strong flex flex-col items-center bg-noir-soft/60 px-8 py-16 text-center"
          >
            <Monogram className="h-16 w-16 text-gold" />
            <h3 className="mt-6 font-display text-4xl text-cream">
              Your Request Is Received
            </h3>
            <OrnateDivider className="mx-auto my-6 max-w-xs" />
            <p className="max-w-md font-body text-cream-dim">
              {name ? `${name.split(" ")[0]}, the ` : "The "}
              kitchen has been notified. We compose each table by hand and will
              write to you shortly to begin the ceremony.
            </p>
            <button
              onClick={() => setSent(false)}
              className="link-underline mt-8 font-label text-[0.7rem] uppercase tracking-[0.25em] text-gold"
            >
              Submit Another Enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hairline bg-noir-soft/40 p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className={labelClass}>Your Name</span>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="By what name shall we receive you?"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelClass}>Your Email</span>
                <input
                  required
                  type="email"
                  placeholder="Where shall we write to you?"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelClass}>The Occasion</span>
                <select required defaultValue="" className={`${fieldClass} cursor-pointer`}>
                  <option value="" disabled className="bg-noir text-cream-dim">
                    Choose an occasion
                  </option>
                  {OCCASIONS.map((o) => (
                    <option key={o} value={o} className="bg-noir text-cream">
                      {o}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelClass}>Guests at the Table</span>
                <input
                  type="number"
                  min={1}
                  placeholder="How many shall be seated?"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className={labelClass}>Preferred Date</span>
                <input type="date" className={`${fieldClass} [color-scheme:dark]`} />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className={labelClass}>A Word on Your Occasion</span>
                <textarea
                  rows={4}
                  placeholder="Tell us what we are honouring…"
                  className={`${fieldClass} resize-none`}
                />
              </label>
            </div>

            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
              <p className="font-label text-[0.6rem] uppercase tracking-[0.22em] text-cream-dim/70">
                Served by enquiry · No obligation
              </p>
              <button type="submit" className="btn-royal w-full sm:w-auto">
                Send Enquiry
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
