'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Send,
  Zap
} from 'lucide-react';
import { heroSlidesData } from '@/data/siteData';
import { useUI } from '@/context/UIContext';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { openVideoModal } = useUI();
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = heroSlidesData.length;

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [totalSlides]);

  const slide = heroSlidesData[currentSlide];

  return (
    <div
      className="relative w-full h-[600px] sm:h-[680px] lg:h-[760px] overflow-hidden bg-[#2D3239] select-none group"
      onMouseEnter={() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      }}
      onMouseLeave={() => {
        autoPlayRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 7000);
      }}
    >
      {/* Background Slides with cross-fade & zoom */}
      {heroSlidesData.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Photo */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out ${
              idx === currentSlide ? 'scale-105' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${s.bgImage})` }}
          />

          {/* Dark Overlay (Dark #2D3239 with gradient for high readability) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2228]/95 via-[#2D3239]/80 to-transparent" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
      ))}

      {/* Slide Content Container (1200px container) */}
      <div className="relative z-20 h-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white">
          {/* Small Category Tag */}
          <div className="inline-flex items-center gap-2 bg-[#FF7029] text-white px-3.5 py-1 text-xs font-black uppercase tracking-widest rounded-xs mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>{slide.tag}</span>
          </div>

          {/* H1 on Two Lines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[1.08] mb-6 drop-shadow-md">
            <span className="block text-white">{slide.titleLine1}</span>
            <span className="block text-[#FF7029]">{slide.titleLine2}</span>
          </h1>

          {/* Short Paragraph */}
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8 max-w-xl font-medium drop-shadow-xs">
            {slide.description}
          </p>

          {/* Buttons & Video Trigger */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Orange "Learn More" button */}
            <Link
              href={slide.learnMoreLink}
              className="bg-[#FF7029] hover:bg-[#2D3239] text-white px-7 py-4 text-sm font-bold uppercase tracking-wider rounded-xs transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 group/btn border border-transparent hover:border-white/20"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary "Join on Telegram" button */}
            <a
              href={slide.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white hover:text-[#2D3239] text-white border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-wider rounded-xs transition-all duration-300 backdrop-blur-xs flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#FF7029]" />
              <span>Join on Telegram</span>
            </a>

            {/* Circular Pulsing Play Button Opening YouTube Video Modal */}
            <div className="flex items-center gap-3 ml-2">
              <button
                onClick={() => openVideoModal(slide.videoUrl)}
                className="relative w-14 h-14 rounded-full bg-[#FF7029] hover:bg-white text-white hover:text-[#2D3239] flex items-center justify-center transition-all duration-300 shadow-xl group/play"
                aria-label="Play video"
              >
                {/* Pulsing ring animation */}
                <span className="absolute inset-0 rounded-full bg-[#FF7029] animate-ping opacity-30" />
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
              <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest text-white/90">
                Watch Film
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls: Square Orange Buttons with White Arrow Icons */}
      <div className="absolute bottom-10 right-4 sm:right-8 lg:right-16 z-30 flex items-center gap-3">
        {/* Slide Counter */}
        <div className="text-white text-sm font-black tracking-widest mr-3 hidden sm:block">
          <span className="text-[#FF7029]">0{currentSlide + 1}</span>
          <span className="text-white/40"> / 0{totalSlides}</span>
        </div>

        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-[#FF7029] hover:bg-[#2D3239] text-white flex items-center justify-center transition-colors duration-300 shadow-xl rounded-xs"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-[#FF7029] hover:bg-[#2D3239] text-white flex items-center justify-center transition-colors duration-300 shadow-xl rounded-xs"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:hidden">
        {heroSlidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${
              idx === currentSlide ? 'w-8 bg-[#FF7029]' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
