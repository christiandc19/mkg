// src/pages/Terms.jsx
export default function Terms() {
  return (
    <section className="mx-auto w-[90%] max-w-4xl py-24">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight">
        Terms of Service
      </h1>

      <p className="mb-6 text-lg text-black/70">
        By accessing or using the Media King Group website, you agree to the
        following terms and conditions.
      </p>

      <div className="space-y-8 text-black/80 leading-relaxed">
        <div>
          <h2 className="mb-2 text-xl font-medium">Use of Website</h2>
          <p>
            This website is provided for informational purposes only. You agree
            not to misuse the content, services, or intellectual property of
            Media King Group.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Intellectual Property</h2>
          <p>
            All content, branding, visuals, and materials on this website are
            owned by Media King Group unless otherwise stated. Unauthorized use
            is prohibited.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Services & Engagements</h2>
          <p>
            Any services offered by Media King Group are subject to separate
            agreements outlining scope, deliverables, timelines, and payment
            terms.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Limitation of Liability</h2>
          <p>
            Media King Group shall not be liable for any damages arising from the
            use or inability to use this website or related services.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. Media King
            Group is not responsible for the content or practices of those
            sites.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Changes to Terms</h2>
          <p>
            Media King Group reserves the right to update these terms at any
            time. Continued use of the website constitutes acceptance of any
            changes.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Contact</h2>
          <p>
            Questions regarding these terms may be sent to{" "}
            <a
              href="mailto:contact@mediakinggroup.co"
              className="underline"
            >
              contact@mediakinggroup.co
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
