// import Link from 'next/link';
// import { MapPin, Wrench, Phone, CheckCircle, Wind, Refrigerator, Waves, ArrowRight } from 'lucide-react';
// import type { LocationData } from '@/lib/seo/locations';
// import { serviceList } from '@/lib/seo/services';
// import { BUSINESS } from '@/lib/seo/site';
// import { serviceLocationHref } from '@/lib/seo/links';
// import { buildLocationJsonLd } from '@/lib/seo/jsonld';
// import Breadcrumb from './Breadcrumb';
// import Reveal from './Reveal';
// import FaqAccordion from './FaqAccordion';

// const SERVICE_ICONS = { Wind, Refrigerator, Waves } as const;

// const LOCATION_FAQS = (locationName: string) => [
//   { q: `Do you provide doorstep appliance repair in ${locationName}?`, a: `Yes. A S SERVICE provides same-day doorstep AC, refrigerator, and washing machine repair in ${locationName} and nearby areas.` },
//   { q: `Which appliances do you repair in ${locationName}?`, a: `We repair Air Conditioners, Refrigerators, and Washing Machines of all major brands in ${locationName}.` },
//   { q: `How fast can a technician reach me in ${locationName}?`, a: `In most cases a certified technician reaches you the same day, based on availability in ${locationName}.` },
//   { q: `Do you provide a service warranty in ${locationName}?`, a: `Yes, we provide a warranty on eligible repair services, and genuine spare parts carry the manufacturer's warranty.` },
// ];

// export default function LocationHubPage({ location }: { location: LocationData }) {
//   const jsonLd = buildLocationJsonLd(location);
//   const faqs = LOCATION_FAQS(location.name);
//   const telHref = `tel:${BUSINESS.telephone}`;

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         // eslint-disable-next-line react/no-danger
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: location.name }]} />

//       {/* ══════════ HERO ══════════ */}
//       <section className="relative bg-white overflow-hidden border-b border-gray-100">
//         <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-70 translate-x-1/4 -translate-y-1/4" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//           <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
//             <CheckCircle className="w-4 h-4" />
//             {location.district} District, Tamil Nadu
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6 max-w-3xl">
//             Appliance Repair in {location.name}
//           </h1>
//           <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
//             Doorstep AC repair, refrigerator repair, and washing machine repair in {location.name} — certified
//             technicians, all major brands, same-day service.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Link href="/booking" className="btn-primary btn-shine text-base px-8 py-4">
//               <Wrench className="w-5 h-5" />
//               Book a Technician
//             </Link>
//             <a href={telHref} className="btn-secondary btn-shine bg-black text-white px-8 py-4">
//               Call Now
//               <ArrowRight className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ══════════ SERVICES AVAILABLE IN THIS CITY ══════════ */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Reveal>
//             <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
//               Our Services
//             </span>
//             <h2 className="section-title">Services Available in {location.name}</h2>
//             <p className="section-subtitle">
//               Choose a service below for pricing, common issues, and brand coverage.
//             </p>
//           </Reveal>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {serviceList.map((service, i) => {
//               const Icon = SERVICE_ICONS[service.icon];
//               const href = serviceLocationHref(service, location);
//               return (
//                 <Reveal key={service.slug} delay={i * 120} className="card-lift rounded-2xl">
//                   <Link
//                     href={href}
//                     className="group flex h-full flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-200"
//                   >
//                     <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
//                       <Icon className="w-6 h-6 text-amber-600" />
//                     </div>
//                     <h3 className="font-bold text-lg text-gray-900 mb-2">
//                       {service.name} in {location.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 flex-1">{service.tagline}</p>
//                     <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
//                       View details <ArrowRight className="w-4 h-4" />
//                     </span>
//                   </Link>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ══════════ WHY CHOOSE US ══════════ */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Reveal>
//             <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
//               Why Choose Us
//             </span>
//             <h2 className="section-title">Why {location.name} Trusts A S SERVICE</h2>
//             <p className="section-subtitle">
//               Local presence, certified technicians, and transparent pricing.
//             </p>
//           </Reveal>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { title: 'Same-Day Service', desc: `Most repair requests in ${location.name} are resolved the same day.` },
//               { title: 'Certified Technicians', desc: 'Trained and experienced repair specialists for every appliance.' },
//               { title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden charges before any work begins.' },
//               { title: 'Genuine Spare Parts', desc: 'Only manufacturer-approved parts used for lasting repairs.' },
//             ].map((item, i) => (
//               <Reveal key={item.title} delay={i * 120}>
//                 <div className="card-lift group bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm h-full">
//                   <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
//                     <CheckCircle className="w-7 h-7 text-amber-600" />
//                   </div>
//                   <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-500 text-sm">{item.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════ AREAS COVERED ══════════ */}
//       <section className="py-16 bg-white border-t border-gray-100">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Reveal>
//             <div className="text-center mb-8">
//               <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">
//                 Areas We Cover in {location.name}
//               </h2>
//               <p className="text-gray-500 text-sm">Doorstep service across {location.name} and nearby localities</p>
//             </div>
//           </Reveal>
//           <Reveal delay={120}>
//             <div className="flex flex-wrap justify-center gap-2">
//               {location.areas.map((area) => (
//                 <span
//                   key={area}
//                   className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors"
//                 >
//                   <MapPin className="w-3.5 h-3.5 text-amber-500" />
//                   {area}
//                 </span>
//               ))}
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ══════════ FAQ ══════════ */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Reveal>
//             <div className="text-center mb-12">
//               <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
//                 FAQ
//               </span>
//               <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
//                 Frequently Asked Questions — {location.name}
//               </h2>
//             </div>
//           </Reveal>
//           <Reveal delay={100}>
//             <FaqAccordion faqs={faqs} />
//           </Reveal>
//         </div>
//       </section>

