import React from "react";
import { motion } from "framer-motion";
import Chart from "../../assets/images/chart.png";

// Example usage:
// <MKGOperatingSystem
//   imageSrc={yourImage}
//   imageAlt="MKG Operating System visual"
// />

export default function MKGOperatingSystem({
  imageSrc = Chart,
  imageAlt = "MKG Operating System",
}) {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* TEXT */}
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-black/60">
              The MKG Operating System
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-3 font-semibold leading-tight text-3xl sm:text-4xl"
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              A repeatable system that turns attention into revenue.
            </motion.h2>

            <p className="mt-4 text-black/70 leading-relaxed">
              Most brands run on scattered tools and random campaigns. We build a
              connected operating system—strategy, content, automation, and
              conversion—so growth becomes predictable.
            </p>

            {/* Pillars */}
            <div className="mt-8 grid gap-4">
              <Pillar
                title="1) Brand Foundation"
                desc="Positioning, offer, messaging, and creative direction that stays consistent across every channel."
              />
              <Pillar
                title="2) Content Engine"
                desc="A production rhythm for blogs, short-form, ads, and email—built to ship weekly, not “someday.”"
              />
              <Pillar
                title="3) Conversion Pathways"
                desc="Landing pages, lead capture, and follow-up flows designed to turn clicks into booked calls."
              />
              <Pillar
                title="4) Automation & Reporting"
                desc="Integrations that reduce manual work and dashboards that show what’s working—clearly."
              />
            </div>

            {/* CTA */}
            {/* <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-sm border border-black/10 hover:opacity-90 transition"
              >
                Build My Operating System
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold border border-black/10 hover:bg-black/5 transition"
              >
                See What’s Included
              </a>
            </div> */}
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-sm bg-white/40">
              {imageSrc ? (
                <img
                  src= {Chart}
                  alt={imageAlt}
                    className="px-5 sm:px-8 md:px-10 py-10"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-[360px] sm:h-[440px] flex items-center justify-center text-black/50">
                  Add imageSrc to show your image
                </div>
              )}
            </div>

            {/* subtle badge */}
            <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[70%] rounded-2xl border border-black/10 bg-white/80 backdrop-blur px-4 py-3 shadow-sm">
              <p className="text-sm text-black/70">
                Designed to be <span className="font-semibold">repeatable</span>,{" "}
                <span className="font-semibold">scalable</span>, and{" "}
                <span className="font-semibold">trackable</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ title, desc }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/40 p-4">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-black/70 leading-relaxed">{desc}</p>
    </div>
  );
}
