import type { Metadata } from "next";
import type { LocationData } from "./locations";
import type { ServiceConfig } from "./services";

export function buildLocationMetadata(location: LocationData): Metadata {
  const path = `/${location.slug}`;
  const title = `Appliance Repair in ${location.name} | AC, Fridge & Washing Machine Service – A S SERVICE`;
  const description = `A S SERVICE offers doorstep AC repair, refrigerator repair, and washing machine repair in ${location.name}. Same-day service, all major brands, certified local technicians.`;
  const keywords = [
    `appliance repair ${location.name}`,
    `AC repair ${location.name}`,
    `AC service ${location.name}`,
    `fridge repair ${location.name}`,
    `refrigerator repair ${location.name}`,
    `washing machine repair ${location.name}`,
    `home appliance service ${location.name}`,
    `AC service contact number ${location.name}`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "A S SERVICE",
      title,
      description,
      locale: "en_IN",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export function buildServiceMetadata(service: ServiceConfig): Metadata {
  const path = `/${service.slug}`;
  const title = `${service.name} in Theni, Madurai & Dindigul | A S SERVICE`;
  const description = `${service.tagline}. A S SERVICE provides doorstep ${service.name.toLowerCase()} across Theni, Madurai, Dindigul and surrounding towns. Same-day service, all major brands.`;
  const keywords = [
    `${service.name} Theni`,
    `${service.name} Madurai`,
    `${service.name} Dindigul`,
    `${service.name.toLowerCase()} near me`,
    `best ${service.name.toLowerCase()} service`,
    `${service.shortName} service contact number`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "A S SERVICE",
      title,
      description,
      locale: "en_IN",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
export function buildMetadata(
  service: ServiceConfig,
  location: LocationData
): Metadata {
  const path = `/${service.slug}-${location.slug}`;

  const title = `${service.serviceName} in ${location.name} | A S SERVICE`;

  const description = `${service.tagline}. Professional ${service.serviceName.toLowerCase()} in ${location.name}. Same-day doorstep service for all major brands.`;

  return {
    title,
    description,

    keywords: [
      `${service.serviceName} ${location.name}`,
      `${service.serviceNameShort} repair ${location.name}`,
      `${location.name} ${service.serviceName}`,
      ...service.keywordTemplates.map((k) =>
        k.replace("{location}", location.name)
      ),
    ],

    alternates: {
      canonical: path,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName: "A S SERVICE",
      images: [
        {
          url: service.ogImage,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.ogImage],
    },
  };
}