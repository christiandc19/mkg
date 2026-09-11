// src/pages/BeverlyHillsPeriodontistCaseStudy.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BG from "../assets/images/mkg-hero-bg.webp";

export default function BeverlyHillsPeriodontistCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Beverly Hills Periodontist Case Study | Media King Group";

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
      "How Media King Group grew a Beverly Hills periodontist from 2.5K to 318K+ TikTok followers in six months, built a 500K+ organic audience, and helped turn that attention into a $50K Oral-B brand deal."
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
      value: "318K+",
      label: "TikTok Followers",
      detail: "Up from 2,500 in six months",
    },
    {
      value: "200K",
      label: "Instagram Followers",
      detail: "Up from 61,700",
    },
    {
      value: "500K+",
      label: "Combined Audience",
      detail: "Built 100% organically",
    },
    {
      value: "$50K",
      label: "Single Brand Deal",
      detail: "Secured with Oral-B",
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
          min-h-[80vh]
          items-end
          overflow-hidden
          px-5
          pb-16
          pt-32
          text-white
          sm:px-8
          sm:pb-20
          md:min-h-[84vh]
          md:pb-24
        "
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

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

        {/* MKG watermark */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-4%]
            top-1/2
            -translate-y-1/2
            select-none
            whitespace-nowrap
            text-white/[0.035]
          "
          style={{
            fontFamily: "Kinta, sans-serif",
            fontSize: "clamp(9rem, 26vw, 28rem)",
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
                Healthcare / Dental · Social Growth + Monetization
              </span>
            </div>

            <h1
              className="
                max-w-6xl
                text-[46px]
                leading-[0.9]
                tracking-[-0.05em]
                text-white
                sm:text-[62px]
                md:text-[78px]
                lg:text-[94px]
              "
              style={{
                fontFamily: "Kinta, sans-serif",
              }}
            >
              Beverly Hills
              <br />
              Periodontist
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-[15px]
                leading-[1.7]
                text-white/60
                sm:text-lg
                md:text-xl
              "
            >
              Real reach doesn&apos;t just build authority.
              <br className="hidden sm:block" />
              It pays for itself.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "TikTok",
                "Instagram",
                "Short-Form Content",
                "Organic Growth",
                "Monetization",
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
                  text-[40px]
                  leading-[0.97]
                  tracking-[-0.04em]
                  sm:text-[50px]
                  md:text-[60px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Authority in the room.
                <br />

                <span className="text-black/25">
                  Almost none online.
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
                The practice already had real expertise, credibility, and
                authority. But very little of that was translating into
                digital reach.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The opportunity was bigger than simply posting more often.
                Media King Group needed to turn professional expertise into
                content people actually wanted to watch.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The goals were clear: expand reach, educate patients, build an
                audience, and create a platform that could eventually generate
                value beyond patient acquisition.
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
              md:grid-cols-[0.9fr_1.1fr]
              md:gap-20
            "
          >
            <div>
              <h2
                className="
                  text-[40px]
                  leading-[0.97]
                  tracking-[-0.04em]
                  sm:text-[50px]
                  md:text-[60px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Expertise,
                <br />
                packaged for attention.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Media King Group built a repeatable short-form content system
                around a proven viral review format.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Celebrity smile reviews, patient education, strong opinions,
                and personality-driven content gave viewers an entertaining
                reason to watch while keeping the doctor&apos;s expertise at
                the center of the content.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Repeatable Format"
              text="A recognizable review format created consistency without making every video feel the same."
            />

            <BuildCard
              number="02"
              title="Education + Personality"
              text="Clinical expertise became more approachable by combining useful dental education with personality-led storytelling."
            />

            <BuildCard
              number="03"
              title="Built for Retention"
              text="Topics, pacing, framing, and delivery were designed around what makes short-form audiences stop and keep watching."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT SYSTEM
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
                  md:text-[68px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Make expertise
                <br />

                <span className="text-white/25">
                  genuinely watchable.
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-white/55">
                The content system centered on a simple principle: professional
                authority performs better online when it is delivered through
                a format the audience instantly understands.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/55">
                One of the repeatable concepts was the &ldquo;Good, Bad, Hell
                No&rdquo; review format — giving the practice a recognizable
                voice while creating endless opportunities for commentary,
                education, and entertainment.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <DarkStep
              number="01"
              title="Hook"
              text="Lead with a face, opinion, question, or recognizable cultural reference that earns the first seconds of attention."
            />

            <DarkStep
              number="02"
              title="Authority"
              text="Use the doctor's actual expertise to explain what works, what doesn't, and why."
            />

            <DarkStep
              number="03"
              title="Personality"
              text="Keep the delivery human enough that viewers follow the person — not just the information."
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
                  md:text-[68px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                From expertise
                <br />

                <span className="text-black/25">
                  to audience.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/55">
                Once the format clicked, the practice was no longer limited by
                the size of its existing audience.
              </p>

              <p className="mt-5 text-lg leading-[1.8] text-black/55">
                The system created rapid organic growth across TikTok and
                Instagram — without relying on paid follower acquisition.
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
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#f0a608]
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-[1.6]
                      text-white/40
                    "
                  >
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TIKTOK
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
              md:grid-cols-[0.9fr_1.1fr]
              md:gap-20
            "
          >
            <div>
              <SectionLabel>TikTok Growth</SectionLabel>

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
                2.5K
                <br />

                <span className="text-black/20">
                  → 318.6K+
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-black/60">
                TikTok grew from approximately 2,500 followers to more than
                318,600 followers in just six months.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                The increase came from organic short-form distribution powered
                by a format viewers could recognize, understand, and share.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ProofCard
              value="2.5K"
              label="Starting Audience"
              text="TikTok following before the growth system scaled."
            />

            <ProofCard
              value="318.6K+"
              label="TikTok Followers"
              text="Organic audience reached within six months."
            />

            <ProofCard
              value="6"
              label="Months"
              text="Time required to produce the TikTok growth."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          INSTAGRAM
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
              <SectionLabel>Instagram Growth</SectionLabel>

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
                61.7K
                <br />

                <span className="text-black/20">
                  → 200K
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p className="text-lg leading-[1.8] text-black/60">
                The same content philosophy expanded beyond TikTok.
                Instagram grew from 61,700 followers to 200,000.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Together, the platforms created a combined organic audience of
                more than half a million people.
              </p>
            </div>
          </div>

          <div
            className="
              mt-14
              overflow-hidden
              rounded-[26px]
              border
              border-black/10
            "
          >
            <div className="grid sm:grid-cols-2">
              <LargeProof
                value="200K"
                label="Instagram Followers"
                description="Up from an existing audience of approximately 61,700."
              />

              <LargeProof
                value="500K+"
                label="Combined Audience"
                description="The combined social audience was built organically across the platforms."
                bordered
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MONETIZATION
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
              md:grid-cols-[0.75fr_1.25fr]
              md:items-center
              md:gap-20
            "
          >
            <div>
              <SectionLabel dark>
                Audience → Revenue
              </SectionLabel>

              <div
                className="
                  text-[82px]
                  leading-[0.82]
                  tracking-[-0.065em]
                  text-white
                  sm:text-[110px]
                  md:text-[130px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                $50K
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
                Single Brand Deal
              </p>
            </div>

            <div>
              <h2
                className="
                  text-[38px]
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-white
                  sm:text-[48px]
                  md:text-[56px]
                "
                style={{
                  fontFamily: "Kinta, sans-serif",
                }}
              >
                Attention became
                <br />

                <span className="text-white/25">
                  an asset of its own.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-[1.8] text-white/55">
                The audience eventually became valuable beyond traditional
                patient marketing.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-white/55">
                Oral-B secured a $50,000 single brand partnership with the
                practice — meaning the brand was paid to produce the kind of
                content it had already built the system to create.
              </p>
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
              gap-10
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
                Not more content.
                <br />

                <span className="text-black/25">
                  A recognizable system.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-[1.8] text-black/60">
                Growth came from building something repeatable enough to scale,
                but distinctive enough for viewers to recognize.
              </p>

              <p className="mt-6 text-lg leading-[1.8] text-black/60">
                Expertise supplied credibility. Personality made it human.
                Format created consistency. Distribution turned the system
                into audience growth.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <BuildCard
              number="01"
              title="Authority"
              text="The content was grounded in real clinical expertise rather than generic commentary."
            />

            <BuildCard
              number="02"
              title="Entertainment"
              text="The information was packaged in formats viewers actually wanted to consume."
            />

            <BuildCard
              number="03"
              title="Consistency"
              text="A repeatable system made the success scalable instead of depending on isolated viral posts."
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
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-[60px]
              md:text-[76px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            Real reach doesn&apos;t
            <br />
            just build authority.
            <br />

            <span className="text-black/25">
              It pays for itself.
            </span>
          </h2>
        </div>
      </section>

      {/* =====================================================
          NEXT CASE STUDY
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
                  Fat Puppy
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
                  From 12,000 Facebook followers to a million-plus combined
                  entertainment audience.
                </p>
              </div>

              {/*
                Fat Puppy page is our next build.
                For now this returns to the main Case Studies page
                instead of linking to an unfinished route.
              */}

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
              ← Oakdale Seniors Alliance
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

function LargeProof({
  value,
  label,
  description,
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
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
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
          text-[56px]
          leading-none
          tracking-[-0.05em]
          sm:text-[68px]
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
        {description}
      </p>
    </motion.div>
  );
}