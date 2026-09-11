import React from "react";
import { motion } from "framer-motion";

export default function DigitalAgencyHero({ personSrc, citySrc }) {
  const stats = [
    { value: "8B+", label: "Total Views" },
    { value: "75M+", label: "Video Engagements" },
    { value: "5M+", label: "Followers Grown" },
    { value: "150K+", label: "Organic Website Visits" },
    { value: "+69%", label: "QoQ Demand Growth" },
  ];

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#080808] text-white">

      {/* CITY BACKGROUND */}
      {citySrc && (
        <img
          src={citySrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18] grayscale"
        />
      )}

      {/* PERSON */}
      {personSrc && (
        <motion.img
          src={personSrc}
          alt=""
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[-40px]
            hidden
            h-[92%]
            w-auto
            object-contain
            md:block
            lg:right-[2%]
          "
        />
      )}

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* GIANT MKG WATERMARK */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-40px]
          top-[46%]
          hidden
          -translate-y-1/2
          select-none
          text-[220px]
          font-black
          tracking-[-0.08em]
          text-white/[0.025]
          lg:block
        "
        style={{ fontFamily: "Kinta, sans-serif" }}
      >
        MKG
      </div>

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl flex-col px-6 sm:px-8 lg:px-12">

        {/* MAIN CONTENT */}
        <div className="flex flex-1 items-center py-24">
          <div className="max-w-4xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-6
                text-xs
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#f0a608]
                sm:text-sm
              "
            >
              A Full-Service Brand, Media & Growth Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="
                max-w-5xl
                text-[52px]
                font-semibold
                leading-[0.92]
                tracking-[-0.045em]
                sm:text-[68px]
                lg:text-[88px]
                xl:text-[104px]
              "
              style={{ fontFamily: "Kinta, sans-serif" }}
            >
              We build brands,
              <br />
              media systems,
              <br />
              and digital
              <br />
              ecosystems
              <span className="text-white/35"> that scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-white/60
                sm:text-lg
                lg:text-xl
              "
            >
              Media King Group helps founders, companies, and creators turn
              attention into authority — and authority into revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/contact"
                className="
                  rounded-full
                  bg-[#f0a608]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:scale-[1.03]
                "
              >
                Book a Call →
              </a>

              <a
                href="/case-studies"
                className="
                  rounded-full
                  border
                  border-white/20
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:border-white/50
                  hover:bg-white/5
                "
              >
                See the Proof →
              </a>
            </motion.div>
          </div>
        </div>

        {/* PROOF STRIP BUILT INTO HERO */}
        <div className="border-t border-white/10 py-7">
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.45 + index * 0.08,
                }}
                className="
                  border-white/10
                  pr-4
                  lg:border-r
                  lg:px-5
                  first:lg:pl-0
                  last:lg:border-r-0
                "
              >
                <div className="text-2xl font-semibold sm:text-3xl">
                  {stat.value}
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-white/35">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}