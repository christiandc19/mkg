import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);

    const payload = {
      name: form.get("name")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      company: form.get("company")?.toString().trim(),
      role: form.get("role")?.toString().trim(),
      message: form.get("message")?.toString().trim(),
      // Honeypot (spam bots)
      website: form.get("website")?.toString().trim(),
    };

    // Basic honeypot guard
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
    <div className="flex justify-center py-16 px-4 bg-white">
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

          {/* Company */}
          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Company
            </label>
            <input
              name="company"
              required
              placeholder="Company name"
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

          {/* Message (replaces Goals) */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us what you’re looking to build (and any context that helps)."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
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
