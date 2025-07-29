import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiGlobe,
  HiMap
} from 'react-icons/hi';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Maps',
      icon: HiMap,
      href: 'https://maps.google.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Email',
      icon: HiMail,
      href: 'mailto:info@betta47.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-playfair font-bold text-white mb-4">
                  Betta47
                </h3>
                <p className="text-sm md:text-base font-lato text-white leading-relaxed mb-6">
                  {t('footer.description')}
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <FaFacebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <FaTwitter className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <HiGlobe className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                    <HiMail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-playfair font-bold text-white">{t('footer.contact')}</h4>
              <div className="space-y-3">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <HiPhone className="w-5 h-5 text-secondary" />
                    <span className="text-sm md:text-base font-lato text-white">+39 123 456 7890</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <HiMail className="w-5 h-5 text-secondary" />
                    <span className="text-sm md:text-base font-lato text-white">info@betta47.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <HiLocationMarker className="w-5 h-5 text-secondary" />
                    <span className="text-sm md:text-base font-lato text-white">{t('footer.address')}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-playfair font-bold text-white mb-4">
                {t('footer.quick_links')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm md:text-base font-lato text-white hover:text-secondary transition-colors duration-300">
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/struttura" className="text-sm md:text-base font-lato text-white hover:text-secondary transition-colors duration-300">
                    {t('nav.structure')}
                  </Link>
                </li>
                <li>
                  <Link to="/servizi" className="text-sm md:text-base font-lato text-white hover:text-secondary transition-colors duration-300">
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link to="/affitto-breve" className="text-sm md:text-base font-lato text-white hover:text-secondary transition-colors duration-300">
                    {t('nav.short_rental')}
                  </Link>
                </li>
                <li>
                  <Link to="/prenotazioni" className="text-sm md:text-base font-lato text-white hover:text-secondary transition-colors duration-300">
                    {t('nav.bookings')}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center"
          >
            <p className="font-lato text-xs md:text-sm text-neutral-light/80">
              © 2025 Betta47. {t('footer.rights')}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
