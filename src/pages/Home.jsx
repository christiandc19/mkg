import { Link } from "react-router-dom";
import laptopGuy from "../assets/images/laptop-guy.png";
import { motion } from "framer-motion";
import Typewriter from "../components/home/Typewriter"; // adjust path if needed

export default function Home() {
  return (
    <>

    <section className="px-10 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-black/60">
              Digital • Creative • Growth
            </p>

        
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <h1
    className="leading-none tracking-tight text-left"
    style={{
      fontSize: "clamp(2.5rem, 7vw, 6rem)",
      fontFamily: "Kinta, sans-serif",
      fontWeight: 400,
    }}
  >
    <Typewriter text="MEDIA KING GROUP" speed={90} />
  </h1>
</motion.div>




            <p className="mt-6 max-w-md text-black/70">
              We build bold brands, high-converting web experiences, and content that moves.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                Enter
              </Link>

              <a
                href="#contact"
                className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold hover:bg-black/5"
              >
                Contact
              </a>
            </div>
          </div>

<div className="overflow-hidden rounded-2xl bg-white/0 backdrop-blur">
  <img
    src={laptopGuy}
    alt="Man working on a laptop"
    className="h-full w-full object-cover"
  />
</div>

        </div>
      </div>
    </section>



{/* Phrase */}

<section className="px-10 pb-16">
  <div className="mx-auto max-w-6xl">
    <div className="border-t border-black/10 pt-10">
      <p
        className="max-w-3xl text-left leading-tight text-black/80"
        style={{
          fontSize: "clamp(1.6rem, 2.4vw, 2.25rem)",
          fontFamily: "Kinta, sans-serif",
          fontWeight: 400,
        }}
      >
        Bringing a human touch to digital growth through deep engagement,
        intentional storytelling, and measurable results.
      </p>

      <div className="mt-6">
        <a
          href="/about"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-black/70 hover:text-black"
        >
          Learn more about MKG <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  </div>
</section>



    </>
  );
}