//       {/* ══════════ CTA ══════════ */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Reveal>
//             <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-white">
//                   Need a Technician in {location.name}?
//                 </h2>
//                 <p className="text-amber-50 text-lg">
//                   Book online or call now for same-day doorstep appliance repair.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-8 md:mt-0 flex-shrink-0">
//                 <Link
//                   href="/booking"
//                   className="btn-shine bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
//                 >
//                   <Wrench className="w-5 h-5" />
//                   Book Now
//                 </Link>
//                 <a
//                   href={telHref}
//                   className="btn-shine bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
//                 >
//                   <Phone className="w-5 h-5" />
//                   Call Now
//                 </a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }


import Link from 'next/link';
import {
  MapPin,
  Wrench,
  Phone,
  CheckCircle,
  Wind,
  Refrigerator,
  Waves,
  ArrowRight,
  Clock,
  Star,
  Quote,
} from 'lucide-react';
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

/** Scoped CSS for the ticket-notch cutouts used in the hero docket and CTA stub. */
const docketCss = `
.docket-notch {
  position: absolute; top: 0; width: 20px; height: 20px;
  border-radius: 9999px; background: #ffffff; transform: translateY(-50%);
}
.docket-notch-left { left: -10px; }
.docket-notch-right { right: -10px; }
.cta-notch {
  position: absolute; left: 0; top: 50%; width: 20px; height: 20px;
  border-radius: 9999px; background: #ffffff; transform: translate(-50%, -50%);
}
@media (prefers-reduced-motion: reduce) {
  .lh-hover { transition: none !important; }
}
`;

/** Deterministic, decorative reference id — cosmetic only, derived from the slug. */
function serviceIdFor(slug: string): string {
  let hash = 0;
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) % 97;
  return `AS-${hash.toString().padStart(2, '0')}${slug.length}`;
}

