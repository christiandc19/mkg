import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../components/home/Typewriter"; // adjust if your path differs

export default function CaseStudyHero({
  title = "CASE STUDY",
  subtitle = "",
  watermark = "MKG",
  bgImage,
  overlayClassName = "bg-black/70",
}) {
  return (
    <section
      className="relative min-h-[75vh] sm:min-h-[75vh] lg:min-h-[80vh] px-5 sm:px-8 md:px-10 pb-12 overflow-hidden text-white flex items-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional dark overlay for readability */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="select-none"
          style={{
            fontFamily: "Kinta, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(7rem, 24vw, 30rem)",
            lineHeight: 1,
            opacity: 0.05,
            letterSpacing: "-0.04em",
            color: "white",
          }}
        >
          {watermark}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mt-10 sm:mt-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h1
              className="leading-none tracking-tight"
              style={{
                fontSize: "clamp(2.75rem, 10vw, 6rem)",
                fontFamily: "Kinta, sans-serif",
                fontWeight: 400,
              }}
            >
              <Typewriter text={title} speed={90} />
            </h1>
          </motion.div>

          {subtitle ? (
            <p className="mt-5 sm:mt-6 max-w-xl text-white/70 text-sm sm:text-base leading-relaxed px-2">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}