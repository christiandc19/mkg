// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FeasibilityStudiesCarousel from "../components/home/FeasibilityStudiesCarousel";
import { FEASIBILITY_STUDIES } from "../components/home/feasibilityStudiesData";
import SystemPromo from "../components/home/SystemPromo";
import DigitalAgencyHero from "../components/home/DigitalAgencyHero";
import Person from "../assets/images/person.webp";   // <-- change filename to yours
import Flow from "../assets/images/flow.png";       // optional
import laptopGuy from "../assets/images/laptop-guy.png";
import Imac from "../assets/images/imac.png";
import AuthorityStrip from "../components/home/AuthorityStrip";
import MKGOperatingSystem from "../components/home/MKGOperatingSystem";
import MKGPrinciples from "../components/home/MKGPrinciples";
import MKGWhoWeWorkWith from "../components/home/MKGWhoWeWorkWith";
import ClientLogos from "../components/home/ClientLogos";

import VideoSection from "../components/home/VideoSection";
import TestimonialCarousel from "../components/home/TestimonialCarousel";
import Typewriter from "../components/home/Typewriter";

import logo1 from "../assets/images/google.png";
import logo2 from "../assets/images/meta.png";
import logo3 from "../assets/images/shopify.png";
import logo4 from "../assets/images/hubspot.png";
import logo5 from "../assets/images/wordpress.png";
import logo6 from "../assets/images/ga4.png";
import logo7 from "../assets/images/magento.png";
import logo8 from "../assets/images/semrush.png";
import logo9 from "../assets/images/wix.png";
import logo10 from "../assets/images/react.png";
import logo11 from "../assets/images/tiktok.png";
import logo12 from "../assets/images/instagram.png";
import logo13 from "../assets/images/facebook.png";
import logo14 from "../assets/images/google_ads.png";

import logo15 from "../assets/images/norwood-logo.png";
import logo16 from "../assets/images/foxwood-logo.png";
import logo17 from "../assets/images/oakdale-logo.png";
import logo18 from "../assets/images/robin-logo.png";
import logo19 from "../assets/images/asbury-logo.png";
import logo20 from "../assets/images/canterbury-logo.png";
import logo21 from "../assets/images/lighthouse-logo.png";
import logo22 from "../assets/images/seneca-logo.png";
import logo23 from "../assets/images/lakewood-logo.png";
import logo24 from "../assets/images/embassy-logo.png";
import logo25 from "../assets/images/vanadium-logo.png";



// ---------- Helpers: Marquee ----------
function MarqueeRow({ direction = "left", duration = 50, items = [] }) {
  const content = (
    <div className="marquee__inner">
      {items.map((item, idx) => (
        <MarqueeItem key={idx} item={item} />
      ))}
    </div>
  );

  return (
    <div
      className={`marquee ${
        direction === "right" ? "marquee--right" : "marquee--left"
      }`}
      style={{ ["--marquee-duration"]: `${duration}s` }}
    >
      <div className="marquee__track">
        {content}
        {content}
      </div>
    </div>
  );
}

function MarqueeItem({ item }) {
  if (item?.type === "logo") {
    return (
      <span className="inline-flex items-center">
        <img
          src={item.src}
          alt={item.alt || "Logo"}
          draggable="false"
          className="h-[4.5rem] w-auto transition-transform duration-200 hover:scale-105"
        />
      </span>
    );
  }

  return null;
}

