import { motion } from 'framer-motion';
import { UserCheck, Star, Sparkles, Droplet, Clock, CheckCircle } from 'lucide-react';

export default function ElegirNosotros() {
  const points = [
    {
      icon: <UserCheck className="w-5 h-5 text-paisa-light" />,
      title: 'Atención 100% Personalizada',
      desc: 'No trabajamos con moldes ni plantillas. Cada plano se dibuja de cero adaptándonos a tus gustos y estilo arquitectónico.',
    },
    {
      icon: <Star className="w-5 h-5 text-paisa-light" />,
      title: 'Equipo Altamente Especializado',
      desc: 'Contamos con paisajistas de renombre, técnicos en riego e ingenieros agrónomos comprometidos con la excelencia.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-paisa-light" />,
      title: 'Diseño Exclusivo y Premium',
      desc: 'Diseñamos proyectos que incrementan el valor comercial de tu propiedad y se convierten en el centro de las miradas.',
    },
    {
      icon: <Droplet className="w-5 h-5 text-paisa-light" />,
      title: 'Soluciones Ecológicas y Sostenibles',
      desc: 'Optimizamos el consumo de agua integrando especies de bajo requerimiento hídrico y equipos inteligentes de goteo.',
    },
    {
      icon: <Clock className="w-5 h-5 text-paisa-light" />,
      title: 'Cumplimiento Estricto de Plazos',
      desc: 'Respetamos tu tiempo. Ofrecemos cronogramas claros de ejecución y entregamos la obra exactamente en la fecha acordada.',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-paisa-light" />,
      title: 'Garantía y Acompañamiento',
      desc: 'Brindamos soporte post-entrega y visitas de control técnico para asegurar que tu jardín crezca sano y fuerte.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text and list of advantages */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-paisa-natural font-manrope text-sm font-semibold tracking-wider uppercase mb-3"
            >
              ¿Por qué elegir Paisaflora?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-playfair font-bold text-paisa-dark mb-8 leading-tight"
            >
              Nuestra meta es crear <span className="text-paisa-natural italic">experiencias memorables</span>.
            </motion.h2>

            {/* List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="bg-paisa-dark w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-paisa-dark mb-1">
                      {point.title}
                    </h3>
                    <p className="font-manrope text-sm text-paisa-dark/65 leading-relaxed font-light">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Image with organic border radius */}
          <div className="lg:col-span-5 relative">
            {/* Ambient decorative blob */}
            <div className="absolute w-72 h-72 bg-paisa-natural/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-paisa-offwhite"
            >
              <img
                src="/fotos/20211229_174340.jpg"
                alt="Detalle de césped Paisaflora"
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
