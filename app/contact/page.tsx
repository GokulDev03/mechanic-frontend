// 'use client';
// import { useState } from 'react';
// import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
// import { useLanguage } from '@/lib/LanguageContext';
// import { submitContact } from '@/lib/api';

// export default function ContactPage() {
//   const { t } = useLanguage();
//   const [form, setForm] = useState({ name: '', phone: '', message: '' });
//   const [sending, setSending] = useState(false);
//   const [sent, setSent] = useState(false);
//   const [error, setError] = useState('');

//   const PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+91 88070 86727';
//   const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+91 88070 86727';

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.name || !form.phone || !form.message) return;
//     setSending(true); setError('');
//     try {
//       await submitContact(form);
//       setSent(true);
//       setForm({ name: '', phone: '', message: '' });
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : t.common.error);
//     } finally {
//       setSending(false);
//     }
//   };

//   const contacts = [
//     { Icon: Phone, label: t.contact.phone, value: PHONE, href: `tel:${PHONE}`, color: 'bg-blue-100 text-blue-600' },
//     { Icon: MessageCircle, label: t.contact.whatsapp, value: 'WhatsApp Chat', href: `https://wa.me/${WA}`, color: 'bg-green-100 text-green-600' },
// { Icon: Mail, label: t.contact.email, value: 'affra.service@gmail.com', href: 'mailto:affra.service@gmail.com', color: 'bg-orange-100 text-orange-600' },
//     { Icon: MapPin, label: t.contact.address, value: t.contact.companyAddress, href: '#map', color: 'bg-red-100 text-red-600' },
//   ];

//   return (
//     <div>
//       <section className="bg-gray-50 border-b border-gray-200 py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.contact.title}</h1>
//           <p className="text-gray-500 text-lg">{t.contact.subtitle}</p>
//         </div>
//       </section>

     

//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {contacts.map(({ Icon, label, value, href, color }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target={href.startsWith('http') ? '_blank' : undefined}
//                     rel="noopener noreferrer"
//                     className="card p-5 flex items-start gap-4 hover:border-primary-200 hover:border-2 transition-all group"
//                   >
//                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color} group-hover:scale-110 transition-transform`}>
//                       <Icon className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
//                       <p className="font-semibold text-gray-800 text-sm">{value}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>

//               <div className="card p-5">
//                 <div className="flex items-center gap-3 mb-3">
//                   <Clock className="w-5 h-5 text-primary-600" />
//                   <h3 className="font-semibold text-gray-800">Service Hours</h3>
//                 </div>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between text-gray-600"><span>Monday – Saturday</span><span className="font-medium">9:00 AM – 7:00 PM</span></div>
//                   <div className="flex justify-between text-gray-600"><span>Sunday</span><span className="font-medium text-accent-600">9:00 AM – 2:00 PM</span></div>
//                 </div>
//               </div>

//               <div id="map" className="card overflow-hidden rounded-xl h-56">
//                 <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4394.548897219347!2d77.34736044689335!3d10.016612347292883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4177e8fa61c88811%3A0x3b40d70b3bd45538!2sA%20S%20SERVICE!5e1!3m2!1sen!2sin!4v1783331423725!5m2!1sen!2sin"
//                   // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125319.41556895!2d76.8856!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
//                   width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
//                 />
//                 {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4394.548897219347!2d77.34736044689335!3d10.016612347292883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4177e8fa61c88811%3A0x3b40d70b3bd45538!2sA%20S%20SERVICE!5e1!3m2!1sen!2sin!4v1783331423725!5m2!1sen!2sin"></iframe> */}
//               </div>
//             </div>

//             <div>
//               <div className="card p-8">
//                 <h2 className="text-2xl font-bold text-primary-800 mb-6">{t.contact.sendMessage}</h2>
//                 {sent ? (
//                   <div className="text-center py-8">
//                     <div className="text-5xl mb-4">✅</div>
//                     <p className="text-green-600 font-semibold text-lg">{t.contact.sent}</p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.name} *</label>
//                       <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="input-field" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.phoneField} *</label>
//                       <input type="tel" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="input-field" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">{t.contact.messageField} *</label>
//                       <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="input-field resize-none" />
//                     </div>
//                     {error && <p className="text-red-500 text-sm">{error}</p>}
//                     <button type="submit" disabled={sending} className="btn-primary w-full justify-center">
//                       <Send className="w-5 h-5" />
//                       {sending ? t.contact.sending : t.contact.submit}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { submitContact } from '@/lib/api';

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

