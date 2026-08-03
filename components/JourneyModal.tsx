"use client";

import { useCallback, useEffect, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { journey } from "@/lib/data";
import { asset } from "@/lib/basePath";

const ease = [0.16, 1, 0.3, 1] as const;

export default function JourneyModal({
  open,
  onClose,
  lightbox,
  setLightbox,
}: {
  open: boolean;
  onClose: () => void;
  lightbox: number | null;
  setLightbox: Dispatch<SetStateAction<number | null>>;
}) {
  // Functional update: consecutive clicks (or a held arrow key) each need to
  // see the previous index, not the one captured when this closure was made.
  const step = useCallback(
    (delta: number) => {
      setLightbox((cur) =>
        cur === null ? null : (cur + delta + journey.length) % journey.length,
      );
    },
    [setLightbox],
  );

  // Lock background scrolling while the overlay is up.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      }
      if (lightbox !== null && e.key === "ArrowRight") step(1);
      if (lightbox !== null && e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lightbox, onClose, setLightbox, step]);

  const active = lightbox === null ? null : journey[lightbox];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-ink/97 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Journey gallery"
        >
          {/* ── Header ── */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-ink/80 px-6 py-4 backdrop-blur-xl sm:px-8">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-teal uppercase">
                The Journey
              </p>
              <p className="mt-0.5 font-display text-lg text-white">
                {journey.length} moments
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* ── Card grid ── */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
            {journey.map((item, i) => (
              <motion.button
                key={item.slug}
                type="button"
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.04 * i, ease }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-colors hover:border-teal/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
                  <Image
                    src={asset(`/journey/thumb/${item.slug}.jpg`)}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10.5px] font-semibold tracking-[0.12em] text-teal uppercase">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-white/50">
                    {item.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* ── Lightbox ── */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-20 flex flex-col bg-black/92 backdrop-blur-md"
                onClick={() => setLightbox(null)}
              >
                <div className="flex justify-end p-5">
                  <button
                    type="button"
                    onClick={() => setLightbox(null)}
                    aria-label="Close image"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>

                <div
                  className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous image"
                    className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition-colors hover:bg-white/10 sm:left-4"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <motion.div
                    key={active.slug}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={asset(`/journey/${active.slug}.jpg`)}
                      alt={active.title}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </motion.div>

                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next image"
                    className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition-colors hover:bg-white/10 sm:right-4"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div
                  className="mx-auto max-w-3xl px-6 pb-10 text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-[10.5px] font-semibold tracking-[0.12em] text-teal uppercase">
                    {active.category} · {String(lightbox! + 1).padStart(2, "0")} /{" "}
                    {String(journey.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-white sm:text-2xl">
                    {active.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">
                    {active.caption}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
