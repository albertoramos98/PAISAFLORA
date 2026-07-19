import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  city: string;
  stars: number;
  text: string;
}

export default function Testimonios() {
  const reviews: Testimonial[] = [
    {
      name: 'Valeria S.',
      city: 'Nordelta, Buenos Aires',
      stars: 5,
      text: 'Paisaflora superó todas nuestras expectativas. Su equipo logró integrar un jardín de diseño minimalista europeo que dialoga a la perfección con la arquitectura racionalista de nuestra casa. El sistema de riego inteligente funciona de forma impecable y el césped está siempre radiante.',
    },
    {
      name: 'Ignacio M.',
      city: 'Las Condes, Santiago',
      stars: 5,
      text: 'Buscábamos un paisajismo sostenible que redujera el consumo hídrico de la propiedad sin sacrificar belleza. El diseño xerófilo propuesto por Paisaflora, combinando rocas, gravillas ornamentales y gramíneas nativas, es sencillamente una obra de arte. Totalmente profesionales.',
    },
    {
      name: 'María Antonieta de A.',
      city: 'San Pedro Garza García, Monterrey',
      stars: 5,
      text: 'Un servicio verdaderamente boutique. Desde la primera visita de campo hasta la entrega del jardín, la atención fue minuciosa y cercana. La iluminación exterior que diseñaron crea escenas nocturnas mágicas. Recomiendo ampliamente su consultoría y mantenimiento mensual.',
    },
    {
      name: 'Gonzalo F.',
      city: 'Barrio Cerrado San Andrés, Tigre',
      stars: 5,
      text: 'La seriedad y el cumplimiento de plazos son difíciles de encontrar en este rubro, pero Paisaflora lo cumplió al pie de la letra. Ejecutaron un proyecto complejo de nivelación de terreno y plantación de arbolado maduro con precisión milimétrica.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-paisa-cream relative overflow-hidden">
      {/* Decorative organic background element */}
      <div className="absolute w-[600px] h-[600px] bg-paisa-natural/5 rounded-full blur-3xl -top-80 -left-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-paisa-natural font-manrope text-sm font-semibold tracking-wider uppercase mb-3 block">
            Testimonios Reales
          </span>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-paisa-dark mb-6">
            Lo que dicen nuestros <span className="text-paisa-natural italic">distinguidos clientes</span>.
          </h2>
          <p className="text-base md:text-lg text-paisa-dark/70 font-manrope font-light leading-relaxed">
            La confianza y satisfacción de quienes habitan nuestros diseños es nuestro mayor orgullo y credencial de calidad.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="max-w-5xl mx-auto pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-16"
          >
            {reviews.map((rev, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-paisa-dark/5 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between relative group">
                  {/* Decorative quote icon */}
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-paisa-natural/5 transition-colors duration-300 group-hover:text-paisa-natural/10 pointer-events-none" />

                  <div>
                    {/* Stars indicator */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-paisa-light text-paisa-light" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="font-manrope text-sm md:text-base text-paisa-dark/80 italic leading-relaxed font-light mb-8">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Customer details */}
                  <div className="border-t border-paisa-dark/5 pt-6 flex justify-between items-center">
                    <div>
                      <h4 className="font-playfair font-bold text-base text-paisa-dark">
                        {rev.name}
                      </h4>
                      <p className="font-manrope text-[11px] text-paisa-natural tracking-wider font-semibold uppercase mt-0.5">
                        {rev.city}
                      </p>
                    </div>
                    {/* Visual avatar placeholder with initials */}
                    <div className="w-10 h-10 rounded-full bg-paisa-dark text-white flex items-center justify-center font-playfair font-bold text-xs shadow-inner">
                      {rev.name.split(' ')[0][0]}{rev.name.split(' ').slice(-1)[0][0]}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
