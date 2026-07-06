'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield, Clock, Star, Award, ArrowRight, Phone, CheckCircle, Wrench,
  Users, MapPin, BadgeCheck, ChevronLeft, ChevronRight, Zap,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { getServices } from '@/lib/api';
import ServiceCard from '@/components/ServiceCard';
import type { Service } from '@/types';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does AC repair cost in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AC repair service starts from ₹500. The final cost depends on the issue and spare parts required."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day home service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide same-day doorstep service in most areas of Theni."
      }
    },
    {
      "@type": "Question",
      "name": "Which appliances do you repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repair AC, Refrigerator, Washing Machine and LED/Smart TV."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide service warranty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide warranty on eligible repair services."
      }
    }
  ]
};
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mechanic-frontend-smoky.vercel.app/#business",
  "name": "A S SERVICE",
  "image": "https://mechanic-frontend-smoky.vercel.app/public/AS-engneering.png",
  "url": "https://mechanic-frontend-smoky.vercel.app",
  "telephone": "+91-9025649921",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Theni",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Theni" },
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Dindigul" }
  ],
  "openingHours": "Mo-Su 08:00-20:00",
  "serviceArea": [
    { "@type": "City", "name": "Theni" },
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Dindigul" }
  ]
};
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "A S SERVICE",
  "url": "https://mechanic-frontend-smoky.vercel.app",
  "image": "https://mechanic-frontend-smoky.vercel.app/public/AS-engneering.png",
  "telephone": "+91 88070 86727"
};

