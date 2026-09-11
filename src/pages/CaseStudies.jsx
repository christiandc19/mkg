// src/pages/CaseStudies.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Typewriter from "../components/home/Typewriter";
import BG from "../assets/images/mkg-hero-bg.webp";

/* =========================================================
   CASE STUDIES

   Main index intentionally shows FOUR industry stories:
   1. Oakdale Seniors Alliance
   2. Beverly Hills Periodontist
   3. Fat Puppy
   4. DDI Designs

   Individual Oakdale community studies live inside
   the Oakdale flagship page.
========================================================= */

const CASE_STUDIES = [
  {
    id: "oakdale",
    number: "01",
    title: "Oakdale Seniors Alliance",
    category: "Senior Living",
    eyebrow: "10-COMMUNITY PORTFOLIO",
    href: "/case-studies/oakdale-seniors-alliance",
    clickable: true,

    metric: "300K+",
    metricLabel: "Followers Across the Portfolio",

    secondaryMetrics: [
      {
        value: "150K+",
        label: "Organic Website Visits",
      },
      {
        value: "2,800+",
        label: "Inquiries in 2025",
      },
    ],

    description:
      "Ten senior living communities transformed from fragmented digital properties into a connected growth ecosystem spanning brand, websites, SEO, organic social, and lead generation.",

    outcome:
      "One unified brand. Ten communities. A demand engine that compounds.",

    tags: [
      "Brand System",
      "Websites",
      "SEO",
      "Organic Social",
    ],

    cta: "Explore the Portfolio",
  },

  {
    id: "beverly-hills-periodontist",
    number: "02",
    title: "Beverly Hills Periodontist",
    category: "Healthcare / Dental",
    eyebrow: "SOCIAL GROWTH + MONETIZATION",

    href: "/case-studies/beverly-hills-periodontist",
    clickable: true,

    metric: "318K+",
    metricLabel: "TikTok Followers",

    secondaryMetrics: [
      {
        value: "500K+",
        label: "Combined Audience",
      },
      {
        value: "$50K",
        label: "Single Brand Deal",
      },
    ],

    description:
      "A repeatable short-form content system turned an established periodontist's real-world authority into a massive organic audience — then monetized that attention.",

    outcome:
      "Real reach doesn't just build authority. It pays for itself.",

    tags: [
      "TikTok",
      "Instagram",
      "Organic Growth",
      "Monetization",
    ],

    cta: "Read the Case Study",
  },

  {
    id: "fat-puppy",
    number: "03",
    title: "Fat Puppy",
    category: "Entertainment",
    eyebrow: "VIRAL-FIRST CONTENT SYSTEM",

    href: "/case-studies/fat-puppy",
    clickable: true,

    metric: "735K",
    metricLabel: "Facebook Followers",

    secondaryMetrics: [
      {
        value: "424K",
        label: "TikTok Followers",
      },
      {
        value: "70M+",
        label: "Top Video Views",
      },
    ],

    description:
      "A viral-first production engine turned a 12,000-follower entertainment page into a million-plus combined audience across Facebook and TikTok.",

    outcome:
      "Tens of millions of views per video — on a system, not luck.",

    tags: [
      "Facebook",
      "TikTok",
      "Viral Content",
      "Audience Growth",
    ],

    cta: "Read the Case Study",
  },

  {
    id: "ddi-designs",
    number: "04",
    title: "DDI Designs",
    category: "Design / Consumer",
    eyebrow: "AUDIENCE → SALES ENGINE",

    href: "/case-studies/ddi-designs",
    clickable: true,

    metric: "60.7K",
    metricLabel: "Instagram Followers",

    secondaryMetrics: [
      {
        value: "26.4K",
        label: "TikTok Followers",
      },
      {
        value: "100K+",
        label: "Combined Audience",
      },
    ],

    description:
      "A visual content system transformed a beautiful design portfolio into strategic media — expanding the audience while creating another path to product sales.",

    outcome:
      "A brand that looks inevitable — and converts like it.",

    tags: [
      "Instagram",
      "TikTok",
      "Visual Content",
      "Commerce",
    ],

    cta: "Read the Case Study",
  },
];
/* =========================================================
   PAGE
========================================================= */

