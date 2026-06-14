import { Spark } from "./Ornaments";

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-gold/15 bg-noir-soft py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-noir-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-noir-soft to-transparent" />
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-2xl italic text-cream/85 sm:text-3xl">
              {item}
            </span>
            <Spark className="mx-7 h-4 w-4 text-gold/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
