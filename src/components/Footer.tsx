import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paisa-dark text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      {/* Decorative background element */}
      <div className="absolute w-80 h-80 bg-paisa-natural/10 rounded-full blur-3xl -bottom-20 -right-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Logo & Brand Pitch */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#inicio" className="flex items-center gap-3 group">
              <img
                src="/Logo limpa.svg"
                alt="Paisaflora Logo"
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
              />
              <div className="flex flex-col">
                <span className="text-white font-playfair font-bold text-2xl tracking-wider leading-none">
                  PAISAFLORA
                </span>
                <span className="text-paisa-light font-manrope text-[10px] tracking-[0.2em] font-semibold mt-1 uppercase">
                  Paisajismo de Lujo
                </span>
              </div>
            </a>
            <p className="font-manrope text-sm text-white/60 font-light leading-relaxed max-w-sm">
              Concebimos obras de arte botánico a gran escala y jardines residenciales premium que combinan el diseño contemporáneo, el confort y la sostenibilidad ambiental.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/paisaflora/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-paisa-natural text-white/80 hover:text-white p-2.5 rounded-full transition-all duration-300 border border-white/5 hover:scale-105"
                aria-label="Seguir en Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-playfair font-bold text-lg text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Galería', href: '#galeria' },
                { name: 'Proceso', href: '#proceso' },
                { name: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-manrope text-sm text-white/60 hover:text-paisa-light font-light transition-colors duration-300 block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-playfair font-bold text-lg text-white">Contacto Directo</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MessageSquare className="w-5 h-5 text-paisa-light shrink-0 mt-0.5" />
                <div>
                  <span className="font-manrope text-xs text-white/40 block">Solo contacto por WhatsApp</span>
                  <a
                    href="https://wa.me/34647351620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-manrope text-sm text-white/80 hover:text-paisa-light font-light transition-colors duration-300 block"
                  >
                    +34 647 35 16 20
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-paisa-light shrink-0 mt-0.5" />
                <div>
                  <span className="font-manrope text-xs text-white/40 block">Correo Electrónico</span>
                  <a
                    href="mailto:info@paisaflora.com"
                    className="font-manrope text-sm text-white/80 hover:text-paisa-light font-light transition-colors duration-300 block"
                  >
                    info@paisaflora.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-paisa-light shrink-0 mt-0.5" />
                <div>
                  <span className="font-manrope text-xs text-white/40 block">Oficina Comercial</span>
                  <span className="font-manrope text-sm text-white/80 font-light block">
                    Avinguda del País Valencià, 11, 46117 Bétera, Valencia, España
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-playfair font-bold text-lg text-white">Horarios de Atención</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-paisa-light shrink-0 mt-0.5" />
                <div>
                  <span className="font-manrope text-sm text-white/80 font-light block">
                    Lunes a Viernes
                  </span>
                  <span className="font-manrope text-xs text-white/50 block mt-0.5">
                    08:00 AM – 06:00 PM
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-paisa-light shrink-0 mt-0.5" />
                <div>
                  <span className="font-manrope text-sm text-white/80 font-light block">
                    Sábados
                  </span>
                  <span className="font-manrope text-xs text-white/50 block mt-0.5">
                    09:00 AM – 01:00 PM
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-paisa-light/40 shrink-0 mt-0.5" />
                <div>
                  <span className="font-manrope text-sm text-white/40 font-light block">
                    Domingos y Feriados
                  </span>
                  <span className="font-manrope text-xs text-white/30 block mt-0.5">
                    Cerrado (Atención de Emergencias)
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-manrope text-xs text-white/40 font-light">
            PAISAFLORA © {currentYear} — Todos los derechos reservados.
          </p>
          <p className="font-manrope text-xs text-white/40 font-light">
            Diseñado y desarrollado en español con compromiso de sostenibilidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
