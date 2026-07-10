import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "+91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "Washing Machine Repair in Theni | Same Day Doorstep Service",
  description:
    "Washing machine repair in Theni – front load, top load & semi-automatic. Not spinning, not draining, motor & PCB faults fixed at your home. LG, Samsung, IFB & all brands. Call A S SERVICE.",
  keywords: [
    "washing machine repair theni",
    "washing machine service theni",
    "lg washing machine service theni",
    "samsung washing machine service theni",
    "ifb washing machine service theni",
    "front load washing machine repair theni",
  ],
  alternates: { canonical: "/washing-machine-repair-theni" },

  openGraph: {
  title: "Washing Machine Repair in Theni | Doorstep Service",
  description:
    "Professional washing machine repair in Theni. Fully automatic, semi automatic, front load and top load service.",
  url: "https://yourdomain.com/washing-machine-repair-theni",
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
      name: "How much does washing machine repair cost in Theni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Washing machine repairs in Theni start from around ₹400 depending on the fault. Our technician inspects the machine free at your home and gives the full price before starting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair front load washing machines in Theni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair front load, top load and semi-automatic machines of all brands — LG, Samsung, IFB, Whirlpool, Bosch and more.",
      },
    },
    {
      "@type": "Question",
      name: "My washing machine is not spinning. Can you fix it at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases yes. Spin problems are usually caused by a worn belt, faulty motor, door lock or clogged drain — all of which we repair at your doorstep in Theni the same day.",
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
      name: "Washing Machine Repair",
      item: "https://mechanic-frontend-smoky.vercel.app/washing-mechine-repair-theni",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "theni",
      item: "https://mechanic-frontend-smoky.vercel.app/washing-mechine-repair-theni",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Washing Machine Repair Service in Theni",
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
  serviceType: "Washing Machine Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/washing-machine-repair-theni",
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
  { title: "Not Spinning / Not Draining", desc: "Worn belts, blocked drain pumps, faulty door locks and motor issues — the most common faults, fixed at your home." },
  { title: "Front Load Repair", desc: "Drum noise, door seal leaks, error codes and PCB faults on front load machines of every brand." },
  { title: "Top Load & Semi-Automatic", desc: "Pulsator problems, timer faults, water inlet issues and spin tub repairs for top load and semi-automatic models." },
  { title: "Motor & PCB Repair", desc: "Burnt motors rewound or replaced, and control board faults diagnosed and repaired — with genuine parts." },
  { title: "Installation & Demo", desc: "New machine installation with inlet/outlet fitting, levelling, and a demo so you know every function." },
  { title: "General Service", desc: "Full internal cleaning — drum, filter and drain — removes detergent build-up, smells and improves wash quality." },
];

const brands = ["LG", "Samsung", "IFB", "Whirlpool", "Bosch", "Godrej", "Haier", "Panasonic", "Onida", "Lloyd", "Videocon"];

const areas = ["Theni Allinagaram", "Periyakulam", "Bodinayakanur", "Cumbum", "Chinnamanur", "Andipatti", "Veerapandi", "Devaram"];

const steps = [
  { title: "Call or WhatsApp", desc: "Tell us the machine type, brand and problem." },
  { title: "Technician Visits", desc: "Same-day doorstep visit anywhere in Theni." },
  { title: "Upfront Quote", desc: "Free inspection, exact price before any work." },
  { title: "Repair & Warranty", desc: "Fixed on the spot in most cases, with warranty." },
];

const faqs = [
  { q: "How much does washing machine repair cost in Theni?", a: "Most repairs start from ₹400 depending on the fault and spare parts needed. The technician checks the machine free at your home and tells you the exact cost before starting — no hidden charges." },
  { q: "My machine is not draining water. What's the reason?", a: "Usually a clogged drain filter, blocked drain pipe or a failed drain pump. It's one of the most common calls we get in Theni, and in most cases it's fixed within one visit." },
  { q: "Do you repair front load machines at home, or take them to a shop?", a: "Almost all front load repairs — including drum, motor and PCB work — are done at your home. Only in rare cases does a machine need workshop repair, and we tell you before taking it." },
  { q: "Which brands do you service?", a: "LG, Samsung, IFB, Whirlpool, Bosch, Godrej, Haier, Panasonic and all other major brands, both old and new models." },
  { q: "Is the repair covered by warranty?", a: "Yes — every repair comes with a service warranty. If the same fault returns within the period, we fix it again at no charge." },
];

export default function WashingMachineRepairTheniPage() {
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
              <li className="font-bold text-[#14303c]">Washing Machine Repair Theni</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Theni
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            Washing Machine Repair in <span className="text-[#0e7c9c]">Theni</span> — Same Day Doorstep Visit
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            Front load, top load or semi-automatic — if your washing machine is not spinning, not draining, leaking or making noise, our technicians repair it at your home in Theni, usually in a single visit.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need washing machine repair in Theni`}
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
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our Washing Machine Services in Theni</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          Whatever has gone wrong with your machine, we diagnose it at your doorstep, quote before we start, and finish most repairs the same day.
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
        <p className="text-[#3c5560] mb-6">From old semi-automatics to the newest inverter front loads:</p>
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
          <p className="text-[#3c5560] mb-6">Doorstep washing machine repair across Theni and nearby towns:</p>
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
            Washing Machine Trouble in Theni? We&apos;re One Call Away.
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
            <Link href="/washing-machine-repair-madurai" className="text-white hover:underline">Washing Machine Repair Madurai</Link>
            <Link href="/washing-machine-repair-dindigul" className="text-white hover:underline">Washing Machine Repair Dindigul</Link>
            <Link href="/ac-repair-theni" className="text-white hover:underline">AC Repair Theni</Link>
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
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need washing machine repair in Theni`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}