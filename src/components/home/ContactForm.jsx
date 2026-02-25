import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const formEl = formRef.current;
    if (!formEl) {
      setStatus("error");
      setError("Form not found. Please refresh and try again.");
      return;
    }

    // Basic env sanity check (helps avoid silent failures)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setError("Email service is not configured (missing .env values).");
      return;
    }

    const fd = new FormData(formEl);

    const payload = {
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      company: (fd.get("company") || "").toString().trim(),
      role: (fd.get("role") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
      website: (fd.get("website") || "").toString().trim(), // honeypot
    };

    // Honeypot guard
    if (payload.website) {
      setStatus("error");
      setError("Submission blocked.");
      return;
    }

    // Simple validation (extra safety beyond required fields)
    if (!payload.name || !payload.email || !payload.company || !payload.role || !payload.message) {
      setStatus("error");
      setError("Please fill out all fields.");
      return;
    }

    const templateParams = {
      from_name: payload.name,
      from_email: payload.email,
      company: payload.company,
      role: payload.role,
      message: payload.message,
    };

    try {
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      // EmailJS typically returns 200 and text "OK"
      if (res?.status !== 200) throw new Error("Send failed");

      setStatus("success");
      formEl.reset(); // ✅ safe reset
    } catch (err) {
      setStatus("error");
      setError(err?.text || err?.message || "Something went wrong.");
    }
  }

  return (
    <div className="flex justify-center py-16 px-4 bg-white">
      <form
        ref={formRef}
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

          {/* Message */}
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