export default function LocationHubPage({ location }: { location: LocationData }) {
  const jsonLd = buildLocationJsonLd(location);
  const faqs = LOCATION_FAQS(location.name);
  const telHref = `tel:${BUSINESS.telephone}`;
  const serviceId = serviceIdFor(location.slug);

  // Positions for the coverage-radar SVG — areas placed evenly around a ring.
  const radarSize = 280;
  const center = radarSize / 2;
  const ringR = 96;
  const radarPoints = location.areas.map((area, i) => {
    const angle = (i / location.areas.length) * Math.PI * 2 - Math.PI / 2;
    return {
      area,
      x: center + ringR * Math.cos(angle),
      y: center + ringR * Math.sin(angle),
    };
  });

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style dangerouslySetInnerHTML={{ __html: docketCss }} />

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: location.name }]} />

      {/* ══════════ HERO — headline + Service Docket card ══════════ */}
      <section className="relative bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left — headline */}
          <div>
            <span className="inline-flex items-center gap-2 text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-5">
              <MapPin className="w-3.5 h-3.5" />
              {location.district} District · Tamil Nadu
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black tracking-tight leading-[1.05] text-gray-900 mb-6 max-w-xl">
              Appliance repair, {location.name}, done right the first time.
            </h1>
            <p className="text-lg text-gray-500 mb-9 max-w-lg leading-relaxed">
              Doorstep AC, refrigerator, and washing machine repair for every major brand —
              diagnosed honestly, fixed same-day, backed by a workmanship warranty.
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

          {/* Right — Service Docket card, styled like a technician's job ticket */}
          <Reveal>
            <div className="relative mx-auto max-w-sm rounded-2xl bg-gray-900 text-white shadow-xl">
              <div className="px-6 pt-6 pb-5 flex items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold mb-1">
                    Service Docket
                  </p>
                  <p className="text-lg font-bold">{location.name} Coverage</p>
                </div>
                <span className="text-[11px] font-mono text-gray-400 pt-1">#{serviceId}</span>
              </div>

              <div className="relative border-t border-dashed border-gray-700">
                <span className="docket-notch docket-notch-left" />
                <span className="docket-notch docket-notch-right" />
              </div>

              <dl className="px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-amber-400" /> Response Time
                  </dt>
                  <dd className="text-sm font-semibold">Same day</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-amber-400" /> Customer Rating
                  </dt>
                  <dd className="text-sm font-semibold">4.8 / 5</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-amber-400" /> Localities Covered
                  </dt>
                  <dd className="text-sm font-semibold">{location.areas.length}+ in {location.name}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-2 text-sm text-gray-400">
                    <Wrench className="w-4 h-4 text-amber-400" /> Services Offered
                  </dt>
                  <dd className="text-sm font-semibold">{serviceList.length}</dd>
                </div>
              </dl>

              <div className="px-6 pb-6">
                <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 text-center text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  Doorstep visit · No diagnosis fee
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ QUICK FACTS STRIP ══════════ */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-700">
            {[
              { value: 'Same-Day', label: 'Service in ' + location.name },
              { value: `${serviceList.length}`, label: 'Appliance Categories' },
              { value: '10+', label: 'Brands Repaired' },
              { value: `${location.areas.length}+`, label: 'Localities Covered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-2">
                <p className="text-2xl sm:text-3xl font-black tabular-nums text-white">{stat.value}</p>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES — menu-board list, not cards ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-2">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-2">
              Available in {location.name}
            </h2>
            <p className="text-gray-500 mb-10">Pick a service for pricing, common issues, and brand coverage.</p>
          </Reveal>

          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            {serviceList.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon];
              const href = serviceLocationHref(service, location);
              return (
                <Reveal key={service.slug} delay={i * 90}>
                  <Link
                    href={href}
                    className={`lh-hover group flex items-center gap-5 px-6 py-6 transition-colors duration-200 hover:bg-amber-50/60 ${
                      i !== 0 ? 'border-t border-gray-200' : ''
                    }`}
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-amber-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-gray-900">
                        {service.name} <span className="font-medium text-gray-400">in {location.name}</span>
                      </h3>
                      <p className="text-sm text-gray-500 truncate sm:whitespace-normal">{service.tagline}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ WHY LOCALS TRUST US — quote + checklist ══════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <Quote className="w-9 h-9 text-amber-400 mb-4" />
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-snug mb-4">
              We're not a call-center dispatch — we're the technicians {location.name} already
              knows by name.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Most of our bookings in {location.name} come from repeat customers and referrals,
              not ads. That only happens when the diagnosis is honest and the repair actually
              holds.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-5">
              {[
                { title: 'Same-day service', desc: `Most repair requests in ${location.name} are resolved the same day.` },
                { title: 'Certified technicians', desc: 'Trained and experienced specialists for every appliance we service.' },
                { title: 'Transparent pricing', desc: 'Upfront quotes with no hidden charges before any work begins.' },
                { title: 'Genuine spare parts', desc: 'Only manufacturer-approved parts used, for repairs that last.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ══════════ COVERAGE RADAR — areas served, drawn as a radius map ══════════ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-center">
          <Reveal>
            <svg
              viewBox={`0 0 ${radarSize} ${radarSize}`}
              width={radarSize}
              height={radarSize}
              className="mx-auto"
              role="img"
              aria-label={`Coverage map of localities served around ${location.name}`}
            >
              <circle cx={center} cy={center} r={40} fill="none" stroke="#fde68a" strokeWidth={1} strokeDasharray="3 5" />
              <circle cx={center} cy={center} r={ringR} fill="none" stroke="#fde68a" strokeWidth={1} strokeDasharray="3 5" />
              {radarPoints.map((p) => (
                <line key={p.area} x1={center} y1={center} x2={p.x} y2={p.y} stroke="#fde68a" strokeWidth={1} />
              ))}
              {radarPoints.map((p) => (
                <g key={p.area}>
                  <circle cx={p.x} cy={p.y} r={5} fill="#f59e0b" />
                  <text
                    x={p.x}
                    y={p.y + (p.y > center ? 18 : -12)}
                    textAnchor="middle"
                    className="fill-gray-600"
                    style={{ fontSize: 10, fontWeight: 600 }}
                  >
                    {p.area}
                  </text>
                </g>
              ))}
              <circle cx={center} cy={center} r={9} fill="#111827" />
              <circle cx={center} cy={center} r={9} fill="none" stroke="#f59e0b" strokeWidth={2} />
            </svg>
          </Reveal>

          <Reveal delay={120}>
            <span className="block text-amber-600 font-semibold text-xs uppercase tracking-[0.2em] mb-2">
              Coverage Map
            </span>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-3">
              Areas We Cover Around {location.name}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Doorstep visits across {location.name} and the localities marked above. Outside
              this radius? Call us — we cover more ground than the map shows.
            </p>
            <div className="flex flex-wrap gap-2">
              {location.areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-600"
                >
                  <MapPin className="w-3 h-3 text-amber-500" />
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

      {/* ══════════ CTA — the ticket, torn and ready to redeem ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="cta-stub relative rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-xl overflow-hidden md:flex md:items-stretch">
              <div className="p-8 md:p-10 md:flex-1">
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-100 font-semibold mb-2">
                  Same-Day Service Voucher
                </p>
                <h2 className="text-3xl font-black tracking-tight text-white mb-3">
                  Need a technician in {location.name}?
                </h2>
                <p className="text-amber-50 leading-relaxed max-w-md">
                  Book online or call now — a certified technician reaches your door in{' '}
                  {location.name} the same day, most days.
                </p>
              </div>

              <div className="relative flex items-center justify-center px-8 py-8 md:w-64 md:border-l md:border-dashed md:border-amber-300/60">
                <span className="cta-notch hidden md:block" />
                <div className="w-full flex flex-col gap-3">
                  <Link
                    href="/booking"
                    className="btn-shine bg-white text-amber-600 hover:bg-amber-50 font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Wrench className="w-4 h-4" />
                    Book Now
                  </Link>
                  <a
                    href={telHref}
                    className="btn-shine bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}