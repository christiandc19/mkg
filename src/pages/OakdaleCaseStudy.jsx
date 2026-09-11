// src/pages/OakdaleCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// =========================================================
// LOCAL ASSETS
// =========================================================

import OakdaleLogo from "../assets/images/oakdale-logo.png";
import OakdaleHero from "../assets/images/OSA.webp";

import RobinLogo from "../assets/images/robin-logo.png";
import AsburyLogo from "../assets/images/asbury-logo.png";
import ChristianCareLogo from "../assets/images/CCCS-Logo.png";
import FoxwoodLogo from "../assets/images/foxwood-logo.png";
import SenecaLogo from "../assets/images/seneca-logo.png";
import LakewoodLogo from "../assets/images/lakewood-logo.png";
import LighthouseLogo from "../assets/images/lighthouse-logo.png";
import VanadiumLogo from "../assets/images/vanadium-logo.png";
import CanterburyLogo from "../assets/images/canterbury-logo.png";

// =========================================================
// COMMUNITY PHOTOGRAPHY
// =========================================================

const ROBIN_IMAGE =
  "https://robinrunseniorliving.org/wp-content/uploads/2025/07/medium-vecteezy_ai-generated-elderly-couple-relishing-active-retirement-and_35423179_medium.webp";

const ASBURY_IMAGE =
  "https://asburyheights.org/wp-content/uploads/2025/10/Asbury-Heights-Hero-Image.webp";

const MESQUITE_IMAGE =
  "https://christiancaremesquite.org/wp-content/uploads/2026/04/cc-mesquite-hero-2.jpg";

const FOXWOOD_IMAGE =
  "https://foxwoodseniorliving.org/wp-content/uploads/2025/09/Senior-Living-in-Raymore-Missouri-2.webp";

const SENECA_IMAGE =
  "https://senecaseniorliving.org/wp-content/uploads/2025/10/Seneca-Hero-Image.webp";

const ALLEN_IMAGE =
  "https://christiancareallen.org/wp-content/uploads/2026/04/cc-allen-hero.webp";

const LIGHTHOUSE_IMAGE =
  "https://lighthousepointevillage.org/wp-content/uploads/2025/10/lighthouse-pointe-hero-image-20251015-190401.webp";

const VANADIUM_IMAGE =
  "https://vanadiumwoods.org/wp-content/uploads/2025/10/vanadium-woods-hero-image.webp";

const CANTERBURY_IMAGE =
  "https://canterburyskillednursing.com/wp-content/uploads/2026/04/canterbury-hero.jpg";

// We have not added a Lakewood-specific hero image yet.
// OSA.webp is used as the temporary portfolio-level visual.
const LAKEWOOD_IMAGE = OakdaleHero;

// =========================================================
// PAGE
// =========================================================

