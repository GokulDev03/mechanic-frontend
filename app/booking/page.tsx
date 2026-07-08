

'use client';
import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import {
  Wind, Box, Waves, Tv, User, Phone, MapPin, Home, Calendar, Clock,
  ChevronRight, ChevronLeft, CheckCircle2, Wrench, PartyPopper, Shield, Zap, MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
// import { createBooking } from '@/lib/api';  // ← ungaloda API function inga import pannunga

/* ═══════════════ Data ═══════════════ */

const services = [
  { id: 'ac', Icon: Wind, en: 'AC Service & Repair', ta: 'ஏசி சர்வீஸ் & ரிப்பேர்', price: '₹500 – ₹3000', color: 'bg-sky-100 text-sky-600' },
  { id: 'fridge', Icon: Box, en: 'Refrigerator Repair', ta: 'குளிர்சாதனப்பெட்டி ரிப்பேர்', price: '₹400 – ₹2500', color: 'bg-emerald-100 text-emerald-600' },
  { id: 'washing', Icon: Waves, en: 'Washing Machine Service', ta: 'வாஷிங் மெஷின் சர்வீஸ்', price: '₹350 – ₹2000', color: 'bg-violet-100 text-violet-600' },
  { id: 'tv', Icon: Tv, en: 'TV Repair', ta: 'டிவி ரிப்பேர்', price: '₹300 – ₹2500', color: 'bg-rose-100 text-rose-600' },
];

const districts = ['Theni', 'Madurai', 'Dindigul'];

const timeSlots = [
  { id: 'morning', label: '9 AM – 12 PM', ta: 'காலை' },
  { id: 'afternoon', label: '12 PM – 3 PM', ta: 'மதியம்' },
  { id: 'evening', label: '3 PM – 6 PM', ta: 'மாலை' },
  { id: 'night', label: '6 PM – 8 PM', ta: 'இரவு' },
];

/* ═══════════════ Page ═══════════════ */

export default function BookingPage() {
  const { lang } = useLanguage();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<'fwd' | 'back'>('fwd');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    service: '',
    name: '',
    phone: '',
    district: '',
    address: '',
    problem: '',
    date: '',
    slot: '',
  });

  /* Dates: generate on client only (avoids hydration mismatch) */
  const [dates, setDates] = useState<{ iso: string; day: string; num: string; month: string; today: boolean }[]>([]);
  useEffect(() => {
    const list = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return {
        iso: d.toISOString().split('T')[0],
        day: d.toLocaleDateString('en-IN', { weekday: 'short' }),
        num: String(d.getDate()),
        month: d.toLocaleDateString('en-IN', { month: 'short' }),
        today: i === 0,
      };
    });
    setDates(list);
  }, []);

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setError('');
  };

  const phoneValid = /^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''));

  const stepValid = useMemo(() => {
    if (step === 1) return !!form.service;
    if (step === 2) return form.name.trim().length >= 3 && phoneValid && !!form.district && form.address.trim().length >= 5;
    if (step === 3) return !!form.date && !!form.slot;
    return true;
  }, [step, form, phoneValid]);

  const stepError = () => {
    if (step === 1) return lang === 'ta' ? 'ஒரு சேவையை தேர்ந்தெடுக்கவும்' : 'Please select a service';
    if (step === 2) {
      if (form.name.trim().length < 3) return lang === 'ta' ? 'உங்கள் பெயரை உள்ளிடவும்' : 'Please enter your name';
      if (!phoneValid) return lang === 'ta' ? 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்' : 'Enter a valid 10-digit mobile number';
      if (!form.district) return lang === 'ta' ? 'மாவட்டத்தை தேர்ந்தெடுக்கவும்' : 'Please select your district';
      return lang === 'ta' ? 'முகவரியை உள்ளிடவும்' : 'Please enter your address';
    }
    if (step === 3) return lang === 'ta' ? 'தேதி மற்றும் நேரத்தை தேர்ந்தெடுக்கவும்' : 'Please pick a date and time slot';
    return '';
  };

  const next = () => {
    if (!stepValid) { setError(stepError()); return; }
    setDirection('fwd');
    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => {
    setDirection('back');
    setError('');
    setStep((s) => Math.max(s - 1, 1));
  };

  /* ══════ WhatsApp message builder ══════ */
  const WHATSAPP_NUMBER = '918807086727'; // ← ungaloda business WhatsApp number (country code oda, + illama)

  const buildWhatsAppMessage = () => {
    const svc = lang === 'ta' ? selectedService?.ta : selectedService?.en;
    const dateStr = selectedDate ? `${selectedDate.day}, ${selectedDate.num} ${selectedDate.month}` : form.date;
    return [
      '🔧 *New Service Booking — A S SERVICE*',
      '',
      `*Service:* ${svc}`,
      `*Name:* ${form.name}`,
      `*Phone:* +91 ${form.phone}`,
      `*District:* ${form.district}`,
      `*Address:* ${form.address}`,
      form.problem ? `*Problem:* ${form.problem}` : '',
      `*Date:* ${dateStr}`,
      `*Time Slot:* ${selectedSlot?.label}`,
      '',
      'Please confirm my booking. Thank you!',
    ].filter(Boolean).join('\n');
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const submit = async () => {
    setSubmitting(true);
    setError('');

    /* WhatsApp-ah FIRST open pannanum (user click event kulla synchronous ah
       irundha dhaan popup blocker block pannadhu) */
    openWhatsApp();

    try {
      /* ══════ UNGALODA API CALL INGA ══════
      await createBooking({
        service: form.service,
        customer_name: form.name,
        phone: form.phone,
        district: form.district,
        address: form.address,
        problem_description: form.problem,
        preferred_date: form.date,
        preferred_slot: form.slot,
      });
      ═══════════════════════════════════════ */
      await new Promise((r) => setTimeout(r, 900)); // ← API connect pannina idha remove pannunga
      setDone(true);
    } catch {
      setError(lang === 'ta' ? 'ஏதோ தவறு நடந்துவிட்டது. மீண்டும் முயற்சிக்கவும்.' : 'Something went wrong. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  };

  const selectedService = services.find((s) => s.id === form.service);
  const selectedSlot = timeSlots.find((s) => s.id === form.slot);
  const selectedDate = dates.find((d) => d.iso === form.date);

  const steps = [
    { n: 1, label: lang === 'ta' ? 'சேவை' : 'Select Service' },
    { n: 2, label: lang === 'ta' ? 'விவரங்கள்' : 'Your Details' },
    { n: 3, label: lang === 'ta' ? 'நேரம்' : 'Schedule' },
    { n: 4, label: lang === 'ta' ? 'உறுதி' : 'Confirm' },
  ];

  const slideStyle: CSSProperties = {
    animation: `${direction === 'fwd' ? 'slideInRight' : 'slideInLeft'} 0.4s cubic-bezier(0.22,1,0.36,1) both`,
  };

  /* ══════════ SUCCESS SCREEN ══════════ */
  if (done) {
    return (
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-4 py-16">
        <style dangerouslySetInnerHTML={{ __html: bookingCss }} />
        <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 shadow-xl p-8 text-center" style={{ animation: 'popIn 0.5s cubic-bezier(0.22,1,0.36,1) both' }}>
          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6" style={{ animation: 'popIn 0.5s cubic-bezier(0.22,1,0.36,1) 0.15s both' }}>
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center justify-center gap-2">
            {lang === 'ta' ? 'பதிவு வெற்றி!' : 'Booking Confirmed!'}
            <PartyPopper className="w-6 h-6 text-amber-500" />
          </h1>
          <p className="text-gray-500 mb-6">
            {lang === 'ta'
              ? 'எங்கள் டெக்னீஷியன் விரைவில் உங்களை தொடர்பு கொள்வார்'
              : 'Our technician will call you shortly to confirm your appointment'}
          </p>

          <div className="bg-gray-50 rounded-2xl p-5 text-left space-y-3 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 text-sm">
              <Wrench className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="font-semibold text-gray-900">{lang === 'ta' ? selectedService?.ta : selectedService?.en}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="text-gray-700">{selectedDate ? `${selectedDate.day}, ${selectedDate.num} ${selectedDate.month}` : form.date} · {selectedSlot?.label}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="text-gray-700">{form.district}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {lang === 'ta' ? 'WhatsApp-ல் விவரம் அனுப்பு' : 'Send Details on WhatsApp'}
            </button>
            <a href="tel:+918807086727" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              {lang === 'ta' ? 'உடனடி உதவிக்கு அழைக்கவும்' : 'Call for Urgent Service'}
            </a>
            <Link href="/" className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2">
              <Home className="w-4 h-4" />
              {lang === 'ta' ? 'முகப்பு பக்கம்' : 'Back to Home'}
            </Link>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            {lang === 'ta'
              ? 'WhatsApp திறக்கவில்லையா? மேலே உள்ள பச்சை பட்டனை அழுத்தவும்'
              : "WhatsApp didn't open? Tap the green button above"}
          </p>
        </div>
      </div>
    );
  }

  /* ══════════ WIZARD ══════════ */
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <style dangerouslySetInnerHTML={{ __html: bookingCss }} />

      {/* Header */}
      <div className="text-center mb-10" style={{ animation: 'fadeUp 0.6s ease both' }}>
        <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
          <Zap className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
          {lang === 'ta' ? 'அதே நாள் சேவை' : 'Same-Day Service Available'}
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
          {lang === 'ta' ? 'சேவை பதிவு' : 'Book a Service'}
        </h1>
        <p className="text-gray-500">
          {lang === 'ta' ? '2 நிமிடத்தில் பதிவு செய்யுங்கள்' : 'Takes less than 2 minutes'}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden" style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}>

          {/* ── Progress bar ── */}
          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-gray-100">
            <div className="relative flex justify-between">
              {/* Track */}
              <div className="absolute top-5 left-5 right-5 h-1 bg-gray-100 rounded-full" />
              {/* Fill */}
              <div
                className="absolute top-5 left-5 h-1 bg-amber-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `calc(${((step - 1) / 3) * 100}% - ${((step - 1) / 3) * 40}px)` }}
              />
              {steps.map((s) => {
                const active = step === s.n;
                const completed = step > s.n;
                return (
                  <div key={s.n} className="relative z-10 flex flex-col items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                        ${completed ? 'bg-amber-500 text-white' : active ? 'bg-amber-500 text-white ring-4 ring-amber-100 scale-110' : 'bg-gray-100 text-gray-400'}`}
                    >
                      {completed ? <CheckCircle2 className="w-5 h-5" /> : s.n}
                    </div>
                    <span className={`text-[11px] sm:text-xs font-medium transition-colors ${active || completed ? 'text-amber-600' : 'text-gray-400'}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Step content ── */}
          <div className="px-6 sm:px-10 py-8 min-h-[380px]">

            {/* STEP 1 — Select Service */}
            {step === 1 && (
              <div key="s1" style={slideStyle}>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {lang === 'ta' ? 'சேவையை தேர்ந்தெடுக்கவும்' : 'Choose a Service'}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {lang === 'ta' ? 'எந்த சாதனத்தை சரி செய்ய வேண்டும்?' : 'Which appliance needs fixing?'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s) => {
                    const selected = form.service === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => set('service', s.id)}
                        className={`group relative text-left rounded-2xl border-2 p-5 transition-all duration-200
                          ${selected
                            ? 'border-amber-500 bg-amber-50 shadow-md shadow-amber-100'
                            : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5'}`}
                      >
                        {selected && (
                          <span className="absolute top-3 right-3" style={{ animation: 'popIn 0.3s ease both' }}>
                            <CheckCircle2 className="w-5 h-5 text-amber-500" />
                          </span>
                        )}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110 ${s.color}`}>
                          <s.Icon className="w-6 h-6" />
                        </div>
                        <div className="font-bold text-gray-900">{lang === 'ta' ? s.ta : s.en}</div>
                        <div className="text-xs text-gray-500 mt-1">{lang === 'ta' ? 'விலை' : 'Starts from'} {s.price.split(' – ')[0]}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2 — Your Details */}
            {step === 2 && (
              <div key="s2" style={slideStyle}>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {lang === 'ta' ? 'உங்கள் விவரங்கள்' : 'Your Details'}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {lang === 'ta' ? 'உங்களை தொடர்பு கொள்ள இந்த தகவல்கள் தேவை' : 'We need these to reach you'}
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      {lang === 'ta' ? 'பெயர்' : 'Full Name'} *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder={lang === 'ta' ? 'உங்கள் பெயர்' : 'e.g. Rajesh Kumar'}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 outline-none transition-all text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      {lang === 'ta' ? 'மொபைல் எண்' : 'Mobile Number'} *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value.replace(/\D/g, ''))}
                        placeholder="98765 43210"
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition-all text-gray-900
                          ${form.phone && !phoneValid ? 'border-red-300 focus:ring-4 focus:ring-red-50' : 'border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50'}`}
                      />
                      {form.phone && phoneValid && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 absolute right-4 top-1/2 -translate-y-1/2" style={{ animation: 'popIn 0.3s ease both' }} />
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      {lang === 'ta' ? 'மாவட்டம்' : 'District'} *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {districts.map((d) => (
                        <button
                          key={d}
                          onClick={() => set('district', d)}
                          className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200
                            ${form.district === d
                              ? 'border-amber-500 bg-amber-50 text-amber-700'
                              : 'border-gray-200 text-gray-600 hover:border-amber-300'}`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      {lang === 'ta' ? 'முகவரி' : 'Address'} *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                      <textarea
                        value={form.address}
                        onChange={(e) => set('address', e.target.value)}
                        rows={2}
                        placeholder={lang === 'ta' ? 'வீட்டு எண், தெரு, பகுதி' : 'House no, street, area'}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 outline-none transition-all resize-none text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                      {lang === 'ta' ? 'பிரச்சனை (விருப்பம்)' : 'Describe the Problem'} <span className="text-gray-400 font-normal">({lang === 'ta' ? 'விருப்பம்' : 'optional'})</span>
                    </label>
                    <textarea
                      value={form.problem}
                      onChange={(e) => set('problem', e.target.value)}
                      rows={2}
                      placeholder={lang === 'ta' ? 'எ.கா: ஏசி குளிர்ச்சி இல்லை' : 'e.g. AC not cooling, water leaking'}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-50 outline-none transition-all resize-none text-gray-900"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — Schedule */}
            {step === 3 && (
              <div key="s3" style={slideStyle}>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {lang === 'ta' ? 'தேதி & நேரம்' : 'Pick Date & Time'}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {lang === 'ta' ? 'உங்களுக்கு வசதியான நேரத்தை தேர்ந்தெடுக்கவும்' : 'Choose a convenient slot for the technician visit'}
                </p>

                <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  {lang === 'ta' ? 'தேதி' : 'Select Date'}
                </label>
                <div className="flex gap-2.5 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
                  {dates.map((d) => {
                    const selected = form.date === d.iso;
                    return (
                      <button
                        key={d.iso}
                        onClick={() => set('date', d.iso)}
                        className={`flex-shrink-0 w-16 py-3 rounded-2xl border-2 text-center transition-all duration-200
                          ${selected
                            ? 'border-amber-500 bg-amber-500 text-white shadow-md shadow-amber-200 scale-105'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300'}`}
                      >
                        <div className={`text-[10px] font-semibold uppercase ${selected ? 'text-amber-100' : 'text-gray-400'}`}>
                          {d.today ? (lang === 'ta' ? 'இன்று' : 'Today') : d.day}
                        </div>
                        <div className="text-lg font-extrabold leading-tight">{d.num}</div>
                        <div className={`text-[10px] ${selected ? 'text-amber-100' : 'text-gray-400'}`}>{d.month}</div>
                      </button>
                    );
                  })}
                </div>

                <label className="text-sm font-semibold text-gray-700 mb-2 block flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  {lang === 'ta' ? 'நேரம்' : 'Select Time Slot'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot) => {
                    const selected = form.slot === slot.id;
                    return (
                      <button
                        key={slot.id}
                        onClick={() => set('slot', slot.id)}
                        className={`py-3.5 px-4 rounded-xl border-2 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2
                          ${selected
                            ? 'border-amber-500 bg-amber-50 text-amber-700'
                            : 'border-gray-200 text-gray-600 hover:border-amber-300'}`}
                      >
                        {selected && <CheckCircle2 className="w-4 h-4" style={{ animation: 'popIn 0.3s ease both' }} />}
                        {slot.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4 — Confirm */}
            {step === 4 && (
              <div key="s4" style={slideStyle}>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {lang === 'ta' ? 'விவரங்களை சரிபார்க்கவும்' : 'Confirm Your Booking'}
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  {lang === 'ta' ? 'எல்லாம் சரியா என்று பாருங்கள்' : 'Review everything before submitting'}
                </p>

                <div className="bg-gray-50 rounded-2xl border border-gray-100 divide-y divide-gray-100 mb-5">
                  {[
                    { icon: Wrench, label: lang === 'ta' ? 'சேவை' : 'Service', value: lang === 'ta' ? selectedService?.ta : selectedService?.en, edit: 1 },
                    { icon: User, label: lang === 'ta' ? 'பெயர்' : 'Name', value: form.name, edit: 2 },
                    { icon: Phone, label: lang === 'ta' ? 'மொபைல்' : 'Phone', value: `+91 ${form.phone}`, edit: 2 },
                    { icon: MapPin, label: lang === 'ta' ? 'முகவரி' : 'Address', value: `${form.address}, ${form.district}`, edit: 2 },
                    { icon: Calendar, label: lang === 'ta' ? 'நேரம்' : 'Schedule', value: selectedDate ? `${selectedDate.day}, ${selectedDate.num} ${selectedDate.month} · ${selectedSlot?.label}` : '', edit: 3 },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 px-5 py-3.5">
                      <row.icon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] text-gray-400 uppercase tracking-wide font-semibold">{row.label}</div>
                        <div className="text-sm font-medium text-gray-900 truncate">{row.value}</div>
                      </div>
                      <button
                        onClick={() => { setDirection('back'); setStep(row.edit); }}
                        className="text-xs text-amber-600 font-semibold hover:underline flex-shrink-0"
                      >
                        {lang === 'ta' ? 'மாற்று' : 'Edit'}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-2.5 bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-sm text-green-800">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    {lang === 'ta'
                      ? 'இப்போது பணம் செலுத்த தேவையில்லை. சேவைக்கு பிறகு மட்டுமே கட்டணம்.'
                      : 'No advance payment needed. Pay only after the service is done.'}
                  </span>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="mt-5 bg-red-50 border border-red-100 text-red-700 text-sm rounded-xl px-4 py-3" style={{ animation: 'shake 0.4s ease both' }}>
                {error}
              </div>
            )}
          </div>

          {/* ── Footer buttons ── */}
          <div className="px-6 sm:px-10 py-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between gap-4">
            {step > 1 ? (
              <button
                onClick={back}
                className="inline-flex items-center gap-1.5 text-gray-600 font-semibold px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {lang === 'ta' ? 'பின்' : 'Back'}
              </button>
            ) : <span />}

            {step < 4 ? (
              <button
                onClick={next}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-200 active:scale-95"
              >
                {lang === 'ta' ? 'தொடரவும்' : 'Continue'}
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-200 active:scale-95"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full" style={{ animation: 'spin 0.7s linear infinite' }} />
                    {lang === 'ta' ? 'பதிவு செய்கிறது...' : 'Booking...'}
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" />
                    {lang === 'ta' ? 'WhatsApp-ல் பதிவு செய்' : 'Confirm on WhatsApp'}
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Trust strip below card */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-gray-500" style={{ animation: 'fadeUp 0.6s ease 0.25s both' }}>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> {lang === 'ta' ? 'சான்றளிக்கப்பட்ட டெக்னீஷியன்கள்' : 'Certified technicians'}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-green-500" /> {lang === 'ta' ? 'சேவை உத்தரவாதம்' : 'Service warranty'}</span>
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-green-500" /> {lang === 'ta' ? 'அதே நாள் சேவை' : 'Same-day service'}</span>
        </div>

        {/* Call fallback */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {lang === 'ta' ? 'ஆன்லைனில் சிக்கலா?' : 'Prefer to book by phone?'}{' '}
          <a href="tel:+918807086727" className="text-amber-600 font-semibold hover:underline">
            +91 88070 86727
          </a>
        </p>
      </div>
    </div>
  );
}

/* ═══════════════ CSS (hydration-safe via dangerouslySetInnerHTML) ═══════════════ */

const bookingCss = `
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideInRight { from { opacity: 0; transform: translateX(28px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slideInLeft { from { opacity: 0; transform: translateX(-28px); } to { opacity: 1; transform: translateX(0); } }
@keyframes popIn { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
@keyframes shake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
@keyframes spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
`;