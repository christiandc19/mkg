import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollGrowText() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle → strong growth as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 1]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-visible"
    >
        <motion.h1
        style={{
            fontSize: "clamp(3rem, 12vw, 14rem)",
            scale,
            opacity,
        }}
        className="
            w-full
            text-center
            font-semibold
            leading-none
            tracking-tight
            select-none
        "
        >
        MEDIA KING GROUP
        </motion.h1>

    </section>
  );
}
