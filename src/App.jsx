export default function App() {
  const services = [
    {
      title: "Web Development",
      desc: "Fast, conversion-focused websites and landing pages built to generate leads.",
    },
    {
      title: "SEO + Content Systems",
      desc: "A repeatable content plan that grows organic traffic and authority over time.",
    },
    {
      title: "Tracking + Analytics",
      desc: "GA4, Tag Manager, event tracking, and dashboards so you know what works.",
    },
    {
      title: "Automation + CRM",
      desc: "Zapier + CRM workflows for instant follow-up and better lead handling.",
    },
  ];

  const steps = [
    { n: "01", title: "Audit", desc: "Review your website, tracking, and lead flow." },
    { n: "02", title: "Build", desc: "Implement pages, tracking, and automation." },
    { n: "03", title: "Launch", desc: "Test everything and deploy with confidence." },
    { n: "04", title: "Optimize", desc: "Improve results using real performance data." },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAV + HERO */}
      <header className="px-6 pt-10 pb-16">
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center justify-between">
            <div className="text-lg font-semibold tracking-tight">
              Media King Group
            </div>

            <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#services">
                Services
              </a>
              <a className="hover:text-white" href="#process">
                Process
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </div>

            <a
              href="#contact"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90"
            >
              Get a Quote
            </a>
          </nav>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold text-white/70">
                Marketing • Automation • Growth
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Turn your website into a{" "}
                <span className="text-white/90">lead-generating machine</span>.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                We build high-converting landing pages, install tracking that
                actually tells the truth, and automate follow-up so you can
                capture more leads and close faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90"
                >
                  Book a Call
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  View Services
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/60">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Web Development
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  SEO
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Tracking
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Automation
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="rounded-xl bg-slate-900/60 p-5">
                <p className="text-sm font-semibold">What we typically set up</p>

                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li className="flex gap-2">
                    <span className="text-white/90">✓</span> High-converting
                    landing pages
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white/90">✓</span> GA4, GSC, Tag
                    Manager, event tracking
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white/90">✓</span> CRM + email/SMS
                    follow-up automation
                  </li>
                  <li className="flex gap-2">
                    <span className="text-white/90">✓</span> Content + SEO system
                    (optional)
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold text-white/70">
                    Typical outcome
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    More tracked leads, faster follow-up, and a system you can
                    scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Services
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Pick what you need now — we can phase the rest in later.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07]"
              >
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Simple process
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Clear steps, fast execution, measurable results.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-xs font-semibold text-white/60">
                  {step.n}
                </div>
                <div className="mt-2 text-base font-semibold">{step.title}</div>
                <p className="mt-2 text-sm text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Ready to build your lead system?
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Tell us what you’re trying to achieve and we’ll recommend the best
              next step.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm outline-none focus:border-white/25"
                placeholder="Name"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm outline-none focus:border-white/25"
                placeholder="Email"
              />
              <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90">
                Request a Quote
              </button>
            </div>

            <p className="mt-3 text-xs text-white/50">
              (We’ll connect this to your real form + CRM next.)
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Media King Group</div>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#process">
              Process
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
