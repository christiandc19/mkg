import React from "react";
import { motion } from "framer-motion";
import ContactForm from '../../components/home/ContactForm'
import Collage from '../../components/services/MediaProductionCollage'

export default function MediaContentProduction() {
  const items = [
    "Short-form content production",
    "Long-form video & podcast editing",
    "Social media management",
    "Creative direction & scripting",
    "Editing, repurposing, and distribution systems",
  ];

  return (
    <>
    <section className="px-5 sm:px-8 md:px-10 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-widest text-black/60">
          Media & Content Production
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight"
          style={{ fontFamily: "Kinta, sans-serif" }}
        >
          We build content engines, not just posts.
        </motion.h2>

      </div>
    </section>


<Collage />

<section className="bg-[#e9e0d9]">
<ContactForm />

</section>
</>



  );
}
