import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import  './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
  default: "AC, Refrigerator, Washing Machine & TV Repair in Theni | A S SERVICE",
  template: "%s | A S SERVICE",
},
  description:
"Professional AC, Refrigerator, Washing Machine and TV repair services in Theni. Doorstep service, experienced technicians, affordable pricing and same-day service.",
 keywords: [
  "AC Repair Theni",
  "Washing Machine Repair Theni",
  "Refrigerator Repair Theni",
  "TV Repair Theni",
  "Home Appliance Repair",
  "Doorstep Appliance Service",
],
 verification: {
    google: "_LEUBO8pa94_HAHN1lK8D27IwPjBAZymoNr6K4Vi90g",
  },
  openGraph: {
  title: "A S SERVICE",
  description: "...",
  // url: "https://yourdomain.com",
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
  description: "...",
  images: ["/og-image.jpg"],
},
robots: {
  index: true,
  follow: true,
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