const contactCss = `
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes popIn { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
@keyframes shake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes pulseRing {
  0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
  70% { box-shadow: 0 0 0 12px rgba(34,197,94,0); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
}
.contact-card-lift { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease; }
.contact-card-lift:hover { transform: translateY(-4px); box-shadow: 0 14px 30px -12px rgba(17,24,39,0.15); }
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
  .contact-card-lift, .contact-card-lift:hover { transform: none; transition: none; }
}
`;

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+91 88070 86727';
  const WA_RAW = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+91 88070 86727';
  const WA = WA_RAW.replace(/\D/g, ''); // wa.me ku digits mattum: 918807086727

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    setSending(true); setError('');
    try {
      await submitContact(form);
      setSent(true);
      setForm({ name: '', phone: '', message: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t.common.error);
    } finally {
      setSending(false);
    }
  };

  const contacts = [
    { Icon: Phone, label: t.contact.phone, value: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}`, color: 'bg-blue-100 text-blue-600' },
    { Icon: MessageCircle, label: t.contact.whatsapp, value: 'WhatsApp Chat', href: `https://wa.me/${WA}`, color: 'bg-green-100 text-green-600' },
    { Icon: Mail, label: t.contact.email, value: 'affra.service@gmail.com', href: 'mailto:affra.service@gmail.com', color: 'bg-orange-100 text-orange-600' },
    { Icon: MapPin, label: t.contact.address, value: t.contact.companyAddress, href: '#map', color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: contactCss }} />

      {/* ── Hero ── */}
      <section className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50 rounded-full translate-x-1/3 -translate-y-1/3 opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center" style={{ animation: 'fadeUp 0.6s ease both' }}>
          <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Zap className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
            {lang === 'ta' ? 'விரைவான பதில் உத்தரவாதம்' : 'Quick Response Guaranteed'}
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">{t.contact.title}</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ── Left column ── */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contacts.map(({ Icon, label, value, href, color }, i) => (
                  <Reveal key={label} delay={i * 100}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact-card-lift group bg-white rounded-2xl border border-gray-200 hover:border-amber-300 p-5 flex items-start gap-4 h-full"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                        <p className="font-semibold text-gray-800 text-sm break-words">{value}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>

              {/* Service hours */}
              <Reveal delay={150}>
                <div className="bg-white rounded-2xl border border-gray-200 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">
                      {lang === 'ta' ? 'சேவை நேரம்' : 'Service Hours'}
                    </h3>
                    <span className="ml-auto inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" style={{ animation: 'pulseRing 2s ease-out infinite' }} />
                      {lang === 'ta' ? 'திறந்துள்ளது' : 'Open Now'}
                    </span>
                  </div>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>{lang === 'ta' ? 'திங்கள் – சனி' : 'Monday – Saturday'}</span>
                      <span className="font-semibold text-gray-900">9:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>{lang === 'ta' ? 'ஞாயிறு' : 'Sunday'}</span>
                      <span className="font-semibold text-amber-600">9:00 AM – 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Map */}
              <Reveal delay={200}>
                <div id="map" className="rounded-2xl overflow-hidden border border-gray-200 h-64 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4394.548897219347!2d77.34736044689335!3d10.016612347292883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4177e8fa61c88811%3A0x3b40d70b3bd45538!2sA%20S%20SERVICE!5e1!3m2!1sen!2sin!4v1783331423725!5m2!1sen!2sin"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    title="A S Service location"
                  />
                </div>
              </Reveal>
            </div>

            {/* ── Right: form ── */}
            <Reveal delay={100}>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 lg:sticky lg:top-24">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{t.contact.sendMessage}</h2>
                <p className="text-sm text-gray-500 mb-6">
                  {lang === 'ta' ? '24 மணி நேரத்தில் பதில் தருவோம்' : "We'll get back to you within 24 hours"}
                </p>

                {sent ? (
                  <div className="text-center py-10" style={{ animation: 'popIn 0.5s cubic-bezier(0.22,1,0.36,1) both' }}>
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-green-600 font-bold text-lg mb-1">{t.contact.sent}</p>
                    <p className="text-sm text-gray-500 mb-6">
                      {lang === 'ta' ? 'உடனடி உதவிக்கு எங்களை அழைக்கவும்' : 'Need urgent help? Give us a call'}
                    </p>
                    <a
                      href={`tel:${PHONE.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {PHONE}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.contact.name} *</label>
                      <input
                        type="text" required value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 outline-none transition-all text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.contact.phoneField} *</label>
                      <input
                        type="tel" required value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 outline-none transition-all text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{t.contact.messageField} *</label>
                      <textarea
                        required rows={5} value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 outline-none transition-all resize-none text-gray-900"
                      />
                    </div>
                    {error && (
                      <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3" style={{ animation: 'shake 0.4s ease both' }}>
                        {error}
                      </p>
                    )}
                    <button
                      type="submit" disabled={sending}
                      className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-200 active:scale-[0.98]"
                    >
                      {sending ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full" style={{ animation: 'spin 0.7s linear infinite' }} />
                          {t.contact.sending}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {t.contact.submit}
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-400">
                      {lang === 'ta' ? 'அல்லது நேரடியாக WhatsApp செய்யுங்கள்' : 'Or reach us directly on'}{' '}
                      <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
                        WhatsApp
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
