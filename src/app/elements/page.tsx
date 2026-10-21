'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Download,
  Phone,
  ShieldCheck,
  AlertTriangle,
  Info,
  CheckCircle2,
  XCircle,
  SunMedium,
  Wind,
  Layers,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';

export default function ElementsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleAccordion = (idx: number) => {
    setAccordionOpen((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <PageBanner
        title="UI Design System Elements"
        eyebrow="COMPONENT SHOWCASE"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'Elements' }
        ]}
        bgImage="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <SectionHeading
            eyebrow="DESIGN SYSTEM & ATOMS"
            title="Interactive Interface Component Library"
            subtitle="Explore our brand styling: primary orange #FF7029, dark slate #2D3239, typography, buttons, badges, notifications, and progress animators."
            align="center"
          />

          {/* 1. BUTTONS & CTAs */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              01. Buttons & Call-to-Actions
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-[#FF7029] hover:bg-[#2D3239] text-white px-7 py-4 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 shadow-md">
                <span>Primary Solid Button</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="bg-[#2D3239] hover:bg-[#FF7029] text-white px-7 py-4 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 shadow-md">
                <span>Dark Slate Button</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="bg-white hover:bg-gray-100 text-[#2D3239] border border-gray-300 px-6 py-4 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2">
                <Download className="w-4 h-4 text-[#FF7029]" />
                <span>Outline Button</span>
              </button>

              <button className="w-12 h-12 bg-[#FF7029] hover:bg-[#2D3239] text-white flex items-center justify-center rounded-xs transition-colors shadow-md">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 2. ALERTS & NOTIFICATIONS */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              02. Alerts & Status Banners
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-900 rounded-xs flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span><strong>Success Notice:</strong> Offshore array synchronization complete with 100% grid compliance.</span>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-[#FF7029] text-orange-900 rounded-xs flex items-center gap-3">
                <Info className="w-5 h-5 text-[#FF7029] shrink-0" />
                <span><strong>System Info:</strong> Scheduled SCADA maintenance will take place tonight at 02:00 UTC.</span>
              </div>

              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900 rounded-xs flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span><strong>Warning Notice:</strong> High wind gust advisory detected at North Sea offshore clusters.</span>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-900 rounded-xs flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span><strong>Critical Alert:</strong> Substation transformer circuit thermal disconnect initiated.</span>
              </div>
            </div>
          </div>

          {/* 3. BADGES & PILLS */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              03. Badges, Eyebrows & Tags
            </h3>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-[10px] font-black uppercase tracking-widest bg-[#FF7029] text-white px-3 py-1 rounded-xs">
                ENERGY / WIND / SOLAR
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest bg-[#2D3239] text-white px-3 py-1 rounded-xs">
                TIER-1 CERTIFIED
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 text-[#2D3239] border border-gray-300 px-3 py-1 rounded-xs">
                99.8% UPTIME SLA
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest bg-green-100 text-green-800 px-3 py-1 rounded-xs">
                ZERO EMISSIONS
              </span>
            </div>
          </div>

          {/* 4. PROGRESS BARS & METRIC CARDS */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              04. Progress Bars & Metric Gauges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold uppercase text-[#2D3239]">
                    <span>Wind Turbines Operational</span>
                    <span className="text-[#FF7029]">68%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-xs overflow-hidden">
                    <div className="h-full bg-[#FF7029] w-[68%]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold uppercase text-[#2D3239]">
                    <span>Solar Photovoltaic Output</span>
                    <span className="text-[#FF7029]">85%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-xs overflow-hidden">
                    <div className="h-full bg-[#FF7029] w-[85%]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold uppercase text-[#2D3239]">
                    <span>Hybrid BESS Energy Reserve</span>
                    <span className="text-[#FF7029]">25%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-xs overflow-hidden">
                    <div className="h-full bg-[#FF7029] w-[25%]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#2D3239] text-white rounded-xs text-center border-t-4 border-[#FF7029]">
                  <span className="text-3xl font-black text-[#FF7029] block">18,000+</span>
                  <span className="text-[10px] uppercase font-bold text-gray-300 mt-1 block">Installed Capacity</span>
                </div>
                <div className="p-6 bg-[#2D3239] text-white rounded-xs text-center border-t-4 border-[#FF7029]">
                  <span className="text-3xl font-black text-[#FF7029] block">12,000+</span>
                  <span className="text-[10px] uppercase font-bold text-gray-300 mt-1 block">WTGs Installed</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. TABS & ACCORDIONS */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#2D3239] pb-3 border-b border-gray-200">
              05. Interactive Tabs & Accordions
            </h3>

            {/* Tabs */}
            <div>
              <div className="flex gap-2 border-b border-gray-200 pb-2">
                {['Wind Technology', 'Solar Inverters', 'Hybrid Microgrids'].map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-xs transition-colors ${
                      activeTab === idx
                        ? 'bg-[#FF7029] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-6 bg-[#F8FAFC] border border-gray-200 border-t-0 rounded-b-xs text-xs text-gray-600 leading-relaxed">
                {activeTab === 0 && 'High-capacity offshore direct-drive turbines with carbon-fiber reinforced blades engineered for 25 m/s gust speeds.'}
                {activeTab === 1 && 'Three-phase smart grid inverters offering 98.4% peak efficiency with ultra-fast sub-10ms frequency ride-through.'}
                {activeTab === 2 && 'Integrated containerized lithium-iron-phosphate (LFP) batteries designed to store up to 120MWh per substation module.'}
              </div>
            </div>

            {/* Accordion Demo */}
            <div className="space-y-3 pt-4">
              {[
                { q: 'What is the standard design life of an Enervox turbine array?', a: 'All Enervox nacelles, towers, and foundations are certified for a 30-year operational design life.' },
                { q: 'Do you offer grid integration and substation interconnect engineering?', a: 'Yes, full high-voltage substation engineering and synthetic inertia injection are standard on all our EPC projects.' }
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xs overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full bg-[#F8FAFC] p-4 text-left flex justify-between items-center text-xs font-bold text-[#2D3239]"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${accordionOpen[idx] ? 'rotate-180 text-[#FF7029]' : ''}`} />
                  </button>
                  {accordionOpen[idx] && (
                    <div className="p-4 bg-white text-xs text-gray-600 border-t border-gray-100">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
