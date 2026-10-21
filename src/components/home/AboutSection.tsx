'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, CheckCircle, Award, Check } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

export const AboutSection: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Generate brochure download simulation
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob(
        [
          `ENERVOX RENEWABLE ENERGY CORP - CORPORATE BROCHURE 2026\n\n` +
          `Global Wind, Solar, and Hybrid Energy Solutions\n` +
          `Installed Capacity: 18,000+ MW\n` +
          `WTGs Installed: 12,000+\n` +
          `Global Offices: San Diego, Frankfurt, Tokyo, Santiago\n` +
          `Contact: info@enervox-energy.com | +1 (800) 456-7890\n`
        ],
        { type: 'text/plain' }
      );
      element.href = URL.createObjectURL(file);
      element.download = 'Enervox-Corporate-Brochure-2026.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloading(false);
    }, 800);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Two Overlapping Images (one offset) (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Main Image */}
            <div className="relative z-10 w-4/5 rounded-xs overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
                alt="Enervox Wind Turbine Installation"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Overlapping Offset Secondary Image */}
            <div className="absolute -bottom-10 right-0 z-20 w-3/5 rounded-xs overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=600&auto=format&fit=crop"
                alt="Enervox Solar Field"
                className="w-full h-[240px] sm:h-[280px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-8 -left-4 z-30 bg-[#FF7029] text-white p-4 sm:p-5 rounded-xs shadow-xl flex items-center gap-3">
              <Award className="w-8 h-8 shrink-0 text-white" />
              <div>
                <span className="text-2xl sm:text-3xl font-black block leading-none">
                  25+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider block mt-1">
                  Years Experience
                </span>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#FF7029]/30 -z-10" />
          </div>

          {/* Right Side: Eyebrow, H2, Paragraph, About link, Download Brochure (7 cols) */}
          <div className="lg:col-span-7 lg:pl-6">
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="We are the Best-In-Class Products & Solutions"
              subtitle="Enervox is an internationally certified renewable power pioneer. We engineer, manufacture, construct, and service utility-scale wind farms, solar photovoltaic complexes, and battery energy storage facilities that power millions of homes worldwide."
              align="left"
            />

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Tier-1 Direct-Drive Turbines',
                'N-Type Bifacial TOPCon Solar Panels',
                'AI-Driven SCADA Predictive Operations',
                'Sub-Second Frequency Regulation',
                'Zero-Carbon Supply Chain Auditing',
                'Bankable PPA & BOT Structures',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#2D3239]">
                  <CheckCircle className="w-4 h-4 text-[#FF7029] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Through proactive engineering and relentless dedication to environmental stewardship, our projects maximize annual gigawatt-hour output while drastically minimizing soil disruption and ecological footprint.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <Link
                href="/about"
                className="bg-[#FF7029] hover:bg-[#2D3239] text-white px-7 py-4 text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 group"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={handleDownload}
                disabled={downloading}
                className="bg-white hover:bg-gray-100 text-[#2D3239] border border-gray-300 px-6 py-4 text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-300 shadow-xs flex items-center gap-2"
              >
                {downloading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#FF7029] border-t-transparent rounded-full animate-spin" />
                    <span>Preparing...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#FF7029]" />
                    <span>Download Brochure</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
