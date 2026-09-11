import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "8B+",
    label: "Total Views",
    detail: "Generated",
  },
  {
    value: "75M+",
    label: "Video Engagements",
    detail: "Across Client Content",
  },
  {
    value: "5M+",
    label: "Followers Grown",
    detail: "100% Organic",
  },
  {
    value: "150K+",
    label: "Organic Website Visits",
    detail: "Generated in 2025",
  },
  {
    value: "+69%",
    label: "Demand Growth",
    detail: "QoQ · Q4 2025",
  },
];

export default function AuthorityStrip() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-10 sm:px-8 md:py-14">
      <div className="mx-auto w-full max-w-7xl">

        {/* Small section label */}
        <div className="mb-5 flex items-center gap-4">
          <span className="h-px w-8 bg-[#f0a608]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs">
            The Proof
          </p>
        </div>

        {/* Main stats strip */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a]">

          {/* subtle background glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 15% 50%, rgba(240,166,8,0.10), transparent 30%)",
            }}
          />

          {/* top gold accent */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[#f0a608] via-[#f0a608]/30 to-transparent" />

          <div className="relative grid grid-cols-2 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className={`
                  group relative px-5 py-8
                  sm:px-7 sm:py-10
                  lg:px-8 lg:py-12
                  ${
                    index !== stats.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : ""
                  }
                  ${
                    index < 4
                      ? "border-b border-white/10 lg:border-b-0"
                      : ""
                  }
                `}
              >
                {/* Number */}
                <div
                  className="text-[40px] font-semibold leading-none tracking-[-0.04em] text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-[46px] xl:text-[54px]"
                  style={{ fontFamily: "Kinta, sans-serif" }}
                >
                  {stat.value}
                </div>

                {/* Main label */}
                <div className="mt-4 text-sm font-medium text-white/80">
                  {stat.label}
                </div>

                {/* Detail */}
                <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-[11px]">
                  {stat.detail}
                </div>

                {/* hover accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f0a608] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Proof statement */}
        <div className="mt-5 flex items-center justify-end">
          <p className="text-xs uppercase tracking-[0.16em] text-black/35">
            Strategy backed by measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
}