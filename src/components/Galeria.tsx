import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryImage {
  src: string;
  title: string;
  desc: string;
}

export default function Galeria() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      src: '/fotos/20130526_070147.jpg',
      title: 'Residencia San Isidro',
      desc: 'Diseño de parque principal con senderos de piedra natural y macizos florales.',
    },
    {
      src: '/fotos/20190521_112139.jpg',
      title: 'Borde de Estanque',
      desc: 'Composición de herbáceas ornamentales y especies subacuáticas.',
    },
    {
      src: '/fotos/20190521_112240.jpg',
      title: 'Jardín de Entrada Moderno',
      desc: 'Canteros geométricos elevados combinando follajes contrastantes.',
    },
    {
      src: '/fotos/20190521_112254.jpg',
      title: 'Cerco Vivo Estructural',
      desc: 'Cercos verdes podados de manera simétrica para zonificación de áreas.',
    },
    {
      src: '/fotos/20200714_092602.jpg',
      title: 'Parquización Las Heras',
      desc: 'Integración de arbolado de gran porte con praderas rústicas.',
    },
    {
      src: '/fotos/20210211_113803.jpg',
      title: 'Sendero de Bosque Residencial',
      desc: 'Diseño de paso rústico rodeado de helechos y árboles autóctonos.',
    },
    {
      src: '/fotos/20211229_174310.jpg',
      title: 'Jardín Seco de Bajo Cuidado',
      desc: 'Uso estratégico de gramíneas y mulches orgánicos de bajo riego.',
    },
    {
      src: '/fotos/20211229_174340.jpg',
      title: 'Césped Exclusivo Golf',
      desc: 'Nivelación de suelo e instalación de césped bermuda de alta densidad.',
    },
    {
      src: '/fotos/20211229_174406.jpg',
      title: 'Patio de Madera y Gravilla',
      desc: 'Espacio de estar exterior delimitado por borduras de madera tratada.',
    },
    {
      src: '/fotos/Maria Antonieta .jpg',
      title: 'Jardín Clásico Francés',
      desc: 'Canteros simétricos inspirados en la sobriedad y elegancia clásica.',
    },
    {
      src: '/fotos/VideoCapture_20210215-211125.jpg',
      title: 'Terraza Ajardinada',
      desc: 'Conexión de niveles mediante parterres escalonados y herbáceas vivaces.',
    },
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-paisa-natural font-manrope text-sm font-semibold tracking-wider uppercase mb-3 block">
            Galería de Proyectos
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-paisa-dark mb-6">
            Nuestras obras vivas de <span className="text-paisa-natural italic">diseño paisajístico</span>.
          </h2>
          <p className="text-base md:text-lg text-paisa-dark/70 font-manrope font-light leading-relaxed">
            Te presentamos una selección de nuestros trabajos reales de diseño, ejecución y mantenimiento. Cada imagen representa un desafío resuelto con maestría y compromiso verde.
          </p>
        </div>

        {/* Masonry Layout Grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.src}
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
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-paisa-dark/90 via-paisa-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 flex flex-col justify-end p-8" />
                
                {/* Floating scale icon */}
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 z-25 shadow-md">
                  <Maximize2 className="w-4 h-4 text-paisa-dark" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <h3 className="font-playfair font-bold text-lg md:text-xl text-white mb-1.5">
                    {img.title}
                  </h3>
                  <p className="font-manrope text-xs text-white/80 leading-relaxed font-light">
                    {img.desc}
                  </p>
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

            {/* Active Image and details */}
            <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
              <motion.img
                key={galleryImages[selectedIdx].src}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                src={galleryImages[selectedIdx].src}
                alt={galleryImages[selectedIdx].title}
                className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-2xl border border-white/5"
              />

              {/* Title & Desc at bottom of lightbox */}
              <div className="text-center text-white mt-6 max-w-2xl px-4">
                <span className="text-[10px] tracking-[0.25em] text-paisa-light font-bold uppercase mb-2 block">
                  PROYECTO {selectedIdx + 1} de {galleryImages.length}
                </span>
                <h3 className="font-playfair text-xl md:text-2xl font-bold mb-2">
                  {galleryImages[selectedIdx].title}
                </h3>
                <p className="font-manrope text-sm text-white/70 font-light leading-relaxed">
                  {galleryImages[selectedIdx].desc}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
