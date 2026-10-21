'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  MapPin,
  Zap,
  ArrowRight,
  Maximize2,
  Calendar,
  Grid,
  Columns
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';
import { portfolioItems, PortfolioItem } from '@/data/siteData';
import { useUI } from '@/context/UIContext';

function PortfolioContent() {
  const searchParams = useSearchParams();
  const urlLayout = searchParams.get('layout') || 'grid-3';

  const [layout, setLayout] = useState<string>(urlLayout);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openLightbox } = useUI();

  const categories = ['All', 'Energy', 'Solar Panels', 'Windmill', 'Commercial'];

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  // Compute CSS column layout based on selection
  let gridClass = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
  if (layout === 'grid-2') {
    gridClass = 'grid grid-cols-1 md:grid-cols-2 gap-8';
  } else if (layout === 'grid-3') {
    gridClass = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
  } else if (layout === 'grid-4') {
    gridClass = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5';
  } else if (layout === 'grid-5') {
    gridClass = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4';
  } else if (layout === 'masonry') {
    gridClass = 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
  } else if (layout === 'gallery') {
    gridClass = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';
  }

  return (
    <>
      <PageBanner
        title="Our Global Project Portfolio"
        eyebrow="RENEWABLE INFRASTRUCTURE"
        breadcrumbs={[{ label: 'Portfolio', href: '/portfolio' }]}
        bgImage="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Controls: Categories & Layout Switcher */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-gray-200">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#FF7029] text-white shadow-md'
                      : 'bg-white text-[#2D3239] hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Layout switch buttons */}
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
              <span className="hidden sm:inline mr-1">Columns:</span>
              {['grid-2', 'grid-3', 'grid-4', 'grid-5', 'masonry', 'gallery'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLayout(l)}
                  className={`px-2.5 py-1.5 rounded-xs border text-[10px] font-black uppercase transition-colors ${
                    layout === l
                      ? 'bg-[#2D3239] text-white border-[#2D3239]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#FF7029]'
                  }`}
                >
                  {l.replace('grid-', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Container */}
          <div className={gridClass}>
            {filteredItems.map((item, idx) => {
              if (layout === 'gallery') {
                return (
                  <div
                    key={item.id}
                    onClick={() =>
                      openLightbox(
                        filteredItems.map((p) => ({ image: p.image, title: p.title })),
                        idx
                      )
                    }
                    className="relative aspect-square rounded-xs overflow-hidden cursor-pointer group bg-black shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-[#FF7029]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                      <Maximize2 className="w-6 h-6 mb-2" />
                      <h4 className="text-xs font-black uppercase tracking-wider">{item.title}</h4>
                      <span className="text-[10px] opacity-80 mt-1">{item.capacity}</span>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.slug}`}
                  className={`group relative h-[380px] sm:h-[440px] rounded-xs overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-[#2D3239] block ${
                    layout === 'masonry' ? 'break-inside-avoid mb-6' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />

                  {/* Idle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2228] via-[#2D3239]/40 to-transparent group-hover:opacity-0 transition-opacity duration-300" />

                  {/* Title & Category in idle */}
                  <div className="absolute bottom-0 inset-x-0 p-5 group-hover:opacity-0 transition-opacity duration-300 z-10 text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7029] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-extrabold text-white line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#2D3239]/95 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400 z-20 text-white">
                    <div>
                      <div className="inline-block bg-[#FF7029] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xs mb-3">
                        {item.category}
                      </div>
                      <h3 className="text-base font-black text-white leading-snug">
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
                        <span className="font-semibold text-white">{item.capacity}</span>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#FF7029]">
                        <span>View Project Details</span>
                        <div className="w-8 h-8 rounded-xs bg-[#FF7029] text-white flex items-center justify-center">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm font-bold text-gray-500">Loading Portfolio...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
