import React from "react";

import logo15 from "../../assets/images/norwood-logo.png";
import logo16 from "../../assets/images/foxwood-logo.png";
import logo17 from "../../assets/images/oakdale-logo.png";
import logo18 from "../../assets/images/robin-logo.png";
import logo19 from "../../assets/images/asbury-logo.png";
import logo20 from "../../assets/images/canterbury-logo.png";
import logo21 from "../../assets/images/lighthouse-logo.png";
import logo22 from "../../assets/images/seneca-logo.png";
import logo23 from "../../assets/images/lakewood-logo.png";
import logo24 from "../../assets/images/embassy-logo.png";
import logo25 from "../../assets/images/vanadium-logo.png";

const LOGOS = [
  { src: logo15, alt: "Norwood" },
  { src: logo16, alt: "Foxwood Springs" },
  { src: logo17, alt: "Oakdale" },
  { src: logo18, alt: "Robin Run" },
  { src: logo19, alt: "Asbury Heights" },
  { src: logo20, alt: "Canterbury" },
  { src: logo21, alt: "Lighthouse Pointe" },
  { src: logo22, alt: "Seneca" },
  { src: logo23, alt: "Lakewood" },
  { src: logo24, alt: "Embassy" },
  { src: logo25, alt: "Vanadium Woods" },
];

export default function ClientLogos({
  title = "Trusted by communities and organizations",
  subtitle = "A few of the partners we’ve helped grow.",
}) {
  return (
    <section className="w-full px-4 sm:px-8 pt-20 pb-5 bg-[#F4F7F2]">
      <div className="mx-auto w-[95%] lg:w-[90%]">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-black"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            {title}
          </h2>
          <p className="mt-2 text-black/60">{subtitle}</p>
        </div>

        {/* Logos */}
        <div className="rounded-3xl bg-[#e9e0d9] p-6 sm:p-8 ring-1 ring-black/5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="
                  flex items-center justify-center
                  h-24
                  rounded-xl bg-[#F4F7F2]
                  ring-1 ring-black/10 shadow-sm
                  transition hover:scale-[1.03] hover:shadow-md
                "
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="
                    max-h-12
                    max-w-[140px]
                    object-contain
                    grayscale
                    hover:grayscale-0
                    transition
                  "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
