// src/pages/VanadiumWoodsCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import VanadiumLogo from "../assets/images/vanadium-logo.png";

const VANADIUM_HERO =
  "https://vanadiumwoods.org/wp-content/uploads/2025/10/vanadium-woods-hero-image.webp";

export default function VanadiumWoodsCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Vanadium Woods Case Study | Senior Living Marketing | Media King Group";

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
      "How Media King Group rebuilt Vanadium Woods' website and SEO foundation to expand qualified discovery while preserving strong visitor engagement."
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
      value: "2,500+",
      label: "Homepage Views",
      detail:
        "Traffic into the rebuilt website",
    },
    {
      value: "2m+",
      label: "Avg. Time on Page",
      detail:
        "Deep visitor engagement on the homepage",
    },
    {
      value: "230",
      label: "Ranking Keywords",
      detail:
        "Organic search footprint, up 8% month over month",
    },
    {
      value: "146",
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
          backgroundImage: `url(${VANADIUM_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Base image darkening */}
        <div className="absolute inset-0 bg-black/46" />

        {/* Left-side readability */}
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

        {/* MKG gold glow */}
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

        {/* MKG watermark */}
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
            {/* Vanadium Woods logo */}
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
                  src={VanadiumLogo}
                  alt="Vanadium Woods"
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
                Oakdale Network · Community Case Study 09
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
              Vanadium
              <br />
              Woods
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
              Engagement this deep just needed an audience.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Website Rebuild",
                "SEO Groundwork",
                "Organic Discovery",
                "Conversion Strategy",
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
                People who found it
                <br />

                <span className="text-black/25">
                  stayed and read.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Vanadium Woods already showed strong visitor engagement.
                People who reached the community&apos;s digital experience
                were willing to spend time learning more.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The problem was reach. Too few qualified families were finding
                the community in the first place.
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
            src={VANADIUM_HERO}
            alt="Vanadium Woods senior living community"
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
              Quality Before Scale
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
              The attention was already there.
              <br />

              <span className="text-white/45">
                More families needed to arrive.
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
                Preserve the engagement.
                <br />

                <span className="text-black/25">
                  Expand the discovery.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group rebuilt the Vanadium Woods website and
                established the SEO groundwork needed to grow qualified
                organic discovery.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The strategy was straightforward: strengthen the digital front
                door without losing the engagement already happening once
                visitors arrived.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Website Rebuild"
              text="A stronger digital foundation improved how Vanadium Woods presented its community to prospective residents and families."
            />

            <BuildCard
              number="02"
              title="SEO Groundwork"
              text="Organic search foundations were established to increase the number of qualified visitors discovering the community."
            />

            <BuildCard
              number="03"
              title="Qualified Discovery"
              text="The system focused on bringing more high-intent families into an experience that was already holding their attention."
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
                Quality was there.
                <br />

                <span className="text-white/25">
                  Reach had to catch up.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                Vanadium Woods showed that a smaller traffic footprint can
                still produce meaningful outcomes when the people arriving are
                genuinely engaged.
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
                      delay:
                        index * 0.08,
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
        </div>
      </section>

      {/* =====================================================
          ENGAGEMENT
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
                Website Engagement
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
                More than two minutes
                <br />

                <span className="text-black/25">
                  of attention.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                The rebuilt homepage generated more than 2,500 views, with
                visitors spending more than two minutes on the page on
                average.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                For a senior living research journey, that depth of engagement
                signaled that the people reaching Vanadium Woods were not
                simply bouncing through the site. They were taking time to
                evaluate the community.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <LargeProof
              value="2,500+"
              label="Homepage Views"
              description="Traffic into the rebuilt Vanadium Woods digital experience."
            />

            <LargeProof
              value="2m+"
              label="Average Time on Page"
              description="Visitors demonstrated sustained interest once they reached the homepage."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
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
                Grow the audience
                <br />

                <span className="text-black/25">
                  without losing quality.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Vanadium Woods was generating approximately 377 monthly
                organic visits across 230 ranking keywords.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Its keyword footprint increased 8% month over month at the
                time of measurement, showing the discovery layer beginning to
                expand.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="377"
              label="Monthly Organic Visits"
              text="Qualified search traffic reaching the Vanadium Woods site."
            />

            <ProofCard
              value="230"
              label="Ranking Keywords"
              text="Organic search terms helping families discover the community."
            />

            <ProofCard
              value="+8%"
              label="Keyword Growth"
              text="Month-over-month expansion of the site's organic keyword footprint."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL PERFORMANCE FEATURE
      ====================================================== */}

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
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
              Engagement Signal
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
                fontFamily:
                  "Kinta, sans-serif",
              }}
            >
              2m+
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
              Average Time On Page
            </p>

            <p className="mt-7 max-w-md text-base leading-[1.75] text-white/45">
              Once visitors reached Vanadium Woods, they spent meaningful time
              engaging with the community&apos;s digital experience.
            </p>
          </div>

          <div className="relative min-h-[390px] lg:min-h-full">
            <img
              src={VANADIUM_HERO}
              alt="Vanadium Woods community"
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
          THE OPPORTUNITY
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
                The Opportunity
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
                The site didn&apos;t need
                <br />

                <span className="text-white/25">
                  better attention.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                It needed more of the right people to arrive.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/60">
                High time-on-page showed that Vanadium Woods already had the
                ability to hold interest. The SEO work focused on growing the
                qualified audience feeding that experience.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <DarkStep
              number="01"
              title="Increase Discovery"
              text="Build a broader organic footprint so more qualified families find Vanadium Woods."
            />

            <DarkStep
              number="02"
              title="Preserve Engagement"
              text="Maintain the deeper research behavior already happening once visitors arrive."
            />

            <DarkStep
              number="03"
              title="Capture Demand"
              text="Connect engaged visitors with the broader Oakdale inquiry system."
            />
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                146
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
                Vanadium Woods generated 146 brochure requests and 118 new
                contacts during 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-black/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated funnels, supported by the website Media King
                Group rebuilt and the organic discovery feeding into it.
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
            The Vanadium Woods Story
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
            Engagement this deep
            <br />

            <span className="text-black/25">
              just needed an audience.
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
                  Canterbury Place
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  Specialized care. A different buyer journey.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/canterbury-place"
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
              to="/case-studies/oakdale/lighthouse-pointe-village"
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
              ← Previous: Lighthouse Pointe Village
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
          fontFamily:
            "Kinta, sans-serif",
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