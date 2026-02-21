// src/components/case-studies/Foxwood_Case_Study.jsx
import React from "react";
import BDFollowers from "../assets/images//beverly-hills-dentist-followers.png";
import BDOverview from "../assets/images//beverly-hills-dentist-overview.png";

import BG from "../assets/images/mkg-hero-bg.webp"; // or a Foxwood-specific hero image
import CaseStudyHero from "../pages/CaseStudyHero";
import { Link } from "react-router-dom";


export default function Foxwood_Case_Study() {
  return (
    <>

{/* Hero */}
<CaseStudyHero
        title="BEVERLY HILLS DENTIST"
        subtitle="Instagram 61.7K → 200K • TikTok 2.5K → 318.6K"
        watermark="MKG"
        bgImage={BG}
      />


{/* --------------------------------------------------------------------------- */}




<section className="w-full bg-white text-black">
        <div className="mx-auto w-[90%] max-w-6xl py-20 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Copy */}
            <div>
              <p className="text-sm tracking-wide text-black/50">Case Study</p>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Beverly Hills Dentist Growth
              </h2>

              {/* Stat callouts */}
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5">
                  <p className="text-black/60 text-sm">Instagram</p>
                  <p className="mt-1 text-2xl sm:text-3xl font-semibold">
                    61.7K → 200K{" "}
                    <span className="text-black/50 text-base font-normal">
                      followers
                    </span>
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5">
                  <p className="text-black/60 text-sm">TikTok</p>
                  <p className="mt-1 text-2xl sm:text-3xl font-semibold">
                    2.5K → 318.6K{" "}
                    <span className="text-black/50 text-base font-normal">
                      followers
                    </span>
                  </p>
                </div>
              </div>

              {/* Story */}
              <div className="mt-8 space-y-5 text-black/70 leading-relaxed">
                <p>
                  We were able to take an already established brand with a Beverly
                  Hills dentist and take it to the next level.
                </p>

                <p>
                  Their goal was to expand and inform as well as sell their products
                  to future clientele and an already existing audience alike. With our
                  guidance, their Instagram grew from{" "}
                  <span className="font-semibold text-black">
                    61,700 to 200,000
                  </span>{" "}
                  followers as well as their TikTok from{" "}
                  <span className="font-semibold text-black">
                    2,500 to 318,600
                  </span>{" "}
                  and counting.
                </p>

                <p>
                  In account of their vastly expanding platform, they have locked in a
                  substantial amount in brand deals.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
                <img
                  src={BDOverview}
                  alt="Beverly Hills Dentist account overview"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
                <img
                  src={BDFollowers}
                  alt="Beverly Hills Dentist followers growth"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-xs text-black/40">
                Screenshots: Account overview and follower growth performance.
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