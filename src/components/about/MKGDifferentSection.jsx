// src/components/home/MKGDifferentSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import laptopGuy from "../../assets/images/laptop-guy.png";

export default function MKGDifferentSection({
  imageSrc = laptopGuy,
  imageAlt = "Media King Group — systems-first creative",
}) {
  return (
    <section className="w-full bg-black px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="text-xs tracking-[0.3em] uppercase text-white/50">
              WHAT MAKES US DIFFERENT
            </div>

            <h2
              className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white"
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              Luxury Creative + Performance Strategy
            </h2>

            <p className="mt-3 max-w-2xl text-white/70 leading-relaxed">
              We blend premium design with measurable outcomes.
            </p>

            {/* Differentiators */}
            <div className="mt-8 grid gap-4">
              <FeatureRow
                title="Systems-First Thinking"
                desc="Every decision supports scalability and consistency."
              />
              <FeatureRow
                title="Full-Service Execution"
                desc="Strategy, branding, content, development, and operations — under one roof."
              />
              <FeatureRow
                title="Long-Term Partnerships"
                desc="We don’t chase trends. We build infrastructure."
              />
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
              >
                Book a call
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="lg:col-span-5"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ title, desc }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm">
      <div
        className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white/70"
        aria-hidden
      />
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="mt-1 text-sm text-white/70 leading-relaxed">
          {desc}
        </div>
      </div>
    </div>
  );
}