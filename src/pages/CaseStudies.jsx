// src/pages/CaseStudies.jsx
import { motion } from "framer-motion";
import Typewriter from "../components/home/Typewriter";
import BG from "../assets/images/mkg-hero-bg.webp";
import { Link } from "react-router-dom";

const CASE_STUDIES = [
  {
    title: "Foxwood Springs",
    slug: "foxwood-springs",
    category: "Senior Living",
    outcome: "Viral social growth + brand deals",
    blurb:
      "From zero social presence to exponential reach—now driving organic clicks and brand deal income.",
    tags: ["Social Growth", "Viral Strategy", "Organic Traffic"],
  },
  {
  title: "Beverly Hills Dentist",
  slug: "beverly-hills-dentist",
  category: "Dental",
  outcome: "Brand + content + growth",
  blurb:
    "Scaled an established brand into massive reach and monetization through brand deals.",
  tags: ["Social Growth", "Content", "Brand Deals"],
},
  {
    title: "Oakdale Seniors Alliance",
    slug: null,
    category: "Senior Living",
    outcome: "Multi-site structure + ops",
    blurb:
      "Standardized structure across properties to improve publishing, tracking, and consistency.",
    tags: ["Operations", "Web", "Analytics"],
  },
  {
    title: "Design Firm",
    slug: null,
    category: "Design",
    outcome: "Portfolio + positioning system",
    blurb:
      "A refined presentation system built to showcase work clearly and win higher-value projects.",
    tags: ["Positioning", "Portfolio", "Web"],
  },
  {
    title: "Entertainment Page",
    slug: null,
    category: "Media",
    outcome: "Content engine + growth strategy",
    blurb:
      "Built a repeatable publishing system to drive reach, retention, and consistent audience growth.",
    tags: ["Content", "Growth", "Publishing"],
  },
];

function CaseStudyCard({ item }) {
  const isClickable = Boolean(item.slug);

  const CardInner = () => (
    <div className="group block rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs tracking-wide text-black/50">
            {item.category}
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-tight">
            {item.title}
          </h3>
        </div>

        <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60">
          {isClickable ? "View" : "Coming soon"}
        </span>
      </div>

      <div className="mt-4 text-sm text-black/60">{item.blurb}</div>

      <div className="mt-5 text-sm font-medium text-black/70">
        Outcome:{" "}
        <span className="font-normal text-black/60">{item.outcome}</span>
      </div>

      {item.tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black/60 group-hover:text-black">
        {isClickable ? (
          <>
            Read case study <span aria-hidden>→</span>
          </>
        ) : (
          <>Details coming soon</>
        )}
      </div>
    </div>
  );

  if (!isClickable) return <article className="opacity-90">{CardInner()}</article>;

  return (
    <Link to={`/case-studies/${item.slug}`} className="block">
      <CardInner />
    </Link>
  );
}

export default function CaseStudies() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section
        className="relative min-h-[75vh] sm:min-h-[75vh] lg:min-h-[80vh] px-5 sm:px-8 md:px-10 pb-12 overflow-hidden text-white flex items-center"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

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
            MKG
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
                <Typewriter text="CASE STUDIES" speed={90} />
              </h1>
            </motion.div>

            <p className="mt-5 sm:mt-6 max-w-xl text-white/70 text-sm sm:text-base leading-relaxed px-2">
              A curated set of wins across brand, websites, content engines, and
              lead capture. Each case study breaks down the problem, the system
              we built, and what changed after.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="w-full bg-white">
        <div className="mx-auto w-[90%] max-w-6xl py-10">
          <div className="border-t border-black/10" />
        </div>
      </section>

      {/* GRID */}
      <section id="case-studies" className="w-full bg-white">
        <div className="mx-auto w-[90%] max-w-6xl pb-24">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              All Case Studies
            </h2>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((item, idx) => (
              <CaseStudyCard key={`${item.title}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}