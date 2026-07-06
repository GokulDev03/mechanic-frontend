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
  name: "A S SERVICE",
 description:
    "Professional AC, Refrigerator, Washing Machine and TV repair services in Theni, Madurai and Dindigul. We service all brands including LG, Voltas, Samsung, Blue Star and Daikin.",
  url: "https://mechanic-frontend-smoky.vercel.app",
  image: "https://mechanic-frontend-smoky.vercel.app/og-image.jpg",
  telephone: "+919025649921",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Theni",
    addressRegion: "Tamil Nadu",
    postalCode: "625531",
    addressCountry: "IN",
  },
  sameAs: [],
  areaServed: [
    "Theni",
    "Periyakulam",
    "Andipatti",
    "Bodinayakanur",
    "Cumbum",
    "Uthamapalayam",
    "Madurai",
    "Melur",
    "Usilampatti",
    "Thirumangalam",
    "Dindigul",
    "Palani",
    "Kodaikanal",
    "Oddanchatram",
    "Vedasandur",
    "Natham",
  ],
  openingHours: "Mo-Su 08:00-20:00",
  priceRange: "₹₹",
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
    icon: "/favicon.ico.png",
    shortcut: "/favicon.ico",
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
