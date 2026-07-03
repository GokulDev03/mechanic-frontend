import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Refrigerator Repair Service in Theni | A S SERVICE",
    description:
        "Professional Refrigerator Repair service in Theni. AC installation, gas filling, cooling issue repair and doorstep service at affordable prices.",
    keywords: [
        " Refrigerator Cooling Issue",
        "Compressor Repair",
        "Gas Filling",
        "Thermostat Repair",
        "Door Seal Replacement",
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
      "name": "How much does Refrigerator repair cost in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Refrigerator repair starts from ₹400 depending on the issue and spare parts required."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide doorstep Refrigerator service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide same-day doorstep Refrigerator repair service across Theni."
      }
    },
    {
      "@type": "Question",
      "name": "Which Refrigerator brands do you repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repair LG, Samsung, Whirlpool, Godrej, Haier, Bosch and all major Refrigerator brands."
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
                Refrigerator Repair Service in Theni
            </h1>

            <p className="text-gray-600 text-lg leading-8">
                A S SERVICE provides professional refrigerator repair services in Theni.
                We repair cooling issues, compressor problems, gas leakage, thermostat faults,
                door seal issues, and all major refrigerator problems. Our experienced
                technicians provide fast and reliable doorstep service for all refrigerator brands.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">

                <div className="border rounded-xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Our Refrigerator Services
                    </h2>

                    <ul className="space-y-3">
                        <li>✅ Refrigerator Cooling Issue Repair</li>
                        <li>✅ Compressor Repair & Replacement</li>
                        <li>✅ Gas Charging / Gas Filling</li>
                        <li>✅ Thermostat Repair</li>
                        <li>✅ Door Seal Replacement</li>
                        <li>✅ Water Leakage Repair</li>
                        <li>✅ Deep Freezer Repair</li>
                        <li>✅ All Brand Refrigerator Service</li>
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
                            How much does refrigerator repair cost?
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Refrigerator repair starts from ₹400 depending on the issue and spare parts.
                        </p>
                    </div>

                    <div className="border rounded-xl p-5">
                        <h3 className="font-semibold">
                            Do you provide doorstep refrigerator service?
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Yes. We provide same-day doorstep refrigerator repair service across Theni.
                        </p>
                    </div>

                    <div className="border rounded-xl p-5">
                        <h3 className="font-semibold">
                            Which refrigerator brands do you repair?
                        </h3>

                        <p className="text-gray-600 mt-2">
                            We repair LG, Samsung, Whirlpool, Godrej, Haier, Bosch, Panasonic and all major refrigerator brands.
                        </p>
                    </div>

                </div>
            </section>

            <div className="mt-16 text-center">

                <Link
                    href="/booking"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
                >
                    Book Refrigerator Service
                </Link>

            </div>

        </main>
    );
}