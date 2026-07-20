import { motion } from 'framer-motion';
import { ShieldCheck, Award, Leaf, Users } from 'lucide-react';

export default function SobreNosotros() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-paisa-light" />,
      title: 'Proyectos Exclusivos',
      desc: 'Diseños de autor a la medida de tu estilo de vida, creando espacios que se integran orgánicamente con la arquitectura de tu hogar.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-paisa-light" />,
      title: 'Calidad Premium',
      desc: 'Seleccionamos minuciosamente cada ejemplar de planta, material y accesorio técnico para garantizar una belleza duradera y resistencia.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-paisa-light" />,
      title: 'Sostenibilidad Activa',
      desc: 'Integramos sistemas ecológicos de ahorro hídrico y especies nativas que fomentan la biodiversidad y minimizan el impacto ambiental.',
    },
    {
      icon: <Users className="w-6 h-6 text-paisa-light" />,
      title: 'Atención Personalizada',
      desc: 'Acompañamos cada fase del proyecto con asesoría experta y constante comunicación, asegurando la materialización exacta de tu visión.',
    },
  ];

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-paisa-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Images Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Background blob for organic feel */}
            <div className="absolute w-72 h-72 bg-paisa-light/10 rounded-full blur-3xl -top-10 -left-10 z-0" />
            <div className="absolute w-80 h-80 bg-paisa-natural/5 rounded-full blur-3xl -bottom-10 -right-10 z-0" />

            <div className="grid grid-cols-12 gap-4 w-full z-10">
              {/* Main vertical image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="col-span-8 overflow-hidden rounded-3xl shadow-2xl border border-white/40"
              >
                <img
                  src="/fotos/20211229_174310.jpg"
                  alt="Jardín minimalista premium"
                  className="w-full h-[450px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>

              {/* Overlapping square image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="col-span-4 self-end -mb-8 -ml-12 overflow-hidden rounded-2xl shadow-xl border-4 border-paisa-cream z-20 hidden sm:block"
              >
                <img
                  src="/fotos/20190521_112240.jpg"
                  alt="Detalle de diseño paisajístico"
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Copywriting content */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-paisa-natural font-manrope text-sm font-semibold tracking-wider uppercase mb-3"
            >
              Sobre Nosotros
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-playfair font-bold text-paisa-dark leading-tight mb-6"
            >
              Creamos escenarios vivos de <span className="text-paisa-natural italic">belleza y serenidad</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-paisa-dark/70 font-manrope font-light leading-relaxed mb-8"
            >
              En <strong>Paisaflora</strong>, concebimos el paisajismo como la unión perfecta entre el arte contemporáneo y la ciencia botánica. Contamos con años de experiencia diseñando, ejecutando y manteniendo jardines de alta gama para chalés de lujo, villas exclusivas y espacios corporativos premium en Valencia y toda la Comunidad Valenciana.
            </motion.p>

            {/* Grid of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="bg-paisa-dark p-2.5 rounded-xl shadow-md border border-white/10 shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-paisa-dark text-base mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="font-manrope text-xs text-paisa-dark/65 leading-relaxed font-light">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
