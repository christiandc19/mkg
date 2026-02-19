import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Without Media King Group's help, we simply would not exist. They are experts who are thorough at everything they do.",
    name: "Rob",
    title: "Racial Beginners",
  },
  {
    quote:
      "Media King Group gave me the push and direction I needed to grow my photography business. They saw what I had and elevated it while keeping the core of who and what I wanted my business to be at the forefront.",
    name: "Camille",
    title: "Camille V Photography",
  },
  {
    quote:
      "They have an uncanny knack for grasping our vision, goals, and target audience. Every project completed has reaped immediate results for my business.",
    name: "Joy Johnson-Carruthers",
    title: "CEO at JTraining Solutions",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-6 py-24 bg-black">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>

            {/* Quote */}
            <p
              className="leading-relaxed text-white/85"
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                fontFamily:
                  "'Roboto', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 400,
              }}
            >
              “{testimonials[index].quote}”
            </p>

            {/* Author */}
            <div
              className="text-xs uppercase tracking-widest text-white/55"
              style={{
                fontFamily: "'Roboto', system-ui, sans-serif",
                fontWeight: 500,
              }}
            >
              {testimonials[index].name} — {testimonials[index].title}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffc107">
      <path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 16.9 5.8 20.1l1.6-6.7L2.2 8.9l6.9-.6L12 2z" />
    </svg>
  );
}
