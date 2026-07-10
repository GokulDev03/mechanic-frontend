import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "+91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "AC Repair & Service in Theni | Same Day Doorstep Service",
  description:
    "Professional AC repair in Theni – installation, gas filling, cooling issue repair for LG, Samsung, Voltas & all brands. Same-day doorstep service. Call A S SERVICE now.",
  keywords: [
    "ac repair theni",
    "ac service theni",
    "voltas ac service theni",
    "lg ac service theni contact number",
    "samsung ac service theni",
    "best ac service in theni",
  ],
  alternates: { canonical: "/ac-repair-theni" },

  openGraph: {
  title: "AC Repair & Service in Theni",
  description:
    "Professional AC Repair Service in Theni.",
  url: "https://mechanic-frontend-smoky.vercel.app/ac-repair-theni",
  siteName: "A S SERVICE",
  locale: "en_IN",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "AC Repair & Service in Theni",
  description: "Professional AC Repair in Theni",
},
robots: {
  index: true,
  follow: true,
},

};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does AC repair cost in Theni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AC repair in Theni starts from ₹500 depending on the issue. We give an upfront quote after free inspection, before starting any work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide doorstep AC service in Theni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide same-day doorstep AC repair across Theni, Periyakulam, Bodinayakanur, Cumbum and nearby areas.",
      },
    },
    {
      "@type": "Question",
      name: "Which AC brands do you repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We repair LG, Samsung, Daikin, Voltas, Blue Star, Panasonic, Hitachi and all major brands, including inverter split ACs.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my AC not cooling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common causes are dirty filters, low refrigerant gas, or a faulty capacitor or compressor. Our technician diagnoses the exact cause at your home in Theni.",
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
      name: "AC Service",
      item: "https://mechanic-frontend-smoky.vercel.app/ac-repair-theni",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Theni",
      item: "https://mechanic-frontend-smoky.vercel.app/ac-repair-theni",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Repair Service in Theni",
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
  serviceType: "Air Conditioner Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/ac-repair-theni",
};
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A S SERVICE",
  // image: "https://yourdomain.com/logo.png",
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
    "Madurai",
    "Dindigul"
  ]
};
const services = [
  { title: "AC Repair", desc: "Not cooling, water dripping, unusual noise, remote or PCB problems — split and window AC repair for all models." },
  { title: "AC Gas Filling", desc: "R22, R32 and R410A gas top-up and full refilling with leak testing, so the gas doesn't escape again in a month." },
  { title: "AC Service & Cleaning", desc: "Foam jet / deep cleaning of indoor and outdoor units. Improves cooling and reduces your electricity bill." },
  { title: "Installation & Uninstallation", desc: "New AC installation with copper piping, or safe removal and re-installation when you shift house." },
  { title: "Inverter AC Specialists", desc: "PCB-level diagnosis and repair for inverter split ACs — a job many local shops cannot handle." },
  { title: "AMC Plans", desc: "Annual maintenance contracts for homes, shops and offices — periodic servicing so your AC survives the summer." },
];

const brands = ["LG", "Samsung", "Voltas", "Daikin", "Blue Star", "Hitachi", "Panasonic", "Carrier", "O'General", "Lloyd", "Haier", "Whirlpool"];

const areas = ["Theni Allinagaram", "Periyakulam", "Bodinayakanur", "Cumbum", "Chinnamanur", "Andipatti", "Veerapandi", "Devaram"];

const steps = [
  { title: "Call or WhatsApp", desc: "Tell us the problem and your location in Theni." },
  { title: "Technician Visits", desc: "Same-day doorstep visit and free inspection of your AC." },
  { title: "Upfront Quote", desc: "We tell you the exact cost before starting any work." },
  { title: "Repair & Warranty", desc: "Job done on the spot, with warranty on the service." },
];

const faqs = [
  { q: "How much does AC service cost in Theni?", a: "General AC service typically starts from ₹399–₹599 depending on the type of unit (split/window). Gas filling and repairs are quoted after free inspection — you approve the price before we start." },
  { q: "Do you provide same-day AC repair in Theni?", a: "Yes. In most areas of Theni we can send a technician the same day, often within a few hours of your call." },
  { q: "Why is my AC not cooling properly?", a: "The most common reasons are dirty filters/coils, low refrigerant gas, or a faulty capacitor or compressor. Our technician diagnoses the exact cause at your home before any repair." },
  { q: "Do you repair inverter ACs?", a: "Yes, our technicians handle inverter split ACs of all brands, including PCB-level diagnosis and repair." },
  { q: "Is there a warranty on the repair?", a: "Yes — we provide a service warranty. If the same problem returns within that period, we fix it free of charge." },
];

export default function ACRepairTheniPage() {
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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-[#42606c]">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-[#0e7c9c]">Home</Link></li>
              <li>/</li>
              <li className="font-bold text-[#14303c]">AC Repair Theni</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Theni
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            AC Repair &amp; Service in <span className="text-[#0e7c9c]">Theni</span> — Same Day Doorstep Visit
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            Split AC, window AC and inverter AC repair by experienced technicians. Gas filling, installation, uninstallation and annual maintenance for all brands — at your home or office in Theni.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need AC service in Theni`}
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
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our AC Services in Theni</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          Whatever the problem — cooling issues, water leakage, strange noise or a complete breakdown — our technicians diagnose it at your doorstep and fix it on the spot in most cases.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-[#cfe2e9] rounded-2xl p-5.5 p-6">
              <h3 className="text-[1.05rem] font-bold text-[#0a5a72] mb-1.5">{s.title}</h3>
              <p className="text-sm text-[#42606c] leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ BRANDS ============ */}
      <section className="max-w-5xl mx-auto px-5 pb-11">
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">All Brands, All Models</h2>
        <p className="text-[#3c5560] mb-6">Our technicians are experienced with every major AC brand sold in Tamil Nadu:</p>
        <div className="flex flex-wrap gap-2.5">
          {brands.map((b) => (
            <span key={b} className="bg-white border border-[#cfe2e9] rounded-full px-4.5 px-5 py-2 text-sm font-semibold">{b}</span>
          ))}
        </div>
      </section>

      {/* ============ AREAS ============ */}
      <section className="bg-[#e2eff4] border-y border-[#cfe2e9]">
        <div className="max-w-5xl mx-auto px-5 py-11">
          <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Areas We Cover in Theni District</h2>
          <p className="text-[#3c5560] mb-6">Doorstep AC service across Theni and nearby towns:</p>
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
            AC Trouble in Theni? We&apos;re One Call Away.
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
            <Link href="/ac-repair-madurai" className="text-white hover:underline">AC Repair Madurai</Link>
            <Link href="/ac-repair-dindigul" className="text-white hover:underline">AC Repair Dindigul</Link>
            <Link href="/washing-machine-repair-theni" className="text-white hover:underline">Washing Machine Repair Theni</Link>
            <Link href="/fridge-repair-theni" className="text-white hover:underline">Fridge Repair Theni</Link>
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
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need AC service in Theni`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}