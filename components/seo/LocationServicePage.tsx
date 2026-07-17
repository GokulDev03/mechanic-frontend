import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceConfig } from "@/lib/seo/services";
import { locations, type LocationData } from "@/lib/seo/locations";
import { fillTokens, getReviews } from "@/lib/seo/copy";
import { buildServiceJsonLd } from "@/lib/seo/jsonld";
import { getNearbyLocationLinks, getSisterServiceLinks } from "@/lib/seo/links";

/* ---------------------------------------------------------------------- */
/* Reusable primitives matching the existing site's UI language           */
/* ---------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-600">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg border-2 border-amber-500 bg-white px-6 py-3 font-semibold text-amber-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-md"
    >
      {children}
    </Link>
  );
}

/* ---------------------------------------------------------------------- */
/* Main component                                                          */
/* ---------------------------------------------------------------------- */

export default function LocationServicePage({
  service,
  location,
}: {
  service: ServiceConfig;
  location: LocationData;
}) {
  const t = (text: string) => fillTokens(text, service, location);
  const jsonLd = buildServiceJsonLd(service, location);
  const reviews = getReviews(service, location);
  const nearbyLocationLinks = getNearbyLocationLinks(service, location);
  const sisterServiceLinks = getSisterServiceLinks(service, location);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white text-gray-900">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50">
          <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm text-gray-600 sm:px-6 lg:px-8">
            <li>
              <Link href="/" className="transition-colors hover:text-amber-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900" aria-current="page">
              {service.serviceName} {location.name}
            </li>
          </ol>
        </nav>

        {/* ---------------------------------------------------------- */}
        {/* Hero                                                        */}
        {/* ---------------------------------------------------------- */}
        <header className="relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src={service.heroImage}
              alt={`A S SERVICE technician performing ${service.serviceName.toLowerCase()} in ${location.name}`}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <span className="inline-block rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white">
              A S SERVICE · {location.name}, {location.district} District
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {service.serviceName} in {location.name} — Same-Day Doorstep Service
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-200">
              {t(
                `From repair and installation to gas filling and emergency fixes — A S SERVICE brings certified ${service.serviceNameShort.toLowerCase()} technicians to your doorstep in {location}, the same day you call.`
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/booking">Book {service.serviceName} Now</PrimaryButton>
              <SecondaryButton href="/contact">Call A S SERVICE</SecondaryButton>
            </div>
          </div>
        </header>

        {/* ---------------------------------------------------------- */}
        {/* Why Choose Us                                               */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="why-choose-us-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why A S SERVICE"
              title={`Why Choose Us for ${service.serviceName} in ${location.name}`}
              subtitle="Local expertise, transparent pricing, and technicians who treat your home with care."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.whyChooseUs.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{t(item.desc)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Our Services                                                */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="services-heading" className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Services"
              title={`Complete ${service.serviceName} in ${location.name}`}
              subtitle="All the repair, installation, and maintenance work you need — under one roof."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.services.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Brands We Repair                                            */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="brands-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Brands We Repair"
              title={`${service.serviceName} Brands We Service in ${location.name}`}
              subtitle="Our technicians are experienced across all major brands sold in India."
            />
            <ul className="flex flex-wrap justify-center gap-4">
              {service.brands.map((brand) => (
                <li
                  key={brand}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-600 hover:shadow-md"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Common Problems                                             */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="problems-heading" className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Common Issues"
              title={`Common ${service.serviceNameShort} Problems We Fix in ${location.name}`}
              subtitle="Recognize the symptoms below? Our technicians can diagnose and repair them fast."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.problems.map((problem) => (
                <article
                  key={problem.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{problem.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Pricing                                                     */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="pricing-heading" className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Pricing"
              title={`${service.serviceName} Pricing in ${location.name}`}
              subtitle="Transparent starting prices. Final cost depends on the appliance model and issue diagnosed on-site."
            />
            <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
              <table className="w-full text-left">
                <thead className="bg-amber-500 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-4 text-sm font-semibold">
                      Starting Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.pricing.map((row, idx) => (
                    <tr key={row.service} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 text-sm text-gray-800">{row.service}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              Prices are indicative starting rates. Call{" "}
              <Link href="/contact" className="font-medium text-amber-600 hover:underline">
                A S SERVICE
              </Link>{" "}
              for an exact quote before booking.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Why Local Customers Choose Us                               */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="local-heading" className="bg-gray-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="inline-block rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white">
                Trusted Locally
              </span>
              <h2 id="local-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
                Why Local Customers in {location.name} Choose A S SERVICE
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300">
                {t(
                  `We're not a call-center dispatch — we're a local ${service.serviceNameShort.toLowerCase()} repair team that knows {location}'s homes, apartments, and shops.`
                )}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Local Presence",
                  desc: `Based near ${location.name}, so technicians reach you faster than outstation providers.`,
                },
                {
                  title: "Honest Diagnosis",
                  desc: "We explain the actual issue before recommending any repair or part replacement.",
                },
                {
                  title: "Repeat Customers",
                  desc: `Most of our bookings come from repeat customers and referrals across ${location.name}.`,
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl bg-white/5 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Same Day Doorstep Service                                   */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="doorstep-heading" className="py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative h-72 w-full overflow-hidden rounded-xl shadow-lg lg:h-full">
              <Image
                src={service.doorstepImage}
                alt={`A S SERVICE technician arriving for a doorstep ${service.serviceName.toLowerCase()} visit in ${location.name}`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-block w-fit rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-600">
                Fast & Convenient
              </span>
              <h2 id="doorstep-heading" className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Same-Day Doorstep {service.serviceName} in {location.name}
              </h2>
              <p className="mt-4 text-gray-600">
                {t(
                  `No need to wait days for a technician. Book online or call us, and our team arrives at your home or shop in {location} the same day — fully equipped to diagnose and repair on the first visit.`
                )}
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  `Quick response within ${location.name} and nearby areas`,
                  "On-site diagnosis before any repair begins",
                  "Fully equipped technician vehicle",
                  "Clean, careful work inside your home",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PrimaryButton href="/booking">Schedule Doorstep Visit</PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Service Areas                                               */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="areas-heading" className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Service Areas"
              title={`${service.serviceName} Coverage Across ${location.name} & Nearby Areas`}
              subtitle={`We also serve customers across ${location.district} district and neighboring towns.`}
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {location.areas.map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-gray-100 bg-white px-4 py-4 text-center text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {area}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              {nearbyLocationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-amber-300 px-4 py-2 font-medium text-amber-600 transition-colors hover:bg-amber-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Customer Reviews                                            */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="reviews-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Customer Reviews"
              title={`What ${location.name} Customers Say About Us`}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, idx) => (
                <figure
                  key={`${review.name}-${idx}`}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className="flex gap-1 text-amber-500"
                    aria-label={`Rated ${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm text-gray-700">“{review.text}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-gray-900">
                    {review.name}
                    <span className="block text-xs font-normal text-gray-500">{review.area}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* FAQ                                                         */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="faq-heading" className="bg-gray-50 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title={`Frequently Asked Questions About ${service.serviceName} in ${location.name}`}
            />
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 open:shadow-lg"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-gray-900">
                    {t(faq.q)}
                    <span
                      className="ml-4 flex-shrink-0 text-amber-500 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600">{t(faq.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Call To Action                                              */}
        {/* ---------------------------------------------------------- */}
        <section aria-labelledby="cta-heading" className="py-16">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-amber-500 px-6 py-12 shadow-xl sm:px-12">
              <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
                Need {service.serviceName} in {location.name} Today?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-amber-50">
                {t(
                  `Book a certified A S SERVICE technician now and get your ${service.serviceNameShort.toLowerCase()} repaired at your doorstep — same day, in {location}.`
                )}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-amber-600 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-lg"
                >
                  Book {service.serviceName}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Related Services — internal linking                        */}
        {/* ---------------------------------------------------------- */}
        <footer aria-labelledby="related-heading" className="border-t border-gray-100 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-center text-lg font-semibold text-gray-900">
              Explore Other Appliance Repair Services in {location.name}
            </h2>
            <nav aria-label="Related services" className="mt-6">
              <ul className="flex flex-wrap justify-center gap-4 text-sm">
                {sisterServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-full border border-gray-200 px-4 py-2 font-medium text-gray-700 transition-colors hover:border-amber-400 hover:text-amber-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/"
                    className="rounded-full border border-gray-200 px-4 py-2 font-medium text-gray-700 transition-colors hover:border-amber-400 hover:text-amber-600"
                  >
                    All Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
