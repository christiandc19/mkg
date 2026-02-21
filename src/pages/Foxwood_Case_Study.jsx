// src/components/case-studies/Foxwood_Case_Study.jsx
import React from "react";
import FoxwoodImg from "../assets/images/foxwood_spring_case_study_img.webp";
import BG from "../assets/images/mkg-hero-bg.webp"; // or a Foxwood-specific hero image
import CaseStudyHero from "../pages/CaseStudyHero";
import { Link } from "react-router-dom";


export default function Foxwood_Case_Study() {
  return (
    <>

{/* Hero */}
<CaseStudyHero
        title="FOXWOOD SPRINGS"
        subtitle="From 0 to 43,000 on Instagram and 0 to 25,000 on TikTok in 9 months."
        watermark="MKG"
        bgImage={BG}
      />


{/* --------------------------------------------------------------------------- */}




<section className="w-full bg-white text-black ">
  <div className="mx-auto w-[90%] max-w-6xl py-20 sm:py-24">
    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* Copy */}
      <div>
        <p className="text-sm tracking-wide text-black/50">Case Study</p>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          Foxwood Springs Social Growth
        </h2>

        {/* Stat callouts */}
        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5">
            <p className="text-black/60 text-sm">Instagram</p>
            <p className="mt-1 text-2xl sm:text-3xl font-semibold">
              0 → 43,000{" "}
              <span className="text-black/50 text-base font-normal">
                in 9 months
              </span>
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5">
            <p className="text-black/60 text-sm">TikTok</p>
            <p className="mt-1 text-2xl sm:text-3xl font-semibold">
              0 → 25,000{" "}
              <span className="text-black/50 text-base font-normal">
                in 9 months
              </span>
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="mt-8 space-y-5 text-black/70 leading-relaxed">
          <p>
            We helped a group of senior living communities go from having no
            social media accounts to experiencing exponential growth in just a
            few months.
          </p>

          <p>
            Their goal was to shift the perception of senior living from being
            somber places to fun, vibrant communities. Through implementation
            of our viral marketing strategy, we significantly boosted their new
            social media accounts. They are now actively receiving brand deal
            offers, resulting in a new stream of income for their respective
            communities.
          </p>

          <p>
            Additionally, they have seen an increase in website visits, with
            around{" "}
            <span className="text-black font-semibold">
              1,000 clicks per month
            </span>{" "}
            organically generated from their social media platforms.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
          <img
            src={FoxwoodImg}
            alt="Foxwood Springs Instagram account showing follower count and views"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <p className="mt-3 text-xs text-black/40">
          Screenshot: Foxwood Springs Instagram performance.
        </p>
      </div>

    </div>
  </div>
</section>    



{/* ------------------------------------------------------------------ */}

{/* FINAL HOME CTA */}
<div className="bg-black px-5 sm:px-8">
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 py-16 sm:py-20 text-center">
    <h2
      className="text-white font-semibold tracking-tight leading-tight"
      style={{
        fontFamily: "Kinta, sans-serif",
        fontSize: "clamp(2rem, 6vw, 2.5rem)", // ✅ responsive
      }}
    >
      Build the system that scales your brand.
    </h2>

    <p className="max-w-xl text-white/60 text-sm sm:text-base leading-relaxed px-2">
      Book a call and let’s architect your growth.
    </p>

    <Link
      to="/contact"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="
        inline-flex items-center justify-center
        rounded-full bg-white text-black font-semibold
        px-6 py-3 text-sm
        hover:bg-white/90 transition
        w-full max-w-[280px] sm:w-auto
      "
    >
      Book a call
    </Link>
  </div>
</div>




</>
  );
}