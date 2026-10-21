'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Star,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { shopProducts } from '@/data/siteData';
import { useCart } from '@/context/CartContext';

export function SingleProductClient({ slug }: { slug: string }) {
  const { addToCart } = useCart();

  const product = shopProducts.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');

  // Related products
  const related = shopProducts.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <PageBanner
        title={product.name}
        eyebrow={`STORE // ${product.category.toUpperCase()}`}
        breadcrumbs={[
          { label: 'Shop', href: '/shop' },
          { label: product.name.slice(0, 30) + '...' }
        ]}
        bgImage={product.image}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Product Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square rounded-xs overflow-hidden border border-gray-200 bg-gray-50 shadow-md">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                {product.oldPrice && (
                  <div className="absolute top-4 left-4 bg-[#FF7029] text-white text-xs font-black uppercase px-3 py-1 rounded-xs">
                    SAVE ${(product.oldPrice - product.price).toFixed(2)}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex gap-3">
                  {[product.image, ...product.gallery].map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-20 rounded-xs overflow-hidden border-2 transition-all ${
                        activeImage === img
                          ? 'border-[#FF7029] scale-105'
                          : 'border-gray-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info & Purchase Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#FF7029] block mb-1">
                  CATEGORY: {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2D3239] leading-tight">
                  {product.name}
                </h1>

                {/* Rating & Stock */}
                <div className="flex items-center gap-4 mt-3 pb-4 border-b border-gray-100 text-xs">
                  <div className="flex items-center gap-1 text-[#FF7029]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-gray-600 font-bold ml-1">
                      {product.rating} ({product.reviewsCount} customer reviews)
                    </span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5 text-green-600 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>In Stock (SKU: {product.sku})</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-[#2D3239]">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-base text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.shortDesc}
              </p>

              {/* Quantity selector and Add to Cart */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-xs bg-[#F8FAFC]">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="p-3 text-gray-600 hover:text-[#FF7029] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-black text-[#2D3239]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-3 text-gray-600 hover:text-[#FF7029] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-[#FF7029] hover:bg-[#2D3239] text-white py-3.5 px-6 text-xs font-black uppercase tracking-widest rounded-xs transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart (${(product.price * quantity).toFixed(2)})</span>
                </button>
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs text-gray-600">
                <div className="flex items-center gap-2 p-3 bg-[#F8FAFC] rounded-xs border border-gray-100">
                  <Truck className="w-4 h-4 text-[#FF7029] shrink-0" />
                  <span>Worldwide Freight Dispatch</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-[#F8FAFC] rounded-xs border border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-[#FF7029] shrink-0" />
                  <span>25-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-[#F8FAFC] rounded-xs border border-gray-100">
                  <RotateCcw className="w-4 h-4 text-[#FF7029] shrink-0" />
                  <span>30-Day Evaluation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs: Description, Specs, Reviews */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <div className="flex items-center gap-4 border-b border-gray-200 pb-3">
              <button
                onClick={() => setActiveTab('desc')}
                className={`text-sm font-black uppercase tracking-wider pb-3 border-b-2 transition-colors ${
                  activeTab === 'desc'
                    ? 'border-[#FF7029] text-[#FF7029]'
                    : 'border-transparent text-gray-500 hover:text-[#2D3239]'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`text-sm font-black uppercase tracking-wider pb-3 border-b-2 transition-colors ${
                  activeTab === 'specs'
                    ? 'border-[#FF7029] text-[#FF7029]'
                    : 'border-transparent text-gray-500 hover:text-[#2D3239]'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`text-sm font-black uppercase tracking-wider pb-3 border-b-2 transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-[#FF7029] text-[#FF7029]'
                    : 'border-transparent text-gray-500 hover:text-[#2D3239]'
                }`}
              >
                Reviews ({product.reviewsCount})
              </button>
            </div>

            <div className="py-8">
              {activeTab === 'desc' && (
                <div className="prose max-w-none text-sm text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    The <strong>{product.name}</strong> is engineered to meet the highest Tier-1 industrial renewable standards. Manufactured with ultra-pure silicon crystalline ingots and multi-busbar interconnects, it ensures minimal internal resistance and exceptional low-light spectral sensitivity.
                  </p>
                  <p>
                    Certified under international test standards IEC 61215 and IEC 61730, this unit features salt-mist, ammonia, and sand-abrasion resistance, making it suitable for utility megawatt installations in coastal, desert, and extreme climate environments.
                  </p>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="max-w-2xl">
                  <table className="w-full text-xs text-left border border-gray-200">
                    <tbody className="divide-y divide-gray-200 font-medium">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="p-3 font-bold text-[#2D3239] bg-gray-50 w-1/3">
                            {key}
                          </td>
                          <td className="p-3 text-gray-700">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6 max-w-3xl">
                  <div className="p-5 bg-[#F8FAFC] rounded-xs border border-gray-100">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <strong className="text-sm font-bold text-[#2D3239]">David K., EPC Project Director</strong>
                      <span className="text-gray-400">October 12, 2026</span>
                    </div>
                    <div className="flex text-[#FF7029] mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      "We installed 4,000 units of this model in our southern array. The bifacial backside gain exceeded flash-test specifications by 6.2%. Packing and delivery were flawless."
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
