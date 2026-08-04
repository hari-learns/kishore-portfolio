"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps an existing marker (an ordinal, a dot) and sends a single vitals-monitor
 * ring outward when it scrolls into view.
 *
 * The ring is absolutely positioned and `pointer-events-none`, so the wrapped
 * content keeps its original position and size — this is additive decoration,
 * not a replacement for the marker.
 *
 * Honours `prefers-reduced-motion` explicitly: the CSS block in globals.css only
 * zeroes CSS animation/transition durations, and framer-motion animates in JS.
 */
export default function PulseMark({
  children,
  delay = 0,
  className = "",
  ringClassName = "bg-sky/25",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  ringClassName?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {!reduced && (
        <motion.span
          aria-hidden="true"
          className={`pointer-events-none absolute -inset-2 rounded-full ${ringClassName}`}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: [0, 0.9, 0], scale: [0.4, 1.6, 2.1] }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 1.4, delay, ease: "easeOut" }}
        />
      )}
      <span className="relative">{children}</span>
    </span>
  );
}
