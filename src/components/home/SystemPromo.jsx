import React from "react";
import { motion } from "framer-motion";
import Imac from "../../assets/images/imac.png";

export default function SystemPromo() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-8 md:py-32">
      {/* Large background word */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          text-[110px]
          font-semibold
          tracking-[-0.06em]
          text-black/[0.025]
          sm:text-[170px]
          lg:text-[250px]
          xl:text-[320px]
        "
        style={{ fontFamily: "Kinta, sans-serif" }}
      >
        SYSTEM
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#f0a608]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
                Built to Compound
              </p>
            </div>

            <h2
              className="
                text-[46px]
                font-semibold
                leading-[0.95]
                tracking-[-0.045em]
                text-black
                sm:text-[60px]
                md:text-[72px]
                lg:text-[82px]
              "
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              Your brand doesn't
              <br />
              need more content.
              <br />

              <span className="text-black/30">
                It needs a system.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-[1.75] text-black/55">
              Media King Group designs and operates high-performing digital
              ecosystems — brand identity, content engines, websites, and
              strategy — built to grow visibility, trust, and revenue that
              compound over time.
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
              <span className="h-[6px] w-[6px] rounded-full bg-[#f0a608]" />
              Strategy first. Systems always.
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            {/* Soft glow */}
            <div className="absolute h-[70%] w-[70%] rounded-full bg-[#f0a608]/10 blur-3xl" />

            {/* Image frame */}
            <div className="relative w-full max-w-[560px]">
              <img
                src={Imac}
                alt="Media King Group digital ecosystem"
                className="relative z-10 h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}