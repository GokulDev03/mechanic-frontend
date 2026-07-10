'use client';
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield, Clock, Star, Award, ArrowRight, Phone, CheckCircle, Wrench,
  Users, MapPin, BadgeCheck, ChevronLeft, ChevronRight, ChevronDown, Zap,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { getServices } from '@/lib/api';
import ServiceCard from '@/components/ServiceCard';
import type { Service } from '@/types';

/* ═══════════════ Animation helpers (no library needed) ═══════════════ */

/** Fade-up reveal on scroll */
function Reveal({
  children, delay = 0, className = '',
}: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/** Count-up number when scrolled into view */
function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseInt(value.replace(/\D/g, ''), 10);
    const suffix = value.replace(/[\d,]/g, '');
    if (isNaN(num)) { setDisplay(value); return; }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(num * eased).toLocaleString('en-IN') + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}

/* ═══════════════ JSON-LD (unchanged) ═══════════════ */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does AC repair cost in Theni?", "acceptedAnswer": { "@type": "Answer", "text": "Our AC repair service starts from ₹500. The final cost depends on the issue and spare parts required." } },
    { "@type": "Question", "name": "Do you provide same-day home service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide same-day doorstep service in most areas of Theni." } },
    { "@type": "Question", "name": "Which appliances do you repair?", "acceptedAnswer": { "@type": "Answer", "text": "We repair AC, Refrigerator, Washing Machine and LED/Smart TV." } },
    { "@type": "Question", "name": "Do you provide service warranty?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide warranty on eligible repair services." } }
  ]
};

// const localBusinessJsonLd = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   "@id": "https://mechanic-frontend-smoky.vercel.app/#business",
//   "name": "A S SERVICE",
//   "image": "https://mechanic-frontend-smoky.vercel.app/public/logo3.png",
//   "url": "https://mechanic-frontend-smoky.vercel.app",
//   "telephone": "+91-9025649921",
//   "priceRange": "₹₹",
//   "address": { "@type": "PostalAddress", "addressLocality": "Theni", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
//   "areaServed": [
//     { "@type": "City", "name": "Theni" },
//     { "@type": "City", "name": "Madurai" },
//     { "@type": "City", "name": "Dindigul" }
//   ],
//   "openingHours": "Mo-Su 08:00-20:00",
//   "serviceArea": [
//     { "@type": "City", "name": "Theni" },
//     { "@type": "City", "name": "Madurai" },
//     { "@type": "City", "name": "Dindigul" }
//   ]
// };

// const organizationJsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "A S SERVICE",
//   "url": "https://mechanic-frontend-smoky.vercel.app",
//   "image": "https://mechanic-frontend-smoky.vercel.app/public/logo3.png",
//   "telephone": "+91 88070 86727"
// };

/* ═══════════════ Data ═══════════════ */

const testimonials = [
  { text: "Excellent AC repair service. The technician arrived on time, fixed the cooling problem quickly and charged a reasonable price.", name: "Rajesh Kumar", place: "Theni" },
  { text: "Very professional and affordable service. Highly recommend A S SERVICE!", name: "Priya Sharma", place: "Coimbatore" },
  { text: "Good service quality and polite technician. Will use again!", name: "Arun N", place: "Madurai" },
];

const brands = ['LG', 'Samsung', 'Voltas', 'Blue Star', 'Daikin', 'Whirlpool', 'Godrej', 'Haier', 'Panasonic', 'Sony'];

const faqs = [
  { q: 'How much does AC repair cost in Theni?', a: 'AC repair starts from ₹500 depending on the issue and spare parts.' },
  { q: 'Do you provide same-day home service?', a: 'Yes. Same-day doorstep service is available in most areas of Theni.' },
  { q: 'Which appliances do you repair?', a: 'We repair AC, Refrigerator, Washing Machine and LED/Smart TVs.' },
  { q: 'Do you provide service warranty?', a: 'Yes. Warranty is available on eligible repair services.' },
  { q: 'Do you provide AC service in Madurai?', a: 'Yes, we provide same-day doorstep AC service in Madurai for all brands including LG, Voltas, Samsung and Blue Star.' },
  { q: 'What is your AC service contact number?', a: 'You can reach us at +91 88070 86727 for AC service in Theni, Madurai and Dindigul.' },
];

