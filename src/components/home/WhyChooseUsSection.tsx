import React from 'react';
import Link from 'next/link';
import { SunMedium, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { whyChooseUsData } from '@/data/siteData';

const iconComponents: { [key: string]: React.ElementType } = {
  SunMedium,
  Layers,
  ShieldCheck,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title="We are Building a Sustainable Future"
          subtitle="Combining advanced aerodynamic mechanical engineering, cutting-edge photovoltaic materials, and real-time artificial intelligence to drive your renewable transition."
          align="center"
        />

        {/* 3 Icon-Boxes with hover lifts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {whyChooseUsData.map((box) => {
            const Icon = iconComponents[box.icon] || SunMedium;

            return (
              <div
                key={box.id}
                className="bg-[#F8FAFC] p-8 sm:p-10 rounded-xs border border-gray-100 hover:border-[#FF7029] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-xs bg-[#FF7029]/10 text-[#FF7029] group-hover:bg-[#FF7029] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-xs">
                    <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#2D3239] group-hover:text-[#FF7029] transition-colors mb-3">
                    {box.title}
                  </h3>

                  {/* Short Text */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {box.description}
                  </p>
                </div>

                {/* Arrow link */}
                <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#2D3239] group-hover:text-[#FF7029] transition-colors">
                  <span>Learn Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
