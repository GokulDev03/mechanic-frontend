import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "+91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "Fridge Repair in Dindigul | Refrigerator Service at Your Doorstep",
  description:
    "Fridge repair in Dindigul & Palani – cooling problems, gas filling, compressor & thermostat faults fixed at home. Single door, double door & side-by-side refrigerator service for all brands.",
  keywords: [
    "fridge repair dindigul",
    "refrigerator service dindigul",
    "fridge service dindigul",
    "refrigerator repair dindigul",
    "samsung refrigerator service dindigul",
    "lg fridge service dindigul",
    "fridge repair palani",
  ],
  alternates: { canonical: "/fridge-repair-dindigul" },
  openGraph: {
  title: "Fridge Repair in dindigul | Refrigerator Service at Your Doorstep",
  description:
    "Professional fridge repair in dindigul. Gas filling, compressor repair, thermostat replacement and doorstep refrigerator service.",
  url: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-dindigul",
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
      name: "How much does fridge repair cost in Dindigul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small refrigerator repairs in Dindigul begin around ₹400–₹600, gas filling is generally ₹1200–₹2500, and compressor work is priced after inspection. You approve the full quote before repair starts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair fridges in Palani and nearby towns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — besides Dindigul town, our technicians visit Palani, Oddanchatram, Batlagundu, Nilakottai and other nearby towns for doorstep refrigerator repair.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my fridge make a loud noise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Loud humming or rattling usually points to the compressor, condenser fan or an unlevel installation. It's worth checking early — a struggling compressor draws extra power and can fail completely.",
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
      name: "Fridge Repair",
      item: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-dindigul",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "dindigul",
      item: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-dindigul",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fridge & Refrigerator Repair Service in Dindigul",
  provider: {
    "@type": "LocalBusiness",
    name: "A S SERVICE",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dindigul",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  areaServed: ["Dindigul", "Palani", "Oddanchatram", "Batlagundu", "Nilakottai", "Natham", "Vedasandur"],
  serviceType: "Refrigerator Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/fridge-repair-dindigul",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A S SERVICE",
  url: "https://yourdomain.com",
  telephone: "+918807086727",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dindigul",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: [
    "Dindigul",
    "Palani",
    "Oddanchatram",
    "Nilakottai",
    "Vedasandur"
  ]
};

const services = [
  { title: "Fridge Not Cooling", desc: "Whether it's a gas leak, relay fault or defrost failure, we trace the cause at your home in Dindigul and repair it there." },
  { title: "Gas Filling & Leak Repair", desc: "Leak detection before every gas charge — the honest way to do it, so the cooling holds for years, not weeks." },
  { title: "Compressor Repair", desc: "Compressor humming, clicking or silent? Relay, capacitor and full compressor replacement using genuine parts." },
  { title: "Double Door & Side-by-Side", desc: "Frost-free faults — defrost heaters, timers, fan motors and dampers — on double door and side-by-side refrigerators." },
  { title: "Door Gasket & Water Leakage", desc: "Worn-out door seals and water pooling inside the fridge or on your floor — quick, inexpensive fixes that save power." },
  { title: "Inverter Fridge Repair", desc: "Modern inverter refrigerators need board-level skills — our technicians diagnose and repair PCB faults on all brands." },
];

const brands = ["LG", "Samsung", "Whirlpool", "Godrej", "Haier", "Bosch", "Panasonic", "Hitachi", "Voltas Beko", "Kelvinator", "Videocon"];

const areas = ["Dindigul Town", "Palani", "Oddanchatram", "Batlagundu", "Nilakottai", "Natham", "Vedasandur", "Chinnalapatti", "Sanarpatti", "Athoor"];

const steps = [
  { title: "Call or WhatsApp", desc: "Share the fridge brand, type and what's happening." },
  { title: "Technician Visits", desc: "Same-day home visit in Dindigul and nearby towns." },
  { title: "Upfront Quote", desc: "Free check first, complete price before repair." },
  { title: "Repair & Warranty", desc: "Fixed at your doorstep, with service warranty." },
];

const faqs = [
  { q: "How much does fridge repair cost in Dindigul?", a: "Small repairs like relays and thermostats start around ₹400–₹600. Gas filling generally falls between ₹1200–₹2500 based on fridge size. Bigger jobs like compressors are quoted after the free home inspection." },
  { q: "Do you cover Palani and Oddanchatram for fridge repair?", a: "Yes. Doorstep refrigerator service runs across Dindigul town plus Palani, Oddanchatram, Batlagundu, Nilakottai, Natham and surrounding areas." },
  { q: "There's water collecting inside my fridge. Is it serious?", a: "Usually it's a blocked defrost drain — a small, inexpensive fix. But left alone, that water can reach electrical parts, so it's worth repairing early." },
  { q: "My fridge trips the power / MCB. What could it be?", a: "Tripping usually means a shorted compressor winding, a faulty relay or damaged wiring. Stop using the fridge and call us — this one needs a technician's check before running it again." },
  { q: "Do refrigerator repairs come with warranty?", a: "Yes, every repair includes a service warranty. If the same problem returns within the warranty period, the revisit and fix are free." },
];

export default function FridgeRepairDindigulPage() {
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
              <li className="font-bold text-[#14303c]">Fridge Repair Dindigul</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Dindigul
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            Fridge Repair in <span className="text-[#0e7c9c]">Dindigul</span> — Refrigerator Service at Your Doorstep
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            From Dindigul town to Palani — our technicians repair single door, double door, side-by-side and inverter refrigerators at your home. Gas filling, compressor faults, thermostat problems and more, usually in one visit.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need fridge repair in Dindigul`}
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
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our Refrigerator Services in Dindigul</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          Every repair starts with a free doorstep diagnosis and a clear price. Genuine parts, honest advice — including telling you when a repair isn&apos;t worth it.
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
        <p className="text-[#3c5560] mb-6">Old Kelvinator or brand-new inverter Samsung — we repair them all:</p>
        <div className="flex flex-wrap gap-2.5">
          {brands.map((b) => (
            <span key={b} className="bg-white border border-[#cfe2e9] rounded-full px-5 py-2 text-sm font-semibold">{b}</span>
          ))}
        </div>
      </section>

      {/* ============ AREAS ============ */}
      <section className="bg-[#e2eff4] border-y border-[#cfe2e9]">
        <div className="max-w-5xl mx-auto px-5 py-11">
          <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Areas We Cover in Dindigul District</h2>
          <p className="text-[#3c5560] mb-6">Doorstep fridge repair across Dindigul and nearby towns:</p>
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
            Fridge Trouble in Dindigul? We&apos;re One Call Away.
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
            <Link href="/fridge-repair-madurai" className="text-white hover:underline">Fridge Repair Madurai</Link>
            <Link href="/ac-repair-dindigul" className="text-white hover:underline">AC Repair Dindigul</Link>
            <Link href="/washing-machine-repair-dindigul" className="text-white hover:underline">Washing Machine Repair Dindigul</Link>
          </p>
          <p className="mt-2.5">© 2026 A S SERVICE · Dindigul, Tamil Nadu</p>
        </div>
      </footer>

      {/* ============ STICKY MOBILE CALL BAR ============ */}
      <div className="fixed bottom-0 inset-x-0 z-50 flex md:hidden">
        <a href={`tel:${PHONE}`} className="flex-1 bg-[#1fa14b] text-white text-center font-extrabold py-4">
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need fridge repair in Dindigul`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}