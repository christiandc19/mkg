// src/pages/RobinRunCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import RobinRunLogo from "../assets/images/robin-logo.png";

const ROBIN_RUN_HERO =
  "https://robinrunseniorliving.org/wp-content/uploads/2025/07/medium-vecteezy_ai-generated-elderly-couple-relishing-active-retirement-and_35423179_medium.webp";

export default function RobinRunCaseStudy() {
  // =========================================================
  // SEO
  // =========================================================

  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Robin Run Senior Living Case Study | Senior Living Marketing | Media King Group";

    const existingMeta = document.querySelector(
      'meta[name="description"]'
    );

    const createdMeta = !existingMeta;

    const metaDescription =
      existingMeta || document.createElement("meta");

    const previousDescription =
      existingMeta?.getAttribute("content") ?? "";

    if (createdMeta) {
      metaDescription.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(
        metaDescription
      );
    }

    metaDescription.setAttribute(
      "content",
      "How Media King Group rebuilt Robin Run Senior Living's digital presence, generating 460 brochure requests and 408 new contacts in 2025."
    );

    return () => {
      document.title = previousTitle;

      if (createdMeta) {
        metaDescription.remove();
      } else {
        metaDescription.setAttribute(
          "content",
          previousDescription
        );
      }
    };
  }, []);

  // =========================================================
  // RESULTS
  // =========================================================

  const results = [
    {
      value: "460",
      label: "Brochure Requests",
      detail:
        "Captured in 2025 through partner-operated funnels",
    },
    {
      value: "408",
      label: "New Contacts",
      detail:
        "Captured through the full digital system in 2025",
    },
    {
      value: "3,800",
      label: "Monthly Organic Visits",
      detail:
        "Organic search traffic reaching the community website",
    },
    {
      value: "$11K",
      label: "Monthly Ad Value",
      detail:
        "Estimated equivalent organic traffic value",
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
          backgroundImage: `url(${ROBIN_RUN_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Base darkening */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Left readability gradient */}
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

        {/* Bottom fade */}
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

        {/* Gold glow */}
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

        {/* MKG Watermark */}
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
            {/* Robin Run Logo */}
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
                  src={RobinRunLogo}
                  alt="Robin Run Senior Living"
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

            {/* Eyebrow */}
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
                Oakdale Network · Community Case Study 01
              </span>
            </div>

            {/* Title */}
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
              Robin Run
              <br />
              Senior Living
            </h1>

            {/* Tagline */}
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
              The network&apos;s demand standout.
            </p>

            {/* Scope */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Website Rebuild",
                "Local SEO",
                "Conversion Strategy",
                "Senior Living",
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
          THE SITUATION
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div
            className="
              grid
              gap-10
              md:grid-cols-[0.85fr_1.15fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel>
                The Situation
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
                Strong demand.
                <br />

                <span className="text-black/25">
                  Weak digital conversion.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Robin Run was a large senior living community with strong
                occupancy goals, but its website wasn&apos;t converting the
                demand its market was already generating.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The opportunity was clear: rebuild the digital front door so
                families could find what they needed faster, understand the
                community more clearly, and move toward inquiry with less
                friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL IMAGE MOMENT
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
          }}
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
            src={ROBIN_RUN_HERO}
            alt="Robin Run Senior Living"
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
              from-black/88
              via-black/12
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
              The Digital Front Door
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
              A strong community.
              <br />

              <span className="text-white/45">
                A clearer path to action.
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

          <div
            className="
              grid
              gap-10
              md:grid-cols-[0.9fr_1.1fr]
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
                  md:text-[60px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                A better
                <br />

                <span className="text-black/25">
                  digital front door.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group rebuilt the Robin Run website using the
                unified Oakdale brand standards and reorganized the experience
                around conversion.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The structure made service information easier to navigate,
                brought brochure and tour CTAs forward, and established local
                SEO foundations designed to improve high-intent discovery.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Website Rebuild"
              text="A complete rebuild using Oakdale's unified brand system, with a cleaner and more purposeful user journey."
            />

            <BuildCard
              number="02"
              title="Conversion Structure"
              text="Prominent brochure and tour CTAs positioned throughout the site to reduce friction between research and inquiry."
            />

            <BuildCard
              number="03"
              title="Local SEO"
              text="Search foundations built around Robin Run's market so high-intent families could discover the community organically."
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
              <SectionLabel dark>
                Results · 2025
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
                Build the front door right.
                <br />

                <span className="text-white/25">
                  The whole system converts.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                Robin Run paired substantial organic search visibility with a
                high volume of brochure requests and new contacts across the
                full Oakdale digital system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULT METRICS
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
              {results.map((item, index) => (
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

          {/* Supporting proof */}
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <ProofCard
              value="6,700+"
              label="Homepage Views"
              text="The rebuilt homepage became a major destination, with independent living and amenities also ranking among the site's most-read pages."
            />

            <ProofCard
              value="579"
              label="Ranking Keywords"
              text="Robin Run built a substantial organic keyword footprint through the site's local SEO foundation."
            />

            <ProofCard
              value="#1"
              label='For "Robin Run Village"'
              text="The site ranked first on Google for its primary local branded search, with roughly 1,000 monthly searches."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ORGANIC SEARCH STORY
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
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>
                Organic Search
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
                Findable when
                <br />

                <span className="text-black/25">
                  intent is highest.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Robin Run generated approximately 3,800 monthly organic visits
                across 579 ranking keywords.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That organic traffic was estimated at roughly $11,000 per
                month in equivalent Google Ads value — visibility earned
                through the site and SEO system rather than purchased clicks.
              </p>
            </div>
          </div>

          {/* SEO metric row */}
          <div
            className="
              mt-14
              overflow-hidden
              rounded-[26px]
              bg-white
              shadow-[0_8px_40px_rgba(0,0,0,0.04)]
            "
          >
            <div className="grid sm:grid-cols-3">
              <SearchMetric
                value="3.8K"
                label="Organic Visits / Month"
              />

              <SearchMetric
                value="579"
                label="Ranking Keywords"
                bordered
              />

              <SearchMetric
                value="$11K"
                label="Equivalent Ad Value / Month"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONVERSION FEATURE
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div
            className="
              grid
              overflow-hidden
              rounded-[30px]
              bg-[#0b0b0c]
              text-white
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            <div
              className="
                flex
                flex-col
                justify-center
                p-8
                sm:p-10
                md:p-14
                lg:p-16
              "
            >
              <SectionLabel dark>
                Conversion
              </SectionLabel>

              <div
                className="
                  text-[80px]
                  leading-[0.82]
                  tracking-[-0.06em]
                  sm:text-[100px]
                  lg:text-[120px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                460
              </div>

              <p
                className="
                  mt-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#f0a608]
                "
              >
                Brochure Requests
              </p>

              <p className="mt-7 max-w-md text-base leading-[1.75] text-white/45">
                A high volume of prospective residents and families moved from
                digital research into measurable inquiry during 2025.
              </p>
            </div>

            <div className="relative min-h-[380px] lg:min-h-full">
              <img
                src={ROBIN_RUN_HERO}
                alt="Active retirement at Robin Run Senior Living"
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
                  bg-gradient-to-r
                  from-[#0b0b0c]
                  via-black/25
                  to-transparent
                  lg:block
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL SYSTEM OUTCOME
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
          <SectionLabel dark>
            Full-System Outcome
          </SectionLabel>

          <div
            className="
              grid
              gap-12
              md:grid-cols-[0.9fr_1.1fr]
              md:gap-20
            "
          >
            <div>
              <div
                className="
                  text-[72px]
                  leading-[0.85]
                  tracking-[-0.06em]
                  text-white
                  sm:text-[96px]
                  md:text-[118px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                460
              </div>

              <p
                className="
                  mt-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#f0a608]
                "
              >
                Brochure Requests
              </p>
            </div>

            <div className="md:pt-4">
              <p
                className="
                  text-lg
                  leading-[1.8]
                  text-white/60
                  md:text-xl
                "
              >
                Robin Run generated 460 brochure requests and 408 new contacts
                in 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-white/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated brochure funnels, fed by the website Media
                King Group rebuilt and the organic demand the broader digital
                system helps create.
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
            The Robin Run Story
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
            Build the front door right,
            <br />

            <span className="text-black/25">
              and the whole system converts.
            </span>
          </h2>
        </div>
      </section>

      {/* =====================================================
          NEXT COMMUNITY
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div
            className="
              rounded-[28px]
              border
              border-black/10
              bg-[#f6f5f2]
              p-7
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
                  Asbury Heights
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  A respected community with a stronger digital presence.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/asbury-heights"
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

          <div className="mt-8 text-center">
            <Link
              to="/case-studies/oakdale-seniors-alliance"
              className="
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-black/50
                transition
                hover:text-black
              "
            >
              ← Back to Oakdale Seniors Alliance
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
          ${
            dark
              ? "text-white/40"
              : "text-black/40"
          }
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
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
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
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
      }}
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

function SearchMetric({
  value,
  label,
  bordered = false,
}) {
  return (
    <div
      className={`
        p-7
        sm:p-8
        ${
          bordered
            ? "border-y border-black/10 sm:border-x sm:border-y-0"
            : ""
        }
      `}
    >
      <div
        className="
          text-[42px]
          leading-none
          tracking-[-0.045em]
          text-black
          sm:text-[50px]
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
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.16em]
          text-[#b77800]
        "
      >
        {label}
      </p>
    </div>
  );
}