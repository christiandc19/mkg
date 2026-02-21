import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
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

import Foxwood_Case_Study from "./pages/Foxwood_Case_Study";
import BeverlyDentist_Case_Study from "./pages/BeverlyHillsDentist_Case_Study";

// ✅ No need for manual window.scrollTo hacks when using react-router's ScrollRestoration

const router = createHashRouter([
  {
    element: (
      <>
        {/* ✅ Handles restoring / resetting scroll between route changes */}
        <ScrollRestoration />
        <SiteLayout />
      </>
    ),
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

      // ✅ FIXED FOXWOOD ROUTE (matches the slug we set: "foxwood-springs")
      { path: "/case-studies/foxwood-springs", element: <Foxwood_Case_Study /> },
      { path: "/case-studies/beverly-hills-dentist", element: <BeverlyDentist_Case_Study /> },


    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);