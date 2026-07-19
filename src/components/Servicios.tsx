import { motion } from 'framer-motion';
import { Compass, Sprout, PenTool, Droplets, Sun, Scissors, TreePine, FileSpreadsheet } from 'lucide-react';

export default function Servicios() {
  const servicesList = [
    {
      icon: <Compass className="w-8 h-8 text-paisa-light" />,
      title: 'Paisajismo',
      desc: 'Proyectos a gran escala para integrar la naturaleza en entornos urbanos y residenciales de forma armónica.',
    },
    {
      icon: <PenTool className="w-8 h-8 text-paisa-light" />,
      title: 'Diseño de Jardines',
      desc: 'Planos detallados en 3D, selección botánica estratégica y modelado conceptual a la medida de tu espacio.',
    },
    {
      icon: <Sprout className="w-8 h-8 text-paisa-light" />,
      title: 'Jardinería de Lujo',
      desc: 'Instalación y siembra minuciosa de plantas ornamentales, céspedes de alta calidad y floricultura selecta.',
    },
    {
      icon: <Scissors className="w-8 h-8 text-paisa-light" />,
      title: 'Mantenimiento Premium',
      desc: 'Cuidado especializado preventivo y correctivo para conservar la vitalidad y belleza original de tu jardín.',
    },
    {
      icon: <TreePine className="w-8 h-8 text-paisa-light" />,
      title: 'Poda de Altura y Formación',
      desc: 'Podas de saneamiento, aclareo y formación de árboles y palmeras para garantizar su salud y estética visual.',
    },
    {
      icon: <Droplets className="w-8 h-8 text-paisa-light" />,
      title: 'Sistemas de Riego Inteligente',
      desc: 'Instalación de riego por goteo y aspersión automatizados con sensores de lluvia para un uso eficiente del agua.',
    },
    {
      icon: <Sun className="w-8 h-8 text-paisa-light" />,
      title: 'Iluminación de Jardines',
      desc: 'Diseño lumínico exterior con tecnología LED de bajo consumo para destacar puntos clave y crear ambientes mágicos de noche.',
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8 text-paisa-light" />,
      title: 'Consultoría Paisajística',
      desc: 'Estudios de suelo, diagnóstico fitosanitario y asesoría experta en sostenibilidad y selección botánica.',
    },
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 bg-white relative">
      {/* Decorative top organic curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 transform rotate-180 -mt-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px] fill-paisa-cream"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,152.6,44.25,232,61.67,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-paisa-natural font-manrope text-sm font-semibold tracking-wider uppercase mb-3"
          >
            Servicios Exclusivos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-playfair font-bold text-paisa-dark mb-6"
          >
            Nuestras especialidades para <span className="text-paisa-natural italic">embellecer tu entorno</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-paisa-dark/70 font-manrope font-light leading-relaxed"
          >
            Combinamos conocimiento técnico y sensibilidad artística para ofrecer soluciones completas y duraderas que realzan el valor y la estética de tu propiedad.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-paisa-offwhite p-8 rounded-3xl border border-paisa-dark/5 hover:border-paisa-natural/30 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with hover effects */}
                <div className="bg-paisa-dark w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:bg-paisa-natural group-hover:scale-105">
                  {service.icon}
                </div>

                <h3 className="font-playfair font-bold text-xl text-paisa-dark mb-3 group-hover:text-paisa-natural transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-manrope text-sm text-paisa-dark/65 leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Mini Interactive Indicator */}
              <a
                href="#contacto"
                className="inline-flex items-center text-xs font-semibold text-paisa-dark/40 group-hover:text-paisa-natural font-manrope tracking-wider uppercase transition-colors duration-300 gap-1.5"
              >
                Saber más
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
