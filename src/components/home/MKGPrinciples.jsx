import React from "react";

const DEFAULT_PRINCIPLES = [
  { title: "Systems > Posts", desc: "We build repeatable engines so marketing compounds over time." },
  { title: "Clarity Wins", desc: "Clear offers, clear messaging, and clear next steps drive action." },
  { title: "Trust is a Feature", desc: "Consistency, proof, and experience across every touchpoint." },
  { title: "Design With Intent", desc: "Every section has a job: guide, reassure, and convert." },
  { title: "Performance Matters", desc: "Fast sites and clean UX are trust signals that convert better." },
  { title: "Iterate Monthly", desc: "Measure, learn, refine — the system improves every month." },
];

export default function MKGPrinciplesRail({
  title = "MKG Principles",
  subtitle = "The standards we use to design marketing systems that scale.",
  principles = DEFAULT_PRINCIPLES,
  accent = "#5D8AA8",
}) {
  return (
    <section className="w-full bg-[#c9ada7] px-4 sm:px-8 py-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left rail */}
        <header className="lg:col-span-4">
          <h2
            className="text-4xl font-semibold tracking-tight text-black"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            {title}
          </h2>
          <p className="mt-4 text-black/60 leading-relaxed max-w-sm">
            {subtitle}
          </p>

          {/* Accent rule */}
          <div
            className="mt-8 h-1 w-16 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </header>

        {/* Principles */}
        <div className="lg:col-span-8 space-y-6">
          {principles.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex gap-6 rounded-2xl bg-[#F4F7F2] p-6 sm:p-8 ring-1 ring-black/5 transition hover:ring-black/10"
            >
              {/* Index / Accent */}
              <div className="flex flex-col items-center">
                <span
                  className="text-sm font-medium"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="mt-2 w-px flex-1 opacity-40"
                  style={{ backgroundColor: accent }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60 max-w-xl">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
