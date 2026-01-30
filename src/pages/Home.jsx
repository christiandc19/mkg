// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FeasibilityStudiesCarousel from "../components/home/FeasibilityStudiesCarousel";
import { FEASIBILITY_STUDIES } from "../components/home/feasibilityStudiesData";
import SystemPromo from "../components/home/SystemPromo";
import DigitalAgencyHero from "../components/home/DigitalAgencyHero";
import Person from "../assets/images/person.webp";   // <-- change filename to yours
import City from "../assets/images/city.webp";       // optional
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
      <section className="px-5 sm:px-8 md:px-10 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="mt-10 grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
            {/* Left */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
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
                    fontSize: "clamp(4rem, 7vw, 6rem)",
                    fontFamily: "Kinta, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <Typewriter text="MEDIA KING GROUP" speed={90} />
                </h1>
              </motion.div>

              <p className="mt-6 max-w-md text-black/70">
                A full-service brand, media, and growth agency helping founders,
                companies, and creators turn attention into authority — and
                authority into revenue.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
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

            {/* Right image */}
            <div className="flex justify-center md:justify-end">
              <div className="overflow-hidden rounded-2xl max-w-md w-full">
                <img
                  src={laptopGuy}
                  alt="Man working on a laptop"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




<DigitalAgencyHero
      personSrc={Person}
      citySrc={City}
      siteUrl="WWW.MEDIAKINGGROUP.COM"
    />


      <ClientLogos />
      <AuthorityStrip />
      <MKGOperatingSystem />
      <MKGPrinciples />
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



      <FeasibilityStudiesCarousel
        items={FEASIBILITY_STUDIES}
        title=""
        subtitle=""
        maxItems={6}
      />



      {/* ------------------------------------------------------- Video ------------------------------------- */}
      <VideoSection />







      {/* ------------------------------------------------------- MARQUEE ------------------------------------- */}

      {/* LOGO MARQUEE */}
      <section className="px-0 pb-24">
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
          <div className="border-b border-black/10 mt-10" />
        </div>
      </section>



      <TestimonialCarousel />
    </>
  );
}
