import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import MasonryGallery from '../components/MasonryGallery';
import { 
  HiHome, 
  HiWifi, 
  HiTruck, 
  HiCake, 
  HiUserGroup, 
  HiSparkles,
  HiCheckCircle
} from 'react-icons/hi';

const AffittoBreve = () => {
  const { t } = useTranslation();

  // Hero images
  const heroImages = [
    '/img/affitto_breve/1.jpg',
    '/img/affitto_breve/2.jpg',
    '/img/affitto_breve/3.jpg'
  ];

  // Features list
  const features = t('short_rental_page.features.list', { returnObjects: true }) as string[];

  // Gallery images - using affitto breve images
  const galleryImages = [
    '/img/affitto_breve/1.jpg',
    '/img/affitto_breve/2.jpg',
    '/img/affitto_breve/3.jpg',
    '/img/affitto_breve/4.jpg',
    '/img/affitto_breve/5.jpg',
    '/img/affitto_breve/6.jpg',
    '/img/affitto_breve/7.jpg',
    '/img/affitto_breve/8.jpg',
    '/img/affitto_breve/9.jpg',
    '/img/affitto_breve/10.jpg',
    '/img/affitto_breve/11.jpg',
    '/img/affitto_breve/12.jpg',
    '/img/affitto_breve/13.jpg',
    '/img/affitto_breve/14.jpg',
    '/img/affitto_breve/15.jpg',
    '/img/affitto_breve/16.jpg',
    '/img/affitto_breve/17.jpg',
    '/img/affitto_breve/18.jpg',
    '/img/affitto_breve/19.jpg',
    '/img/affitto_breve/20.jpg',
    '/img/affitto_breve/21.jpg',
    '/img/affitto_breve/22.jpg',
    '/img/affitto_breve/23.jpg',
    '/img/affitto_breve/24.jpg',
    // Aggiungiamo più immagini per riempire lo spazio
    '/img/affitto_breve/1.jpg',
    '/img/affitto_breve/2.jpg',
    '/img/affitto_breve/3.jpg',
    '/img/affitto_breve/4.jpg',
    '/img/affitto_breve/5.jpg',
    '/img/affitto_breve/6.jpg',
    '/img/affitto_breve/7.jpg',
    '/img/affitto_breve/8.jpg',
    '/img/affitto_breve/9.jpg',
    '/img/affitto_breve/10.jpg',
    '/img/affitto_breve/11.jpg',
    '/img/affitto_breve/12.jpg',
    '/img/affitto_breve/13.jpg',
    '/img/affitto_breve/14.jpg',
    '/img/affitto_breve/15.jpg',
    '/img/affitto_breve/16.jpg',
    '/img/affitto_breve/17.jpg',
    '/img/affitto_breve/18.jpg',
    '/img/affitto_breve/19.jpg',
    '/img/affitto_breve/20.jpg',
    '/img/affitto_breve/21.jpg',
    '/img/affitto_breve/22.jpg',
    '/img/affitto_breve/23.jpg',
    '/img/affitto_breve/24.jpg',
    '/img/affitto_breve/1.jpg',
    '/img/affitto_breve/2.jpg',
    '/img/affitto_breve/3.jpg',
    '/img/affitto_breve/4.jpg',
    '/img/affitto_breve/5.jpg',
    '/img/affitto_breve/6.jpg',
    '/img/affitto_breve/7.jpg',
    '/img/affitto_breve/8.jpg',
    '/img/affitto_breve/9.jpg',
    '/img/affitto_breve/10.jpg',
    '/img/affitto_breve/11.jpg',
    '/img/affitto_breve/12.jpg',
    '/img/affitto_breve/13.jpg',
    '/img/affitto_breve/14.jpg',
    '/img/affitto_breve/15.jpg',
    '/img/affitto_breve/16.jpg',
    '/img/affitto_breve/17.jpg',
    '/img/affitto_breve/18.jpg',
    '/img/affitto_breve/19.jpg',
    '/img/affitto_breve/20.jpg',
    '/img/affitto_breve/21.jpg',
    '/img/affitto_breve/22.jpg',
    '/img/affitto_breve/23.jpg',
    '/img/affitto_breve/24.jpg'
  ];

  // Service icons
  const serviceIcons = [
    HiHome, HiCake, HiWifi, HiTruck, HiSparkles, HiUserGroup
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <ImageCarousel
          images={heroImages}
          title={t('short_rental_page.hero.title')}
          subtitle={t('short_rental_page.hero.subtitle')}
          className="h-full"
        />
      </section>

      {/* Description Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-h2 font-playfair font-bold text-primary">
                {t('short_rental_page.hero.title')}
              </h2>
              <p className="text-lg font-lato leading-relaxed text-neutral-dark">
                {t('short_rental_page.hero.subtitle')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Prenota Ora
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-neutral-light rounded-lg p-8">
                <h3 className="text-xl font-playfair font-bold text-primary mb-6">
                  {t('short_rental_page.features.title')}
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <HiCheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="font-lato text-neutral-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Carousel Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-playfair font-bold text-primary mb-4">
              Scopri la Nostra Seconda Struttura
            </h2>
            <p className="text-xl font-lato text-neutral-dark">
              Un appartamento completamente indipendente per soggiorni più lunghi
            </p>
          </motion.div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-2xl">
            <ImageCarousel
              images={heroImages}
              className="h-full"
              showOverlay={false}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h2 font-playfair font-bold text-primary mb-4">
              {t('short_rental_page.services.title')}
            </h2>
            <p className="text-xl font-lato text-neutral-dark">
              {t('short_rental_page.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('short_rental_page.services.independent.title'),
                description: t('short_rental_page.services.independent.description')
              },
              {
                title: t('short_rental_page.services.kitchen.title'),
                description: t('short_rental_page.services.kitchen.description')
              },
              {
                title: t('short_rental_page.services.wifi.title'),
                description: t('short_rental_page.services.wifi.description')
              },
              {
                title: t('short_rental_page.services.parking.title'),
                description: t('short_rental_page.services.parking.description')
              },
              {
                title: t('short_rental_page.services.cleaning.title'),
                description: t('short_rental_page.services.cleaning.description')
              },
              {
                title: t('short_rental_page.services.support.title'),
                description: t('short_rental_page.services.support.description')
              }
            ].map((service, index) => {
              const IconComponent = serviceIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.02 
                  }}
                  className="group bg-neutral-light rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="font-lato text-neutral-dark leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-playfair font-bold text-primary mb-4">
              {t('short_rental_page.gallery.title')}
            </h2>
            <p className="text-xl font-lato text-neutral-dark">
              {t('short_rental_page.gallery.subtitle')}
            </p>
          </motion.div>
          
          <MasonryGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-h2 font-playfair font-bold text-white mb-6">
              {t('short_rental_page.cta.title')}
            </h2>
            <p className="text-xl font-lato text-white/80 mb-8 max-w-2xl mx-auto">
              {t('short_rental_page.cta.subtitle')}
            </p>
            <Link to="/prenotazioni">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                {t('short_rental_page.cta.button')}
              </motion.button>
            </Link>           
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
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
              {t('short_rental_page.comparison.title')}
            </h2>
            <p className="text-xl font-lato text-neutral-dark">
              {t('short_rental_page.comparison.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-light rounded-lg p-8"
            >
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                {t('short_rental_page.comparison.bnb.title')}
              </h3>
              <ul className="space-y-3 font-lato text-neutral-dark">
                {(t('short_rental_page.comparison.bnb.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <HiCheckCircle className="w-5 h-5 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-playfair font-bold mb-6">
                {t('short_rental_page.comparison.apartment.title')}
              </h3>
              <ul className="space-y-3 font-lato">
                {(t('short_rental_page.comparison.apartment.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <HiCheckCircle className="w-5 h-5 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffittoBreve;
