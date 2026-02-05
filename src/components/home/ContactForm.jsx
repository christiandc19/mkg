import { useMemo, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const timelineOptions = useMemo(
    () => [
      { value: "", label: "Select a timeline" },
      { value: "asap", label: "ASAP" },
      { value: "2-4_weeks", label: "2–4 weeks" },
      { value: "1-2_months", label: "1–2 months" },
      { value: "3-6_months", label: "3–6 months" },
      { value: "just_researching", label: "Just researching" },
    ],
    []
  );

  const serviceOptions = useMemo(
    () => [
      { value: "brand", label: "Brand / Positioning" },
      { value: "website", label: "Website (Design / Dev)" },
      { value: "seo", label: "SEO" },
      { value: "paid_ads", label: "Paid Ads" },
      { value: "social", label: "Social Media" },
      { value: "content", label: "Content System" },
      { value: "automation", label: "Automation / Integrations" },
      { value: "analytics", label: "Analytics / Tracking" },
      { value: "other", label: "Other" },
    ],
    []
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);

    // Gather multi-select values (Services Needed)
    const servicesNeeded = form.getAll("servicesNeeded").map(String);

    const payload = {
      name: form.get("name")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      company: form.get("company")?.toString().trim(),
      role: form.get("role")?.toString().trim(),
      goals: form.get("goals")?.toString().trim(),
      challenges: form.get("challenges")?.toString().trim(),
      servicesNeeded,
      timeline: form.get("timeline")?.toString().trim(),
      // Honeypot (spam bots)
      website: form.get("website")?.toString().trim(),
    };

    // Optional: basic client-side guard (honeypot)
    if (payload.website) {
      setStatus("error");
      setError("Submission blocked.");
      return;
    }

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Send failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <div className="flex justify-center py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-xl"
      >
        <h2 className="mb-2 text-center text-2xl font-light tracking-wide text-gray-900">
          Let’s build your next system
        </h2>
        <p className="mb-10 text-center text-sm text-gray-500">
          Share a few details and we’ll follow up to schedule a call.
        </p>

        {/* Honeypot (hidden) */}
        <div className="hidden">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Name
            </label>
            <input
              name="name"
              required
              placeholder="Your full name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Company / Brand */}
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Company / Brand
            </label>
            <input
              name="company"
              required
              placeholder="Company or brand name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Role */}
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Role
            </label>
            <input
              name="role"
              required
              placeholder="Your role (Founder, Marketing, Ops, etc.)"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Goals */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Goals
            </label>
            <textarea
              name="goals"
              rows={4}
              required
              placeholder="What are you trying to achieve over the next 60–90 days?"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Challenges */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Challenges
            </label>
            <textarea
              name="challenges"
              rows={4}
              required
              placeholder="What’s in the way right now? (traffic, conversions, clarity, bandwidth, tracking, etc.)"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Services Needed */}
          <div className="md:col-span-2">
            <label className="mb-3 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Services Needed
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              {serviceOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 transition hover:bg-white"
                >
                  <input
                    type="checkbox"
                    name="servicesNeeded"
                    value={opt.value}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Timeline
            </label>
            <select
              name="timeline"
              required
              defaultValue=""
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              {timelineOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-8 w-full rounded-full bg-gray-900 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Booking..." : "Book a Call"}
        </button>

        {status === "success" && (
          <p className="pt-4 text-center text-sm text-emerald-600">
            Thanks — we’ll reach out shortly to schedule a call.
          </p>
        )}

        {status === "error" && (
          <p className="pt-4 text-center text-sm text-red-600">{error}</p>
        )}
      </form>
    </div>
  );
}
