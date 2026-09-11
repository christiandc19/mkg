import Beverly from "../../assets/images/beverly-hills-dentist.webp";
import Design from "../../assets/images/design-brand.webp";
import Outpatient from "../../assets/images/outpatient.webp";

/*
  NOTE:
  Outpatient is temporarily being used for Fat Puppy.
  Replace it with the real Fat Puppy image once available.
*/

export const CASE_STUDIES = [
  {
    id: "oakdale",
    title: "Oakdale Seniors Alliance",
    category: "Senior Living",

    eyebrow: "10-COMMUNITY PORTFOLIO",

    description:
      "Ten senior living communities transformed from digital invisibility into a connected growth ecosystem spanning social media, websites, content, and lead generation.",

    client: "Oakdale Seniors Alliance",

    mainMetric: "300K+",
    mainMetricLabel: "Followers Across the Portfolio",

    metrics: [
      {
        value: "150K+",
        label: "Organic Website Visits",
      },
      {
        value: "2,800+",
        label: "Inquiries in 2025",
      },
    ],

    cta: "Explore the Portfolio",
    href: "/case-studies/oakdale-seniors-alliance",

    image:
      "https://i0.wp.com/oakdalesa.com/wp-content/uploads/2025/10/oakdale-hero-4-1.jpg?fit=1920%2C1250&ssl=1",

    alt: "Oakdale Seniors Alliance senior living community",

    tags: [
      "Social Growth",
      "Web Strategy",
      "Lead Generation",
    ],
  },

  {
    id: "beverly-hills-periodontist",
    title: "Beverly Hills Periodontist",
    category: "Healthcare",

    eyebrow: "SOCIAL GROWTH + MONETIZATION",

    description:
      "A focused short-form content strategy grew TikTok from 2.5K to 318K+ followers in six months — then turned that audience into a $50K brand partnership.",

    client: "Beverly Hills Periodontist",

    mainMetric: "318K+",
    mainMetricLabel: "TikTok Followers",

    metrics: [
      {
        value: "2.5K",
        label: "Starting Audience",
      },
      {
        value: "$50K",
        label: "Brand Deal",
      },
    ],

    cta: "Read the Case Study",
    href: "/case-studies/beverly-hills-periodontist",

    image: Beverly,

    alt: "Beverly Hills Periodontist case study",

    tags: [
      "TikTok",
      "Organic Growth",
      "Monetization",
    ],
  },

  {
    id: "fat-puppy",
    title: "Fat Puppy",
    category: "Entertainment",

    eyebrow: "AUDIENCE GROWTH",

    description:
      "A repeatable entertainment content engine scaled Facebook from 12K to 735K followers, with top-performing videos generating more than 70 million views.",

    client: "Fat Puppy",

    mainMetric: "735K",
    mainMetricLabel: "Facebook Followers",

    metrics: [
      {
        value: "12K",
        label: "Starting Audience",
      },
      {
        value: "70M+",
        label: "Top Video Views",
      },
    ],

    cta: "Read the Case Study",
    href: "/case-studies/fat-puppy",

    image: Outpatient,

    alt: "Fat Puppy entertainment brand case study",

    tags: [
      "Facebook",
      "Viral Content",
      "Audience Growth",
    ],
  },

  {
    id: "ddi-designs",
    title: "DDI Designs",
    category: "Design",

    eyebrow: "AUDIENCE → COMMERCE",

    description:
      "Instagram growth expanded the brand from 6.8K to 60.7K followers and turned audience attention into an additional channel for product sales.",

    client: "DDI Designs",

    mainMetric: "60.7K",
    mainMetricLabel: "Instagram Followers",

    metrics: [
      {
        value: "6.8K",
        label: "Starting Audience",
      },
      {
        value: "Sales",
        label: "Generated Through Audience Growth",
      },
    ],

    cta: "Read the Case Study",
    href: "/case-studies/ddi-designs",

    image: Design,

    alt: "DDI Designs case study",

    tags: [
      "Instagram",
      "Brand Growth",
      "Product Sales",
    ],
  },
];