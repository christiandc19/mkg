import { useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-10 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-black/10 pt-10">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div
                className="tracking-tight"
                style={{
                  fontFamily: "Kinta, sans-serif",
                  fontWeight: 400,
                  fontSize: "1.5rem",
                }}
              >
                MKG Digital Management
              </div>

              <p className="mt-4 max-w-sm text-sm text-black/70">
                Minimal systems. Measurable growth. Human-led digital management built to last.
              </p>

              <p className="mt-6 text-xs uppercase tracking-widest text-black/50">
                Based in Los Angeles, CA
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
              <FooterCol title="Explore">
                <FooterRouterLink to="/">Home</FooterRouterLink>
                <FooterRouterLink to="/about">About</FooterRouterLink>
                <FooterRouterLink to="/services">Services</FooterRouterLink>
              </FooterCol>

              <FooterCol title="Contact">
                <FooterRouterLink to="/contact">Contact</FooterRouterLink>
                <FooterLink href="mailto:hello@mkggroup.com">Contact@MediaKingGroup.com</FooterLink>
                <FooterLink href="tel:+13105551234">(310) 555-1234</FooterLink>
              </FooterCol>

              <FooterCol title="Follow">
                <FooterLink href="https://www.instagram.com/nashangelesmedia_" target="_blank" rel="noreferrer">
                  Instagram
                </FooterLink>
                <FooterLink href="https://www.tiktok.com/@nashangelesmedia" target="_blank" rel="noreferrer">
                  Tiktok
                </FooterLink>
                <FooterLink href="https://www.facebook.com/nashangelesmedia" target="_blank" rel="noreferrer">
                  Facebook
                </FooterLink>
              </FooterCol>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/60 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} MKG Digital Management. All rights reserved.</div>
            <div className="flex gap-6">
              <FooterRouterLink to="/privacy">Privacy</FooterRouterLink>
              <FooterRouterLink to="/terms">Terms</FooterRouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* helpers (must live in this file, or be imported) */
function FooterCol({ title, children }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-black/50">{title}</p>
      <div className="mt-4 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="text-sm text-black/70 hover:text-black transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}

function FooterRouterLink({ to, children }) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-sm text-black/70 hover:text-black transition-colors cursor-pointer"
    >
      {children}
    </a>
  );
}

