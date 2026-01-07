import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const drawerVariants = {
  closed: { x: "100%", transition: { duration: 0.35, ease: "easeInOut" } },
  open: { x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// Items appear one-by-one with 0.5s interval
const listVariants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuRun, setMenuRun] = useState(0); // ✅ forces stagger to re-run each open
  const navigate = useNavigate();

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function goTo(target) {
    setOpen(false);

    setTimeout(() => {
      if (target.startsWith("#")) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate(target);
      }
    }, 150);
  }

  return (
    <div className="relative flex items-center justify-end">
      {/* Hamburger Trigger (black, no border, no brand) */}
      <button
        type="button"
        onClick={() => {
          setMenuRun((n) => n + 1);
          setOpen(true);
        }}
        className="relative z-50 inline-flex h-11 w-11 items-center justify-center bg-transparent hover:bg-black/5"
        aria-label="Open menu"
      >
        <div className="relative h-4 w-5">
          <span className="absolute left-0 top-0 h-0.5 w-5 rounded bg-black" />
          <span className="absolute left-0 top-[7px] h-0.5 w-5 rounded bg-black" />
          <span className="absolute left-0 bottom-0 h-0.5 w-5 rounded bg-black" />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 cursor-default bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            />

            {/* Drawer */}
            <motion.aside
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 z-50 h-screen w-[92vw] sm:w-[70vw] md:w-1/3"
              style={{
                backgroundColor: "#ffc107",
                fontFamily: "zuume, sans-serif",
                fontWeight: 400,
                color: "#000",
              }}
            >
              {/* Top row (X button) */}
              <div className="flex justify-end p-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-md p-2 hover:bg-black/5"
                >
                  <div className="relative h-6 w-6">
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black" />
                  </div>
                </button>
              </div>

              {/* Menu content (stagger re-runs every open via key={menuRun}) */}
              <motion.div
                key={menuRun}
                variants={listVariants}
                initial="closed"
                animate="open"
                className="px-10 pb-10"
              >
                {/* Top menu items */}
                <nav className="space-y-2">
                  <MenuLink variants={itemVariants} label="Home" onClick={() => goTo("/")} />
                  <MenuLink variants={itemVariants} label="About" onClick={() => goTo("/about")} />
                  <MenuLink variants={itemVariants} label="Service" onClick={() => goTo("/services")} />
                  <MenuLink variants={itemVariants} label="Contact" onClick={() => goTo("/contact")} />
                </nav>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  className="my-10 h-px w-full bg-black/20"
                />

                {/* Secondary menu items */}
                <nav className="space-y-2">
                  <MenuLink
                    variants={itemVariants}
                    label="News & Stories"
                    onClick={() => goTo("#news")}
                  />
                  <MenuLink variants={itemVariants} label="Shop" onClick={() => goTo("#shop")} />
                  <MenuLink
                    variants={itemVariants}
                    label="Enquiries"
                    onClick={() => goTo("#contact")}
                  />
                </nav>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuLink({ label, onClick, variants }) {
  return (
    <motion.button
      type="button"
      variants={variants}
      onClick={onClick}
      className="group flex w-full items-center justify-between text-left uppercase leading-none"
      style={{
        fontSize: "44px",
        letterSpacing: "-0.02em",
      }}
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-2 left-0 h-[6px] w-0 bg-black transition-all duration-200 group-hover:w-full" />
      </span>
    </motion.button>
  );
}
