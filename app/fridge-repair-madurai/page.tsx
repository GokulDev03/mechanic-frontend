import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "+91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "Fridge Repair in Madurai | Refrigerator Service at Your Doorstep",
  description:
    "Refrigerator repair in Madurai – not cooling, gas filling, compressor & PCB faults fixed at home. Single door, double door & side-by-side fridge service for Samsung, LG, Whirlpool & all brands.",
  keywords: [
    "fridge repair madurai",
    "refrigerator service madurai",
    "fridge service madurai",
    "refrigerator repair madurai",
    "samsung refrigerator service madurai",
    "lg fridge service madurai",
    "fridge gas filling madurai",
  ],
  alternates: { canonical: "/fridge-repair-madurai" },
  openGraph: {
  title: "Fridge Repair in madurai | Refrigerator Service at Your Doorstep",
  description:
    "Professional fridge repair in madurai. Gas filling, compressor repair, thermostat replacement and doorstep refrigerator service.",
  url: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-madurai",
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
      name: "What is the cost of fridge repair in Madurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minor refrigerator repairs in Madurai start around ₹400–₹600, gas filling runs ₹1200–₹2500, and compressor work is quoted after inspection. The technician confirms the full price at your home before starting.",
      },
    },
    {
      "@type": "Question",
      name: "My refrigerator is not cooling but the light is on. What's wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the light works but cooling has stopped, the likely causes are a gas leak, a failed compressor relay, or a defrost system fault in frost-free models. We diagnose the exact cause at your doorstep in Madurai.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide same-day refrigerator service in Madurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — a fridge breakdown spoils food fast, so we prioritise same-day visits across Madurai city including Anna Nagar, KK Nagar, Thirunagar and nearby areas.",
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
      name: "Fridge Repair Madurai",
      item: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-madurai",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fridge & Refrigerator Repair Service in Madurai",
  provider: {
    "@type": "LocalBusiness",
    name: "A S SERVICE",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  areaServed: ["Madurai", "Anna Nagar", "KK Nagar", "Thirunagar", "Villapuram", "Thiruparankundram", "Othakadai"],
  serviceType: "Refrigerator Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-madurai",
};
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A S SERVICE",
  url: "https://mechanic-frontend-smoky.vercel.app",
  telephone: "+918807086727",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madurai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: [
    "Madurai",
    "Anna Nagar",
    "KK Nagar",
    "Tallakulam",
    "Melur",
    "Thiruparankundram"
  ]
};

const services = [
  { title: "Fridge Not Cooling", desc: "Light on but no cooling? Gas leaks, relay failures and defrost faults on frost-free models — found and fixed at home." },
  { title: "Gas Filling & Leak Repair", desc: "Refrigerant charging done right: leak test first, then filling — so you don't call us again next month for the same fridge." },
  { title: "Compressor Repair", desc: "Clicking sounds, tripping, or a compressor that won't start — relay, capacitor and compressor replacement with genuine spares." },
  { title: "Double Door & Side-by-Side", desc: "Freezer works but fridge section doesn't? Defrost timers, fan motors and damper faults on double door and side-by-side models." },
  { title: "Door Gasket & Water Leakage", desc: "Loose door seals and water collecting under the vegetable tray — quick repairs that stop cooling loss and higher power bills." },
  { title: "Inverter Fridge Repair", desc: "Board-level PCB diagnosis and repair on inverter refrigerators — Samsung Digital Inverter, LG Smart Inverter and others." },
];

const brands = ["LG", "Samsung", "Whirlpool", "Godrej", "Haier", "Bosch", "Panasonic", "Hitachi", "Voltas Beko", "Kelvinator", "Videocon"];

const areas = ["Anna Nagar", "KK Nagar", "Thirunagar", "Villapuram", "Mattuthavani", "Goripalayam", "Simmakkal", "Iyer Bungalow", "Thiruparankundram", "Othakadai", "Avaniyapuram", "Pasumalai"];

