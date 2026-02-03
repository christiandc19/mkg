import React, { useEffect, useMemo, useRef, useState } from "react";

export default function FeasibilityStudiesCarousel({
  items = [],
  title = "Feasibility Studies",
  subtitle = "A carousel of feasibility studies from past clients.",
  maxItems = 6,
}) {
  const baseItems = useMemo(
    () => (items ?? []).slice(0, maxItems),
    [items, maxItems]
  );

  const loopItems = useMemo(() => {
    if (!baseItems.length) return [];
    return [...baseItems, ...baseItems, ...baseItems].map((item, i) => ({
      ...item,
      _loopKey: `${item.id ?? item.client ?? "item"}__${i}`,
      _baseIndex: i % baseItems.length,
    }));
  }, [baseItems]);

  const [activeBase, setActiveBase] = useState(0);
  const [activeLoop, setActiveLoop] = useState(() =>
    baseItems.length ? baseItems.length : 0
  );

  const trackRef = useRef(null);
  const isJumpingRef = useRef(false);

  const scrollToLoopIndex = (loopIndex, behavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;

    const el = track.querySelector(`[data-loop-index="${loopIndex}"]`);
    if (!el) return;

    if (behavior === "auto") {
      const prev = track.style.scrollBehavior;
      track.style.scrollBehavior = "auto";
      el.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
      track.style.scrollBehavior = prev || "";
      return;
    }

    el.scrollIntoView({ behavior, inline: "center", block: "nearest" });
  };

  const jumpToLoopIndex = (loopIndex) => {
    isJumpingRef.current = true;
    scrollToLoopIndex(loopIndex, "auto");
    setActiveLoop(loopIndex);
    requestAnimationFrame(() => {
      isJumpingRef.current = false;
    });
  };

  useEffect(() => {
    if (!baseItems.length) return;

    const start = baseItems.length;
    setActiveLoop(start);
    setActiveBase(0);

    requestAnimationFrame(() => scrollToLoopIndex(start, "auto"));
  }, [baseItems.length]);

  useEffect(() => {
    if (!loopItems.length) return;

    const loopItem = loopItems[activeLoop];
    if (loopItem) setActiveBase(loopItem._baseIndex);

    scrollToLoopIndex(activeLoop, isJumpingRef.current ? "auto" : "smooth");
  }, [activeLoop, loopItems.length]);

  const next = () => {
    const n = baseItems.length;
    if (!n) return;

    const min = n;
    const max = 2 * n - 1;

    if (activeLoop === max) {
      jumpToLoopIndex(min);
      requestAnimationFrame(() => setActiveLoop(min + 1));
      return;
    }

    setActiveLoop((i) => i + 1);
  };

  const prev = () => {
    const n = baseItems.length;
    if (!n) return;

    const min = n;
    const max = 2 * n - 1;

    if (activeLoop === min) {
      jumpToLoopIndex(max);
      requestAnimationFrame(() => setActiveLoop(max - 1));
      return;
    }

    setActiveLoop((i) => i - 1);
  };

  const goToBase = (baseIndex) => {
    const n = baseItems.length;
    if (!n) return;
    const loopIndex = n + (baseIndex % n);
    setActiveLoop(loopIndex);
  };

  const renderLogoMark = (logoType) => {
    if (logoType === "asana") {
      return (
        <div className="flex items-center gap-2">
          <span className="inline-flex h-3 w-3 rounded-full bg-rose-500" />
          <span className="inline-flex h-3 w-3 rounded-full bg-rose-500 opacity-70" />
          <span className="inline-flex h-3 w-3 rounded-full bg-rose-500 opacity-40" />
        </div>
      );
    }
    return null;
  };

  if (!baseItems.length) {
    return (
      <section className="w-full px-4 sm:px-8 py-16 bg-[#F4F7F2]">
        <div className="mx-auto w-[95%] lg:w-[90%]">
          <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-black/60">{subtitle}</p>
          <div className="mt-6 rounded-2xl border border-dashed border-black/20 p-8 text-black/60">
            No feasibility studies yet. Pass an{" "}
            <code className="text-black">items</code> array to this component.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4 sm:px-8 py-16 bg-[#c9ada7]">
      <div className="mx-auto w-[95%] lg:w-[100%]">
        <div className="mb-8 flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
          <p className="text-black/60">{subtitle}</p>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 shadow-md ring-1 ring-black/10 hover:bg-white p-3"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 shadow-md ring-1 ring-black/10 hover:bg-white p-3"
          >
            ›
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-14"
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            {loopItems.map((s, loopIdx) => (
              <article
                key={s._loopKey}
                data-loop-index={loopIdx}
                className="
                  snap-center shrink-0
                  w-[86vw] sm:w-[78vw] lg:w-[68vw]
                  rounded-3xl overflow-hidden
                  bg-[#f2d6b7]
                  shadow-lg ring-1 ring-black/10
                "
                aria-label={`${s.client ?? "Client"} feasibility study`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* LEFT PANEL */}
                  <div className="bg-white p-8 sm:p-10 md:p-12">
                    <div className="max-w-lg">
                      <h3 className="text-xl sm:text-2xl font-semibold text-black/80">
                        {s.title}
                      </h3>

                      <p className="mt-4 text-black/60 leading-relaxed">
                        {s.description}
                      </p>

                      {s.tags?.length ? (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-10 flex items-center gap-3">
                        {renderLogoMark(s.logoType)}
                        {s.logoText ? (
                          <div className="text-2xl font-semibold tracking-tight">
                            {s.logoText}
                          </div>
                        ) : null}
                      </div>

                      {s.href ? (
                        <a
                          href={s.href}
                          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black"
                        >
                          {s.cta ?? "Read the Feasibility Study"}
                          <span aria-hidden>→</span>
                        </a>
                      ) : null}
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative min-h-[260px] md:min-h-[520px]">
                    {s.image ? (
                      <>
                        <img
                          src={s.image}
                          alt={s.alt ?? `${s.client ?? "Client"} study image`}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/5 text-black/40">
                        No image
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {baseItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToBase(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === activeBase ? "bg-black/70" : "bg-black/20 hover:bg-black/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
