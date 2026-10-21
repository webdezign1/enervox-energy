'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { factsProgress, siteConfig } from '@/data/siteData';

export const FactsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Facts Paragraph & Progress Bars (7 cols) */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="FACTS & METRICS"
              title="Greener Tomorrow for Everyone"
              subtitle="We measure our success not simply in megawatts, but in avoided metric tons of carbon and grid resilience. By optimizing the complementary diurnal cycles of wind and sun, our hybrid assets deliver clean electricity 24 hours a day."
              align="left"
            />

            {/* 3 Animated Progress Bars */}
            <div className="space-y-6 mt-8">
              {factsProgress.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-extrabold uppercase tracking-wider text-[#2D3239]">
                    <span>{item.label}</span>
                    <span className="text-[#FF7029] font-black">{item.percentage}%</span>
                  </div>

                  <div className="w-full h-3 bg-gray-100 rounded-xs overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF7029] to-[#E55A15] rounded-xs transition-all duration-1500 ease-out"
                      style={{
                        width: isVisible ? `${item.percentage}%` : '0%',
                        transitionDelay: `${idx * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-[#FF7029]" />
              <span>Independent verification by International Renewable Energy Agency (IRENA) 2026 Standards.</span>
            </div>
          </div>

          {/* Right Side: Photo with Metric Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xs overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
                alt="Solar & Wind Hybrid Field"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2228]/85 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-3xl font-black text-white leading-none">
                  99.8%
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#FF7029] mt-1">
                  Average Annual Plant Availability
                </span>
                <p className="text-xs text-gray-300 mt-2">
                  Empowering over 14 million households across four continents with clean, zero-carbon electricity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar: "Get Free Consultancy or [phone number]" */}
        <div className="mt-16 bg-[#2D3239] text-white p-6 sm:p-8 rounded-xs shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#FF7029]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xs bg-[#FF7029] flex items-center justify-center shrink-0 hidden sm:flex">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide">
                Get Free Renewable Energy Consultancy
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                Speak directly with an EPC renewable systems architect today.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${siteConfig.phones[0].replace(/\D/g, '')}`}
              className="bg-white/10 hover:bg-white hover:text-[#2D3239] text-white px-5 py-3 text-xs font-bold uppercase tracking-widest rounded-xs transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FF7029]" />
              <span>{siteConfig.phones[0]}</span>
            </a>

            <Link
              href="/contacts"
              className="bg-[#FF7029] hover:bg-[#E55A15] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-md flex items-center gap-2 group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
