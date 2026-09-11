import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

export default function CaseStudiesCarousel({
  items = [],
  title = "Featured Case Studies",
  subtitle = "Real brands. Real numbers. Real systems behind the growth.",
  maxItems = 4,
}) {
  const baseItems = useMemo(
    () => (items ?? []).slice(0, maxItems),
    [items, maxItems]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!baseItems.length) return null;

  const activeItem = baseItems[activeIndex];

  // =========================================================
  // NAVIGATION
  // =========================================================

  const next = () => {
    setDirection(1);

    setActiveIndex((current) =>
      current === baseItems.length - 1
        ? 0
        : current + 1
    );
  };

  const prev = () => {
    setDirection(-1);

    setActiveIndex((current) =>
      current === 0
        ? baseItems.length - 1
        : current - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // =========================================================
  // SWIPE
  // =========================================================

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 60;

    if (info.offset.x < -swipeThreshold) {
      next();
    }

    if (info.offset.x > swipeThreshold) {
      prev();
    }
  };

  // =========================================================
  // ANIMATION
  // =========================================================

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-16
        text-black
        sm:px-6
        sm:py-20
        md:px-8
        md:py-24
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        {(title || subtitle) && (
          <div
            className="
              mb-8
              border-t
              border-black/10
              pt-8
              sm:mb-10
              sm:pt-10
              md:flex
              md:items-end
              md:justify-between
              md:gap-10
            "
          >
            {title && (
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#f0a608]" />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.26em]
                      text-black/40
                      sm:text-[10px]
                    "
                  >
                    The Proof
                  </span>
                </div>

                <h2
                  className="
                    text-[30px]
                    leading-none
                    tracking-[-0.035em]
                    text-black
                    sm:text-4xl
                    md:text-5xl
                  "
                  style={{
                    fontFamily: "Kinta, sans-serif",
                  }}
                >
                  {title}
                </h2>
              </div>
            )}

            {subtitle && (
              <p
                className="
                  mt-4
                  max-w-lg
                  text-[13px]
                  leading-relaxed
                  text-black/50
                  sm:text-sm
                  md:mt-0
                  md:text-base
                "
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* =====================================================
            CAROUSEL
        ====================================================== */}

        <div className="relative w-full overflow-visible">

          {/* ===================================================
              PREVIOUS ARROW
          ==================================================== */}

          <button
            type="button"
            onClick={prev}
            aria-label="Previous case study"
            className="
              absolute
              left-3
              top-[115px]
              z-40
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-white
              text-black
              shadow-lg
              transition
              duration-300

              hover:bg-black
              hover:text-white

              active:scale-95

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#f0a608]
              focus-visible:ring-offset-2

              sm:left-5
              sm:top-[140px]

              md:-left-5
              md:top-1/2
              md:h-12
              md:w-12
              md:-translate-y-1/2
            "
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* ===================================================
              NEXT ARROW
          ==================================================== */}

          <button
            type="button"
            onClick={next}
            aria-label="Next case study"
            className="
              absolute
              right-3
              top-[115px]
              z-40
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-white
              text-black
              shadow-lg
              transition
              duration-300

              hover:bg-black
              hover:text-white

              active:scale-95

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#f0a608]
              focus-visible:ring-offset-2

              sm:right-5
              sm:top-[140px]

              md:-right-5
              md:top-1/2
              md:h-12
              md:w-12
              md:-translate-y-1/2
            "
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* ===================================================
              SLIDE VIEWPORT
          ==================================================== */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              sm:rounded-[28px]
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={direction}
            >
              <motion.article
                key={activeItem.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}

                // Mobile swipe
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.08}
                onDragEnd={handleDragEnd}

                className="
                  relative
                  w-full
                  touch-pan-y
                  overflow-hidden
                  rounded-2xl
                  bg-[#0b0b0c]
                  shadow-xl
                  sm:rounded-[28px]
                  sm:shadow-2xl
                "
              >
                {/* GOLD TOP ACCENT */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    z-30
                    h-[3px]
                    w-full
                    bg-gradient-to-r
                    from-[#f0a608]
                    via-[#f0a608]/40
                    to-transparent
                  "
                />

                <div
                  className="
                    grid
                    w-full
                    grid-cols-1
                    md:grid-cols-[0.95fr_1.05fr]
                  "
                >

                  {/* ===========================================
                      IMAGE

                      MOBILE: FIRST
                      DESKTOP: RIGHT
                  ============================================ */}

                  <div
                    className="
                      relative
                      order-1
                      h-[240px]
                      w-full
                      overflow-hidden
                      bg-black

                      sm:h-[300px]

                      md:order-2
                      md:h-auto
                      md:min-h-[560px]
                    "
                  >
                    {activeItem.image ? (
                      <>
                        <img
                          src={activeItem.image}
                          alt={
                            activeItem.alt ??
                            `${activeItem.client ?? "Client"} case study`
                          }
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            object-center
                          "
                          loading="lazy"
                          draggable="false"
                        />

                        {/* Mobile overlay */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/35
                            via-transparent
                            to-black/5

                            md:bg-gradient-to-r
                            md:from-black/25
                            md:via-transparent
                            md:to-transparent
                          "
                        />

                        {/* Bottom depth */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/15
                            via-transparent
                            to-transparent
                          "
                        />
                      </>
                    ) : (
                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          text-sm
                          text-white/30
                        "
                      >
                        Image coming soon
                      </div>
                    )}

                    {/* CASE NUMBER - DESKTOP ONLY */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-7
                        right-8
                        hidden
                        select-none
                        text-[130px]
                        font-semibold
                        leading-none
                        tracking-[-0.06em]
                        text-white/[0.12]
                        md:block
                        lg:text-[145px]
                      "
                      style={{
                        fontFamily: "Kinta, sans-serif",
                      }}
                    >
                      {String(activeIndex + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>
                  </div>

                  {/* ===========================================
                      CONTENT
                  ============================================ */}

                  <div
                    className="
                      relative
                      order-2
                      flex
                      w-full
                      min-w-0
                      flex-col
                      overflow-hidden
                      bg-[#0b0b0c]
                      px-5
                      pb-7
                      pt-7
                      text-white

                      sm:px-7
                      sm:pb-8
                      sm:pt-8

                      md:order-1
                      md:min-h-[560px]
                      md:px-10
                      md:py-10

                      lg:px-12
                      lg:py-12
                    "
                  >

                    {/* Gold glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -left-28
                        -top-28
                        h-[300px]
                        w-[300px]
                        rounded-full
                        bg-[#f0a608]/10
                        blur-[100px]
                      "
                    />

                    <div className="relative z-10 min-w-0">

                      {/* EYEBROW */}

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            h-px
                            w-6
                            shrink-0
                            bg-[#f0a608]
                          "
                        />

                        <span
                          className="
                            min-w-0
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-white/45

                            sm:text-[9px]

                            md:text-[10px]
                            md:tracking-[0.24em]
                          "
                        >
                          {activeItem.eyebrow}
                        </span>
                      </div>

                      {/* CATEGORY */}

                      <p
                        className="
                          mt-4
                          text-[10px]
                          uppercase
                          tracking-[0.14em]
                          text-white/35

                          md:mt-5
                          md:text-[11px]
                        "
                      >
                        {activeItem.category}
                      </p>

                      {/* TITLE */}

                      <h3
                        className="
                          mt-2
                          max-w-full
                          break-words
                          text-[28px]
                          leading-[1.04]
                          tracking-[-0.03em]
                          text-white

                          sm:text-[34px]

                          md:text-[38px]

                          lg:text-[42px]
                        "
                        style={{
                          fontFamily:
                            "Kinta, sans-serif",
                        }}
                      >
                        {activeItem.title}
                      </h3>

                      {/* MAIN METRIC */}

                      <div className="mt-6 md:mt-8">
                        <div
                          className="
                            max-w-full
                            text-[52px]
                            font-semibold
                            leading-[0.9]
                            tracking-[-0.05em]
                            text-white

                            sm:text-[64px]

                            md:text-[82px]

                            lg:text-[94px]
                          "
                          style={{
                            fontFamily:
                              "Kinta, sans-serif",
                          }}
                        >
                          {activeItem.mainMetric}
                        </div>

                        <p
                          className="
                            mt-3
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.17em]
                            text-[#f0a608]

                            sm:text-[10px]
                          "
                        >
                          {activeItem.mainMetricLabel}
                        </p>
                      </div>

                      {/* =======================================
                          SECONDARY METRICS
                      ======================================== */}

                      {activeItem.metrics?.length ? (
                        <div
                          className="
                            mt-6
                            grid
                            w-full
                            grid-cols-2
                            border-y
                            border-white/10

                            md:mt-7
                          "
                        >
                          {activeItem.metrics.map(
                            (metric, index) => (
                              <div
                                key={metric.label}
                                className={`
                                  min-w-0
                                  py-4

                                  ${
                                    index === 0
                                      ? "border-r border-white/10 pr-3"
                                      : "pl-3"
                                  }

                                  sm:py-5

                                  ${
                                    index === 0
                                      ? "sm:pr-5"
                                      : "sm:pl-5"
                                  }
                                `}
                              >
                                <div
                                  className="
                                    break-words
                                    text-[20px]
                                    font-semibold
                                    leading-none
                                    tracking-tight
                                    text-white

                                    sm:text-[24px]

                                    md:text-[28px]
                                  "
                                  style={{
                                    fontFamily:
                                      "Kinta, sans-serif",
                                  }}
                                >
                                  {metric.value}
                                </div>

                                <p
                                  className="
                                    mt-2
                                    break-words
                                    text-[9px]
                                    leading-[1.35]
                                    text-white/40

                                    sm:text-[10px]

                                    md:text-[11px]
                                  "
                                >
                                  {metric.label}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      ) : null}

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-5
                          max-w-full
                          break-words
                          text-[13px]
                          leading-[1.65]
                          text-white/55

                          sm:text-sm

                          md:mt-6
                          md:text-[15px]
                          md:leading-[1.75]
                        "
                      >
                        {activeItem.description}
                      </p>

                      {/* TAGS

                          Hide on phones to prevent an
                          excessively tall card.
                      */}

                      {activeItem.tags?.length ? (
                        <div
                          className="
                            mt-5
                            hidden
                            flex-wrap
                            gap-2
                            sm:flex
                          "
                        >
                          {activeItem.tags.map(
                            (tag) => (
                              <span
                                key={tag}
                                className="
                                  rounded-full
                                  border
                                  border-white/10
                                  bg-white/[0.04]
                                  px-3
                                  py-1.5
                                  text-[9px]
                                  font-medium
                                  uppercase
                                  tracking-[0.1em]
                                  text-white/45
                                "
                              >
                                {tag}
                              </span>
                            )
                          )}
                        </div>
                      ) : null}
                    </div>

                    {/* =======================================
                        CTA
                    ======================================== */}

                    {activeItem.href ? (
                      <div
                        className="
                          relative
                          z-10
                          mt-6
                          md:mt-auto
                          md:pt-8
                        "
                      >
                        <Link
                          to={activeItem.href}
                          onClick={() =>
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            })
                          }
                          className="
                            inline-flex
                            items-center
                            gap-3
                            text-[13px]
                            font-semibold
                            text-white
                            transition
                            duration-300

                            hover:text-[#f0a608]

                            sm:text-sm
                          "
                        >
                          {activeItem.cta ??
                            "Read the Case Study"}

                          <span aria-hidden>
                            →
                          </span>
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* ===================================================
              BOTTOM NAVIGATION
          ==================================================== */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              px-1

              sm:mt-7
              sm:px-3
            "
          >

            {/* COUNTER */}

            <div
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-black/35

                sm:text-[10px]
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}

              <span className="mx-2">
                /
              </span>

              {String(baseItems.length).padStart(2, "0")}
            </div>

            {/* DOTS */}

            <div className="flex items-center gap-2">
              {baseItems.map((item, index) => (
                <button
                  key={item.id ?? index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to case study ${
                    index + 1
                  }`}
                  aria-current={
                    index === activeIndex
                      ? "true"
                      : undefined
                  }
                  className={`
                    h-[6px]
                    rounded-full
                    transition-all
                    duration-300

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#f0a608]
                    focus-visible:ring-offset-2

                    ${
                      index === activeIndex
                        ? "w-7 bg-[#f0a608] sm:w-8"
                        : "w-[6px] bg-black/20 hover:bg-black/40"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}