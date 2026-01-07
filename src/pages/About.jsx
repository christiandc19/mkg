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


      {/* About Content */}
      <section className="px-10 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="text-4xl tracking-tight"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            About MKG
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-black/70">
            <p>
              <strong className="text-black">Our mission is simple:</strong> to help clients excel in branding,
              marketing, and social media — leading to meaningful growth and
              increased profitability. Media King Group has become a creative
              partner for brands and businesses looking to stand out in an
              ever-evolving digital landscape.
            </p>

            <p>
              We are your viral marketing company. We specialize in shaping
              content, messaging, and platforms to resonate deeply with your
              exact audience. Our work has driven billions of views, millions of
              new followers, and powerful brand transformations through
              redesigns, campaigns, and high-performance websites.
            </p>

            <p>
              Our services span social media strategy and management, brand
              consulting, website design and development, videography,
              photography, and content marketing. At Media King Group, we believe
              in helping you be seen — and helping you grow.
            </p>
          </div>
        </div>
      </section>

      
    </>
  );
}
