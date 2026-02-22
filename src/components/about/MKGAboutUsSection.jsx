// src/components/home/MKGStorySection.jsx
import React from "react";
import { motion } from "framer-motion";
import GabeAbout from "../../assets/images/gabe_about.webp"; // ✅ adjust if your component path differs

export default function MKGAboutUsSection() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Two-column flex layout */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
          {/* LEFT: All text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold tracking-widest text-black/60">
              ABOUT US
              <span className="h-2 w-2 rounded-full bg-black/40" aria-hidden />
            </div>

            <h2
              className="mt-5 text-3xl font-semibold tracking-tight text-black sm:text-4xl"
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              Media King Group was built on a simple realization:
            </h2>

            <p className="mt-4 text-base leading-relaxed text-black/60">
              Modern growth doesn’t come from posting more — it comes from building the
              right system.
            </p>

            {/* Story card moved to the left side */}
            <div className="mt-8 relative overflow-hidden rounded-3xl bg-[#F4F7F2] ring-1 ring-black/10 shadow-sm p-6 sm:p-8">
              {/* subtle texture blobs */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.5]">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-black/5 blur-2xl" />
                <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-black/5 blur-2xl" />
              </div>

              <div className="relative space-y-5">
                <p className="text-black/75 leading-relaxed">
                  Founded in 2023, Media King Group is a privately owned, mission-led
                  media agency built to help brands grow with clarity, creativity, and
                  measurable impact. The company was established to challenge traditional
                  marketing models by combining strategy, storytelling, and performance
                  marketing under one roof.
                </p>

                <p className="text-black/75 leading-relaxed">
                  Media King works alongside founders, operators, and teams to deliver
                  full-service media solutions—supporting brands across digital marketing,
                  content creation, social growth, and brand positioning. The agency
                  partners with both emerging and established businesses seeking scalable,
                  modern marketing solutions.
                </p>

                <div className="mt-6 rounded-2xl bg-white/60 ring-1 ring-black/10 p-4">
                  <p className="text-sm text-black/70">
                    We don’t chase trends — we build systems that keep working.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Gabe image */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.05 }}
            className="lg:w-1/2"
          >
            <div className="relative h-[420px] sm:h-[520px] lg:h-full overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-sm bg-black/5">
              <img
                src={GabeAbout}
                alt="Gabe"
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {/* Optional subtle overlay for readability / style */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}