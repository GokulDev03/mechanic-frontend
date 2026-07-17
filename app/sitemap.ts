import { MetadataRoute } from "next";
import { locationList } from "@/lib/seo/locations";
import { serviceList } from "@/lib/seo/services";

const baseUrl = "https://mechanic-frontend-smoky.vercel.app";

/**
 * IMPORTANT: none of the 4 files you uploaded included an existing
 * app/sitemap.ts, so this file is newly created rather than "updated in
 * place." If your project already has a sitemap.ts, don't overwrite it —
 * instead copy the two new URL blocks below (locationRoutes and
 * serviceHubRoutes) into your existing one so nothing you already had
 * gets lost.
 *
 * Static routes and "known existing" dedicated service pages below are
 * based only on what's referenced in your uploaded layout.tsx / homepage
 * (Theni, Madurai, Dindigul dedicated pages). If you have additional
 * existing pages not listed here (e.g. TV repair pages, other city pages),
 * add them to `staticRoutes` / `existingServiceCityRoutes`.
 */

const staticRoutes = ["/", "/about", "/contact", "/booking"];

// Dedicated per-service pages that already exist for these 3 cities
// (referenced in your homepage's `serviceLinks` data).
const existingServiceCityRoutes = ["theni", "madurai", "dindigul"].flatMap((city) =>
  ["ac-repair", "fridge-repair", "washing-machine-repair"].map(
    (service) => `/${service}-${city}`
  )
);

// New location hub pages (this update)
const locationRoutes = locationList.map((location) => `/${location.slug}`);

// New service hub pages (this update)
const serviceHubRoutes = serviceList.map((service) => `/${service.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = [
    ...staticRoutes,
    ...existingServiceCityRoutes,
    ...locationRoutes,
    ...serviceHubRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
