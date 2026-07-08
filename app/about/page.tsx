// 'use client';
// import Link from 'next/link';
// import { Shield, Award, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
// import { useLanguage } from '@/lib/LanguageContext';

// export default function AboutPage() {
//   const { t, lang } = useLanguage();

//   const values = [
//     { icon: Shield, label: lang === 'ta' ? 'நேர்மை' : 'Integrity', desc: lang === 'ta' ? 'வெளிப்படையான விலை, மறைமுக கட்டணம் இல்லை' : 'Transparent pricing, no hidden charges' },
//     { icon: Award, label: lang === 'ta' ? 'தரம்' : 'Quality', desc: lang === 'ta' ? 'அனைத்து பழுதிலும் சிறந்த தரம்' : 'Best quality in every repair we do' },
//     { icon: Users, label: lang === 'ta' ? 'வாடிக்கையாளர் முதல்' : 'Customer First', desc: lang === 'ta' ? 'உங்கள் திருப்தியே எங்கள் முன்னுரிமை' : 'Your satisfaction is our top priority' },
//     { icon: CheckCircle, label: lang === 'ta' ? 'நம்பகத்தன்மை' : 'Reliability', desc: lang === 'ta' ? 'சரியான நேரத்தில் சரியான சேவை' : 'Right service at the right time' },
//   ];

//   const team = [
//     { name: 'Arumugam S.', role: lang === 'ta' ? 'நிறுவனர் & முதன்மை தொழில்நுட்பவியலாளர்' : 'Founder & Lead Technician', exp: '20+ yrs', spec: 'AC & Refrigerator' },
//     { name: 'Selvam K.', role: lang === 'ta' ? 'மூத்த தொழில்நுட்பவியலாளர்' : 'Senior Technician', exp: '12+ yrs', spec: 'Washing Machine' },
//     { name: 'Rajan M.', role: lang === 'ta' ? 'தொழில்நுட்பவியலாளர்' : 'Technician', exp: '8+ yrs', spec: 'TV & Electronics' },
//     { name: 'Murugan P.', role: lang === 'ta' ? 'தொழில்நுட்பவியலாளர்' : 'Technician', exp: '6+ yrs', spec: 'All Appliances' },
//   ];

//   return (
//     <div>
//       <section className="bg-gray-50 border-b border-gray-200 py-16">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.about.title}</h1>
//           <p className="text-gray-500 text-lg">{t.about.subtitle}</p>
//         </div>
//       </section>

//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-primary-800 mb-4">{t.about.story}</h2>
//               <p className="text-gray-600 leading-relaxed mb-6">{t.about.storyText}</p>
//               <h2 className="text-2xl font-bold text-primary-800 mb-4">{t.about.mission}</h2>
//               <p className="text-gray-600 leading-relaxed">{t.about.missionText}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {[{ n: '14+', l: lang === 'ta' ? 'வருட அனுபவம்' : 'Years Experience' }, { n: '5000+', l: lang === 'ta' ? 'வாடிக்கையாளர்கள்' : 'Happy Customers' }, { n: '20+', l: lang === 'ta' ? 'தொழில்நுட்பவியலாளர்கள்' : 'Expert Technicians' }, { n: '99%', l: lang === 'ta' ? 'திருப்தி விகிதம்' : 'Satisfaction Rate' }].map(s => (
//                 <div key={s.l} className="bg-primary-50 rounded-2xl p-6 text-center">
//                   <div className="text-4xl font-extrabold text-primary-800 mb-1">{s.n}</div>
//                   <div className="text-gray-500 text-sm">{s.l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="section-title">{t.about.values}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//             {values.map(({ icon: Icon, label, desc }) => (
//               <div key={label} className="card p-6 text-center">
//                 <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Icon className="w-7 h-7" />
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">{label}</h3>
//                 <p className="text-gray-500 text-sm">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="section-title">{t.about.team}</h2>
//           <p className="section-subtitle">{t.about.teamText}</p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {team.map(m => (
//               <div key={m.name} className="card p-6 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-primary-700 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
//                   {m.name.charAt(0)}
//                 </div>
//                 <h3 className="font-bold text-gray-800">{m.name}</h3>
//                 <p className="text-primary-600 text-sm mb-2">{m.role}</p>
//                 <p className="text-gray-400 text-xs">{m.exp} • {m.spec}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <MapPin className="w-6 h-6 text-primary-600" />
//                 <h2 className="text-2xl font-bold text-primary-800">{t.about.serviceAreas}</h2>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 {t.about.serviceAreaList.map(a => (
//                   <span key={a} className="bg-primary-50 text-primary-700 border border-primary-200 px-4 py-2 rounded-full text-sm font-medium">{a}</span>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 {lang === 'ta' ? 'சேவை பதிவு செய்ய தயாரா?' : 'Ready to Book a Service?'}
//               </h3>
//               <p className="text-gray-500 mb-6">
//                 {lang === 'ta' ? 'இப்போதே பதிவு செய்யுங்கள் - விரைவான சேவை உத்தரவாதம்' : 'Book now and get same-day service guaranteed'}
//               </p>
//               <Link href="/booking" className="btn-primary">
//                 {lang === 'ta' ? 'இப்போது பதிவு செய்க' : 'Book a Service'}
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-10 bg-gray-50">
//   <div className="max-w-3xl mx-auto px-4">
//     <div className="bg-white border border-orange-200 rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-5">

