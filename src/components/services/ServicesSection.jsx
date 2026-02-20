// src/components/services/ServicesSection.jsx
import React from "react";
import { Link } from "react-router-dom";

// ✅ Update these paths to match your actual files
import productionImg from "../../assets/images/production.webp";
import brandingImg from "../../assets/images/branding.webp";

const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

const services = [
  {
    title: "Brand Strategy & Positioning",
    to: "/brand-strategy-positioning",
    img: brandingImg,
    alt: "Brand strategy and positioning",
    desc: "Define your brand purpose, voice, and positioning so your message is clear, consistent, and compelling.",
    bullets: [
      "Brand purpose & narrative",
      "Audience + messaging framework",
      "Positioning & differentiation",
      "Identity direction (visual + verbal)",
    ],
  },
  {
    title: "Content & Storytelling",
    to: "/content-storytelling",
    img: productionImg,
    alt: "Content and storytelling",
    desc: "Editorial content that builds trust, shapes perception, and turns attention into action.",
    bullets: [
      "Brand voice & editorial direction",
      "Social content systems",
      "Launch + campaign storytelling",
      "Creative direction (optional)",
    ],
  },
  {
    title: "Web Design & Development",
    to: "/web-design-development",
    img: brandingImg,
    alt: "Web design and development",
    desc: "High-performing, modern websites that feel elegant and convert—built to scale with your business.",
    bullets: [
      "UX/UI + responsive design",
      "React / WordPress builds (as needed)",
      "Performance + accessibility",
      "Conversion-focused structure",
    ],
  },
  {
    title: "SEO & Performance Growth",
    to: "/seo-performance-growth",
    img: productionImg,
    alt: "SEO and performance growth",
    desc: "Strong foundations and measurable growth systems that compound over time—without the noise.",
    bullets: [
      "SEO foundations + content planning",
      "CRO (conversion optimization)",
      "Analytics + reporting setup",
      "Funnel & journey improvements",
    ],
  },
  {
    title: "Commercials & Paid Media",
    to: "/commercials-paid-media",
    img: productionImg,
    alt: "Commercials and paid media",
    desc: "Cinematic commercials and paid campaigns designed to stop the scroll and drive action.",
    bullets: [
      "Commercial & brand video",
      "Paid social + search creative",
      "Campaign strategy + testing",
      "Landing pages + conversion support",
    ],
  },
  {
    title: "Lead Generation & Automation",
    to: "/lead-generation-automation",
    img: brandingImg,
    alt: "Lead generation and automation",
    desc: "Systems that capture, qualify, and follow up with leads automatically—so growth doesn’t depend on guesswork.",
    bullets: [
      "CRM + form integrations",
      "Email/SMS follow-up flows",
      "Lead routing + segmentation",
      "Dashboards + workflow automation",
    ],
  },
  {
    title: "Ongoing Digital Managment",
    to: "/ongoing-digital-management",
    img: brandingImg,
    alt: "Ongoing digital management",
    desc: "We don’t just launch—we manage, refine, and evolve your digital presence with you.",
    bullets: [
      "Website updates + improvements",
      "Performance monitoring",
      "Monthly strategy iteration",
      "Content & campaign support",
    ],
  },
];

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
            Growing  brands with purpose by capturing attention today and creating momentum for tomorrow.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Image Link (kept clickable) */}
              <Link
                to={service.to}
                onClick={scrollTop}
                className="group relative block h-56 sm:h-64"
                aria-label={`View ${service.title} service`}
              >
                <img
                  src={service.img}
                  alt={service.alt}
                  className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10" />
              </Link>

              <div className="p-8">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 text-black/65 leading-relaxed">
                  {service.desc}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-black/60">
                  {service.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}