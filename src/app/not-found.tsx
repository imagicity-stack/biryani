import Link from "next/link";
import { Monogram, OrnateDivider } from "@/components/Ornaments";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="bg-radial-gold pointer-events-none absolute inset-0" />
      <div className="relative">
        <Monogram className="mx-auto h-20 w-20 text-gold" />
        <p className="mt-8 font-display text-8xl text-gold-gradient">404</p>
        <h1 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
          This Chamber Is Empty
        </h1>
        <OrnateDivider className="mx-auto my-7 max-w-xs" />
        <p className="mx-auto max-w-md font-body text-cream-dim">
          The page you seek has slipped from the royal record. Allow us to return
          you to the court.
        </p>
        <div className="mt-9">
          <Link href="/" className="btn-royal">
            Return to the Court
          </Link>
        </div>
      </div>
    </section>
  );
}
