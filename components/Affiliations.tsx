import Image from "next/image";
import { Hospital } from "lucide-react";
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
    href: "https://en.umed.pl/",
    width: 400,
    height: 150,
  },
  {
    src: "/logos/mayo.jpg",
    name: "Mayo Clinic",
    relationship: "Nephrology Observership · Upcoming, Sept 2026",
    href: "https://www.mayoclinic.org/",
    width: 400,
    height: 400,
  },
];

export default function Affiliations() {
  return (
    <section className="border-y border-line bg-canvas-subtle px-6 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-ink-muted uppercase">
            <Hospital className="h-4 w-4 text-sky" aria-hidden="true" />
            Affiliations
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16">
          {affiliations.map((item, i) => (
            <Reveal key={item.name} delay={0.06 * i}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-16 items-center">
                  <Image
                    src={asset(item.src)}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-display text-[15px] tracking-tight text-ink transition-colors group-hover:text-accent">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-ink-muted">
                    {item.relationship}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
