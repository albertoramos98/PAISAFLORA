import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface InstagramPost {
  id: string;
  src: string;
  caption: string;
  likes: number;
  comments: number;
}

export default function InstagramFeed() {
  const posts: InstagramPost[] = [
    {
      id: '1',
      src: '/fotos/20130526_070147.jpg',
      caption: 'Diseño de parque principal con senderos de piedra natural y macizos florales. 🌿✨ #paisaflora #paisajismo',
      likes: 342,
      comments: 24,
    },
    {
      id: '2',
      src: '/fotos/20190521_112139.jpg',
      caption: 'Composición botánica a orillas de estanque natural. La armonía del agua y las herbáceas. 💧🌱',
      likes: 418,
      comments: 31,
    },
    {
      id: '3',
      src: '/fotos/20190521_112240.jpg',
      caption: 'Canteros geométricos elevados combinando follajes contrastantes en residencia privada. 🏡✨',
      likes: 289,
      comments: 19,
    },
    {
      id: '4',
      src: '/fotos/20190521_112254.jpg',
      caption: 'Arquitectura verde: cercos vivos podados de manera simétrica para estructurar espacios. 🌳🍃',
      likes: 512,
      comments: 42,
    },
    {
      id: '5',
      src: '/fotos/20200714_092602.jpg',
      caption: 'Gran escala: parquización e integración de arbolado maduro con praderas rústicas. 🌲🌾',
      likes: 376,
      comments: 28,
    },
    {
      id: '6',
      src: '/fotos/20210211_113803.jpg',
      caption: 'Sendero de bosque residencial. Sombra, helechos y la textura de la piedra autóctona. 🪵🍁',
      likes: 450,
      comments: 36,
    },
    {
      id: '7',
      src: '/fotos/20211229_174310.jpg',
      caption: 'Paisajismo sostenible: jardín de bajo requerimiento hídrico con gramíneas y mulches orgánicos. ☀️🌾',
      likes: 298,
      comments: 15,
    },
    {
      id: '8',
      src: '/fotos/20211229_174340.jpg',
      caption: 'Alfombra verde: césped bermuda de máxima densidad instalado en terreno residencial. 🟩💎',
      likes: 620,
      comments: 54,
    },
    {
      id: '9',
      src: '/fotos/20211229_174406.jpg',
      caption: 'Patio exterior con terrazas de madera tratada y detalles en gravilla fina. 🛋️🌿',
      likes: 385,
      comments: 22,
    },
  ];

  return (
    <section id="instagram" className="py-24 md:py-32 bg-paisa-cream relative overflow-hidden">
      {/* Decorative organic background element */}
      <div className="absolute w-[600px] h-[600px] bg-paisa-natural/5 rounded-full blur-3xl -top-80 -right-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-paisa-natural/10 border border-paisa-natural/20 px-4 py-1.5 rounded-full text-paisa-natural font-manrope text-xs font-semibold tracking-widest uppercase mb-4">
            <InstagramIcon className="w-4 h-4 text-paisa-natural" />
            <span>Síguenos en Instagram</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-paisa-dark mb-6">
            Galería viva en <span className="text-paisa-natural italic">@paisaflora</span>
          </h2>
          <p className="text-base md:text-lg text-paisa-dark/70 font-manrope font-light leading-relaxed">
            Descubre en tiempo real nuestras obras, detalles de diseño en proceso e inspiración diaria directamente desde nuestra cuenta oficial.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16 px-2"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id} className="h-auto">
                <a
                  href="https://www.instagram.com/paisaflora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square rounded-[2rem] overflow-hidden bg-paisa-dark shadow-md hover:shadow-2xl transition-all duration-500 border border-paisa-dark/10 hover:-translate-y-1"
                >
                  {/* Post Image */}
                  <img
                    src={post.src}
                    alt="Publicación de Paisaflora en Instagram"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-paisa-dark/95 via-paisa-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white z-10">
                    <div className="flex justify-end">
                      <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20">
                        <InstagramIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div>
                      <p className="font-manrope text-xs text-white/90 line-clamp-3 mb-4 leading-relaxed font-light">
                        {post.caption}
                      </p>

                      <div className="flex items-center gap-4 text-xs font-manrope font-semibold text-paisa-light border-t border-white/15 pt-3">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 fill-paisa-light" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3.5 h-3.5" />
                          {post.comments}
                        </span>
                        <span className="ml-auto flex items-center gap-1 text-[11px] text-white/80 uppercase tracking-wider">
                          Ver post <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/paisaflora/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-paisa-dark hover:bg-paisa-natural text-white px-8 py-4 rounded-full font-manrope text-sm font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
          >
            <InstagramIcon className="w-5 h-5 text-paisa-light group-hover:text-white transition-colors" />
            <span>Seguir a @paisaflora en Instagram</span>
            <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
