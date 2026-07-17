

export interface ProblemItem {
  title: string;
  desc: string;
}

export interface PricingItem {
  service: string;
  price: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceConfig {
  slug: "ac-repair" | "fridge-repair" | "washing-machine-repair";

  // Basic
  name: string;
  shortName: string;
  serviceName: string;
  serviceNameShort: string;
  schemaServiceType: string;

  icon: "Wind" | "Refrigerator" | "Waves";

  tagline: string;
  intro: string;

  // Images
  heroImage: string;
  doorstepImage: string;
  ogImage: string;

  // SEO
  keywordTemplates: string[];

  // Cards
  services: {
    title: string;
    desc: string;
    icon: string;
  }[];

  whyChooseUs: {
    title: string;
    desc: string;
  }[];

  // Brand list
  brands: string[];

  // Problems
  problems: {
    title: string;
    desc: string;
  }[];

  // Pricing
  pricing: {
    service: string;
    price: string;
  }[];

  // FAQ
  faqs: {
    q: string;
    a: string;
  }[];
}

/** Reused verbatim from the existing homepage brand marquee. */
export const brands = [
  "LG",
  "Samsung",
  "Voltas",
  "Blue Star",
  "Daikin",
  "Whirlpool",
  "Godrej",
  "Haier",
  "Panasonic",
  "Sony",
];

export const services: Record<string, ServiceConfig> = {
  "ac-repair": {
    slug: "ac-repair",

    name: "AC Repair",
    shortName: "AC",

    serviceName: "AC Repair",
    serviceNameShort: "AC",
    schemaServiceType: "Air Conditioning Repair",

    icon: "Wind",

    tagline: "Fast, reliable AC repair and servicing at your doorstep",
    intro:
      "Split, window, or inverter AC — our certified technicians diagnose and fix cooling, gas, and electrical issues, with same-day doorstep service across our coverage areas.",

    heroImage: "/images/services/ac-hero.webp",
    doorstepImage: "/images/services/ac-doorstep.webp",
    ogImage: "/images/services/ac-og.webp",

    keywordTemplates: [
      "AC Repair in {location}",
      "Split AC Repair in {location}",
    ],

    services: [
  {
    title: "AC Repair",
    desc: "Complete AC repair",
    icon: "🔧",
  },
  {
    title: "AC Installation",
    desc: "Professional installation",
    icon: "❄️",
  },
  {
    title: "AC Gas Refilling",
    desc: "Cooling gas refill and leak testing",
    icon: "🛠️",
  },
],

whyChooseUs: [
  {
    title: "Certified Technicians",
    desc: "Experienced technicians",
  },
  {
    title: "Same Day Service",
    desc: "Fast doorstep service",
  },
  {
    title: "Genuine Spare Parts",
    desc: "Quality parts with service warranty",
  },
],

    brands,

    problems: [
      {
        title: "AC Not Cooling",
        desc: "Often caused by low refrigerant, a dirty filter, or a faulty compressor.",
      },
      {
        title: "Water Leakage",
        desc: "A blocked drain pipe or dirty air filter usually causes water leakage.",
      },
      {
        title: "AC Not Turning On",
        desc: "Could be a power supply issue, faulty capacitor, or a remote/control board fault.",
      },
      {
        title: "Unusual Noise",
        desc: "Loose parts or a failing compressor often cause rattling or grinding noise.",
      },
    ],

    pricing: [
      {
        service: "General Service",
        price: "₹499 onwards",
      },
    ],

    faqs: [
      {
        q: "Do you repair all AC brands?",
        a: "Yes, we repair split, window, and inverter ACs from all major brands.",
      },
      {
        q: "How much does AC gas refilling cost?",
        a: "Cost depends on the AC type and refrigerant used. Call us for a transparent quote before any work begins.",
      },
      {
        q: "Is there a warranty on AC repair?",
        a: "Yes, all repairs come with a service warranty on workmanship, and genuine parts carry manufacturer warranty.",
      },
    ],
  },

  "fridge-repair": {
    slug: "fridge-repair",
    name: "Refrigerator Repair",
    shortName: "Fridge",
    serviceName: "Refrigerator Repair",
    serviceNameShort: "Fridge",
    schemaServiceType: "Refrigerator Repair",
    icon: "Refrigerator",
    tagline: "Cooling, compressor, and gas refilling for all fridge types",
    intro:
      "Single door, double door, or side-by-side — our technicians repair cooling faults, compressor issues, and gas leaks for all major refrigerator brands, with doorstep service across our coverage areas.",

    heroImage: "/images/services/fridge-hero.webp",
    doorstepImage: "/images/services/fridge-doorstep.webp",
    ogImage: "/images/services/fridge-og.webp",

    keywordTemplates: [
      "Fridge Repair in {location}",
      "Refrigerator Repair in {location}",
    ],

   services: [
  {
    title: "Fridge Repair",
    desc: "Complete refrigerator repair",
    icon: "🧊",
  },
  {
    title: "Gas Refilling",
    desc: "Refrigerant gas top-up and leak fix",
    icon: "🧯",
  },
  {
    title: "Compressor Repair",
    desc: "Compressor diagnosis and replacement",
    icon: "⚙️",
  },
],

whyChooseUs: [
  {
    title: "Certified Technicians",
    desc: "Experienced technicians",
  },
  {
    title: "Same Day Service",
    desc: "Fast doorstep service",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges",
  },
],

    brands,

    problems: [
      { title: "Fridge Not Cooling", desc: "Often caused by low refrigerant, a faulty compressor, or a blocked condenser." },
      { title: "Excess Frost Build-up", desc: "A faulty defrost timer or heater usually causes ice build-up inside the compartment." },
      { title: "Water Leakage", desc: "Blocked drain tubes or a damaged door seal are the most common causes." },
      { title: "Door Not Sealing Properly", desc: "Worn-out gaskets let cold air escape — we replace door seals to restore an airtight close." },
    ],

    pricing: [
      { service: "Fridge General Service", price: "₹399 onwards" },
      { service: "Gas Refilling", price: "₹1,799 onwards" },
      { service: "Compressor Repair", price: "₹2,499 onwards" },
      { service: "Door Seal Replacement", price: "₹899 onwards" },
    ],

    faqs: [
      { q: "Do you repair both single door and double door fridges?", a: "Yes, our technicians handle single door, double door, and side-by-side refrigerator repair, installation, and gas refilling." },
      { q: "How much does fridge gas refilling cost?", a: "Cost depends on the refrigerant type and fridge capacity. Call us for a transparent quote before any work begins." },
      { q: "Is there a warranty on fridge repair?", a: "Yes, all repairs come with a service warranty on workmanship, and genuine spare parts carry the manufacturer's warranty." },
    ],
  },

  "washing-machine-repair": {
    slug: "washing-machine-repair",
    name: "Washing Machine Repair",
    shortName: "Washing Machine",
    serviceName: "Washing Machine Repair",
    serviceNameShort: "Washing Machine",
    schemaServiceType: "Washing Machine Repair",
    icon: "Waves",
    tagline: "Front load, top load, semi and fully automatic repair",
    intro:
      "Motor faults, drum issues, drainage problems, or error codes — our technicians repair front load, top load, semi-automatic, and fully automatic washing machines from every major brand.",

    heroImage: "/images/services/washing-machine-hero.webp",
    doorstepImage: "/images/services/washing-machine-doorstep.webp",
    ogImage: "/images/services/washing-machine-og.webp",

    keywordTemplates: [
      "Washing Machine Repair in {location}",
      "Washing Machine Service in {location}",
    ],

   services: [
  {
    title: "Washing Machine Repair",
    desc: "Complete washing machine repair",
    icon: "🧺",
  },
  {
    title: "Installation",
    desc: "Professional installation and demo",
    icon: "🔧",
  },
  {
    title: "Motor & Drain Repair",
    desc: "Motor, pump and drainage repair",
    icon: "⚙️",
  },
],

whyChooseUs: [
  {
    title: "Certified Technicians",
    desc: "Experienced technicians",
  },
  {
    title: "Same Day Service",
    desc: "Fast doorstep service",
  },
  {
    title: "90-Day Service Warranty",
    desc: "Warranty on eligible repair services",
  },
],

    brands,

    problems: [
      { title: "Machine Not Spinning", desc: "Often caused by a worn drive belt, faulty motor, or a lid-lock fault." },
      { title: "Water Not Draining", desc: "A clogged drain pump or blocked hose is the usual cause, cleared the same day." },
      { title: "Excessive Vibration or Noise", desc: "Worn drum bearings or an unlevel machine often cause this." },
      { title: "Error Code Display", desc: "Modern machines show error codes for specific faults — we read the code and repair the exact part." },
    ],

    pricing: [
      { service: "Washing Machine General Service", price: "₹399 onwards" },
      { service: "Motor Repair", price: "₹1,499 onwards" },
      { service: "Drum Bearing Replacement", price: "₹1,999 onwards" },
      { service: "Drain Pump Replacement", price: "₹999 onwards" },
    ],

    faqs: [
      { q: "Do you repair both front load and top load machines?", a: "Yes — front load, top load, semi-automatic, and fully automatic washing machine repair for all major brands." },
      { q: "How much does motor repair cost?", a: "It depends on the machine type and exact fault. Call us for a transparent quote before any work begins." },
      { q: "Do you provide installation and demo for new machines?", a: "Yes, we offer professional installation, leveling, and a first-use demo for new washing machines." },
    ],
  },
};

export const serviceList: ServiceConfig[] = Object.values(services);