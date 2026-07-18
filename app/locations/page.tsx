import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Wrench, ArrowRight, Wind, Refrigerator, Waves } from 'lucide-react';
import { locationList } from '@/lib/seo/locations';
import { serviceList } from '@/lib/seo/services';
import { serviceLocationHref } from '@/lib/seo/links';
import Breadcrumb from '@/components/seo/Breadcrumb';
import Reveal from '@/components/seo/Reveal';

const SERVICE_ICONS = { Wind, Refrigerator, Waves } as const;

const SITE_URL = 'https://mechanic-frontend-smoky.vercel.app';

export const metadata: Metadata = {
  title: 'All Service Locations | AC, Fridge & Washing Machine Repair – A S SERVICE',
  description:
    'Browse every town and every appliance repair service A S SERVICE covers — AC repair, refrigerator repair, and washing machine repair across Theni, Madurai, Dindigul and 10 nearby towns.',
  keywords: [
    'A S SERVICE locations',
    'appliance repair service areas',
    'AC repair near me',
    'fridge repair near me',
    'washing machine repair near me',
  ],
  alternates: { canonical: '/locations' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: '/locations',
    siteName: 'A S SERVICE',
    title: 'All Service Locations | A S SERVICE',
    description:
      'Every town and every appliance repair service A S SERVICE covers, in one place.',
    locale: 'en_IN',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Service Locations | A S SERVICE',
    description: 'Every town and every appliance repair service A S SERVICE covers, in one place.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/locations/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/locations` },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/locations/#service-areas`,
      name: 'A S SERVICE — Service Areas',
      itemListElement: locationList.map((location, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: location.name,
        url: `${SITE_URL}/${location.slug}`,
      })),
    },
  ],
};

export default function LocationsDirectoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations' }]} />

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-70 translate-x-1/4 -translate-y-1/4" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {locationList.length} Towns · {serviceList.length} Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6 max-w-3xl">
            All Service Locations
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Every appliance repair service A S SERVICE offers, and every town we cover — pick a
            service or a town below to get started.
          </p>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Browse by Service
            </span>
            <h2 className="section-title">Our Repair Services</h2>
            <p className="section-subtitle">Choose a service to see pricing, common issues, and every town we cover it in.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <Reveal key={service.slug} delay={i * 120} className="card-lift rounded-2xl">
                  <Link
                    href={`/${service.slug}`}
                    className="group flex h-full flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-500 flex-1">{service.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
                      View all towns <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ LOCATIONS ══════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Browse by Town
            </span>
            <h2 className="section-title">Towns We Serve</h2>
            <p className="section-subtitle">Pick your town for local pricing, service areas, and technician availability.</p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locationList.map((location, i) => (
              <Reveal key={location.slug} delay={i * 50}>
                <Link
                  href={`/${location.slug}`}
                  className="group flex items-center justify-between gap-2 bg-white border border-gray-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl px-4 py-3 shadow-sm hover:shadow transition-all duration-200"
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-800 group-hover:text-amber-700">
                    <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    {location.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FULL DIRECTORY — service × town matrix for every combination ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Full Directory
            </span>
            <h2 className="section-title">Every Service, Every Town</h2>
            <p className="section-subtitle">The complete list — one link per service per town.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceList.map((service, sIdx) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <Reveal key={service.slug} delay={sIdx * 120}>
                  <div className="h-full bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-5 h-5 text-amber-600" />
                      <h3 className="font-bold text-gray-900">{service.name}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {locationList.map((location) => (
                        <li key={location.slug}>
                          <Link
                            href={serviceLocationHref(service, location)}
                            className="flex items-center justify-between text-sm text-gray-600 hover:text-amber-600 py-1 transition-colors"
                          >
                            <span>{service.name} in {location.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-white">
                  Don't see your town listed?
                </h2>
                <p className="text-amber-50 text-lg">
                  We're expanding fast — call us and we'll confirm coverage for your area.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-8 md:mt-0 flex-shrink-0">
                <Link
                  href="/booking"
                  className="btn-shine bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Wrench className="w-5 h-5" />
                  Book Now
                </Link>
                <a
                  href="tel:+918807086727"
                  className="btn-shine bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}