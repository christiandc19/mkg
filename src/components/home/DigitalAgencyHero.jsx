import React from "react";

export default function DigitalAgencyHero({
  personSrc,
  citySrc,
}) {
  return (
    <section className="w-full px-4 sm:px-8 py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 bg-[#e9e0d9]">
          <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-2">
            
            {/* LEFT */}
            <div className="relative bg-[#F4F7F2] px-8 py-10 sm:px-10 sm:py-12">
              <div className="relative max-w-md">
                <p className="text-2xl font-semibold text-black/70">Your brand doesn’t need more content.</p>

                <h1
                  className="mt-2 text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-tight text-black"
                  style={{ fontFamily: "Kinta, sans-serif" }}
                >
                   It needs
                  <br />
                  a system.
                </h1>

                <p className="mt-8 text-lg font-semibold text-black/60">
                  Media King Group designs and operates high-performing digital ecosystems — brand identity, content engines, websites, funnels, and strategy — built to grow visibility, trust, and revenue over time.

                </p>

                <p className="mt-4 max-w-xs text-sm leading-relaxed text-black/45">
                  Learn more about MKG
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative bg-[#e9e0d9]">
              {citySrc && (
                <img
                  src={citySrc}
                  alt="City"
                  className="absolute inset-0 h-full w-full object-cover opacity-25"
                />
              )}

              <div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 sm:px-10">


                <p className="mt-24 ml-auto text-xs tracking-[0.35em] text-black/40">
                </p>
              </div>
            </div>
          </div>

          {/* PERSON */}
          {personSrc && (
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-[260px] -translate-x-1/2 md:left-[56%] md:w-[360px] lg:w-[410px]">
              <img
                src={personSrc}
                alt="Person"
                className="h-auto w-full object-contain drop-shadow-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
