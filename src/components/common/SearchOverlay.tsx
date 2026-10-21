'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, SunMedium, Wind, Layers, ShoppingBag, FileText } from 'lucide-react';
import { useUI } from '@/context/UIContext';
import { serviceCategories, portfolioItems, blogPosts, shopProducts } from '@/data/siteData';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, closeSearch } = useUI();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeSearch();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const q = searchTerm.toLowerCase().trim();

  const filteredServices = q
    ? serviceCategories.filter((s) => s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q))
    : [];

  const filteredPortfolio = q
    ? portfolioItems.filter((p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.location.toLowerCase().includes(q))
    : [];

  const filteredBlog = q
    ? blogPosts.filter((b) => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.category.toLowerCase().includes(q))
    : [];

  const filteredProducts = q
    ? shopProducts.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    : [];

  const totalResults =
    filteredServices.length +
    filteredPortfolio.length +
    filteredBlog.length +
    filteredProducts.length;

  return (
    <div className="fixed inset-0 z-50 bg-[#2D3239]/95 backdrop-blur-md flex flex-col justify-start items-center p-6 md:p-12 overflow-y-auto animate-fadeIn">
      {/* Close button */}
      <div className="w-full max-w-4xl flex justify-end">
        <button
          onClick={closeSearch}
          className="w-12 h-12 bg-white/10 hover:bg-[#FF7029] text-white flex items-center justify-center transition-all duration-300 rounded-sm"
          aria-label="Close search"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main search box */}
      <div className="w-full max-w-3xl mt-10 md:mt-16">
        <div className="text-center mb-8">
          <span className="text-[#FF7029] text-xs font-bold uppercase tracking-widest block mb-2">
            // SEARCH THE ARCHIVE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Type To Search
          </h2>
        </div>

        <div className="relative border-b-2 border-white/20 focus-within:border-[#FF7029] transition-colors pb-3">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search wind turbines, solar panels, microgrids, or products..."
            className="w-full bg-transparent text-xl md:text-3xl text-white placeholder-white/40 focus:outline-none pr-12 font-medium"
          />
          <Search className="w-7 h-7 text-[#FF7029] absolute right-2 top-2" />
        </div>

        {/* Quick popular tags */}
        {!searchTerm && (
          <div className="mt-8 flex flex-wrap gap-2 items-center justify-center text-sm text-gray-300">
            <span className="text-gray-400">Popular keywords:</span>
            {['Wind Turbines', 'Bifacial Solar', 'BESS Storage', 'Offshore', 'Inverters', '550W Panel'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="bg-white/10 hover:bg-[#FF7029] hover:text-white px-3 py-1 rounded-sm text-xs uppercase tracking-wider transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Live results */}
        {searchTerm && (
          <div className="mt-10 space-y-8">
            <div className="flex items-center justify-between text-white/70 text-sm border-b border-white/10 pb-2">
              <span>Search results for: <strong className="text-white">"{searchTerm}"</strong></span>
              <span>{totalResults} matches found</span>
            </div>

            {totalResults === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg">No matching results found for "{searchTerm}".</p>
                <p className="text-sm mt-1">Try searching for "solar", "wind", "battery", or "inverter".</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Services matches */}
                {filteredServices.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    onClick={closeSearch}
                    className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF7029] transition-all group flex items-start gap-4 rounded-sm"
                  >
                    <div className="w-10 h-10 bg-[#FF7029]/20 text-[#FF7029] flex items-center justify-center shrink-0 rounded-sm">
                      <Wind className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#FF7029] tracking-wider">Service</span>
                      <h4 className="text-white font-semibold group-hover:text-[#FF7029] transition-colors">{service.title}</h4>
                      <p className="text-gray-400 text-xs line-clamp-2 mt-1">{service.shortDesc}</p>
                    </div>
                  </Link>
                ))}

                {/* Portfolio matches */}
                {filteredPortfolio.map((item) => (
                  <Link
                    key={item.id}
                    href={`/portfolio/${item.slug}`}
                    onClick={closeSearch}
                    className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF7029] transition-all group flex items-start gap-4 rounded-sm"
                  >
                    <div className="w-10 h-10 bg-[#FF7029]/20 text-[#FF7029] flex items-center justify-center shrink-0 rounded-sm">
                      <SunMedium className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#FF7029] tracking-wider">Case Study ({item.category})</span>
                      <h4 className="text-white font-semibold group-hover:text-[#FF7029] transition-colors">{item.title}</h4>
                      <p className="text-gray-400 text-xs mt-1">{item.location} • {item.capacity}</p>
                    </div>
                  </Link>
                ))}

                {/* Products matches */}
                {filteredProducts.map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/shop/${prod.slug}`}
                    onClick={closeSearch}
                    className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF7029] transition-all group flex items-start gap-4 rounded-sm"
                  >
                    <div className="w-10 h-10 bg-[#FF7029]/20 text-[#FF7029] flex items-center justify-center shrink-0 rounded-sm">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#FF7029] tracking-wider">Shop (${prod.price.toFixed(2)})</span>
                      <h4 className="text-white font-semibold group-hover:text-[#FF7029] transition-colors">{prod.name}</h4>
                      <p className="text-gray-400 text-xs mt-1">{prod.category} • SKU: {prod.sku}</p>
                    </div>
                  </Link>
                ))}

                {/* Blog matches */}
                {filteredBlog.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={closeSearch}
                    className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF7029] transition-all group flex items-start gap-4 rounded-sm"
                  >
                    <div className="w-10 h-10 bg-[#FF7029]/20 text-[#FF7029] flex items-center justify-center shrink-0 rounded-sm">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#FF7029] tracking-wider">Article</span>
                      <h4 className="text-white font-semibold group-hover:text-[#FF7029] transition-colors line-clamp-1">{post.title}</h4>
                      <p className="text-gray-400 text-xs mt-1">{post.date} • {post.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
