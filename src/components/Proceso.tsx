import { motion } from 'framer-motion';
import { ClipboardList, MapPin, FileCode2, Flower, Sparkles } from 'lucide-react';

export default function Proceso() {
  const steps = [
    {
      num: '01',
      icon: <ClipboardList className="w-6 h-6 text-paisa-light" />,
      title: 'Primer Contacto',
      desc: 'Escuchamos tus ideas y necesidades. Conversamos sobre el estilo que imaginas, el uso del espacio y tus preferencias botánicas iniciales para trazar el rumbo del proyecto.',
    },
    {
      num: '02',
      icon: <MapPin className="w-6 h-6 text-paisa-light" />,
      title: 'Visita Técnica de Campo',
      desc: 'Realizamos una visita en el terreno para analizar aspectos ecológicos clave: asoleamiento, calidad de suelo, drenaje, vientos y la relación arquitectónica del entorno.',
    },
    {
      num: '03',
      icon: <FileCode2 className="w-6 h-6 text-paisa-light" />,
      title: 'Diseño Paisajístico y Cotización',
      desc: 'Desarrollamos una propuesta conceptual que incluye planos bidimensionales, selección de especies botánicas óptimas y presupuesto detallado sin costos ocultos.',
    },
    {
      num: '04',
      icon: <Flower className="w-6 h-6 text-paisa-light" />,
      title: 'Ejecución y Parquización',
      desc: 'Nuestro equipo especializado prepara la tierra, instala la infraestructura técnica de riego e iluminación, y siembra de forma cuidadosa cada ejemplar botánico.',
    },
    {
      num: '05',
      icon: <Sparkles className="w-6 h-6 text-paisa-light" />,
      title: 'Entrega y Recepción',
      desc: 'Te entregamos tu nuevo refugio natural en su máximo esplendor, acompañado de un plan detallado de cuidados y pautas para que disfrutes de su maduración saludable.',
    },
  ];

  return (
    <section id="proceso" className="py-24 md:py-32 bg-paisa-dark text-white relative overflow-hidden">
      {/* Background design accents */}
      <div className="absolute w-[500px] h-[500px] bg-paisa-natural/10 rounded-full blur-3xl -top-40 -right-40" />
      <div className="absolute w-[500px] h-[500px] bg-paisa-light/5 rounded-full blur-3xl -bottom-40 -left-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-paisa-light font-manrope text-sm font-semibold tracking-wider uppercase mb-3 block">
            Nuestro Proceso Exclusivo
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
            Cómo creamos tu <span className="text-paisa-light italic">refugio natural</span>.
          </h2>
          <p className="text-base md:text-lg text-white/70 font-manrope font-light leading-relaxed">
            Desde la primera conversación hasta el día de la entrega, seguimos una metodología rigurosa para garantizar la perfección en cada detalle botánico y constructivo.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
          {/* Vertical Line for mobile */}
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-white/10 md:hidden" />

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge (Desktop: center, Mobile: left) */}
                  <div className="absolute left-1 md:left-1/2 top-0 w-10 h-10 bg-paisa-natural border-4 border-paisa-dark rounded-full z-20 flex items-center justify-center -translate-x-1/3 md:-translate-x-1/2">
                    <span className="text-[10px] font-bold text-white font-manrope">{step.num}</span>
                  </div>

                  {/* Left spacer for desktop layout symmetry */}
                  <div className="w-full md:w-1/2" />

                  {/* Step Card Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'
                    }`}
                  >
                    {/* Icon and Title block */}
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="bg-white/5 border border-white/15 p-2.5 rounded-xl shadow-inner shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="font-playfair font-bold text-xl md:text-2xl text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="font-manrope text-sm text-white/70 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
