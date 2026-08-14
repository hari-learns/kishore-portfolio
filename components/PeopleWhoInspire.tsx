import Image from "next/image";
import { Sparkles } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { peopleWhoInspire } from "@/lib/data";
import { asset } from "@/lib/basePath";

export default function PeopleWhoInspire() {
  const { intro, featured, gallery } = peopleWhoInspire;

  return (
    <Section id="inspire">
      <SectionHeading
        eyebrow="People Who Inspire"
        icon={Sparkles}
        title="Not just colleagues — mentors"
        intro={intro}
      />

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <figure className="overflow-hidden rounded-[1.75rem] border border-line shadow-[0_18px_50px_-28px_color-mix(in_srgb,var(--ink)_40%,transparent)]">
            <Image
              src={asset(`/${featured.slug}.jpg`)}
              alt={`${featured.name} and Kishore Muthukumar`}
              width={2000}
              height={1500}
              sizes="(max-width: 1024px) 100vw, 40rem"
              className="h-auto w-full object-cover"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-muted uppercase">
              Featured
            </p>
            <p className="mt-2 font-display text-[1.6rem] tracking-tight text-ink">
              {featured.name}
            </p>
            <p className="mt-1 text-[13px] tracking-wide text-sky uppercase">
              {featured.role}
            </p>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-soft">
              {featured.caption}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {gallery.map((item, i) => (
          <Reveal key={item.slug} delay={0.1 + i * 0.06}>
            <figure className="overflow-hidden rounded-2xl border border-line bg-canvas-raised">
              <div className="relative aspect-[4/5]">
                <Image
                  src={asset(`/${item.slug}.jpg`)}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-4 text-[13.5px] leading-relaxed text-ink-soft">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
