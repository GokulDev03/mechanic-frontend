import type { ServiceConfig } from "./services";
import type { LocationData } from "./locations";

/** Replaces {location} and {service} tokens in template copy strings. */
export function fillTokens(
  text: string,
  service: ServiceConfig,
  location: LocationData
): string {
  return text
    .replaceAll("{location}", location.name)
    .replaceAll("{service}", service.serviceName)
    .replaceAll("{serviceShort}", service.serviceNameShort);
}

const REVIEWER_NAMES = [
  "Karthik R.",
  "Meena S.",
  "Prakash M.",
  "Deepa V.",
  "Suresh Kumar",
  "Lakshmi N.",
  "Arun Prasad",
  "Divya R.",
  "Muthu Vel",
  "Priya S.",
  "Sathish Babu",
  "Kavitha M.",
  "Rajesh T.",
];

const REVIEW_TEMPLATES = [
  "Technician arrived the same evening and fixed my {serviceShort} issue quickly. Fair pricing and honest advice.",
  "Booked {service} in the morning, work was done by afternoon. Very professional and clean work.",
  "Called for an emergency repair during peak season. They responded fast and resolved the issue on the first visit.",
  "Good experience with A S SERVICE in {location}. Technician explained the problem clearly before starting work.",
  "Reliable service for my {serviceShort} at home. Reasonable price and no unnecessary part replacements.",
  "Prompt doorstep service in {location}. Will definitely call A S SERVICE again for appliance repairs.",
];

export interface ReviewItem {
  name: string;
  area: string;
  text: string;
  rating: number;
}

/** Deterministically picks 3 reviews for a given service + location combination. */
export function getReviews(
  service: ServiceConfig,
  location: LocationData
): ReviewItem[] {
  const seed =
    service.slug.length * 7 +
    location.slug
      .split("")
      .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  const reviews: ReviewItem[] = [];
  for (let i = 0; i < 3; i++) {
    const nameIdx = (seed + i * 3) % REVIEWER_NAMES.length;
    const templateIdx = (seed + i * 5) % REVIEW_TEMPLATES.length;
    reviews.push({
      name: REVIEWER_NAMES[nameIdx],
      area: location.name,
      text: fillTokens(REVIEW_TEMPLATES[templateIdx], service, location),
      rating: 5,
    });
  }
  return reviews;
}
