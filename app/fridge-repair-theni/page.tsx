import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "+91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "Fridge Repair in Theni | Refrigerator Service at Your Doorstep",
  description:
    "Fridge repair in Theni – not cooling, gas filling, compressor & thermostat faults fixed at home. Single door, double door & side-by-side refrigerator service for LG, Samsung, Whirlpool & all brands.",
  keywords: [
    "fridge repair theni",
    "refrigerator service theni",
    "fridge service theni",
    "refrigerator repair theni",
    "samsung refrigerator service theni",
    "lg fridge service theni",
    "fridge gas filling theni",
  ],
  alternates: { canonical: "/fridge-repair-theni" },
  openGraph: {
  title: "Fridge Repair in Theni | Refrigerator Service at Your Doorstep",
  description:
    "Professional fridge repair in Theni. Gas filling, compressor repair, thermostat replacement and doorstep refrigerator service.",
  url: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-theni",
  siteName: "A S SERVICE",
  locale: "en_IN",
  type: "website",
},
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is my fridge not cooling in Theni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The usual causes are low refrigerant gas, a faulty compressor relay, a failed thermostat or blocked airflow. Our technician diagnoses the exact fault at your home in Theni before quoting.",
      },
    },
    {
      "@type": "Question",
      name: "How much does refrigerator gas filling cost in Theni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fridge gas filling in Theni typically ranges from ₹1200–₹2500 depending on the model and gas type, always with leak testing included. Exact price is confirmed after free inspection.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair double door and inverter refrigerators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — single door, double door, side-by-side and inverter refrigerators of all brands including LG, Samsung, Whirlpool, Godrej and Haier.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://mechanic-frontend-smoky.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fridge Repair Theni",
      item: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-theni",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fridge & Refrigerator Repair Service in Theni",
  provider: {
    "@type": "LocalBusiness",
    name: "A S SERVICE",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Theni",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  areaServed: ["Theni", "Periyakulam", "Bodinayakanur", "Cumbum", "Chinnamanur", "Andipatti"],
  serviceType: "Refrigerator Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-theni",
};
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A S SERVICE",
  url: "https://mechanic-frontend-smoky.vercel.app",
  telephone: "+918807086727",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Theni",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: [
    "Theni",
    "Periyakulam",
    "Bodinayakanur",
    "Cumbum",
    "Chinnamanur",
    "Andipatti"
  ]
};

const services = [
  { title: "Fridge Not Cooling", desc: "Low gas, compressor relay faults, thermostat failure or blocked vents — the exact cause found and fixed at your home." },
  { title: "Gas Filling & Leak Repair", desc: "Refrigerant gas charging with proper leak detection first, so your refrigerator doesn't lose cooling again in weeks." },
  { title: "Compressor Repair", desc: "Compressor not starting, tripping or making noise — relay, capacitor and compressor replacement with genuine parts." },
  { title: "Double Door & Side-by-Side", desc: "Frost build-up, defrost timer faults, fan motor and sensor issues on double door and side-by-side refrigerators." },
  { title: "Door Gasket & Water Leakage", desc: "Torn door seals and water pooling inside or under the fridge — small fixes that prevent big cooling loss." },
  { title: "Inverter Fridge Repair", desc: "PCB-level diagnosis and repair on inverter refrigerators of every brand — LG, Samsung, Whirlpool and more." },
];

const brands = ["LG", "Samsung", "Whirlpool", "Godrej", "Haier", "Bosch", "Panasonic", "Hitachi", "Voltas Beko", "Kelvinator", "Videocon"];

const areas = ["Theni Allinagaram", "Periyakulam", "Bodinayakanur", "Cumbum", "Chinnamanur", "Andipatti", "Veerapandi", "Devaram"];

const steps = [
  { title: "Call or WhatsApp", desc: "Tell us the fridge type, brand and the problem." },
  { title: "Technician Visits", desc: "Same-day doorstep visit anywhere in Theni." },
  { title: "Upfront Quote", desc: "Free inspection, exact price before any work." },
  { title: "Repair & Warranty", desc: "Fixed at your home, backed by service warranty." },
];

const faqs = [
  { q: "Why is my fridge not cooling properly?", a: "The most common causes are low refrigerant gas, a failed compressor relay or thermostat, and blocked air vents from frost build-up. Our technician checks your refrigerator at home in Theni and tells you the exact fault before quoting." },
  { q: "How much does fridge gas filling cost in Theni?", a: "Typically ₹1200–₹2500 depending on the fridge size and gas type. We always test for leaks before filling — otherwise the new gas escapes within weeks and you pay twice." },
  { q: "The fridge is running but freezing everything / cooling too much. Can that be fixed?", a: "Yes — over-cooling is usually a thermostat or sensor fault, one of the cheaper repairs. It's worth fixing quickly since it spoils vegetables and raises your electricity bill." },
  { q: "Do you repair refrigerators at home or take them to a workshop?", a: "Almost all repairs — gas filling, compressor, thermostat, gasket — are done at your home in Theni. If workshop repair is ever needed, we tell you first." },
  { q: "Is there a warranty on refrigerator repairs?", a: "Yes, every repair carries a service warranty. If the same fault returns within the period, we fix it free of charge." },
];