// ---------- Page ----------
export default function Home() {
  // Intro overlay: zoom out -> zoom in -> reveal page
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>

{/* HERO */}
<section className="relative px-5 sm:px-8 md:px-10 pb-10 overflow-hidden">
  {/* Watermark */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div
      className="select-none"
      style={{
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(10rem, 24vw, 30rem)",
        lineHeight: 1,
        opacity: 0.04,          // lighter than footer
        letterSpacing: "-0.04em",
      }}
    >
      MKG
    </div>
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="mt-16 flex flex-col items-center text-center">
      <p className="text-sm uppercase tracking-widest text-black/60">
        We Build Brands, Media Systems, and Digital Ecosystems That Scale.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <h1
          className="leading-none tracking-tight"
          style={{
            fontSize: "clamp(5rem, 9vw, 8rem)",
            fontFamily: "Kinta, sans-serif",
            fontWeight: 400,
          }}
        >
          <Typewriter text="MEDIA KING GROUP" speed={90} />
        </h1>
      </motion.div>

      <p className="mt-6 max-w-xl text-black/70">
        A full-service brand, media, and growth agency helping founders,
        companies, and creators turn attention into authority — and
        authority into revenue.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          to="#"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
        >
          Book a Call
        </Link>

        <a
          href="#"
          className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold hover:bg-black/5"
        >
          View Case Studies
        </a>
      </div>
    </div>
  </div>
</section>





{/* ------------------------------------------- BANNER --------------------------------------------------------- */}
<DigitalAgencyHero
      personSrc={Person}
      citySrc={Flow}
      siteUrl="WWW.MEDIAKINGGROUP.COM"
    />




      {/* ------------------------------------------------------- MARQUEE ------------------------------------- */}

{/* LOGO MARQUEE */}
<section className="pb-24 pt-24 bg-[#e9e0d9]">
  <div className="w-[90%] mx-auto">
    {/* Top line */}
    <div className="border-t border-black/10 pt-10" />

    {/* Marquee */}
    <div className="mt-8 overflow-hidden">
      <MarqueeRow
        direction="left"
        duration={28}
        items={[
          { type: "logo", src: logo15, alt: "Norwood" },
          { type: "logo", src: logo16, alt: "Foxwood" },
          { type: "logo", src: logo17, alt: "Oakdale" },
          { type: "logo", src: logo18, alt: "Robin" },
          { type: "logo", src: logo19, alt: "Asbury" },
          { type: "logo", src: logo20, alt: "Canterbury" },
          { type: "logo", src: logo21, alt: "Lighthouse" },
          { type: "logo", src: logo22, alt: "Seneca" },
          { type: "logo", src: logo23, alt: "Lakewood" },
          { type: "logo", src: logo24, alt: "Embassy" },
          { type: "logo", src: logo25, alt: "Vanadium" },
        ]}
      />
    </div>

    {/* Bottom line */}
    <div className="border-b border-black/10 mt-10" />
  </div>
</section>







      {/* ------------------------------------------------------- Video ------------------------------------- */}
      <VideoSection />











{/* ------------------------------------------------- FEASIBILITY STUDIES ---------------------------------------------------------------------- */}

      <FeasibilityStudiesCarousel
        items={FEASIBILITY_STUDIES}
        title=""
        subtitle=""
        maxItems={6}
      />


{/* ----------------------------------------------------------------------------------------------------------------------- */}



      {/* <ClientLogos /> */}
      <AuthorityStrip />
      <MKGOperatingSystem />
      {/* <MKGPrinciples /> */}
      <MKGWhoWeWorkWith />


{/* <SystemPromo /> */}



      {/* ------------------------------------------------------- SUB-HERO POSITIONING ------------------------------------- */}

      {/* PHRASE */}
      {/* <section className="flex min-h-[55vh] md:min-h-[50vh] items-center justify-center px-5 sm:px-8 md:px-12">
        <div className="mx-auto w-full max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="leading-snug text-black/80"
              style={{
                fontSize: "clamp(1.6rem, 2.6vw, 1rem)",
                fontFamily: "Kinta, sans-serif",
                fontWeight: 400,
              }}
            >
              Your brand doesn’t need more content. It needs a system.
            </p>

            <p
              className="leading-snug text-black/80"
              style={{
                fontSize: "clamp(1.6rem, 2.6vw, 2rem)",
                fontFamily: "Kinta, sans-serif",
                fontWeight: 400,
              }}
            >
              Media King Group designs and operates high-performing digital
              ecosystems — brand identity, content engines, websites, funnels,
              and strategy — built to grow visibility, trust, and revenue over
              time.
            </p>
          </motion.div>

          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-black/60 hover:text-black transition"
            >
              Learn more about MKG <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section> */}


{/* 
      <FeasibilityStudiesCarousel
        items={FEASIBILITY_STUDIES}
        title=""
        subtitle=""
        maxItems={6}
      /> */}







      {/* ------------------------------------------------------- MARQUEE ------------------------------------- */}

      {/* LOGO MARQUEE */}
      <section className="px-0 pb-24 bg-[#e9e0d9]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
          <div className="border-t border-black/10 pt-10" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10 mt-8">
          <MarqueeRow
            direction="left"
            duration={28}
            items={[
              { type: "logo", src: logo1, alt: "Google" },
              { type: "logo", src: logo2, alt: "Meta" },
              { type: "logo", src: logo3, alt: "Shopify" },
              { type: "logo", src: logo4, alt: "HubSpot" },
              { type: "logo", src: logo5, alt: "WordPress" },
              { type: "logo", src: logo6, alt: "GA4" },
              { type: "logo", src: logo7, alt: "Magento" },
              { type: "logo", src: logo8, alt: "Semrush" },
              { type: "logo", src: logo9, alt: "Wix" },
              { type: "logo", src: logo10, alt: "React" },
              { type: "logo", src: logo11, alt: "Tiktok" },
              { type: "logo", src: logo12, alt: "Instagram" },
              { type: "logo", src: logo13, alt: "Facebook" },
              { type: "logo", src: logo14, alt: "Google Ads" },
            ]}
          />
        </div>

        <div className="mx-auto max-w-6xl px-10">
          <div/>
        </div>
      </section>



      <TestimonialCarousel />


{/* ------------------------------------------------------------------------------------------------- */}

 {/* FINAL HOME CTA */}
        <div className="flex flex-col items-center gap-6 pb-20 pt-20 bg-[#e9e0d9]">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-black"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            Build the system that scales your brand.
          </h2>

          <p className="max-w-xl text-black/60">
            Book a call and let’s architect your growth.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-3xl bg-black px-6 py-3 text-sm font-semibold text-[#F4F7F2] hover:opacity-90 transition"
          >
            Book a call
          </a>
        </div>



    </>
  );
}




