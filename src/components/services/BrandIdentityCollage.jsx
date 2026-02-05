// src/components/services/BrandIdentityCollage.jsx
import React from "react";

// 👉 Swap these with real imports later
// import strategyImg from "../../assets/images/brand-strategy.webp";

const ITEMS = [
  "Brand strategy & positioning",
  "Visual identity systems",
  "Brand guidelines",
  "Messaging & narrative frameworks",
  "Content DNA & voice development",
];

// Placeholder images (replace with imports)
const IMAGES = [
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80",
];

export default function BrandIdentityCollage() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[90%] max-w-6xl py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            The foundation behind everything you build.
          </h2>
          <p className="mt-6 text-lg text-black/65 leading-relaxed">
            A clear brand system creates consistency, trust, and direction —
            long before content or campaigns begin.
          </p>
        </div>

        {/* Mobile — stacked */}
        <div className="mt-14 grid gap-4 sm:gap-5 md:hidden">
          {ITEMS.map((title, i) => (
            <Tile
              key={title}
              title={title}
              image={IMAGES[i % IMAGES.length]}
              className="h-[220px] sm:h-[260px]"
            />
          ))}
        </div>

        {/* Desktop — square collage */}
        <div className="mt-14 hidden md:block">
          <div className="relative mx-auto aspect-square max-w-6xl">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4">
              {/* Wide top */}
              <Tile
                title={ITEMS[0]}
                image={IMAGES[0]}
                className="col-span-4 row-span-2"
              />

              {/* Tall right */}
              <Tile
                title={ITEMS[1]}
                image={IMAGES[1]}
                className="col-span-2 row-span-4"
              />

              {/* Mid square */}
              <Tile
                title={ITEMS[2]}
                image={IMAGES[2]}
                className="col-span-3 row-span-2"
              />

              {/* Small vertical */}
              <Tile
                title={ITEMS[3]}
                image={IMAGES[3]}
                className="col-span-2 row-span-2"
              />

              {/* Wide bottom */}
              <Tile
                title={ITEMS[4]}
                image={IMAGES[4]}
                className="col-span-4 row-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ title, image, className = "" }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-black/10",
        className,
      ].join(" ")}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Soft gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

      {/* Title */}
      <div className="absolute top-0 left-0 p-5 sm:p-6">
        <div className="max-w-[18rem] text-sm sm:text-base font-semibold text-white leading-snug">
          {title}
        </div>
      </div>
    </div>
  );
}
