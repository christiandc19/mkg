// src/pages/ChristianCareAllenCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ChristianCareLogo from "../assets/images/CCCS-Logo.png";

const CHRISTIAN_CARE_ALLEN_HERO =
  "https://christiancareallen.org/wp-content/uploads/2026/04/cc-allen-hero.webp";

export default function ChristianCareAllenCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Christian Care Allen Case Study | Senior Living Marketing | Media King Group";

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
      "How Media King Group built Christian Care Allen's dedicated website, local SEO presence, and organic social audience from the ground up."
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

  const socialResults = [
    {
      value: "43K+",
      label: "Total Followers",
      detail: "Built organically from zero",
    },
    {
      value: "18.8M",
      label: "Combined Views",
      detail: "Organic social video performance",
    },
    {
      value: "5.3M",
      label: "Instagram Reach",
      detail: "Expanded awareness beyond the local audience",
    },
    {
      value: "900K+",
      label: "Interactions",
      detail: "Organic audience engagement",
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
          min-h-[84vh]
          items-end
          overflow-hidden
          px-5
          pb-16
          pt-36
          text-white
          sm:px-8
          sm:pb-20
          md:min-h-[88vh]
          md:pb-24
          lg:min-h-[92vh]
        "
        style={{
          backgroundImage: `url(${CHRISTIAN_CARE_ALLEN_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/48" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/95
            via-black/62
            to-black/10
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-transparent
            to-black/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-48
            -left-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#f0a608]/10
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-4%]
            top-1/2
            hidden
            -translate-y-1/2
            select-none
            whitespace-nowrap
            text-white/[0.035]
            lg:block
          "
          style={{
            fontFamily: "Kinta, sans-serif",
            fontSize: "clamp(9rem, 24vw, 28rem)",
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
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mb-7"
            >
              <div
                className="
                  inline-flex
                  items-center
                  rounded-[16px]
                  bg-white
                  px-5
                  py-3.5
                  shadow-[0_15px_50px_rgba(0,0,0,0.22)]
                  sm:px-6
                  sm:py-4
                "
              >
                <img
                  src={ChristianCareLogo}
                  alt="Christian Care Communities & Services"
                  className="
                    h-auto
                    max-h-[50px]
                    w-auto
                    max-w-[220px]
                    object-contain
                    sm:max-h-[58px]
                    sm:max-w-[260px]
                  "
                />
              </div>
            </motion.div>

            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-9 bg-[#f0a608]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-white/55
                  sm:text-[10px]
                "
              >
                Oakdale Network · Community Case Study 07
              </span>
            </div>

            <h1
              className="
                text-[44px]
                leading-[0.92]
                tracking-[-0.045em]
                text-white
                sm:text-[62px]
                md:text-[78px]
                lg:text-[94px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              Christian Care
              <br />
              Allen
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-[15px]
                leading-[1.7]
                text-white/65
                sm:text-lg
                md:text-xl
              "
            >
              Every community deserves its own front door.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Website Rebuild",
                "Local SEO",
                "Organic Social",
                "Audience Growth",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/15
                    bg-black/20
                    px-4
                    py-2
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-white/60
                    backdrop-blur-sm
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
          SITUATION
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <div>
              <SectionLabel>The Situation</SectionLabel>

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
                Same network.
                <br />

                <span className="text-black/25">
                  Different market.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Christian Care Allen is the sister community to Christian Care
                Mesquite, but it serves a different market with its own
                families, competitors, and search behavior.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                It needed its own digital presence — not a hand-me-down from
                another property — while still benefiting from the unified
                standards of the Oakdale network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL MOMENT
      ====================================================== */}

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="
            relative
            mx-auto
            min-h-[430px]
            max-w-7xl
            overflow-hidden
            rounded-[28px]
            sm:min-h-[520px]
            lg:min-h-[620px]
          "
        >
          <img
            src={CHRISTIAN_CARE_ALLEN_HERO}
            alt="Christian Care Allen senior living community"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/10
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              z-10
              max-w-2xl
              p-7
              text-white
              sm:p-10
              md:p-14
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#f0a608]
              "
            >
              A Community With Its Own Identity
            </p>

            <h2
              className="
                mt-4
                text-[36px]
                leading-[0.98]
                tracking-[-0.04em]
                sm:text-[48px]
                md:text-[58px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              One network.
              <br />

              <span className="text-white/45">
                A front door built for Allen.
              </span>
            </h2>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          WHAT MEDIA KING GROUP BUILT
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
          <SectionLabel>
            What Media King Group Built
          </SectionLabel>

          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div>
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
                One brand system.
                <br />

                <span className="text-black/25">
                  Its own digital identity.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group built Christian Care Allen a dedicated
                website inside the unified Oakdale brand system.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Local SEO was developed around the Allen market so the
                community could establish its own discovery footprint rather
                than relying on the visibility of its sister property.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Dedicated Website"
              text="A standalone digital front door gave Christian Care Allen its own identity and conversion experience."
            />

            <BuildCard
              number="02"
              title="Unified Brand System"
              text="The site remained visually and strategically connected to the Oakdale network without becoming a duplicate of another property."
            />

            <BuildCard
              number="03"
              title="Allen-Focused SEO"
              text="Local search foundations were tailored to the Allen market and its own discovery opportunities."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTS INTRO
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
              md:grid-cols-[0.85fr_1.15fr]
              md:items-end
              md:gap-20
            "
          >
            <div>
              <SectionLabel dark>Results</SectionLabel>

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
                From zero
                <br />

                <span className="text-white/25">
                  to breakout visibility.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                Christian Care Allen grew into one of the Oakdale
                network&apos;s standout social-growth stories while building
                its own website and search presence at the same time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL RESULTS
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              overflow-hidden
              rounded-[28px]
              bg-[#0b0b0c]
              text-white
            "
          >
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {socialResults.map((item, index) => (
                <motion.div
                  key={item.label}
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
                    min-w-0
                    p-6
                    sm:p-8
                    lg:p-9

                    ${
                      index % 2 === 0
                        ? "border-r border-white/10"
                        : ""
                    }

                    ${
                      index < 2
                        ? "border-b border-white/10 lg:border-b-0"
                        : ""
                    }

                    ${
                      index !== 3
                        ? "lg:border-r lg:border-white/10"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      text-[42px]
                      leading-none
                      tracking-[-0.05em]
                      sm:text-[54px]
                      lg:text-[62px]
                    "
                    style={{
                      fontFamily: "Kinta, sans-serif",
                    }}
                  >
                    {item.value}
                  </div>

                  <p
                    className="
                      mt-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#f0a608]
                    "
                  >
                    {item.label}
                  </p>

                  <p className="mt-3 text-xs leading-[1.6] text-white/40">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <LargeProof
              value="41K"
              label="Facebook Followers"
              description="Built organically from zero as part of Christian Care Allen's breakout audience growth."
            />

            <LargeProof
              value="2K"
              label="Instagram Followers"
              description="Part of a combined organic social audience now exceeding 43,000 followers."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BREAKOUT GROWTH
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
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#f0a608]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-black/40
                sm:text-[10px]
              "
            >
              Audience Growth
            </span>

            <span className="h-px w-8 bg-[#f0a608]" />
          </div>

          <h2
            className="
              mx-auto
              text-[46px]
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-[62px]
              md:text-[78px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            +33,200%
            <br />

            <span className="text-black/25">
              follower growth.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-[1.8]
              text-black/55
            "
          >
            Starting from zero, Christian Care Allen grew to more than 43,000
            followers and became one of the Oakdale network&apos;s biggest
            organic social breakouts.
          </p>
        </div>
      </section>

      {/* =====================================================
          WEBSITE + SEO
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>
                Website + SEO
              </SectionLabel>

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
                Its own market.
                <br />

                <span className="text-black/25">
                  Its own search footprint.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                The dedicated Christian Care Allen website generated more
                than 2,800 homepage views while its organic search presence
                grew to approximately 758 monthly visits across 331 ranking
                keywords.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Most of that search discovery was non-branded, meaning the
                website was reaching families beyond people already familiar
                with Christian Care Allen.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProofCard
              value="2,800+"
              label="Homepage Views"
              text="Traffic into the dedicated Christian Care Allen website."
            />

            <ProofCard
              value="758"
              label="Monthly Organic Visits"
              text="Organic search traffic reaching the site at the time of measurement."
            />

            <ProofCard
              value="331"
              label="Ranking Keywords"
              text="A growing search footprint across the Allen market."
            />

            <ProofCard
              value="~$2.5K"
              label="Monthly Ad Value"
              text="Estimated equivalent value of the site's organic search traffic."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          TWO-YEAR SEARCH
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
                Two-Year Search Performance
              </SectionLabel>

              <h2
                className="
                  text-[44px]
                  leading-[0.94]
                  tracking-[-0.05em]
                  sm:text-[58px]
                  md:text-[72px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                256K
                <br />

                <span className="text-white/25">
                  Google impressions.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                From July 2024 through July 2026, Christian Care Allen
                generated approximately 256,000 Google impressions and 4,000
                organic search clicks.
              </p>

              <div className="mt-9 grid grid-cols-2 border-y border-white/10">
                <MiniDarkMetric
                  value="256K"
                  label="Google Impressions"
                />

                <MiniDarkMetric
                  value="4.0K"
                  label="Google Clicks"
                  bordered
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL-SYSTEM OUTCOME
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>
            Full-System Outcome
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
              <div
                className="
                  text-[78px]
                  leading-[0.85]
                  tracking-[-0.06em]
                  text-black
                  sm:text-[100px]
                  md:text-[120px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                138
              </div>

              <p
                className="
                  mt-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#b77800]
                "
              >
                Brochure Requests
              </p>
            </div>

            <div className="md:pt-4">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                The full Christian Care Allen system captured 138 brochure
                requests and 119 new contacts during 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-black/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated funnels, fed by the dedicated website Media
                King Group built and the organic demand reaching it through
                search and social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KICKER
      ====================================================== */}

      <section
        className="
          bg-[#f6f5f2]
          px-5
          py-24
          sm:px-8
          md:py-32
        "
      >
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#b77800]
            "
          >
            The Christian Care Allen Story
          </p>

          <h2
            className="
              mx-auto
              mt-6
              text-[44px]
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-[60px]
              md:text-[76px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            Every community deserves
            <br />

            <span className="text-black/25">
              its own front door.
            </span>
          </h2>
        </div>
      </section>

      {/* =====================================================
          NEXT / PREVIOUS
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
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
                  Next Community Case Study
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
                  Lighthouse Pointe Village
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  Distinctive appeal. Stronger digital inquiry paths.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/lighthouse-pointe-village"
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
                View Next Study
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link
              to="/case-studies/oakdale/lakewood-village"
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
              ← Previous: Lakewood Village
            </Link>

            <Link
              to="/case-studies/oakdale-seniors-alliance"
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
              Back to Oakdale Network
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

function BuildCard({
  number,
  title,
  text,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[24px]
        border
        border-black/10
        bg-white
        p-7
      "
    >
      <div className="flex items-center gap-4">
        <span
          className="
            text-[10px]
            font-semibold
            tracking-[0.2em]
            text-[#b77800]
          "
        >
          {number}
        </span>

        <span className="h-px flex-1 bg-black/10" />
      </div>

      <h3
        className="
          mt-9
          text-[27px]
          leading-[1.05]
          tracking-[-0.03em]
        "
        style={{
          fontFamily: "Kinta, sans-serif",
        }}
      >
        {title}
      </h3>

      <p className="mt-4 text-sm leading-[1.75] text-black/50">
        {text}
      </p>
    </motion.div>
  );
}

function ProofCard({
  value,
  label,
  text,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="
        rounded-[22px]
        border
        border-black/10
        bg-white
        p-6
        sm:p-7
      "
    >
      <div
        className="
          text-[38px]
          leading-none
          tracking-[-0.04em]
          text-black
        "
        style={{
          fontFamily: "Kinta, sans-serif",
        }}
      >
        {value}
      </div>

      <p
        className="
          mt-3
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-black/45
        "
      >
        {label}
      </p>

      <p className="mt-3 text-sm leading-[1.65] text-black/45">
        {text}
      </p>
    </motion.div>
  );
}

function LargeProof({
  value,
  label,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[24px]
        border
        border-black/10
        bg-white
        p-7
        sm:p-9
      "
    >
      <div
        className="
          text-[52px]
          leading-none
          tracking-[-0.05em]
          sm:text-[66px]
        "
        style={{
          fontFamily: "Kinta, sans-serif",
        }}
      >
        {value}
      </div>

      <p
        className="
          mt-4
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.17em]
          text-[#b77800]
        "
      >
        {label}
      </p>

      <p className="mt-4 max-w-md text-sm leading-[1.7] text-black/45">
        {description}
      </p>
    </motion.div>
  );
}

function MiniDarkMetric({
  value,
  label,
  bordered = false,
}) {
  return (
    <div
      className={`
        min-w-0
        py-6
        px-5
        ${bordered ? "border-l border-white/10" : ""}
      `}
    >
      <div
        className="
          text-[30px]
          leading-none
          tracking-[-0.04em]
          text-white
          sm:text-[38px]
        "
        style={{
          fontFamily: "Kinta, sans-serif",
        }}
      >
        {value}
      </div>

      <p
        className="
          mt-3
          text-[8px]
          font-semibold
          uppercase
          leading-[1.5]
          tracking-[0.13em]
          text-[#f0a608]
          sm:text-[9px]
        "
      >
        {label}
      </p>
    </div>
  );
}