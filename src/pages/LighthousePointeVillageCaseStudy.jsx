// src/pages/LighthousePointeVillageCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import LighthouseLogo from "../assets/images/lighthouse-logo.png";

const LIGHTHOUSE_HERO =
  "https://lighthousepointevillage.org/wp-content/uploads/2025/10/lighthouse-pointe-hero-image-20251015-190401.webp";

export default function LighthousePointeVillageCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Lighthouse Pointe Village Case Study | Senior Living Marketing | Media King Group";

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
      "How Media King Group rebuilt Lighthouse Pointe Village's website and local SEO presence to improve discovery, engagement, and senior living inquiry performance."
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
      value: "12.1K",
      label: "Site Sessions",
      detail:
        "Two-year website engagement",
    },
    {
      value: "335K",
      label: "Google Impressions",
      detail:
        "Search visibility from July 2024 through July 2026",
    },
    {
      value: "5.4K",
      label: "Google Clicks",
      detail:
        "Organic search traffic into the site",
    },
    {
      value: "128",
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
          backgroundImage: `url(${LIGHTHOUSE_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/46" />

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
                  src={LighthouseLogo}
                  alt="Lighthouse Pointe Village"
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
                Oakdale Network · Community Case Study 08
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                text-[42px]
                leading-[0.92]
                tracking-[-0.045em]
                text-white
                sm:text-[60px]
                md:text-[76px]
                lg:text-[92px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              Lighthouse Pointe
              <br />
              Village
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
              Show the floor plans. Win the tour.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Website Rebuild",
                "Floor Plans",
                "Local SEO",
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
          SITUATION
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
                Distinctive appeal.
                <br />

                <span className="text-black/25">
                  Weak digital translation.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Lighthouse Pointe Village had a distinctive community
                experience, but that appeal was not translating strongly
                enough into digital discovery and inquiry.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Families needed a clearer way to understand the community,
                explore living options, compare floor plans, and move from
                interest to action.
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
            src={LIGHTHOUSE_HERO}
            alt="Lighthouse Pointe Village senior living community"
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
              Make The Decision Easier
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
              Show more of the experience.
              <br />

              <span className="text-white/45">
                Give families more confidence.
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
                Make the decision
                <br />

                <span className="text-black/25">
                  easier to visualize.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group rebuilt the Lighthouse Pointe Village website
                with greater emphasis on the content families use to make
                decisions — especially floor plans.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Local SEO strengthened discovery, while clearer paths through
                the site helped visitors move from initial research into
                deeper consideration.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Website Rebuild"
              text="A redesigned site created a clearer, more intentional digital experience for families researching the community."
            />

            <BuildCard
              number="02"
              title="Floor-Plan Emphasis"
              text="Floor plans were elevated as high-intent decision content instead of being buried inside the website."
            />

            <BuildCard
              number="03"
              title="Local SEO"
              text="Search foundations helped Lighthouse Pointe reach families who were not already familiar with the brand."
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
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-20">
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
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Found more often.
                <br />

                <span className="text-white/25">
                  Explored more deeply.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                Lighthouse Pointe combined healthy organic discovery with
                deep website engagement — exactly what a consideration-heavy
                senior living journey needs.
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
          WEBSITE ENGAGEMENT
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
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Visitors didn&apos;t
                <br />

                <span className="text-black/25">
                  just arrive. They stayed.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                The rebuilt homepage generated more than 2,700 views, while
                the floor-plan page became one of the site&apos;s
                top-performing destinations.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Across the two-year measurement period, Lighthouse Pointe
                generated 12,100 site sessions with an average session
                duration of 2 minutes and 33 seconds.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="2,700+"
              label="Homepage Views"
              text="Traffic into the rebuilt Lighthouse Pointe Village website."
            />

            <ProofCard
              value="2m 33s"
              label="Average Session"
              text="Visitors spent meaningful time exploring the community's digital experience."
            />

            <ProofCard
              value="Top"
              label="Floor-Plan Page"
              text="Floor-plan content ranked among the site's strongest-performing pages."
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
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Discovery beyond
                <br />

                <span className="text-black/25">
                  the brand name.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Lighthouse Pointe reached approximately 1,500 monthly organic
                visits, with 63% of search traffic coming from non-branded
                discovery.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That organic traffic carried an estimated equivalent Google
                Ads value of approximately $3,900 per month.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="1,500"
              label="Monthly Organic Visits"
              text="Consistent organic search traffic reaching the rebuilt site."
            />

            <ProofCard
              value="63%"
              label="Non-Branded"
              text="The majority of organic traffic came from broader discovery, not just brand searches."
            />

            <ProofCard
              value="~$3.9K"
              label="Monthly Ad Value"
              text="Estimated equivalent value of the site's organic visibility."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH PERFORMANCE
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
                  leading-[0.94]
                  tracking-[-0.05em]
                  sm:text-[58px]
                  md:text-[72px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                335K
                <br />

                <span className="text-white/25">
                  search impressions.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                From July 2024 through July 2026, Lighthouse Pointe generated
                approximately 335,000 Google impressions and 5,400 organic
                search clicks.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/60">
                Combined with long average session duration, that performance
                showed the site was attracting visitors who were willing to
                spend meaningful time researching the community.
              </p>

              <div className="mt-9 grid grid-cols-3 border-y border-white/10">
                <MiniDarkMetric
                  value="335K"
                  label="Google Impressions"
                />

                <MiniDarkMetric
                  value="5.4K"
                  label="Google Clicks"
                  bordered
                />

                <MiniDarkMetric
                  value="12.1K"
                  label="Site Sessions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONVERSION FEATURE
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
              128
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
              Lighthouse Pointe Village generated 128 brochure requests and
              111 new contacts during 2025.
            </p>
          </div>

          <div className="relative min-h-[390px] lg:min-h-full">
            <img
              src={LIGHTHOUSE_HERO}
              alt="Lighthouse Pointe Village community"
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
          FULL SYSTEM ATTRIBUTION
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
                111
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
                Lighthouse Pointe Village generated 128 brochure requests and
                111 new contacts during 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-white/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated funnels, supported by the website Media King
                Group rebuilt and the organic discovery reaching it.
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
            The Lighthouse Pointe Village Story
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
            Show the floor plans.
            <br />

            <span className="text-black/25">
              Win the tour.
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
                  Vanadium Woods
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  High engagement. More visibility needed.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/vanadium-woods"
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
              to="/case-studies/oakdale/christian-care-allen"
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
              ← Previous: Christian Care Allen
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