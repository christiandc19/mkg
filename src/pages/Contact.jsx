import { motion } from "framer-motion";
import Typewriter from "../components/home/Typewriter";
import ContactForm from "../components/home/ContactForm";

export default function Contact() {
  return (
    <>
      {/* 50vh hero headline */}
      <section className="flex h-[50vh] items-center justify-center px-10">
<motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1
                  className="leading-none tracking-tight text-left"
                  style={{
                    fontSize: "clamp(2.5rem, 7vw, 4rem)",
                    fontFamily: "Kinta, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <Typewriter text="Let’s build the system behind your growth.
" speed={90} />
                </h1>
              </motion.div>
      </section>


       <section className="bg-[#e9e0d9]">
            <ContactForm />
       </section>
      



      {/* Add more “About” content here later */}
      <section className="px-10 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl" style={{ fontFamily: "Kinta, sans-serif" }}>
            About MKG
          </h2>
          <p className="mt-4 text-black/70">
            Add your story, services overview, approach, and proof here.
          </p>
        </div>
      </section>
    </>
  );
}
