import React from "react";
import { Link } from "react-router-dom";

// ✅ Update these paths to match your actual files
import productionImg from "../../assets/images/production.webp";
import brandingImg from "../../assets/images/branding.webp";

const scrollTop = () => {
  // ✅ "instant" is not standard everywhere; "auto" is safest.
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[90%] max-w-6xl py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm tracking-wide text-black/60">Services</p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Built with intention.
          </h2>

          <p className="mt-6 text-lg text-black/65 leading-relaxed">
            We design systems that make brands clearer, stronger, and easier to
            trust — not one-off deliverables.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Brand Identity */}
          <article className="overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-0.5 hover:shadow-md">
            {/* ✅ Image is a Link + scroll-to-top */}
            <Link
              to="/brand-identity"
              onClick={scrollTop}
              className="group relative block h-56 sm:h-64"
              aria-label="View Brand Identity service"
            >
              <img
                src={brandingImg}
                alt="Brand identity — strategy and visual system"
                className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </Link>

            <div className="p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                Brand Identity
              </h3>

              <p className="mt-4 text-black/65 leading-relaxed">
                Define how your brand looks, sounds, and shows up across every
                touchpoint — with clarity and consistency.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-black/60">
                <li>• Positioning &amp; messaging</li>
                <li>• Visual identity systems</li>
                <li>• Brand guidelines</li>
              </ul>

              {/* ✅ CTA Button as Link */}
              <div className="mt-8">
                <Link
                  to="/brand-identity"
                  onClick={scrollTop}
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white
                    transition hover:opacity-90
                  "
                >
                  View Brand Identity <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Media Content Production */}
          <article className="overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-0.5 hover:shadow-md">
            {/* ✅ Image is a Link + scroll-to-top */}
            <Link
              to="/media-content-production"
              onClick={scrollTop}
              className="group relative block h-56 sm:h-64"
              aria-label="View Media Content Production service"
            >
              <img
                src={productionImg}
                alt="Media content production — cinematic production"
                className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </Link>

            <div className="p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                Media Content Production
              </h3>

              <p className="mt-4 text-black/65 leading-relaxed">
                Cinematic, intentional media designed to support your brand —
                not just fill space.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-black/60">
                <li>• Commercial &amp; brand video</li>
                <li>• Campaign &amp; social content</li>
                <li>• Photography &amp; visual assets</li>
              </ul>

              {/* ✅ CTA Button as Link */}
              <div className="mt-8">
                <Link
                  to="/media-content-production"
                  onClick={scrollTop}
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white
                    transition hover:opacity-90
                  "
                >
                  View Media Production <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
