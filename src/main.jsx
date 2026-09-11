import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import "./index.css";

import SiteLayout from "./layouts/SiteLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Case from "./pages/CaseStudies";

import BrandIdentity from "./components/services/BrandIdentity";
import MediaContentProduction from "./components/services/MediaContentProduction";

// Case Studies
import OakdaleCaseStudy from "./pages/OakdaleCaseStudy";
import BeverlyDentist_Case_Study from "./pages/BeverlyHillsDentist_Case_Study";
import RobinRunCaseStudy from "./pages/RobinRunCaseStudy";
import AsburyHeightsCaseStudy from "./pages/AsburyHeightsCaseStudy";
import ChristianCareMesquiteCaseStudy from "./pages/ChristianCareMesquiteCaseStudy";
import Foxwood_Case_Study from "./pages/FoxwoodSpringsCaseStudy";
import SenecaSeniorLivingCaseStudy from "./pages/SenecaSeniorLivingCaseStudy";
import LakewoodVillageCaseStudy from "./pages/LakewoodVillageCaseStudy";
import ChristianCareAllenCaseStudy from "./pages/ChristianCareAllenCaseStudy";
import LighthousePointeVillageCaseStudy from "./pages/LighthousePointeVillageCaseStudy";
import VanadiumWoodsCaseStudy from "./pages/VanadiumWoodsCaseStudy";
import CanterburyPlaceCaseStudy from "./pages/CanterburyPlaceCaseStudy";
import NorwoodCrossingCaseStudy from "./pages/NorwoodCrossingCaseStudy";
import BeverlyHillsPeriodontistCaseStudy from "./pages/BeverlyHillsPeriodontistCaseStudy";
import FatPuppyCaseStudy from "./pages/FatPuppyCaseStudy";
import DDIDesignsCaseStudy from "./pages/DDIDesignsCaseStudy";



const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration />
        <SiteLayout />
      </>
    ),

    children: [
      // Main pages
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/brand-identity",
        element: <BrandIdentity />,
      },

      {
        path: "/media-content-production",
        element: <MediaContentProduction />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/privacy",
        element: <Privacy />,
      },

      {
        path: "/terms",
        element: <Terms />,
      },

      // =====================================================
      // CASE STUDIES
      // =====================================================

      {
        path: "/case-studies",
        element: <Case />,
      },

      {
        path: "/case-studies/oakdale-seniors-alliance",
        element: <OakdaleCaseStudy />,
      },

      {
        path: "/case-studies/beverly-hills-dentist",
        element: <BeverlyDentist_Case_Study />,
      },

      {
        path: "/case-studies/oakdale/robin-run-senior-living",
        element: <RobinRunCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/asbury-heights",
        element: <AsburyHeightsCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/christian-care-mesquite",
        element: <ChristianCareMesquiteCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/foxwood-springs",
        element: <Foxwood_Case_Study />,
      },

      {
        path: "/case-studies/oakdale/seneca-senior-living",
        element: <SenecaSeniorLivingCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/lakewood-village",
        element: <LakewoodVillageCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/christian-care-allen",
        element: <ChristianCareAllenCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/lighthouse-pointe-village",
        element: <LighthousePointeVillageCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/vanadium-woods",
        element: <VanadiumWoodsCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/canterbury-place",
        element: <CanterburyPlaceCaseStudy />,
      },

      {
        path: "/case-studies/oakdale/norwood-crossing",
        element: <NorwoodCrossingCaseStudy />,
      },

      {
        path: "/case-studies/beverly-hills-periodontist",
        element: <BeverlyHillsPeriodontistCaseStudy />,
      },

      {
        path: "/case-studies/fat-puppy",
        element: <FatPuppyCaseStudy />,
      },

      {
        path: "/case-studies/ddi-designs",
        element: <DDIDesignsCaseStudy />,
      },

    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);