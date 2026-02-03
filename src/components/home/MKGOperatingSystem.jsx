import React from "react";
import { motion } from "framer-motion";
import Chart from "../../assets/images/chart.png";

export default function MKGOperatingSystem({
  imageSrc = Chart,
  imageAlt = "MKG Operating System",
}) {
  const pillars = [
    {
      title: "Diagnose",
      desc: "We gain radical clarity on your brand, audience, and objectives.",
    },
    {
      title: "Architect",
      desc: "We design your brand, media, and digital infrastructure.",
    },
    {
      title: "Build",
      desc: "We execute everything — content, design, development, systems.",
    },
    {
      title: "Amplify",
      desc: "We optimize, distribute, and scale performance.",
    },
    {
      title: "Maintain & Grow",
      desc: "We evolve the ecosystem as your business grows.",
    },
  ];

  return (
    <section className="px-5 sm:px-8 md:px-10 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* TEXT */}
          <div className="text-left md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs uppercase tracking-widest text-black/60 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
              The MKG Operating System
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight"
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              A principle-driven approach to sustainable growth.
            </motion.h2>

            <p className="mt-4 text-black/70 leading-relaxed max-w-xl mx-auto md:mx-0">
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

            {/* CTA (optional) */}
            {/* <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-sm border border-black/10 bg-black text-white hover:opacity-90 transition"
              >
                Build My Operating System
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold border border-black/10 bg-white/60 hover:bg-white/80 backdrop-blur transition"
              >
                See What’s Included
              </a>
            </div> */}
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-black/10 bg-white/50 backdrop-blur shadow-sm">
              <div className="p-4 sm:p-6">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-auto rounded-2xl border border-black/10 bg-white"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-[360px] sm:h-[440px] rounded-2xl border border-black/10 bg-white/60 flex items-center justify-center text-black/50">
                    Add imageSrc to show your image
                  </div>
                )}
              </div>
            </div>

            {/* subtle badge */}
            <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:w-[78%] rounded-2xl border border-black/10 bg-white/80 backdrop-blur px-4 py-3 shadow-sm">
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

function Pillar({ index, title, desc }) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-white/50 backdrop-blur p-4 transition hover:bg-white/70 hover:shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-semibold text-black/70">
          {index}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-black/90">{title}</p>
          <p className="mt-1 text-sm text-black/70 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}
