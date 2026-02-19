// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudiesCarousel from "../components/home/CaseStudiesCarousel";
import { CASE_STUDIES } from "../components/home/CaseStudiesData";
import DigitalAgencyHero from "../components/home/DigitalAgencyHero";
import Person from "../assets/images/person.webp";   // <-- change filename to yours
import Flow from "../assets/images/flow.png";       // optional
import AuthorityStrip from "../components/home/AuthorityStrip";
import MKGOperatingSystem from "../components/home/MKGOperatingSystem";
import MKGWhoWeWorkWith from "../components/home/MKGWhoWeWorkWith";
import BG from '../assets/images/mkg-hero-bg.webp'
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


  return (
    <>

{/* HERO */}
<section
  className="relative min-h-[90vh] px-5 sm:px-8 md:px-10 pb-10 overflow-hidden text-white flex items-center"
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
        fontSize: "clamp(10rem, 24vw, 30rem)",
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
  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="mt-16 flex flex-col items-center text-center">
      <p className="text-sm uppercase tracking-widest text-white/70">
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

      <p className="mt-6 max-w-xl text-white/70">
        A full-service brand, media, and growth agency helping founders,
        companies, and creators turn attention into authority — and
        authority into revenue.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          to="contact"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
        >
          Book a Call
        </Link>

        <Link
          to="case-studies"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          View Case Studies
        </Link>
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
<section className="pb-24 pt-24 bg-white">
  <div className="w-[90%] mx-auto">

    {/* Top line */}
    <div className="border-t border-black/10 pt-10" />

    {/* Header */}
    <div className="text-center">
      <h2
        className="text-2xl sm:text-3xl tracking-tight text-black"
        style={{ fontFamily: "Kinta, sans-serif" }}
      >
        BRANDS WE WORKED WITH
      </h2>
    </div>

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











{/* ------------------------------------------------- CASE STUDIES ---------------------------------------------------------------------- */}
      <CaseStudiesCarousel
        items={CASE_STUDIES}
        title=""
        subtitle=""
        maxItems={6}
      />


{/* ----------------------------------------------------------------------------------------------------------------------- */}




      <AuthorityStrip />





      {/* ------------------------------------------------------- MARQUEE ------------------------------------- */}

      {/* LOGO MARQUEE */}
      <section className="px-0 pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
          <div className="border-t border-white/10 pt-10" />
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














      <MKGOperatingSystem />
      <MKGWhoWeWorkWith />





      {/* ------------------------------------------------------- MARQUEE ------------------------------------- */}

      {/* LOGO MARQUEE */}
      {/* <section className="px-0 pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
          <div className="border-t border-white/10 pt-10" />
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
      </section> */}



      <TestimonialCarousel />


{/* ------------------------------------------------------------------------------------------------- */}

 {/* FINAL HOME CTA */}
        <div className="flex flex-col items-center gap-6 pb-20 pt-20 bg-[white]">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-black"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            Build the system that scales your brand.
          </h2>

          <p className="max-w-xl text-black/60">
            Book a call and let’s architect your growth.
          </p>

    <Link
      to="contact"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
    >
            Book a call
        </Link>
        </div>



    </>
  );
}




