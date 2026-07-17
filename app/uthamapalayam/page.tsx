import type { Metadata } from 'next';
import { buildLocationMetadata } from '@/lib/seo/metadata';
import { locations } from '@/lib/seo/locations';
import LocationHubPage from '@/components/seo/LocationHubPage';

const location = locations['uthamapalayam'];

export const metadata: Metadata = buildLocationMetadata(location);

export default function Page() {
  return <LocationHubPage location={location} />;
}