export default function FridgeRepairTheniPage() {
  return (
    <main className="bg-[#f4f9fb] text-[#14303c] pb-20 md:pb-0">
      {/* signature temperature strip: hot → cold */}
      <div className="h-1.5 bg-gradient-to-r from-[#ff8a3d] via-[#ffd23d] via-30% via-[#7ad4e8] via-65% to-[#0e7c9c]" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      {/* ============ HEADER ============ */}
      {/* <header className="bg-white border-b border-[#cfe2e9]">
        <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="font-extrabold text-lg tracking-tight text-[#0a5a72]">
            A S <span className="text-[#ff8a3d]">SERVICE</span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="bg-[#1fa14b] text-white font-bold text-sm px-5 py-2.5 rounded-full whitespace-nowrap"
          >
            📞 Call Now
          </a>
        </div>
      </header> */}

      {/* ============ HERO ============ */}
      <section className="bg-gradient-to-b from-white to-[#e2eff4] border-b border-[#cfe2e9]">
        <div className="max-w-5xl mx-auto px-5 pt-10 pb-10 md:pt-14">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-[#42606c]">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-[#0e7c9c]">Home</Link></li>
              <li>/</li>
              <li className="font-bold text-[#14303c]">Fridge Repair Theni</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Theni
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            Fridge Repair in <span className="text-[#0e7c9c]">Theni</span> — Refrigerator Service at Your Doorstep
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            Fridge not cooling? Making noise? Leaking water? Our technicians repair single door, double door and side-by-side refrigerators at your home in Theni — gas filling, compressor and thermostat faults included.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need fridge repair in Theni`}
              className="inline-flex items-center gap-2 bg-white text-[#14303c] font-bold px-6 py-3.5 rounded-2xl border-2 border-[#cfe2e9]"
            >
              💬 WhatsApp Us
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-semibold text-[#0a5a72]">
            {["Same-day service", "All brands repaired", "Service warranty", "Transparent pricing"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="w-[19px] h-[19px] rounded-full bg-[#0e7c9c] text-white text-[0.65rem] flex items-center justify-center shrink-0">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="max-w-5xl mx-auto px-5 py-11">
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our Refrigerator Services in Theni</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          A fridge failure can spoil a week&apos;s groceries in a day — so we treat it as urgent. Doorstep diagnosis, upfront price, and most repairs done the same visit.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-[#cfe2e9] rounded-2xl p-6">
              <h3 className="text-[1.05rem] font-bold text-[#0a5a72] mb-1.5">{s.title}</h3>
              <p className="text-sm text-[#42606c] leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ BRANDS ============ */}
      <section className="max-w-5xl mx-auto px-5 pb-11">
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">All Brands, All Models</h2>
        <p className="text-[#3c5560] mb-6">Every refrigerator brand found in Tamil Nadu homes:</p>
        <div className="flex flex-wrap gap-2.5">
          {brands.map((b) => (
            <span key={b} className="bg-white border border-[#cfe2e9] rounded-full px-5 py-2 text-sm font-semibold">{b}</span>
          ))}
        </div>
      </section>

      {/* ============ AREAS ============ */}
      <section className="bg-[#e2eff4] border-y border-[#cfe2e9]">
        <div className="max-w-5xl mx-auto px-5 py-11">
          <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Areas We Cover in Theni District</h2>
          <p className="text-[#3c5560] mb-6">Doorstep fridge repair across Theni and nearby towns:</p>
          <div className="flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <span key={a} className="bg-white border border-[#cfe2e9] rounded-lg px-3.5 py-1.5 text-sm font-medium">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="max-w-5xl mx-auto px-5 py-11">
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-6">How It Works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-white border border-[#cfe2e9] rounded-2xl p-5">
              <span className="w-8 h-8 rounded-full bg-[#0e7c9c] text-white font-extrabold flex items-center justify-center mb-2.5">
                {i + 1}
              </span>
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-[#42606c] leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="max-w-5xl mx-auto px-5 pb-11">
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-5">Frequently Asked Questions</h2>
        <div className="space-y-2.5">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white border border-[#cfe2e9] rounded-2xl px-5 py-4 group">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center gap-3">
                {f.q}
                <span className="text-[#0e7c9c] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-2.5 text-sm text-[#42606c] leading-6">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <div className="max-w-5xl mx-auto px-5 pb-11">
        <div className="bg-[#0a5a72] text-white text-center rounded-2xl px-6 py-9">
          <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight">
            Fridge Trouble in Theni? We&apos;re One Call Away.
          </h2>
          <p className="opacity-85 mt-1.5 mb-5">Same-day doorstep service · All brands · Transparent pricing</p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-7 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
          >
            📞 {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* ============ FOOTER LINKS ============ */}
      <footer className="bg-[#0d2530] text-[#a9c6d1] text-sm">
        <div className="max-w-5xl mx-auto px-5 py-7 text-center">
          <p className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            <Link href="/fridge-repair-madurai" className="text-white hover:underline">Fridge Repair Madurai</Link>
            <Link href="/fridge-repair-dindigul" className="text-white hover:underline">Fridge Repair Dindigul</Link>
            <Link href="/ac-repair-theni" className="text-white hover:underline">AC Repair Theni</Link>
            <Link href="/washing-machine-repair-theni" className="text-white hover:underline">Washing Machine Repair Theni</Link>
          </p>
          <p className="mt-2.5">© 2026 A S SERVICE · Theni, Tamil Nadu</p>
        </div>
      </footer>

      {/* ============ STICKY MOBILE CALL BAR ============ */}
      <div className="fixed bottom-0 inset-x-0 z-50 flex md:hidden">
        <a href={`tel:${PHONE}`} className="flex-1 bg-[#1fa14b] text-white text-center font-extrabold py-4">
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need fridge repair in Theni`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}