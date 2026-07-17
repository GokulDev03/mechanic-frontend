import type { Metadata } from 'next';
import { buildServiceMetadata } from '@/lib/seo/metadata';
import { services } from '@/lib/seo/services';
import ServiceHubPage from '@/components/seo/ServiceHubPage';

const service = services['ac-repair'];

export const metadata: Metadata = buildServiceMetadata(service);

export default function Page() {
  return <ServiceHubPage service={service} />;
}