//       <div className="text-center md:text-left">
//         <div className="flex justify-center md:justify-start text-yellow-400 text-xl mb-2">
//           ⭐⭐⭐⭐⭐
//         </div>

//         <h3 className="text-xl font-bold text-gray-900">
//           Enjoyed Our Service?
//         </h3>

//         <p className="text-gray-600 text-sm mt-1">
//           We'd love to hear your feedback. Please leave us a Google Review.
//         </p>
//       </div>

//       <a
//         href="https://maps.app.goo.gl/cM7MmZp8w7pD7Ut39"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
//       >
//         ⭐ Leave Review
//       </a>

//     </div>
//   </div>
// </section>
//     </div>
//   );
// }


'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { Shield, Award, Users, MapPin, CheckCircle, ArrowRight, Star, Wrench } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

/* ── Reveal on scroll ── */
function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
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
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Count-up ── */
function CountUp({ value, duration = 1500 }: { value: string; duration?: number }) {
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

const aboutCss = `
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.about-card-lift { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease; }
.about-card-lift:hover { transform: translateY(-5px); box-shadow: 0 16px 34px -14px rgba(17,24,39,0.16); }
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
  .about-card-lift, .about-card-lift:hover { transform: none; transition: none; }
}
`;

export default function AboutPage() {
  const { t, lang } = useLanguage();

  const values = [
    { icon: Shield, label: lang === 'ta' ? 'நேர்மை' : 'Integrity', desc: lang === 'ta' ? 'வெளிப்படையான விலை, மறைமுக கட்டணம் இல்லை' : 'Transparent pricing, no hidden charges', color: 'bg-blue-100 text-blue-600' },
    { icon: Award, label: lang === 'ta' ? 'தரம்' : 'Quality', desc: lang === 'ta' ? 'அனைத்து பழுதிலும் சிறந்த தரம்' : 'Best quality in every repair we do', color: 'bg-amber-100 text-amber-600' },
    { icon: Users, label: lang === 'ta' ? 'வாடிக்கையாளர் முதல்' : 'Customer First', desc: lang === 'ta' ? 'உங்கள் திருப்தியே எங்கள் முன்னுரிமை' : 'Your satisfaction is our top priority', color: 'bg-green-100 text-green-600' },
    { icon: CheckCircle, label: lang === 'ta' ? 'நம்பகத்தன்மை' : 'Reliability', desc: lang === 'ta' ? 'சரியான நேரத்தில் சரியான சேவை' : 'Right service at the right time', color: 'bg-purple-100 text-purple-600' },
  ];

  const team = [
    { name: 'Arumugam S.', role: lang === 'ta' ? 'நிறுவனர் & முதன்மை தொழில்நுட்பவியலாளர்' : 'Founder & Lead Technician', exp: '20+ yrs', spec: 'AC & Refrigerator' },
    { name: 'Selvam K.', role: lang === 'ta' ? 'மூத்த தொழில்நுட்பவியலாளர்' : 'Senior Technician', exp: '12+ yrs', spec: 'Washing Machine' },
    { name: 'Rajan M.', role: lang === 'ta' ? 'தொழில்நுட்பவியலாளர்' : 'Technician', exp: '8+ yrs', spec: 'TV & Electronics' },
    { name: 'Murugan P.', role: lang === 'ta' ? 'தொழில்நுட்பவியலாளர்' : 'Technician', exp: '6+ yrs', spec: 'All Appliances' },
  ];

  const stats = [
    { n: '14+', l: lang === 'ta' ? 'வருட அனுபவம்' : 'Years Experience' },
    { n: '5000+', l: lang === 'ta' ? 'வாடிக்கையாளர்கள்' : 'Happy Customers' },
    { n: '20+', l: lang === 'ta' ? 'தொழில்நுட்பவியலாளர்கள்' : 'Expert Technicians' },
    { n: '99%', l: lang === 'ta' ? 'திருப்தி விகிதம்' : 'Satisfaction Rate' },
  ];

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: aboutCss }} />

      {/* ── Hero ── */}
      <section className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-50 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-70" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-50 rounded-full translate-x-1/4 translate-y-1/2 opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center" style={{ animation: 'fadeUp 0.6s ease both' }}>
          <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Wrench className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
            {lang === 'ta' ? '2012 முதல் நம்பகமான சேவை' : 'Trusted Since 2012'}
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">{t.about.title}</h1>
          <p className="text-gray-500 text-lg">{t.about.subtitle}</p>
        </div>
      </section>

      {/* ── Story + Stats ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="block text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
                  {lang === 'ta' ? 'எங்கள் கதை' : 'Our Story'}
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">{t.about.story}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{t.about.storyText}</p>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">{t.about.mission}</h2>
                <p className="text-gray-600 leading-relaxed">{t.about.missionText}</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.l} delay={i * 120}>
                  <div className="about-card-lift bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-extrabold text-gray-900 mb-1">
                      <CountUp value={s.n} />
                    </div>
                    <div className="text-gray-500 text-sm">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              {lang === 'ta' ? 'எங்கள் மதிப்புகள்' : 'What We Stand For'}
            </span>
            <h2 className="section-title">{t.about.values}</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {values.map(({ icon: Icon, label, desc, color }, i) => (
              <Reveal key={label} delay={i * 120}>
                <div className="about-card-lift group bg-white rounded-2xl border border-gray-200 p-6 text-center h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{label}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="block text-center text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">
              {lang === 'ta' ? 'எங்கள் குழு' : 'Meet the Team'}
            </span>
            <h2 className="section-title">{t.about.team}</h2>
            <p className="section-subtitle">{t.about.teamText}</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className="about-card-lift group bg-white rounded-2xl border border-gray-200 p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-amber-100">
                    {m.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-gray-900">{m.name}</h3>
                  <p className="text-amber-600 text-sm mb-3">{m.role}</p>
                  <div className="flex items-center justify-center gap-2 text-xs">
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">{m.exp}</span>
                    <span className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-medium">{m.spec}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service areas + CTA ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900">{t.about.serviceAreas}</h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {t.about.serviceAreaList.map((a: string) => (
                    <span key={a} className="inline-flex items-center gap-1.5 bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white shadow-xl shadow-amber-100">
                <h3 className="text-2xl font-extrabold mb-3">
                  {lang === 'ta' ? 'சேவை பதிவு செய்ய தயாரா?' : 'Ready to Book a Service?'}
                </h3>
                <p className="text-amber-50 mb-6">
                  {lang === 'ta' ? 'இப்போதே பதிவு செய்யுங்கள் - விரைவான சேவை உத்தரவாதம்' : 'Book now and get same-day service guaranteed'}
                </p>
                <Link href="/booking" className="inline-flex items-center gap-2 bg-white text-amber-600 hover:bg-amber-50 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95">
                  {lang === 'ta' ? 'இப்போது பதிவு செய்க' : 'Book a Service'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Google review card ── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal>
            <div className="about-card-lift bg-white border border-amber-200 rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">
                  {lang === 'ta' ? 'எங்கள் சேவை பிடித்ததா?' : 'Enjoyed Our Service?'}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {lang === 'ta'
                    ? 'உங்கள் கருத்தை Google Review-ல் பகிருங்கள்'
                    : "We'd love to hear your feedback. Please leave us a Google Review."}
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/cM7MmZp8w7pD7Ut39"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-200 active:scale-95"
              >
                <Star className="w-4 h-4 fill-white" />
                {lang === 'ta' ? 'Review இடுங்கள்' : 'Leave a Review'}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}