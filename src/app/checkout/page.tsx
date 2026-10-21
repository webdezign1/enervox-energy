'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CreditCard,
  Building,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShoppingBag
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { cart, subtotal, discountAmount, shipping, total, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wire' | 'credits'>('card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: 'United States (US)',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    notes: ''
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `EVX-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <>
      <PageBanner
        title="Checkout & Order Finalization"
        eyebrow="COMMERCIAL STORE"
        breadcrumbs={[
          { label: 'Shop', href: '/shop' },
          { label: 'Cart', href: '/cart' },
          { label: 'Checkout' }
        ]}
        bgImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {orderPlaced ? (
            <div className="bg-white p-10 sm:p-16 rounded-xs text-center border-t-4 border-[#FF7029] max-w-2xl mx-auto shadow-2xl animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[#FF7029] block mb-2">
                ORDER SUCCESSFUL
              </span>
              <h2 className="text-3xl font-black text-[#2D3239] mb-3">
                Thank You for Your Order!
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Your order reference is <strong className="text-[#2D3239]">{orderId}</strong>. A copy of the commercial invoice and tracking telemetry has been sent to your email.
              </p>

              <div className="p-4 bg-[#F8FAFC] rounded-xs border border-gray-200 text-xs text-gray-700 max-w-md mx-auto mb-8 text-left space-y-1">
                <div><strong>Delivery ETA:</strong> 3-5 Business Days (Freight Dispatch)</div>
                <div><strong>Support Hotline:</strong> +1 (800) 456-7890 (Option 2)</div>
              </div>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#FF7029] hover:bg-[#2D3239] text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xs transition-colors shadow-md"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : cart.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-xs max-w-lg mx-auto border border-gray-200">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800">Your cart is empty.</h3>
              <p className="text-xs text-gray-500 mt-1 mb-6">Please add items to your cart before proceeding to checkout.</p>
              <Link
                href="/shop"
                className="bg-[#FF7029] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xs inline-block"
              >
                Go to Shop
              </Link>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* BILLING DETAILS (7 cols) */}
              <div className="lg:col-span-7 bg-white p-8 rounded-xs border border-gray-200 shadow-sm space-y-6">
                <h3 className="text-base font-black text-[#2D3239] uppercase tracking-wider border-b border-gray-100 pb-3">
                  Billing & Shipping Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                  />
                </div>

                <div className="text-xs">
                  <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="House number and street name"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                      Town / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                      State / Province *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                      Postal Code / ZIP *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block font-bold uppercase tracking-wider text-[#2D3239] mb-1">
                    Special Shipping / Loading Dock Instructions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Crane lift requirements, site access codes, freight delivery schedule..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-gray-200 p-3 rounded-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029]"
                  />
                </div>
              </div>

              {/* ORDER SUMMARY & PAYMENT (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#2D3239] text-white p-6 sm:p-8 rounded-xs border-t-4 border-[#FF7029] shadow-xl space-y-6">
                  <h3 className="text-base font-black uppercase tracking-wider border-b border-white/10 pb-3">
                    Your Order Summary
                  </h3>

                  {/* Line items review */}
                  <div className="max-h-56 overflow-y-auto space-y-3 pr-2 divide-y divide-white/10 text-xs">
                    {cart.map((item) => (
                      <div key={item.product.id} className="pt-2 first:pt-0 flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {item.product.name} × {item.quantity}
                        </span>
                        <strong className="text-white shrink-0">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </strong>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal:</span>
                      <strong className="text-white">${subtotal.toFixed(2)}</strong>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount:</span>
                        <strong>-${discountAmount.toFixed(2)}</strong>
                      </div>
                    )}

                    <div className="flex justify-between text-gray-300">
                      <span>Freight Shipping:</span>
                      <strong className="text-white">
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                      </strong>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex justify-between text-base">
                      <span className="font-extrabold uppercase">Total:</span>
                      <strong className="text-xl font-black text-[#FF7029]">
                        ${total.toFixed(2)}
                      </strong>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-gray-300">
                      Payment Options
                    </h4>

                    <div className="space-y-2 text-xs">
                      <label className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xs cursor-pointer hover:bg-white/10 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="accent-[#FF7029]"
                        />
                        <CreditCard className="w-4 h-4 text-[#FF7029]" />
                        <span>Credit / Debit Card (Stripe SSL)</span>
                      </label>

                      <label className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xs cursor-pointer hover:bg-white/10 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'wire'}
                          onChange={() => setPaymentMethod('wire')}
                          className="accent-[#FF7029]"
                        />
                        <Building className="w-4 h-4 text-[#FF7029]" />
                        <span>Direct Bank Wire Transfer (Corporate ACH)</span>
                      </label>

                      <label className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xs cursor-pointer hover:bg-white/10 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'credits'}
                          onChange={() => setPaymentMethod('credits')}
                          className="accent-[#FF7029]"
                        />
                        <ShieldCheck className="w-4 h-4 text-[#FF7029]" />
                        <span>Verified Green Energy Credits (REC)</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF7029] hover:bg-[#E55A15] text-white py-4 text-xs font-black uppercase tracking-widest rounded-xs transition-colors shadow-xl flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Place Order (${total.toFixed(2)})</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
