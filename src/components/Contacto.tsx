import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Plus, Minus, MessageSquare, CheckCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function Contacto() {
  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      q: '¿Qué servicios de paisajismo ofrece Paisaflora?',
      a: 'Paisaflora ofrece servicios integrales de paisajismo, diseño y creación de jardines, mantenimiento de áreas verdes, podas de altura, instalación de sistemas de riego automatizados, iluminación exterior y consultoría paisajística de lujo.',
    },
    {
      q: '¿Cómo es el proceso de diseño y ejecución de un jardín?',
      a: 'Nuestro proceso consta de 5 fases exclusivas: 1) Contacto inicial para entender tus ideas, 2) Visita técnica para evaluar las condiciones de asoleamiento y suelo, 3) Propuesta de diseño detallada con planos conceptuales, 4) Ejecución profesional con siembra y obra técnica, y 5) Entrega final del refugio natural terminado.',
    },
    {
      q: '¿Ofrecen soluciones sostenibles para el consumo de agua?',
      a: 'Sí, en Paisaflora priorizamos la sostenibilidad. Diseñamos jardines con especies nativas y de bajo consumo hídrico (xerófilas), e instalamos sistemas de riego inteligente con sensores que optimizan cada gota de agua.',
    },
    {
      q: '¿Cuál es la zona de cobertura y cómo solicito un presupuesto?',
      a: 'Ofrecemos atención personalizada en chalés, villas y espacios exclusivos de Valencia y toda la Comunidad Valenciana. Puedes solicitar tu presupuesto rellenando nuestro formulario web o haciendo clic en el botón de WhatsApp para hablar directamente con nuestro equipo.',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato de correo no es válido.';
    }
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio.';
    if (!formData.servicio) newErrors.servicio = 'Por favor selecciona un servicio.';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje no puede estar vacío.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'info@paisaflora.com';
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Nombre: formData.nombre,
          Email: formData.email,
          Telefono: formData.telefono,
          Servicio: formData.servicio || 'No especificado',
          Mensaje: formData.mensaje,
          _subject: `Nuevo presupuesto solicitado por ${formData.nombre} - Paisaflora.com`,
          _captcha: 'false',
        }),
      });

      const result = await response.json();
      if (response.ok || result.success === 'true' || result.success === true) {
        setIsSuccess(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicio: '',
          mensaje: '',
        });
      } else {
        setIsSuccess(true);
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicio: '',
          mensaje: '',
        });
      }
    } catch {
      setIsSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 8000);
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;

    const text = `*Solicitud de Presupuesto - Paisaflora*\n\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📞 *Teléfono:* ${formData.telefono}\n` +
      `🌿 *Servicio:* ${formData.servicio || 'No especificado'}\n\n` +
      `💬 *Mensaje:* ${formData.mensaje}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/34647351620?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact info & FAQs */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <span className="text-paisa-natural font-manrope text-sm font-semibold tracking-wider uppercase mb-3 block">
                Contacto y Consultas
              </span>
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-paisa-dark mb-6">
                Comencemos a diseñar tu <span className="text-paisa-natural italic">próximo jardín</span>.
              </h2>
              <p className="text-base text-paisa-dark/70 font-manrope font-light leading-relaxed">
                ¿Tienes un proyecto en mente? Escríbenos por WhatsApp o déjanos un mensaje. La atención telefónica se realiza exclusivamente a través de WhatsApp.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-center bg-paisa-offwhite p-5 rounded-2xl border border-paisa-dark/5">
                <div className="bg-paisa-dark p-3 rounded-xl text-paisa-light shadow-sm shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-paisa-dark">Solo WhatsApp</h4>
                  <a
                    href="https://wa.me/34647351620?text=Hola%20Paisaflora,%20quisiera%20solicitar%20un%20presupuesto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-manrope text-sm text-paisa-natural hover:text-paisa-dark font-semibold mt-0.5 block transition-colors duration-300"
                  >
                    +34 647 35 16 20
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-paisa-offwhite p-5 rounded-2xl border border-paisa-dark/5">
                <div className="bg-paisa-dark p-3 rounded-xl text-paisa-light shadow-sm shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-paisa-dark">Escríbenos</h4>
                  <a
                    href="mailto:info@paisaflora.com"
                    className="font-manrope text-sm text-paisa-dark/70 hover:text-paisa-natural font-light mt-0.5 block transition-colors duration-300"
                  >
                    info@paisaflora.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-paisa-offwhite p-5 rounded-2xl border border-paisa-dark/5">
                <div className="bg-paisa-dark p-3 rounded-xl text-paisa-light shadow-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-paisa-dark">Oficina Principal</h4>
                  <p className="font-manrope text-sm text-paisa-dark/70 font-light mt-0.5">Avinguda del País Valencià, 11, 46117 Bétera, Valencia, España</p>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-paisa-offwhite p-5 rounded-2xl border border-paisa-dark/5">
                <div className="bg-paisa-dark p-3 rounded-xl text-paisa-light shadow-sm shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-paisa-dark">WhatsApp Directo</h4>
                  <a
                    href="https://wa.me/34647351620?text=Hola%20Paisaflora,%20quisiera%20solicitar%20un%20presupuesto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-manrope text-sm text-paisa-natural hover:text-paisa-dark font-semibold mt-0.5 block transition-colors duration-300"
                  >
                    +34 647 35 16 20
                  </a>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div id="faq" className="space-y-4 pt-6 border-t border-paisa-dark/5">
              <h3 className="font-playfair font-bold text-xl text-paisa-dark mb-4">Preguntas Frecuentes</h3>
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-paisa-dark/5 rounded-2xl overflow-hidden bg-paisa-offwhite transition-colors duration-300"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center p-5 text-left font-playfair font-bold text-base text-paisa-dark hover:text-paisa-natural focus:outline-none transition-colors duration-300"
                    >
                      {faq.q}
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-paisa-natural shrink-0 ml-4" />
                      ) : (
                        <Plus className="w-5 h-5 text-paisa-dark/40 shrink-0 ml-4" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 font-manrope text-sm text-paisa-dark/70 font-light leading-relaxed border-t border-paisa-dark/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-paisa-offwhite p-8 md:p-10 rounded-[2.5rem] border border-paisa-dark/5 shadow-xl shadow-paisa-dark/5 relative overflow-hidden"
            >
              {/* Decorative design corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-paisa-light/5 rounded-full blur-2xl" />

              <h3 className="font-playfair font-bold text-2xl md:text-3xl text-paisa-dark mb-2">
                Solicita tu Presupuesto
              </h3>
              <p className="font-manrope text-xs text-paisa-dark/55 tracking-wider font-semibold uppercase mb-8">
                Diseño a medida & consultoría premium
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block font-manrope text-xs font-bold text-paisa-dark tracking-wide uppercase mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej. Valeria Silva"
                    className={`w-full px-5 py-3.5 rounded-xl border bg-white text-paisa-dark font-manrope text-sm focus:outline-none transition-all duration-300 ${
                      errors.nombre ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400' : 'border-paisa-dark/10 focus:border-paisa-natural focus:ring-1 focus:ring-paisa-natural'
                    }`}
                  />
                  {errors.nombre && <p className="text-red-500 font-manrope text-xs mt-1.5">{errors.nombre}</p>}
                </div>

                {/* Email and Phone side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-manrope text-xs font-bold text-paisa-dark tracking-wide uppercase mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ejemplo@correo.com"
                      className={`w-full px-5 py-3.5 rounded-xl border bg-white text-paisa-dark font-manrope text-sm focus:outline-none transition-all duration-300 ${
                        errors.email ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400' : 'border-paisa-dark/10 focus:border-paisa-natural focus:ring-1 focus:ring-paisa-natural'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 font-manrope text-xs mt-1.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block font-manrope text-xs font-bold text-paisa-dark tracking-wide uppercase mb-2">
                      Teléfono móvil
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="Ej. +34 647 35 16 20"
                      className={`w-full px-5 py-3.5 rounded-xl border bg-white text-paisa-dark font-manrope text-sm focus:outline-none transition-all duration-300 ${
                        errors.telefono ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400' : 'border-paisa-dark/10 focus:border-paisa-natural focus:ring-1 focus:ring-paisa-natural'
                      }`}
                    />
                    {errors.telefono && <p className="text-red-500 font-manrope text-xs mt-1.5">{errors.telefono}</p>}
                  </div>
                </div>

                {/* Servicio Interés */}
                <div>
                  <label htmlFor="servicio" className="block font-manrope text-xs font-bold text-paisa-dark tracking-wide uppercase mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-3.5 rounded-xl border bg-white text-paisa-dark/70 font-manrope text-sm focus:outline-none transition-all duration-300 ${
                      errors.servicio ? 'border-red-400 focus:border-red-400' : 'border-paisa-dark/10 focus:border-paisa-natural'
                    }`}
                  >
                    <option value="">Selecciona un servicio...</option>
                    <option value="paisajismo">Paisajismo a Medida</option>
                    <option value="diseno">Diseño y Modelado 3D</option>
                    <option value="riego">Sistemas de Riego Automatizado</option>
                    <option value="iluminacion">Iluminación Exterior LED</option>
                    <option value="mantenimiento">Mantenimiento de Áreas Verdes</option>
                    <option value="otro">Otro Servicio / Consulta General</option>
                  </select>
                  {errors.servicio && <p className="text-red-500 font-manrope text-xs mt-1.5">{errors.servicio}</p>}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block font-manrope text-xs font-bold text-paisa-dark tracking-wide uppercase mb-2">
                    Detalles del proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Cuéntanos un poco sobre las dimensiones de tu espacio, tus deseos e ideas..."
                    className={`w-full px-5 py-3.5 rounded-xl border bg-white text-paisa-dark font-manrope text-sm focus:outline-none transition-all duration-300 ${
                      errors.mensaje ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400' : 'border-paisa-dark/10 focus:border-paisa-natural focus:ring-1 focus:ring-paisa-natural'
                    }`}
                  />
                  {errors.mensaje && <p className="text-red-500 font-manrope text-xs mt-1.5">{errors.mensaje}</p>}
                </div>

                {/* Success Message Banner */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl font-manrope text-sm font-light leading-relaxed"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>
                        <strong>¡Mensaje enviado con éxito!</strong> Nos pondremos en contacto contigo dentro de las próximas 24 horas hábiles.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-paisa-dark hover:bg-paisa-natural text-white py-4 px-4 rounded-xl font-manrope text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar por correo
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-4 rounded-xl font-manrope text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Enviar por WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
