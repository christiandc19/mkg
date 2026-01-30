// src/components/IntroReveal.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Intro reveal animation:
 * - Full-screen overlay with text
 * - Zoom out (show full word)
 * - Zoom in (one letter fills screen)
 * - Overlay fades out to reveal page
 */
export default function IntroReveal({ children }) {
  const [done, setDone] = useState(false);

  // total duration matches the animation timeline below
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {children}

{/* INTRO REVEAL OVERLAY */}
<AnimatePresence>
  {!introDone && (
    <motion.div
      key="intro"
      className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ background: "#0b0b0e" }}
    >
      {/* Text (ensure it's always visible) */}
      <motion.div
        className="select-none font-black uppercase whitespace-nowrap"
        style={{
          color: "white",
          letterSpacing: "-0.06em",
          lineHeight: 0.85,
          fontSize: "clamp(44px, 10vw, 140px)",
          willChange: "transform",
          zIndex: 2,
        }}
        initial={{ scale: 1 }}          // start readable
        animate={{ scale: [1, 18] }}    // zoom IN so a letter fills the screen
        transition={{
          duration: 1.6,
          ease: "easeInOut",
        }}
      >
        MEDIA KING GROUP
      </motion.div>

      {/* Optional: subtle fade overlay behind text (does NOT cover text) */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.06), rgba(0,0,0,0) 55%)", zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
