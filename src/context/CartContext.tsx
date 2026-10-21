'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductItem } from '@/data/siteData';

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductItem, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  coupon: string;
  discountPercentage: number;
  applyCoupon: (code: string) => boolean;
  subtotal: number;
  discountAmount: number;
  shipping: number;
  total: number;
  totalItems: number;
  toastMessage: string | null;
  clearToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState<string>('');
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('enervox_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('enervox_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const addToCart = (product: ProductItem, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity} × "${product.name}" to cart`);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Product removed from cart');
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code: string): boolean => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'GREEN20' || trimmed === 'SOLAR20') {
      setCoupon(trimmed);
      setDiscountPercentage(20);
      showToast('Coupon applied: 20% Discount!');
      return true;
    } else if (trimmed === 'ENERVOX10' || trimmed === 'CLEAN10') {
      setCoupon(trimmed);
      setDiscountPercentage(10);
      showToast('Coupon applied: 10% Discount!');
      return true;
    } else {
      showToast('Invalid coupon code. Try GREEN20 or ENERVOX10');
      return false;
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discountPercentage) / 100;
  const shipping = subtotal > 1000 || subtotal === 0 ? 0 : 50;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        coupon,
        discountPercentage,
        applyCoupon,
        subtotal,
        discountAmount,
        shipping,
        total,
        totalItems,
        toastMessage,
        clearToast: () => setToastMessage(null),
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#2D3239] text-white px-5 py-3.5 shadow-2xl border-l-4 border-[#FF7029] flex items-center gap-3 transition-all animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7029]"></span>
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
