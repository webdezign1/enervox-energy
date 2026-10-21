import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, Sparkles } from 'lucide-react';
import { servicesStripData } from '@/data/siteData';

export const ServicesStrip: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesStripData.map((card, idx) => (
            <Link
              key={card.id}
              href={card.link}
              className="relative h-[340px] sm:h-[400px] rounded-xs overflow-hidden group shadow-lg block"
            >
              {/* Background Photo with Hover Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              />

              {/* Text Overlay (Dark Gradient) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2228] via-[#2D3239]/70 to-black/20 group-hover:via-[#2D3239]/80 transition-colors" />

              {/* Content */}
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end text-white z-10">
                <div className="inline-flex items-center gap-2 bg-[#FF7029] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-xs w-fit mb-3">
                  {idx === 0 ? <Sparkles className="w-3 h-3" /> : <Wrench className="w-3 h-3" />}
                  <span>{card.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-[#FF7029] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed max-w-lg mb-6 line-clamp-2">
                  {card.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FF7029] transition-colors">
                  <span>Explore Service</span>
                  <div className="w-8 h-8 rounded-xs bg-white/10 group-hover:bg-[#FF7029] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
