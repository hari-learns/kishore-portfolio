import { ExternalLink, BookHeart } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import FloatingGlyphs from "@/components/FloatingGlyphs";
import PulseMark from "@/components/PulseMark";
import { medicalEducation } from "@/lib/data";

export default function MedicalEducation() {
  return (
    <Section id="teaching" subtle className="relative overflow-hidden">
      <FloatingGlyphs variant="teaching" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="Medical Education"
          icon={BookHeart}
          title={
            <>
              Teaching as a way
              <br className="hidden sm:block" /> of knowing
            </>
          }
          intro="Explaining medicine to peers is the fastest route to understanding it yourself — and the most useful thing to give back."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {medicalEducation.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className={`bg-canvas-raised ${
                i === medicalEducation.length - 1 &&
                medicalEducation.length % 2 !== 0
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <div className="group h-full p-7 transition-colors hover:bg-canvas-subtle">
                <PulseMark
                  delay={i * 0.06}
                  className="font-display text-[13px] text-sky tabular-nums"
                >
                  {String(i + 1).padStart(2, "0")}
                </PulseMark>
                <h3 className="mt-3 font-display text-[1.25rem] leading-snug tracking-tight transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                {"href" in item && item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent hover:underline"
                  >
                    {item.linkLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
