
'use client';
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumber = '919876543210'; 

  const handleSend = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Please enter your name and phone number');
      return;
    }
    const text = `Hi, I have an enquiry.

Name: ${name}
Phone: ${phone}
Message: ${message || '-'}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform hover:scale-105"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>

      {/* Enquiry popup */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
          <div className="bg-accent-500 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-semibold">
              <MessageCircle className="w-5 h-5" />
              Quick Enquiry
            </div>
            <button onClick={() => setOpen(false)} className="text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-500">
              Send us your details, we&apos;ll reply on WhatsApp shortly.
            </p>
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent-500"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent-500"
            />
            <textarea
              rows={3}
              placeholder="Your message (optional)"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-accent-500"
            />
            <button
              onClick={handleSend}
              className="w-full bg-accent-400 hover:bg-accent-600 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}
