// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Wrench, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
// import { useLanguage } from '@/lib/LanguageContext';
// import Image from 'next/image';

// export default function Footer() {
//   const { t, lang } = useLanguage();
//   const pathname = usePathname();
//   const isAdmin = pathname.startsWith('/admin') || pathname.startsWith('/technician');
//   if (isAdmin) return null;

//   const PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+91-9999999999';
//   const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

//   return (
//     /* bg-gray-900 = #111827 — kept dark per spec */
//     <footer className="bg-gray-900 text-white mt-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               {/* <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
//                 <Wrench className="w-4 h-4 text-white" />
//               </div> */}
//               {/* <span className="text-xl font-bold">
//                 A S <span className="text-amber-500">SERVICE</span>
//               </span> */}
//                  <Link href="/" className="flex items-center gap-1 font-bold text-xl text-gray-900">
//  <Image
//   src="/logo4.png"
//   alt="AS Service Logo"
//   width={220}
//   height={70}
//   className="h-16 w-auto object-contain"
//   priority
// />
  
// </Link>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               {lang === 'ta'
//                 ? 'தமிழ்நாட்டில் நம்பகமான வீட்டு உபகரண பழுது சேவை.'
//                 : 'Your trusted home appliance repair service in Tamil Nadu.'}
//             </p>
//           </div>

//           {/* Quick links */}
//           <div>
//             <h3 className="font-semibold text-sm uppercase tracking-wide text-amber-500 mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               {[
//                 // { href: '/services', label: t.nav.services },
//                 { href: '/booking', label: t.nav.booking },
//                 { href: '/booking/status', label: t.nav.status },
//                 { href: '/contact', label: t.nav.contact },
//                 { href: '/about', label: t.nav.about },
//               ].map(l => (
//                 <li key={l.href}>
//                   <Link
//                     href={l.href}
//                     className="text-gray-400 hover:text-white text-sm transition-colors"
//                   >
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-semibold text-sm uppercase tracking-wide text-amber-500 mb-4">
//               {t.services.title}
//             </h3>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>{t.services.ac}</li>
//               <li>{t.services.fridge}</li>
//               <li>{t.services.washer}</li>
//               <li>{t.services.tv}</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="font-semibold text-sm uppercase tracking-wide text-amber-500 mb-4">
//               {t.contact.title}
//             </h3>
//             <ul className="space-y-3 text-sm text-gray-400">
//               <li className="flex items-center gap-2">
//                 <Phone className="w-4 h-4 text-amber-500 shrink-0" />
//                 <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">{PHONE}</a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
//                 <a
//                   href={`https://wa.me/${WA}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-green-400 transition-colors"
//                 >
//                   WhatsApp
//                 </a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 text-amber-500 shrink-0" />
//                 <a href="mailto:info@asservice.com" className="hover:text-white transition-colors">
//                  affra.service@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
//                 <span>{t.contact.companyAddress}</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
//           <p>© {new Date().getFullYear()} A S SERVICE. All rights reserved.</p>
//           <Link href="/admin/login" className="hover:text-gray-300 text-xs transition-colors">
//             Admin Login
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }


'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, MessageCircle, Clock, ChevronUp, Star, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

const footerCss = `
.footer-link { transition: color 0.2s ease; }
.footer-link:hover { color: #fff; }
@keyframes footerPulse {
  0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
  70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
}
.footer-open-dot { animation: footerPulse 2.2s ease-out infinite; }
@media (prefers-reduced-motion: reduce) { .footer-open-dot { animation: none; } }
`;

export default function Footer() {
  const { t, lang } = useLanguage();
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin') || pathname.startsWith('/technician');
  if (isAdmin) return null;

  const PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+91 88070 86727';
  const WA_RAW = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918807086727';
  const WA = WA_RAW.replace(/\D/g, '');

  const quickLinks = [
    { href: '/booking', label: t.nav.booking },
    { href: '/booking/status', label: t.nav.status },
    { href: '/contact', label: t.nav.contact },
    { href: '/about', label: t.nav.about },
  ];

  /* SEO internal links — kizha compact strip la render aagum */
  const seoServices = [
    { href: '/ac-repair-theni', label: 'AC Repair Theni' },
    { href: '/ac-repair-madurai', label: 'AC Repair Madurai' },
    { href: '/ac-repair-dindigul', label: 'AC Repair Dindigul' },
    { href: '/fridge-repair-theni', label: 'Fridge Repair Theni' },
    { href: '/fridge-repair-madurai', label: 'Fridge Repair Madurai' },
    { href: '/fridge-repair-dindigul', label: 'Fridge Repair Dindigul' },
    { href: '/washing-machine-repair-theni', label: 'Washing Machine Repair Theni' },
    { href: '/washing-machine-repair-madurai', label: 'Washing Machine Repair Madurai' },
    { href: '/washing-machine-repair-dindigul', label: 'Washing Machine Repair Dindigul' },
  ];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <style dangerouslySetInnerHTML={{ __html: footerCss }} />

      {/* Amber gradient top line */}
      <div className="h-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Slim CTA strip ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 border-b border-gray-800">
          <p className="text-sm text-gray-300 text-center sm:text-left flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
            {lang === 'ta'
              ? 'உபகரணம் பழுதா? அதே நாள் doorstep சேவை!'
              : 'Appliance broken? Same-day doorstep service!'}
          </p>
          <div className="flex gap-2.5">
            <Link
              href="/booking"
              className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-95"
            >
              {t.nav.booking}
            </Link>
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              {PHONE}
            </a>
          </div>
        </div>

        {/* ── Main row: brand + links + contact ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/logo4.png"
                alt="AS Service Logo"
                width={180}
                height={56}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              {lang === 'ta'
                ? 'தமிழ்நாட்டில் நம்பகமான வீட்டு உபகரண பழுது சேவை.'
                : 'Your trusted home appliance repair service in Tamil Nadu.'}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
              <a
                href="https://maps.app.goo.gl/cM7MmZp8w7pD7Ut39"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">4.8</span> Google Reviews
              </a>
              <span className="inline-flex items-center gap-1.5">
                <span className="footer-open-dot w-1.5 h-1.5 rounded-full bg-green-500" />
                <Clock className="w-3 h-3" />
                {lang === 'ta' ? 'திங்–ஞாயி · 8AM–8PM' : 'Mon–Sun · 8AM–8PM'}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wide text-amber-500 mb-3">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link text-gray-400 text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wide text-amber-500 mb-3">
              {t.contact.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="footer-link">{PHONE}</a>
                <span className="text-gray-700">·</span>
                <a
                  href={`https://wa.me/${WA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <a href="mailto:affra.service@gmail.com" className="footer-link break-all">affra.service@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{t.contact.companyAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── SEO links strip (compact) ── */}
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-gray-500">
            <span className="text-amber-500/80 font-semibold uppercase tracking-wide mr-1">
              {lang === 'ta' ? 'சேவைகள்:' : 'Our Services:'}
            </span>
            {seoServices.map((s, i) => (
              <span key={s.href} className="inline-flex items-center gap-2">
                <Link href={s.href} className="footer-link text-gray-500 hover:text-white whitespace-nowrap">
                  {s.label}
                </Link>
                {i < seoServices.length - 1 && <span className="text-gray-700">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-gray-800 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} A S SERVICE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin/login" className="hover:text-gray-300 transition-colors">
              Admin Login
            </Link>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-amber-500 border border-gray-700 hover:border-amber-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}