'use client';

import React from 'react';
import { partnerLogos } from '@/data/siteData';

export const PartnersCarousel: React.FC = () => {
  // Duplicate logos array for seamless infinite marquee loop
  const logosLoop = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="py-14 bg-[#2D3239] text-white overflow-hidden border-y border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-xs uppercase tracking-widest text-[#FF7029] font-bold">
          // TRUSTED BY GLOBAL ENERGY LEADERS & UTILITY PROVIDERS
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Subtle gradient masks on sides */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#2D3239] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#2D3239] to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee space-x-8 sm:space-x-12 py-2">
          {logosLoop.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xs bg-white/5 border border-white/5 hover:border-[#FF7029] hover:bg-white/10 transition-all duration-300 cursor-pointer group shrink-0"
            >
              {/* Brand Emblem */}
              <div className="w-10 h-10 rounded-xs bg-white/10 group-hover:bg-[#FF7029] text-gray-400 group-hover:text-white flex items-center justify-center font-black text-xs transition-colors duration-300">
                {partner.logoText.slice(0, 2)}
              </div>

              <div>
                <span className="text-sm font-black tracking-widest text-gray-400 group-hover:text-white uppercase transition-colors duration-300 block">
                  {partner.logoText}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-[#FF7029] font-bold block transition-colors duration-300">
                  {partner.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
