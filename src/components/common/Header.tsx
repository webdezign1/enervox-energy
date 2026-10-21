'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  SunMedium,
  ArrowRight,
  Trash2
} from 'lucide-react';
import { siteConfig, mainNavigation } from '@/data/siteData';
import { useUI } from '@/context/UIContext';
import { useCart } from '@/context/CartContext';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { openSearch, openSidePanel, isMobileNavOpen, openMobileNav, closeMobileNav } = useUI();
  const { cart, totalItems, subtotal, removeFromCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <header className="w-full relative z-40 select-none">
      {/* 1. TOP BAR (DARK #2D3239) */}
      <div className="bg-[#2D3239] text-gray-300 text-xs border-b border-white/10 hidden lg:block">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          {/* Left contacts */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#FF7029]" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#FF7029]" />
              <a href={`mailto:${siteConfig.emails[0]}`}>{siteConfig.emails[0]}</a>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#FF7029]" />
              <a href={`tel:${siteConfig.phones[0].replace(/\D/g, '')}`}>{siteConfig.phones[0]}</a>
            </div>
          </div>

          {/* Right links and social icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link href="/about" className="hover:text-[#FF7029] transition-colors">
                Careers
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/blog" className="hover:text-[#FF7029] transition-colors">
                News & Media
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/faq" className="hover:text-[#FF7029] transition-colors">
                FAQ
              </Link>
            </div>

            <div className="flex items-center gap-2 pl-4 border-l border-white/10">
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-xs bg-white/10 hover:bg-[#FF7029] hover:text-white flex items-center justify-center text-[10px] transition-colors"
                title="Twitter / X"
              >
                TW
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-xs bg-white/10 hover:bg-[#FF7029] hover:text-white flex items-center justify-center text-[10px] transition-colors"
                title="Facebook"
              >
                FB
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-xs bg-white/10 hover:bg-[#FF7029] hover:text-white flex items-center justify-center text-[10px] transition-colors"
                title="LinkedIn"
              >
                IN
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-xs bg-white/10 hover:bg-[#FF7029] hover:text-white flex items-center justify-center text-[10px] transition-colors"
                title="Instagram"
              >
                IG
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV (STICKY HEADER ON SCROLL) */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-3.5 border-b border-gray-100 z-50'
            : 'bg-white py-5 shadow-xs'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-[#FF7029] rounded-xs flex items-center justify-center text-white shadow-md group-hover:bg-[#2D3239] transition-colors duration-300">
              <SunMedium className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-[#2D3239] block leading-none">
                ENER<span className="text-[#FF7029]">VOX</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-500 uppercase font-semibold block mt-0.5">
                Renewable Energy
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-bold uppercase tracking-wider flex items-center gap-1 transition-colors duration-200 ${
                      isActive
                        ? 'text-[#FF7029]'
                        : 'text-[#2D3239] hover:text-[#FF7029]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-[#FF7029]" />
                    )}
                  </Link>

                  {/* Multi-Level Dropdown */}
                  {hasChildren && (
                    <div
                      className={`absolute left-0 top-full pt-2 w-64 transition-all duration-300 origin-top ${
                        activeDropdown === item.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-[#2D3239] text-white shadow-2xl py-3 border-t-2 border-[#FF7029] rounded-xs">
                        {item.children!.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:text-[#FF7029] hover:pl-7 transition-all duration-200 flex items-center justify-between group/sub"
                          >
                            <span>{subItem.label}</span>
                            <ChevronRight className="w-3 h-3 text-white/30 group-hover/sub:text-[#FF7029] transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 3. RIGHT SIDE OF NAV: SEARCH, MINI CART, HAMBURGER */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <button
              onClick={openSearch}
              className="w-10 h-10 rounded-xs bg-gray-100 hover:bg-[#FF7029] hover:text-white text-[#2D3239] flex items-center justify-center transition-colors duration-300"
              aria-label="Open search overlay"
              title="Type To Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mini Cart Icon & Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMiniCartOpen(true)}
              onMouseLeave={() => setIsMiniCartOpen(false)}
            >
              <Link
                href="/cart"
                onClick={() => setIsMiniCartOpen((prev) => !prev)}
                className="w-10 h-10 rounded-xs bg-gray-100 hover:bg-[#FF7029] hover:text-white text-[#2D3239] flex items-center justify-center transition-colors duration-300 relative"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF7029] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mini Cart Dropdown ("No products in the cart" or items list) */}
              <div
                className={`absolute right-0 top-full pt-2 w-80 transition-all duration-300 origin-top-right z-50 ${
                  isMiniCartOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-[#2D3239] text-white shadow-2xl p-5 border-t-2 border-[#FF7029] rounded-xs">
                  {cart.length === 0 ? (
                    <div className="text-center py-6">
                      <ShoppingBag className="w-10 h-10 mx-auto text-gray-500 mb-2 stroke-1" />
                      <p className="text-sm font-semibold text-gray-300">
                        No products in the cart.
                      </p>
                      <Link
                        href="/shop"
                        className="mt-3 inline-block text-xs uppercase font-bold text-[#FF7029] hover:underline"
                        onClick={() => setIsMiniCartOpen(false)}
                      >
                        Browse Shop
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <div className="max-h-60 overflow-y-auto space-y-3 pr-1 divide-y divide-white/10">
                        {cart.map((item) => (
                          <div
                            key={item.product.id}
                            className="pt-3 first:pt-0 flex items-center gap-3"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-12 h-12 object-cover rounded-xs shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="text-xs font-semibold text-white truncate">
                                {item.product.name}
                              </h5>
                              <p className="text-xs text-gray-400">
                                {item.quantity} ×{' '}
                                <strong className="text-[#FF7029]">
                                  ${item.product.price.toFixed(2)}
                                </strong>
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-red-400 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-sm">
                        <span className="text-gray-300 font-medium">Subtotal:</span>
                        <strong className="text-white text-base">
                          ${subtotal.toFixed(2)}
                        </strong>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <Link
                          href="/cart"
                          onClick={() => setIsMiniCartOpen(false)}
                          className="bg-white/10 hover:bg-white/20 text-white text-center py-2 text-xs uppercase font-bold rounded-xs transition-colors"
                        >
                          View Cart
                        </Link>
                        <Link
                          href="/checkout"
                          onClick={() => setIsMiniCartOpen(false)}
                          className="bg-[#FF7029] hover:bg-[#E55A15] text-white text-center py-2 text-xs uppercase font-bold rounded-xs transition-colors"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Hamburger Icon (Opens Side Panel) */}
            <button
              onClick={openSidePanel}
              className="w-10 h-10 rounded-xs bg-[#2D3239] hover:bg-[#FF7029] text-white flex items-center justify-center transition-colors duration-300"
              aria-label="Open side panel"
              title="Open Side Panel"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={openMobileNav}
              className="lg:hidden w-10 h-10 rounded-xs bg-gray-100 hover:bg-[#FF7029] hover:text-white text-[#2D3239] flex items-center justify-center transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE SLIDE-IN HAMBURGER MENU WITH ACCORDION SUBMENUS */}
      {isMobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={closeMobileNav}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          {/* Off-canvas menu drawer */}
          <div className="relative w-4/5 max-w-sm bg-[#2D3239] text-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto p-6">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <Link href="/" onClick={closeMobileNav} className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-[#FF7029] rounded-xs flex items-center justify-center text-white">
                    <SunMedium className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-black tracking-wider text-white">
                      ENER<span className="text-[#FF7029]">VOX</span>
                    </span>
                  </div>
                </Link>
                <button
                  onClick={closeMobileNav}
                  className="w-9 h-9 bg-white/10 text-white flex items-center justify-center rounded-xs"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Accordion navigation items */}
              <div className="space-y-1">
                {mainNavigation.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = !!mobileExpanded[item.label];

                  return (
                    <div key={item.label} className="border-b border-white/5 pb-1">
                      <div className="flex items-center justify-between py-2.5">
                        <Link
                          href={item.href}
                          onClick={closeMobileNav}
                          className="text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#FF7029] transition-colors"
                        >
                          {item.label}
                        </Link>
                        {hasChildren && (
                          <button
                            onClick={() => toggleMobileSubmenu(item.label)}
                            className="p-1.5 text-gray-400 hover:text-[#FF7029]"
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180 text-[#FF7029]' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Accordion content */}
                      {hasChildren && isExpanded && (
                        <div className="pl-4 pb-2 space-y-1.5 border-l-2 border-[#FF7029] my-1 ml-2">
                          {item.children!.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={closeMobileNav}
                              className="block py-1.5 text-xs text-gray-300 hover:text-[#FF7029] transition-colors uppercase tracking-wider font-semibold"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer with quick contacts */}
            <div className="pt-6 border-t border-white/10 mt-6 space-y-3 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF7029]" />
                <a href={`tel:${siteConfig.phones[0].replace(/\D/g, '')}`}>{siteConfig.phones[0]}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF7029]" />
                <a href={`mailto:${siteConfig.emails[0]}`}>{siteConfig.emails[0]}</a>
              </div>

              <Link
                href="/contacts"
                onClick={closeMobileNav}
                className="w-full bg-[#FF7029] text-white py-2.5 text-center font-bold text-xs uppercase tracking-wider rounded-xs block mt-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
