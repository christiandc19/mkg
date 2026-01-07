import { Link } from "react-router-dom";
import laptopGuy from "../assets/images/laptop-guy.png";
import Notepad from "../assets/images/brand-strategy.png";
import Imac from "../assets/images/imac.png";

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


import { motion } from "framer-motion";
import Typewriter from "../components/home/Typewriter";

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
      className={`marquee ${direction === "right" ? "marquee--right" : "marquee--left"}`}
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
  const baseTextStyle = {
    fontFamily: "Kinta, sans-serif",
    fontWeight: 400,
    fontSize: "clamp(3rem, 7vw, 7.5rem)",
    letterSpacing: "-0.02em",
    lineHeight: "0.95",
  };

  if (typeof item === "string") {
    return (
      <span className="text-black" style={baseTextStyle}>
        {item}
      </span>
    );
  }

  if (item?.type === "dot") {
    return (
      <span
        aria-hidden
        className="inline-block rounded-full"
        style={{
          width: "clamp(22px, 3vw, 56px)",
          height: "clamp(22px, 3vw, 56px)",
          backgroundColor: item.color || "#ffc107",
        }}
      />
    );
  }

  if (item?.type === "img") {
    return (
      <span className="inline-flex items-center">
        <img
          src={item.src}
          alt={item.alt || ""}
          className="h-[52px] w-[96px] rounded-md object-cover md:h-[68px] md:w-[120px]"
          draggable="false"
        />
      </span>
    );
  }

if (item?.type === "logo") {
  return (
    <span className="inline-flex items-center">
      <img
        src={item.src}
        alt={item.alt || "Logo"}
        draggable="false"
        className="
          h-10 sm:h-12 md:h-14
          w-auto
          transition-transform duration-200
          hover:scale-105
        "
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
<section className="px-5 sm:px-8 md:px-10 pb-20">
  <div className="mx-auto max-w-6xl">
    <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
      {/* Left */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <p className="text-sm uppercase tracking-widest text-black/60">
          Digital • Creative • Growth
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
          We design and manage digital systems that help brands grow — intentionally.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
          <Link
            to="/about"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
          >
            Learn More
          </Link>

          <a
            href="/contact"
            className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold hover:bg-black/5"
          >
            Contact Us
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


{/* ------------------------------------------------------- MARQUEE ------------------------------------- */}


{/* LOGO MARQUEE */}
<section className="px-0 pb-24">
  <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
    <div className="border-t border-black/10 pt-10" />
  </div>

  {/* center the marquee area */}
  <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10 mt-8">
    <MarqueeRow
      direction="left"
      duration={28}   // ✅ faster
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
      ]}
    />
  </div> 

<div className="mx-auto max-w-6xl px-10">
  <div className="border-b border-black/10 mt-10" />
</div>

</section>


{/* ------------------------------------------------------- PHRASE ------------------------------------- */}


      {/* PHRASE */}
      <section className="flex h-[50vh] items-center justify-center px-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="leading-tight text-black/80"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontFamily: "Kinta, sans-serif",
                fontWeight: 400,
              }}
            >
              Bringing a human touch to digital growth through deep engagement, intentional
              storytelling, and measurable results.
            </p>
          </motion.div>

          <div className="mt-6">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-black/60 hover:text-black"
            >
              Learn more about MKG <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>


{/* ------------------------------------------------------- MAC ------------------------------------- */}


      {/* Imac */}
<section className="px-5 sm:px-8 md:px-10 py-14 md:py-20 min-h-[100svh] flex items-center">
  <div className="mx-auto w-full max-w-6xl">
    <div className="grid gap-10 md:gap-14">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={Imac}
          alt="Brand strategy notes"
          className="w-full object-contain max-h-[70vh] mx-auto"
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2
          className="leading-none tracking-tight"
          style={{
            fontSize: "clamp(1.8rem, 5.5vw, 5rem)",
            fontFamily: "Kinta, sans-serif",
            fontWeight: 400,
          }}
        >
          <Typewriter text="LET'S WORK TOGETHER" speed={85} />
        </h2>
      </motion.div>
    </div>
  </div>
</section>



{/* ------------------------------------------------------- FOOTER ------------------------------------- */}


{/* FOOTER */}
<footer className="px-10 pb-10 flex">
  <div className="mx-auto max-w-6xl">
    <div className="border-t border-black/10 pt-10">
      <div className="grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div
            className="tracking-tight"
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "1.5rem",
            }}
          >
            MKG Digital Management
          </div>

          <p className="mt-4 max-w-sm text-sm text-black/70">
            Minimal systems. Measurable growth. Human-led digital management built to last.
          </p>

          <p className="mt-6 text-xs uppercase tracking-widest text-black/50">
            Based in Los Angeles, CA
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <FooterCol title="Explore">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <FooterLink href="/about#contact">Contact</FooterLink>
            <FooterLink href="mailto:hello@mkggroup.com">hello@mkggroup.com</FooterLink>
            <FooterLink href="tel:+13105551234">(310) 555-1234</FooterLink>
          </FooterCol>

          <FooterCol title="Follow">
            <FooterLink href="#" target="_blank" rel="noreferrer">
              Instagram
            </FooterLink>
            <FooterLink href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </FooterLink>
            <FooterLink href="#" target="_blank" rel="noreferrer">
              YouTube
            </FooterLink>
          </FooterCol>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/60 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} MKG Digital Management. All rights reserved.</div>
        <div className="flex gap-6">
          <a className="hover:text-black" href="/privacy">Privacy</a>
          <a className="hover:text-black" href="/terms">Terms</a>
        </div>
      </div>
    </div>
  </div>
</footer>



    </>

    
  );
}


function FooterCol({ title, children }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-black/50">{title}</p>
      <div className="mt-4 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="text-sm text-black/70 hover:text-black transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}
