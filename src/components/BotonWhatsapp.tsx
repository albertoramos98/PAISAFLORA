import { MessageCircle } from 'lucide-react';

export default function BotonWhatsapp() {
  const whatsappUrl = "https://wa.me/5491123456789?text=Hola%20Paisaflora,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20para%20un%20proyecto%20de%20paisajismo.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip on hover */}
      <span className="absolute left-16 bg-paisa-dark text-white text-xs font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-white/10 pointer-events-none whitespace-nowrap hidden sm:inline-block">
        ¿Hablamos por WhatsApp?
      </span>

      {/* Decorative pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 -z-10 animate-ping" />
    </a>
  );
}
