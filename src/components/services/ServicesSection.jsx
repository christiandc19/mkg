// src/components/services/ServicesSection.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ added

// Images
import productionImg from "../../assets/images/production.webp";
import brandingImg from "../../assets/images/branding.webp";
import webDevImg from "../../assets/images/web-development.webp";
import seoImg from "../../assets/images/SEO.webp";
import commercialImg from "../../assets/images/commercial.webp";
import automationImg from "../../assets/images/automation.webp";
import managementImg from "../../assets/images/management.webp";

const services = [
  {
    title: "Brand Strategy & Positioning",
    img: brandingImg,
    alt: "Brand strategy and positioning",
    desc: "Clear positioning is the foundation of everything we build. We ensure your brand knows who it is, who it’s for, and why it wins.",
    bullets: [
      "Brand purpose & narrative",
      "Audience + messaging framework",
      "Positioning & differentiation",
      "Identity direction (visual + verbal)",
    ],
  },
  {
    title: "Content & Storytelling",
    img: productionImg,
    alt: "Content and storytelling",
    desc: "Editorial content that builds trust, shapes perception, and turns attention into action.We don’t just create content—we create meaningful signals that move audiences.",
    bullets: [
      "Brand voice & editorial direction",
      "Social content systems",
      "Launch + campaign storytelling",
      "Creative direction (optional)",
    ],
  },
  {
    title: "Web Design & Development",
    img: webDevImg,
    alt: "Web design and development",
    desc: "High-performing, modern websites designed to convert and scale. Your website isn’t a brochure—it’s a growth engine.",
    bullets: [
      "UX/UI + responsive design",
      "React / WordPress builds (as needed)",
      "Performance + accessibility",
      "Conversion-focused structure",
    ],
  },
  {
    title: "SEO & Performance Growth",
    img: seoImg,
    alt: "SEO and performance growth",
    desc: "Sustainable growth systems that compound over time—without the noise. We focus on long-term visibility and measurable outcomes, not vanity metrics.",
    bullets: [
      "SEO foundations + content planning",
      "CRO (conversion optimization)",
      "Analytics + reporting setup",
      "Funnel & journey improvements",
    ],
  },
  {
    title: "Commercials & Paid Media",
    img: commercialImg,
    alt: "Commercials and paid media",
    desc: "High-impact creative paired with strategic distribution. We combine storytelling and performance to ensure your media doesn’t just look good—it works.",
    bullets: [
      "Commercial Production",
      "Paid Social & Paid Search Strategy",
      "Creative Testing & Iteration",
      "Campaign Optimization & Reporting",
    ],
  },
  {
    title: "Lead Generation & Automation",
    img: automationImg,
    alt: "Lead generation and automation",
    desc: "Behind-the-scenes systems that turn attention into qualified leads. We build systems that capture demand, nurture interest, and move leads to action—automatically.",
    bullets: [
      "Funnel & Lead Magnet Strategy",
      "CRM & Form Integrations",
      "Email/SMS Follow-up Flows",
      "Lead Routing, Segmentation & Automation",
    ],
  },
  {
    title: "Ongoing Digital Managment",
    img: managementImg,
    alt: "Ongoing digital management",
    desc: "We don’t just launch—we evolve with you. Growth isn’t static. Your digital presence shouldn’t be either.",
    bullets: [
      "Website Updates & Optimization",
      "Performance Monitoring",
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
            Growing brands with purpose by capturing attention today and creating momentum for tomorrow.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Image */}
              <div className="group relative block h-56 sm:h-64">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="p-8 flex flex-col h-full">
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

                {/* ✅ CTA Button */}
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                  className="mt-7 inline-flex w-fit rounded-full border border-black/20 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                >
                  Let&apos;s Work Together
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}