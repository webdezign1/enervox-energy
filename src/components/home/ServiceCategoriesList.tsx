'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { serviceCategories } from '@/data/siteData';

export const ServiceCategoriesList: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(serviceCategories[0].id);

  const activeCategory = serviceCategories.find((c) => c.id === activeCategoryId) || serviceCategories[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR CORE CAPABILITIES"
          title="Renewable Energy Service Sectors"
          subtitle="Explore our specialized industrial disciplines engineered to maximize capacity factor and guarantee grid compatibility."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-12">
          {/* Left Column: 3 Large Numbered Rows (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-gray-200">
            {serviceCategories.map((service) => {
              const isActive = activeCategoryId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveCategoryId(service.id)}
                  className={`py-8 first:pt-0 last:pb-0 transition-all duration-300 group cursor-pointer ${
                    isActive ? 'pl-4 sm:pl-6 bg-white/70 shadow-sm border-l-4 border-[#FF7029]' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      {/* Large Number */}
                      <span
                        className={`text-3xl sm:text-4xl font-black transition-colors ${
                          isActive ? 'text-[#FF7029]' : 'text-gray-300 group-hover:text-[#FF7029]'
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Title & Short Description */}
                      <div>
                        <h3
                          className={`text-2xl sm:text-3xl font-extrabold transition-colors ${
                            isActive ? 'text-[#FF7029]' : 'text-[#2D3239] group-hover:text-[#FF7029]'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 max-w-lg leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Link */}
                    <Link
                      href={service.href}
                      className={`w-12 h-12 rounded-xs flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#FF7029] text-white shadow-md'
                          : 'bg-gray-100 text-[#2D3239] group-hover:bg-[#FF7029] group-hover:text-white'
                      }`}
                      aria-label={`View ${service.title}`}
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Features list revealed on active */}
                  {isActive && (
                    <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-fadeIn">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <Check className="w-3.5 h-3.5 text-[#FF7029] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Hover Image Reveal Container (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-xs overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                key={activeCategory.id}
                className="w-full h-full object-cover transition-all duration-700 animate-fadeIn"
              />

              {/* Overlay with current category title badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2228]/90 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[#FF7029] text-xs font-black uppercase tracking-widest mb-1">
                  SECTOR {activeCategory.number}
                </span>
                <h4 className="text-2xl font-black text-white">
                  {activeCategory.title}
                </h4>
                <Link
                  href={activeCategory.href}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7029] hover:text-white transition-colors"
                >
                  <span>Explore full specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Decorative background block */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#FF7029]/15 -z-10 rounded-xs" />
          </div>
        </div>
      </div>
    </section>
  );
};
