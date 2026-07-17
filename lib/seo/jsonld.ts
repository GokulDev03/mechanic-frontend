import { SITE_URL, BUSINESS } from "./site";
import type { LocationData } from "./locations";
import type { ServiceConfig } from "./services";

const GENERIC_LOCATION_FAQS = (locationName: string) => [
  {
    q: `Do you provide doorstep appliance repair in ${locationName}?`,
    a: `Yes. A S SERVICE provides same-day doorstep AC, refrigerator, and washing machine repair in ${locationName} and nearby areas.`,
  },
  {
    q: `Which appliances do you repair in ${locationName}?`,
    a: `We repair Air Conditioners, Refrigerators, and Washing Machines of all major brands in ${locationName}.`,
  },
  {
    q: `How fast can a technician reach me in ${locationName}?`,
    a: `In most cases a certified technician reaches you the same day, based on availability in ${locationName}.`,
  },
  {
    q: `Do you provide a service warranty in ${locationName}?`,
    a: `Yes, we provide a warranty on eligible repair services, and genuine spare parts carry the manufacturer's warranty.`,
  },
];

/** LocalBusiness + FAQPage + BreadcrumbList for a location hub page (e.g. /cumbum). */
export function buildLocationJsonLd(location: LocationData) {
  const url = `${SITE_URL}/${location.slug}`;
  const faqs = GENERIC_LOCATION_FAQS(location.name);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${url}/#business-${location.slug}`,
        name: `${BUSINESS.name} - ${location.name}`,
        image: `${SITE_URL}/og-image.png`,
        url,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        priceRange: BUSINESS.priceRange,
        address: {
          "@type": "PostalAddress",
          addressLocality: location.name,
          addressRegion: BUSINESS.addressRegion,
          postalCode: location.postalCode,
          addressCountry: BUSINESS.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.latitude,
          longitude: location.longitude,
        },
        areaServed: { "@type": "City", name: location.name },
        openingHours: BUSINESS.openingHours,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: location.name, item: url },
        ],
      },
    ],
  };
}

/** Service + FAQPage + BreadcrumbList for a service hub page (e.g. /ac-repair). */
export function buildServiceJsonLd(service: ServiceConfig, location: LocationData) {
  const url = `${SITE_URL}/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}/#service-hub`,
        serviceType: service.name,
        name: `${service.name} Service`,
        description: service.intro,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: ["Theni", "Madurai", "Dindigul"],
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: service.name, item: url },
        ],
      },
    ],
  };
}
