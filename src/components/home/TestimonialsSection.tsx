'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { testimonialsData } from '@/data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT TESTIMONIALS"
          title="What Global Partners Say About Us"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-10">
          {/* Left: High-impact image / executive visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xs overflow-hidden shadow-2xl border-4 border-white aspect-4/5">
              <img
                src={current.avatar}
                alt={current.name}
                key={current.id}
                className="w-full h-full object-cover transition-opacity duration-500 animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2228]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-lg font-black text-white">{current.name}</span>
                <span className="text-xs text-[#FF7029] font-bold uppercase tracking-wider">{current.company}</span>
              </div>
            </div>

            {/* Quote badge floating */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-xs bg-[#FF7029] text-white flex items-center justify-center shadow-xl">
              <Quote className="w-8 h-8 fill-current" />
            </div>
          </div>

          {/* Right: Slider with large quote, client name, role ("Client of Company"), arrows (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-12 rounded-xs border border-gray-100 relative">
            {/* 5-Star Rating */}
            <div className="flex gap-1 mb-6 text-[#FF7029]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Large Quote */}
            <blockquote className="text-lg sm:text-2xl font-bold text-[#2D3239] leading-relaxed italic mb-8 min-h-[120px] flex items-center">
              "{current.quote}"
            </blockquote>

            {/* Client name & Role ("Client of Company") */}
            <div className="border-t border-gray-200/80 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-black text-[#2D3239]">
                  {current.name}
                </h4>
                <p className="text-xs uppercase font-bold tracking-wider text-[#FF7029] mt-0.5">
                  {current.role}
                </p>
                <span className="text-xs text-gray-500 block">
                  {current.company}
                </span>
              </div>

              {/* Slider square arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-11 h-11 bg-white hover:bg-[#FF7029] text-[#2D3239] hover:text-white border border-gray-200 hover:border-transparent flex items-center justify-center rounded-xs transition-colors shadow-xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 bg-[#FF7029] hover:bg-[#2D3239] text-white flex items-center justify-center rounded-xs transition-colors shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 transition-all rounded-full ${
                    idx === currentIndex ? 'w-8 bg-[#FF7029]' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
