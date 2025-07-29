import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiWifi, HiHome, HiGlobe, HiStar, HiShieldCheck, HiHeart, HiSparkles, HiClock, HiUserGroup, HiCog } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Servizi = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <HiHome className="w-8 h-8" />,
      title: t('services_page.comfort_rooms.title'),
      description: t('services_page.comfort_rooms.description'),
      features: t('services_page.comfort_rooms.features', { returnObjects: true })
    },
    {
      icon: <HiWifi className="w-8 h-8" />,
      title: t('services_page.wifi.title'),
      description: t('services_page.wifi.description'),
      features: t('services_page.wifi.features', { returnObjects: true })
    },
    {
      icon: <HiGlobe className="w-8 h-8" />,
      title: t('services_page.tv.title'),
      description: t('services_page.tv.description'),
      features: t('services_page.tv.features', { returnObjects: true })
    },
    {
      icon: <HiCog className="w-8 h-8" />,
      title: t('services_page.essential_services.title'),
      description: t('services_page.essential_services.description'),
      features: t('services_page.essential_services.features', { returnObjects: true })
    },
    {
      icon: <HiStar className="w-8 h-8" />,
      title: t('services_page.premium_services.title'),
      description: t('services_page.premium_services.description'),
      features: t('services_page.premium_services.features', { returnObjects: true })
    },
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: t('services_page.security.title'),
      description: t('services_page.security.description'),
      features: t('services_page.security.features', { returnObjects: true })
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Header Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-primary/90">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-h1 font-playfair font-bold mb-6">
              {t('services_page.title')}
            </h1>
            <p className="text-xl md:text-2xl font-lato leading-relaxed max-w-3xl mx-auto">
              {t('services_page.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-neutral-light">
                  <div className="flex items-center mb-4">
                    <div className="text-secondary mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-neutral-dark font-lato">
                    {service.description}
                  </p>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {(service.features as string[]).map((feature: string, featureIndex: number) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center text-sm font-lato text-neutral-dark"
                      >
                        <HiSparkles className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
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
              {t('services_page.additional_services.title')}
            </h2>
            <p className="text-xl font-lato text-neutral-dark max-w-2xl mx-auto">
              {t('services_page.additional_services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <HiClock className="w-6 h-6" />, title: t('services_page.additional_services.flexible_checkin.title'), desc: t('services_page.additional_services.flexible_checkin.description') },
              { icon: <HiUserGroup className="w-6 h-6" />, title: t('services_page.additional_services.groups.title'), desc: t('services_page.additional_services.groups.description') },
              { icon: <HiHeart className="w-6 h-6" />, title: t('services_page.additional_services.personalized.title'), desc: t('services_page.additional_services.personalized.description') },
              { icon: <HiSparkles className="w-6 h-6" />, title: t('services_page.additional_services.local_experiences.title'), desc: t('services_page.additional_services.local_experiences.description') }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-neutral-light hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <div className="text-secondary mb-3 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-playfair font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-lato">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 font-playfair font-bold text-white mb-6">
              {t('services_page.cta.title')}
            </h2>
            <p className="text-xl font-lato text-white/90 mb-8 max-w-2xl mx-auto">
              {t('services_page.cta.subtitle')}
            </p>
            <Link to="/prenotazioni">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                {t('services_page.cta.button')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Servizi;
