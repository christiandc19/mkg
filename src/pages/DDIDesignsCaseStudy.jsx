// src/pages/DDIDesignsCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BG from "../assets/images/mkg-hero-bg.webp";

export default function DDIDesignsCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "DDI Designs Case Study | Media King Group";

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
      "How Media King Group grew DDI Designs from 6.8K to 60.7K Instagram followers, launched TikTok from zero to 26.4K, and built a 100K+ combined audience."
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

  const primaryResults = [
    {
      value: "60.7K",
      label: "Instagram Followers",
      detail: "Up from 6,800",
    },
    {
      value: "26.4K",
      label: "TikTok Followers",
      detail: "Built from zero",
    },
    {
      value: "100K+",
      label: "Combined Audience",
      detail: "Across the brand ecosystem",
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
          min-h-[82vh]
          items-end
          overflow-hidden
          px-5
          pb-16
          pt-32
          text-white
          sm:px-8
          sm:pb-20
          md:min-h-[86vh]
          md:pb-24
        "
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/76" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/35
            to-black/20
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-3%]
            top-1/2
            -translate-y-1/2
            select-none
            whitespace-nowrap
            text-white/[0.035]
          "
          style={{
            fontFamily: "Kinta, sans-serif",
            fontSize: "clamp(10rem, 28vw, 30rem)",
            lineHeight: 1,
            letterSpacing: "-0.07em",
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
            className="max-w-6xl"
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
                Design / Consumer · Social Growth → Sales Engine
              </span>
            </div>

            <h1
              className="
                text-[58px]
                leading-[0.88]
                tracking-[-0.055em]
                text-white
                sm:text-[78px]
                md:text-[98px]
                lg:text-[120px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              DDI Designs
            </h1>

            <p
              className="
                mt-7
                max-w-3xl
                text-[16px]
                leading-[1.7]
                text-white/60
                sm:text-lg
                md:text-xl
              "
            >
              A brand that looks inevitable —
              <br className="hidden sm:block" />
              and converts like it.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Instagram",
                "TikTok",
                "Visual Content",
                "Audience Growth",
                "Commerce",
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
          CHALLENGE
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
              <SectionLabel>The Challenge</SectionLabel>

              <h2
                className="
                  text-[42px]
                  leading-[0.96]
                  tracking-[-0.045em]
                  sm:text-[54px]
                  md:text-[64px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Beautiful work.
                <br />

                <span className="text-black/25">
                  Small audience.
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
                DDI Designs already had the most important raw material:
                beautiful creative work and a distinctive visual point of
                view.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The problem was visibility. The audience was too small for the
                portfolio to consistently reach the number of prospective
                clients and customers it deserved.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The goal was to turn the portfolio itself into a growth asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE BUILT
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
              gap-12
              md:grid-cols-[0.85fr_1.15fr]
              md:gap-20
            "
          >
            <div>
              <h2
                className="
                  text-[42px]
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-[56px]
                  md:text-[68px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Turn the aesthetic
                <br />

                <span className="text-black/25">
                  into media.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group built a visual content system that transformed
                the firm&apos;s aesthetic into strategic media.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Portfolio storytelling was structured for reach while
                product-focused content gave that growing audience another
                path to commercial value.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <SystemCard
              number="01"
              title="Portfolio Storytelling"
              text="Strong design work became content people could discover, consume, and share."
            />

            <SystemCard
              number="02"
              title="Platform-Native Media"
              text="The visual language was adapted into formats suited to Instagram and TikTok."
            />

            <SystemCard
              number="03"
              title="Product-Focused Content"
              text="Audience attention created an additional path from brand discovery to product interest."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          STRATEGY
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
              md:grid-cols-[0.8fr_1.2fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel dark>
                The Growth System
              </SectionLabel>

              <h2
                className="
                  text-[42px]
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-[56px]
                  md:text-[70px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Showcase.
                <br />
                Distribute.
                <br />

                <span className="text-white/25">
                  Convert.
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-white/55">
                The work didn&apos;t need a different identity to perform
                online. It needed a system that could translate the existing
                identity into repeatable digital media.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/55">
                The portfolio became both proof of capability and the raw
                material for audience growth.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <DarkStep
              number="01"
              title="Showcase"
              text="Lead with the strongest visual work and make the quality immediately obvious."
            />

            <DarkStep
              number="02"
              title="Distribute"
              text="Package that work into media designed to travel beyond the existing audience."
            />

            <DarkStep
              number="03"
              title="Convert"
              text="Give attention somewhere useful to go — toward the brand, its services, and its products."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTS INTRO
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
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
              <SectionLabel>Results</SectionLabel>

              <h2
                className="
                  text-[42px]
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-[56px]
                  md:text-[70px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                The portfolio
                <br />

                <span className="text-black/20">
                  found its audience.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/55">
                The audience expanded across both Instagram and TikTok,
                creating a combined following of more than 100,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRIMARY RESULTS
      ====================================================== */}

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              overflow-hidden
              rounded-[28px]
              bg-[#0b0b0c]
              text-white
            "
          >
            <div className="grid md:grid-cols-3">
              {primaryResults.map((item, index) => (
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
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`
                    p-7
                    sm:p-9
                    lg:p-12

                    ${
                      index !== primaryResults.length - 1
                        ? "border-b border-white/10 md:border-b-0 md:border-r"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      text-[52px]
                      leading-none
                      tracking-[-0.055em]
                      text-white
                      sm:text-[66px]
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
                      text-[9px]
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
        </div>
      </section>

      {/* =====================================================
          INSTAGRAM
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
              md:grid-cols-[0.8fr_1.2fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel>Instagram Growth</SectionLabel>

              <h2
                className="
                  text-[46px]
                  leading-[0.92]
                  tracking-[-0.05em]
                  sm:text-[62px]
                  md:text-[76px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                6.8K
                <br />

                <span className="text-black/20">
                  → 60.7K
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-black/60">
                Instagram expanded from approximately 6,800 followers to
                60,700.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The growth gave the firm&apos;s portfolio a dramatically
                larger distribution channel without changing what made the
                work distinctive in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TIKTOK
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
              <SectionLabel>TikTok Growth</SectionLabel>

              <h2
                className="
                  text-[46px]
                  leading-[0.92]
                  tracking-[-0.05em]
                  sm:text-[62px]
                  md:text-[76px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                0
                <br />

                <span className="text-black/20">
                  → 26.4K
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-black/60">
                TikTok began without an existing audience and grew to
                approximately 26,400 followers.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That gave DDI Designs a second meaningful distribution
                channel beyond Instagram.
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
            "
          >
            <div className="grid sm:grid-cols-2">
              <LargeMetric
                value="26.4K"
                label="TikTok Followers"
                text="Built from zero."
              />

              <LargeMetric
                value="100K+"
                label="Combined Audience"
                text="Audience built across the broader social ecosystem."
                bordered
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AUDIENCE TO COMMERCE
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
              md:grid-cols-[0.8fr_1.2fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel dark>
                Audience → Commerce
              </SectionLabel>

              <h2
                className="
                  text-[42px]
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-[56px]
                  md:text-[70px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Attention with
                <br />

                <span className="text-white/25">
                  somewhere to go.
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-white/55">
                The content system did more than expand the firm&apos;s
                visibility.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/55">
                Product-focused content gave the growing audience another
                commercial path, connecting media attention with the broader
                business.
              </p>
            </div>
          </div>

          <div
            className="
              mt-14
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.025]
              p-7
              sm:p-10
              md:p-14
            "
          >
            <div
              className="
                grid
                gap-10
                md:grid-cols-[0.8fr_1.2fr]
                md:items-center
              "
            >
              <div>
                <div
                  className="
                    text-[64px]
                    leading-[0.86]
                    tracking-[-0.055em]
                    text-white
                    sm:text-[82px]
                  "
                  style={{
                    fontFamily: "Kinta, sans-serif",
                  }}
                >
                  100K+
                </div>

                <p
                  className="
                    mt-4
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#f0a608]
                  "
                >
                  Combined Audience
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-[30px]
                    leading-[1]
                    tracking-[-0.035em]
                    text-white
                    sm:text-[40px]
                  "
                  style={{
                    fontFamily: "Kinta, sans-serif",
                  }}
                >
                  The portfolio became distribution.
                </h3>

                <p className="mt-5 text-base leading-[1.8] text-white/45">
                  The same design work that demonstrated the firm&apos;s
                  capabilities also became the material that expanded its
                  audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY IT WORKED
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Why It Worked</SectionLabel>

          <div
            className="
              grid
              gap-12
              md:grid-cols-[0.8fr_1.2fr]
              md:gap-20
            "
          >
            <div>
              <h2
                className="
                  text-[42px]
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-[56px]
                  md:text-[68px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Don&apos;t dilute
                <br />

                <span className="text-black/25">
                  what makes the brand good.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                DDI Designs didn&apos;t need generic social-media content.
                Its strongest advantage was already visible in the work.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The system worked because it amplified that existing aesthetic
                instead of replacing it with something built purely for an
                algorithm.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <SystemCard
              number="01"
              title="Distinctive"
              text="The content remained unmistakably connected to the firm's visual identity."
            />

            <SystemCard
              number="02"
              title="Repeatable"
              text="The portfolio supplied a consistent pipeline of visual stories."
            />

            <SystemCard
              number="03"
              title="Commercial"
              text="The growing audience could support both brand positioning and product discovery."
            />
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
          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-8 bg-[#f0a608]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-black/40
              "
            >
              The Result
            </span>

            <span className="h-px w-8 bg-[#f0a608]" />
          </div>

          <h2
            className="
              text-[43px]
              leading-[0.94]
              tracking-[-0.045em]
              sm:text-[60px]
              md:text-[76px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            A brand that
            <br />
            looks inevitable —
            <br />

            <span className="text-black/25">
              and converts like it.
            </span>
          </h2>
        </div>
      </section>

      {/* =====================================================
          END NAV
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
                  Four Industries · Four Systems
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
                  Explore all the proof.
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
                  Senior living. Healthcare. Entertainment. Design.
                  Different markets, built around systems designed to scale.
                </p>
              </div>

              <Link
                to="/case-studies"
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
                All Case Studies
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/case-studies/fat-puppy"
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
              ← Fat Puppy
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

function SystemCard({
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

function DarkStep({
  number,
  title,
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

function LargeMetric({
  value,
  label,
  text,
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
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        p-7
        sm:p-9
        md:p-11

        ${
          bordered
            ? "border-t border-black/10 sm:border-l sm:border-t-0"
            : ""
        }
      `}
    >
      <div
        className="
          text-[58px]
          leading-none
          tracking-[-0.055em]
          sm:text-[72px]
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
          tracking-[0.17em]
          text-[#b77800]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-4
          max-w-md
          text-sm
          leading-[1.7]
          text-black/45
        "
      >
        {text}
      </p>
    </motion.div>
  );
}