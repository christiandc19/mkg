import React from "react";

const DEFAULT_PRINCIPLES = [
  { title: "Systems > Posts", desc: "We build repeatable engines so marketing compounds over time.", accent: "signal" },
  { title: "Clarity Wins", desc: "Clear offers, clear messaging, and clear next steps drive action.", accent: "play" },
  { title: "Trust is a Feature", desc: "Consistency, proof, and experience across every touchpoint.", accent: "badge" },
  { title: "Design With Intent", desc: "Every section has a job: guide, reassure, and convert.", accent: "layout" },
  { title: "Performance Matters", desc: "Fast sites and clean UX are trust signals that convert better.", accent: "chart" },
  { title: "Iterate Monthly", desc: "Measure, learn, refine — the system improves every month.", accent: "loop" },
];

export default function MKGPrinciples({
  title = "MKG Principles",
  subtitle = "A simple set of standards we use to build ecosystems that grow.",
  principles = DEFAULT_PRINCIPLES,
  accent = "#5D8AA8",
}) {
  return (
    <section className="w-full px-4 sm:px-8 py-16 bg-[#F4F7F2]">
      <div className="mx-auto w-[95%] lg:w-[90%]">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-black"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-black/60 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Same container style as ClientLogos */}
        <div className="relative overflow-hidden rounded-3xl bg-[#e9e0d9] p-6 sm:p-8 ring-1 ring-black/5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <article
                key={p.title}
                className="relative overflow-hidden rounded-2xl bg-[#F4F7F2] p-6 ring-1 ring-black/10 shadow-sm"
              >
                <CardAccent type={p.accent} accent={accent} />

                <h3 className="relative text-lg font-semibold text-black">
                  {p.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-black/60">
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Decorative accents */
function CardAccent({ type, accent }) {
  const base = "absolute rounded-full";
  switch (type) {
    case "signal":
      return <div className={`${base} -right-10 -top-10 h-40 w-40`} style={{ backgroundColor: accent, opacity: 0.12 }} />;
    case "play":
      return <div className={`${base} -left-12 -bottom-12 h-44 w-44`} style={{ backgroundColor: accent, opacity: 0.1 }} />;
    case "badge":
      return <div className={`${base} -right-14 -top-14 h-52 w-52`} style={{ backgroundColor: accent, opacity: 0.08 }} />;
    case "layout":
      return <div className={`${base} -left-16 -top-16 h-56 w-56`} style={{ backgroundColor: accent, opacity: 0.07 }} />;
    case "chart":
      return <div className={`${base} -right-20 -bottom-20 h-64 w-64`} style={{ backgroundColor: accent, opacity: 0.08 }} />;
    case "loop":
      return <div className={`${base} -left-20 -bottom-20 h-64 w-64`} style={{ backgroundColor: accent, opacity: 0.08 }} />;
    default:
      return null;
  }
}
