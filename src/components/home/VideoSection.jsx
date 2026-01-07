export default function VideoSection() {
  const videoSrc = `${import.meta.env.BASE_URL}video/mkg.mp4`;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
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
    </section>
  );
}
