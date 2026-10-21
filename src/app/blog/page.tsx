'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Calendar,
  User,
  ArrowRight,
  Video,
  Image as ImageIcon,
  Link as LinkIcon,
  Quote,
  Music,
  LayoutGrid,
  List,
  Columns
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { SectionHeading } from '@/components/common/SectionHeading';
import { blogPosts, BlogPost } from '@/data/siteData';

function BlogContent() {
  const searchParams = useSearchParams();
  const urlLayout = searchParams.get('layout') || 'grid-3';

  const [layout, setLayout] = useState<string>(urlLayout);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'WIND ENERGY',
    'SOLAR INNOVATION',
    'HYBRID & STORAGE',
    'CLEAN TECH',
    'INDUSTRY POLICY',
    'PODCAST'
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  const getFormatIcon = (format: BlogPost['format']) => {
    switch (format) {
      case 'video':
        return <Video className="w-3.5 h-3.5 text-white" />;
      case 'gallery':
        return <ImageIcon className="w-3.5 h-3.5 text-white" />;
      case 'link':
        return <LinkIcon className="w-3.5 h-3.5 text-white" />;
      case 'quote':
        return <Quote className="w-3.5 h-3.5 text-white" />;
      case 'music':
        return <Music className="w-3.5 h-3.5 text-white" />;
      default:
        return null;
    }
  };

  // Determine grid columns CSS based on selected layout
  let gridClass = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
  if (layout === 'listing') {
    gridClass = 'space-y-10';
  } else if (layout === 'grid-2') {
    gridClass = 'grid grid-cols-1 md:grid-cols-2 gap-8';
  } else if (layout === 'grid-3') {
    gridClass = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
  } else if (layout === 'grid-4') {
    gridClass = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6';
  } else if (layout === 'masonry') {
    gridClass = 'columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8';
  }

  return (
    <>
      <PageBanner
        title="News, Media & Industry Insights"
        eyebrow="RENEWABLE ENERGY JOURNAL"
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
        bgImage="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls: Category Filter and Layout Switcher */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-gray-200">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#FF7029] text-white shadow-md'
                      : 'bg-white text-[#2D3239] hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Layout Switcher Buttons */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
              <span className="hidden sm:inline">Layout:</span>
              <button
                onClick={() => setLayout('listing')}
                className={`p-2 rounded-xs border transition-colors ${
                  layout === 'listing'
                    ? 'bg-[#2D3239] text-white border-[#2D3239]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#FF7029]'
                }`}
                title="Listing View"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayout('grid-2')}
                className={`p-2 rounded-xs border transition-colors ${
                  layout === 'grid-2'
                    ? 'bg-[#2D3239] text-white border-[#2D3239]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#FF7029]'
                }`}
                title="Grid 2 Columns"
              >
                <Columns className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayout('grid-3')}
                className={`p-2 rounded-xs border transition-colors ${
                  layout === 'grid-3'
                    ? 'bg-[#2D3239] text-white border-[#2D3239]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#FF7029]'
                }`}
                title="Grid 3 Columns"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayout('grid-4')}
                className={`p-2 rounded-xs border transition-colors ${
                  layout === 'grid-4'
                    ? 'bg-[#2D3239] text-white border-[#2D3239]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#FF7029]'
                }`}
                title="Grid 4 Columns"
              >
                <span className="text-[10px] px-0.5 font-black">4 COL</span>
              </button>
              <button
                onClick={() => setLayout('masonry')}
                className={`p-2 rounded-xs border transition-colors ${
                  layout === 'masonry'
                    ? 'bg-[#2D3239] text-white border-[#2D3239]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#FF7029]'
                }`}
                title="Masonry View"
              >
                <span className="text-[10px] px-0.5 font-black">MASONRY</span>
              </button>
            </div>
          </div>

          {/* Posts Container */}
          <div className={gridClass}>
            {filteredPosts.map((post) => {
              const formatIcon = getFormatIcon(post.format);
              const postUrl = `/blog/${post.slug}${post.format !== 'standard' ? `?format=${post.format}` : ''}`;

              if (layout === 'listing') {
                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-xs overflow-hidden border border-gray-100 hover:border-[#FF7029] shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 group"
                  >
                    <div className="md:col-span-5 relative aspect-16/10 rounded-xs overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute top-3 left-3 bg-[#FF7029] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xs flex items-center gap-1.5 shadow-sm">
                        {formatIcon}
                        <span>{post.category}</span>
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-3">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#FF7029]" />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-[#FF7029]" />
                          <span>{post.author.name}</span>
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-[#2D3239] group-hover:text-[#FF7029] transition-colors">
                        <Link href={postUrl}>{post.title}</Link>
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="pt-2">
                        <Link
                          href={postUrl}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7029] hover:text-[#2D3239] transition-colors"
                        >
                          <span>Read Full Story ({post.format.toUpperCase()})</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={post.id}
                  className={`bg-white rounded-xs overflow-hidden border border-gray-100 hover:border-[#FF7029] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${
                    layout === 'masonry' ? 'break-inside-avoid mb-8' : ''
                  }`}
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-14/10 overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute top-3 left-3 bg-[#FF7029] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xs flex items-center gap-1.5 shadow-sm">
                        {formatIcon}
                        <span>{post.category}</span>
                      </div>

                      {post.format !== 'standard' && (
                        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-xs">
                          Format: {post.format}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#FF7029]" />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-[#FF7029]" />
                          <span className="truncate max-w-[80px]">{post.author.name}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-black text-[#2D3239] group-hover:text-[#FF7029] transition-colors leading-snug mb-3">
                        <Link href={postUrl}>{post.title}</Link>
                      </h3>

                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                    <Link
                      href={postUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF7029] hover:text-[#2D3239] transition-colors mt-3"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm font-bold text-gray-500">Loading Articles...</div>}>
      <BlogContent />
    </Suspense>
  );
}
