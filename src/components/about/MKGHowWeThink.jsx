// src/components/home/MKGHowWeThink.jsx
import React from "react";
import { motion } from "framer-motion";

const PRINCIPLES = [
  "Radical transparency builds trust",
  "Data informs decisions",
  "Brand comes before platform",
  "Quality compounds over time",
  "Growth should feel intentional, not overwhelming",
];

export default function MKGHowWeThink({
  title = "HOW WE THINK",
  ctaLabel = "Work With Media King Group",
  ctaHref = "/contact",
  accent = "#5D8AA8",
}) {
  return (
    <section className="w-full bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] bg-[#0B0B0B] text-[#F4F7F2] overflow-hidden">
          {/* Top strip */}
          <div className="flex flex-col gap-6 border-b border-white/10 px-6 py-8 sm:px-10 sm:py-10 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-xs tracking-[0.35em] uppercase text-white/60">
                {title}
              </div>
              <h2
                className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight"
                style={{ fontFamily: "Kinta, sans-serif" }}
              >
                Principles we refuse to compromise on.
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed">
                A system works when it’s honest, measurable, and built with intent — not
                noise.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              href={ctaHref}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#F4F7F2] px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              {ctaLabel}
            
            </motion.a>
          </div>

          {/* Principles row (horizontal scroll on mobile, grid on desktop) */}
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
              {PRINCIPLES.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 0.03 * i,
                  }}
                  className="min-w-[240px] md:min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-xs tracking-[0.3em] uppercase text-white/50">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span
                      className="mt-1 h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: accent }}
                      aria-hidden
                    />
                  </div>

                  <div className="mt-4 text-sm font-semibold text-white/90 leading-snug">
                    {text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom hint */}
            <div className="mt-6 text-xs text-white/40 md:hidden">
              Swipe to read the principles →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
