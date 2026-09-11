// src/pages/FatPuppyCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BG from "../assets/images/mkg-hero-bg.webp";

export default function FatPuppyCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Fat Puppy Case Study | Media King Group";

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
      "How Media King Group grew Fat Puppy from 12K to 735K Facebook followers, launched TikTok from zero to 424K, and built a 1M+ organic entertainment audience."
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

  const results = [
    {
      value: "735K",
      label: "Facebook Followers",
      detail: "Up from 12,000",
    },
    {
      value: "424K",
      label: "TikTok Followers",
      detail: "Built from zero",
    },
    {
      value: "1M+",
      label: "Combined Audience",
      detail: "Across Facebook + TikTok",
    },
    {
      value: "70M+",
      label: "Top Video Views",
      detail: "Individual video performance",
    },
  ];

  const videoProof = [
    "70.1M",
    "50.4M",
    "44M",
    "40.1M",
    "39.3M",
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

        {/* Decorative glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#f0a608]/10
            blur-[140px]
          "
        />

        {/* MKG watermark */}
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
                Entertainment · Viral-First Content System
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
                lg:text-[122px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              Fat Puppy
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
              Tens of millions of views per video —
              <br className="hidden sm:block" />
              on a system, not luck.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Facebook",
                "TikTok",
                "Viral Content",
                "Audience Growth",
                "Entertainment",
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
                Attention was
                <br />

                <span className="text-black/25">
                  the entire business.
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
                Fat Puppy was an entertainment page with approximately
                12,000 Facebook followers, no TikTok presence, and no
                repeatable content engine.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                In entertainment media, attention isn&apos;t a secondary
                metric. It&apos;s the product.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The opportunity was to replace isolated posts with a system
                capable of generating attention repeatedly and at scale.
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
                A viral-first
                <br />

                <span className="text-black/25">
                  production system.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group built a drama- and prank-style
                direct-to-consumer content system engineered around
                retention.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Instead of relying on occasional creative breakthroughs,
                content was produced around repeatable structures and a
                relentless publishing cadence.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <SystemCard
              number="01"
              title="Viral-First Concepts"
              text="Content ideas were designed around entertainment value and the ability to earn attention immediately."
            />

            <SystemCard
              number="02"
              title="Retention"
              text="The production structure focused on keeping viewers engaged long enough for distribution to compound."
            />

            <SystemCard
              number="03"
              title="Publishing Cadence"
              text="A repeatable production engine made volume and consistency part of the growth strategy."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM
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
                The Content Engine
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
                Build for
                <br />
                the scroll.
                <br />

                <span className="text-white/25">
                  Then earn the share.
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-white/55">
                Viral performance wasn&apos;t treated as an unpredictable
                bonus. The production process was designed around the
                mechanics that give content a chance to spread.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/55">
                Concepts needed to earn the first second, maintain curiosity,
                deliver a payoff, and create enough emotional reaction to
                encourage people to keep watching or share.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DarkStep
              number="01"
              title="Hook"
              text="Create immediate tension, curiosity, or entertainment."
            />

            <DarkStep
              number="02"
              title="Retention"
              text="Keep the story moving so viewers stay for the payoff."
            />

            <DarkStep
              number="03"
              title="Payoff"
              text="Deliver the moment the setup promised."
            />

            <DarkStep
              number="04"
              title="Repeat"
              text="Produce consistently enough for performance to compound."
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
                12K became
                <br />

                <span className="text-black/20">
                  1M+.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/55">
                The content engine turned Fat Puppy from a small Facebook
                page into a cross-platform entertainment audience exceeding
                one million followers.
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
                    delay: index * 0.07,
                  }}
                  className={`
                    min-w-0
                    p-6
                    sm:p-8
                    lg:p-10

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
                      text-[44px]
                      leading-none
                      tracking-[-0.055em]
                      text-white
                      sm:text-[56px]
                      lg:text-[64px]
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
          FACEBOOK
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
              <SectionLabel>Facebook Growth</SectionLabel>

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
                12K
                <br />

                <span className="text-black/20">
                  → 735K
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-black/60">
                Facebook grew from approximately 12,000 followers to
                735,000.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That growth transformed an existing page into a major
                distribution channel for the entertainment brand.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="12K"
              label="Starting Audience"
              text="Facebook following before the system scaled."
            />

            <ProofCard
              value="735K"
              label="Facebook Followers"
              text="Audience reached through the viral-first content system."
            />

            <ProofCard
              value="60x+"
              label="Audience Scale"
              text="Approximate increase compared with the starting Facebook audience."
            />
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
                  → 424K
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-black/60">
                Fat Puppy entered TikTok without an existing audience.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The system built that presence from zero to approximately
                424,000 followers.
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
                value="424K"
                label="TikTok Followers"
                text="Built from a starting audience of zero."
              />

              <LargeMetric
                value="1M+"
                label="Combined Audience"
                text="Total audience across Facebook and TikTok."
                bordered
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO PERFORMANCE
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
                Video Performance
              </SectionLabel>

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
                Not one
                <br />
                viral hit.
                <br />

                <span className="text-white/25">
                  A pattern.
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-white/55">
                Individual Fat Puppy videos repeatedly reached tens of
                millions of views.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/55">
                Top-performing examples include 70.1 million, 50.4 million,
                44 million, 40.1 million, and 39.3 million views.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <p
              className="
                mb-5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/30
              "
            >
              Selected Video View Counts
            </p>

            <div
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
              "
            >
              <div className="grid grid-cols-2 sm:grid-cols-5">
                {videoProof.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{
                      opacity: 0,
                      y: 16,
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
                      delay: index * 0.07,
                    }}
                    className={`
                      p-7
                      sm:p-6
                      lg:p-8

                      ${
                        index !== videoProof.length - 1
                          ? "border-white/10 sm:border-r"
                          : ""
                      }

                      ${
                        index < 4
                          ? "border-b border-white/10 sm:border-b-0"
                          : ""
                      }

                      ${
                        index % 2 === 0
                          ? "max-sm:border-r max-sm:border-white/10"
                          : ""
                      }
                    `}
                  >
                    <div
                      className="
                        text-[34px]
                        leading-none
                        tracking-[-0.045em]
                        text-white
                        sm:text-[31px]
                        lg:text-[40px]
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
                        tracking-[0.16em]
                        text-[#f0a608]
                      "
                    >
                      Views
                    </p>
                  </motion.div>
                ))}
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
                Virality became
                <br />

                <span className="text-black/25">
                  operational.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                The important result isn&apos;t that one piece of content
                reached tens of millions of people.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Multiple videos repeatedly reached that scale because the
                system was designed around production, retention, and
                consistent publishing rather than waiting for luck.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <SystemCard
              number="01"
              title="Repeatability"
              text="Formats could be produced again instead of disappearing after one successful post."
            />

            <SystemCard
              number="02"
              title="Volume"
              text="Consistent production created more opportunities for high-performing content to emerge."
            />

            <SystemCard
              number="03"
              title="Distribution"
              text="Facebook and TikTok gave the brand multiple engines for audience expansion."
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
            Tens of millions
            <br />
            of views per video —
            <br />

            <span className="text-black/25">
              on a system, not luck.
            </span>
          </h2>
        </div>
      </section>

      {/* =====================================================
          NEXT CASE
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
                  Next Case Study
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
                  DDI Designs
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
                  Turning a design portfolio into a social audience and
                  sales engine.
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
                Explore Case Studies
                <span aria-hidden>→</span>
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
              to="/case-studies/beverly-hills-periodontist"
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
              ← Beverly Hills Periodontist
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
        p-7
      "
    >
      <div
        className="
          text-[42px]
          leading-none
          tracking-[-0.045em]
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

      <p className="mt-4 text-sm leading-[1.7] text-black/45">
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