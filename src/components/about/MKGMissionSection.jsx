// src/components/home/MKGMissionSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MKGMissionSection() {
  return (
    <section className="w-full bg-[#F4F7F2] px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <div className="text-xs tracking-[0.3em] uppercase text-black/50">
            OUR MISSION
          </div>

          <h2
            className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            We design brands and systems that people actually believe in.
          </h2>
        </motion.div>

        {/* Mission pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl bg-white ring-1 ring-black/10 p-6 shadow-sm"
          >
            <div className="mb-3 h-2 w-10 rounded-full bg-black/80" />
            <h3 className="text-lg font-semibold text-black">
              Brands people trust, follow, and buy from
            </h3>
            <p className="mt-3 text-sm text-black/60 leading-relaxed">
              We build credibility first — through clear positioning, strong identity,
              and digital experiences that feel intentional, not random.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="rounded-2xl bg-white ring-1 ring-black/10 p-6 shadow-sm"
          >
            <div className="mb-3 h-2 w-10 rounded-full bg-black/80" />
            <h3 className="text-lg font-semibold text-black">
              Founders into authorities
            </h3>
            <p className="mt-3 text-sm text-black/60 leading-relaxed">
              We help leaders shape their narrative, package their expertise, and show
              up consistently — so the market knows exactly why they matter.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl bg-white ring-1 ring-black/10 p-6 shadow-sm"
          >
            <div className="mb-3 h-2 w-10 rounded-full bg-black/80" />
            <h3 className="text-lg font-semibold text-black">
              Digital systems that scale without chaos
            </h3>
            <p className="mt-3 text-sm text-black/60 leading-relaxed">
              Strategy, content, and infrastructure working together — so growth feels
              controlled instead of reactive.
            </p>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-sm text-black/50">
            Our mission isn’t about volume — it’s about building something that lasts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
