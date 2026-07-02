import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TV Repair Service in Theni | A S SERVICE",
  description:
    "Professional LED, LCD and Smart TV repair service in Theni. We repair display issues, sound problems, motherboard faults and provide same-day doorstep service.",
  keywords: [
    "TV Repair Theni",
    "LED TV Repair Theni",
    "LCD TV Repair Theni",
    "Smart TV Repair Theni",
    "Sony TV Repair",
    "Samsung TV Repair",
    "LG TV Repair",
    "MI TV Repair",
    "OnePlus TV Repair",
    "Panasonic TV Repair",
    "TV Display Repair",
    "TV Motherboard Repair",
    "TV Screen Repair",
    "Doorstep TV Service",
  ],
  alternates: {
    canonical: "/tv-repair-theni",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does TV repair cost in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "TV repair starts from ₹300 depending on the issue and spare parts required."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide doorstep TV repair service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. We provide same-day doorstep TV repair service across Theni."
      }
    },
    {
      "@type": "Question",
      "name": "Which TV brands do you repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We repair LG, Samsung, Sony, MI, OnePlus, Panasonic, TCL, Vu and all major TV brands."
      }
    }
  ]
};

export default function TVRepairPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <h1 className="text-4xl font-bold mb-6">
        TV Repair Service in Theni
      </h1>

      <p className="text-gray-600 text-lg leading-8">
        A S SERVICE provides professional TV repair services in Theni.
        We repair LED TVs, LCD TVs and Smart TVs of all major brands.
        Our experienced technicians fix display issues, sound problems,
        motherboard faults, power issues and provide reliable doorstep
        service at affordable prices.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Our TV Repair Services
          </h2>

          <ul className="space-y-3">
            <li>✅ LED TV Repair</li>
            <li>✅ LCD TV Repair</li>
            <li>✅ Smart TV Repair</li>
            <li>✅ Display Panel Repair</li>
            <li>✅ Screen Issue Repair</li>
            <li>✅ Sound Problem Repair</li>
            <li>✅ Motherboard Repair</li>
            <li>✅ Power Supply Repair</li>
            <li>✅ HDMI Port Repair</li>
            <li>✅ All Brand TV Service</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us?
          </h2>

          <ul className="space-y-3">
            <li>✔ Same Day Doorstep Service</li>
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
              How much does TV repair cost?
            </h3>

            <p className="text-gray-600 mt-2">
              TV repair starts from ₹300 depending on the issue and spare parts.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              Do you provide doorstep TV repair?
            </h3>

            <p className="text-gray-600 mt-2">
              Yes. We provide same-day doorstep TV repair service throughout Theni.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              Which TV brands do you repair?
            </h3>

            <p className="text-gray-600 mt-2">
              We repair LG, Samsung, Sony, MI, OnePlus, Panasonic, TCL, Vu and all major TV brands.
            </p>
          </div>

        </div>
      </section>

      <div className="mt-16 text-center">

        <Link
          href="/booking"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Book TV Service
        </Link>

      </div>

    </main>
  );
}