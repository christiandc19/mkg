import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 sm:px-10 pb-10 bg-[white]">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/5" />

      {/* Giant watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="select-none"
          style={{
            fontFamily: "Kinta, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(6rem, 18vw, 14rem)",
            lineHeight: 1,
            opacity: 0.08,
            letterSpacing: "-0.04em",
          }}
        >
          MKG
        </div>
      </div>

      {/* Abstract floating lines/shapes */}
      <div className="pointer-events-none absolute inset-0">
        <FloatingRing className="-top-24 -left-24 h-[320px] w-[320px]" opacity="border-black/10" />
        <FloatingRing
          className="top-28 -right-40 h-[460px] w-[460px]"
          opacity="border-black/10"
          delay={0.8}
        />
        <FloatingRing
          className="bottom-6 left-1/3 h-[560px] w-[560px]"
          opacity="border-black/5"
          delay={1.4}
        />
        <FloatingLine className="left-10 top-24 w-[240px]" delay={0.3} />
        <FloatingLine className="right-16 bottom-24 w-[300px]" delay={1.1} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="border-t border-black/10 pt-16">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div
                className="tracking-tight leading-none"
                style={{
                  fontFamily: "Kinta, sans-serif",
                  fontWeight: 400,
                  fontSize: "2.25rem",
                }}
              >
                MKG Digital Management
              </div>

              <p className="mt-6 max-w-sm text-base text-black/70">
                Minimal systems. Measurable growth. Human-led digital management built to last.
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-black/50">
                Based in Los Angeles, CA
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-10 md:col-span-2 md:grid-cols-3">
              <FooterCol title="Explore">
                <FooterRouterLink to="/">Home</FooterRouterLink>
                <FooterRouterLink to="/about">About</FooterRouterLink>
                <FooterRouterLink to="/services">Services</FooterRouterLink>
              </FooterCol>

              <FooterCol title="Contact">
                <FooterRouterLink to="/contact">Contact</FooterRouterLink>
                <FooterLink href="mailto:hello@mkggroup.com">
                  Contact@MediaKingGroup.com
                </FooterLink>
                <FooterLink href="tel:+13105551234">(310) 555-1234</FooterLink>
              </FooterCol>

              <FooterCol title="Legal">
                <FooterRouterLink to="/privacy">Privacy</FooterRouterLink>
                <FooterRouterLink to="/terms">Terms</FooterRouterLink>
              </FooterCol>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col gap-4 border-t border-black/10 pt-8 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} MKG Digital Management. All rights reserved.
            </div>
            <div className="flex gap-8">
              <FooterRouterLink to="/privacy">Privacy</FooterRouterLink>
              <FooterRouterLink to="/terms">Terms</FooterRouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== Floating shapes (Framer Motion) ===== */

function FloatingRing({ className = "", opacity = "border-black/10", delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full border ${opacity} ${className}`}
      initial={{ y: 0, x: 0, rotate: 0, opacity: 0.9 }}
      animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [0, 2, 0] }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
}

function FloatingLine({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`absolute h-px ${className}`}
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0) 100%)",
      }}
      initial={{ y: 0, opacity: 0.7 }}
      animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
      transition={{
        duration: 9,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
}

/* ===== helpers ===== */

function FooterCol({ title, children }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-black/50">{title}</p>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="text-base text-black/70 hover:text-black transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}

function FooterRouterLink({ to, children }) {
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
      className="text-base text-black/70 hover:text-black transition-colors cursor-pointer"
    >
      {children}
    </a>
  );
}


