import type { SVGProps } from "react";

/* ============================================================
   MIRZAVA — Ornament library
   Hand-built Mughal-inspired SVG motifs
   ============================================================ */

export function Crown({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M2.5 18 L4.2 8.2 L8.8 12.4 L12 4.6 L15.2 12.4 L19.8 8.2 L21.5 18 Z" />
      <path d="M3.4 20.4 H20.6" />
      <circle cx="12" cy="4.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="4.2" cy="8.2" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="19.8" cy="8.2" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Monogram({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* outer roundel */}
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
      {/* radiating ticks */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i / 36) * Math.PI * 2;
        const r1 = 40;
        const r2 = 43;
        return (
          <line
            key={i}
            x1={50 + Math.cos(a) * r1}
            y1={50 + Math.sin(a) * r1}
            x2={50 + Math.cos(a) * r2}
            y2={50 + Math.sin(a) * r2}
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.4"
          />
        );
      })}
      {/* crown */}
      <path
        d="M37 28 L40 20 L46 25 L50 16 L54 25 L60 20 L63 28 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* M */}
      <path
        d="M33 70 L33 40 L50 58 L67 40 L67 70"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* base flourish */}
      <path d="M30 78 Q50 86 70 78" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
    </svg>
  );
}

export function Paisley({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2 C18 4 20 10 16 15 C13 18.5 7 18 6 13 C5.4 10 7 8 9.5 8.4 C11.6 8.8 12 11 10.6 12" />
      <circle cx="12.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** A horizontal filigree divider that stretches to its container. */
export function OrnateDivider({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "dim";
}) {
  const color = tone === "gold" ? "text-gold" : "text-cream-dim";
  return (
    <div className={`flex items-center justify-center gap-4 ${color} ${className}`}>
      <span className="gold-line h-px w-full max-w-[160px] opacity-70" />
      <svg viewBox="0 0 60 24" className="h-5 w-16 shrink-0" fill="none" aria-hidden="true">
        <path
          d="M2 12 H18"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M58 12 H42"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M30 4 L36 12 L30 20 L24 12 Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="30" cy="12" r="2" fill="currentColor" />
        <circle cx="20" cy="12" r="1.2" fill="currentColor" />
        <circle cx="40" cy="12" r="1.2" fill="currentColor" />
      </svg>
      <span className="gold-line h-px w-full max-w-[160px] opacity-70" />
    </div>
  );
}

/** Large faint medallion for section backgrounds. */
export function Medallion({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  const petals = Array.from({ length: 16 });
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="100" cy="100" r="96" strokeWidth="0.7" />
      <circle cx="100" cy="100" r="78" strokeWidth="0.5" opacity="0.7" />
      <circle cx="100" cy="100" r="40" strokeWidth="0.6" />
      {petals.map((_, i) => {
        const a = (i / petals.length) * Math.PI * 2;
        const x1 = 100 + Math.cos(a) * 40;
        const y1 = 100 + Math.sin(a) * 40;
        const x2 = 100 + Math.cos(a) * 78;
        const y2 = 100 + Math.sin(a) * 78;
        const mx = 100 + Math.cos(a + 0.18) * 60;
        const my = 100 + Math.sin(a + 0.18) * 60;
        const mx2 = 100 + Math.cos(a - 0.18) * 60;
        const my2 = 100 + Math.sin(a - 0.18) * 60;
        return (
          <g key={i} strokeWidth="0.6">
            <path d={`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`} />
            <path d={`M${x1} ${y1} Q${mx2} ${my2} ${x2} ${y2}`} />
          </g>
        );
      })}
      <circle cx="100" cy="100" r="10" strokeWidth="0.8" />
    </svg>
  );
}

/** Cusped Mughal arch outline (used to frame imagery / panels). */
export function MughalArch({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 140 V60
           C4 40 14 22 30 14
           C36 11 40 7 42 2
           C44 7 47 9 50 9
           C53 9 56 7 58 2
           C60 7 64 11 70 14
           C86 22 96 40 96 60
           V140"
      />
    </svg>
  );
}

export function Spark({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0 C12.6 7 13 7.4 20 8 C13 8.6 12.6 9 12 16 C11.4 9 11 8.6 4 8 C11 7.4 11.4 7 12 0 Z" transform="translate(0 4)" />
    </svg>
  );
}
