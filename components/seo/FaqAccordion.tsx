'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqEntry {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqEntry[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openFaq === i;
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border transition-colors duration-300 ${
              isOpen ? 'border-amber-300 bg-amber-50/50' : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <button
              onClick={() => setOpenFaq(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-gray-900">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-amber-600' : 'text-gray-400'
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-gray-600 leading-7">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
