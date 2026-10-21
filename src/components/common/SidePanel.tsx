'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, MapPin, Mail, Phone, SunMedium, ArrowRight } from 'lucide-react';
import { useUI } from '@/context/UIContext';
import { siteConfig, galleryImages } from '@/data/siteData';

export const SidePanel: React.FC = () => {
  const { isSidePanelOpen, closeSidePanel, openLightbox } = useUI();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSidePanel();
    };
    if (isSidePanelOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isSidePanelOpen, closeSidePanel]);

  if (!isSidePanelOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeSidePanel}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#2D3239] text-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto p-8 transition-transform duration-300">
        <div>
          {/* Top Header with Close */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <Link href="/" onClick={closeSidePanel} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#FF7029] rounded-sm flex items-center justify-center text-white shadow-md group-hover:rotate-45 transition-transform duration-300">
                <SunMedium className="w-6 h-6" />
              </div>
              <div className="leading-tight">
                <span className="text-xl font-extrabold tracking-wider text-white block">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] tracking-widest text-[#FF7029] uppercase font-semibold">
                  Renewable Energy
                </span>
              </div>
            </Link>

            <button
              onClick={closeSidePanel}
              className="w-10 h-10 bg-white/10 hover:bg-[#FF7029] text-white flex items-center justify-center rounded-sm transition-colors"
              aria-label="Close side panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* About blurb */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF7029] mb-3">
              // ABOUT ENERVOX
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Enervox is an international renewable energy contractor pioneering megawatt-scale wind turbine parks, solar photovoltaic plants, and intelligent hybrid microgrid storage systems worldwide.
            </p>
          </div>

          {/* "Our Gallery" 6-image grid with lightbox */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF7029]">
                // OUR GALLERY
              </h3>
              <span className="text-xs text-gray-400">Click to preview</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, index) => (
                <div
                  key={img.id}
                  onClick={() => openLightbox(galleryImages, index)}
                  className="aspect-square relative group overflow-hidden rounded-sm cursor-pointer bg-white/5 border border-white/10"
                >
                  <img
                    src={img.thumb}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#FF7029]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold text-center p-1">
                    <span>View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* "Our Contacts" (address, 2 emails, 2 phones) */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF7029] mb-4">
              // OUR CONTACTS
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#FF7029] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#FF7029] shrink-0" />
                <div className="flex flex-col">
                  {siteConfig.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="hover:text-[#FF7029] transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#FF7029] shrink-0" />
                <div className="flex flex-col">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\D/g, '')}`}
                      className="hover:text-[#FF7029] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Icons and CTA */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Follow Us:</span>
            <div className="flex gap-2">
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/10 hover:bg-[#FF7029] flex items-center justify-center text-xs text-white transition-colors">
                TW
              </a>
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/10 hover:bg-[#FF7029] flex items-center justify-center text-xs text-white transition-colors">
                FB
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/10 hover:bg-[#FF7029] flex items-center justify-center text-xs text-white transition-colors">
                IN
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-sm bg-white/10 hover:bg-[#FF7029] flex items-center justify-center text-xs text-white transition-colors">
                IG
              </a>
            </div>
          </div>

          <Link
            href="/contacts"
            onClick={closeSidePanel}
            className="w-full bg-[#FF7029] hover:bg-white hover:text-[#2D3239] text-white py-3 px-4 font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300 rounded-sm shadow-md"
          >
            <span>Request Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
