// src/pages/CanterburyPlaceCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import CanterburyLogo from "../assets/images/canterbury-logo.png";

const CANTERBURY_HERO =
  "https://canterburyskillednursing.com/wp-content/uploads/2026/04/canterbury-hero.jpg";

export default function CanterburyPlaceCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Canterbury Place Case Study | Skilled Nursing Marketing | Media King Group";

    const existingMeta = document.querySelector(
      'meta[name="description"]'
    );

    const createdMeta = !existingMeta;

    const metaDescription =
      existingMeta || document.createElement("meta");

    const previousDescription =
      existingMeta?.getAttribute("content") ?? "";

    if (createdMeta) {
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "How Media King Group built Canterbury Place a purpose-built skilled nursing website designed for clarity, organic discovery, and faster family inquiry."
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

  const primaryResults = [
    {
      value: "5.2K",
      label: "Site Sessions",
      detail: "Across the two-year measurement period",
    },
    {
      value: "4.5K",
      label: "Website Users",
      detail:
        "Families researching specialized skilled nursing care",
    },
    {
      value: "1.1K",
      label: "Google Clicks",
      detail:
        "Organic search traffic into the specialized site",
    },
    {
      value: "63",
      label: "Brochure Requests",
      detail:
        "Captured through the full system in 2025",
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
          backgroundImage: `url(${CANTERBURY_HERO})`,
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
                  src={CanterburyLogo}
                  alt="Canterbury Place"
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
                Oakdale Network · Community Case Study 10
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
              Canterbury
              <br />
              Place
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
              Specialized care deserves a specialized digital front door.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Skilled Nursing",
                "Website Strategy",
                "Local SEO",
                "Inquiry Optimization",
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
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
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
                A different care level.
                <br />

                <span className="text-black/25">
                  A different decision.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Canterbury Place serves a skilled-nursing audience — a
                fundamentally different buyer journey from independent or
                assisted living.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Decisions can happen quickly. Families may be researching
                during a hospital stay, after a change in health, or while
                coordinating rehabilitation and continuing care.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The website therefore needed to prioritize clarity and make
                the next step obvious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL IMAGE
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
            src={CANTERBURY_HERO}
            alt="Canterbury Place skilled nursing community"
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
              from-black/90
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
              Built For A Different Decision
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
              When the need is urgent,
              <br />

              <span className="text-white/45">
                clarity becomes the strategy.
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
                Clarity first.
                <br />

                <span className="text-black/25">
                  Speed to inquiry second.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group built a focused website specifically for
                Canterbury Place at canterburyskillednursing.com.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Rather than treating skilled nursing like another senior living
                product page, the experience was structured around the needs
                of a specialized, often high-urgency audience.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Purpose-Built Website"
              text="A dedicated skilled-nursing site gave Canterbury Place its own focused digital experience."
            />

            <BuildCard
              number="02"
              title="Clear Care Information"
              text="The experience was structured to help families understand specialized care without unnecessary friction."
            />

            <BuildCard
              number="03"
              title="Faster Inquiry Path"
              text="The site was built to move high-intent families toward contact quickly when time matters."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BUYER JOURNEY
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
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <div>
              <SectionLabel dark>
                The Buyer Journey
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
                When the decision
                <br />

                <span className="text-white/25">
                  can&apos;t wait.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                Skilled nursing often enters the conversation because
                something changed — a hospitalization, rehabilitation need,
                decline in health, or increased care requirement.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/60">
                That makes simplicity more valuable than complexity. Families
                need to understand what Canterbury provides and know how to
                contact the community without navigating a generic senior
                living experience.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <DarkStep
              number="01"
              title="Understand"
              text="Give families a clear picture of the specialized care Canterbury Place provides."
            />

            <DarkStep
              number="02"
              title="Evaluate"
              text="Remove unnecessary distractions so high-intent visitors can quickly determine whether the community fits their needs."
            />

            <DarkStep
              number="03"
              title="Inquire"
              text="Keep the path to contact visible and straightforward throughout the experience."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTS INTRO
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-20">
            <div>
              <SectionLabel>
                Results
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
                Specialized audience.
                <br />

                <span className="text-black/25">
                  Meaningful demand.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/55">
                Canterbury&apos;s numbers should be viewed in the context of a
                narrower, specialized skilled-nursing audience rather than the
                broader senior living market.
              </p>

              <p className="mt-5 text-lg leading-[1.8] text-black/55">
                Within that niche, the purpose-built site generated meaningful
                search traffic and inquiry volume.
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
            <div className="grid grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* =====================================================
          SEO
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
                Search built around
                <br />

                <span className="text-black/25">
                  a specialized niche.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Canterbury Place was ranking for 73 organic search keywords at
                the time of measurement.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That footprint increased 9% month over month — useful progress
                within a much narrower skilled-nursing search category.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <ProofCard
              value="73"
              label="Ranking Keywords"
              text="Organic search visibility in a specialized skilled-nursing niche."
            />

            <ProofCard
              value="+9%"
              label="Month-Over-Month"
              text="Growth in the site's organic keyword footprint at the time of measurement."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          TWO-YEAR PERFORMANCE
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
              <SectionLabel dark>
                Two-Year Performance
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
                5.2K
                <br />

                <span className="text-white/25">
                  site sessions.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                From July 2024 through July 2026, Canterbury Place generated
                approximately 5,200 site sessions from 4,500 users.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/60">
                Google Search contributed approximately 1,100 clicks during
                the same period — meaningful volume for a focused
                skilled-nursing audience.
              </p>

              <div className="mt-9 grid grid-cols-3 border-y border-white/10">
                <MiniDarkMetric
                  value="5.2K"
                  label="Site Sessions"
                />

                <MiniDarkMetric
                  value="4.5K"
                  label="Users"
                  bordered
                />

                <MiniDarkMetric
                  value="1.1K"
                  label="Google Clicks"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL OUTCOME FEATURE
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div
          className="
            mx-auto
            grid
            max-w-6xl
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
              Full-System Outcome
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
              63
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
              Canterbury Place generated 63 brochure requests and 54 new
              contacts during 2025.
            </p>
          </div>

          <div className="relative min-h-[390px] lg:min-h-full">
            <img
              src={CANTERBURY_HERO}
              alt="Canterbury Place skilled nursing"
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
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ATTRIBUTION
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
            How The System Connects
          </SectionLabel>

          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <div>
              <div
                className="
                  text-[78px]
                  leading-[0.85]
                  tracking-[-0.06em]
                  text-white
                  sm:text-[100px]
                  md:text-[120px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                54
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
                New Contacts
              </p>
            </div>

            <div className="md:pt-4">
              <p className="text-lg leading-[1.8] text-white/60 md:text-xl">
                Canterbury Place generated 63 brochure requests and 54 new
                contacts during 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-white/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated funnels, supported by the specialized website
                Media King Group built and the organic search demand reaching
                it.
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
            The Canterbury Place Story
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
            Specialized care deserves
            <br />

            <span className="text-black/25">
              a specialized funnel —
              <br />
              and a site built for urgency.
            </span>
          </h2>
        </div>
      </section>

      {/* =====================================================
          END OF CORE OAKDALE SERIES
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
                  Explore The Full Portfolio
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
                  Oakdale Seniors Alliance
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  One unified brand. Ten communities. A demand engine that
                  compounds.
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

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link
              to="/case-studies/oakdale/vanadium-woods"
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
              ← Previous: Vanadium Woods
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

function MiniDarkMetric({
  value,
  label,
  bordered = false,
}) {
  return (
    <div
      className={`
        min-w-0
        px-5
        py-6
        ${
          bordered
            ? "border-x border-white/10"
            : ""
        }
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