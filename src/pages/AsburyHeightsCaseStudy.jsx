// src/pages/AsburyHeightsCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AsburyLogo from "../assets/images/asbury-logo.png";

const ASBURY_HERO =
  "https://asburyheights.org/wp-content/uploads/2025/10/Asbury-Heights-Hero-Image.webp";

export default function AsburyHeightsCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Asbury Heights Case Study | Senior Living Marketing | Media King Group";

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
      "How Media King Group rebuilt Asbury Heights' website and SEO presence, growing organic visibility and supporting inquiry demand across the Oakdale network."
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

  const results = [
    {
      value: "9,250+",
      label: "Homepage Views",
      detail:
        "Traffic into the rebuilt Asbury Heights website",
    },
    {
      value: "2,800",
      label: "Monthly Organic Visits",
      detail:
        "Driven through the rebuilt website and SEO foundation",
    },
    {
      value: "718",
      label: "Ranking Keywords",
      detail:
        "Organic search visibility across the community site",
    },
    {
      value: "526K",
      label: "Google Impressions",
      detail:
        "Generated over the two-year search period",
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
          backgroundImage: `url(${ASBURY_HERO})`,
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
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
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
                  src={AsburyLogo}
                  alt="Asbury Heights"
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
                Oakdale Network · Community Case Study 02
              </span>
            </div>

            <h1
              className="
                text-[48px]
                leading-[0.92]
                tracking-[-0.045em]
                text-white
                sm:text-[66px]
                md:text-[82px]
                lg:text-[98px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              Asbury
              <br />
              Heights
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
              Reputation, finally visible online.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Website Rebuild",
                "Local SEO",
                "Service-Line Strategy",
                "Organic Social",
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
                A strong reputation.
                <br />

                <span className="text-black/25">
                  A digital presence that didn&apos;t reflect it.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Asbury Heights already had real credibility offline, but the
                website did not communicate the depth of the community,
                services, or experience.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The challenge was to build a digital experience capable of
                supporting both census demand and staffing needs while making
                the community easier to discover through search.
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
            src={ASBURY_HERO}
            alt="Asbury Heights senior living community"
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
              Reputation Meets Visibility
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
              The experience was established.
              <br />

              <span className="text-white/45">
                The digital presence needed to catch up.
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
                A site built
                <br />

                <span className="text-black/25">
                  for every decision path.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group rebuilt the Asbury Heights website with
                dedicated service-line pages for independent living, assisted
                living, and skilled nursing.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Floor plans, amenities, careers, and local SEO were built into
                the structure so the site could support prospective residents,
                families, and potential employees from the same digital
                ecosystem.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Service-Line Pages"
              text="Dedicated content for independent living, assisted living, and skilled nursing so families could reach the right information quickly."
            />

            <BuildCard
              number="02"
              title="Floor Plans & Amenities"
              text="High-intent decision content made easier to find, helping prospective residents understand the community before taking the next step."
            />

            <BuildCard
              number="03"
              title="Careers + Local SEO"
              text="A structure supporting both resident demand and staffing visibility, backed by local search foundations."
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
                Reputation,
                <br />

                <span className="text-white/25">
                  finally visible online.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                The rebuilt Asbury Heights digital ecosystem expanded search
                visibility, deepened website engagement, and created clearer
                paths into both resident and staffing demand.
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

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <ProofCard
              value="11.3K"
              label="Google Clicks"
              text="Generated across the two-year search period from July 2024 through July 2026."
            />

            <ProofCard
              value="7.7K"
              label="Site Sessions"
              text="Search traffic translated into meaningful website engagement across the rebuilt digital experience."
            />

            <ProofCard
              value="$5.4K"
              label="Monthly Equivalent Ad Value"
              text="Estimated value of organic search traffic according to the SEO dataset."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SITE ENGAGEMENT
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
                Site Engagement
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
                Families went
                <br />

                <span className="text-black/25">
                  deeper than the homepage.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Independent living, skilled nursing, assisted living, and
                floor-plan pages all ranked among the site&apos;s most-read
                content.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The careers section also generated more than 2,400 views,
                giving the rebuilt site a role in staffing demand as well as
                resident acquisition.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <LargeProof
              value="9,250+"
              label="Homepage Views"
              description="A significant volume of traffic into the rebuilt Asbury Heights website."
            />

            <LargeProof
              value="2,400+"
              label="Careers Views"
              description="Supporting recruiting visibility alongside census demand."
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
                Search Performance
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
                526K
                <br />

                <span className="text-white/25">
                  Google impressions.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                Across the two-year search period from July 2024 through July
                2026, Asbury Heights generated 526,000 Google impressions and
                11,300 clicks.
              </p>

              <div className="mt-8 grid grid-cols-2 border-y border-white/10">
                <div className="border-r border-white/10 py-6 pr-6">
                  <div
                    className="text-[38px] leading-none text-white"
                    style={{
                      fontFamily: "Kinta, sans-serif",
                    }}
                  >
                    718
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[#f0a608]">
                    Ranking Keywords
                  </p>
                </div>

                <div className="py-6 pl-6">
                  <div
                    className="text-[38px] leading-none text-white"
                    style={{
                      fontFamily: "Kinta, sans-serif",
                    }}
                  >
                    2.8K
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[#f0a608]">
                    Monthly Organic Visits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL IMPACT
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
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Social that
                <br />

                <span className="text-black/25">
                  sends people somewhere.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Asbury Heights started with an existing Facebook audience of
                roughly 3,000 followers and grew to approximately 4,000 after
                takeover.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                More importantly, the social channel generated over 460,000
                views and roughly 900 Facebook link clicks — an increase of
                847% — sending audiences directly into the website ecosystem.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="~4K"
              label="Facebook Followers"
              text="Up from approximately 3,000 when Media King Group took over."
            />

            <ProofCard
              value="460K+"
              label="Social Views"
              text="Organic content extended the community's reach beyond search."
            />

            <ProofCard
              value="+847%"
              label="Facebook Link Clicks"
              text="Roughly 900 link clicks directing audiences from social into the website."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL CONVERSION FEATURE
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
              145
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
              The full system captured 145 brochure requests and 111 new
              contacts during 2025.
            </p>
          </div>

          <div className="relative min-h-[390px] lg:min-h-full">
            <img
              src={ASBURY_HERO}
              alt="Asbury Heights senior living"
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
                The full system captured 145 brochure requests and 111 new
                contacts during 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-white/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated brochure funnels, fed by the rebuilt website,
                organic search presence, and digital demand Media King Group
                helps generate.
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
            The Asbury Heights Story
          </p>

          <h2
            className="
              mx-auto
              mt-6
              text-[44px]
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-[60px]
              md:text-[74px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            The strongest reputation,
            <br />

            <span className="text-black/25">
              finally visible online.
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
                  Christian Care Mesquite
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  Local trust, made findable.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/christian-care-mesquite"
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
              to="/case-studies/oakdale/robin-run-senior-living"
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
              ← Previous: Robin Run
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