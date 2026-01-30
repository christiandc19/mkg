// src/components/home/MKGWhoWeWorkWith.jsx
import React, { useMemo, useState } from "react";

const DEFAULT_GROUPS = [
  {
    key: "senior",
    title: "Senior Living & Communities",
    tagline: "Trust-first marketing that drives tours and occupancy.",
    desc:
      "We build systems that make communities discoverable, credible, and easy to choose — websites, SEO, content, and conversion paths designed for families making high-stakes decisions.",
    bullets: ["Tour-focused pages", "Local SEO + content", "Lead capture + follow-up"],
    logos: ["Oakdale", "Asbury", "Seneca", "Lighthouse", "Lakewood", "Robin Run"],
  },
  {
    key: "engineering",
    title: "Engineering & Technical Firms",
    tagline: "Credibility, clarity, and high-intent lead flow.",
    desc:
      "Technical firms don’t need louder marketing — they need clearer positioning, proof, and case-study storytelling that converts serious buyers.",
    bullets: ["Positioning + proof", "Case studies", "Proposal-ready assets"],
    logos: ["Itanex", "Consulting", "Design", "Construction", "MEP", "Owners Rep"],
  },
  {
    key: "local",
    title: "Local & Service Businesses",
    tagline: "Conversion-first web + campaigns built for calls.",
    desc:
      "We simplify the path to contact: fast pages, clear offers, and tracking so you know what’s working.",
    bullets: ["Landing pages", "Local SEO", "Automation + tracking"],
    logos: ["Home Services", "Clinics", "Trades", "Studios", "Agencies", "Local Retail"],
  },
  {
    key: "creators",
    title: "Creators & Personal Brands",
    tagline: "Turn attention into a structured offer ecosystem.",
    desc:
      "Brand identity, offers, and content systems that support your long game — without burning out.",
    bullets: ["Offer clarity", "Content system", "Website + funnel"],
    logos: ["Creators", "Coaches", "Founders", "Speakers", "Educators", "Consultants"],
  },
];

export default function MKGWhoWeWorkWith({
  title = "Who We Work With",
  subtitle = "Different industries. Same outcome: a system that compounds.",
  groups = DEFAULT_GROUPS,
  accent = "#5D8AA8", // optional subtle accent (safe with your palette)
}) {
  const safeGroups = useMemo(() => groups ?? [], [groups]);
  const [activeKey, setActiveKey] = useState(safeGroups?.[0]?.key ?? "");

  const active = useMemo(
    () => safeGroups.find((g) => g.key === activeKey) || safeGroups[0],
    [safeGroups, activeKey]
  );

  if (!safeGroups.length) return null;

  return (
    <section className="w-full px-4 sm:px-8 py-16">
      <div className="mx-auto w-[95%] lg:w-[90%]">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-black"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-black/60 leading-relaxed">{subtitle}</p>
        </div>

        {/* Split Layout */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT: Tabs */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-[#F4F7F2] ring-1 ring-black/10 shadow-sm p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-black/70">Industries</div>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: accent }}
                  aria-hidden
                />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                {safeGroups.map((g) => {
                  const isActive = g.key === activeKey;
                  return (
                    <button
                      key={g.key}
                      type="button"
                      onClick={() => setActiveKey(g.key)}
                      className={[
                        "w-full text-left rounded-2xl px-4 py-3 ring-1 transition",
                        isActive
                          ? "bg-[#e9e0d9] ring-black/15 shadow-sm"
                          : "bg-white/40 ring-black/10 hover:bg-white/60",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-black">
                            {g.title}
                          </div>
                          <div className="mt-1 text-xs text-black/55">
                            {g.tagline}
                          </div>
                        </div>

                        {/* tiny indicator */}
                        <span
                          className={[
                            "mt-1 h-2.5 w-2.5 rounded-full",
                            isActive ? "opacity-100" : "opacity-30",
                          ].join(" ")}
                          style={{ backgroundColor: accent }}
                          aria-hidden
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Small note */}
              <div className="mt-5 rounded-2xl bg-black/5 p-4 text-xs text-black/55">
                We tailor the *industry details* — but the operating system is the same.
              </div>
            </div>
          </div>

          {/* RIGHT: Featured panel + logo cloud */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#e9e0d9] ring-1 ring-black/10 shadow-sm">
              {/* subtle texture */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.25]">
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-black/5 blur-2xl" />
                <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-black/5 blur-2xl" />
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Top bar */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-xs tracking-[0.25em] text-black/50 uppercase">
                      Selected Focus
                    </div>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-black">
                      {active.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/60 leading-relaxed">
                      {active.desc}
                    </p>
                  </div>

                  {/* CTA chip */}
                  <a
                    href="/services"
                    className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#F4F7F2] px-4 py-2.5 text-sm font-semibold text-black ring-1 ring-black/10 hover:bg-white/70 transition"
                  >
                    What we build
                    <span aria-hidden>↗</span>
                  </a>
                </div>

                {/* Bullets */}
                {active.bullets?.length ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {active.bullets.map((b) => (
                      <div
                        key={b}
                        className="rounded-2xl bg-[#F4F7F2] p-4 ring-1 ring-black/10"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="mt-1.5 h-2 w-2 rounded-full"
                            style={{ backgroundColor: accent }}
                            aria-hidden
                          />
                          <div className="text-sm font-semibold text-black/80">
                            {b}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Logo Cloud */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <div className="text-xs tracking-[0.25em] text-black/50 uppercase">
                      Past Clients / Categories
                    </div>
                    <div className="text-xs text-black/45">
                      (replace with real logos anytime)
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(active.logos ?? []).map((l) => (
                      <span
                        key={l}
                        className="rounded-2xl bg-[#F4F7F2] px-4 py-2 text-xs font-semibold text-black/60 ring-1 ring-black/10 hover:bg-white/70 transition"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="mt-8 rounded-2xl bg-black/5 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-black/60">
                      Want your industry added here with real case studies and proof?
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex w-fit items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-[#F4F7F2] hover:opacity-90 transition"
                    >
                      Start a project
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiny helper: spacing variety */}
            <div className="mt-4 text-xs text-black/40">
              Tip: this section intentionally breaks the “card grid” pattern to keep the page from feeling repetitive.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
