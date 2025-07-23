import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fleettechkenya.com'),
  title: 'FleetTech Kenya – Smart Vehicle Solutions | IoT Fleet Management & Automotive Services',
  description: 'Leading IoT-driven SaaS platform for transport operators in Kenya. Professional automotive services including key programming, emergency unlocking, fleet diagnostics, and 24/7 roadside assistance across Nairobi, Mombasa, and Kisumu.',
  keywords: [
    'fleet management Kenya',
    'IoT vehicle tracking',
    'car key programming Nairobi',
    'emergency vehicle unlocking',
    'fleet diagnostics',
    'transport technology Kenya',
    'vehicle GPS tracking',
    'automotive services Kenya',
  ],
  authors: [{ name: 'FleetTech Kenya' }],
  creator: 'FleetTech Kenya',
  publisher: 'FleetTech Kenya',
  robots: 'index, follow',
  openGraph: {
    title: 'FleetTech Kenya – Smart Vehicle Solutions',
    description:
      'IoT-driven SaaS services for transport operators and automotive assistance in Kenya',
    url: 'https://fleettechkenya.com',
    siteName: 'FleetTech Kenya',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FleetTech Kenya – Smart Vehicle Solutions',
    description:
      'IoT-driven SaaS services for transport operators and automotive assistance in Kenya',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
