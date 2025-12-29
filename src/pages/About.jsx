import VideoSection from "../components/home/VideoSection";

export default function About() {
  return (
    <>
      {/* 50vh hero headline */}
      <section className="flex h-[50vh] items-center justify-center px-10">
        <h1
          className="text-center leading-none tracking-tight"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 11rem)",
            fontFamily: "Kinta, sans-serif",
            fontWeight: 400,
          }}
        >
          MEDIA KING GROUP
        </h1>
      </section>

      {/* Full height video */}
      <VideoSection />

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
