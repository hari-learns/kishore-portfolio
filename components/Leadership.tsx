import { HeartHandshake } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import EcgLine from "@/components/EcgLine";
import PulseMark from "@/components/PulseMark";
import { leadership } from "@/lib/data";
import { asset } from "@/lib/basePath";
import Image from "next/image";

export default function Leadership() {
  return (
    <Section id="leadership">
      <Reveal>
        <figure className="mb-16 overflow-hidden rounded-[1.5rem] border border-line bg-canvas-raised shadow-[0_18px_50px_-28px_color-mix(in_srgb,var(--ink)_40%,transparent)]">
          <Image
            src={asset("/journey-collage.png")}
            alt="A journey through clinical practice, education, and research"
            width={1600}
            height={800}
            sizes="(max-width: 1280px) 100vw, 72rem"
            className="h-auto w-full object-cover"
          />
        </figure>
      </Reveal>
      <SectionHeading
        eyebrow="Leadership"
        icon={HeartHandshake}
        title="Building things for other students"
        intro="Roles centred on teaching, organising, mentoring, and representing the programme across international collaborations."
      />

      {/* The list's existing top rule doubles as a heartbeat that draws in on
          scroll. Absolutely positioned decoration — the grid below is untouched. */}
      <div className="relative mt-14 border-t border-line">
        <EcgLine
          repeat={5}
          duration={2.6}
          strokeClassName="text-sky"
          className="pointer-events-none absolute inset-x-0 -top-6 h-12 w-full opacity-90"
        />

        {leadership.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.05}>
            <article className="group grid grid-cols-1 gap-4 border-b border-line py-8 transition-colors hover:bg-canvas-subtle/70 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-4 lg:grid-cols-[auto_0.9fr_1.1fr] lg:gap-14">
              <PulseMark
                delay={i * 0.05}
                className="font-display text-[15px] text-ink-muted tabular-nums transition-colors group-hover:text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </PulseMark>

              <div>
                <h3 className="font-display text-[1.45rem] leading-snug tracking-tight transition-colors group-hover:text-accent">
                  {item.role}
                </h3>
                <p className="mt-1.5 text-[13px] tracking-wide text-sky uppercase">
                  {item.org}
                </p>
              </div>

              <p className="text-[16px] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
