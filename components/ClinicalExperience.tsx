import { MapPin, CalendarDays } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { clinicalExperience } from "@/lib/data";

export default function ClinicalExperience() {
  const { featured } = clinicalExperience;

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Clinical Experience"
        title="Training inside academic medicine"
      />

      <Reveal delay={0.08}>
        <article className="relative mt-14 overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-12 lg:p-14">
          {/* ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-teal/20 blur-3xl" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Featured Experience
            </span>

            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1] tracking-tight">
                  {featured.institution}
                </h3>
                <p className="mt-3 font-display text-xl text-teal italic">
                  {featured.department}
                </p>
              </div>

              <div className="flex flex-col gap-2 text-[14px] text-white/60 lg:items-end">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {featured.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {featured.duration}
                </span>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/70">
              {featured.summary}
            </p>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {featured.takeaways.map((item) => (
                <div key={item.title} className="bg-ink p-6 sm:p-7">
                  <h4 className="font-display text-lg text-white">{item.title}</h4>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/55">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
