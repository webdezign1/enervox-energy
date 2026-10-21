'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import {
  Calendar,
  User,
  Clock,
  Share2,
  Bookmark,
  Play,
  Pause,
  ExternalLink,
  Quote as QuoteIcon,
  MessageSquare,
  Send,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { PageBanner } from '@/components/common/PageBanner';
import { blogPosts, BlogPost } from '@/data/siteData';
import { useUI } from '@/context/UIContext';

export function SinglePostClient({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const formatOverride = searchParams.get('format');

  const { openLightbox } = useUI();

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Active format is either from searchParam or post's default format
  const activeFormat = (formatOverride || post.format) as BlogPost['format'];

  // Audio player state for 'music' format
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(35);

  // Comments state
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      date: 'October 19, 2026',
      content: 'Fascinating breakdown of the aerodynamics. Do you foresee 20MW offshore turbines becoming standard before 2030?'
    },
    {
      id: 2,
      author: 'Ingrid Solberg',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      date: 'October 19, 2026',
      content: 'The synthetic inertia response capabilities mentioned here are crucial for island microgrids. Excellent analysis from Enervox engineering.'
    }
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newComment = {
      id: comments.length + 1,
      author: newCommentName.trim(),
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      date: 'Just now',
      content: newCommentText.trim()
    };
    setComments([newComment, ...comments]);
    setNewCommentName('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 4000);
  };

  return (
    <>
      <PageBanner
        title={post.title}
        eyebrow={`BLOG // ${post.category}`}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title.slice(0, 30) + '...' }
        ]}
        bgImage={post.image}
      />

      <article className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* MAIN ARTICLE COLUMN (8 cols) */}
            <main className="lg:col-span-8 space-y-8">
              {/* Metadata strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-1.5 text-[#2D3239]">
                  <Calendar className="w-4 h-4 text-[#FF7029]" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5 text-[#2D3239]">
                  <User className="w-4 h-4 text-[#FF7029]" />
                  <span>By {post.author.name}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF7029]" />
                  <span>{post.readTime}</span>
                </div>
                <span>•</span>
                <span className="bg-[#FF7029]/10 text-[#FF7029] px-2.5 py-0.5 rounded-xs font-bold uppercase tracking-wider text-[10px]">
                  Format: {activeFormat.toUpperCase()}
                </span>
              </div>

              {/* ---------------- 6 FORMAT VARIANT PRESENTATIONS ---------------- */}

              {/* 1. STANDARD FORMAT */}
              {activeFormat === 'standard' && (
                <div className="relative rounded-xs overflow-hidden shadow-2xl aspect-16/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* 2. VIDEO FORMAT */}
              {activeFormat === 'video' && (
                <div className="relative rounded-xs overflow-hidden shadow-2xl aspect-video bg-black border border-gray-800">
                  <iframe
                    src="https://www.youtube.com/embed/1kUE0BZtTRc?autoplay=0"
                    title={post.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* 3. GALLERY FORMAT */}
              {activeFormat === 'gallery' && (
                <div className="space-y-4">
                  <div className="relative rounded-xs overflow-hidden shadow-2xl aspect-16/10">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover cursor-pointer hover:scale-102 transition-transform"
                      onClick={() =>
                        openLightbox(
                          (post.galleryImages || [post.image]).map((img) => ({
                            image: img,
                            title: post.title
                          }))
                        )
                      }
                    />
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-xs text-white px-3 py-1.5 text-xs font-bold rounded-xs">
                      Click to launch Gallery Lightbox
                    </div>
                  </div>

                  {post.galleryImages && (
                    <div className="grid grid-cols-3 gap-3">
                      {post.galleryImages.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() =>
                            openLightbox(
                              post.galleryImages!.map((i) => ({ image: i, title: post.title })),
                              idx
                            )
                          }
                          className="aspect-video rounded-xs overflow-hidden cursor-pointer border border-gray-200 hover:border-[#FF7029] transition-all"
                        >
                          <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 4. LINK FORMAT */}
              {activeFormat === 'link' && (
                <div className="bg-[#2D3239] text-white p-8 sm:p-10 rounded-xs border-l-4 border-[#FF7029] shadow-xl">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF7029] block mb-2">
                    // EXTERNAL REFERENCE LINK
                  </span>
                  <h3 className="text-2xl font-black mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.externalLink || 'https://irena.org'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FF7029] hover:bg-white hover:text-[#2D3239] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-xs transition-colors"
                  >
                    <span>Visit Source Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* 5. QUOTE FORMAT */}
              {activeFormat === 'quote' && (
                <div className="bg-[#FF7029] text-white p-8 sm:p-12 rounded-xs shadow-xl relative overflow-hidden">
                  <QuoteIcon className="w-16 h-16 text-white/20 absolute -top-2 -left-2 fill-current" />
                  <blockquote className="text-xl sm:text-2xl font-black italic relative z-10 leading-snug">
                    "{post.quote?.text || post.excerpt}"
                  </blockquote>
                  <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span>— {post.quote?.author || post.author.name}</span>
                    <span className="text-white/80">Enervox Energy Leadership</span>
                  </div>
                </div>
              )}

              {/* 6. MUSIC / AUDIO PODCAST FORMAT */}
              {activeFormat === 'music' && (
                <div className="bg-[#2D3239] text-white p-8 rounded-xs border border-white/10 shadow-xl space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase font-black tracking-widest text-[#FF7029] block mb-1">
                        // EPISODE AUDIO PLAYER
                      </span>
                      <h3 className="text-xl font-bold">The Energy Transition Podcast</h3>
                    </div>
                    <span className="text-xs text-gray-400">Duration: 32:45</span>
                  </div>

                  {/* Audio Controls */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-14 h-14 rounded-full bg-[#FF7029] hover:bg-[#E55A15] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                      aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                    >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
                    </button>

                    <div className="flex-1 space-y-1">
                      <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden cursor-pointer">
                        <div
                          className="bg-[#FF7029] h-full rounded-full transition-all"
                          style={{ width: `${audioProgress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-gray-400">
                        <span>11:28</span>
                        <span>32:45</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Article Editorial Body */}
              <div className="prose max-w-none text-gray-700 space-y-6 text-base leading-relaxed">
                <p className="text-lg font-medium text-[#2D3239] leading-relaxed">
                  {post.excerpt}
                </p>

                <h3 className="text-2xl font-black text-[#2D3239] pt-4">
                  Engineering Foundations & Operational Feasibility
                </h3>
                <p>
                  Deploying renewable generation assets at the multi-gigawatt scale requires careful balancing of mechanical inertia, thermal tolerances, and dynamic grid impedance. In this detailed review, our engineering team evaluated operational data from over 12,000 active wind turbine generators and 400+ solar photovoltaic fields.
                </p>

                <div className="p-6 bg-[#F8FAFC] border-l-4 border-[#FF7029] rounded-xs my-6 text-sm text-gray-700 italic">
                  "The rapid decline in levelized cost of energy (LCOE) for combined bifacial PV and battery storage has fundamentally altered long-range utility capacity planning. Today, renewable hybrid generation is more cost-effective than peaker gas turbines."
                </div>

                <h3 className="text-2xl font-black text-[#2D3239] pt-4">
                  Key Findings & Strategic Recommendations
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li><strong>Active Blade Pitch Telemetry:</strong> Reduces extreme mechanical loads on offshore nacelles by 18% during storm gusts exceeding 25 m/s.</li>
                  <li><strong>Bifacial Albedo Optimization:</strong> Utilizing high-reflectance crushed limestone beneath solar tracking tables boosts annual energy yield by an additional 11.4%.</li>
                  <li><strong>Sub-Second Inverter Synchronization:</strong> Ensures non-tripping operation during sudden transmission voltage sag events.</li>
                </ul>
              </div>

              {/* Author Box */}
              <div className="mt-12 bg-[#F8FAFC] p-8 rounded-xs border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-[#FF7029]"
                />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7029] block">
                    ABOUT THE AUTHOR
                  </span>
                  <h4 className="text-lg font-black text-[#2D3239]">
                    {post.author.name}
                  </h4>
                  <p className="text-xs uppercase font-bold text-gray-500 mb-2">
                    {post.author.role}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Lead researcher and engineer at Enervox, specializing in high-voltage power conversion, aerodynamic turbine performance, and utility storage interconnection.
                  </p>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-14 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-8">
                  <MessageSquare className="w-5 h-5 text-[#FF7029]" />
                  <h3 className="text-xl font-black text-[#2D3239]">
                    Discussion & Comments ({comments.length})
                  </h3>
                </div>

                {/* Existing comments list */}
                <div className="space-y-6 mb-10">
                  {comments.map((comm) => (
                    <div key={comm.id} className="p-5 bg-[#F8FAFC] rounded-xs border border-gray-100 flex gap-4">
                      <img
                        src={comm.avatar}
                        alt={comm.author}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <strong className="text-[#2D3239] text-sm">{comm.author}</strong>
                          <span className="text-gray-400">{comm.date}</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {comm.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit comment form */}
                <form onSubmit={handleCommentSubmit} className="bg-white p-6 border border-gray-200 rounded-xs space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-wider text-[#2D3239]">
                    Leave a Comment
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={newCommentName}
                      onChange={(e) => setNewCommentName(e.target.value)}
                      className="p-3 bg-[#F8FAFC] border border-gray-200 text-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029] rounded-xs"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      className="p-3 bg-[#F8FAFC] border border-gray-200 text-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029] rounded-xs"
                    />
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your thoughts on this technical paper..."
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    className="w-full p-3 bg-[#F8FAFC] border border-gray-200 text-xs text-[#2D3239] focus:outline-none focus:border-[#FF7029] rounded-xs"
                  />
                  <button
                    type="submit"
                    className="bg-[#FF7029] hover:bg-[#2D3239] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
                  >
                    <span>Post Comment</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  {commentSuccess && (
                    <div className="text-xs text-green-600 font-bold flex items-center gap-1.5 animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Comment posted successfully!</span>
                    </div>
                  )}
                </form>
              </div>
            </main>

            {/* SIDEBAR (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Format Switcher Widget */}
              <div className="bg-[#2D3239] text-white p-6 rounded-xs border-t-4 border-[#FF7029]">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7029] block mb-1">
                  // FORMAT SWITCHER
                </span>
                <h4 className="text-sm font-black uppercase tracking-wider mb-4">
                  View This Article In 6 Formats
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  {['standard', 'video', 'gallery', 'link', 'quote', 'music'].map((fmt) => (
                    <Link
                      key={fmt}
                      href={`/blog/${post.slug}?format=${fmt}`}
                      className={`px-3 py-2 text-center rounded-xs uppercase tracking-wider transition-colors ${
                        activeFormat === fmt
                          ? 'bg-[#FF7029] text-white font-bold'
                          : 'bg-white/10 hover:bg-white/20 text-gray-300'
                      }`}
                    >
                      {fmt}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Related Articles */}
              <div className="bg-[#F8FAFC] p-6 rounded-xs border border-gray-200">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#2D3239] mb-4 pb-3 border-b border-gray-200">
                  Related Insights
                </h4>
                <div className="space-y-4">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 3)
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={`/blog/${item.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-xs shrink-0"
                        />
                        <div>
                          <span className="text-[10px] text-[#FF7029] font-bold uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h5 className="text-xs font-bold text-[#2D3239] group-hover:text-[#FF7029] transition-colors line-clamp-2">
                            {item.title}
                          </h5>
                          <span className="text-[10px] text-gray-400 mt-0.5 block">{item.date}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Quick newsletter subscription */}
              <div className="bg-[#1E2228] text-white p-6 rounded-xs border-l-4 border-[#FF7029]">
                <h4 className="text-sm font-black uppercase tracking-wider mb-2">
                  Subscribe to Clean Tech Dispatch
                </h4>
                <p className="text-xs text-gray-400 mb-4">
                  Get peer-reviewed articles and utility project announcements directly to your inbox.
                </p>
                <Link
                  href="/contacts"
                  className="w-full bg-[#FF7029] hover:bg-[#E55A15] text-white py-2.5 text-xs font-black uppercase tracking-wider text-center block rounded-xs transition-colors"
                >
                  Join Newsletter
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
