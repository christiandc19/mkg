// src/pages/ChristianCareMesquiteCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ChristianCareLogo from "../assets/images/CCCS-Logo.png";

const CHRISTIAN_CARE_MESQUITE_HERO =
  "https://christiancaremesquite.org/wp-content/uploads/2026/04/cc-mesquite-hero-2.jpg";

export default function ChristianCareMesquiteCaseStudy() {
  // =========================================================
  // SEO
  // =========================================================

  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Christian Care Mesquite Case Study | Senior Living Marketing | Media King Group";

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
      "How Media King Group rebuilt Christian Care Mesquite's website, SEO, and organic social presence to grow visibility and generate measurable inquiry demand."
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
  // PRIMARY RESULTS
  // =========================================================

  const primaryResults = [
    {
      value: "56K+",
      label: "Social Followers",
      detail:
        "Built from zero across Facebook and Instagram",
    },
    {
      value: "46M",
      label: "Lifetime Reel Views",
      detail:
        "Organic Meta content performance",
    },
    {
      value: "3,000",
      label: "Monthly Organic Visits",
      detail:
        "SEO traffic measured in July 2026",
    },
    {
      value: "299",
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
          backgroundImage: `url(${CHRISTIAN_CARE_MESQUITE_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Base image darkening */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Left-side readability gradient */}
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

        {/* Warm accent glow */}
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
            {/* Christian Care logo */}
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
                Oakdale Network · Community Case Study 03
              </span>
            </div>

            {/* Title */}
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
              Mesquite
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
              Local trust, made findable.
            </p>

            {/* Scope */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Website Rebuild",
                "Local SEO",
                "Organic Social",
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
                A trusted community.
                <br />

                <span className="text-black/25">
                  A crowded digital market.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Christian Care Mesquite is a
                faith-based senior living community
                competing in a crowded Dallas–Fort
                Worth market.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The opportunity was to make the
                community&apos;s existing reputation
                easier to discover online, clearly
                communicate its care options, and
                create stronger pathways from
                research to inquiry.
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
            src={CHRISTIAN_CARE_MESQUITE_HERO}
            alt="Christian Care Mesquite senior living community"
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
              The Community Behind The Brand
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
              The trust already existed.
              <br />

              <span className="text-white/45">
                Digital made it easier to find.
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
                A clearer path
                <br />

                <span className="text-black/25">
                  from search to inquiry.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group rebuilt the
                website around conversion-focused
                service pages for independent living
                and nursing &amp; rehabilitation.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Floor plans, clearer inquiry paths,
                and local SEO for the Mesquite
                market gave prospective residents
                and families a stronger digital
                experience from discovery through
                action.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Service-Line Structure"
              text="Dedicated independent living and nursing & rehabilitation content created a clearer path for different family needs."
            />

            <BuildCard
              number="02"
              title="Conversion Paths"
              text="Floor plans, service content, and inquiry points were reorganized to move high-intent visitors toward the next step."
            />

            <BuildCard
              number="03"
              title="Local SEO"
              text="Search foundations targeted the Mesquite market so families could find the community at the moment of highest intent."
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
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                Local trust.
                <br />

                <span className="text-white/25">
                  Massive digital reach.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                Christian Care Mesquite became one
                of the strongest examples of how
                website, SEO, organic content, and
                inquiry infrastructure can reinforce
                one another.
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

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <ProofCard
              value="7,200+"
              label="Homepage Views"
              text="Strong traffic into the rebuilt community website."
            />

            <ProofCard
              value="28"
              label="Direct Site Inquiries"
              text="Visitors converted directly through the site's contact page."
            />

            <ProofCard
              value="573"
              label="Ranking Keywords"
              text="A broad organic search footprint supporting local discovery."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO PERFORMANCE
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
                Visibility that
                <br />

                <span className="text-black/25">
                  compounds every month.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Christian Care Mesquite reached
                approximately 3,000 monthly organic
                visits, up 18% month over month,
                across 573 ranking keywords.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That organic traffic carried an
                estimated equivalent ad value of
                roughly $9,500 per month —
                visibility generated through search
                rather than purchased traffic.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="3,000"
              label="Monthly Organic Visits"
              text="Organic search traffic measured by Semrush."
            />

            <ProofCard
              value="+18%"
              label="Month-Over-Month"
              text="Continued organic traffic growth at the time of measurement."
            />

            <ProofCard
              value="~$9.5K"
              label="Monthly Ad Value"
              text="Estimated equivalent value of the site's organic search traffic."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          GOOGLE SEARCH PERFORMANCE
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
                Two-Year Search Performance
              </SectionLabel>

              <h2
                className="
                  text-[44px]
                  leading-[0.96]
                  tracking-[-0.045em]
                  sm:text-[58px]
                  md:text-[72px]
                "
                style={{
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                341K
                <br />

                <span className="text-white/25">
                  Google impressions.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                From July 2024 through July 2026,
                the site generated approximately
                341,000 Google impressions and 9,200
                organic search clicks.
              </p>

              <div className="mt-8 grid grid-cols-2 border-y border-white/10">
                <div className="border-r border-white/10 py-6 pr-6">
                  <div
                    className="text-[40px] leading-none"
                    style={{
                      fontFamily:
                        "Kinta, sans-serif",
                    }}
                  >
                    9.2K
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[#f0a608]">
                    Google Clicks
                  </p>
                </div>

                <div className="py-6 pl-6">
                  <div
                    className="text-[40px] leading-none"
                    style={{
                      fontFamily:
                        "Kinta, sans-serif",
                    }}
                  >
                    2.7%
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[#f0a608]">
                    Search CTR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL PERFORMANCE
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
                From zero
                <br />

                <span className="text-black/25">
                  to 56,000+ followers.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group built the
                community&apos;s Meta audience from
                zero to more than 56,000 followers —
                approximately 45,000 on Facebook and
                11,000 on Instagram.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The content generated 46 million
                lifetime reel views and 27.6 million
                Facebook views since January 2025
                alone.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProofCard
              value="45K"
              label="Facebook Followers"
              text="Built organically as part of the community's social engine."
            />

            <ProofCard
              value="11K"
              label="Instagram Followers"
              text="Supporting the community's broader digital audience."
            />

            <ProofCard
              value="46M"
              label="Lifetime Reel Views"
              text="Organic video reach across Meta platforms."
            />

            <ProofCard
              value="27.6M"
              label="Facebook Views"
              text="Generated since January 2025 alone."
            />
          </div>

          <div
            className="
              mt-5
              rounded-[24px]
              border
              border-black/10
              bg-[#f6f5f2]
              p-7
              sm:p-9
            "
          >
            <div
              className="
                grid
                gap-7
                md:grid-cols-[0.65fr_1.35fr]
                md:items-center
              "
            >
              <div>
                <div
                  className="
                    text-[54px]
                    leading-none
                    tracking-[-0.05em]
                  "
                  style={{
                    fontFamily:
                      "Kinta, sans-serif",
                  }}
                >
                  92%
                </div>

                <p
                  className="
                    mt-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#b77800]
                  "
                >
                  Recommend Rating
                </p>
              </div>

              <p className="text-base leading-[1.8] text-black/55">
                The community carried a 92%
                recommendation rating across 71
                reviews — reinforcing the trust
                story behind the digital growth.
              </p>
            </div>
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
                299
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
                The full system captured 299
                brochure requests and 263 new
                contacts during 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-white/45">
                Those inquiries were captured
                through Oakdale&apos;s
                partner-operated brochure funnels,
                fed by the rebuilt website and the
                organic demand Media King Group
                drives through search and social.
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
          py-20
          sm:px-8
          md:py-28
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
            The Christian Care Mesquite Story
          </p>

          <h2
            className="
              mx-auto
              mt-6
              text-[46px]
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-[62px]
              md:text-[76px]
            "
            style={{
              fontFamily:
                "Kinta, sans-serif",
            }}
          >
            Local trust,
            <br />

            <span className="text-black/25">
              made findable.
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
                  Foxwood Springs
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  The full-system story: social +
                  web + SEO.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/foxwood-springs"
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
              to="/case-studies/oakdale/asbury-heights"
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
              ← Previous: Asbury Heights
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