import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "+91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "Washing Machine Repair in Madurai | Same Day Doorstep Service",
  description:
    "Expert washing machine repair in Madurai – front load, top load & semi-automatic. Drum, motor, PCB & drainage faults fixed at home. LG, Samsung, IFB, Whirlpool & all brands. Call A S SERVICE.",
  keywords: [
    "washing machine repair madurai",
    "washing machine service madurai",
    "lg washing machine service madurai",
    "samsung washing machine service madurai",
    "ifb washing machine service centre madurai",
    "front load washing machine repair madurai",
  ],
  alternates: { canonical: "/washing-machine-repair-madurai" },
  openGraph: {
  title: "Washing Machine Repair in madurai | Doorstep Service",
  description:
    "Professional washing machine repair in madurai. Fully automatic, semi automatic, front load and top load service.",
  url: "https://yourdomain.com/washing-machine-repair-madurai",
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
      name: "What is the washing machine repair cost in Madurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Madurai, repairs typically begin around ₹400, with the final price depending on the fault and spare parts. You get a free doorstep inspection and the full quote before any work starts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide same-day washing machine service in Madurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — across most of Madurai city, including Anna Nagar, KK Nagar and Thirunagar, a technician can usually reach your home the same day you call.",
      },
    },
    {
      "@type": "Question",
      name: "Can front load washing machines be repaired at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Drum, motor, door seal and even PCB repairs on front load machines are done at your home in Madurai. Workshop repair is needed only in rare cases, and we inform you first.",
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
      name: "Washing Machine Repair Madurai",
      item: "https://mechanic-frontend-smoky.vercel.app/washing-machine-repair-madurai",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Washing Machine Repair Service in Madurai",
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
  serviceType: "Washing Machine Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/washing-machine-repair-madurai",
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
  { title: "Not Spinning / Not Draining", desc: "Blocked filters, dead drain pumps, snapped belts and door lock faults — diagnosed and repaired in one home visit." },
  { title: "Front Load Repair", desc: "Error codes, drum bearing noise, leaking door gaskets and control board issues on every front load brand." },
  { title: "Top Load & Semi-Automatic", desc: "Spin tub not working, pulsator damage, timer and water inlet problems on top load and semi-automatic machines." },
  { title: "Motor & PCB Repair", desc: "Motor rewinding or replacement and board-level PCB repair using genuine spares — not cheap duplicates." },
  { title: "Installation & Demo", desc: "Proper installation of your new machine — water connections, levelling and a full demo of all wash programs." },
  { title: "General Service", desc: "Deep cleaning of drum, filters and drain lines to remove detergent scale, bad smells and grey stains on clothes." },
];

const brands = ["LG", "Samsung", "IFB", "Whirlpool", "Bosch", "Godrej", "Haier", "Panasonic", "Onida", "Lloyd", "Videocon"];

const areas = ["Anna Nagar", "KK Nagar", "Thirunagar", "Villapuram", "Mattuthavani", "Goripalayam", "Simmakkal", "Iyer Bungalow", "Thiruparankundram", "Othakadai", "Avaniyapuram", "Pasumalai"];

const steps = [
  { title: "Call or WhatsApp", desc: "Share the brand, model type and what's going wrong." },
  { title: "Technician Visits", desc: "Doorstep visit the same day across Madurai city." },
  { title: "Upfront Quote", desc: "Free check-up, then the exact price for your approval." },
  { title: "Repair & Warranty", desc: "Most faults fixed in one visit, backed by warranty." },
];

const faqs = [
  { q: "What does washing machine repair cost in Madurai?", a: "Repairs generally start around ₹400. The final amount depends on the fault and any spare parts needed — you'll know the full price after the free inspection, before we begin." },
  { q: "Water is not draining from my machine. Is it a big repair?", a: "Usually not. Nine times out of ten it's a clogged drain filter or a failed drain pump — both fixable at your home in Madurai in a single visit." },
  { q: "My front load machine shows an error code. Can you fix it?", a: "Yes. Error codes point to specific faults — door lock, drainage, motor, sensor or PCB. Our technicians read the code, confirm the fault and repair it at your doorstep." },
  { q: "Do you use original spare parts?", a: "Yes, we fit genuine spares for LG, Samsung, IFB, Whirlpool, Bosch and other brands. Cheap duplicate parts fail quickly, so we avoid them." },
  { q: "What if the problem comes back after repair?", a: "Every job carries a service warranty. If the same fault repeats within the warranty period, we return and fix it free." },
];

export default function WashingMachineRepairMaduraiPage() {
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
              <li className="font-bold text-[#14303c]">Washing Machine Repair Madurai</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Madurai
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            Washing Machine Repair in <span className="text-[#0e7c9c]">Madurai</span> — Same Day Doorstep Visit
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            A pile of clothes and a dead machine is not a combination anyone wants. Our Madurai technicians repair front load, top load and semi-automatic machines at your home — most faults sorted in a single visit.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need washing machine repair in Madurai`}
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
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our Washing Machine Services in Madurai</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          One technician, one visit — honest diagnosis at your doorstep, a clear price before work begins, and genuine spare parts on every repair.
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
        <p className="text-[#3c5560] mb-6">Old semi-automatic or brand-new inverter front load — we handle them all:</p>
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
          <p className="text-[#3c5560] mb-6">Doorstep washing machine repair across Madurai city and surrounding localities:</p>
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
            Washing Machine Trouble in Madurai? We&apos;re One Call Away.
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
            <Link href="/washing-machine-repair-theni" className="text-white hover:underline">Washing Machine Repair Theni</Link>
            <Link href="/washing-machine-repair-dindigul" className="text-white hover:underline">Washing Machine Repair Dindigul</Link>
            <Link href="/ac-repair-madurai" className="text-white hover:underline">AC Repair Madurai</Link>
            <Link href="/fridge-repair-madurai" className="text-white hover:underline">Fridge Repair Madurai</Link>
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
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need washing machine repair in Madurai`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}