import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Photo {
  id: string;
  src: string;
  alt: string;
}

export function PhotoManager() {
  const pinnedPhotos: Photo[] = [
    { id: '2', src: '/gallery/photo-2.jpg', alt: 'Photography 1' },
    { id: '5', src: '/gallery/photo-5.jpg', alt: 'Photography 2' },
    { id: '4', src: '/gallery/photo-4.jpg', alt: 'Photography 3' },
    { id: '3', src: '/gallery/photo-3.jpg', alt: 'Photography 4' },
    { id: '6', src: '/gallery/photo-6.jpg', alt: 'Photography 5' },
    { id: '1', src: '/gallery/photo-1.jpg', alt: 'Photography 6' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground text-left">Photography</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 transition-all duration-500">
        <AnimatePresence initial={false} mode="popLayout">
          {pinnedPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] bg-neutral-900 overflow-hidden group relative rounded-sm"
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="pt-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/5" />
        <div className="h-px w-4 bg-white/5" />
      </div>
    </div>
  );
}