const steps = [
  { title: "Call or WhatsApp", desc: "Tell us the brand, door type and the symptom." },
  { title: "Technician Visits", desc: "Priority same-day visit across Madurai city." },
  { title: "Upfront Quote", desc: "Free diagnosis, then the exact price to approve." },
  { title: "Repair & Warranty", desc: "Repaired at home, with warranty on the work." },
];

const faqs = [
  { q: "What does fridge repair cost in Madurai?", a: "Minor repairs like thermostats and relays start around ₹400–₹600. Gas filling is typically ₹1200–₹2500 depending on fridge size. Compressor jobs cost more and are always quoted after free inspection at your home." },
  { q: "The freezer works but the bottom fridge section is warm. Why?", a: "That's a classic frost-free fault — usually a blocked air vent, failed defrost heater or damper problem. Common in double door models, and repairable at your home in Madurai." },
  { q: "How fast can you come? My food will spoil.", a: "We treat fridge calls as urgent. In most Madurai areas a technician reaches the same day, often within hours. Meanwhile, keep the doors closed — food stays safe for several hours that way." },
  { q: "Is it worth repairing an old refrigerator, or should I buy new?", a: "If the body and compressor are sound, repair is usually far cheaper than replacement. Our technician gives you an honest assessment — if a repair isn't worth the money, we'll say so." },
  { q: "Do you give warranty on refrigerator repairs?", a: "Yes — every repair comes with a service warranty. Same fault within the period? We return and fix it at no cost." },
];

export default function FridgeRepairMaduraiPage() {
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
              <li className="font-bold text-[#14303c]">Fridge Repair Madurai</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Madurai
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            Fridge Repair in <span className="text-[#0e7c9c]">Madurai</span> — Refrigerator Service at Your Doorstep
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            A warm fridge in Madurai weather means spoiled food by evening — so we move fast. Single door, double door, side-by-side and inverter refrigerators repaired at your home, from gas filling to compressor replacement.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need fridge repair in Madurai`}
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
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our Refrigerator Services in Madurai</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          Honest diagnosis at your doorstep, price approved by you before work begins, and genuine spare parts on every refrigerator repair.
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
        <p className="text-[#3c5560] mb-6">Whichever refrigerator is in your kitchen, we've repaired that brand before:</p>
        <div className="flex flex-wrap gap-2.5">
          {brands.map((b) => (
            <span key={b} className="bg-white border border-[#cfe2e9] rounded-full px-5 py-2 text-sm font-semibold">{b}</span>
          ))}
        </div>
      </section>

      {/* ============ AREAS ============ */}
      <section className="bg-[#e2eff4] border-y border-[#cfe2e9]">
        <div className="max-w-5xl mx-auto px-5 py-11">
          <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Areas We Cover in Madurai</h2>
          <p className="text-[#3c5560] mb-6">Doorstep fridge repair across Madurai city and surrounding localities:</p>
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
            Fridge Trouble in Madurai? We&apos;re One Call Away.
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
            <Link href="/fridge-repair-theni" className="text-white hover:underline">Fridge Repair Theni</Link>
            <Link href="/fridge-repair-dindigul" className="text-white hover:underline">Fridge Repair Dindigul</Link>
            <Link href="/ac-repair-madurai" className="text-white hover:underline">AC Repair Madurai</Link>
            <Link href="/washing-machine-repair-madurai" className="text-white hover:underline">Washing Machine Repair Madurai</Link>
          </p>
          <p className="mt-2.5">© 2026 A S SERVICE · Madurai, Tamil Nadu</p>
        </div>
      </footer>

      {/* ============ STICKY MOBILE CALL BAR ============ */}
      <div className="fixed bottom-0 inset-x-0 z-50 flex md:hidden">
        <a href={`tel:${PHONE}`} className="flex-1 bg-[#1fa14b] text-white text-center font-extrabold py-4">
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need fridge repair in Madurai`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}