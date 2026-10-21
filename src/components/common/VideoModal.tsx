'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useUI } from '@/context/UIContext';

export const VideoModal: React.FC = () => {
  const { videoModal, closeVideoModal } = useUI();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideoModal();
    };
    if (videoModal.isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [videoModal.isOpen, closeVideoModal]);

  if (!videoModal.isOpen) return null;

  return (
    <div
      onClick={closeVideoModal}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 aspect-video"
      >
        <button
          onClick={closeVideoModal}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#FF7029] hover:bg-[#2D3239] text-white flex items-center justify-center rounded-sm transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        <iframe
          src={`${videoModal.videoUrl}?autoplay=1&rel=0`}
          title="Renewable Energy Video Overview"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
