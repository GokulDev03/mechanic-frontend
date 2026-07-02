import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Washing Machine Repair Service in Theni | A S SERVICE",
  description:
    "Professional Washing Machine repair service in Theni. Front load, top load, semi-automatic and fully automatic washing machine repair with same-day doorstep service.",
  keywords: [
    "Washing Machine Repair Theni",
    "Washing Machine Service Theni",
    "Front Load Washing Machine Repair",
    "Top Load Washing Machine Repair",
    "Semi Automatic Washing Machine Repair",
    "Fully Automatic Washing Machine Repair",
    "LG Washing Machine Repair",
    "Samsung Washing Machine Repair",
    "IFB Washing Machine Repair",
    "Bosch Washing Machine Repair",
    "Motor Repair",
    "Drain Problem",
    "Spin Problem",
    "Doorstep Washing Machine Service",
  ],
  alternates: {
    canonical: "/washing-machine-repair-theni",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does washing machine repair cost in Theni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Washing machine repair starts from ₹350 depending on the issue and spare parts required."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide doorstep washing machine service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide same-day doorstep washing machine repair service across Theni."
      }
    },
    {
      "@type": "Question",
      name: "Which washing machine brands do you repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We repair LG, Samsung, IFB, Whirlpool, Bosch, Panasonic, Haier and all major washing machine brands."
      }
    }
  ]
};

export default function WashingMachineRepairPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <h1 className="text-4xl font-bold mb-6">
        Washing Machine Repair Service in Theni
      </h1>

      <p className="text-gray-600 text-lg leading-8">
        A S SERVICE provides professional washing machine repair services in
        Theni. We repair front load, top load, semi-automatic and fully
        automatic washing machines. Our experienced technicians provide fast,
        reliable and affordable doorstep service for all major brands.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Our Washing Machine Services
          </h2>

          <ul className="space-y-3">
            <li>✅ Front Load Washing Machine Repair</li>
            <li>✅ Top Load Washing Machine Repair</li>
            <li>✅ Semi Automatic Machine Repair</li>
            <li>✅ Fully Automatic Machine Repair</li>
            <li>✅ Motor Repair & Replacement</li>
            <li>✅ Drum Repair</li>
            <li>✅ Water Drain Problem Repair</li>
            <li>✅ Spin Issue Repair</li>
            <li>✅ PCB & Control Board Repair</li>
            <li>✅ All Brand Washing Machine Service</li>
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
              How much does washing machine repair cost?
            </h3>

            <p className="text-gray-600 mt-2">
              Washing machine repair starts from ₹350 depending on the issue and
              spare parts required.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              Do you provide doorstep washing machine repair?
            </h3>

            <p className="text-gray-600 mt-2">
              Yes. We provide same-day doorstep washing machine repair service
              throughout Theni.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">
              Which washing machine brands do you repair?
            </h3>

            <p className="text-gray-600 mt-2">
              We repair LG, Samsung, IFB, Whirlpool, Bosch, Panasonic, Haier
              and all major washing machine brands.
            </p>
          </div>

        </div>
      </section>

      <div className="mt-16 text-center">

        <Link
          href="/booking"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
        >
          Book Washing Machine Service
        </Link>

      </div>

    </main>
  );
}