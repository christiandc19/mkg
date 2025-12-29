export default function VideoSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
