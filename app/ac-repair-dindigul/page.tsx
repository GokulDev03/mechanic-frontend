import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "++91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "AC Repair & Service in Dindigul | Same Day Doorstep Service",
  description:
    "Trusted AC repair in Dindigul – cooling repair, gas filling, installation & AMC for LG, Samsung, Voltas and all brands. Doorstep service in Dindigul, Palani & nearby. Call A S SERVICE.",
  keywords: [
    "ac repair dindigul",
    "ac service dindigul",
    "voltas ac service dindigul",
    "lg ac service dindigul contact number",
    "samsung ac service dindigul",
    "best ac service in dindigul",
    "ac service palani",
  ],
  alternates: { canonical: "/ac-repair-dindigul" },
   openGraph: {
  title: "AC Repair & Service in dindigul",
  description:
    "Professional AC Repair Service in dindigul.",
  url: "https://mechanic-frontend-smoky.vercel.app/ac-repair-dindigul",
  siteName: "A S SERVICE",
  locale: "en_IN",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "AC Repair & Service in dindigul",
  description: "Professional AC Repair in dindigul",
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
      name: "What is the cost of AC repair in Dindigul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Repair charges in Dindigul begin at roughly ₹500, based on the fault. Our technician inspects the unit free of cost at your home and quotes the full price before touching anything.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer home visit AC service in Dindigul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle same-day home visits throughout Dindigul town and nearby areas including Palani, Oddanchatram, Batlagundu and Nilakottai.",
      },
    },
    {
      "@type": "Question",
      name: "Which brands of AC do you repair in Dindigul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of them — LG, Samsung, Voltas, Daikin, Blue Star, Hitachi, Panasonic, Carrier, Lloyd and more, including inverter split AC models.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I service my AC in Dindigul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Tamil Nadu conditions we recommend servicing twice a year — once before summer and once after. Regular cleaning keeps cooling strong and prevents costly gas leaks and compressor damage.",
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
      item: "https://mechanic-frontend-smoky.vercel.app/ac-repair-dindigul",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "dindigul",
      item: "https://mechanic-frontend-smoky.vercel.app/ac-repair-dindigul",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Repair Service in Dindigul",
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
  serviceType: "Air Conditioner Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/ac-repair-dindigul",
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
    addressLocality: "dindigul",
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
  { title: "AC Repair", desc: "From poor cooling and leaks to strange sounds and dead units — split and window AC faults fixed for every model." },
  { title: "AC Gas Filling", desc: "Proper R22, R32 and R410A refilling in Dindigul, always with a leak check first so the new gas actually stays in." },
  { title: "AC Service & Cleaning", desc: "Thorough foam-wash servicing of indoor and outdoor units — cooler rooms and a lighter electricity bill." },
  { title: "Installation & Uninstallation", desc: "Neat new installations with quality copper piping, and careful shifting service when you change homes." },
  { title: "Inverter AC Specialists", desc: "Inverter split AC troubles? We do the board-level fault-finding and repair that ordinary shops avoid." },
  { title: "AMC Plans", desc: "Affordable yearly maintenance packages for houses, shops and offices across Dindigul district." },
];

const brands = ["LG", "Samsung", "Voltas", "Daikin", "Blue Star", "Hitachi", "Panasonic", "Carrier", "O'General", "Lloyd", "Haier", "Whirlpool"];

const areas = ["Dindigul Town", "Palani", "Oddanchatram", "Batlagundu", "Nilakottai", "Natham", "Vedasandur", "Chinnalapatti", "Sanarpatti", "Athoor"];

const steps = [
  { title: "Call or WhatsApp", desc: "Tell us what's wrong and where you are in Dindigul." },
  { title: "Technician Visits", desc: "Same-day home visit with a free check-up of your AC." },
  { title: "Upfront Quote", desc: "Full price shared before work starts — you decide." },
  { title: "Repair & Warranty", desc: "Fixed on the spot in most cases, covered by warranty." },
];

const faqs = [
  { q: "What does AC service cost in Dindigul?", a: "A standard service is usually in the ₹399–₹599 range depending on split or window type. For repairs and gas filling, the technician inspects free at your home and quotes before starting — you only pay what you approved." },
  { q: "Do you cover Palani and Oddanchatram too?", a: "Yes. Besides Dindigul town, we serve Palani, Oddanchatram, Batlagundu, Nilakottai, Natham and other nearby towns with doorstep visits." },
  { q: "How often should I get my AC serviced?", a: "Twice a year is ideal for our climate — once before summer starts and once after. It keeps cooling strong, saves electricity, and catches small problems before they become compressor failures." },
  { q: "Can you fix inverter split ACs?", a: "Yes — including PCB and board-level faults on inverter models of all brands, which many local repair shops don't take up." },
  { q: "Is your repair work covered by warranty?", a: "Every repair comes with a service warranty. If the same fault reappears within the warranty period, we return and set it right free of charge." },
];

export default function ACRepairDindigulPage() {
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
              <li className="font-bold text-[#14303c]">AC Repair Dindigul</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Dindigul
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            AC Repair &amp; Service in <span className="text-[#0e7c9c]">Dindigul</span> — Same Day Doorstep Visit
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            Trusted AC technicians for Dindigul, Palani and nearby towns. We handle repairs, gas filling, servicing, installation and yearly maintenance for split, window and inverter ACs — right at your doorstep.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need AC service in Dindigul`}
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
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our AC Services in Dindigul</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          One technician visit covers it all — honest fault-finding, a clear price, and in most cases the repair completed the very same day at your home.
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
        <p className="text-[#3c5560] mb-6">Every major AC brand sold in Tamil Nadu is familiar territory for our team:</p>
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
          <p className="text-[#3c5560] mb-6">Doorstep AC repair across Dindigul town and surrounding areas:</p>
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
            AC Trouble in Dindigul? We&apos;re One Call Away.
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
            <Link href="/ac-repair-madurai" className="text-white hover:underline">AC Repair Madurai</Link>
            <Link href="/washing-machine-repair-dindigul" className="text-white hover:underline">Washing Machine Repair Dindigul</Link>
            <Link href="/fridge-repair-dindigul" className="text-white hover:underline">Fridge Repair Dindigul</Link>
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
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need AC service in Dindigul`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}