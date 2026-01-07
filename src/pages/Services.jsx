import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Brand Strategy & Positioning",
    desc: "Define your brand purpose, voice, and positioning so your message is clear, consistent, and compelling.",
    bullets: [
      "Brand purpose & narrative",
      "Audience + messaging framework",
      "Positioning & differentiation",
      "Identity direction (visual + verbal)",
    ],
  },
  {
    title: "Web Design & Development",
    desc: "High-performing, modern websites that feel elegant and convert—built to scale with your business.",
    bullets: [
      "UX/UI + responsive design",
      "React / WordPress builds (as needed)",
      "Performance + accessibility",
      "Conversion-focused structure",
    ],
  },
  {
    title: "Content & Storytelling",
    desc: "Editorial content that builds trust, shapes perception, and turns attention into action.",
    bullets: [
      "Brand voice & editorial direction",
      "Social content systems",
      "Launch + campaign storytelling",
      "Creative direction (optional)",
    ],
  },
  {
    title: "SEO & Performance Growth",
    desc: "Strong foundations and measurable growth systems that compound over time—without the noise.",
    bullets: [
      "SEO foundations + content planning",
      "CRO (conversion optimization)",
      "Analytics + reporting setup",
      "Funnel & journey improvements",
    ],
  },
  {
    title: "Automation & Systems",
    desc: "Behind-the-scenes systems that save time, reduce friction, and keep leads moving.",
    bullets: [
      "CRM + form integrations",
      "Email/SMS follow-up flows",
      "Lead routing + segmentation",
      "Dashboards + workflow automation",
    ],
  },
  {
    title: "Ongoing Digital Management",
    desc: "We don’t just launch—we manage, refine, and evolve your digital presence with you.",
    bullets: [
      "Website updates + improvements",
      "Performance monitoring",
      "Monthly strategy iteration",
      "Content & campaign support",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.06 },
  }),
};

export default function Services() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-black/60">
            Services
          </p>

          <h1
            className="mt-4 leading-none tracking-tight"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
            }}
          >
            Digital systems built for clarity, growth, and longevity.
          </h1>

          <p className="mt-6 text-black/70">
            We help brands build a cleaner presence, stronger positioning, and
            measurable growth—through strategy, design, and smart automation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-2xl border border-black/10 bg-white/40 p-6 backdrop-blur-sm"
            >
              <h2
                className="tracking-tight"
                style={{
                  fontFamily: "Kinta, sans-serif",
                  fontWeight: 400,
                  fontSize: "1.6rem",
                }}
              >
                {s.title}
              </h2>

              <p className="mt-3 text-black/70">{s.desc}</p>

              <ul className="mt-5 space-y-2 text-sm text-black/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[2px] inline-block h-2 w-2 rounded-full bg-black/30" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-16 rounded-3xl border border-black/10 bg-white/50 p-8 md:p-10 text-center"
        >
          <h3
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            }}
            className="tracking-tight"
          >
            Ready to build something intentional?
          </h3>

          <p className="mt-3 text-black/70">
            Tell us what you’re working on. We’ll respond with next steps.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">



            <FooterRouterLink
              to="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
            >
              Contact Us
            </FooterRouterLink>

            <FooterRouterLink
              to="/about"
              className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold hover:bg-black/5"
            >
              About MKG
            </FooterRouterLink>

          </div>
        </motion.div>
      </div>
    </section>
  );
}



function FooterRouterLink({ to, children, className = "" }) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`cursor-pointer transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

