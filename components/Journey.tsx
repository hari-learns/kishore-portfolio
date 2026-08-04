"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import JourneyModal from "@/components/JourneyModal";
import JourneyChapter from "@/components/JourneyChapter";
import { journey, journeyGroups, featuredIndices } from "@/lib/data";
import { asset } from "@/lib/basePath";

const ease = [0.16, 1, 0.3, 1] as const;
const ROTATE_MS = 5000;

/** Fisher-Yates over a copy. Client-only, after mount, to keep SSR output stable. */
function shuffled(source: readonly number[]) {
  const order = [...source];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export default function Journey() {
  // The showcase rotates a curated subset, not all ~50 photos — a progress bar
  // with 50 segments is unreadable and the counter becomes meaningless.
  // Server and first client render share this order; the shuffle is applied in
  // an effect so hydration never mismatches.
  const [order, setOrder] = useState<number[]>(() => [...featuredIndices]);
  const [pos, setPos] = useState(0);
  const [paused, setPaused] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Randomising during render (or in the useState initialiser) would make the
    // client's first paint disagree with the server HTML and break hydration.
    // A single post-mount shuffle is the intended pattern here: it runs once and
    // cascades nothing, which is what this rule actually guards against.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrder(shuffled(featuredIndices));
  }, []);

  // Background tabs keep firing setInterval but freeze rAF, so the crossfade's
  // exit never completes and slides pile up. Stop advancing while hidden.
  useEffect(() => {
    const onVisibility = () => setHidden(document.visibilityState === "hidden");
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Wraps on `order.length`, not `journey.length` — `pos` is a cursor into
  // `order`, and now that `order` is the featured subset the two differ.
  const count = order.length;
  const go = useCallback(
    (delta: number) => {
      if (count === 0) return;
      setPos((p) => (p + delta + count) % count);
    },
    [count],
  );

  // Auto-advance, unless paused, reduced-motion, or the gallery is covering it.
  useEffect(() => {
    if (paused || galleryOpen || hidden || reducedMotion.current) return;
    const id = setInterval(() => go(1), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, galleryOpen, hidden, go]);

  const index = order[pos] ?? 0;
  const item = journey[index];

  return (
    <Section id="journey">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Journey"
          title="Moments along the way"
          intro="Teaching, research, conferences, and the long quiet hours in between."
        />

        <Reveal delay={0.1}>
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-canvas-raised px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <LayoutGrid className="h-4 w-4" />
            View all {journey.length} moments
          </button>
        </Reveal>
      </div>

      {/* ── Featured showcase ── */}
      <Reveal delay={0.08}>
        <div
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-line bg-ink"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative h-[26rem] w-full sm:h-[32rem] lg:h-[36rem]">
            <AnimatePresence initial={false}>
              <motion.div
                key={item.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease }}
                className="absolute inset-0"
              >
                {/* Blurred fill so portrait and landscape shots both sit well
                    in the same frame without cropping faces. */}
                <Image
                  src={asset(`/journey/thumb/${item.slug}.jpg`)}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="100vw"
                  className="scale-110 object-cover opacity-35 blur-2xl"
                />
                <Image
                  src={asset(`/journey/${item.slug}.jpg`)}
                  alt={item.title}
                  fill
                  priority={pos === 0}
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/80 to-transparent" />

            {/* Category chip */}
            <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={item.slug}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3.5 py-1.5 text-[10.5px] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-light" />
                  {item.category}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous moment"
              className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:left-5"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next moment"
              className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:right-5"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease }}
                  className="max-w-2xl"
                >
                  <h3 className="font-display text-[clamp(1.4rem,3vw,2rem)] leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/65 sm:text-[15.5px]">
                    {item.caption}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex items-center gap-3">
                <span className="font-display text-[13px] text-white/60 tabular-nums">
                  {String(pos + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </span>
                <div className="flex flex-1 gap-1.5">
                  {order.map((slot, i) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setPos(i)}
                      aria-label={`Show moment ${i + 1}`}
                      className="group h-1 flex-1 overflow-hidden rounded-full bg-white/20"
                    >
                      <span
                        className={`block h-full rounded-full transition-all duration-500 ${
                          i === pos ? "w-full bg-sky-light" : "w-0 bg-white/60 group-hover:w-full"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Thumbnail strip ── */}
      <Reveal delay={0.12}>
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {order.map((slot, i) => {
            const thumb = journey[slot];
            return (
              <button
                key={thumb.slug}
                type="button"
                onClick={() => setPos(i)}
                aria-label={thumb.title}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:h-20 sm:w-28 ${
                  i === pos
                    ? "border-accent opacity-100"
                    : "border-transparent opacity-55 hover:opacity-90"
                }`}
              >
                <Image
                  src={asset(`/journey/thumb/${thumb.slug}.jpg`)}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* ── Chapters: the transformation, year by year ── */}
      <div className="relative mt-20 space-y-16">
        {/* Spine linking the chapter nodes into one timeline */}
        <span className="absolute top-3 bottom-3 left-[3px] w-px bg-gradient-to-b from-accent via-sky to-transparent sm:left-[7px]" />

        {journeyGroups.map((group) => (
          <Reveal key={group.id}>
            <JourneyChapter
              group={group}
              onOpen={(flatIndex) => {
                setGalleryOpen(true);
                setLightbox(flatIndex);
              }}
            />
          </Reveal>
        ))}
      </div>

      <JourneyModal
        open={galleryOpen}
        onClose={() => {
          setGalleryOpen(false);
          setLightbox(null);
        }}
        lightbox={lightbox}
        setLightbox={setLightbox}
      />
    </Section>
  );
}
