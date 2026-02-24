import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/images/mkg_logo.png";

export default function SiteLayout() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40); // tweak
  });

  return (
    <div className="min-h-screen">
      <motion.header
        className={`left-0 right-0 top-0 z-50 ${
          scrolled ? "fixed" : "absolute"
        }`}
        animate={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 md:px-10 py-4 md:py-6 text-white">
          
          {/* LOGO IMAGE */}
          <Link
            to="/"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            className="hover:opacity-80 transition flex items-center"
          >
            <img
              src={Logo}
              alt="MKG Digital Management Logo"
              className="h-7 sm:h-8 md:h-8 w-auto object-contain"
            />
          </Link>

          <Navbar />
        </div>
      </motion.header>

      {/* Hero can sit behind transparent header */}
      <Outlet />
      <Footer />
    </div>
  );
}