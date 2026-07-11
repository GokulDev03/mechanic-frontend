import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ['latin'] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  "@id": "https://mechanic-frontend-smoky.vercel.app/#business",

  name: "A S SERVICE",

  description:
    "Professional AC, Refrigerator, Washing Machine and TV repair services in Theni, Madurai and Dindigul.",

  url: "https://mechanic-frontend-smoky.vercel.app",

  image: "https://mechanic-frontend-smoky.vercel.app/logo.png",

  logo: "https://mechanic-frontend-smoky.vercel.app/logo3.png",

  telephone: "+918807086727",

  email: "affra.service@gmail.com",


  address: {
    "@type": "PostalAddress",
    streetAddress: "2982+JVX, Fire Engine Office Rd, Ammankulam",
    addressLocality: "Bodinayakanur",
    addressRegion: "Tamil Nadu",
    postalCode: "625513",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.0115",
    longitude: "77.3498",
  },

  sameAs: [
    "https://maps.app.goo.gl/PzKme5JYUuEcDvMb7"
  ],

  areaServed: [
    "Theni",
    "Madurai",
    "Dindigul",
  ],

  openingHours: "Mo-Su 08:00-20:00",

  priceRange: "₹₹",

  hasMap: "https://maps.app.goo.gl/PzKme5JYUuEcDvMb7",

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Appliance Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Refrigerator Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Washing Machine Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TV Repair",
        },
      },
    ],
  },
};
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does AC repair cost in Theni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AC repair service . The final cost depends on the issue and spare parts required."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day home service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide same-day doorstep service in most areas of Theni based on technician availability."
      }
    },
    {
      "@type": "Question",
      "name": "Which appliances do you repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repair Air Conditioners, Refrigerators, Washing Machines and LED/Smart TVs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide a service warranty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide a warranty on eligible repair services."
      }
    }
  ]
};
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://mechanic-frontend-smoky.vercel.app/services/ac-repair",
      "name": "AC Repair Service",
      "description": "Professional AC repair, AC installation, gas filling and maintenance services in Theni, Madurai and Dindigul.",
      "provider": {
        "@id": "https://mechanic-frontend-smoky.vercel.app/#business"
      },
      "areaServed": [
        "Theni",
        "Madurai",
        "Dindigul"
      ],
      "serviceType": "Air Conditioner Repair"
    },
    {
      "@type": "Service",
      "@id": "https://mechanic-frontend-smoky.vercel.app/services/refrigerator-repair",
      "name": "Refrigerator Repair Service",
      "description": "Doorstep refrigerator repair service for all brands.",
      "provider": {
        "@id": "https://mechanic-frontend-smoky.vercel.app/#business"
      },
      "areaServed": [
        "Theni",
        "Madurai",
        "Dindigul"
      ],
      "serviceType": "Refrigerator Repair"
    },
    {
      "@type": "Service",
      "@id": "https://mechanic-frontend-smoky.vercel.app/services/washing-machine-repair",
      "name": "Washing Machine Repair Service",
      "description": "Front load and top load washing machine repair service.",
      "provider": {
        "@id": "https://mechanic-frontend-smoky.vercel.app/#business"
      },
      "areaServed": [
        "Theni",
        "Madurai",
        "Dindigul"
      ],
      "serviceType": "Washing Machine Repair"
    },
    {
      "@type": "Service",
      "@id": "https://mechanic-frontend-smoky.vercel.app/services/tv-repair",
      "name": "LED TV Repair Service",
      "description": "LED, LCD and Smart TV repair service for all brands.",
      "provider": {
        "@id": "https://mechanic-frontend-smoky.vercel.app/#business"
      },
      "areaServed": [
        "Theni",
        "Madurai",
        "Dindigul"
      ],
      "serviceType": "TV Repair"
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mechanic-frontend-smoky.vercel.app"),

  alternates: {
    canonical: "/",
  },

  title: "AC Service in Theni, Madurai & Dindigul | A S SERVICE - All Brands Repair",
  description:
    "A S SERVICE offers AC service in Madurai, Dindigul & Theni for all brands - LG, Voltas, Samsung, Blue Star, Daikin. Same-day doorstep repair. Call now for AC service contact number.",
  keywords:
    "ac service in madurai, ac service in theni, ac service in dindigul, voltas ac service in madurai, ac service contact number near me, ac repair theni, refrigerator repair madurai, washing machine repair dindigul",
  verification: {
    google: "_LEUBO8pa94_HAHN1lK8D27IwPjBAZymoNr6K4Vi90g",
  },
  icons: {
    icon: "/logo3.png",
    shortcut: "/logo3.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "A S SERVICE",
    description: "Professional AC, Refrigerator, Washing Machine and TV repair services in Theni. Doorstep service with experienced technicians.",
    url: "https://mechanic-frontend-smoky.vercel.app",
    siteName: "A S SERVICE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A S SERVICE",
    description: "Professional AC, Refrigerator, Washing Machine and TV repair services in Theni. Doorstep service with experienced technicians.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />
      </head>

      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
        <GoogleAnalytics gaId="G-SLZF37GDQQ" />
      </body>
    </html>
  );
}
