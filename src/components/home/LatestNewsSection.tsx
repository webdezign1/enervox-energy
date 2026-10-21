import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { blogPosts } from '@/data/siteData';

export const LatestNewsSection: React.FC = () => {
  // 4 blog cards as specified
  const newsItems = blogPosts.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="FROM THE BLOG"
            title="Latest Renewable News & Media"
            subtitle="Authoritative industry analysis, breakthrough technological developments, and global clean power case studies."
            align="left"
            className="mb-0 md:mb-0"
          />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF7029] hover:text-[#2D3239] transition-colors pb-2"
          >
            <span>More Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Blog Cards (840x620 image ratio, category tag, date, author, title, excerpt, "Read More") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xs overflow-hidden border border-gray-100 hover:border-[#FF7029] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* 840x620 Aspect Image Container */}
                <div className="relative aspect-14/10 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-[#FF7029] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xs shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  {/* Date & Author */}
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

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-[#2D3239] group-hover:text-[#FF7029] transition-colors line-clamp-2 leading-snug mb-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-5 pt-0 border-t border-gray-100 mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF7029] hover:text-[#2D3239] transition-colors mt-3"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
