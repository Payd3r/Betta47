import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useRef } from 'react';

interface ImageCarouselProps {
  images: string[];
  title?: string;
  subtitle?: string;
  showOverlay?: boolean;
  className?: string;
}

const ImageCarousel = ({
  images,
  title,
  subtitle,
  showOverlay = true,
  className = ""
}: ImageCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {showOverlay && (title || subtitle) && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white"
                  >
                    {title && (
                      <h2 className="text-h2 font-playfair font-bold mb-4">
                        {title}
                      </h2>
                    )}
                    {subtitle && (
                      <p className="text-xl font-lato">
                        {subtitle}
                      </p>
                    )}
                  </motion.div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:bg-black/50">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:bg-black/50">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
          />
        ))}
      </div>

      <style>
        {`
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #C4A663;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default ImageCarousel;
