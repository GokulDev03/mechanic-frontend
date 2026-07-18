import type { Metadata } from "next";
import type { LocationData } from "./locations";
import type { ServiceConfig } from "./services";

export function buildLocationMetadata(location: LocationData): Metadata {
  const path = `/${location.slug}`;
  const title = `AC, Fridge & Washing Machine Repair in ${location.name} | A S SERVICE`;
  const description = `A S SERVICE provides same-day AC repair, refrigerator repair, and washing machine repair in ${location.name}. Certified technicians, genuine spare parts, affordable pricing, and doorstep service.`;
  const keywords = [
    `appliance repair ${location.name}`,
    `AC repair ${location.name}`,
    `AC service ${location.name}`,
    `fridge repair ${location.name}`,
    `refrigerator repair ${location.name}`,
    `washing machine repair ${location.name}`,
    `home appliance service ${location.name}`,
    `AC service contact number ${location.name}`,
    `AC installation ${location.name}`,
`AC gas refilling ${location.name}`,
`washing machine service ${location.name}`,
`refrigerator service ${location.name}`,
`home appliance repair ${location.name}`,
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
  const title = `${service.name} in Theni, Madurai, Dindigul | Doorstep Service | A S SERVICE`;
  const description = `Looking for ${service.name.toLowerCase()} in Theni, Madurai, or Dindigul? A S SERVICE provides same-day doorstep repair, certified technicians, genuine spare parts, affordable pricing, and support for all major brands.`;
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

  const title = `${service.serviceName} in ${location.name} | Same Day Doorstep Service | A S SERVICE`;

  const description = `${service.tagline}. Professional ${service.serviceName.toLowerCase()} in ${location.name}. Same-day doorstep service for all major brands.`;

  return {
    title,
    description,

    keywords: [
      `${service.serviceName} ${location.name}`,
`${service.serviceNameShort} repair ${location.name}`,
`${service.serviceName} near me`,
`${service.serviceName} service ${location.name}`,
`${service.serviceNameShort} service center ${location.name}`,
`${service.serviceNameShort} installation ${location.name}`,
`${service.serviceNameShort} maintenance ${location.name}`,
`${service.serviceNameShort} technician ${location.name}`,
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
width:1200,
height:630,
alt:title
}
]
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.ogImage],
    },
  };
}