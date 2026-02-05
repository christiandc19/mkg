import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <div className="px-5 sm:px-8 md:px-10 py-16 md:py-20 mx-auto max-w-6xl">
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
            Full-Service Brand, Media, and Growth Solutions.
          </h1>

          <p className="mt-6 text-black/70">
            Everything your brand needs to scale — designed and executed as one system.

          </p>
        </motion.div>

</div>


{/* ---------------------------------------------------------------------------------- */}

<ServicesSection/>

<ContactForm />














    
    </>
  );
}




