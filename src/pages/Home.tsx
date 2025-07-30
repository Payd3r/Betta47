import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Hero images - using real images from b&b folder
  const heroImages = [
    '/img/b&b/1.jpg',
    '/img/eventi1.jpg',
    '/img/eventi2.jpeg',
    '/img/dintorni1.jpg',
  ];

  // Carousel images
  const carouselImages = [
    '/img/dove_siamo1.jpg',
    '/img/dove_siamo2.jpg',
    '/img/eventi1.jpg',
    '/img/eventi2.jpg'
  ];

  const sections = [
    {
      id: 'comfort',
      image: '/img/dove_siamo1.jpg'
    },
    {
      id: 'location',
      image: '/img/dove_siamo2.jpg'
    },
    {
      id: 'relax',
      image: '/img/eventi1.jpg'
    },
    {
      id: 'short_rental',
      image: '/img/eventi2.jpeg'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Funzione per renderizzare il contenuto con supporto per elenchi puntati
  const renderContent = (content: string) => {
    // Se il contenuto contiene elenchi puntati (linee che iniziano con -)
    if (content.includes('-')) {
      const lines = content.split('\n');
      return (
        <div className="space-y-2">
          {lines.map((line, index) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('-')) {
              // È un elemento dell'elenco puntato
              return (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-base font-lato text-neutral-dark leading-relaxed">
                    {trimmedLine.substring(1).trim()}
                  </span>
                </div>
              );
            } else if (trimmedLine) {
              // È testo normale
              return (
                <p key={index} className="text-base font-lato text-neutral-dark leading-relaxed">
                  {trimmedLine}
                </p>
              );
            }
            return null;
          })}
        </div>
      );
    }
    
    // Se non ci sono elenchi puntati, renderizza come testo normale
    return (
      <p className="text-base font-lato text-neutral-dark leading-relaxed">
        {content}
      </p>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <ImageCarousel
          images={heroImages}
          title={t('home_page.hero.title')}
          subtitle={t('home_page.hero.subtitle')}
          className="h-full"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
        </motion.div>
      </section>

      {/* Content Sections */}
      {sections.slice(0, 2).map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-neutral-light' : 'bg-white'
            }`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}
              >
                <h2 className="text-h2 font-playfair font-bold text-primary">
                  {t(`home_page.sections.${section.id}.title`)}
                </h2>
                <p className="text-lg font-lato leading-relaxed text-neutral-dark">
                  {t(`home_page.sections.${section.id}.shortDescription`)}
                </p>

                {/* Accordion Content */}
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 pt-4 border-t border-neutral-dark/20">
                        {renderContent(t(`home_page.sections.${section.id}.expandedContent`))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleSection(section.id)}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <span>{expandedSection === section.id ? 'Mostra meno' : 'Scopri di più'}</span>
                  <motion.div
                    animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative overflow-hidden rounded-lg shadow-2xl ${index % 2 === 0 ? '' : 'lg:col-start-1'
                  }`}
              >
                <img
                  src={section.image}
                  alt={t(`home_page.sections.${section.id}.title`)}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Carousel Section */}
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
              {t('home_page.gallery.title')}
            </h2>
            <p className="text-xl font-lato text-white/80">
              {t('home_page.gallery.subtitle')}
            </p>
          </motion.div>

          <div className="h-96 rounded-lg overflow-hidden">
            <ImageCarousel
              images={carouselImages}
              className="h-full"
              showOverlay={false}
            />
          </div>
        </div>
      </section>

      {/* Content Sections - Remaining */}
      {sections.slice(2).map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-neutral-light' : 'bg-white'
            }`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}
              >
                <h2 className="text-h2 font-playfair font-bold text-primary">
                  {t(`home_page.sections.${section.id}.title`)}
                </h2>
                <p className="text-lg font-lato leading-relaxed text-neutral-dark">
                  {t(`home_page.sections.${section.id}.shortDescription`)}
                </p>

                {/* Accordion Content */}
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 pt-4 border-t border-neutral-dark/20">
                        {renderContent(t(`home_page.sections.${section.id}.expandedContent`))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleSection(section.id)}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <span>{expandedSection === section.id ? 'Mostra meno' : 'Scopri di più'}</span>
                  <motion.div
                    animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative overflow-hidden rounded-lg shadow-2xl ${index % 2 === 0 ? '' : 'lg:col-start-1'
                  }`}
              >
                <img
                  src={section.image}
                  alt={t(`home_page.sections.${section.id}.title`)}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

    </div>
  );
};

export default Home;
