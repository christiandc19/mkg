import React from "react";
import Imac from "../../assets/images/imac.png";

export default function SystemPromo() {
  return (
    <section className="w-full px-4 sm:px-8 py-16">
      <div className="mx-auto w-[95%] lg:w-[90%]">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 ring-1 ring-white/10 shadow-2xl">
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(249,115,22,0.18),transparent_55%),radial-gradient(1000px_circle_at_80%_30%,rgba(99,102,241,0.20),transparent_55%),radial-gradient(800px_circle_at_60%_90%,rgba(14,165,233,0.14),transparent_60%)]" />

          <div className="relative grid gap-10 p-8 sm:p-10 md:grid-cols-2 md:items-center">
            {/* LEFT: Copy */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight">
                Your brand doesn’t need more content.
                <br />
                <span className="mt-3 inline-flex rounded-full bg-orange-500/95 px-4 py-2 text-white">
                  It needs a system.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
                Media King Group designs and operates high-performing digital ecosystems — brand identity,
                content engines, websites, funnels, and strategy — built to grow visibility, trust, and
                revenue over time.
              </p>

              <a
                href="/"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-400 transition"
              >
                Learn more about MKG
                <span aria-hidden className="text-lg leading-none">
                  ↗
                </span>
              </a>
            </div>

            {/* RIGHT: Image */}
            <div className="relative flex items-center justify-center">
              {/* glow behind image */}
              <div className="absolute -inset-10 rounded-[40px] bg-orange-500/10 blur-3xl" />

              <img
                src={Imac}
                alt="Media King Group digital system"
                className="relative max-w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
