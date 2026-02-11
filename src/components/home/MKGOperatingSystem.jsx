import React from "react";
import { motion } from "framer-motion";
import Chart from "../../assets/images/chart.png";

export default function MKGOperatingSystem({
  imageSrc = Chart,
  imageAlt = "MKG Operating System",
}) {
  const pillars = [
    { title: "Diagnose", desc: "We gain radical clarity on your brand, audience, and objectives." },
    { title: "Architect", desc: "We design your brand, media, and digital infrastructure." },
    { title: "Build", desc: "We execute everything — content, design, development, systems." },
    { title: "Amplify", desc: "We optimize, distribute, and scale performance." },
    { title: "Maintain & Grow", desc: "We evolve the ecosystem as your business grows." },
  ];

  return (
    <section className="relative px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-gradient-to-tr from-black via-[#0e0e0f] to-[#1c1c1f] text-white">
      
      {/* Subtle depth glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/15 px-3 py-1 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              The MKG Operating System
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight text-white"
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              A principle-driven approach to sustainable growth.
            </motion.h2>

            <p className="mt-4 text-white/65 leading-relaxed max-w-xl">
              Most brands run on scattered tools and random campaigns. We build a
              connected operating system—strategy, content, automation, and
              conversion—so growth becomes predictable.
            </p>

            {/* Pillars */}
            <div className="mt-8 grid gap-3">
              {pillars.map((p, i) => (
                <Pillar key={p.title} index={i + 1} title={p.title} desc={p.desc} />
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/12 backdrop-blur shadow-2xl">
              <div className="p-4 sm:p-6">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-auto rounded-2xl ring-1 ring-white/10 bg-black/30"
                    loading="lazy"
                    style={{ filter: "grayscale(1) contrast(1.05)" }}
                  />
                ) : (
                  <div className="w-full h-[360px] sm:h-[440px] rounded-2xl ring-1 ring-white/10 bg-white/5 flex items-center justify-center text-white/50">
                    Add imageSrc to show your image
                  </div>
                )}
              </div>
            </div>

            {/* subtle badge */}
            <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:w-[78%] rounded-2xl bg-black/60 ring-1 ring-white/12 backdrop-blur px-4 py-3 shadow-2xl">
              <p className="text-sm text-white/70">
                Designed to be{" "}
                <span className="font-semibold text-white">repeatable</span>,{" "}
                <span className="font-semibold text-white">scalable</span>, and{" "}
                <span className="font-semibold text-white">trackable</span>.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Pillar({ index, title, desc }) {
  return (
    <div className="group rounded-2xl bg-white/5 ring-1 ring-white/12 backdrop-blur p-4 transition hover:bg-white/8 hover:shadow-2xl">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-xs font-semibold text-white/75">
          {index}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-white/90">{title}</p>
          <p className="mt-1 text-sm text-white/65 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}
