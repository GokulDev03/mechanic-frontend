
// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X, Phone } from 'lucide-react';
// import { useLanguage } from '@/lib/LanguageContext';
// import clsx from 'clsx';
// import Image from 'next/image';

// const navCss = `
// /* Active/hover underline slide animation */
// .nav-link { position: relative; }
// .nav-link::after {
//   content: ''; position: absolute; left: 12px; right: 12px; bottom: 4px;
//   height: 2px; border-radius: 9999px; background: #f59e0b;
//   transform: scaleX(0); transform-origin: left;
//   transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
// }
// .nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }

// /* Mobile menu slide down */
// @keyframes navMenuIn {
//   from { opacity: 0; transform: translateY(-8px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// @keyframes navItemIn {
//   from { opacity: 0; transform: translateX(-12px); }
//   to { opacity: 1; transform: translateX(0); }
// }
// .nav-menu-in { animation: navMenuIn 0.25s ease both; }
// .nav-item-in { animation: navItemIn 0.3s cubic-bezier(0.22,1,0.36,1) both; }

// /* Call button subtle pulse */
// @keyframes navCallPulse {
//   0% { box-shadow: 0 0 0 0 rgba(245,158,11,0.35); }
//   70% { box-shadow: 0 0 0 8px rgba(245,158,11,0); }
//   100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }
// }
// .nav-call-pulse { animation: navCallPulse 2.6s ease-out infinite; }

// /* Hamburger icon rotate */
// .nav-burger { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
// .nav-burger.open { transform: rotate(90deg); }

// @media (prefers-reduced-motion: reduce) {
//   .nav-menu-in, .nav-item-in, .nav-call-pulse { animation: none; }
//   .nav-link::after { transition: none; }
//   .nav-burger { transition: none; }
// }
// `;

// export default function Navbar() {
//   const { t, lang, toggleLanguage } = useLanguage();
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   /* Scroll-aware: scroll pannina shadow + blur */
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   /* Route change aana mobile menu close */
//   useEffect(() => { setOpen(false); }, [pathname]);

//   const links = [
//     { href: '/', label: t.nav.home },
//     { href: '/booking', label: t.nav.booking },
//     { href: '/contact', label: t.nav.contact },
//     { href: '/about', label: t.nav.about },
//   ];

//   const isAdmin = pathname.startsWith('/admin') || pathname.startsWith('/technician');
//   if (isAdmin) return null;

//   return (
//     <nav
//       className={clsx(
//         'sticky top-0 z-50 transition-all duration-300',
//         scrolled
//           ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100'
//           : 'bg-white border-b border-gray-200'
//       )}
//     >
//       <style dangerouslySetInnerHTML={{ __html: navCss }} />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className={clsx(
//             'flex items-center justify-between transition-all duration-300',
//             scrolled ? 'h-14' : 'h-16'
//           )}
//         >

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-1 font-bold text-xl text-gray-900 group">
//             <Image
//               src="/logo3.png"
//               alt="AS Service Logo"
//               width={220}
//               height={70}
//               className={clsx(
//                 'w-auto object-contain transition-all duration-300 group-hover:scale-105',
//                 scrolled ? 'h-12' : 'h-16'
//               )}
//               priority
//             />
//             <span className="font-extrabold text-gray-900">SERVICE</span>
//           </Link>

//           {/* Desktop links */}
//           <div className="hidden lg:flex items-center gap-1">
//             {links.map(l => (
//               <Link
//                 key={l.href}
//                 href={l.href}
//                 className={clsx(
//                   'nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
//                   pathname === l.href
//                     ? 'active text-gray-900'
//                     : 'text-gray-600 hover:text-gray-900'
//                 )}
//               >
//                 {l.label}
//               </Link>
//             ))}
//           </div>

//           {/* Right controls */}
//           <div className="flex items-center gap-3">
//             {/* Language toggle */}
//             <button
//               onClick={toggleLanguage}
//               className="hidden sm:flex items-center gap-1 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 text-gray-700 active:scale-95"
//             >
//               <span className={clsx('transition-colors', lang === 'en' ? 'text-amber-600 font-bold' : 'text-gray-400')}>EN</span>
//               <span className="text-gray-300">|</span>
//               <span className={clsx('transition-colors', lang === 'ta' ? 'text-amber-600 font-bold' : 'text-gray-400')}>தமிழ்</span>
//             </button>

//             {/* Book button */}
//             <Link
//               href="/booking"
//               className="hidden sm:inline-flex bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-amber-200 hover:-translate-y-0.5 active:scale-95"
//             >
//               {t.nav.booking}
//             </Link>

//             {/* Call button */}
//             <a
//               href="tel:+918807086727"
//               className="nav-call-pulse hidden sm:inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
//             >
//               <Phone className="w-3.5 h-3.5 text-amber-400" />
//               Call Now
//             </a>

//             {/* Hamburger */}
//             <button
//               onClick={() => setOpen(!open)}
//               aria-label={open ? 'Close menu' : 'Open menu'}
//               aria-expanded={open}
//               className={clsx('nav-burger lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors', open && 'open')}
//             >
//               {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── Mobile menu ── */}
//       {open && (
//         <div className="nav-menu-in lg:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 shadow-lg">
//           <div className="space-y-1">
//             {links.map((l, i) => (
//               <Link
//                 key={l.href}
//                 href={l.href}
//                 onClick={() => setOpen(false)}
//                 className={clsx(
//                   'nav-item-in block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors',
//                   pathname === l.href
//                     ? 'bg-amber-50 text-amber-700 border-l-2 border-amber-500'
//                     : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                 )}
//                 style={{ animationDelay: `${i * 50}ms` }}
//               >
//                 {l.label}
//               </Link>
//             ))}

