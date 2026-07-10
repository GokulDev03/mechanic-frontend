import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "+91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "AC Repair & Service in Madurai | Same Day Doorstep Service",
  description:
    "Expert AC repair in Madurai – gas filling, installation, cooling issue repair for LG, Samsung, Voltas & all brands. Same-day doorstep visit across Madurai. Call A S SERVICE.",
  keywords: [
    "ac repair madurai",
    "ac service madurai",
    "voltas ac service madurai",
    "lg ac service madurai contact number",
    "samsung ac service madurai",
    "best ac service in madurai",
  ],
   openGraph: {
  title: "AC Repair & Service in madurai",
  description:
    "Professional AC Repair Service in madurai.",
  url: "https://mechanic-frontend-smoky.vercel.app/ac-repair-madurai",
  siteName: "A S SERVICE",
  locale: "en_IN",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "AC Repair & Service in madurai",
  description: "Professional AC Repair in madurai",
},
robots: {
  index: true,
  follow: true,
},

  alternates: { canonical: "/ac-repair-madurai" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does AC repair cost in Madurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Madurai, AC repairs start from around ₹500 depending on the fault. After a free inspection at your home, we give you the exact price — work begins only after you approve it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide doorstep AC service in Madurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our technicians make same-day doorstep visits across Madurai city — Anna Nagar, KK Nagar, Thirunagar, Villapuram and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "Which AC brands do you service in Madurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We service and repair LG, Samsung, Voltas, Daikin, Blue Star, Hitachi, Panasonic, Carrier and every other major brand, including inverter split ACs.",
      },
    },
    {
      "@type": "Question",
      name: "My AC is running but not cooling. What could be wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Madurai heat this is usually caused by clogged filters or coils, a refrigerant gas leak, or a weak capacitor or compressor. We identify the exact fault at your doorstep before quoting.",
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
      item: "https://mechanic-frontend-smoky.vercel.app/ac-repair-madurai",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Madurai",
      item: "https://mechanic-frontend-smoky.vercel.app/ac-repair-madurai",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Repair Service in Madurai",
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
  serviceType: "Air Conditioner Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/ac-repair-madurai",
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
    addressLocality: "madurai",
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
  { title: "AC Repair", desc: "Weak cooling, water leakage, error codes, remote or PCB faults — we repair split and window ACs of every model." },
  { title: "AC Gas Filling", desc: "R22, R32 and R410A refilling done properly, with leak detection first — so you don't pay for gas twice." },
  { title: "AC Service & Cleaning", desc: "Deep foam-jet cleaning of indoor and outdoor units to restore cooling power and cut your electricity bill." },
  { title: "Installation & Uninstallation", desc: "Professional installation with copper piping, plus careful removal and refitting when you move house." },
  { title: "Inverter AC Specialists", desc: "Board-level diagnosis and repair of inverter split ACs — work most roadside shops turn away." },
  { title: "AMC Plans", desc: "Yearly maintenance contracts for homes, shops and offices, so your AC never fails in peak Madurai summer." },
];

const brands = ["LG", "Samsung", "Voltas", "Daikin", "Blue Star", "Hitachi", "Panasonic", "Carrier", "O'General", "Lloyd", "Haier", "Whirlpool"];

const areas = ["Anna Nagar", "KK Nagar", "Thirunagar", "Villapuram", "Mattuthavani", "Goripalayam", "Simmakkal", "Iyer Bungalow", "Thiruparankundram", "Othakadai", "Avaniyapuram", "Pasumalai"];

const steps = [
  { title: "Call or WhatsApp", desc: "Describe the problem and share your location in Madurai." },
  { title: "Technician Visits", desc: "A technician reaches your doorstep the same day for free inspection." },
  { title: "Upfront Quote", desc: "You get the exact price before any work begins — no surprises." },
  { title: "Repair & Warranty", desc: "Most repairs finished on the spot, backed by a service warranty." },
];

const faqs = [
  { q: "How much does AC service cost in Madurai?", a: "A general AC service in Madurai typically runs ₹399–₹599 depending on whether it's a split or window unit and the cleaning method. Gas filling and repairs are priced after free inspection — you approve before we start." },
  { q: "Can you come today? I need same-day repair.", a: "In most parts of Madurai city, yes — we usually reach within a few hours of your call, especially in Anna Nagar, KK Nagar and central areas." },
  { q: "My AC is running but the room isn't getting cold. Why?", a: "The usual culprits are dirty filters or coils, low refrigerant gas, or a failing capacitor/compressor. Given Madurai's heat, filters clog faster than most people expect. We diagnose the exact cause at your home first." },
  { q: "Do you handle inverter ACs?", a: "Yes — our technicians do board-level diagnosis and repair on inverter split ACs of every brand." },
  { q: "What if the same problem comes back?", a: "Every repair carries a service warranty. If the same fault returns within the warranty period, we come back and fix it at no cost." },
];

export default function ACRepairMaduraiPage() {
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
              <li className="font-bold text-[#14303c]">AC Repair Madurai</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Madurai
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            AC Repair &amp; Service in <span className="text-[#0e7c9c]">Madurai</span> — Same Day Doorstep Visit
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            When your AC gives up in Madurai&apos;s heat, we don&apos;t make you wait. Experienced technicians for split, window and inverter ACs — repair, gas filling, installation and AMC — right at your home or office.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need AC service in Madurai`}
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
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our AC Services in Madurai</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          From a simple filter clean to a full compressor replacement — one visit, honest diagnosis, and most repairs completed the same day at your doorstep.
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
        <p className="text-[#3c5560] mb-6">Whatever brand is on your wall, our technicians have serviced it:</p>
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
          <p className="text-[#3c5560] mb-6">Doorstep AC repair across Madurai city and surrounding localities:</p>
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
            AC Trouble in Madurai? We&apos;re One Call Away.
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
            <Link href="/ac-repair-theni" className="text-white hover:underline">AC Repair Theni</Link>
            <Link href="/ac-repair-dindigul" className="text-white hover:underline">AC Repair Dindigul</Link>
            <Link href="/washing-machine-repair-madurai" className="text-white hover:underline">Washing Machine Repair Madurai</Link>
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
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need AC service in Madurai`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}