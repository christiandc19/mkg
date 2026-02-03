// src/components/home/MKGStorySection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MKGStorySection() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: Label + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold tracking-widest text-black/60">
              THE STORY
              <span className="h-2 w-2 rounded-full bg-black/40" aria-hidden />
            </div>

            <h2
              className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-black"
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              Media King Group was built on a simple realization:
            </h2>

            <p className="mt-4 text-base leading-relaxed text-black/60">
              Modern growth doesn’t come from posting more — it comes from building the
              right system.
            </p>
          </motion.div>

          {/* Right: Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl bg-[#F4F7F2] ring-1 ring-black/10 shadow-sm p-6 sm:p-8">
              {/* subtle texture blobs */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.5]">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-black/5 blur-2xl" />
                <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-black/5 blur-2xl" />
              </div>

              <div className="relative space-y-5">
                <p className="text-black/75 leading-relaxed">
                  What began as deep expertise in viral media evolved into a full-service
                  agency focused on brand identity, content systems, digital infrastructure,
                  and long-term growth strategy.
                </p>

                <p className="text-black/75 leading-relaxed">
                  Today, Media King Group partners with brands across industries to design
                  ecosystems that compound.
                </p>

                {/* Bottom highlight line */}
                <div className="mt-6 rounded-2xl bg-white/60 ring-1 ring-black/10 p-4">
                  <p className="text-sm text-black/70">
                    We don’t chase trends — we build systems that keep working.
                  </p>
                </div>
              </div>
            </div>

            {/* Small helper text */}
            {/* <p className="mt-4 text-xs text-black/40">
              Tip: place this section right after your hero to establish credibility and
              direction early.
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
