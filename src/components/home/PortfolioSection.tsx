'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { portfolioItems, PortfolioItem } from '@/data/siteData';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Energy', 'Solar Panels', 'Windmill', 'Commercial'];

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filter Tabs */}
        <div className="mb-12 space-y-6">
          <SectionHeading
            eyebrow="PORTFOLIO SHOWCASE"
            title="Our Latest Case Studies"
            subtitle="Explore 12 landmark clean energy utility arrays engineered, manufactured, and commissioned by Enervox across four continents."
            align="left"
            className="mb-0 max-w-3xl"
          />

          {/* Category Filter Tabs (positioned below heading & subtitle) */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-all duration-300 shadow-xs cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#FF7029] text-white shadow-md'
                    : 'bg-white text-[#2D3239] hover:bg-[#FF7029] hover:text-white border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Portrait Cards (about 390x495 ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="group relative h-[420px] sm:h-[460px] rounded-xs overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-[#2D3239] block"
            >
              {/* Portrait Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />

              {/* Default Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2228] via-[#2D3239]/40 to-transparent group-hover:opacity-0 transition-opacity duration-300" />

              {/* Title & Category shown in idle state */}
              <div className="absolute bottom-0 inset-x-0 p-5 group-hover:opacity-0 transition-opacity duration-300 z-10 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7029] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-extrabold text-white line-clamp-2">
                  {item.title}
                </h3>
              </div>

              {/* Hover Overlay with category tag, full title, specs, and arrow button */}
              <div className="absolute inset-0 bg-[#2D3239]/95 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400 z-20 text-white">
                <div>
                  <div className="inline-block bg-[#FF7029] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xs mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-black text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FF7029]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#FF7029]" />
                    <span className="font-semibold text-white">Capacity: {item.capacity}</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#FF7029]">
                    <span>View Case Study</span>
                    <div className="w-8 h-8 rounded-xs bg-[#FF7029] text-white flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#2D3239] hover:bg-[#FF7029] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md"
          >
            <span>View All Renewable Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