export default function CaseStudies() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = "Case Studies | Media King Group";

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
      "Proof, not promises. 0 → 735K on Facebook. 2.5K → 318K on TikTok. 150K+ organic visits. See the Media King Group systems behind the numbers."
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

  return (
    <main className="w-full overflow-hidden bg-white text-black">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          flex
          min-h-[78vh]
          items-center
          overflow-hidden
          px-5
          pb-16
          pt-32
          text-white
          sm:px-8
          sm:pb-20
          lg:min-h-[82vh]
        "
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/72" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/30
            to-black/20
          "
        />

        {/* Watermark */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              select-none
              whitespace-nowrap
              text-white/[0.04]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(8rem, 25vw, 30rem)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            MKG
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="
              mx-auto
              flex
              max-w-5xl
              flex-col
              items-center
              text-center
            "
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-[#f0a608]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-white/45
                  sm:text-[10px]
                "
              >
                Real Clients · Real Numbers · Real Systems
              </span>

              <span className="h-px w-8 bg-[#f0a608]" />
            </div>

            <h1
              className="
                leading-[0.9]
                tracking-[-0.05em]
                text-white
              "
              style={{
                fontSize: "clamp(3.25rem, 10vw, 7.5rem)",
                fontFamily: "Kinta, sans-serif",
                fontWeight: 400,
              }}
            >
              <Typewriter
                text="PROOF, NOT PROMISES."
                speed={72}
              />
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                px-2
                text-sm
                leading-[1.8]
                text-white/60
                sm:text-base
                md:text-lg
              "
            >
              Real clients. Real numbers. All organic. Each study breaks
              down the problem, the system we built, and what changed.
            </p>

            <a
              href="#case-studies"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.05]
                px-6
                py-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-white/70
                transition
                hover:border-[#f0a608]/50
                hover:text-white
              "
            >
              Explore the Proof
              <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROOF STRIP
      ====================================================== */}

      <section className="bg-[#0b0b0c] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className="
              grid
              grid-cols-2
              border-x
              border-white/10
              sm:grid-cols-4
            "
          >
            <ProofStripMetric
              value="8B+"
              label="Organic Views"
            />

            <ProofStripMetric
              value="5M+"
              label="Followers Grown"
              bordered
            />

            <ProofStripMetric
              value="150K+"
              label="Organic Site Visits"
              mobileTopBorder
            />

            <ProofStripMetric
              value="2,800+"
              label="Family Inquiries"
              bordered
              mobileTopBorder
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section
        id="case-studies"
        className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid
              gap-10
              md:grid-cols-[0.75fr_1.25fr]
              md:items-end
              md:gap-20
            "
          >
            <div>
              <SectionLabel>
                Selected Work
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
                Four industries.
                <br />

                <span className="text-black/25">
                  One operating philosophy.
                </span>
              </h2>
            </div>

            <div>
              <p
                className="
                  max-w-xl
                  text-lg
                  leading-[1.8]
                  text-black/55
                "
              >
                Different markets require different tactics. The system
                underneath stays the same: build attention, earn trust,
                create the right digital infrastructure, and turn that
                demand into measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDY GRID
      ====================================================== */}

      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-2">
            {CASE_STUDIES.map((item, index) => (
              <CaseStudyCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY THE CASE STUDIES MATTER
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
                The Pattern
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
                The channel changes.
                <br />

                <span className="text-white/25">
                  The system compounds.
                </span>
              </h2>
            </div>

            <div className="md:pt-7">
              <p
                className="
                  text-lg
                  leading-[1.8]
                  text-white/55
                "
              >
                Senior living required interconnected websites, local SEO,
                organic social, and lead-generation infrastructure.
                Healthcare required authority translated into personality-led
                short-form media.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.8]
                  text-white/55
                "
              >
                Entertainment demanded a relentless viral production system.
                Design required turning an aesthetic into media that could
                grow an audience and support commerce.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.8]
                  text-white/55
                "
              >
                Media King Group builds around the business problem — not a
                predetermined channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
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
                sm:text-[10px]
              "
            >
              Your Brand Could Be Next
            </span>

            <span className="h-px w-8 bg-[#f0a608]" />
          </div>

          <h2
            className="
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
            Ready to build
            <br />

            <span className="text-black/25">
              something that compounds?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              text-base
              leading-[1.8]
              text-black/50
            "
          >
            Tell us what you&apos;re building, where growth has stalled,
            and what a meaningful result looks like.
          </p>

          <Link
            to="/contact"
            className="
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-black
              px-7
              py-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-white
              transition
              hover:bg-[#b77800]
            "
          >
            Book a Call
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   CASE STUDY CARD
========================================================= */

function CaseStudyCard({
  item,
  index,
}) {
  const card = (
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
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
      }}
      className={`
        group
        relative
        flex
        min-h-[600px]
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-black/10
        bg-[#0b0b0c]
        text-white
        transition
        duration-300

        ${
          item.clickable
            ? "hover:-translate-y-1 hover:shadow-2xl"
            : ""
        }
      `}
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-[#f0a608]/10
          blur-[100px]
        "
      />

      {/* Huge number watermark */}
      <div
        className="
          pointer-events-none
          absolute
          -right-2
          top-3
          select-none
          text-white/[0.035]
        "
        style={{
          fontFamily: "Kinta, sans-serif",
          fontSize: "clamp(7rem, 14vw, 11rem)",
          lineHeight: 1,
          letterSpacing: "-0.06em",
        }}
      >
        {item.number}
      </div>

      <div
        className="
          relative
          z-10
          flex
          flex-1
          flex-col
          p-7
          sm:p-9
          lg:p-10
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-start
            justify-between
            gap-5
          "
        >
          <div>
            <div
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#f0a608]
              "
            >
              {item.eyebrow}
            </div>

            <div
              className="
                mt-2
                text-[10px]
                uppercase
                tracking-[0.17em]
                text-white/35
              "
            >
              {item.category}
            </div>
          </div>

          {!item.clickable && (
            <span
              className="
                shrink-0
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-1.5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/35
              "
            >
              Full Study Soon
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="
            mt-12
            max-w-lg
            text-[37px]
            leading-[0.98]
            tracking-[-0.04em]
            text-white
            sm:text-[46px]
            lg:text-[52px]
          "
          style={{
            fontFamily: "Kinta, sans-serif",
          }}
        >
          {item.title}
        </h3>

        {/* Main metric */}
        <div className="mt-10">
          <div
            className="
              text-[62px]
              leading-[0.85]
              tracking-[-0.06em]
              text-white
              sm:text-[76px]
            "
            style={{
              fontFamily: "Kinta, sans-serif",
            }}
          >
            {item.metric}
          </div>

          <p
            className="
              mt-4
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/40
            "
          >
            {item.metricLabel}
          </p>
        </div>

        {/* Secondary stats */}
        <div
          className="
            mt-8
            grid
            grid-cols-2
            border-y
            border-white/10
          "
        >
          {item.secondaryMetrics.map(
            (metric, metricIndex) => (
              <div
                key={metric.label}
                className={`
                  py-5

                  ${
                    metricIndex === 1
                      ? "border-l border-white/10 pl-5"
                      : "pr-5"
                  }
                `}
              >
                <div
                  className="
                    text-[25px]
                    leading-none
                    tracking-[-0.035em]
                    text-white
                    sm:text-[29px]
                  "
                  style={{
                    fontFamily: "Kinta, sans-serif",
                  }}
                >
                  {metric.value}
                </div>

                <p
                  className="
                    mt-2
                    text-[8px]
                    font-semibold
                    uppercase
                    leading-[1.5]
                    tracking-[0.13em]
                    text-[#f0a608]
                  "
                >
                  {metric.label}
                </p>
              </div>
            )
          )}
        </div>

        {/* Description */}
        <p
          className="
            mt-7
            max-w-xl
            text-sm
            leading-[1.8]
            text-white/48
          "
        >
          {item.description}
        </p>

        {/* Tags */}
        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                px-3
                py-1.5
                text-[8px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/35
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Kicker */}
        <p
          className="
            mt-8
            border-l-2
            border-[#f0a608]
            pl-4
            text-sm
            italic
            leading-[1.7]
            text-white/60
          "
        >
          {item.outcome}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-10">
          <div
            className={`
              inline-flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              transition

              ${
                item.clickable
                  ? "text-white/60 group-hover:text-[#f0a608]"
                  : "text-white/25"
              }
            `}
          >
            {item.clickable
              ? item.cta
              : "Full case study coming soon"}

            {item.clickable && (
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                aria-hidden
              >
                →
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="
          h-[3px]
          w-full
          origin-left
          scale-x-0
          bg-[#f0a608]
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />
    </motion.article>
  );

  if (!item.clickable) {
    return card;
  }

  return (
    <Link
      to={item.href}
      className="block"
      aria-label={`View ${item.title} case study`}
    >
      {card}
    </Link>
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

function ProofStripMetric({
  value,
  label,
  bordered = false,
  mobileTopBorder = false,
}) {
  return (
    <div
      className={`
        min-w-0
        px-4
        py-7
        text-center
        sm:px-5
        sm:py-9

        ${
          bordered
            ? "border-l border-white/10"
            : ""
        }

        ${
          mobileTopBorder
            ? "border-t border-white/10 sm:border-t-0"
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
          sm:text-[36px]
          lg:text-[42px]
        "
        style={{
          fontFamily: "Kinta, sans-serif",
        }}
      >
        {value}
      </div>

      <p
        className="
          mt-2.5
          text-[7px]
          font-semibold
          uppercase
          leading-[1.5]
          tracking-[0.13em]
          text-white/35
          sm:text-[8px]
          lg:text-[9px]
        "
      >
        {label}
      </p>
    </div>
  );
}