// src/components/home/MKGWhoWeWorkWith.jsx
import React, { useMemo, useState } from "react";

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
    <section className="w-full px-4 sm:px-8 py-16 bg-[white]">
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
                          <div className="text-sm font-semibold text-black">{g.title}</div>
                          <div className="mt-1 text-xs text-black/55">{g.tagline}</div>
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
                          <div className="text-sm font-semibold text-black/80">{b}</div>
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
                    <div className="text-xs text-black/45">(replace with real logos anytime)</div>
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
                      className="inline-flex w-fit items-center gap-2 rounded-3xl bg-black px-4 py-2.5 text-sm font-semibold text-[#F4F7F2] hover:opacity-90 transition"
                    >
                      Start a project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiny helper: spacing variety */}
            <div className="mt-4 text-xs text-black/40">
              {/* Tip: this section intentionally breaks the “card grid” pattern to keep the page from feeling repetitive. */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
