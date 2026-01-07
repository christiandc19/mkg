export default function VideoSection() {
  return (
    <section className="px-5 sm:px-8 md:px-12 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        {/* Video */}
        <video
          className="h-[70vh] w-full object-cover"
          src="/video/mkg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p
              className="uppercase tracking-widest text-white/70 mb-4"
              style={{ fontSize: "0.75rem" }}
            >
              be seen.
            </p>
            <h2
              className="leading-none tracking-tight text-white"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontFamily: "Kinta, sans-serif",
                fontWeight: 400,
              }}
            >
              achieve growth.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
