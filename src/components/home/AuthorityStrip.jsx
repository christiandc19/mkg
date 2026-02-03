import React from "react";

export default function AuthorityStrip() {
  return (
    <section className="w-full px-4 sm:px-8 pt-20 pb-20 bg-[white]">
      <div className="mx-auto w-[95%] lg:w-[90%]">
        {/* Same container style as Client Logos */}
        <div className="rounded-3xl bg-[#e9e0d9] p-6 sm:p-8 ring-1 ring-black/5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            <Stat value="10+" label="Years Experience" />
            <Stat value="120+" label="Brands Built" />
            <Stat value="300+" label="Funnels Deployed" />
            <Stat value="1M+" label="Leads Generated" />
            <Stat value="15+" label="Markets Served" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-[#F4F7F2] p-4 ring-1 ring-black/10 shadow-sm">
      <div
        className="text-3xl font-semibold text-black"
        style={{ fontFamily: "Kinta, sans-serif" }}
      >
        {value}
      </div>
      <div className="mt-1 text-sm text-black/60 tracking-wide">
        {label}
      </div>
    </div>
  );
}
