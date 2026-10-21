'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  SunMedium,
  ArrowUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '@/data/siteData';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const aboutLinks = [
    { label: 'Group Profile', href: '/about' },
    { label: 'Vision & Values', href: '/about#vision' },
    { label: 'History', href: '/history' },
    { label: 'Awards', href: '/about#awards' },
    { label: 'Leadership', href: '/team' },
    { label: 'Spotlight', href: '/portfolio' },
    { label: 'CSR', href: '/about#csr' },
    { label: 'Sustainability', href: '/about#sustainability' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Media', href: '/blog' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/shop' },
  ];

  return (
    <footer className="bg-[#1E2228] text-white pt-16 lg:pt-20 border-t-4 border-[#FF7029] relative z-20">
      {/* 4 Columns Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Logo with short blurb and social icons (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-[#FF7029] rounded-xs flex items-center justify-center text-white shadow-md group-hover:rotate-45 transition-transform duration-300">
                <SunMedium className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white block leading-none">
                  ENER<span className="text-[#FF7029]">VOX</span>
                </span>
                <span className="text-[10px] tracking-widest text-gray-400 uppercase font-semibold block mt-0.5">
                  Renewable Energy
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              Enervox is an international clean tech leader delivering world-class wind turbine plants, utility-scale photovoltaic solar farms, and intelligent hybrid microgrid storage systems for a carbon-neutral planet.
            </p>

            {/* Social Icons */}
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block mb-3">
                Connect With Us
              </span>
              <div className="flex gap-2">
                {[
                  { name: 'Twitter / X', label: 'TW', href: siteConfig.socials.twitter },
                  { name: 'Facebook', label: 'FB', href: siteConfig.socials.facebook },
                  { name: 'LinkedIn', label: 'IN', href: siteConfig.socials.linkedin },
                  { name: 'Instagram', label: 'IG', href: siteConfig.socials.instagram },
                  { name: 'YouTube', label: 'YT', href: siteConfig.socials.youtube }
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="w-9 h-9 rounded-xs bg-[#2D3239] hover:bg-[#FF7029] text-white flex items-center justify-center text-xs font-bold transition-all duration-300 hover:-translate-y-1"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Contacts (address, 2 emails, 2 phones) (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="border-b border-white/10 pb-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF7029] block">
                // GET IN TOUCH
              </span>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                Our Contacts
              </h4>
            </div>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF7029] shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FF7029] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {siteConfig.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block hover:text-[#FF7029] transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF7029] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="block hover:text-[#FF7029] transition-colors font-medium"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: About Links (Group Profile, Vision & Values, History, Awards, etc.) (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-white/10 pb-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF7029] block">
                // EXPLORE
              </span>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                Quick Links
              </h4>
            </div>

            <ul className="grid grid-cols-1 gap-2 text-xs font-semibold uppercase tracking-wider text-gray-300">
              {aboutLinks.slice(0, 10).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FF7029] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-[#FF7029] text-[10px]">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subscribe (newsletter form with email and submit arrow, "Don't worry, we don't spam" note) (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="border-b border-white/10 pb-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF7029] block">
                // NEWSLETTER
              </span>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                Stay Updated
              </h4>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              Subscribe to receive quarterly clean energy reports, global megawatt project announcements, and technology insights.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-[#2D3239] border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7029] rounded-l-xs"
                />
                <button
                  type="submit"
                  className="bg-[#FF7029] hover:bg-[#E55A15] text-white px-5 flex items-center justify-center rounded-r-xs transition-colors shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {isSubscribed && (
                <div className="mt-2 text-xs text-green-400 flex items-center gap-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you for subscribing to Enervox Insights!</span>
                </div>
              )}
            </form>

            <div className="flex items-center gap-2 text-gray-400 text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#FF7029] shrink-0" />
              <span>Don't worry, we don't spam. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="border-t border-white/10 bg-[#16191E] py-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © 2026 <strong className="text-white">Enervox Energy Inc.</strong> All Rights Reserved. Clean Power for a Better World.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/typography" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/elements" className="hover:text-white transition-colors">
              Terms & Compliance
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-white transition-colors">
              Support Center
            </Link>
          </div>
        </div>
      </div>

      {/* Floating "Top" back-to-top button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#FF7029] hover:bg-[#2D3239] text-white flex flex-col items-center justify-center rounded-xs shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20 group"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[9px] font-black uppercase tracking-wider mt-0.5">TOP</span>
        </button>
      )}
    </footer>
  );
};
