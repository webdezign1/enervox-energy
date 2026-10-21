import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { UIProvider } from '@/context/UIContext';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { SearchOverlay } from '@/components/common/SearchOverlay';
import { SidePanel } from '@/components/common/SidePanel';
import { VideoModal } from '@/components/common/VideoModal';
import { LightboxModal } from '@/components/common/LightboxModal';

export const metadata: Metadata = {
  title: 'Enervox | Largest Producer of Wind & Solar Renewable Energy',
  description:
    'Enervox is an international clean tech leader delivering world-class wind turbine plants, utility-scale photovoltaic solar farms, and intelligent hybrid microgrid storage systems for a carbon-neutral planet.',
  keywords: [
    'renewable energy',
    'wind turbines',
    'solar panels',
    'hybrid energy storage',
    'BESS',
    'clean tech',
    'microgrids',
    'commercial solar',
  ],
  authors: [{ name: 'Enervox Energy Inc.' }],
  openGraph: {
    title: 'Enervox | Largest Producer of Wind & Solar Renewable Energy',
    description:
      'Proven renewable energy solutions: 18,000+ MW capacity, 12,000+ WTGs installed, and 2,450+ global customers.',
    url: 'https://enervox-energy.com',
    siteName: 'Enervox Energy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Enervox Renewable Energy Wind Turbine Park',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans text-[#2D3239] bg-white">
        <UIProvider>
          <CartProvider>
            {/* Global Header with Top Bar, Sticky Navigation, Mini Cart, Search & Hamburger */}
            <Suspense fallback={<div className="h-20 bg-white" />}>
              <Header />
            </Suspense>

            {/* Page Content */}
            <main className="flex-1 w-full">{children}</main>

            {/* Global Footer with 4 Columns, Contacts, Quick Links, Newsletter & Top Button */}
            <Footer />

            {/* Modals & Overlays */}
            <SearchOverlay />
            <SidePanel />
            <VideoModal />
            <LightboxModal />
          </CartProvider>
        </UIProvider>
      </body>
    </html>
  );
}
