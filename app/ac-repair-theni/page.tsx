import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Theni | A S SERVICE",
  description:
    "Professional AC repair service in Theni. AC installation, gas filling, cooling issue repair and doorstep service at affordable prices.",
  keywords: [
    "AC Repair Theni",
    "AC Service Theni",
    "AC Installation Theni",
    "AC Gas Filling Theni",
    "Split AC Repair Theni",
    "Window AC Repair Theni",
  ],
  alternates: {
    canonical: "/ac-repair-theni",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does AC repair cost in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AC repair starts from ₹500 depending on the issue."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide doorstep AC service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide same-day doorstep AC repair service in Theni."
      }
    },
    {
      "@type": "Question",
      "name": "Which AC brands do you repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repair LG, Samsung, Daikin, Voltas, Blue Star, Panasonic, Hitachi and all major brands."
      }
    }
  ]
};

export default function ACRepairPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <h1 className="text-4xl font-bold mb-6">
        AC Repair Service in Theni
      </h1>

      <p className="text-gray-600 text-lg leading-8">
        A S SERVICE provides professional AC repair services in Theni.
        We offer AC installation, gas filling, cooling issue repair,
        annual maintenance and doorstep service by experienced technicians.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Our AC Services
          </h2>

          <ul className="space-y-3">
            <li>✅ AC Installation</li>
            <li>✅ AC Uninstallation</li>
            <li>✅ AC Gas Filling</li>
            <li>✅ Cooling Issue Repair</li>
            <li>✅ Water Leakage Repair</li>
            <li>✅ Annual Maintenance</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us?
          </h2>

          <ul className="space-y-3">
            <li>✔ Same Day Service</li>
            <li>✔ Certified Technicians</li>
            <li>✔ Genuine Spare Parts</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ Service Warranty</li>
          </ul>
        </div>

      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              How much does AC repair cost?
            </h3>

            <p className="text-gray-600 mt-2">
              AC repair starts from ₹500 depending on the issue.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              Do you provide home service?
            </h3>

            <p className="text-gray-600 mt-2">
              Yes. We provide doorstep service across Theni.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              Which AC brands do you repair?
            </h3>

            <p className="text-gray-600 mt-2">
              LG, Samsung, Voltas, Daikin, Blue Star, Panasonic and all major brands.
            </p>
          </div>

        </div>
      </section>

      <div className="mt-16 text-center">

        <Link
          href="/booking"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
        >
          Book AC Service
        </Link>

      </div>

    </main>
  );
}