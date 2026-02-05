// src/components/services/MediaProductionCollage.jsx
import React from "react";
import shortFormImg from "../../assets/images/short-form.webp";
import longFormImg from "../../assets/images/long-form.webp";
import Editing from "../../assets/images/editing.webp";
import socialMedia from "../../assets/images/social-media.webp";
import Scripting from "../../assets/images/scripting.webp";

const ITEMS = [
  "Short-form content production",
  "Long-form video & podcast editing",
  "Social media management",
  "Creative direction & scripting",
  "Editing, repurposing, and distribution systems",
];

// Placeholder images (swap later)
const IMAGES = [
  shortFormImg,
  longFormImg,
  socialMedia,
  Scripting,
  Editing,
];

export default function MediaProductionCollage() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[90%] max-w-6xl py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            What we produce.
          </h2>
          <p className="mt-6 text-lg text-black/65 leading-relaxed">
            Built for consistency, reuse, and long-term distribution — not one-off posts.
          </p>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-14 grid gap-4 sm:gap-5 md:hidden">
          {ITEMS.map((title, i) => (
            <Tile
              key={title}
              title={title}
              image={IMAGES[i % IMAGES.length]}
              // consistent height on mobile (stacked)
              className="h-[220px] sm:h-[260px]"
              // When using fixed height, we don't need absolute sizing from grid
              forceFixedHeight
            />
          ))}
        </div>

        {/* Desktop+: square collage */}
        <div className="mt-14 hidden md:block">
          <div className="relative mx-auto aspect-square max-w-6xl">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4">
              <Tile
                title={ITEMS[0]}
                image={IMAGES[0]}
                className="col-span-4 row-span-2"
              />
              <Tile
                title={ITEMS[1]}
                image={IMAGES[1]}
                className="col-span-2 row-span-4"
              />
              <Tile
                title={ITEMS[2]}
                image={IMAGES[2]}
                className="col-span-3 row-span-2"
              />
              <Tile
                title={ITEMS[3]}
                image={IMAGES[3]}
                className="col-span-2 row-span-2"
              />
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

function Tile({ title, image, className = "", forceFixedHeight = false }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-black/10 bg-black/5",
        className,
      ].join(" ")}
      style={forceFixedHeight ? { position: "relative" } : undefined}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Soft gradient */}
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
