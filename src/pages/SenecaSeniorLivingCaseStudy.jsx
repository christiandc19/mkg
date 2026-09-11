// src/pages/SenecaSeniorLivingCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SenecaLogo from "../assets/images/seneca-logo.png";

const SENECA_HERO =
  "https://senecaseniorliving.org/wp-content/uploads/2025/10/Seneca-Hero-Image.webp";

export default function SenecaSeniorLivingCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Seneca Senior Living Case Study | Senior Living Marketing | Media King Group";

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
      "How Media King Group rebuilt Seneca Senior Living's website, search presence, and organic social visibility to create a dependable senior living demand channel."
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
      value: "19.2K",
      label: "Site Sessions",
      detail:
        "Generated across the two-year search period",
    },
    {
      value: "9.8K",
      label: "Google Clicks",
      detail:
        "Organic clicks from July 2024 through July 2026",
    },
    {
      value: "11K+",
      label: "Facebook Followers",
      detail:
        "Built organically from zero",
    },
    {
      value: "140",
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
          backgroundImage: `url(${SENECA_HERO})`,
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
            fontSize:
              "clamp(9rem, 24vw, 28rem)",
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
                  src={SenecaLogo}
                  alt="Seneca Senior Living"
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
                Oakdale Network · Community Case Study 05
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
              Seneca
              <br />
              Senior Living
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
              Steady visibility. Steady census pipeline.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Website Rebuild",
                "Local SEO",
                "Organic Social",
                "Demand Generation",
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                A strong community.
                <br />

                <span className="text-black/25">
                  In need of consistent visibility.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Seneca Senior Living was an established community within the
                Oakdale alliance that needed a more dependable digital
                presence and a consistent inquiry channel.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The goal was not simply to drive short-term traffic. It was
                to create steady visibility across search, the website, and
                organic social so new families could discover the community
                continuously.
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
            src={SENECA_HERO}
            alt="Seneca Senior Living community"
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
              Built For Consistent Discovery
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
                fontFamily:
                  "Kinta, sans-serif",
              }}
            >
              Strong communities deserve
              <br />

              <span className="text-white/45">
                steady visibility.
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                A dependable
                <br />

                <span className="text-black/25">
                  discovery system.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group rebuilt Seneca&apos;s website under the
                unified Oakdale brand system with clearer living-options and
                floor-plan pages.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Local SEO strengthened high-intent discovery, while organic
                social expanded awareness to audiences who may not have been
                actively searching for senior living yet.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Website Rebuild"
              text="A unified-brand website experience designed to make Seneca's living options clearer and easier to explore."
            />

            <BuildCard
              number="02"
              title="Floor Plans & Living Options"
              text="High-intent decision content was brought forward so families could understand available options before inquiring."
            />

            <BuildCard
              number="03"
              title="Local SEO"
              text="Search foundations helped Seneca appear more consistently when families researched care and senior living in its market."
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                Visibility that
                <br />

                <span className="text-white/25">
                  keeps working.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                Seneca developed one of the clearest examples in the network
                of how search, site engagement, and organic social can create
                a steady stream of digital discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRIMARY RESULTS
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
              {primaryResults.map(
                (item, index) => (
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
                        fontFamily:
                          "Kinta, sans-serif",
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
                )
              )}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="5,800+"
              label="Homepage Views"
              text="Traffic into the rebuilt Seneca Senior Living website."
            />

            <ProofCard
              value="2,000+"
              label="Careers Views"
              text="The careers section became one of the site's significant engagement areas."
            />

            <ProofCard
              value="2,000"
              label="Monthly Organic Visits"
              text="Organic search visibility generating a dependable flow of website traffic."
            />
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                New families
                <br />

                <span className="text-black/25">
                  finding the brand.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Seneca reached approximately 2,000 monthly organic visits,
                increasing 29% month over month at the time of measurement.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Non-branded organic traffic was up 45%, meaning growth was
                not limited to people already searching specifically for
                Seneca. More families were discovering the community through
                broader senior living searches.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="2K"
              label="Monthly Organic Visits"
              text="Consistent organic traffic reaching the rebuilt website."
            />

            <ProofCard
              value="+29%"
              label="Month-Over-Month"
              text="Organic traffic growth at the time of the SEO measurement."
            />

            <ProofCard
              value="+45%"
              label="Non-Branded Traffic"
              text="Growth from people discovering Seneca through broader search queries."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          TWO-YEAR SEARCH PERFORMANCE
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                4.9%
                <br />

                <span className="text-white/25">
                  Google CTR.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                From July 2024 through July 2026, Seneca generated 19,200 site
                sessions from 14,400 users and approximately 9,800 Google
                clicks.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/60">
                Its 4.9% Google click-through rate was roughly double the
                network norm — indicating that visibility was translating
                into unusually strong search engagement.
              </p>

              <div className="mt-9 grid grid-cols-3 border-y border-white/10">
                <MiniDarkMetric
                  value="19.2K"
                  label="Site Sessions"
                />

                <MiniDarkMetric
                  value="14.4K"
                  label="Users"
                  bordered
                />

                <MiniDarkMetric
                  value="9.8K"
                  label="Google Clicks"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL GROWTH
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>
                Organic Social
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                0 → 11K+
                <br />

                <span className="text-black/25">
                  Facebook followers.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Seneca&apos;s Facebook presence grew from zero to more than
                11,000 followers, with nearly all of that audience built
                during the first half of 2026.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                In six months, organic content generated 6.7 million views,
                reached 4.8 million unique viewers, and produced
                approximately 95,700 interactions.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <LargeProof
              value="6.7M"
              label="Organic Views"
              description="Generated during the first six months of Seneca's breakout social growth."
            />

            <LargeProof
              value="4.8M"
              label="Unique Viewers"
              description="Massive awareness extending far beyond the community's local follower base."
            />

            <LargeProof
              value="95.7K"
              label="Interactions"
              description="Meaningful audience engagement generated through organic social content."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL-SYSTEM OUTCOME
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

          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                140
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
              <p className="text-lg leading-[1.8] text-white/60 md:text-xl">
                The full Seneca system captured 140 brochure requests and 116
                new contacts during 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-white/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated funnels, supported by the rebuilt digital
                presence and the organic discovery Media King Group drives
                through search and social.
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
            The Seneca Senior Living Story
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
              fontFamily:
                "Kinta, sans-serif",
            }}
          >
            Steady visibility.
            <br />

            <span className="text-black/25">
              Steady census pipeline.
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
                    fontFamily:
                      "Kinta, sans-serif",
                  }}
                >
                  Lakewood Village
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  Strong demand. An unusually efficient digital front door.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/lakewood-village"
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
              to="/case-studies/oakdale/foxwood-springs"
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
              ← Previous: Foxwood Springs
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
          fontFamily:
            "Kinta, sans-serif",
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
          fontFamily:
            "Kinta, sans-serif",
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
          fontFamily:
            "Kinta, sans-serif",
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
        ${
          bordered
            ? "border-x border-white/10 px-5"
            : "px-5"
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
          fontFamily:
            "Kinta, sans-serif",
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