//             <button
//               onClick={toggleLanguage}
//               className="nav-item-in w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
//               style={{ animationDelay: `${links.length * 50}ms` }}
//             >
//               {lang === 'en' ? '🇮🇳 Switch to தமிழ்' : '🇬🇧 Switch to English'}
//             </button>

//             {/* Mobile action buttons — full width, visible! */}
//             <div
//               className="nav-item-in grid grid-cols-2 gap-2.5 pt-3"
//               style={{ animationDelay: `${(links.length + 1) * 50}ms` }}
//             >
//               <Link
//                 href="/booking"
//                 onClick={() => setOpen(false)}
//                 className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors active:scale-95"
//               >
//                 {t.nav.booking}
//               </Link>
//               <a
//                 href="tel:+918807086727"
//                 className="inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors active:scale-95"
//               >
//                 <Phone className="w-3.5 h-3.5 text-amber-400" />
//                 Call Now
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import clsx from 'clsx';
import Image from 'next/image';

const navCss = `
/* Active/hover underline slide animation */
.nav-link { position: relative; }
.nav-link::after {
  content: ''; position: absolute; left: 12px; right: 12px; bottom: 4px;
  height: 2px; border-radius: 9999px; background: #f59e0b;
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
}
.nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }

/* Mobile menu slide down */
@keyframes navMenuIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes navItemIn {
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: translateX(0); }
}
.nav-menu-in { animation: navMenuIn 0.25s ease both; }
.nav-item-in { animation: navItemIn 0.3s cubic-bezier(0.22,1,0.36,1) both; }

/* Call button subtle pulse */
@keyframes navCallPulse {
  0% { box-shadow: 0 0 0 0 rgba(245,158,11,0.35); }
  70% { box-shadow: 0 0 0 8px rgba(245,158,11,0); }
  100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); }
}
.nav-call-pulse { animation: navCallPulse 2.6s ease-out infinite; }

/* Hamburger icon rotate */
.nav-burger { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }
.nav-burger.open { transform: rotate(90deg); }

@media (prefers-reduced-motion: reduce) {
  .nav-menu-in, .nav-item-in, .nav-call-pulse { animation: none; }
  .nav-link::after { transition: none; }
  .nav-burger { transition: none; }
}
`;

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll-aware: scroll pannina shadow + blur */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Route change aana mobile menu close */
  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { href: '/', label: t.nav.home },
    // NEW: directory page listing every service + every location we serve.
    // Plain string label (not t.nav.xxx) since this key doesn't exist yet
    // in your LanguageContext translations — see note below.
    { href: '/locations', label: 'Locations' },
    { href: '/booking', label: t.nav.booking },
    { href: '/contact', label: t.nav.contact },
    { href: '/about', label: t.nav.about },
  ];

  const isAdmin = pathname.startsWith('/admin') || pathname.startsWith('/technician');
  if (isAdmin) return null;

  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white border-b border-gray-200'
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: navCss }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={clsx(
            'flex items-center justify-between transition-all duration-300',
            scrolled ? 'h-14' : 'h-16'
          )}
        >

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-bold text-xl text-gray-900 group">
            <Image
              src="/logo3.png"
              alt="AS Service Logo"
              width={220}
              height={70}
              className={clsx(
                'w-auto object-contain transition-all duration-300 group-hover:scale-105',
                scrolled ? 'h-12' : 'h-16'
              )}
              priority
            />
            <span className="font-extrabold text-gray-900">SERVICE</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  pathname === l.href
                    ? 'active text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 text-gray-700 active:scale-95"
            >
              <span className={clsx('transition-colors', lang === 'en' ? 'text-amber-600 font-bold' : 'text-gray-400')}>EN</span>
              <span className="text-gray-300">|</span>
              <span className={clsx('transition-colors', lang === 'ta' ? 'text-amber-600 font-bold' : 'text-gray-400')}>தமிழ்</span>
            </button>

            {/* Book button */}
            <Link
              href="/booking"
              className="hidden sm:inline-flex bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-amber-200 hover:-translate-y-0.5 active:scale-95"
            >
              {t.nav.booking}
            </Link>

            {/* Call button */}
            <a
              href="tel:+918807086727"
              className="nav-call-pulse hidden sm:inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Call Now
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className={clsx('nav-burger lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors', open && 'open')}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="nav-menu-in lg:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 shadow-lg">
          <div className="space-y-1">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  'nav-item-in block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors',
                  pathname === l.href
                    ? 'bg-amber-50 text-amber-700 border-l-2 border-amber-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {l.label}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="nav-item-in w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
              style={{ animationDelay: `${links.length * 50}ms` }}
            >
              {lang === 'en' ? '🇮🇳 Switch to தமிழ்' : '🇬🇧 Switch to English'}
            </button>

            {/* Mobile action buttons — full width, visible! */}
            <div
              className="nav-item-in grid grid-cols-2 gap-2.5 pt-3"
              style={{ animationDelay: `${(links.length + 1) * 50}ms` }}
            >
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors active:scale-95"
              >
                {t.nav.booking}
              </Link>
              <a
                href="tel:+918807086727"
                className="inline-flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}