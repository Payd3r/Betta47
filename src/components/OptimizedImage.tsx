import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean; // Per immagini critiche above-the-fold
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style, 
  priority = false 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Se priority è true, carica subito
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // Non usare intersection observer per immagini prioritarie

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px' // Inizia a caricare 50px prima che l'immagine entri nel viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Loader animato moderno */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 image-loader flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            {/* Spinner a doppio anello */}
            <div className="relative w-12 h-12">
              {/* Anello esterno */}
              <div className="w-12 h-12 border-3 border-slate-200 rounded-full opacity-20"></div>
              {/* Anello interno rotante */}
              <div className="w-12 h-12 border-3 border-slate-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
              {/* Punto centrale */}
              <div className="w-2 h-2 bg-slate-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loader-pulse"></div>
            </div>
            {/* Testo del loader con animazione */}
            <div className="text-slate-700 text-sm font-medium loader-pulse">
              Caricamento immagine...
            </div>
            {/* Barra di progresso simulata */}
            <div className="w-20 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-slate-600 to-slate-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Immagine principale */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-500 ease-out transform ${
            isLoaded 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
      
      {/* Fallback per errori */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
          <span className="text-slate-500 text-sm">Immagine non disponibile</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;

