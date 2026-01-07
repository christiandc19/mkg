import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name")?.toString().trim(),
      email: form.get("email")?.toString().trim(),
      message: form.get("message")?.toString().trim(),
    };

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
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <div className="flex justify-center py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-xl"
      >
        <h2 className="mb-8 text-center text-2xl font-light tracking-wide text-gray-900">
          Get in Touch
        </h2>

        <div className="space-y-6">
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

          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="How can we help?"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 w-full rounded-full bg-gray-900 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="pt-4 text-center text-sm text-emerald-600">
              Thanks — we’ll be in touch shortly.
            </p>
          )}

          {status === "error" && (
            <p className="pt-4 text-center text-sm text-red-600">{error}</p>
          )}
        </div>
      </form>
    </div>
  );
}
