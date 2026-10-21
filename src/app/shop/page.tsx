'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  ShoppingBag,
  Check,
  Search,
  Filter,
  Eye,
  ArrowRight
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { shopProducts, ProductItem } from '@/data/siteData';
import { useCart } from '@/context/CartContext';

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('default');
  const [maxPrice, setMaxPrice] = useState<number>(6000);

  const categories = [
    'All',
    'Solar Panels',
    'Battery Storage',
    'Wind Turbines',
    'Inverters',
    'Accessories'
  ];

  // Filtering
  let filtered = shopProducts.filter((product) => {
    const matchesCat =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= maxPrice;
    return matchesCat && matchesSearch && matchesPrice;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <PageBanner
        title="Renewable Hardware & Equipment"
        eyebrow="COMMERCIAL STORE"
        breadcrumbs={[{ label: 'Shop', href: '/shop' }]}
        bgImage="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* SIDEBAR: FILTERS (3 cols) */}
            <aside className="lg:col-span-3 space-y-8 bg-white p-6 rounded-xs border border-gray-200 shadow-xs">
              {/* Search Widget */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2D3239] mb-3">
                  Search Equipment
                </h4>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7029] p-2.5 pl-9 rounded-xs text-xs text-[#2D3239] focus:outline-none"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2D3239] mb-3 pb-2 border-b border-gray-100">
                  Product Categories
                </h4>
                <div className="space-y-1.5 text-xs font-medium">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-xs transition-colors flex items-center justify-between ${
                        selectedCategory === cat
                          ? 'bg-[#FF7029] text-white font-bold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-[10px] opacity-70">
                        {cat === 'All'
                          ? shopProducts.length
                          : shopProducts.filter((p) => p.category === cat).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#2D3239] mb-2 pb-2 border-b border-gray-100">
                  <span>Filter by Price</span>
                  <span className="text-[#FF7029] font-black">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="6000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#FF7029] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>$100</span>
                  <span>$6,000</span>
                </div>
              </div>

              {/* Promo Callout Card */}
              <div className="bg-[#2D3239] text-white p-5 rounded-xs border-l-4 border-[#FF7029]">
                <span className="text-[10px] font-black uppercase text-[#FF7029] block mb-1">
                  LIMITED OFFER
                </span>
                <h5 className="text-sm font-bold">Use Coupon GREEN20</h5>
                <p className="text-xs text-gray-300 mt-1">
                  Enjoy 20% off all commercial inverters and bifacial panels at checkout.
                </p>
              </div>
            </aside>

            {/* MAIN SHOP CONTENT (9 cols) */}
            <main className="lg:col-span-9 space-y-6">
              {/* Top Controls: Result count & Sort */}
              <div className="bg-white p-4 rounded-xs border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-gray-600 font-medium">
                  Showing <strong>{filtered.length}</strong> of <strong>{shopProducts.length}</strong> products
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-bold uppercase tracking-wider">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#F8FAFC] border border-gray-200 p-2 rounded-xs text-xs font-medium text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                  >
                    <option value="default">Default Sorting</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Average Rating</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              {filtered.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xs border border-gray-200">
                  <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                  <h3 className="text-base font-bold text-gray-700">No products match your criteria.</h3>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                      setMaxPrice(6000);
                    }}
                    className="mt-4 text-xs uppercase font-bold text-[#FF7029] hover:underline"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xs overflow-hidden border border-gray-200 hover:border-[#FF7029] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Image Container with Badges */}
                        <div className="relative aspect-square overflow-hidden bg-gray-50">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                          />

                          {/* Sale Badge */}
                          {product.oldPrice && (
                            <div className="absolute top-3 left-3 bg-[#FF7029] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-xs shadow-xs">
                              SALE
                            </div>
                          )}

                          {/* Quick Actions Hover Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Link
                              href={`/shop/${product.slug}`}
                              className="w-10 h-10 rounded-xs bg-white text-[#2D3239] hover:bg-[#FF7029] hover:text-white flex items-center justify-center transition-colors shadow-md"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => addToCart(product, 1)}
                              className="w-10 h-10 rounded-xs bg-[#FF7029] text-white hover:bg-[#2D3239] flex items-center justify-center transition-colors shadow-md"
                              title="Quick Add to Cart"
                            >
                              <ShoppingBag className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-5">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7029] block mb-1">
                            {product.category}
                          </span>

                          <h3 className="text-sm font-extrabold text-[#2D3239] group-hover:text-[#FF7029] transition-colors line-clamp-2 mb-2">
                            <Link href={`/shop/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h3>

                          {/* Star Ratings */}
                          <div className="flex items-center gap-1 text-[#FF7029] mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < Math.floor(product.rating)
                                    ? 'fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="text-[10px] text-gray-400 ml-1">
                              ({product.reviewsCount})
                            </span>
                          </div>

                          {/* Price */}
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-black text-[#2D3239]">
                              ${product.price.toFixed(2)}
                            </span>
                            {product.oldPrice && (
                              <span className="text-xs text-gray-400 line-through">
                                ${product.oldPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Add to Cart button */}
                      <div className="p-5 pt-0">
                        <button
                          onClick={() => addToCart(product, 1)}
                          className="w-full bg-[#2D3239] hover:bg-[#FF7029] text-white py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
