// src/pages/Privacy.jsx
export default function Privacy() {
  return (
    <section className="mx-auto w-[90%] max-w-4xl py-24">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>

      <p className="mb-6 text-lg text-black/70">
        Media King Group respects your privacy and is committed to protecting
        the personal information you share with us.
      </p>

      <div className="space-y-8 text-black/80 leading-relaxed">
        <div>
          <h2 className="mb-2 text-xl font-medium">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, company name, and any details you submit
            through our contact forms or communications.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">How We Use Information</h2>
          <p>
            Information collected is used to respond to inquiries, provide
            services, improve our website, and communicate relevant updates
            related to Media King Group.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Cookies & Analytics</h2>
          <p>
            We may use cookies and analytics tools to understand website usage,
            improve performance, and optimize user experience. These tools do
            not personally identify you.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information. Information
            may be shared only with trusted partners necessary to deliver our
            services.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your
            information. However, no method of transmission over the internet is
            100% secure.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            information by contacting us.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-medium">Contact</h2>
          <p>
            For privacy-related questions, please contact us at{" "}
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
