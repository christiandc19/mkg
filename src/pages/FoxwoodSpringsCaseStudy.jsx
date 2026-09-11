// src/pages/FoxwoodSpringsCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import FoxwoodLogo from "../assets/images/foxwood-logo.png";

const FOXWOOD_HERO =
  "https://foxwoodseniorliving.org/wp-content/uploads/2025/09/Senior-Living-in-Raymore-Missouri-2.webp";

export default function FoxwoodSpringsCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Foxwood Springs Case Study | Senior Living Marketing | Media King Group";

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
      "How Media King Group took Foxwood Springs from zero social presence to 95K+ followers while rebuilding its website, SEO presence, and digital demand engine."
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
      value: "95K+",
      label: "Social Followers",
      detail: "Built organically from zero across Meta",
    },
    {
      value: "31M",
      label: "Facebook Views",
      detail: "Generated since January 2025",
    },
    {
      value: "34.9M",
      label: "Instagram Reach",
      detail: "Organic audience reach",
    },
    {
      value: "750K+",
      label: "Interactions",
      detail: "Organic engagement across the social ecosystem",
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
          backgroundImage: `url(${FOXWOOD_HERO})`,
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
                  src={FoxwoodLogo}
                  alt="Foxwood Springs Senior Living"
                  className="
                    h-auto
                    max-h-[48px]
                    w-auto
                    max-w-[210px]
                    object-contain
                    sm:max-h-[56px]
                    sm:max-w-[250px]
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
                Oakdale Network · Community Case Study 04
              </span>
            </div>

            <h1
              className="
                text-[46px]
                leading-[0.92]
                tracking-[-0.045em]
                text-white
                sm:text-[64px]
                md:text-[82px]
                lg:text-[98px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              Foxwood
              <br />
              Springs
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
              The full-system story: social + web + SEO.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Organic Social",
                "Website Rebuild",
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
          THE SITUATION
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
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
                A real community.
                <br />

                <span className="text-black/25">
                  Almost invisible online.
                </span>
              </h2>
            </div>

            <div className="md:pt-10">
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                Foxwood Springs had zero social presence and an
                underperforming website — leaving the community largely
                invisible to families actively searching for senior living
                options.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The challenge wasn&apos;t simply to generate more content.
                Foxwood needed a complete digital system capable of creating
                awareness, earning attention, capturing search demand, and
                turning that attention into measurable action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL MOMENT
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
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
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
            src={FOXWOOD_HERO}
            alt="Foxwood Springs Senior Living"
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
              from-black/85
              via-black/15
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
              The Community Behind The Content
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
              The story was already there.
              <br />

              <span className="text-white/45">
                It just needed distribution.
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
                The complete
                <br />

                <span className="text-black/25">
                  Media King Group playbook.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group built a viral-format organic content engine
                centered on real residents and real life inside Foxwood
                Springs.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                At the same time, the website was rebuilt with clear
                living-options pages and stronger conversion paths, while
                local SEO created a dependable foundation for high-intent
                search discovery.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Organic Content Engine"
              text="Viral-format content built around real residents transformed everyday community life into an audience-growth engine."
            />

            <BuildCard
              number="02"
              title="Website Rebuild"
              text="A rebuilt digital experience gave families clearer living-options content and stronger paths toward inquiry."
            />

            <BuildCard
              number="03"
              title="Local SEO"
              text="Search foundations made Foxwood easier to discover when families were actively researching senior living options."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL BREAKOUT
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
                Organic Social
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
                0 → 95K+
                <br />

                <span className="text-white/25">
                  followers.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-white/55">
                Foxwood Springs went from no social presence to the biggest
                organic footprint in the Oakdale network.
              </p>

              <p className="mt-5 text-lg leading-[1.8] text-white/55">
                Instagram alone grew from zero to 43,000 followers in the
                first nine months and has since grown beyond 64,500.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL RESULTS
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

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <LargeProof
              value="64.5K"
              label="Instagram Followers"
              description="Built from zero, with 43,000 followers generated in the first nine months alone."
            />

            <LargeProof
              value="31K"
              label="Facebook Followers"
              description="Part of a combined organic audience now exceeding 95,000 followers."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          HUMAN IMPACT
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
          <SectionLabelCentered>
            Beyond The Metrics
          </SectionLabelCentered>

          <h2
            className="
              mx-auto
              max-w-4xl
              text-[44px]
              leading-[0.96]
              tracking-[-0.045em]
              sm:text-[60px]
              md:text-[72px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            The audience became
            <br />

            <span className="text-black/25">
              part of the community.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-[1.8]
              text-black/55
            "
          >
            The organic audience grew beyond views and follower counts.
            Followers began sending gifts and mail directly to Foxwood
            Springs residents.
          </p>

          <div
            className="
              mx-auto
              mt-12
              max-w-3xl
              rounded-[28px]
              border
              border-black/10
              bg-white
              px-7
              py-10
              sm:px-12
              sm:py-14
            "
          >
            <p
              className="
                text-[34px]
                leading-[1]
                tracking-[-0.04em]
                sm:text-[46px]
                md:text-[54px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              “Our residents get fan mail.”
            </p>

            <p
              className="
                mt-5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#b77800]
              "
            >
              Organic audience impact
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WEBSITE PERFORMANCE
      ====================================================== */}

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>
                Website Performance
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
                Attention turned
                <br />

                <span className="text-black/25">
                  into action.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                The rebuilt Foxwood Springs homepage generated more than
                7,200 views while the contact page became a direct conversion
                point for families.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                That contact page generated 52 direct submissions, including
                25 qualified leads — demonstrating that the site was doing
                more than receiving traffic.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="7,200+"
              label="Homepage Views"
              text="Traffic into the rebuilt Foxwood Springs digital experience."
            />

            <ProofCard
              value="52"
              label="Direct Submissions"
              text="Generated directly through the community website's contact page."
            />

            <ProofCard
              value="25"
              label="Qualified Leads"
              text="Qualified opportunities captured directly through the site's contact experience."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO
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
                Organic Search
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
                Search demand
                <br />

                <span className="text-white/25">
                  grew with the brand.
                </span>
              </h2>
            </div>

            <div className="md:pt-8">
              <p className="text-lg leading-[1.8] text-white/60">
                By July 2026, Foxwood Springs was generating approximately
                1,700 monthly organic visits — up 14% month over month —
                across 595 ranking keywords.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/60">
                Non-branded discovery traffic increased 328% month over month,
                showing that more people were discovering Foxwood beyond
                searches for the community&apos;s name.
              </p>

              <div className="mt-9 grid grid-cols-3 border-y border-white/10">
                <MiniDarkMetric
                  value="1.7K"
                  label="Organic Visits / Mo."
                />

                <MiniDarkMetric
                  value="595"
                  label="Ranking Keywords"
                  bordered
                />

                <MiniDarkMetric
                  value="+328%"
                  label="Non-Branded Discovery"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL SYSTEM OUTCOME
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
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                188
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
              <p className="text-lg leading-[1.8] text-black/60 md:text-xl">
                The full Foxwood Springs system generated 188 brochure
                requests and 173 new contacts in 2025.
              </p>

              <p className="mt-6 text-base leading-[1.8] text-black/45">
                Those inquiries were captured through Oakdale&apos;s
                partner-operated funnels, fed by the rebuilt website and the
                organic social and search demand Media King Group builds.
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
          bg-[#0b0b0c]
          px-5
          py-24
          text-white
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
              text-[#f0a608]
            "
          >
            The Foxwood Springs Story
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
            From invisible
            <br />

            <span className="text-white/25">
              to in-demand.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              text-lg
              leading-[1.75]
              text-white/45
            "
          >
            Without a dollar of ad spend from Media King Group.
          </p>
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
              bg-[#f6f5f2]
              p-7
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
                  Seneca Senior Living
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-[1.7] text-black/50">
                  Consistent visibility. Dependable demand.
                </p>
              </div>

              <Link
                to="/case-studies/oakdale/seneca-senior-living"
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
              to="/case-studies/oakdale/christian-care-mesquite"
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
              ← Previous: Christian Care Mesquite
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

function SectionLabelCentered({ children }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-4">
      <span className="h-px w-8 bg-[#f0a608]" />

      <span
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.25em]
          text-black/40
          sm:text-[10px]
        "
      >
        {children}
      </span>

      <span className="h-px w-8 bg-[#f0a608]" />
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
        ${bordered ? "border-x border-white/10 px-5" : "px-5"}
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