import Image from "next/image";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/basePath";

/**
 * Institutional logos, each captioned with the actual relationship.
 *
 * Deliberately not in the site header: these are trademarks of institutions
 * that have not endorsed this site, and a logo in the masthead reads as
 * endorsement. Stating the real affiliation next to each one is both honest
 * and more informative.
 */
const affiliations = [
  {
    src: "/logos/lodz.jpg",
    name: "Medical University of Łódź",
    relationship: "MD Programme · 2022 — Present",
    width: 400,
    height: 150,
  },
  {
    src: "/logos/mayo.jpg",
    name: "Mayo Clinic",
    relationship: "Nephrology Observership",
    width: 400,
    height: 400,
  },
];

export default function Affiliations() {
  return (
    <section className="border-y border-line bg-canvas-subtle px-6 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-center text-[11px] font-semibold tracking-[0.14em] text-ink-muted uppercase">
            Affiliations
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
          {affiliations.map((item, i) => (
            <Reveal key={item.name} delay={0.06 * i}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 items-center">
                  <Image
                    src={asset(item.src)}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-[15px] tracking-tight text-ink">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-ink-muted">
                    {item.relationship}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
