// src/pages/LakewoodVillageCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BG from "../assets/images/mkg-hero-bg.webp";

export default function LakewoodVillageCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Lakewood Village Case Study | Senior Living Marketing | Media King Group";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const previousDescription = metaDescription?.getAttribute("content");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "How Media King Group rebuilt Lakewood Village's website and local SEO presence to support one of the strongest inquiry pipelines in the Oakdale network."
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

  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          flex
          min-h-[76vh]
          items-end
          overflow-hidden
          px-5
          pb-16
          pt-32
          text-white
          sm:px-8
          sm:pb-20
          md:min-h-[80vh]
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
                Oakdale Network · Community Case Study 06
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
              Lakewood
              <br />
              Village
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
              Fort Worth, Texas · A remarkably efficient digital front door.
            </p>

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
                Demand was strong.
                <br />

                <span className="text-black/25">
                  Visibility was the constraint.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p
                className="
                  text-lg
                  leading-[1.8]
                  text-black/60
                  md:text-xl
                "
              >
                Lakewood Village was a Fort Worth senior living community
                whose inquiry volume was already outperforming its website
                traffic.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That told us something important: the offer was working. The
                opportunity was to strengthen the digital front door so the
                community could convert more of the demand already present in
                the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT MEDIA KING BUILT
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
          <SectionLabel>What Media King Built</SectionLabel>

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
                A front door
                <br />

                <span className="text-black/25">
                  built to convert.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group rebuilt the Lakewood Village website and
                tuned the site&apos;s local SEO to the Fort Worth market.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Clear brochure and tour pathways gave high-intent families
                fewer barriers between research and the next step.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Website Rebuild"
              text="A cleaner, unified Oakdale website experience gave Lakewood Village a stronger digital foundation."
            />

            <BuildCard
              number="02"
              title="Fort Worth SEO"
              text="Local SEO was tuned around the Fort Worth market to improve discovery among families actively researching senior living."
            />

            <BuildCard
              number="03"
              title="Clear Conversion Paths"
              text="Brochure and tour pathways were positioned prominently to move interested visitors toward inquiry quickly."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE RESULT
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
          <SectionLabel dark>Results · 2025</SectionLabel>

          <div
            className="
              grid
              gap-12
              md:grid-cols-[0.8fr_1.2fr]
              md:items-end
              md:gap-20
            "
          >
            <div>
              <h2
                className="
                  text-[44px]
                  leading-[0.94]
                  tracking-[-0.05em]
                  sm:text-[60px]
                  md:text-[74px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Less traffic.
                <br />

                <span className="text-white/25">
                  More conversion.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                Lakewood Village became one of the clearest examples in the
                portfolio that raw traffic volume is not the only measure of a
                successful website.
              </p>

              <p className="mt-5 text-lg leading-[1.8] text-white/55">
                The rebuilt site generated just over 4,100 homepage views but
                supported the second-highest brochure-request volume in the
                entire Oakdale network.
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
            <div className="grid sm:grid-cols-3">
              <MetricBlock
                value="4,100+"
                label="Homepage Views"
                detail="Traffic into the rebuilt Lakewood Village website"
              />

              <MetricBlock
                value="311"
                label="Brochure Requests"
                detail="Captured through the full system during 2025"
                bordered
              />

              <MetricBlock
                value="263"
                label="New Contacts"
                detail="Generated through partner-operated funnels in 2025"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONVERSION STORY
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
              <SectionLabel>Conversion Efficiency</SectionLabel>

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
                The traffic number
                <br />

                <span className="text-black/25">
                  doesn&apos;t tell the whole story.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Lakewood Village&apos;s 311 brochure requests ranked second
                across the Oakdale portfolio despite the community generating
                considerably less website traffic than some of the
                network&apos;s highest-traffic properties.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That exceptional inquiry-to-traffic relationship showed that
                once qualified families reached the digital experience, the
                path toward action was highly efficient.
              </p>
            </div>
          </div>

          <div
            className="
              mt-14
              overflow-hidden
              rounded-[28px]
              border
              border-black/10
              bg-white
            "
          >
            <div
              className="
                grid
                gap-8
                p-7
                sm:p-10
                md:grid-cols-[0.65fr_1.35fr]
                md:items-center
                md:p-14
              "
            >
              <div>
                <div
                  className="
                    text-[72px]
                    leading-[0.85]
                    tracking-[-0.06em]
                    sm:text-[90px]
                  "
                  style={{
                    fontFamily: "Kinta, sans-serif",
                  }}
                >
                  #2
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
                  In The Oakdale Network
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
                  311 brochure requests.
                </h3>

                <p className="mt-5 max-w-xl text-base leading-[1.8] text-black/50">
                  Lakewood Village ranked second in the network for brochure
                  demand during the engagement — despite a smaller website
                  traffic footprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM EXPLANATION
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
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div>
              <SectionLabel dark>Why It Worked</SectionLabel>

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
                Strong demand
                <br />

                <span className="text-white/25">
                  met a better front door.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                Lakewood Village did not need manufactured demand. Families
                were already interested.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/60">
                The work was about improving the place where that demand
                landed — making the community easier to understand, easier to
                explore, and easier to contact.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <DarkStep
              number="01"
              title="Get Found"
              text="Local SEO improves the likelihood that Fort Worth families discover the community."
            />

            <DarkStep
              number="02"
              title="Understand"
              text="The rebuilt website gives visitors a clearer view of the community and available options."
            />

            <DarkStep
              number="03"
              title="Take Action"
              text="Prominent brochure and tour pathways reduce friction once families are ready to move forward."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL-SYSTEM OUTCOME
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Full-System Outcome</SectionLabel>

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
                311
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
              <p
                className="
                  text-lg
                  leading-[1.8]
                  text-black/60
                  md:text-xl
                "
              >
                Lakewood Village generated 311 brochure requests and 263 new
                contacts during the 2025 Media King Group engagement.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-black/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated brochure funnels, fed by the website Media
                King Group rebuilt and the digital demand reaching that front
                door.
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
            The Lakewood Village Story
          </p>

          <h2
            className="
              mx-auto
              mt-6
              text-[42px]
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-[58px]
              md:text-[72px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            A front door efficient enough
            <br />

            <span className="text-black/25">
              to out-convert sites with twice the traffic.
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
                  Christian Care Allen
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  Its own market. Its own presence.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/christian-care-allen"
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
              to="/case-studies/oakdale/seneca-senior-living"
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
              ← Previous: Seneca Senior Living
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

function SectionLabel({ children, dark = false }) {
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

function BuildCard({ number, title, text }) {
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

function MetricBlock({
  value,
  label,
  detail,
  bordered = false,
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
      className={`
        p-7
        sm:p-9
        lg:p-12
        ${bordered ? "border-y border-white/10 sm:border-x sm:border-y-0" : ""}
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
        {value}
      </div>

      <p
        className="
          mt-4
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.17em]
          text-[#f0a608]
        "
      >
        {label}
      </p>

      <p className="mt-3 max-w-xs text-xs leading-[1.65] text-white/40">
        {detail}
      </p>
    </motion.div>
  );
}

function DarkStep({ number, title, text }) {
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
        border-white/10
        bg-white/[0.025]
        p-7
      "
    >
      <div className="flex items-center gap-4">
        <span
          className="
            text-[10px]
            font-semibold
            tracking-[0.18em]
            text-[#f0a608]
          "
        >
          {number}
        </span>

        <span className="h-px flex-1 bg-white/10" />
      </div>

      <h3
        className="
          mt-8
          text-[27px]
          leading-[1.05]
          tracking-[-0.03em]
          text-white
        "
        style={{
          fontFamily: "Kinta, sans-serif",
        }}
      >
        {title}
      </h3>

      <p className="mt-4 text-sm leading-[1.75] text-white/40">
        {text}
      </p>
    </motion.div>
  );
}