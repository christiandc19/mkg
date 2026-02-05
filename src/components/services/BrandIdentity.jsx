import React from "react";
import { motion } from "framer-motion";
import ContactForm from '../../components/home/ContactForm'

export default function BrandIdentity() {
  const items = [
    "Brand strategy & positioning",
    "Visual identity systems",
    "Brand guidelines",
    "Messaging & narrative frameworks",
    "Content DNA & voice development",
  ];

  return (
    <>
    <section className="px-5 sm:px-8 md:px-10 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-widest text-black/60">
          Brand & Identity
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight"
          style={{ fontFamily: "Kinta, sans-serif" }}
        >

          
          We define how your brand looks, sounds, and feels.
        </motion.h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-4 text-left transition hover:bg-white/80 hover:shadow-sm"
            >
              <p className="font-semibold text-black/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className="bg-[#e9e0d9]">
<ContactForm />
</section>
    </>
  );
}
