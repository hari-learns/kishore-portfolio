import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { conferences } from "@/lib/data";

export default function Conferences() {
  return (
    <Section id="conferences" subtle>
      <SectionHeading
        eyebrow="Conferences"
        title="Presenting & representing"
        intro="International academic forums for presenting research and collaborating with student-researchers across borders."
      />

      <div className="relative mt-14 pl-8 sm:pl-10">
        <span className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-accent-deep via-sky to-transparent sm:left-[7px]" />

        <div className="space-y-10">
          {conferences.map((conf, i) => (
            <Reveal key={conf.name} delay={i * 0.08}>
              <article className="relative">
                <span className="absolute top-1.5 -left-[27px] h-3 w-3 rounded-full border-2 border-canvas-subtle bg-accent shadow-sm ring-1 ring-line sm:-left-[31px]" />

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-[15px] text-ink-muted tabular-nums">
                    {conf.year}
                  </span>
                  <h3 className="font-display text-[1.5rem] leading-snug tracking-tight">
                    {conf.name}
                  </h3>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-[11.5px] font-semibold tracking-wide text-accent">
                    {conf.role}
                  </span>
                </div>

                <p className="mt-2.5 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
                  {conf.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
