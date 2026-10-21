'use client';

import React, { createContext, useContext, useState } from 'react';

export interface LightboxImage {
  id?: number | string;
  image: string;
  title?: string;
}

interface UIContextType {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  isSidePanelOpen: boolean;
  openSidePanel: () => void;
  closeSidePanel: () => void;
  isMobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  videoModal: {
    isOpen: boolean;
    videoUrl: string;
  };
  openVideoModal: (url: string) => void;
  closeVideoModal: () => void;
  lightbox: {
    isOpen: boolean;
    images: LightboxImage[];
    currentIndex: number;
  };
  openLightbox: (images: LightboxImage[], startIndex?: number) => void;
  closeLightbox: () => void;
  nextLightbox: () => void;
  prevLightbox: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: 'https://www.youtube.com/embed/1kUE0BZtTRc',
  });
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: LightboxImage[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const openVideoModal = (url: string) => {
    // Convert watch url to embed if needed
    let embedUrl = url;
    if (url.includes('watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/');
    }
    setVideoModal({ isOpen: true, videoUrl: embedUrl });
  };

  const closeVideoModal = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  const openLightbox = (images: LightboxImage[], startIndex: number = 0) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: startIndex,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const nextLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <UIContext.Provider
      value={{
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        isSidePanelOpen,
        openSidePanel: () => setIsSidePanelOpen(true),
        closeSidePanel: () => setIsSidePanelOpen(false),
        isMobileNavOpen,
        openMobileNav: () => setIsMobileNavOpen(true),
        closeMobileNav: () => setIsMobileNavOpen(false),
        videoModal,
        openVideoModal,
        closeVideoModal,
        lightbox,
        openLightbox,
        closeLightbox,
        nextLightbox,
        prevLightbox,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
