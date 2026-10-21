'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, HelpCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';
import { faqItems, siteConfig } from '@/data/siteData';

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });

  const categories = ['All', 'General', 'Technical', 'Financial', 'Support'];

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredFaqs = faqItems.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchTerm === '' ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        eyebrow="KNOWLEDGE BASE"
        breadcrumbs={[
          { label: 'Page', href: '/about' },
          { label: 'FAQ' }
        ]}
        bgImage="https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="HELP & ANSWERS"
            title="Everything You Need to Know About Our Energy Solutions"
            subtitle="Browse answers to common questions regarding turbine warranties, solar irradiance, PPA financing models, and grid synchronization."
            align="center"
          />

          {/* Search bar & Category Tabs */}
          <div className="max-w-3xl mx-auto mt-8 mb-12 space-y-6">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search FAQ by keyword (e.g. lifespan, battery, financing)..."
                className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7029] p-4 pl-12 rounded-xs text-sm text-[#2D3239] focus:outline-none shadow-xs"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#FF7029] text-white shadow-md'
                      : 'bg-gray-100 text-[#2D3239] hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <HelpCircle className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                <p className="text-base font-semibold">No questions found matching your filter.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                  className="mt-3 text-xs uppercase font-bold text-[#FF7029] hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = !!openIndices[index];

                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xs overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full bg-[#F8FAFC] hover:bg-gray-100 p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-widest text-[#FF7029]">
                          [{faq.category}]
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-[#2D3239]">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#FF7029]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-5 sm:p-6 bg-white border-t border-gray-100 text-sm text-gray-600 leading-relaxed animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-16 max-w-3xl mx-auto bg-[#2D3239] text-white p-8 rounded-xs border-l-4 border-[#FF7029] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-lg font-black uppercase tracking-wider">
                Still have technical questions?
              </h4>
              <p className="text-xs text-gray-300 mt-1">
                Reach out to our customer engineering desk for specialized project documentation.
              </p>
            </div>

            <Link
              href="/contacts"
              className="bg-[#FF7029] hover:bg-white hover:text-[#2D3239] text-white px-6 py-3.5 text-xs font-black uppercase tracking-widest rounded-xs transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Contact Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
