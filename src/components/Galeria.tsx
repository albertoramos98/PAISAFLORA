import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Galeria() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryImages: string[] = [
    '/fotos/20130526_070147.jpg',
    '/fotos/20190521_112139.jpg',
    '/fotos/20190521_112240.jpg',
    '/fotos/20190521_112254.jpg',
    '/fotos/20200714_092602.jpg',
    '/fotos/20210211_113803.jpg',
    '/fotos/20211229_174310.jpg',
    '/fotos/20211229_174340.jpg',
    '/fotos/20211229_174406.jpg',
    '/fotos/Maria Antonieta .jpg',
    '/fotos/VideoCapture_20210215-211125.jpg',
  ];

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  }, [selectedIdx, galleryImages.length]);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
  }, [selectedIdx, galleryImages.length]);

  // Handle keyboard events in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handleNext, handlePrev]);

  return (
    <section id="galeria" className="py-24 md:py-32 bg-paisa-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-paisa-natural font-manrope text-sm font-semibold tracking-wider uppercase mb-3 block">
            Galería de Proyectos
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-paisa-dark">
            Nuestras obras vivas de <span className="text-paisa-natural italic">diseño paisajístico</span>.
          </h2>
        </div>

        {/* Masonry Layout Grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeOut' }}
              onClick={() => setSelectedIdx(idx)}
              className="break-inside-avoid relative overflow-hidden rounded-3xl group cursor-pointer shadow-md hover:shadow-2xl border border-paisa-dark/5 bg-white transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden w-full h-full">
                <img
                  src={src}
                  alt="Proyecto Paisaflora"
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Floating scale icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 z-20 shadow-lg">
                  <Maximize2 className="w-5 h-5 text-paisa-dark" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-100 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-[110]"
              aria-label="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Image Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all duration-300 z-[110] cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Image Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all duration-300 z-[110] cursor-pointer"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Active Image */}
            <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
              <motion.img
                key={galleryImages[selectedIdx]}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                src={galleryImages[selectedIdx]}
                alt="Proyecto Paisaflora"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/5"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
