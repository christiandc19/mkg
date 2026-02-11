// src/components/home/MKGWhoWeWorkWith.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const DEFAULT_GROUPS = [
  {
    key: "entrepreneurs",
    title: "Entrepreneurs & founders",
    tagline: "Build the brand + system behind your next phase of growth.",
    desc:
      "We help founders turn vision into a real operating system: clear positioning, a credible web presence, and a conversion path that makes it easy for the right people to say yes.",
    bullets: ["Positioning + messaging", "High-converting website", "Content + lead capture"],
    logos: ["Founders", "Startups", "Operators", "DTC", "B2B", "Local Leaders"],
  },
  {
    key: "ceos",
    title: "CEOs & leadership teams",
    tagline: "Alignment, authority, and marketing that supports the business.",
    desc:
      "For leadership teams, marketing shouldn’t be chaos. We create clarity across brand, site, and campaigns — so your team ships consistently and your market understands you instantly.",
    bullets: ["Brand clarity + narrative", "Sales-ready assets", "Execution systems"],
    logos: ["Leadership", "Strategy", "Exec Teams", "Scaling", "Operations", "Growth"],
  },
  {
    key: "coaches",
    title: "Coaches & consultants",
    tagline: "Turn expertise into a structured offer ecosystem.",
    desc:
      "You don’t need more content — you need a sharper offer and a clean path to conversion. We build the foundation that supports premium positioning and predictable demand.",
    bullets: ["Offer strategy", "Funnel + booking flow", "Authority content system"],
    logos: ["Advisors", "Consultants", "Coaches", "Strategists", "Speakers", "Educators"],
  },
  {
    key: "creators",
    title: "Creators & personal brands",
    tagline: "Make attention sustainable — and convert it without burnout.",
    desc:
      "We design brand identity, a clean digital home, and a content engine you can actually maintain — so your audience grows and your offers stay organized.",
    bullets: ["Brand identity", "Website + funnel", "Content system + templates"],
    logos: ["Creators", "Personal Brands", "Influencers", "Podcasters", "YouTubers", "Writers"],
  },
  {
    key: "seniorliving",
    title: "Senior living & healthcare organizations",
    tagline: "Trust-first marketing for high-stakes decisions.",
    desc:
      "We build systems that make your organization discoverable, credible, and easy to choose — from websites and SEO to content and conversion paths designed for families and patients.",
    bullets: ["Trust-building pages", "Local SEO + content", "Lead capture + follow-up"],
    logos: ["Senior Living", "Healthcare", "Clinics", "Providers", "Care Teams", "Communities"],
  },
  {
    key: "realestate",
    title: "Real estate teams",
    tagline: "A modern brand and a pipeline that compounds.",
    desc:
      "For teams that want consistency, we build a sharp online presence and a repeatable lead system — so you’re not relying on referrals alone to grow.",
    bullets: ["High-converting listings + pages", "Local SEO + maps visibility", "Lead automation"],
    logos: ["Teams", "Agents", "Brokerages", "Listings", "Investors", "Developers"],
  },
  {
    key: "designbrands",
    title: "Design, lifestyle, and consumer brands",
    tagline: "Make the brand feel inevitable — then make it convert.",
    desc:
      "We pair clean design with performance. From storytelling and identity to ecommerce-ready flows, we build experiences that look premium and sell clearly.",
    bullets: ["Brand + creative direction", "Shop + landing pages", "Retention + content"],
    logos: ["Lifestyle", "Retail", "Ecommerce", "Design", "Wellness", "Home Goods"],
  },
  {
    key: "media",
    title: "Entertainment and media companies",
    tagline: "Launch, grow, and monetize with a real system.",
    desc:
      "We help media brands package their value: clear positioning, scalable content workflows, and a digital ecosystem that supports partnerships, sponsorships, and launches.",
    bullets: ["Content systems", "Monetization paths", "Launch + promo assets"],
    logos: ["Studios", "Podcasts", "Production", "Publishers", "Creators", "Networks"],
  },
];

export default function MKGWhoWeWorkWith({
  title = "Who We Work With",
  subtitle = "Different industries. Same outcome: a system that compounds.",
  groups = DEFAULT_GROUPS,
  accent = "#5D8AA8",
}) {
  const safeGroups = useMemo(() => groups ?? [], [groups]);
  const [activeKey, setActiveKey] = useState(safeGroups?.[0]?.key ?? "");

  const active = useMemo(
    () => safeGroups.find((g) => g.key === activeKey) || safeGroups[0],
    [safeGroups, activeKey]
  );

  if (!safeGroups.length) return null;

  return (
    <section className="relative w-full px-4 sm:px-8 py-16 overflow-hidden bg-gradient-to-tr from-black via-[#0e0e0f] to-[#1c1c1f] text-white">
      {/* subtle depth glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_45%)]" />

      <div className="relative mx-auto w-[95%] lg:w-[90%]">
        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "Kinta, sans-serif" }}
          >
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-white/60 leading-relaxed">{subtitle}</p>
        </div>

        {/* Split Layout */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT: Tabs */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/12 backdrop-blur shadow-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/70">Industries</div>
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
                          ? "bg-white/10 ring-white/20 shadow-2xl"
                          : "bg-white/5 ring-white/12 hover:bg-white/8",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-white">{g.title}</div>
                          <div className="mt-1 text-xs text-white/55">{g.tagline}</div>
                        </div>

                        <span
                          className={[
                            "mt-1 h-2.5 w-2.5 rounded-full",
                            isActive ? "opacity-100" : "opacity-35",
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
              <div className="mt-5 rounded-2xl bg-black/40 ring-1 ring-white/10 p-4 text-xs text-white/55">
                We tailor the <span className="text-white/70">industry details</span> — but
                the operating system is the same.
              </div>
            </div>
          </div>

          {/* RIGHT: Featured panel + logo cloud */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/12 backdrop-blur shadow-2xl">
              {/* subtle texture */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
                <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Top bar */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-xs tracking-[0.25em] text-white/50 uppercase">
                      Selected Focus
                    </div>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                      {active.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/60 leading-relaxed">
                      {active.desc}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                {active.bullets?.length ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {active.bullets.map((b) => (
                      <div
                        key={b}
                        className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/12 hover:bg-white/8 transition"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="mt-1.5 h-2 w-2 rounded-full"
                            style={{ backgroundColor: accent }}
                            aria-hidden
                          />
                          <div className="text-sm font-semibold text-white/80">{b}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Logo Cloud */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <div className="text-xs tracking-[0.25em] text-white/50 uppercase">
                      Past Clients / Categories
                    </div>
                    <div className="text-xs text-white/40">(replace with real logos anytime)</div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(active.logos ?? []).map((l) => (
                      <span
                        key={l}
                        className="rounded-2xl bg-white/5 px-4 py-2 text-xs font-semibold text-white/65 ring-1 ring-white/12 hover:bg-white/8 transition"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="mt-8 rounded-2xl bg-black/40 ring-1 ring-white/10 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-white/60">
                      Want your industry added here with real case studies and proof?
                    </p>
                    <Link
                      to="contact"
                      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                      className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
                    >
                      Start a project
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* tiny helper */}
            <div className="mt-4 text-xs text-white/35">{/* intentional spacing */}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
