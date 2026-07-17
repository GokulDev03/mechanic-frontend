import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { services } from "@/lib/seo/services";
import { locations } from "@/lib/seo/locations";
import LocationServicePage from "@/components/seo/LocationServicePage";

const service = services["fridge-repair"];
const location = locations["usilampatti"];

export const metadata: Metadata = buildMetadata(service, location);

export default function Page() {
  return <LocationServicePage service={service} location={location} />;
}
