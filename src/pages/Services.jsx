import BG from "../assets/images/mkg-hero-bg.webp";
import { motion } from "framer-motion";
import Typewriter from "../components/home/Typewriter";

import ServicesSection from '../components/services/ServicesSection.jsx'
import ContactForm from '../components/home/ContactForm.jsx'


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

    <>
    
      {/* HERO */}
      <section
        className="relative min-h-[75vh] sm:min-h-[75vh] lg:min-h-[80vh] px-5 sm:px-8 md:px-10 pb-12 overflow-hidden text-white flex items-center"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="select-none"
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(7rem, 24vw, 30rem)", // smaller on mobile
              lineHeight: 1,
              opacity: 0.05,
              letterSpacing: "-0.04em",
              color: "white",
            }}
          >
            MKG
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="mt-10 sm:mt-16 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <h1
                className="leading-none tracking-tight"
                style={{
                  fontSize: "clamp(2.75rem, 10vw, 6rem)", // mobile-friendly
                  fontFamily: "Kinta, sans-serif",
                  fontWeight: 400,
                }}
              >
                <Typewriter text="SERVICES" speed={90} />
              </h1>
            </motion.div>

            {/* New blurb */}
            <p className="mt-5 sm:mt-6 max-w-xl text-white/70 text-sm sm:text-base leading-relaxed px-2">
              Full-Service Brand, Media, and Growth Solutions.
            </p>
          </div>
        </div>
      </section>


    <section>

{/* ---------------------------------------------------------------------------------- */}

<ServicesSection/>

<ContactForm />








</section>





    
    </>
  );
}




