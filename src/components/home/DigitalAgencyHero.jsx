import React from "react";
import { motion } from "framer-motion";

export default function DigitalAgencyHero({ personSrc, citySrc }) {
  return (
    <section className="relative w-full px-4 sm:px-8 py-16 md:py-24 bg-[#0b0b0b] overflow-hidden">
      {/* ✅ Subtle “silver” top border (brand: black + gray) */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-50"
        style={{ height: "2px" }}
      >
        {/* Base thin gray line */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(240, 166, 8, 0.45), rgba(255,255,255,0.18))",
            opacity: 0.7,
          }}
        />

        {/* Shimmer layer (white/gray “shine”) */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "55%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0) 90%, transparent 100%)",
            filter: "drop-shadow(0 0 6px rgba(255,255,255,0.25))",
          }}
          initial={{ x: "-70%" }}
          animate={{ x: "190%" }}
          transition={{ duration: 3.2, ease: "linear", repeat: Infinity }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 bg-[#0f0f10]">
          <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-2">
            {/* LEFT */}
            <div className="relative bg-[#0f0f10] px-8 py-10 sm:px-10 sm:py-12">
              <div className="relative max-w-md">
                <p className="text-2xl font-semibold text-white/70">
                  Your brand doesn’t need more content.
                </p>

                <h1
                  className="mt-2 text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-tight text-white"
                  style={{ fontFamily: "Kinta, sans-serif" }}
                >
                  It needs
                  <br />
                  a system.
                </h1>

                <p className="mt-8 text-lg font-semibold text-white/65">
                  Media King Group designs and operates high-performing digital
                  ecosystems — brand identity, content engines, websites,
                  funnels, and strategy — built to grow visibility, trust, and
                  revenue over time.
                </p>

                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
                  Learn more about MKG
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative bg-[#121214]">
              {/* Soft gradient wash for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-black/40" />

              {citySrc && (
                <img
                  src={citySrc}
                  alt="City"
                  className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
                />
              )}

              {/* Optional subtle noise-ish feel (super light) */}
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 28px)",
                  mixBlendMode: "soft-light",
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 sm:px-10">
                <p className="mt-24 ml-auto text-xs tracking-[0.35em] text-white/35" />
              </div>
            </div>
          </div>

          {/* PERSON */}
          {personSrc && (
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-[260px] -translate-x-1/2 md:left-[56%] md:w-[360px] lg:w-[410px]">
              <img
                src={personSrc}
                alt="Person"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
