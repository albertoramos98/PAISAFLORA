import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-paisa-dark/95 backdrop-blur-md shadow-lg py-3 border-b border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center group">
          <img
            src="/logo-circle.png"
            alt="Paisaflora Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-paisa-light font-manrope text-sm font-medium tracking-wide transition-colors duration-300 relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-paisa-light transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="flex items-center gap-2 bg-paisa-natural hover:bg-paisa-light text-white hover:text-paisa-dark px-6 py-2.5 rounded-full font-manrope text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4" />
            Solicitar Presupuesto
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-paisa-light focus:outline-none p-1.5 rounded-lg border border-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-[64px] right-0 w-full max-w-sm h-[calc(100vh-64px)] bg-paisa-dark border-l border-white/10 p-8 flex flex-col justify-between z-50 transition-transform duration-500 ease-out shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-paisa-light font-manrope text-lg font-semibold tracking-wide border-b border-white/5 pb-3 transition-colors duration-300 block"
              style={{
                animation: isMobileMenuOpen
                  ? `slide-in-right 0.4s ease-out ${idx * 0.08}s both`
                  : 'none',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div
          className="pt-6 border-t border-white/10"
          style={{
            animation: isMobileMenuOpen
              ? 'fade-in-up 0.5s ease-out 0.4s both'
              : 'none',
          }}
        >
          <a
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-3 bg-paisa-natural hover:bg-paisa-light text-white hover:text-paisa-dark py-4 rounded-xl font-manrope text-base font-bold tracking-wide transition-all duration-300 w-full shadow-lg"
          >
            <PhoneCall className="w-5 h-5" />
            Solicitar Presupuesto
          </a>
          <p className="text-white/40 text-center font-manrope text-[11px] mt-6 tracking-wider">
            PAISAFLORA © {new Date().getFullYear()} — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </nav>
  );
}
