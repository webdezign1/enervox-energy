'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useUI } from '@/context/UIContext';

export const LightboxModal: React.FC = () => {
  const { lightbox, closeLightbox, nextLightbox, prevLightbox } = useUI();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };

    if (lightbox.isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightbox.isOpen, closeLightbox, nextLightbox, prevLightbox]);

  if (!lightbox.isOpen || lightbox.images.length === 0) return null;

  const current = lightbox.images[lightbox.currentIndex];

  return (
    <div
      onClick={closeLightbox}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 animate-fadeIn select-none"
    >
      {/* Top bar */}
      <div className="absolute top-4 left-0 right-0 px-6 flex items-center justify-between z-20">
        <span className="text-white/70 text-sm font-medium">
          {lightbox.currentIndex + 1} / {lightbox.images.length}
          {current?.title && ` — ${current.title}`}
        </span>
        <button
          onClick={closeLightbox}
          className="w-11 h-11 bg-white/10 hover:bg-[#FF7029] text-white flex items-center justify-center rounded-sm transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[80vh] flex items-center justify-center"
      >
        <img
          src={current?.image}
          alt={current?.title || 'Enervox Renewable Image'}
          className="max-w-full max-h-[75vh] object-contain shadow-2xl rounded"
        />
      </div>

      {/* Prev / Next navigation buttons */}
      {lightbox.images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FF7029] hover:bg-[#2D3239] text-white flex items-center justify-center rounded-sm shadow-lg transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FF7029] hover:bg-[#2D3239] text-white flex items-center justify-center rounded-sm shadow-lg transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Bottom thumbnails */}
      {lightbox.images.length > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-4 flex items-center gap-2 overflow-x-auto max-w-full px-4 py-2"
        >
          {lightbox.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                // Using prev/next or custom selector if needed
              }}
              className={`w-14 h-14 shrink-0 rounded overflow-hidden border-2 transition-all ${
                idx === lightbox.currentIndex
                  ? 'border-[#FF7029] scale-105 opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={img.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
