import type { Metadata } from "next";
import Link from "next/link";

// ================= CHANGE THESE 3 LINES ONLY =================
const PHONE = "+91 88070 86727";        // your phone number
const PHONE_DISPLAY = "+91 88070 86727"; // how it shows on the page
const WHATSAPP = "918807086727";     // WhatsApp number (no +)
// =============================================================

export const metadata: Metadata = {
  title: "Washing Machine Repair in Dindigul | Same Day Doorstep Service",
  description:
    "Washing machine repair in Dindigul & Palani – front load, top load, semi-automatic. Spin, drain, motor & PCB faults fixed at your home. LG, Samsung, IFB & all brands. Call A S SERVICE.",
  keywords: [
    "washing machine repair dindigul",
    "washing machine service dindigul",
    "lg washing machine service dindigul",
    "samsung washing machine service dindigul",
    "ifb washing machine service dindigul",
    "washing machine repair palani",
  ],
  alternates: { canonical: "/washing-machine-repair-dindigul" },
  openGraph: {
  title: "Washing Machine Repair in dindigul | Doorstep Service",
  description:
    "Professional washing machine repair in dindigul. Fully automatic, semi automatic, front load and top load service.",
  url: "https://yourdomain.com/washing-machine-repair-dindigul",
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
      name: "How much is washing machine repair in Dindigul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Charges begin near ₹400 in Dindigul, varying with the fault and parts required. The technician checks your machine free at home and confirms the total price before repair begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you service washing machines in Palani and Oddanchatram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — along with Dindigul town, we make doorstep visits to Palani, Oddanchatram, Batlagundu, Nilakottai and other nearby towns.",
      },
    },
    {
      "@type": "Question",
      name: "Which washing machine brands do you repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All major brands — LG, Samsung, IFB, Whirlpool, Bosch, Godrej, Haier, Panasonic and more, covering front load, top load and semi-automatic models.",
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
      name: "Washing Machine Repair Dindigul",
      item: "https://mechanic-frontend-smoky.vercel.app/washing-machine-repair-dindigul",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Washing Machine Repair Service in Dindigul",
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
  serviceType: "Washing Machine Repair",
  url: "https://mechanic-frontend-smoky.vercel.app/washing-machine-repair-dindigul",
};


const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A S SERVICE",
  url: "https://mechanic-frontend-smoky.vercel.app",
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
  { title: "Not Spinning / Not Draining", desc: "The classic complaints — jammed drain pumps, choked filters, worn belts and door lock faults, sorted at your home." },
  { title: "Front Load Repair", desc: "Front load acting up? We handle drum bearings, door gasket leaks, error codes and board faults on all brands." },
  { title: "Top Load & Semi-Automatic", desc: "Spin tub failures, pulsator wear, timer knobs and inlet valve troubles on top load and semi-automatic machines." },
  { title: "Motor & PCB Repair", desc: "From motor rewinding to control board repair — done with genuine parts so the fix actually lasts." },
  { title: "Installation & Demo", desc: "Bought a new machine in Dindigul? We install it properly — connections, levelling and a complete usage demo." },
  { title: "General Service", desc: "Drum and filter deep-clean that clears detergent build-up, musty smells and stains transferring to clothes." },
];

const brands = ["LG", "Samsung", "IFB", "Whirlpool", "Bosch", "Godrej", "Haier", "Panasonic", "Onida", "Lloyd", "Videocon"];

const areas = ["Dindigul Town", "Palani", "Oddanchatram", "Batlagundu", "Nilakottai", "Natham", "Vedasandur", "Chinnalapatti", "Sanarpatti", "Athoor"];

const steps = [
  { title: "Call or WhatsApp", desc: "Describe the machine and the problem you're facing." },
  { title: "Technician Visits", desc: "Same-day home visit in Dindigul and nearby towns." },
  { title: "Upfront Quote", desc: "Free inspection first, full price before any repair." },
  { title: "Repair & Warranty", desc: "Usually fixed in one visit, with service warranty." },
];

const faqs = [
  { q: "How much is washing machine repair in Dindigul?", a: "Charges start near ₹400 and vary with the fault and parts needed. After a free inspection at your home, you get the complete price — repair starts only after your approval." },
  { q: "Do you come to Palani and Oddanchatram?", a: "Yes. We regularly service Palani, Oddanchatram, Batlagundu, Nilakottai, Natham and other towns around Dindigul with doorstep visits." },
  { q: "My machine vibrates and moves during spin. Is that fixable?", a: "Yes — heavy vibration usually means worn suspension rods, damaged shock absorbers or an unbalanced installation. All are repairable at your home, and ignoring it damages the drum over time." },
  { q: "Do you repair old semi-automatic machines?", a: "Yes. Semi-automatic machines are often worth repairing — spin motors, timers and pulsators are affordable fixes compared to buying new." },
  { q: "What warranty do I get on the repair?", a: "A service warranty comes with every job. If the same fault shows up again within the warranty period, we repair it free of cost." },
];

export default function WashingMachineRepairDindigulPage() {
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
              <li className="font-bold text-[#14303c]">Washing Machine Repair Dindigul</li>
            </ol>
          </nav>

          <span className="inline-block bg-[#0e7c9c] text-white text-[0.72rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            Doorstep Service in Dindigul
          </span>

          <h1 className="text-3xl md:text-[2.7rem] font-extrabold tracking-tight leading-[1.15] max-w-2xl">
            Washing Machine Repair in <span className="text-[#0e7c9c]">Dindigul</span> — Same Day Doorstep Visit
          </h1>

          <p className="mt-4 max-w-xl text-[1.05rem] text-[#3c5560] leading-7">
            Serving Dindigul, Palani and surrounding towns — our technicians repair front load, top load and semi-automatic washing machines at your home, from simple drain blocks to motor and PCB faults.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-[#1fa14b] text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_rgba(31,161,75,0.35)]"
            >
              📞 Call for Free Inspection
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi, I need washing machine repair in Dindigul`}
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
        <h2 className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-2">Our Washing Machine Services in Dindigul</h2>
        <p className="text-[#3c5560] max-w-xl mb-6">
          Free doorstep diagnosis, a clear price before we touch anything, and genuine spare parts — that's how every repair works with us.
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
        <p className="text-[#3c5560] mb-6">Every washing machine brand in Tamil Nadu homes, old or new:</p>
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
          <p className="text-[#3c5560] mb-6">Doorstep washing machine repair across Dindigul and nearby towns:</p>
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
            Washing Machine Trouble in Dindigul? We&apos;re One Call Away.
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
            <Link href="/washing-machine-repair-madurai" className="text-white hover:underline">Washing Machine Repair Madurai</Link>
            <Link href="/ac-repair-dindigul" className="text-white hover:underline">AC Repair Dindigul</Link>
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
          href={`https://wa.me/${WHATSAPP}?text=Hi, I need washing machine repair in Dindigul`}
          className="flex-1 bg-[#075e54] text-white text-center font-extrabold py-4"
        >
          💬 WhatsApp
        </a>
      </div>
    </main>
  );
}