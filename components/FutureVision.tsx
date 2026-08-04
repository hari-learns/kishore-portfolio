import {
  Compass,
  HeartPulse,
  Stethoscope,
  Dna,
  Pill,
  FlaskConical,
  BookHeart,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import FloatingGlyphs from "@/components/FloatingGlyphs";
import { futureVision } from "@/lib/data";

const domainIcons: Record<string, LucideIcon> = {
  "Cardiovascular Medicine": HeartPulse,
  "Internal Medicine": Stethoscope,
  "Precision Medicine": Dna,
  "Clinical Pharmacology": Pill,
  "Translational Research": FlaskConical,
  "Medical Education": BookHeart,
};

export default function FutureVision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-ink px-6 py-24 sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-25%] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-30%] h-[28rem] w-[28rem] rounded-full bg-sky-light/15 blur-3xl" />
      </div>

      <FloatingGlyphs variant="vision" />

      <div className="relative mx-auto w-full max-w-5xl text-center">
        <Reveal>
          <p className="eyebrow justify-center !text-sky-light">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            Future Vision
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-8 font-display text-[clamp(1.65rem,4vw,2.9rem)] leading-[1.28] tracking-tight text-white">
            {futureVision.statement}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
            {futureVision.domains.map((domain) => {
              const Icon = domainIcons[domain] ?? Compass;
              return (
                <div
                  key={domain}
                  className="bg-ink px-4 py-6 transition-colors hover:bg-white/[0.04]"
                >
                  <Icon
                    className="mx-auto mb-2.5 h-5 w-5 text-sky-light"
                    aria-hidden="true"
                  />
                  <p className="font-display text-[15px] leading-snug text-white/85 sm:text-base">
                    {domain}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
