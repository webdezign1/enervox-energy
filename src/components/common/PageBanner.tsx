import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  eyebrow?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  eyebrow = 'RENEWABLE ENERGY EXCELLENCE',
  breadcrumbs,
  bgImage = 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1920&auto=format&fit=crop',
}) => {
  return (
    <div className="relative bg-[#2D3239] text-white py-16 md:py-24 overflow-hidden border-b-4 border-[#FF7029]">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2228] via-[#2D3239]/90 to-[#1E2228]/80" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#FF7029_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Content Container (1200px container) */}
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF7029] block mb-2">
            // {eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white capitalize">
            {title}
          </h1>
        </div>

        {/* Breadcrumbs Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="bg-black/40 backdrop-blur-xs px-4 py-2.5 rounded-xs border border-white/10"
        >
          <ol className="flex items-center space-x-2 text-xs md:text-sm font-medium">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-[#FF7029] flex items-center gap-1 transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#FF7029]" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-gray-300 hover:text-[#FF7029] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#FF7029] font-semibold">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};
