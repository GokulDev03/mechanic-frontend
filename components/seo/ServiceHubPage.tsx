import Link from 'next/link';
import { MapPin, Wrench, Phone, ArrowRight, Wind, Refrigerator, Waves } from 'lucide-react';
import type { ServiceConfig } from '@/lib/seo/services';
import { brands } from '@/lib/seo/services';
import { locationList } from '@/lib/seo/locations';
import { BUSINESS } from '@/lib/seo/site';
import { serviceLocationHref } from '@/lib/seo/links';
import { buildServiceJsonLd } from '@/lib/seo/jsonld';
import Breadcrumb from './Breadcrumb';
import Reveal from './Reveal';
import FaqAccordion from './FaqAccordion';

const SERVICE_ICONS = { Wind, Refrigerator, Waves } as const;

export default function ServiceHubPage({ service }: { service: ServiceConfig }) {
const jsonLd = buildServiceJsonLd(service);
  const telHref = `tel:${BUSINESS.telephone}`;
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: service.name }]} />

      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-70 translate-x-1/4 -translate-y-1/4" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Icon className="w-4 h-4" />
            {service.tagline}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6 max-w-3xl">
            {service.name} in Theni, Madurai &amp; Dindigul
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">{service.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/booking" className="btn-primary btn-shine text-base px-8 py-4">
              <Wrench className="w-5 h-5" />
              Book {service.shortName} Repair
            </Link>
            <a href={telHref} className="btn-secondary btn-shine bg-black text-white px-8 py-4">
              Call Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ COMMON PROBLEMS ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Common Issues
            </span>
            <h2 className="section-title">Common {service.shortName} Problems We Fix</h2>
            <p className="section-subtitle">Recognize the symptoms below? We can diagnose and repair them fast.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.problems.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 100} className="card-lift rounded-2xl">
                <div className="h-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-sm text-gray-500">{problem.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PRICING ══════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Pricing
            </span>
            <h2 className="section-title">{service.name} Pricing</h2>
            <p className="section-subtitle">
              Transparent starting prices. Final cost depends on the appliance model and issue diagnosed on-site.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-amber-500 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold">Service</th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold">Starting Price</th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricing.map((row, idx) => (
                    <tr key={row.service} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-800">{row.service}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              Prices are indicative starting rates. Call{' '}
              <a href={telHref} className="font-medium text-amber-600 hover:underline">
                {BUSINESS.telephoneDisplay}
              </a>{' '}
              for an exact quote before booking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════ BRANDS ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Brands We Repair
            </span>
            <h2 className="section-title">{service.name} — All Major Brands</h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="flex flex-wrap justify-center gap-4">
              {brands.map((brand) => (
                <li
                  key={brand}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-600 hover:shadow-md"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ══════════ LOCATIONS WE SERVE ══════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Service Areas
            </span>
            <h2 className="section-title">{service.name} Near You</h2>
            <p className="section-subtitle">Choose your town for local {service.shortName.toLowerCase()} repair details.</p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locationList.map((location, i) => {
              const href = serviceLocationHref(service, location);
              return (
                <Reveal key={location.slug} delay={i * 50}>
                  <Link
                    href={href}
                    className="group flex items-center justify-between gap-2 bg-white border border-gray-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl px-4 py-3 shadow-sm hover:shadow transition-all duration-200"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-gray-800 group-hover:text-amber-700">
                      <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {location.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                Frequently Asked Questions — {service.name}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FaqAccordion faqs={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-white">
                  Ready to Book {service.name}?
                </h2>
                <p className="text-amber-50 text-lg">Get same-day service from our certified technicians.</p>
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
