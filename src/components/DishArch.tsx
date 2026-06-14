import { Medallion } from "./Ornaments";

/** An arch-framed, photograph-free visual for a dish — gradient, medallion,
 *  a calligraphic initial and a warm "embered" base glow. */
export function DishArch({
  accent,
  initial,
  className = "",
}: {
  accent: string;
  initial: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[3/4] w-full ${className}`}>
      {/* Gold arch frame */}
      <div className="arch-clip absolute inset-0 bg-gradient-to-b from-gold/55 via-gold/25 to-gold/10" />
      {/* Inner panel */}
      <div className="arch-clip absolute inset-[1.5px] overflow-hidden bg-noir-ink">
        <div className={`absolute inset-0 bg-gradient-to-b ${accent}`} />
        <div className="jali-bg absolute inset-0 opacity-[0.08]" />

        <Medallion className="animate-spinSlow absolute left-1/2 top-[42%] h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 text-gold/10" />

        {/* Calligraphic initial */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[10rem] leading-none text-gold/25">
            {initial}
          </span>
        </span>

        {/* Ember glow at the base — the fire beneath the dum */}
        <div className="animate-pulseGlow absolute -bottom-10 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-saffron/30 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>
    </div>
  );
}
