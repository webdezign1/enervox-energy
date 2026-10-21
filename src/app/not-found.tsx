import React from 'react';
import Link from 'next/link';
import { ZapOff, ArrowRight, Home, Compass, Phone } from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';

export const metadata = {
  title: '404 - Page Not Found | Enervox Renewable Energy',
  description: 'The requested page could not be located in our renewable energy grid.'
};

export default function NotFound() {
  return (
    <>
      <PageBanner
        title="404 - Page Not Found"
        eyebrow="TRANSMISSION INTERRUPTION"
        breadcrumbs={[{ label: '404 Error' }]}
        bgImage="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="w-24 h-24 rounded-full bg-[#FF7029]/10 text-[#FF7029] flex items-center justify-center mx-auto">
            <ZapOff className="w-12 h-12" />
          </div>

          <div>
            <span className="text-6xl sm:text-8xl font-black text-[#2D3239] block tracking-tight">
              404
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D3239] mt-2">
              Power Lost in Transmission
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto leading-relaxed">
              The page or resource you are looking for has been decommissioned, relocated, or temporarily disconnected from the primary circuit.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="bg-[#FF7029] hover:bg-[#2D3239] text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xs transition-colors shadow-md flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-[#2D3239] border border-gray-300 px-6 py-4 text-xs font-black uppercase tracking-widest rounded-xs transition-colors flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#FF7029]" />
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