export default function OakdaleCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Oakdale Seniors Alliance Case Study | Media King Group";

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
      "How Media King Group built a connected digital ecosystem across ten Oakdale Seniors Alliance communities — generating 300K+ followers, 150K+ organic website visits, and 2,800+ inquiries."
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

  const topResults = [
    {
      value: "300K+",
      label: "Combined Followers",
      detail:
        "Audience built across Oakdale communities",
    },
    {
      value: "150K+",
      label: "Organic Website Visits",
      detail:
        "Across the rebuilt community network in 2025",
    },
    {
      value: "2,800+",
      label: "Brochure Requests",
      detail:
        "Captured through partner-operated funnels in 2025",
    },
    {
      value: "+69%",
      label: "QoQ Demand Growth",
      detail:
        "Across the managed portfolio in Q4 2025",
    },
  ];

  const systemItems = [
    {
      number: "01",
      title: "Unify The Brand",
      text:
        "Establish shared standards across the portfolio while preserving the local identity and personality of each individual community.",
    },
    {
      number: "02",
      title: "Rebuild The Digital Front Doors",
      text:
        "Create conversion-focused community websites with clearer service pages, floor plans, brochure paths, and tour calls-to-action.",
    },
    {
      number: "03",
      title: "Build Organic Demand",
      text:
        "Develop SEO and social systems designed to make each community easier to discover and more compelling once families arrive.",
    },
    {
      number: "04",
      title: "Connect Attention To Inquiry",
      text:
        "Feed qualified demand into Oakdale's broader inquiry ecosystem so visibility becomes measurable business activity.",
    },
  ];

  const communities = [
    {
      number: "01",
      name: "Robin Run Senior Living",
      shortName: "Robin Run",
      image: ROBIN_IMAGE,
      logo: RobinLogo,
      href:
        "/case-studies/oakdale/robin-run-senior-living",
      metric: "460",
      metricLabel: "Brochure Requests",
      tagline:
        "Build the front door right, and the whole system converts.",
    },
    {
      number: "02",
      name: "Asbury Heights",
      shortName: "Asbury Heights",
      image: ASBURY_IMAGE,
      logo: AsburyLogo,
      href:
        "/case-studies/oakdale/asbury-heights",
      metric: "526K",
      metricLabel: "Google Impressions",
      tagline:
        "Reputation, finally visible online.",
    },
    {
      number: "03",
      name: "Christian Care Mesquite",
      shortName: "Christian Care Mesquite",
      image: MESQUITE_IMAGE,
      logo: ChristianCareLogo,
      href:
        "/case-studies/oakdale/christian-care-mesquite",
      metric: "56K+",
      metricLabel: "Social Followers",
      tagline:
        "Local trust, made findable.",
    },
    {
      number: "04",
      name: "Foxwood Springs",
      shortName: "Foxwood Springs",
      image: FOXWOOD_IMAGE,
      logo: FoxwoodLogo,
      href:
        "/case-studies/oakdale/foxwood-springs",
      metric: "95K+",
      metricLabel: "Followers",
      tagline:
        "From invisible to in-demand.",
    },
    {
      number: "05",
      name: "Seneca Senior Living",
      shortName: "Seneca",
      image: SENECA_IMAGE,
      logo: SenecaLogo,
      href:
        "/case-studies/oakdale/seneca-senior-living",
      metric: "6.7M",
      metricLabel: "Organic Views",
      tagline:
        "Steady visibility. Steady census pipeline.",
    },
    {
      number: "06",
      name: "Lakewood Village",
      shortName: "Lakewood Village",
      image: LAKEWOOD_IMAGE,
      logo: LakewoodLogo,
      href:
        "/case-studies/oakdale/lakewood-village",
      metric: "311",
      metricLabel: "Brochure Requests",
      tagline:
        "An efficient digital front door.",
      temporaryImage: true,
    },
    {
      number: "07",
      name: "Christian Care Allen",
      shortName: "Christian Care Allen",
      image: ALLEN_IMAGE,
      logo: ChristianCareLogo,
      href:
        "/case-studies/oakdale/christian-care-allen",
      metric: "43K+",
      metricLabel: "Followers",
      tagline:
        "Every community deserves its own front door.",
    },
    {
      number: "08",
      name: "Lighthouse Pointe Village",
      shortName: "Lighthouse Pointe",
      image: LIGHTHOUSE_IMAGE,
      logo: LighthouseLogo,
      href:
        "/case-studies/oakdale/lighthouse-pointe-village",
      metric: "2m 33s",
      metricLabel: "Average Session",
      tagline:
        "Show the floor plans. Win the tour.",
    },
    {
      number: "09",
      name: "Vanadium Woods",
      shortName: "Vanadium Woods",
      image: VANADIUM_IMAGE,
      logo: VanadiumLogo,
      href:
        "/case-studies/oakdale/vanadium-woods",
      metric: "2m+",
      metricLabel: "Avg. Time On Page",
      tagline:
        "Engagement this deep just needed an audience.",
    },
    {
      number: "10",
      name: "Canterbury Place",
      shortName: "Canterbury Place",
      image: CANTERBURY_IMAGE,
      logo: CanterburyLogo,
      href:
        "/case-studies/oakdale/canterbury-place",
      metric: "5.2K",
      metricLabel: "Site Sessions",
      tagline:
        "Specialized care deserves a specialized funnel.",
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
          min-h-[92vh]
          items-end
          overflow-hidden
          px-5
          pb-16
          pt-36
          text-white
          sm:px-8
          sm:pb-20
          md:min-h-screen
          md:pb-24
        "
        style={{
          backgroundImage: `url(${OakdaleHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/95
            via-black/68
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
            to-black/20
          "
        />

        {/* Gold atmosphere */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-52
            -left-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#f0a608]/10
            blur-[150px]
          "
        />

        {/* MKG watermark */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-5%]
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
              "clamp(10rem, 25vw, 30rem)",
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
              y: 30,
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
            {/* Oakdale logo */}
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
                delay: 0.08,
              }}
              className="mb-8"
            >
              <div
                className="
                  inline-flex
                  items-center
                  rounded-[18px]
                  bg-white
                  px-6
                  py-4
                  shadow-[0_18px_60px_rgba(0,0,0,0.28)]
                  sm:px-7
                  sm:py-5
                "
              >
                <img
                  src={OakdaleLogo}
                  alt="Oakdale Seniors Alliance"
                  className="
                    h-auto
                    max-h-[58px]
                    w-auto
                    max-w-[250px]
                    object-contain
                    sm:max-h-[66px]
                    sm:max-w-[300px]
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
                  tracking-[0.27em]
                  text-white/55
                  sm:text-[10px]
                "
              >
                Flagship Case Study · Senior Living
              </span>
            </div>

            <h1
              className="
                max-w-5xl
                text-[45px]
                leading-[0.91]
                tracking-[-0.05em]
                text-white
                sm:text-[64px]
                md:text-[82px]
                lg:text-[98px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              Ten communities.
              <br />

              <span className="text-white/45">
                One growth ecosystem.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-[16px]
                leading-[1.75]
                text-white/65
                sm:text-lg
                md:text-xl
              "
            >
              Media King Group transformed a fragmented portfolio of senior
              living communities into a connected digital ecosystem spanning
              brand, websites, SEO, organic media, and demand generation.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "10 Communities",
                "Brand System",
                "Website Network",
                "SEO",
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
          PROOF STRIP
      ====================================================== */}

      <section className="px-5 py-6 sm:px-8">
        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[28px]
            bg-[#0b0b0c]
            text-white
          "
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {topResults.map(
              (item, index) => (
                <motion.div
                  key={item.label}
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
                    delay:
                      index * 0.07,
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
                      tracking-[-0.055em]
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
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#f0a608]
                      sm:text-[10px]
                    "
                  >
                    {item.label}
                  </p>

                  <p className="mt-3 text-xs leading-[1.65] text-white/40">
                    {item.detail}
                  </p>
                </motion.div>
              )
            )}
          </div>
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
              gap-10
              md:grid-cols-[0.8fr_1.2fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel>
                The Challenge
              </SectionLabel>

              <h2
                className="
                  text-[40px]
                  leading-[0.97]
                  tracking-[-0.045em]
                  sm:text-[50px]
                  md:text-[60px]
                "
                style={{
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                Ten communities.
                <br />

                <span className="text-black/25">
                  No unified digital presence.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Oakdale&apos;s communities had distinct personalities and real
                experiences worth discovering, but the digital portfolio was
                fragmented. Branding was inconsistent, visibility was limited,
                and families researching a life-changing decision often found
                too little online.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The challenge was bigger than rebuilding websites or posting
                more content. The network needed an operating system capable
                of strengthening every community without erasing what made
                each one different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO VISUAL
      ====================================================== */}

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-3
            md:grid-cols-12
            md:grid-rows-2
          "
        >
          <VisualTile
            image={FOXWOOD_IMAGE}
            label="Foxwood Springs"
            className="
              min-h-[360px]
              md:col-span-7
              md:row-span-2
              md:min-h-[650px]
            "
          />

          <VisualTile
            image={ALLEN_IMAGE}
            label="Christian Care Allen"
            className="
              min-h-[300px]
              md:col-span-5
              md:min-h-0
            "
          />

          <VisualTile
            image={SENECA_IMAGE}
            label="Seneca Senior Living"
            className="
              min-h-[300px]
              md:col-span-5
              md:min-h-0
            "
          />
        </div>
      </section>

      {/* =====================================================
          SOLUTION
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
          <div className="max-w-4xl">
            <SectionLabel>
              What Media King Group Built
            </SectionLabel>

            <h2
              className="
                text-[42px]
                leading-[0.96]
                tracking-[-0.045em]
                sm:text-[54px]
                md:text-[68px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              One system.
              <br />

              <span className="text-black/25">
                Built to work across ten different communities.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {systemItems.map((item) => (
              <SystemCard
                key={item.number}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM ATTRIBUTION
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
                How The System Works
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
                Demand.
                <br />
                Digital front doors.
                <br />

                <span className="text-white/25">
                  One connected system.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60 md:text-xl">
                Media King Group owns the brand system, website rebuilds, SEO,
                and organic social engine across the Oakdale network.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/45">
                Oakdale&apos;s dedicated funnel partner operates the brochure
                funnels and paid media behind them. Media King Group builds
                demand and the digital front doors; the full-system numbers
                reflect what that connected ecosystem captured together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NETWORK TODAY
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-20
            "
          >
            <div>
              <SectionLabel>
                The Network Today
              </SectionLabel>

              <h2
                className="
                  text-[42px]
                  leading-[0.96]
                  tracking-[-0.045em]
                  sm:text-[54px]
                  md:text-[64px]
                "
                style={{
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                Visibility that
                <br />

                <span className="text-black/25">
                  compounds.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ProofCard
                value="6,100+"
                label="Ranking Keywords"
                text="Organic keyword visibility across the Oakdale network."
              />

              <ProofCard
                value="~19K"
                label="Monthly Organic Visits"
                text="Search traffic reaching the portfolio through the community website network."
              />

              <ProofCard
                value="$50K+"
                label="Equivalent Monthly Ad Value"
                text="Estimated value of the network's organic search traffic."
              />

              <ProofCard
                value="~1K"
                label="Social → Website Clicks / Month"
                text="Organic social audiences continuing into community websites."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED COMMUNITY SPOTLIGHTS
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
              mb-14
              grid
              gap-8
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-end
            "
          >
            <div>
              <SectionLabel dark>
                Community Spotlights
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
                One portfolio.
                <br />

                <span className="text-white/25">
                  Different growth stories.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-[1.8] text-white/50 lg:justify-self-end">
              Each community operates inside the same broader system while
              developing its own audience, search footprint, digital identity,
              and path to inquiry.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <SpotlightCard
              image={FOXWOOD_IMAGE}
              logo={FoxwoodLogo}
              title="Foxwood Springs"
              metric="95K+"
              metricLabel="Followers"
              stats={[
                "31M Facebook Views",
                "34.9M Instagram Reach",
              ]}
              href="/case-studies/oakdale/foxwood-springs"
            />

            <SpotlightCard
              image={ALLEN_IMAGE}
              logo={ChristianCareLogo}
              title="Christian Care Allen"
              metric="43K+"
              metricLabel="Followers"
              stats={[
                "18.8M Views",
                "+33,200% Growth",
              ]}
              href="/case-studies/oakdale/christian-care-allen"
            />

            <SpotlightCard
              image={SENECA_IMAGE}
              logo={SenecaLogo}
              title="Seneca Senior Living"
              metric="11K+"
              metricLabel="Facebook Followers"
              stats={[
                "19.2K Site Sessions",
                "4.9% Google CTR",
              ]}
              href="/case-studies/oakdale/seneca-senior-living"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL IMAGE BREAK
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
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
            min-h-[480px]
            max-w-7xl
            overflow-hidden
            rounded-[30px]
            sm:min-h-[600px]
            lg:min-h-[700px]
          "
        >
          <img
            src={OakdaleHero}
            alt="Oakdale Seniors Alliance community"
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
              from-black/92
              via-black/18
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              z-10
              max-w-4xl
              p-7
              text-white
              sm:p-10
              md:p-14
              lg:p-16
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#f0a608]
              "
            >
              The Experience Was Already There
            </p>

            <h2
              className="
                mt-5
                text-[40px]
                leading-[0.95]
                tracking-[-0.045em]
                sm:text-[54px]
                md:text-[68px]
              "
              style={{
                fontFamily:
                  "Kinta, sans-serif",
              }}
            >
              Real communities.
              <br />

              <span className="text-white/45">
                Real people. A digital presence built to show it.
              </span>
            </h2>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          EXPLORE COMMUNITIES
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
        <div className="mx-auto max-w-7xl">
          <div
            className="
              mb-14
              grid
              gap-8
              md:grid-cols-[0.9fr_1.1fr]
              md:items-end
            "
          >
            <div>
              <SectionLabel>
                Explore Results By Community
              </SectionLabel>

              <h2
                className="
                  text-[42px]
                  leading-[0.96]
                  tracking-[-0.045em]
                  sm:text-[54px]
                  md:text-[68px]
                "
                style={{
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                Ten communities.
                <br />

                <span className="text-black/25">
                  Ten individual stories.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-xl
                text-base
                leading-[1.8]
                text-black/50
                md:justify-self-end
              "
            >
              Explore the individual community case studies to see how the
              broader Oakdale system translated into local website, search,
              social, engagement, and inquiry results.
            </p>
          </div>

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {communities.map(
              (community, index) => (
                <CommunityCard
                  key={community.name}
                  community={community}
                  index={index}
                />
              )
            )}
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
          py-24
          text-white
          sm:px-8
          md:py-32
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
              md:grid-cols-[0.82fr_1.18fr]
              md:gap-20
            "
          >
            <div>
              <div
                className="
                  text-[80px]
                  leading-[0.82]
                  tracking-[-0.065em]
                  sm:text-[110px]
                  md:text-[132px]
                "
                style={{
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                2,800+
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
                Brochure Requests · 2025
              </p>
            </div>

            <div className="md:pt-5">
              <p className="text-xl leading-[1.75] text-white/65 md:text-2xl">
                The full Oakdale system captured more than 2,800 brochure
                requests and more than 2,300 new contacts during 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-white/40">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated funnels, fed by the websites Media King Group
                rebuilt and the organic demand generated through the broader
                digital ecosystem.
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
          bg-white
          px-5
          py-24
          sm:px-8
          md:py-36
        "
      >
        <div className="mx-auto max-w-6xl text-center">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#b77800]
            "
          >
            The Oakdale Story
          </p>

          <h2
            className="
              mx-auto
              mt-7
              max-w-5xl
              text-[46px]
              leading-[0.93]
              tracking-[-0.05em]
              sm:text-[64px]
              md:text-[82px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            One unified brand.
            <br />

            <span className="text-black/25">
              Ten communities.
              <br />
              A demand engine that compounds.
            </span>
          </h2>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[32px]
            bg-[#0b0b0c]
            px-7
            py-16
            text-center
            text-white
            sm:px-10
            md:py-24
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-full
              h-[350px]
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-[#f0a608]/10
              blur-[120px]
            "
          />

          <div className="relative z-10">
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#f0a608]
              "
            >
              Build Your Growth System
            </p>

            <h2
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-[42px]
                leading-[0.95]
                tracking-[-0.045em]
                sm:text-[58px]
                md:text-[72px]
              "
              style={{
                fontFamily:
                  "Kinta, sans-serif",
              }}
            >
              Ready to turn attention
              <br />

              <span className="text-white/30">
                into measurable demand?
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-xl
                text-base
                leading-[1.8]
                text-white/45
              "
            >
              Build the brand, content, digital infrastructure, and growth
              system behind your next stage.
            </p>

            <Link
              to="/contact"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              className="
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#f0a608]
                px-7
                py-4
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-[#ffc033]
              "
            >
              Book a Call
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// =========================================================
// HELPERS
// =========================================================

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
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        rounded-[26px]
        border
        border-black/10
        bg-white
        p-7
        sm:p-9
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
          mt-10
          text-[28px]
          leading-[1.03]
          tracking-[-0.035em]
          sm:text-[32px]
        "
        style={{
          fontFamily: "Kinta, sans-serif",
        }}
      >
        {title}
      </h3>

      <p className="mt-5 max-w-lg text-sm leading-[1.8] text-black/50 sm:text-[15px]">
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
        rounded-[24px]
        border
        border-black/10
        bg-[#f6f5f2]
        p-7
      "
    >
      <div
        className="
          text-[46px]
          leading-none
          tracking-[-0.05em]
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

function VisualTile({
  image,
  label,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.985,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.65,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[26px]
        bg-black
        ${className}
      `}
    >
      <img
        src={image}
        alt={label}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition
          duration-700
          hover:scale-[1.025]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-black/5
        "
      />

      <p
        className="
          absolute
          bottom-6
          left-6
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-white/65
        "
      >
        {label}
      </p>
    </motion.div>
  );
}

function SpotlightCard({
  image,
  logo,
  title,
  metric,
  metricLabel,
  stats,
  href,
}) {
  return (
    <motion.article
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
        duration: 0.55,
      }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.035]
      "
    >
      <Link
        to={href}
        className="block"
      >
        <div className="relative h-[310px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-[1.04]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/15
              to-transparent
            "
          />

          <div
            className="
              absolute
              left-5
              top-5
              inline-flex
              max-w-[180px]
              items-center
              rounded-[12px]
              bg-white
              px-4
              py-3
              shadow-xl
            "
          >
            <img
              src={logo}
              alt={`${title} logo`}
              className="
                max-h-[38px]
                w-auto
                object-contain
              "
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#f0a608]
              "
            >
              Featured Community
            </p>

            <h3
              className="
                mt-3
                text-[30px]
                leading-[0.98]
                tracking-[-0.035em]
                text-white
              "
              style={{
                fontFamily:
                  "Kinta, sans-serif",
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <div
            className="
              text-[52px]
              leading-none
              tracking-[-0.055em]
              text-white
            "
            style={{
              fontFamily:
                "Kinta, sans-serif",
            }}
          >
            {metric}
          </div>

          <p
            className="
              mt-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#f0a608]
            "
          >
            {metricLabel}
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            {stats.map((stat) => (
              <p
                key={stat}
                className="
                  py-1
                  text-sm
                  text-white/45
                "
              >
                {stat}
              </p>
            ))}
          </div>

          <div
            className="
              mt-6
              flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-white
            "
          >
            View Community Study

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function CommunityCard({
  community,
  index,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 22,
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
          (index % 3) * 0.05,
      }}
      className="
        group
        overflow-hidden
        rounded-[26px]
        border
        border-black/10
        bg-white
      "
    >
      <Link
        to={community.href}
        className="block h-full"
      >
        <div className="relative h-[285px] overflow-hidden bg-black">
          <img
            src={community.image}
            alt={community.name}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-[1.04]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/10
              to-transparent
            "
          />

          <div
            className="
              absolute
              left-5
              top-5
              inline-flex
              max-w-[170px]
              items-center
              rounded-[12px]
              bg-white
              px-4
              py-2.5
              shadow-lg
            "
          >
            <img
              src={community.logo}
              alt={`${community.name} logo`}
              className="
                max-h-[34px]
                w-auto
                object-contain
              "
            />
          </div>

          <span
            className="
              absolute
              right-5
              top-5
              text-[10px]
              font-semibold
              tracking-[0.18em]
              text-white/55
            "
          >
            {community.number}
          </span>

          <div className="absolute bottom-5 left-5 right-5">
            <h3
              className="
                text-[29px]
                leading-[0.98]
                tracking-[-0.035em]
                text-white
              "
              style={{
                fontFamily:
                  "Kinta, sans-serif",
              }}
            >
              {community.shortName}
            </h3>

            {community.temporaryImage && (
              <span
                className="
                  mt-3
                  inline-flex
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-white/40
                "
              >
                Portfolio image
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          <div
            className="
              flex
              items-end
              justify-between
              gap-5
            "
          >
            <div>
              <div
                className="
                  text-[40px]
                  leading-none
                  tracking-[-0.05em]
                  text-black
                "
                style={{
                  fontFamily:
                    "Kinta, sans-serif",
                }}
              >
                {community.metric}
              </div>

              <p
                className="
                  mt-2
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#b77800]
                "
              >
                {community.metricLabel}
              </p>
            </div>

            <span
              className="
                text-xl
                text-black/25
                transition
                duration-300
                group-hover:translate-x-1
                group-hover:text-black
              "
            >
              →
            </span>
          </div>

          <p
            className="
              mt-5
              border-t
              border-black/10
              pt-5
              text-sm
              leading-[1.65]
              text-black/45
            "
          >
            {community.tagline}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}