const testimonials = [
  {
    text: "Excellent AC repair service. The technician arrived on time, fixed the cooling problem quickly and charged a reasonable price.",
    name: "Rajesh Kumar",
    place: "Theni",
  },
  {
    text: "Very professional and affordable service. Highly recommend A S SERVICE!",
    name: "Priya Sharma",
    place: "Coimbatore",
  },
  {
    text: "Good service quality and polite technician. Will use again!",
    name: "Arun N",
    place: "Madurai",
  },
];

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [services, setServices] = useState<Service[]>([]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    getServices().then((d: unknown) => setServices(d as Service[])).catch(() => { });
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <div>

        {/* ── Hero ── */}
        <section className="relative bg-white overflow-hidden border-b border-gray-100">
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-amber-50 rounded-full translate-x-1/3 -translate-y-1/4 opacity-70" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-50 rounded-full translate-y-1/2 opacity-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
                  <CheckCircle className="w-4 h-4" />
                  {t.hero.badge}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  We repair all brands: LG, Voltas, Samsung, Blue Star, Daikin & more
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/booking" className="btn-primary text-base px-8 py-4">
                    <Wrench className="w-5 h-5" />
                    {t.hero.bookNow}
                  </Link>
                  <Link href="/booking/status" className="btn-secondary text-base px-8 py-4">
                    {t.hero.trackBooking}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Social proof row */}
                <div className="flex items-center gap-6">
                  {/* <div className="flex -space-x-3">
                    {['bg-amber-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400'].map((c, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div> */}

                  <a
                    href="https://maps.app.goo.gl/cM7MmZp8w7pD7Ut39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-md border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src="/google.jpg"
                      alt="Google"
                      className="w-8 h-8"
                    />

                    <div>
                      <p className="font-semibold text-gray-900">
                        Google Reviews
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="text-amber-400">★★★★★</span>
                        <span className="font-bold text-gray-800">
                          4.8/5
                        </span>
                      </div>

                      <p className="text-xs text-gray-500">
                        Click to view all reviews →
                      </p>
                    </div>
                  </a>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">4578+</div>
                    <div className="text-xs text-gray-500">Happy Customers</div>
                  </div>


                </div>
              </div>

              {/* Right: image collage */}
              <div className="relative h-[380px] sm:h-[440px]">
                <div className="absolute right-6 top-0 w-52 sm:w-64 h-40 sm:h-48 rounded-2xl overflow-hidden shadow-xl rotate-2">
                  <Image
                    src="/ac-image.jpg"
                    alt="AC unit repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-0 top-16 sm:top-24 w-40 sm:w-52 h-52 sm:h-64 rounded-2xl overflow-hidden shadow-xl -rotate-3">
                  <Image
                    src="/refrigerator1.jpg"
                    alt="Refrigerator repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute right-10 bottom-6 w-44 sm:w-56 h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xl rotate-1">
                  <Image
                    src="/wasing.jpg"
                    alt="Washing machine service"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute left-2 bottom-0 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
                  <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
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

        {/* ── Service Areas Bar ── */}
        <section className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-amber-600" />
                </div>
                <span className="font-semibold text-sm sm:text-base">
                  {lang === 'ta' ? 'சேவை வழங்கும் மாவட்டங்கள்' : 'Proudly Serving'}
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-200" />
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {['Theni', 'Madurai', 'Dindigul'].map((district) => (
                  <div
                    key={district}
                    className="group flex items-center gap-1.5 bg-white border border-gray-200 hover:border-amber-300 hover:bg-amber-50 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-gray-800 group-hover:text-amber-700">
                      {district}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar with icons ── */}
        <section className="bg-amber-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center mb-2">
                    <s.Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 bg-white" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Our Services
            </span>
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayServices.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-outline">
                {lang === 'ta' ? 'அனைத்து சேவைகளையும் பார்க்க' : 'View All Services'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Why Choose Us
            </span>
            <h2 className="section-title">{t.whyUs.title}</h2>
            <p className="section-subtitle">{t.whyUs.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUs.map(({ Icon, title, desc, color }) => (
                <div key={title} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              How It Works
            </span>
            <h2 className="section-title">{t.howItWorks.title}</h2>
            <p className="section-subtitle">{t.howItWorks.subtitle}</p>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-px bg-gray-200" />
              {steps.map(({ n, title, desc }) => (
                <div key={n} className="relative">
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mb-4 relative z-10 mx-auto sm:mx-0">
                    {n}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 text-center sm:text-left">{title}</h3>
                  <p className="text-gray-500 text-sm text-center sm:text-left">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dark stats bar ── */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {darkStats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">{s.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-center text-gray-500 mt-3 mb-12">
              Trusted by thousands of customers across Theni, Madurai & Dindigul
            </p>

            <div className="relative flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="grid md:grid-cols-3 gap-8 flex-1">
                {[0, 1, 2].map((offset) => {
                  const idx = (testimonialIndex + offset) % testimonials.length;
                  const item = testimonials[idx];
                  return (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border">
                      <div className="text-yellow-500 text-xl">★★★★★</div>
                      <p className="text-gray-600 mt-4 leading-7">{item.text}</p>
                      <div className="mt-5">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.place}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={nextTestimonial}
                className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 bg-white items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === testimonialIndex ? 'w-6 bg-amber-500' : 'w-2 bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-lg">How much does AC repair cost in Theni?</h3>
                <p className="text-gray-600 mt-2">AC repair starts from ₹500 depending on the issue and spare parts.</p>
              </div>
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-lg">Do you provide same-day home service?</h3>
                <p className="text-gray-600 mt-2">Yes. Same-day doorstep service is available in most areas of Theni.</p>
              </div>
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-lg">Which appliances do you repair?</h3>
                <p className="text-gray-600 mt-2">We repair AC, Refrigerator, Washing Machine and LED/Smart TVs.</p>
              </div>
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-lg">Do you provide service warranty?</h3>
                <p className="text-gray-600 mt-2">Yes. Warranty is available on eligible repair services.</p>
              </div>
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-lg">Do you provide AC service in Madurai?</h3>
                <p className="text-gray-600 mt-2">Yes, we provide same-day doorstep AC service in Madurai for all brands including LG, Voltas, Samsung and Blue Star.</p>
              </div>
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-lg">What is your AC service contact number?</h3>
                <p className="text-gray-600 mt-2">You can reach us at +91 88070 86727 for AC service in Theni, Madurai and Dindigul.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Areas We Serve ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                Service Coverage
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
                Areas We Serve
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Doorstep appliance repair service across Theni, Madurai and Dindigul districts
              </p>
            </div>

            <div className="space-y-10">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Theni District</h3>
                    <p className="text-sm text-gray-500">Head office & fastest response</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { name: 'Theni', tag: 'Doorstep repair' },
                    { name: 'Periyakulam', tag: 'Same-day service' },
                    { name: 'Bodinayakanur', tag: 'All appliances' },
                    { name: 'Andipatti', tag: 'Experienced techs' },
                    { name: 'Cumbum', tag: 'Affordable repair' },
                    { name: 'Chinnamanur', tag: 'Quick service' },
                  ].map((area) => (
                    <div key={area.name} className="group bg-gray-50 border border-gray-200 hover:border-amber-300 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="font-semibold text-sm text-gray-800">{area.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{area.tag}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Madurai District</h3>
                    <p className="text-sm text-gray-500">AC, Fridge, TV & Washing Machine repair</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { name: 'Madurai', tag: 'Doorstep repair' },
                    { name: 'Anna Nagar', tag: 'Quick service' },
                    { name: 'KK Nagar', tag: 'Same-day repair' },
                    { name: 'Villapuram', tag: 'All appliances' },
                  ].map((area) => (
                    <div key={area.name} className="group bg-gray-50 border border-gray-200 hover:border-blue-300 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="font-semibold text-sm text-gray-800">{area.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{area.tag}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Dindigul District</h3>
                    <p className="text-sm text-gray-500">Expert technicians for all repairs</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { name: 'Dindigul', tag: 'Doorstep repair' },
                    { name: 'Palani', tag: 'Same-day service' },
                    { name: 'Kodaikanal', tag: 'All appliances' },
                    { name: 'Nilakottai', tag: 'Quick response' },
                    { name: 'Batlagundu', tag: 'Affordable repair' },
                  ].map((area) => (
                    <div key={area.name} className="group bg-gray-50 border border-gray-200 hover:border-purple-300 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="font-semibold text-sm text-gray-800">{area.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{area.tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500">
                Don&apos;t see your area listed?{' '}
                <a href="tel:+918807086727" className="text-amber-600 font-semibold hover:underline">
                  Call us
                </a>{' '}
                — we may still be able to help.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA with photo ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-amber-500 rounded-3xl overflow-hidden">
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
                    <Link href="/booking" className="bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
                      <Wrench className="w-5 h-5" />
                      {t.hero.bookNow}
                    </Link>
                    <a href="tel:+91 88070 86727" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      {lang === 'ta' ? 'இப்போது அழைக்கவும்' : 'Call Now'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}