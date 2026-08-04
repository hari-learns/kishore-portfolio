import Reveal from "@/components/Reveal";
import { futureVision } from "@/lib/data";

export default function FutureVision() {
  return (
    <section id="vision" className="relative overflow-hidden bg-ink px-6 py-24 sm:px-8 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-25%] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-30%] h-[28rem] w-[28rem] rounded-full bg-sky-light/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl text-center">
        <Reveal>
          <p className="eyebrow justify-center !text-sky-light">Future Vision</p>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-8 font-display text-[clamp(1.65rem,4vw,2.9rem)] leading-[1.28] tracking-tight text-white">
            {futureVision.statement}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
            {futureVision.domains.map((domain) => (
              <div
                key={domain}
                className="bg-ink px-4 py-6 transition-colors hover:bg-white/[0.04]"
              >
                <p className="font-display text-[15px] leading-snug text-white/85 sm:text-base">
                  {domain}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
