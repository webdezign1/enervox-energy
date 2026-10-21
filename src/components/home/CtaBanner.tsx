import React from 'react';
import Link from 'next/link';
import { ArrowRight, Headphones, Clock } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative bg-[#2D3239] text-white py-16 lg:py-20 overflow-hidden border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#FF7029]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#FF7029]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          {/* Big "24/7" Badge */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xs bg-[#FF7029] text-white flex flex-col items-center justify-center shrink-0 shadow-2xl border-2 border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Clock className="w-6 h-6 mb-1 opacity-90" />
            <span className="text-3xl sm:text-4xl font-black leading-none tracking-tight">24/7</span>
            <span className="text-[9px] uppercase font-bold tracking-widest mt-0.5 text-white/90">SUPPORT</span>
          </div>

          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF7029] block mb-2">
              // RAPID RESPONSE TEAM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Have Questions? We are Here to Help You!
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-xl leading-relaxed">
              Our engineering specialists, EPC project managers, and finance teams are ready to analyze your wind, solar, or battery storage initiatives today.
            </p>
          </div>
        </div>

        {/* Action Button: "Learn More" */}
        <div className="shrink-0 flex items-center gap-4">
          <Link
            href="/contacts"
            className="bg-[#FF7029] hover:bg-white hover:text-[#2D3239] text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-xs transition-all duration-300 shadow-xl flex items-center gap-2 group"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
