"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Stethoscope,
  Activity,
  HeartHandshake,
  Presentation,
  Microscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { journeyGroups } from "@/lib/data";
import { asset } from "@/lib/basePath";

/** Keyed by chapter id, which is stable — labels are copy and may change. */
const chapterIcons: Record<string, LucideIcon> = {
  "first-year": Sparkles,
  "second-year": BookOpen,
  "third-year": Stethoscope,
  now: Activity,
  meetings: HeartHandshake,
  workshops: Presentation,
  campus: Microscope,
  people: Users,
  others: Sparkles,
};

const ease = [0.16, 1, 0.3, 1] as const;

type Group = (typeof journeyGroups)[number];

/**
 * One chapter of the journey, rendered as a horizontally scrollable rail.
 *
 * A rail rather than a grid so that eight chapters of ~50 photos stay a
 * readable page rather than an endless column, and so each era reads as its own
 * band. `onOpen` receives the photo's index into the flat `journey` array —
 * never the index within this chapter — because that is what the lightbox,
 * its prev/next wrap, and the counter all address photos by.
 */
export default function JourneyChapter({
  group,
  onOpen,
}: {
  group: Group;
  onOpen: (flatIndex: number) => void;
}) {
  if (group.items.length === 0) return null;

  const Icon = chapterIcons[group.id] ?? Sparkles;

  return (
    <div className="relative pl-8 sm:pl-10">
      {/* Timeline node, matching the vocabulary used in Conferences */}
      <span className="absolute top-2 left-[3px] h-3 w-3 rounded-full bg-accent ring-4 ring-canvas sm:left-[7px]" />

      <header className="pr-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="flex items-center gap-2.5 font-display text-[1.6rem] leading-tight tracking-tight sm:text-[1.8rem]">
            <Icon className="h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
            {group.label}
          </h3>
          {group.period && (
            <span className="text-[12.5px] font-medium tracking-wide text-sky uppercase">
              {group.period}
            </span>
          )}
          <span className="text-[12.5px] text-ink-muted tabular-nums">
            {String(group.items.length).padStart(2, "0")}{" "}
            {group.items.length === 1 ? "photo" : "photos"}
          </span>
        </div>
        {group.blurb && (
          <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
            {group.blurb}
          </p>
        )}
      </header>

      <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {group.items.map((item, i) => (
          <motion.button
            key={item.slug}
            type="button"
            onClick={() => onOpen(item.flatIndex)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05, ease }}
            className="group w-60 shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-canvas-raised text-left transition-colors hover:border-accent/50 sm:w-72"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-canvas-subtle">
              <Image
                src={asset(`/journey/thumb/${item.slug}.jpg`)}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 240px, 288px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-4">
              <p className="text-[10.5px] font-semibold tracking-[0.12em] text-sky uppercase">
                {item.category}
              </p>
              <h4 className="mt-1.5 font-display text-[1.05rem] leading-snug tracking-tight transition-colors group-hover:text-accent">
                {item.title}
              </h4>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
