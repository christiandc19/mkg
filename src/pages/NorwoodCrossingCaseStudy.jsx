// src/pages/NorwoodCrossingCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BG from "../assets/images/mkg-hero-bg.webp";

export default function NorwoodCrossingCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Norwood Crossing SEO Case Study | Media King Group";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const previousDescription =
      metaDescription?.getAttribute("content");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "A look at Norwood Crossing's organic search footprint within the Oakdale Seniors Alliance network, including traffic, ranking keywords, and equivalent paid-media value."
    );

    return () => {
      document.title = previousTitle;

      if (metaDescription && previousDescription !== null) {
        metaDescription.setAttribute(
          "content",
          previousDescription
        );
      }
    };
  }, []);

  const metrics = [
    {
      value: "1,700",
      label: "Monthly Organic Visits",
      detail: "Estimated monthly traffic generated through organic search.",
    },
    {
      value: "~250",
      label: "Ranking Keywords",
      detail: "Search queries currently contributing to Norwood Crossing's organic footprint.",
    },
    {
      value: "~$8.3K",
      label: "Monthly Ad Value",
      detail: "Estimated monthly Google Ads equivalent value of the organic traffic.",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          flex
          min-h-[74vh]
          items-end
          overflow-hidden
          px-5
          pb-16
          pt-32
          text-white
          sm:px-8
          sm:pb-20
          md:min-h-[78vh]
          md:pb-24
        "
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/35
            to-black/25
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-4%]
            top-1/2
            -translate-y-1/2
            select-none
            whitespace-nowrap
            text-white/[0.035]
          "
          style={{
            fontFamily: "Kinta, sans-serif",
            fontSize: "clamp(9rem, 26vw, 28rem)",
            lineHeight: 1,
            letterSpacing: "-0.06em",
          }}
        >
          MKG
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-5xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-9 bg-[#f0a608]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-white/50
                  sm:text-[10px]
                "
              >
                Oakdale Network · SEO Performance Spotlight
              </span>
            </div>

            <h1
              className="
                text-[46px]
                leading-[0.92]
                tracking-[-0.045em]
                text-white
                sm:text-[64px]
                md:text-[80px]
                lg:text-[96px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              Norwood
              <br />
              Crossing
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-[15px]
                leading-[1.7]
                text-white/60
                sm:text-lg
                md:text-xl
              "
            >
              Organic visibility with measurable media value.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Organic Search",
                "SEO",
                "Senior Living",
                "Oakdale Network",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-4
                    py-2
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-white/55
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div
            className="
              grid
              gap-12
              md:grid-cols-[0.85fr_1.15fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel>
                Organic Performance
              </SectionLabel>

              <h2
                className="
                  text-[40px]
                  leading-[0.98]
                  tracking-[-0.04em]
                  sm:text-[50px]
                  md:text-[60px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Search visibility
                <br />

                <span className="text-black/25">
                  with real economic value.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p
                className="
                  text-lg
                  leading-[1.8]
                  text-black/60
                  md:text-xl
                "
              >
                Norwood Crossing is part of the broader Oakdale Seniors
                Alliance network and stands out for the strength of its
                organic search footprint.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The site currently attracts approximately 1,700 organic
                visits per month across roughly 250 ranking keywords.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That visibility carries an estimated equivalent paid-search
                value of roughly $8,300 every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROOF
      ====================================================== */}

      <section
        className="
          bg-[#0b0b0c]
          px-5
          py-20
          text-white
          sm:px-8
          md:py-28
        "
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel dark>
            The Numbers
          </SectionLabel>

          <div
            className="
              mt-10
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
            "
          >
            <div className="grid md:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`
                    p-7
                    sm:p-9
                    lg:p-12

                    ${
                      index !== metrics.length - 1
                        ? "border-b border-white/10 md:border-b-0 md:border-r"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      text-[52px]
                      leading-none
                      tracking-[-0.05em]
                      text-white
                      sm:text-[64px]
                      lg:text-[72px]
                    "
                    style={{
                      fontFamily: "Kinta, sans-serif",
                    }}
                  >
                    {metric.value}
                  </div>

                  <p
                    className="
                      mt-5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#f0a608]
                    "
                  >
                    {metric.label}
                  </p>

                  <p
                    className="
                      mt-4
                      max-w-xs
                      text-sm
                      leading-[1.7]
                      text-white/40
                    "
                  >
                    {metric.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUE
      ====================================================== */}

      <section
        className="
          bg-[#f6f5f2]
          px-5
          py-20
          sm:px-8
          md:py-28
        "
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="
              grid
              gap-12
              md:grid-cols-[0.9fr_1.1fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel>
                Why It Matters
              </SectionLabel>

              <h2
                className="
                  text-[42px]
                  leading-[0.96]
                  tracking-[-0.045em]
                  sm:text-[56px]
                  md:text-[68px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Earn the traffic.
                <br />

                <span className="text-black/25">
                  Don&apos;t rent every click.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-black/60">
                Organic search is valuable because the visibility continues
                producing traffic without paying for each individual visit.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                At Norwood Crossing, the current organic footprint is
                equivalent to approximately $8,300 per month in estimated
                Google Ads traffic value.
              </p>
            </div>
          </div>

          <div
            className="
              mt-16
              rounded-[28px]
              bg-white
              p-7
              shadow-sm
              sm:p-10
              md:p-14
            "
          >
            <div
              className="
                grid
                gap-10
                md:grid-cols-[0.7fr_1.3fr]
                md:items-center
              "
            >
              <div>
                <div
                  className="
                    text-[68px]
                    leading-[0.85]
                    tracking-[-0.06em]
                    sm:text-[88px]
                  "
                  style={{
                    fontFamily: "Kinta, sans-serif",
                  }}
                >
                  ~$8.3K
                </div>

                <p
                  className="
                    mt-5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#b77800]
                  "
                >
                  Equivalent Monthly Ad Value
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-[30px]
                    leading-[1]
                    tracking-[-0.035em]
                    sm:text-[38px]
                  "
                  style={{
                    fontFamily: "Kinta, sans-serif",
                  }}
                >
                  Visibility that compounds.
                </h3>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-base
                    leading-[1.8]
                    text-black/50
                  "
                >
                  Instead of depending entirely on paid acquisition,
                  Norwood Crossing has built a meaningful organic search
                  channel capable of delivering qualified visibility month
                  after month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POSITION WITHIN NETWORK
      ====================================================== */}

      <section
        className="
          bg-[#0b0b0c]
          px-5
          py-20
          text-white
          sm:px-8
          md:py-28
        "
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="
              grid
              gap-12
              md:grid-cols-[0.9fr_1.1fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel dark>
                Inside The Oakdale Network
              </SectionLabel>

              <h2
                className="
                  text-[42px]
                  leading-[0.96]
                  tracking-[-0.045em]
                  sm:text-[56px]
                  md:text-[68px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Another digital
                <br />

                <span className="text-white/25">
                  front door working.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                Norwood Crossing adds another meaningful organic-search
                footprint to the broader Oakdale portfolio.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/60">
                Its performance reinforces the larger network strategy:
                create discoverable community-level digital properties rather
                than expecting one corporate website to carry every local
                market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DATA SCOPE
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>
            Current Data Scope
          </SectionLabel>

          <div
            className="
              grid
              gap-12
              md:grid-cols-[0.85fr_1.15fr]
              md:gap-20
            "
          >
            <div>
              <h2
                className="
                  text-[40px]
                  leading-[0.98]
                  tracking-[-0.04em]
                  sm:text-[50px]
                  md:text-[58px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                A focused
                <br />

                <span className="text-black/25">
                  performance snapshot.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                This spotlight focuses on the organic-search performance
                currently documented for Norwood Crossing.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Additional site, social, and inquiry data can be added as the
                community&apos;s broader performance dataset is compiled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA / NAVIGATION
      ====================================================== */}

      <section
        className="
          bg-[#f6f5f2]
          px-5
          py-20
          sm:px-8
          md:py-28
        "
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="
              rounded-[28px]
              border
              border-black/10
              bg-white
              p-7
              shadow-sm
              sm:p-10
              md:p-14
            "
          >
            <div
              className="
                grid
                gap-10
                md:grid-cols-[1fr_auto]
                md:items-end
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-black/35
                  "
                >
                  Oakdale Seniors Alliance
                </p>

                <h2
                  className="
                    mt-4
                    text-[38px]
                    leading-[0.98]
                    tracking-[-0.04em]
                    sm:text-[48px]
                    md:text-[56px]
                  "
                  style={{
                    fontFamily: "Kinta, sans-serif",
                  }}
                >
                  See the full network story.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-[1.7]
                    text-black/50
                  "
                >
                  One unified brand. Multiple community-level digital
                  ecosystems. One compounding growth system.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale-seniors-alliance"
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:text-[#b77800]
                "
              >
                Explore Oakdale
                <span>→</span>
              </Link>
            </div>
          </div>

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-x-8
              gap-y-4
            "
          >
            <Link
              to="/case-studies/oakdale/canterbury-place"
              className="
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-black/45
                transition
                hover:text-black
              "
            >
              ← Canterbury Place
            </Link>

            <Link
              to="/case-studies"
              className="
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-black/45
                transition
                hover:text-black
              "
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function SectionLabel({
  children,
  dark = false,
}) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span className="h-px w-8 shrink-0 bg-[#f0a608]" />

      <span
        className={`
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.25em]
          sm:text-[10px]
          ${dark ? "text-white/40" : "text-black/40"}
        `}
      >
        {children}
      </span>
    </div>
  );
}