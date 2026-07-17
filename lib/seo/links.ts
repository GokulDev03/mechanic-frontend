// import type { LocationData } from "./locations";
// import type { ServiceConfig } from "./services";

// /**
//  * Returns the correct link for "<service> in <location>":
//  * - If the location already has dedicated per-service pages (Theni,
//  *   Madurai, Dindigul), link straight to the existing page, e.g.
//  *   /ac-repair-theni.
//  * - Otherwise, link to this new location hub page, e.g. /cumbum, since a
//  *   dedicated /ac-repair-cumbum page doesn't exist yet. This keeps every
//  *   generated link pointing at a page that's actually live.
//  */
// export function serviceLocationHref(
//   service: ServiceConfig,
//   location: LocationData
// ): string {
//   if (location.hasDedicatedServicePages) {
//     return `/${service.slug}-${location.slug}`;
//   }
//   return `/${location.slug}`;
// }
import { locationList, type LocationData } from "./locations";
import { serviceList, type ServiceConfig } from "./services";

export function serviceLocationHref(
  service: ServiceConfig,
  location: LocationData
): string {
  if (location.hasDedicatedServicePages) {
    return `/${service.slug}-${location.slug}`;
  }

  return `/${location.slug}`;
}

export function getNearbyLocationLinks(
  service: ServiceConfig,
  currentLocation: LocationData
) {
  return locationList
    .filter((location) => location.slug !== currentLocation.slug)
    .slice(0, 6)
    .map((location) => ({
      label: `${service.serviceName} in ${location.name}`,
      href: serviceLocationHref(service, location),
    }));
}

export function getSisterServiceLinks(
  currentService: ServiceConfig,
  location: LocationData
) {
  return serviceList
    .filter((service) => service.slug !== currentService.slug)
    .map((service) => ({
      label: `${service.serviceName} in ${location.name}`,
      href: serviceLocationHref(service, location),
    }));
}