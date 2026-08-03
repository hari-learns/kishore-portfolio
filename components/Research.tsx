import { FileText, Dna } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { publications, ongoingResearch, pharmacogenomics } from "@/lib/data";

export default function Research() {
  return (
    <Section id="research" subtle>
      <SectionHeading
        eyebrow="Research"
        title="Questions worth following"
        intro="Work spanning cardiovascular medicine, onco-nephrology, neuro-oncology, and the pharmacogenomics of individualised prescribing."
      />

      {/* ── Published work ── */}
      <div className="mt-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <FileText className="h-4 w-4 text-accent" />
            <h3 className="text-[12px] font-semibold tracking-[0.14em] text-ink uppercase">
              Published Work
            </h3>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-8 space-y-6">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all hover:border-accent/40 hover:shadow-[0_20px_50px_-30px_rgba(18,73,201,0.5)] sm:p-10">
                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-teal" />

                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ink px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-white uppercase">
                    {pub.venue}
                  </span>
                  <span className="text-[12.5px] text-ink-muted">{pub.type}</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-[12.5px] font-medium text-teal">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                    {pub.status}
                  </span>
                </div>

                <h4 className="mt-6 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.2] tracking-tight">
                  {pub.title}
                </h4>

                <p className="mt-5 max-w-3xl text-[16.5px] leading-relaxed text-ink-soft">
                  {pub.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {pub.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full border border-line bg-canvas-subtle px-3.5 py-1.5 text-[12.5px] text-ink-soft"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Ongoing research ── */}
      <div className="mt-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            <h3 className="text-[12px] font-semibold tracking-[0.14em] text-ink uppercase">
              Ongoing Research
            </h3>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {ongoingResearch.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.07}>
              <article className="group h-full rounded-3xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_44px_-28px_rgba(10,20,37,0.45)] sm:p-8">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-teal uppercase">
                  {project.field}
                </p>
                <h4 className="mt-4 font-display text-[1.4rem] leading-snug tracking-tight transition-colors group-hover:text-accent">
                  {project.title}
                </h4>
                <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
                  {project.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Precision medicine ── */}
      <div className="mt-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <Dna className="h-4 w-4 text-accent" />
            <h3 className="text-[12px] font-semibold tracking-[0.14em] text-ink uppercase">
              Precision Medicine — Knowledge Domains
            </h3>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-ink-soft">
            Pharmacogenomic markers studied for their role in translating inherited
            variation into safer, individually calibrated prescribing.
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {pharmacogenomics.map((item, i) => (
            <Reveal key={item.gene} delay={0.02 * i} y={14}>
              <div className="group h-full rounded-2xl border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-teal/50 hover:bg-teal-soft/40 sm:p-5">
                <p className="font-display text-[1.05rem] tracking-tight text-ink transition-colors group-hover:text-teal">
                  {item.gene}
                </p>
                <p className="mt-1.5 text-[12.5px] leading-snug text-ink-muted">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
