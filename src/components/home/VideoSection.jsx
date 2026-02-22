import { useEffect, useMemo, useRef, useState } from "react";
import Typewriter from "./Typewriter";

export default function VideoSection() {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  const videoSrc = `${import.meta.env.BASE_URL}video/video.mp4`;
  const line2 = "DIRECTING BRANDS FOR IMPACT..";
  const speed = 80;

  const line2Duration = useMemo(() => line2.length * speed, [line2, speed]);

  const [hasEntered, setHasEntered] = useState(false);
  const [toCorner, setToCorner] = useState(false);
  const [centerTransform, setCenterTransform] = useState(
    "translate(0px, 0px) scale(1)"
  );

  // 1) Measure centered transform (responsive)
  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text) return;

    const compute = () => {
      const w = wrap.getBoundingClientRect();
      const t = text.getBoundingClientRect();

      const targetX = w.width / 2 - t.width / 2;
      const targetY = w.height / 2 - t.height / 2;

      setCenterTransform(`translate(${targetX}px, ${targetY}px) scale(1)`);
    };

    compute();

    const ro = new ResizeObserver(compute);
    ro.observe(wrap);

    return () => ro.disconnect();
  }, []);

  // 2) Trigger only when scrolled into view (reliable on refresh)
  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    const markEntered = () => setHasEntered(true);

    // If already visible (e.g., refresh restores scroll position), trigger immediately
    const rect = el.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
    if (alreadyVisible) {
      markEntered();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markEntered();
          observer.disconnect(); // run once
        }
      },
      {
        threshold: 0.1, // ✅ forgiving
        rootMargin: "0px 0px -15% 0px", // ✅ trigger a bit later
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 3) After typing finishes, glide to corner
  useEffect(() => {
    if (!hasEntered) return;

    setToCorner(false);
    const t = setTimeout(() => setToCorner(true), line2Duration + 700);
    return () => clearTimeout(t);
  }, [hasEntered, line2Duration]);

  const cornerX = 24;
  const cornerY = 24;
  const cornerScale = 0.75;

  return (
    <section className="px-6 sm:px-10 py-20 bg-black">
      <div
        ref={wrapRef}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl"
      >
        <video
          className="h-[80vh] w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/40" />

        {/* ✅ Bigger sentinel = more reliable */}
        <div
          ref={triggerRef}
          className="absolute left-0 top-[60%] h-6 w-6 opacity-0 pointer-events-none"
        />

        {/* One overlay element that GLIDES using transforms */}
        <div
          className="absolute top-0 left-0 z-10 text-white will-change-transform"
          style={{
            transform: toCorner
              ? `translate(${cornerX}px, ${cornerY}px) scale(${cornerScale})`
              : centerTransform,
            transformOrigin: "top left",
            transition: hasEntered
              ? "transform 1400ms cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
        >
          <div
            ref={textRef}
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 6vw, 3rem)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            {hasEntered ? (
              // key ensures Typewriter always starts fresh when it begins
              <Typewriter
                key="hero-line2"
                text={line2}
                speed={speed}
                cursor
                stopCursorOnDone
              />
            ) : (
              <span className="opacity-0">{line2}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}