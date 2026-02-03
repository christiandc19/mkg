import VideoSection from "../components/home/VideoSection";

export default function About() {
  return (
    <>
      {/* 50vh hero headline */}
<section className="h-[50vh] px-10 flex items-center">
  <div className="w-full max-w-6xl mx-auto">
    <h1
      className="leading-none tracking-tight text-center"
      style={{
        fontSize: "clamp(1rem, 14vw, 7rem)",
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
      }}
    >
      ABOUT
    </h1>

    <p
      className="mt-4 text-center"
      style={{
        fontSize: "clamp(2rem, 2vw, 7rem)",
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
      }}
    >
      Building the infrastructure behind modern brands.
    </p>
  </div>
</section>





{/* THE STORY */}
<section className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-20 bg-[#c9ada7]">
  {/* subtle watermark */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div
      className="select-none"
      style={{
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(7rem, 18vw, 16rem)",
        lineHeight: 1,
        opacity: 0.03,
        letterSpacing: "-0.04em",
      }}
    >
      MKG
    </div>
  </div>

  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-widest text-black/60">The Story</p>

      <h2
        className="mt-4 leading-none tracking-tight"
        style={{
          fontFamily: "Kinta, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(2.75rem, 5vw, 4rem)",
        }}
      >
        Built for modern growth.
      </h2>

      <div className="mt-8 space-y-5 text-black/70 leading-relaxed text-base sm:text-lg">
        <p>
          <span className="text-black/80 font-semibold">Media King Group</span> was
          built on a simple realization: modern growth doesn’t come from posting
          more — it comes from building the right system.
        </p>

        <p>
          What began as deep expertise in viral media evolved into a full-service
          agency focused on brand identity, content systems, digital
          infrastructure, and long-term growth strategy.
        </p>

        <p>
          Today, Media King Group partners with brands across industries to design
          ecosystems that compound.
        </p>
      </div>


    </div>
  </div>
</section>


{/* ------------------------------------------------------OUR MISSION---------------------------------------------------------- */}



{/* OUR MISSION */}
<section className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-20">
  {/* subtle watermark */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div
      className="select-none"
      style={{
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(7rem, 18vw, 16rem)",
        lineHeight: 1,
        opacity: 0.03,
        letterSpacing: "-0.04em",
      }}
    >
      MKG
    </div>
  </div>

  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-widest text-black/60">
        Our Mission
      </p>

      <h2
        className="mt-4 leading-none tracking-tight"
        style={{
          fontFamily: "Kinta, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(2.75rem, 5vw, 4rem)",
        }}
      >
        What we exist to build.
      </h2>

      <div className="mt-8 grid gap-4 text-black/70 text-base sm:text-lg">
        <p>To build brands people trust, follow, and buy from.</p>
        <p>To turn founders into authorities.</p>
        <p>To create digital systems that scale without chaos.</p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href="#"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
        >
          Work With MKG
        </a>
        <a
          href="#"
          className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold hover:bg-black/5"
        >
          View Services
        </a>
      </div>
    </div>
  </div>
</section>



{/* ---------------------------------------------------------------------------------------------------------------  */}



{/* WHAT MAKES US DIFFERENT */}
<section className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-20 bg-[#c9ada7]">
  {/* subtle watermark */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div
      className="select-none"
      style={{
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(7rem, 18vw, 16rem)",
        lineHeight: 1,
        opacity: 0.025,
        letterSpacing: "-0.04em",
      }}
    >
      MKG
    </div>
  </div>

  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="mx-auto max-w-4xl">
      <p className="text-xs uppercase tracking-widest text-black/60">
        What Makes Us Different
      </p>

      <h2
        className="mt-4 leading-none tracking-tight"
        style={{
          fontFamily: "Kinta, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
        }}
      >
        Strategy with structure. Creativity with consequence.
      </h2>

      <div className="mt-12 space-y-10">
        {/* Item 1 */}
        <div>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            }}
          >
            Luxury Creative + Performance Strategy
          </p>
          <p className="mt-2 text-black/70 max-w-2xl">
            We blend premium design with measurable outcomes.
          </p>
        </div>

        {/* Item 2 */}
        <div>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            }}
          >
            Systems-First Thinking
          </p>
          <p className="mt-2 text-black/70 max-w-2xl">
            Every decision supports scalability and consistency.
          </p>
        </div>

        {/* Item 3 */}
        <div>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            }}
          >
            Full-Service Execution
          </p>
          <p className="mt-2 text-black/70 max-w-2xl">
            Strategy, branding, content, development, and operations — under one roof.
          </p>
        </div>

        {/* Item 4 */}
        <div>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            }}
          >
            Long-Term Partnerships
          </p>
          <p className="mt-2 text-black/70 max-w-2xl">
            We don’t chase trends. We build infrastructure.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




{/* ---------------------------------------------------------------------------------------------------------------- */}

      {/* About Content */}
{/* HOW WE THINK */}
<section className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-20">
  {/* subtle watermark */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <div
      className="select-none"
      style={{
        fontFamily: "Kinta, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(7rem, 18vw, 16rem)",
        lineHeight: 1,
        opacity: 0.025,
        letterSpacing: "-0.04em",
      }}
    >
      MKG
    </div>
  </div>

  <div className="relative z-10 mx-auto max-w-6xl">
    <div className="mx-auto max-w-4xl">
      <p className="text-xs uppercase tracking-widest text-black/60">
        How We Think
      </p>

      <h2
        className="mt-4 leading-none tracking-tight"
        style={{
          fontFamily: "Kinta, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
        }}
      >
        Principles over platforms. Systems over shortcuts.
      </h2>

      <div className="mt-12 space-y-8">
        {[
          "Radical transparency builds trust.",
          "Data informs decisions.",
          "Brand comes before platform.",
          "Quality compounds over time.",
          "Growth should feel intentional, not overwhelming.",
        ].map((line) => (
          <p
            key={line}
            className="leading-relaxed"
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            }}
          >
            {line}
          </p>
        ))}
      </div>

      <div className="mt-14">
        <a
          href="#"
          className="inline-flex items-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-black/90 transition"
        >
          Work With Media King Group
        </a>
      </div>
    </div>
  </div>
</section>


      
    </>
  );
}