const serviceLinks = [
  {
    city: 'Theni', color: 'amber',
    links: [
      { href: '/ac-repair-theni', label: 'AC Repair in Theni' },
      { href: '/fridge-repair-theni', label: 'Fridge Repair in Theni' },
      { href: '/washing-machine-repair-theni', label: 'Washing Machine Repair in Theni' },
    ],
  },
  {
    city: 'Madurai', color: 'blue',
    links: [
      { href: '/ac-repair-madurai', label: 'AC Repair in Madurai' },
      { href: '/fridge-repair-madurai', label: 'Fridge Repair in Madurai' },
      { href: '/washing-machine-repair-madurai', label: 'Washing Machine Repair in Madurai' },
    ],
  },
  {
    city: 'Dindigul', color: 'purple',
    links: [
      { href: '/ac-repair-dindigul', label: 'AC Repair in Dindigul' },
      { href: '/fridge-repair-dindigul', label: 'Fridge Repair in Dindigul' },
      { href: '/washing-machine-repair-dindigul', label: 'Washing Machine Repair in Dindigul' },
    ],
  },
];

/* ═══════════════ Page ═══════════════ */

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [services, setServices] = useState<Service[]>([]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    getServices().then((d: unknown) => setServices(d as Service[])).catch(() => { });
    const id = requestAnimationFrame(() => setHeroLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  /* Testimonial auto-rotate */
  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { value: '14+', label: t.stats.experience, Icon: Award },
    { value: '5000+', label: t.stats.customers, Icon: Users },
    { value: '6', label: t.stats.cities, Icon: MapPin },
    { value: '20+', label: t.stats.certified, Icon: BadgeCheck },
  ];

  const darkStats = [
    { value: '5000+', label: 'Happy Customers' },
    { value: '20+', label: 'Expert Technicians' },
    { value: '6+', label: 'Service Areas' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  const whyUs = [
    { Icon: Award, title: t.whyUs.certified, desc: t.whyUs.certifiedDesc, color: 'text-blue-600 bg-blue-100' },
    { Icon: Clock, title: t.whyUs.fast, desc: t.whyUs.fastDesc, color: 'text-amber-600 bg-amber-100' },
    { Icon: Shield, title: t.whyUs.warranty, desc: t.whyUs.warrantyDesc, color: 'text-green-600 bg-green-100' },
    { Icon: Star, title: t.whyUs.affordable, desc: t.whyUs.affordableDesc, color: 'text-purple-600 bg-purple-100' },
  ];

  const steps = [
    { n: '01', title: t.howItWorks.step1, desc: t.howItWorks.step1Desc },
    { n: '02', title: t.howItWorks.step2, desc: t.howItWorks.step2Desc },
    { n: '03', title: t.howItWorks.step3, desc: t.howItWorks.step3Desc },
    { n: '04', title: t.howItWorks.step4, desc: t.howItWorks.step4Desc },
  ];

  const fallbackServices: Service[] = [
    { name_en: t.services.ac, name_ta: t.services.ac, description_en: 'Complete AC service including cleaning, gas filling, and all repairs', description_ta: '', price_from: 500, price_to: 3000, icon: 'wind', id: 1, is_active: true, created_at: '' },
    { name_en: t.services.fridge, name_ta: t.services.fridge, description_en: 'All types of refrigerator repairs including cooling issues', description_ta: '', price_from: 400, price_to: 2500, icon: 'box', id: 2, is_active: true, created_at: '' },
    { name_en: t.services.washer, name_ta: t.services.washer, description_en: 'Washing machine repair for all brands, front and top load', description_ta: '', price_from: 350, price_to: 2000, icon: 'waves', id: 3, is_active: true, created_at: '' },
    { name_en: t.services.tv, name_ta: t.services.tv, description_en: 'TV repair for LED, LCD and Smart TVs of all brands', description_ta: '', price_from: 300, price_to: 2500, icon: 'tv', id: 4, is_active: true, created_at: '' },
  ];

  const displayServices = services.length > 0 ? services : fallbackServices;

  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  /* Hero entrance helper */
  const heroStyle = (delay: number): CSSProperties => ({
    opacity: heroLoaded ? 1 : 0,
    transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} /> */}
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} /> */}

      {/* ── Keyframes for this page ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatSlow { 0%,100% { transform: translateY(0) rotate(2deg); } 50% { transform: translateY(-12px) rotate(2deg); } }
        @keyframes floatMid  { 0%,100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-9px) rotate(-3deg); } }
        @keyframes floatFast { 0%,100% { transform: translateY(0) rotate(1deg); } 50% { transform: translateY(-14px) rotate(1deg); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(245,158,11,0.45); }
          70% { box-shadow: 0 0 0 14px rgba(245,158,11,0); }
          100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }
        }
        @keyframes blobDrift { 0%,100% { transform: translate(33%,-25%) scale(1); } 50% { transform: translate(28%,-20%) scale(1.06); } }
        .anim-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .anim-float-mid  { animation: floatMid 6s ease-in-out infinite; }
        .anim-float-fast { animation: floatFast 8s ease-in-out infinite; }
        .anim-marquee { animation: marquee 28s linear infinite; }
        .anim-marquee:hover { animation-play-state: paused; }
        .anim-pulse-ring { animation: pulseRing 2.4s ease-out infinite; }
        .anim-blob { animation: blobDrift 12s ease-in-out infinite; }
        .card-lift { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease; }
        .card-lift:hover { transform: translateY(-6px); box-shadow: 0 18px 40px -14px rgba(17,24,39,0.18); }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%);
          transform: translateX(-120%);
          transition: transform 0.6s ease;
        }
        .btn-shine:hover::after { transform: translateX(120%); }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(16px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-float-slow, .anim-float-mid, .anim-float-fast, .anim-marquee, .anim-pulse-ring, .anim-blob { animation: none; }
          .card-lift, .card-lift:hover { transform: none; transition: none; }
        }
      ` }} />

      <div>

        {/* ══════════ HERO ══════════ */}
        <section className="relative bg-white overflow-hidden border-b border-gray-100">
          <div className="anim-blob absolute top-0 right-0 w-[480px] h-[480px] bg-gradient-to-br from-amber-50 to-amber-100 rounded-full opacity-70" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-50 rounded-full translate-y-1/2 opacity-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: text */}
              <div>
                <div style={heroStyle(0)} className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
                  <CheckCircle className="w-4 h-4" />
                  {t.hero.badge}
                </div>

                <h1 style={heroStyle(120)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                  {t.hero.title}
                </h1>
                <p style={heroStyle(240)} className="text-xl text-gray-500 mb-4 max-w-xl leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <p style={heroStyle(300)} className="text-sm text-gray-500 mb-8">
                  We repair all brands: LG, Voltas, Samsung, Blue Star, Daikin & more
                </p>

                <div style={heroStyle(380)} className="flex flex-wrap gap-4 mb-10">
                  <Link href="/booking" className="btn-primary btn-shine text-base px-8 py-4">
                    <Wrench className="w-5 h-5" />
                    {t.hero.bookNow}
                  </Link>
                  <a href="tel:+918807086727" className="btn-secondary btn-shine bg-black text-white px-8 py-4">
                    Call Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Social proof row */}
                <div style={heroStyle(480)} className="flex items-center gap-6">
                  <a
                    href="https://maps.app.goo.gl/cM7MmZp8w7pD7Ut39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-lift flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-md border cursor-pointer"
                  >
                    <img src="/google.jpg" alt="Google" className="w-8 h-8" />
                    <div>
                      <p className="font-semibold text-gray-900">Google Reviews</p>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-400">★★★★★</span>
                        <span className="font-bold text-gray-800">4.8/5</span>
                      </div>
                      <p className="text-xs text-gray-500">Click to view all reviews →</p>
                    </div>
                  </a>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      <CountUp value="4578+" />
                    </div>
                    <div className="text-xs text-gray-500">Happy Customers</div>
                  </div>
                </div>
              </div>

              {/* Right: floating image collage */}
              <div style={heroStyle(300)} className="relative h-[380px] sm:h-[440px]">
                <div className="anim-float-slow absolute right-6 top-0 w-52 sm:w-64 h-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/ac-image.jpg" alt="AC unit repair" fill className="object-cover" />
                </div>
                <div className="anim-float-mid absolute left-0 top-16 sm:top-24 w-40 sm:w-52 h-52 sm:h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/refrigerator1.jpg" alt="Refrigerator repair" fill className="object-cover" />
                </div>
                <div className="anim-float-fast absolute right-10 bottom-6 w-44 sm:w-56 h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/wasing.jpg" alt="Washing machine service" fill className="object-cover" />
                </div>

                {/* Floating badge */}
                <div className="absolute left-2 bottom-0 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
                  <div className="anim-pulse-ring w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Same Day Service</div>
                    <div className="text-xs text-gray-500">Available in 6+ Areas</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════ BRAND MARQUEE ══════════ */}
        <section className="bg-gray-50 border-b border-gray-100 py-5 overflow-hidden">
          <div className="anim-marquee flex w-max items-center gap-12">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="text-gray-400 font-bold text-lg tracking-wide whitespace-nowrap select-none">
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* ══════════ STATS BAR ══════════ */}
        <section className="bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center mb-2">
                      <s.Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                      <CountUp value={s.value} />
                    </div>
                    <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SERVICES ══════════ */}
        <section className="py-20 bg-white" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
                Our Services
              </span>
              <h2 className="section-title">{t.services.title}</h2>
              <p className="section-subtitle">{t.services.subtitle}</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayServices.map((s, i) => (
                <Reveal key={s.id} delay={i * 120} className="card-lift rounded-2xl">
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="text-center mt-10">
                <p>
                  Don&apos;t see your service listed?{' '}
                  <a href="tel:+918807086727" className="text-amber-600 font-semibold hover:underline">
                    Call us
                  </a>{' '}
                  — we may still be able to help.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════ WHY CHOOSE US ══════════ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
                Why Choose Us
              </span>
              <h2 className="section-title">{t.whyUs.title}</h2>
              <p className="section-subtitle">{t.whyUs.subtitle}</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUs.map(({ Icon, title, desc, color }, i) => (
                <Reveal key={title} delay={i * 120}>
                  <div className="card-lift group bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm h-full">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ HOW IT WORKS ══════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
                How It Works
              </span>
              <h2 className="section-title">{t.howItWorks.title}</h2>
              <p className="section-subtitle">{t.howItWorks.subtitle}</p>
            </Reveal>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-px bg-gray-200" />
              {steps.map(({ n, title, desc }, i) => (
                <Reveal key={n} delay={i * 150}>
                  <div className="relative group">
                    <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mb-4 relative z-10 mx-auto sm:mx-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-600 group-hover:shadow-lg group-hover:shadow-amber-200">
                      {n}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 text-center sm:text-left">{title}</h3>
                    <p className="text-gray-500 text-sm text-center sm:text-left">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ DARK STATS ══════════ */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {darkStats.map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                    <CountUp value={s.value} />
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ TESTIMONIALS ══════════ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
                Testimonials
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">
                What Our Customers Say
              </h2>
              <p className="text-center text-gray-500 mt-3 mb-12">
                Trusted by thousands of customers across Theni, Madurai & Dindigul
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center hover:bg-amber-50 hover:border-amber-300 hover:scale-110 transition-all flex-shrink-0"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <div className="grid md:grid-cols-3 gap-8 flex-1">
                  {[0, 1, 2].map((offset) => {
                    const idx = (testimonialIndex + offset) % testimonials.length;
                    const item = testimonials[idx];
                    return (
                      <div
                        key={`${idx}-${testimonialIndex}`}
                        className="card-lift bg-white rounded-2xl p-6 shadow-sm border"
                        style={{ animation: `fadeSlideIn 0.5s ease ${offset * 90}ms both` }}
                      >
                        <div className="text-yellow-500 text-xl">★★★★★</div>
                        <p className="text-gray-600 mt-4 leading-7">{item.text}</p>
                        <div className="mt-5 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center flex-shrink-0">
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.place}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center hover:bg-amber-50 hover:border-amber-300 hover:scale-110 transition-all flex-shrink-0"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </Reveal>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === testimonialIndex ? 'w-6 bg-amber-500' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FAQ (Accordion) ══════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                  FAQ
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500">
                  Common questions about our AC, Refrigerator, Washing Machine and TV repair services
                </p>
              </div>
            </Reveal>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <Reveal key={i} delay={i * 60}>
                    <div className={`rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-amber-300 bg-amber-50/50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-gray-900">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-600' : 'text-gray-400'}`}
                        />
                      </button>
                      <div
                        className="grid transition-all duration-300 ease-in-out"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-5 text-gray-600 leading-7">
                            {faq.q.includes('contact number') ? (
                              <>
                                You can reach us at{' '}
                                <a href="tel:+918807086727" className="text-amber-600 font-semibold hover:underline">
                                  +91 88070 86727
                                </a>{' '}
                                for AC service in Theni, Madurai and Dindigul.
                              </>
                            ) : faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ AREAS WE SERVE (Compact) ══════════ */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">
                  Areas We Serve
                </h2>
                <p className="text-gray-500 text-sm">
                  Doorstep appliance repair across Theni, Madurai & Dindigul districts
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 shadow-sm">
                {[
                  { district: 'Theni', color: 'text-amber-600 bg-amber-100', areas: ['Theni', 'Periyakulam', 'Bodinayakanur', 'Andipatti', 'Cumbum', 'Chinnamanur'] },
                  { district: 'Madurai', color: 'text-blue-600 bg-blue-100', areas: ['Madurai', 'Anna Nagar', 'KK Nagar', 'Villapuram'] },
                  { district: 'Dindigul', color: 'text-purple-600 bg-purple-100', areas: ['Dindigul', 'Palani', 'Kodaikanal', 'Nilakottai', 'Batlagundu'] },
                ].map((row) => (
                  <div key={row.district} className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4">
                    <div className="flex items-center gap-2 sm:w-40 flex-shrink-0">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${row.color}`}>
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-gray-900 text-sm">{row.district}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {row.areas.map((area) => (
                        <span key={area} className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 rounded-full px-3 py-1 text-xs font-medium text-gray-700 transition-colors cursor-default">
                          <span className="w-1 h-1 rounded-full bg-green-500" />
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 text-center text-xs text-gray-500">
                Don&apos;t see your area?{' '}
                <a href="tel:+918807086727" className="text-amber-600 font-semibold hover:underline">
                  Call us
                </a>{' '}
                — we may still be able to help.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══════════ POPULAR SERVICES BY LOCATION (SEO links) ══════════ */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-14">
                <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                  Popular Services
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                  {lang === 'ta' ? 'உங்கள் நகரத்தில் எங்கள் சேவைகள்' : 'Our Services in Your City'}
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  {lang === 'ta' ? 'உங்கள் பகுதிக்கான சேவையை தேர்ந்தெடுக்கவும்' : 'Choose your location for doorstep appliance repair'}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceLinks.map((group, gi) => (
                <Reveal key={group.city} delay={gi * 130}>
                  <div className="card-lift bg-gray-50 rounded-2xl p-6 border border-gray-200 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${group.color === 'amber' ? 'bg-amber-100' : group.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                        <MapPin className={`w-5 h-5 ${group.color === 'amber' ? 'text-amber-600' : group.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}`} />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900">{group.city}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group flex items-center justify-between bg-white border border-gray-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl px-4 py-3 shadow-sm hover:shadow transition-all duration-200"
                          >
                            <span className="text-sm font-medium text-gray-800 group-hover:text-amber-700">
                              {link.label}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-2 items-end">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src="/acservicee.jpg"
                      alt="A S Service technician"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 md:p-12 text-center md:text-left">
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                      {lang === 'ta' ? 'இப்போதே சேவை பதிவு செய்யுங்கள்!' : 'Ready to Fix Your Appliance?'}
                    </h2>
                    <p className="text-amber-50 mb-8 text-lg">
                      {lang === 'ta' ? 'விரைவான, நம்பகமான சேவைக்கு இப்போதே அழைக்கவும்' : 'Get same-day service from our certified technicians'}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <Link href="/booking" className="btn-shine bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
                        <Wrench className="w-5 h-5" />
                        {t.hero.bookNow}
                      </Link>
                      <a href="tel:+918807086727" className="btn-shine bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        {lang === 'ta' ? 'இப்போது அழைக்கவும்' : 'Call Now'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
}