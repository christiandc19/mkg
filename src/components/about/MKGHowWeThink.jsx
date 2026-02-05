// src/components/home/MKGHowWeThink.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PRINCIPLES = [
  "Radical transparency builds trust",
  "Data informs decisions",
  "Brand comes before platform",
  "Quality compounds over time",
  "Growth should feel intentional, not overwhelming",
];

const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

export default function MKGHowWeThink({
  title = "HOW WE THINK",
  headline = "Principles we don’t compromise on.",
  subhead =
    "A system works when it’s honest, measurable, and built with intent — not noise.",
  ctaLabel = "Work With Media King Group",
  ctaTo = "/contact",
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[90%] max-w-6xl py-24">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="text-xs tracking-[0.35em] uppercase text-black/50">
              {title}
            </div>

            <h2
              className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight"
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              {headline}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-black/65 leading-relaxed">
              {subhead}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <Link
              to={ctaTo}
              onClick={scrollTop}
              className="
                inline-flex items-center justify-center gap-2
                rounded-full bg-black px-6 py-3 text-sm font-medium text-white
                transition hover:opacity-90
              "
            >
              {ctaLabel} <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-black/10" />

        {/* Principles */}
        <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          {PRINCIPLES.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.03 * i,
              }}
              className="
                rounded-3xl border border-black/10 bg-[#F4F7F2]
                p-6 sm:p-7
              "
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="text-xs tracking-[0.3em] uppercase text-black/45">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 h-2 w-2 rounded-full bg-black/40" />
                </div>

                <div className="text-base font-medium text-black/75 leading-relaxed">
                  {text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
