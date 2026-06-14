import { DishArch } from "./DishArch";
import type { Variety } from "@/lib/content";

export function DishTile({ dish }: { dish: Variety }) {
  return (
    <article className="group relative flex flex-col">
      <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
        <DishArch accent={dish.accent} initial={dish.name.charAt(0)} />
      </div>
      <div className="mt-7 text-center">
        <p className="eyebrow text-[0.6rem]">{dish.origin}</p>
        <h3 className="mt-3 font-display text-3xl text-cream transition-colors duration-500 group-hover:text-gold">
          {dish.name}
        </h3>
        <p className="mt-1 font-display text-lg italic text-gold/80">
          {dish.title}
        </p>
        <p className="mx-auto mt-4 max-w-xs font-body text-sm leading-relaxed text-cream-dim">
          {dish.body}
        </p>
        <p className="mt-5 font-label text-[0.62rem] uppercase tracking-[0.25em] text-cream-dim/70">
          {dish.note}
        </p>
      </div>
    </article>
  );
}
