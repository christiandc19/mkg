import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BrandIdentity from "./components/services/BrandIdentity";
import MediaContentProduction from "./components/services/MediaContentProduction";

import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Case from "./pages/CaseStudies";


// ✅ Disable browser scroll restoration
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// ✅ Force top immediately (helps most cases)
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

// ✅ Force top AFTER the browser finishes restoring scroll (this fixes your case)
window.addEventListener(
  "load",
  () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // One more tick for safety (fonts/images/layout shifts)
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  },
  { once: true }
);

const router = createHashRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/brand-identity", element: <BrandIdentity /> },
      { path: "/media-content-production", element: <MediaContentProduction /> },

      { path: "/contact", element: <Contact /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/case-studies", element: <Case /> },


    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
