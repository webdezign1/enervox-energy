'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    discountPercentage,
    coupon,
    applyCoupon,
    shipping,
    total,
    clearCart
  } = useCart();

  const [couponInput, setCouponInput] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  return (
    <>
      <PageBanner
        title="Your Shopping Cart"
        eyebrow="COMMERCIAL STORE"
        breadcrumbs={[
          { label: 'Shop', href: '/shop' },
          { label: 'Cart' }
        ]}
        bgImage="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {cart.length === 0 ? (
            <div className="bg-white p-12 sm:p-16 rounded-xs text-center border border-gray-200 max-w-2xl mx-auto shadow-sm">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4 stroke-1" />
              <h2 className="text-2xl font-black text-[#2D3239] mb-2">
                Your Shopping Cart is Empty
              </h2>
              <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto">
                Explore our catalog of certified solar panels, wind turbine generators, commercial inverters, and battery storage modules.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#FF7029] hover:bg-[#2D3239] text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xs transition-colors shadow-md"
              >
                <span>Return to Equipment Store</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* CART TABLE (8 cols) */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xs border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h2 className="text-lg font-black text-[#2D3239] uppercase tracking-wider">
                    Equipment In Cart ({cart.length})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-xs text-gray-400 hover:text-red-500 font-semibold uppercase tracking-wider transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F8FAFC] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-200">
                      <tr>
                        <th className="p-3">Product</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Quantity</th>
                        <th className="p-3">Subtotal</th>
                        <th className="p-3 text-right">Remove</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {cart.map((item) => (
                        <tr key={item.product.id} className="hover:bg-gray-50">
                          <td className="p-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-14 h-14 object-cover rounded-xs shrink-0 border border-gray-200"
                              />
                              <div>
                                <Link
                                  href={`/shop/${item.product.slug}`}
                                  className="font-bold text-[#2D3239] hover:text-[#FF7029] transition-colors line-clamp-1"
                                >
                                  {item.product.name}
                                </Link>
                                <span className="text-[10px] text-gray-400 block mt-0.5">
                                  SKU: {item.product.sku}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="p-3 font-semibold text-gray-700">
                            ${item.product.price.toFixed(2)}
                          </td>

                          <td className="p-3">
                            <div className="flex items-center border border-gray-300 rounded-xs w-fit bg-white">
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity - 1)
                                }
                                className="p-1.5 text-gray-500 hover:text-[#FF7029]"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 font-black text-xs">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity + 1)
                                }
                                className="p-1.5 text-gray-500 hover:text-[#FF7029]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </td>

                          <td className="p-3 font-black text-[#2D3239]">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </td>

                          <td className="p-3 text-right">
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Coupon Code Section */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <form
                    onSubmit={handleApplyCoupon}
                    className="flex w-full sm:w-auto"
                  >
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. GREEN20)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="p-2.5 text-xs bg-[#F8FAFC] border border-gray-200 rounded-l-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                    />
                    <button
                      type="submit"
                      className="bg-[#2D3239] hover:bg-[#FF7029] text-white px-4 text-xs font-bold uppercase tracking-wider rounded-r-xs transition-colors"
                    >
                      Apply Coupon
                    </button>
                  </form>

                  <Link
                    href="/shop"
                    className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#FF7029] transition-colors"
                  >
                    ← Continue Shopping
                  </Link>
                </div>

                {coupon && (
                  <div className="text-xs text-green-700 bg-green-50 p-2.5 rounded-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>
                      Coupon <strong>{coupon}</strong> applied! You saved {discountPercentage}%!
                    </span>
                  </div>
                )}
              </div>

              {/* ORDER SUMMARY (4 cols) */}
              <div className="lg:col-span-4 bg-[#2D3239] text-white p-6 sm:p-8 rounded-xs border-t-4 border-[#FF7029] shadow-xl space-y-6">
                <h3 className="text-base font-black uppercase tracking-wider border-b border-white/10 pb-4">
                  Cart Totals
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Subtotal:</span>
                    <strong className="text-white">${subtotal.toFixed(2)}</strong>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex items-center justify-between text-green-400">
                      <span>Discount ({discountPercentage}%):</span>
                      <strong>-${discountAmount.toFixed(2)}</strong>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Freight Shipping:</span>
                    <strong className="text-white">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </strong>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-base">
                    <span className="font-extrabold uppercase">Total:</span>
                    <strong className="text-xl font-black text-[#FF7029]">
                      ${total.toFixed(2)}
                    </strong>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-[#FF7029] hover:bg-[#E55A15] text-white py-4 text-xs font-black uppercase tracking-widest text-center block rounded-xs transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF7029] shrink-0" />
                  <span>Encrypted 256-Bit SSL Checkout Security</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
