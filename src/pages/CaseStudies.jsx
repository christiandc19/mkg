// src/pages/CaseStudies.jsx
import React from "react";
import { Link } from "react-router-dom";

const CASE_STUDIES = [
  {
    title: "Norwood Crossing",
    slug: "#",
    category: "Senior Living",
    outcome: "Website + lead system refresh",
    blurb:
      "A systems-first rebuild focused on clarity, speed, and conversion-ready messaging.",
    tags: ["Brand", "Website", "Lead Capture"],
  },
  {
    title: "Foxwood Springs",
    slug: "#",
    category: "Senior Living",
    outcome: "SEO + performance improvements",
    blurb:
      "A content + technical foundation designed to compound visibility over time.",
    tags: ["SEO", "Performance", "Content System"],
  },
  {
    title: "Oakdale Seniors Alliance",
    slug: "#",
    category: "Senior Living",
    outcome: "Multi-site structure + ops",
    blurb:
      "Standardized structure across properties to improve publishing and tracking.",
    tags: ["Operations", "Web", "Analytics"],
  },
  {
    title: "Robin Run Village",
    slug: "#",
    category: "Senior Living",
    outcome: "Campaign landing + reporting",
    blurb:
      "A clean funnel path from ad → landing page → lead with consistent reporting.",
    tags: ["Funnels", "Landing Pages", "Tracking"],
  },
  {
    title: "Asbury Heights",
    slug: "#",
    category: "Senior Living",
    outcome: "Brand alignment + content system",
    blurb:
      "Messaging cleanup and a repeatable content structure for ongoing growth.",
    tags: ["Brand", "Content", "Website"],
  },
  {
    title: "Canterbury Court",
    slug: "#",
    category: "Senior Living",
    outcome: "Site structure + conversion",
    blurb:
      "Information architecture and conversion-focused updates to the user journey.",
    tags: ["UX", "Structure", "Conversion"],
  },
  {
    title: "Lighthouse Pointe Village",
    slug: "#",
    category: "Senior Living",
    outcome: "Speed + technical cleanup",
    blurb:
      "Reduced bloat, tightened media handling, and improved load performance.",
    tags: ["Performance", "Caching", "Cleanup"],
  },
  {
    title: "Seneca Senior Living",
    slug: "#",
    category: "Senior Living",
    outcome: "Brand system foundation",
    blurb:
      "Consistent visuals and messaging across web touchpoints for trust and clarity.",
    tags: ["Brand System", "Web", "Messaging"],
  },
  {
    title: "Lakewood Village",
    slug: "#",
    category: "Senior Living",
    outcome: "Content + SEO structure",
    blurb:
      "Built a repeatable publishing flow to compound organic traffic and relevance.",
    tags: ["SEO", "Content", "Publishing"],
  },
  {
    title: "Embassy (Oakdale)",
    slug: "#",
    category: "Senior Living",
    outcome: "Lead capture + automation",
    blurb:
      "Streamlined lead intake with clearer routing and improved response workflows.",
    tags: ["Automation", "Leads", "Forms"],
  },
  {
    title: "Vanadium Woods",
    slug: "#",
    category: "Senior Living",
    outcome: "Website refresh + brand clarity",
    blurb:
      "Refined messaging and layout for a cleaner, more credible first impression.",
    tags: ["Website", "Brand", "UX"],
  },
];

function CaseStudyCard({ item }) {
  return (
    <Link
      to={`/case-studies/${item.slug}`}
      className="group block rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
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
          View
        </span>
      </div>

      <div className="mt-4 text-sm text-black/60">{item.blurb}</div>

      <div className="mt-5 text-sm font-medium text-black/70">
        Outcome: <span className="font-normal text-black/60">{item.outcome}</span>
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
        Read case study <span aria-hidden>→</span>
      </div>
    </Link>
  );
}

export default function CaseStudies() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="w-full bg-[#F4F7F2]">
        <div className="mx-auto w-[90%] max-w-6xl py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm tracking-wide text-black/60">
              Media King Group — Case Studies
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
              Systems that turn visibility into trust.
            </h1>

            <p className="mt-6 text-lg text-black/65 leading-relaxed">
              A curated set of wins across brand, websites, content engines, and
              lead capture. Each case study breaks down the problem, the system
              we built, and what changed after.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Browse Case Studies
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black/70 hover:text-black"
              >
                Work with MKG
              </Link>
            </div>
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
            <p className="mt-2 text-black/60">
              Click any card — you’ll wire each one to its own component later.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((item) => (
              <CaseStudyCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
