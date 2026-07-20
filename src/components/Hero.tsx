import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects using Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityY = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-paisa-dark"
    >
      {/* Background Media Container (Parallax) */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full scale-105"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-paisa-dark/80 z-10" />

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          poster="/fotos/20130526_070147.jpg"
        >
          <source src="/fotos/20200724_133516_06.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>

        {/* Fallback Image (always visible on mobile, fallback on desktop) */}
        <img
          src="/fotos/20130526_070147.jpg"
          alt="Jardín Paisaflora"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          loading="eager"
        />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        style={{ y: textY, opacity: opacityY }}
        className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center text-white flex flex-col items-center pt-14 md:pt-18 -mt-2"
      >

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl"
        >
          Transformamos espacios en auténticos{' '}
          <span className="text-paisa-light italic">refugios naturales</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/80 font-manrope font-light max-w-2xl leading-relaxed mb-10"
        >
          Diseñamos y creamos jardines que combinan belleza, armonía y funcionalidad para realzar cada espacio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none"
        >
          <a
            href="#contacto"
            className="flex items-center justify-center gap-2.5 bg-paisa-light hover:bg-white text-paisa-dark px-8 py-4 rounded-full font-manrope text-base font-bold tracking-wide transition-all duration-300 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
          >
            <Calendar className="w-5 h-5 text-paisa-dark" />
            Solicitar presupuesto
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#galeria"
            className="flex items-center justify-center bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-full font-manrope text-base font-semibold tracking-wide transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
          >
            Ver proyectos
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative organic bottom transition curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px] fill-paisa-cream"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,152.6,44.25,232,61.67,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
