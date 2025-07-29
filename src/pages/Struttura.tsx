import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/ImageCarousel';
import MasonryGallery from '../components/MasonryGallery';

const Struttura = () => {
  const { t } = useTranslation();

  // Hero images
  const heroImages = [
    '/img/b&b/1.jpg',
    '/img/b&b/2.jpeg',
    '/img/b&b/3.jpeg'
  ];

  // Gallery images - using structure images
  const galleryImages = [
    '/img/b&b/1.jpg',
    '/img/b&b/2.jpeg',
    '/img/b&b/3.jpeg',
    '/img/b&b/4.jpg',
    '/img/b&b/5.jpg',
    '/img/b&b/6.jpeg',
    '/img/b&b/7.jpg',
    '/img/b&b/8.jpg',
    '/img/b&b/9.jpg',
    '/img/b&b/10.jpg',
    '/img/b&b/11.jpg',
    '/img/b&b/12.jpg',
    '/img/b&b/13.jpg',
    '/img/b&b/14.jpg',
    '/img/b&b/15.jpeg',
    // Aggiungiamo più immagini per riempire lo spazio
    '/img/b&b/1.jpg',
    '/img/b&b/2.jpeg',
    '/img/b&b/3.jpeg',
    '/img/b&b/4.jpg',
    '/img/b&b/5.jpg',
    '/img/b&b/6.jpeg',
    '/img/b&b/7.jpg',
    '/img/b&b/8.jpg',
    '/img/b&b/9.jpg',
    '/img/b&b/10.jpg',
    '/img/b&b/11.jpg',
    '/img/b&b/12.jpg',
    '/img/b&b/13.jpg',
    '/img/b&b/14.jpg',
    '/img/b&b/15.jpeg',
    '/img/b&b/1.jpg',
    '/img/b&b/2.jpeg',
    '/img/b&b/3.jpeg',
    '/img/b&b/4.jpg',
    '/img/b&b/5.jpg',
    '/img/b&b/6.jpeg',
    '/img/b&b/7.jpg',
    '/img/b&b/8.jpg',
    '/img/b&b/9.jpg',
    '/img/b&b/10.jpg',
    '/img/b&b/11.jpg',
    '/img/b&b/12.jpg',
    '/img/b&b/13.jpg',
    '/img/b&b/14.jpg',
    '/img/b&b/15.jpeg'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <ImageCarousel
          images={heroImages}
          title={t('structure_page.hero.title')}
          subtitle={t('structure_page.hero.subtitle')}
          className="h-full"
        />
      </section>

      {/* Description Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-h1 font-playfair font-bold mb-6">
              {t('structure_page.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl font-lato leading-relaxed max-w-3xl mx-auto">
              {t('structure_page.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-playfair font-bold text-primary mb-4">
              {t('structure_page.gallery.title')}
            </h2>
            <p className="text-xl font-lato text-neutral-dark">
              {t('structure_page.gallery.subtitle')}
            </p>
          </motion.div>
          
          <MasonryGallery images={galleryImages} />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-playfair font-bold text-white mb-4">
              Caratteristiche della Struttura
            </h2>
            <p className="text-xl font-lato text-white/80">
              Tutto quello che rende speciale il nostro B&B
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Design Moderno",
                description: "Arredi e decorazioni contemporanee che creano un'atmosfera elegante e confortevole"
              },
              {
                title: "Comfort Assoluto",
                description: "Materassi di qualità e biancheria pregiata per garantire un riposo perfetto"
              },
              {
                title: "Attenzione ai Dettagli",
                description: "Ogni particolare è curato per offrire un'esperienza indimenticabile"
              },
              {
                title: "Posizione Strategica",
                description: "Ubicazione centrale per esplorare facilmente la città e i suoi tesori"
              },
              {
                title: "Servizi Premium",
                description: "Colazione gourmet e servizi personalizzati per ogni esigenza"
              },
              {
                title: "Ambiente Accogliente",
                description: "Un'atmosfera familiare che ti farà sentire come a casa tua"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.02 
                }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-playfair font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-lato text-white/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Struttura;
