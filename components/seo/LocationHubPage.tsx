import Link from 'next/link';
import { MapPin, Wrench, Phone, CheckCircle, Wind, Refrigerator, Waves, ArrowRight } from 'lucide-react';
import type { LocationData } from '@/lib/seo/locations';
import { serviceList } from '@/lib/seo/services';
import { BUSINESS } from '@/lib/seo/site';
import { serviceLocationHref } from '@/lib/seo/links';
import { buildLocationJsonLd } from '@/lib/seo/jsonld';
import Breadcrumb from './Breadcrumb';
import Reveal from './Reveal';
import FaqAccordion from './FaqAccordion';

const SERVICE_ICONS = { Wind, Refrigerator, Waves } as const;

const LOCATION_FAQS = (locationName: string) => [
  { q: `Do you provide doorstep appliance repair in ${locationName}?`, a: `Yes. A S SERVICE provides same-day doorstep AC, refrigerator, and washing machine repair in ${locationName} and nearby areas.` },
  { q: `Which appliances do you repair in ${locationName}?`, a: `We repair Air Conditioners, Refrigerators, and Washing Machines of all major brands in ${locationName}.` },
  { q: `How fast can a technician reach me in ${locationName}?`, a: `In most cases a certified technician reaches you the same day, based on availability in ${locationName}.` },
  { q: `Do you provide a service warranty in ${locationName}?`, a: `Yes, we provide a warranty on eligible repair services, and genuine spare parts carry the manufacturer's warranty.` },
];

export default function LocationHubPage({ location }: { location: LocationData }) {
  const jsonLd = buildLocationJsonLd(location);
  const faqs = LOCATION_FAQS(location.name);
  const telHref = `tel:${BUSINESS.telephone}`;

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: location.name }]} />

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-70 translate-x-1/4 -translate-y-1/4" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            {location.district} District, Tamil Nadu
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6 max-w-3xl">
            Appliance Repair in {location.name}
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Doorstep AC repair, refrigerator repair, and washing machine repair in {location.name} — certified
            technicians, all major brands, same-day service.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/booking" className="btn-primary btn-shine text-base px-8 py-4">
              <Wrench className="w-5 h-5" />
              Book a Technician
            </Link>
            <a href={telHref} className="btn-secondary btn-shine bg-black text-white px-8 py-4">
              Call Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES AVAILABLE IN THIS CITY ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Our Services
            </span>
            <h2 className="section-title">Services Available in {location.name}</h2>
            <p className="section-subtitle">
              Choose a service below for pricing, common issues, and brand coverage.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon];
              const href = serviceLocationHref(service, location);
              return (
                <Reveal key={service.slug} delay={i * 120} className="card-lift rounded-2xl">
                  <Link
                    href={href}
                    className="group flex h-full flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {service.name} in {location.name}
                    </h3>
                    <p className="text-sm text-gray-500 flex-1">{service.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
                      View details <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Why Choose Us
            </span>
            <h2 className="section-title">Why {location.name} Trusts A S SERVICE</h2>
            <p className="section-subtitle">
              Local presence, certified technicians, and transparent pricing.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Same-Day Service', desc: `Most repair requests in ${location.name} are resolved the same day.` },
              { title: 'Certified Technicians', desc: 'Trained and experienced repair specialists for every appliance.' },
              { title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden charges before any work begins.' },
              { title: 'Genuine Spare Parts', desc: 'Only manufacturer-approved parts used for lasting repairs.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="card-lift group bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <CheckCircle className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ AREAS COVERED ══════════ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">
                Areas We Cover in {location.name}
              </h2>
              <p className="text-gray-500 text-sm">Doorstep service across {location.name} and nearby localities</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap justify-center gap-2">
              {location.areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                Frequently Asked Questions — {location.name}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-white">
                  Need a Technician in {location.name}?
                </h2>
                <p className="text-amber-50 text-lg">
                  Book online or call now for same-day doorstep appliance repair.
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
                  href={telHref}
                  className="btn-shine bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
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
