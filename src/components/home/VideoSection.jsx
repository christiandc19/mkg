export default function VideoSection() {
  const videoSrc = `${import.meta.env.BASE_URL}video/mkg.mp4`;

  return (
    <section className="px-6 sm:px-10 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        {/* Video */}
        <video
          className="h-[80vh] w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <h2
            className="leading-tight text-white"
            style={{
              fontFamily: "Kinta, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            be seen.<br />
            achieve growth.
          </h2>
        </div>
      </div>
    </section>
  );
}
