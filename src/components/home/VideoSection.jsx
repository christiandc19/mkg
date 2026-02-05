import { useEffect, useState } from "react";
import Typewriter from "./Typewriter"; // adjust path if needed

export default function VideoSection() {
  const videoSrc = `${import.meta.env.BASE_URL}video/reel.mp4`;

  const line1 = "be seen.";
  const line2 = "BE SEEN.";

  const speed = 80;
  const line1Duration = line1.length * speed;

  const [startLine2, setStartLine2] = useState(false);

  useEffect(() => {
    setStartLine2(false);
    const t = setTimeout(() => setStartLine2(true), line1Duration + 250);
    return () => clearTimeout(t);
  }, [line1Duration]);

  return (
    <section className="px-6 sm:px-10 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        {/* Video */}
        <video
          className="h-[80vh] w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <div className="leading-tight text-white">


            <div
              style={{
                fontFamily: "Kinta, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                letterSpacing: "-0.02em",
                marginTop: "-0.2em",
                minHeight: "1.1em",
              }}
            >
              {startLine2 ? (
                <Typewriter
                  text={line2}
                  speed={speed}
                  cursor
                  stopCursorOnDone
                />
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
