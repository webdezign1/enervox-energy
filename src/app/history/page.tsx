import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Flag, Award, CheckCircle2 } from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';
import { historyTimeline } from '@/data/siteData';

export const metadata = {
  title: 'Our History & Milestones | Enervox Renewable Energy',
  description: 'Explore the 18-year evolution of Enervox from a pioneering regional wind contractor to a global 18GW renewable energy powerhouse.'
};

export default function HistoryPage() {
  return (
    <>
      <PageBanner
        title="Our History & Timeline"
        eyebrow="CHRONICLE OF INNOVATION"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'Our History' }
        ]}
        bgImage="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="18 YEARS OF EXCELLENCE"
            title="Milestones in Global Decarbonization"
            subtitle="From our humble inception in 2008 to deploying the world's most resilient offshore wind turbines and bifacial solar arrays."
            align="center"
          />

          {/* Timeline Container */}
          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Center Vertical Line */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-[#FF7029] via-[#2D3239] to-[#FF7029]" />

            <div className="space-y-12 sm:space-y-16">
              {historyTimeline.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.year}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-8 group`}
                  >
                    {/* Timeline Node Icon in center */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF7029] border-4 border-white shadow-lg flex items-center justify-center text-white z-10 group-hover:scale-125 transition-transform duration-300">
                      <Flag className="w-4 h-4" />
                    </div>

                    {/* Timeline Card */}
                    <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                      <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-xs border border-gray-100 hover:border-[#FF7029] shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                        {/* Year & Milestone Tag */}
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="text-3xl font-black text-[#FF7029] leading-none">
                            {item.year}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-widest bg-[#2D3239] text-white px-2.5 py-1 rounded-xs">
                            {item.milestone}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-extrabold text-[#2D3239] mb-3 group-hover:text-[#FF7029] transition-colors">
                          {item.title}
                        </h3>

                        {/* Image */}
                        <div className="relative aspect-video rounded-xs overflow-hidden mb-4 shadow-xs">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2030 Forward Vision Banner */}
          <div className="mt-20 bg-[#2D3239] text-white p-8 sm:p-12 rounded-xs border-l-4 border-[#FF7029] max-w-4xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF7029] block mb-1">
                // LOOKING AHEAD
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Our 2030 Vision: 50GW Target
              </h3>
              <p className="text-sm text-gray-300 mt-2 max-w-lg leading-relaxed">
                Aiming to power 40 million homes with next-generation deep-water floating turbines, tandem perovskite cells, and megawatt-scale green hydrogen electrolyzers.
              </p>
            </div>

            <Link
              href="/contacts"
              className="bg-[#FF7029] hover:bg-white hover:text-[#2D3239] text-white px-7 py-4 text-xs font-black uppercase tracking-widest rounded-xs transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
