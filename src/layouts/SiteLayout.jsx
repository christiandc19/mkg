import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/home/Footer";
import { Link } from "react-router-dom";

export default function SiteLayout() {
  const { scrollYProgress } = useScroll();

  // 0 = top of page, 1 = bottom of page
  // Make it reach the new color around ~35% scroll (tweak as you like)
  const bg = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["#F4F7F2", "#e9e0d9ff"]
  );

  return (
    <motion.div className="min-h-screen text-black" style={{ backgroundColor: bg }}>
      <div className="flex items-center justify-between px-10 py-6">
        
    <Link
      to="/"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="font-bold tracking-tight hover:opacity-80 transition"
      style={{ fontSize: "1.5rem", fontFamily: "Kinta, sans-serif" }}
    >
      MKG Digital Management
    </Link>


        <Navbar />
      </div>

      <Outlet />
      <Footer />

    </motion.div>
  );
}

