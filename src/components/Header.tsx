import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  const languages = [
    { code: 'it', name: 'Italiano', flag: '/img/italiano.jpg' },
    { code: 'en', name: 'English', flag: '/img/inglese.jpg' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 min-w-[120px]" onClick={closeMenu}>
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-sm">B</span>
            </div>
            <span className="text-xl md:text-2xl font-playfair font-bold text-primary">
              Betta47
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                location.pathname === '/' ? 'text-secondary' : 'text-neutral-dark'
              }`}
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/struttura"
              className={`font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                location.pathname === '/struttura' ? 'text-secondary' : 'text-neutral-dark'
              }`}
              onClick={closeMenu}
            >
              {t('nav.structure')}
            </Link>
            <Link
              to="/servizi"
              className={`font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                location.pathname === '/servizi' ? 'text-secondary' : 'text-neutral-dark'
              }`}
              onClick={closeMenu}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/affitto-breve"
              className={`font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                location.pathname === '/affitto-breve' ? 'text-secondary' : 'text-neutral-dark'
              }`}
              onClick={closeMenu}
            >
              {t('nav.short_rental')}
            </Link>
            <Link
              to="/prenotazioni"
              className={`font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                location.pathname === '/prenotazioni' ? 'text-secondary' : 'text-neutral-dark'
              }`}
              onClick={closeMenu}
            >
              {t('nav.bookings')}
            </Link>

            {/* Language Selector Desktop */}
            <div className="relative group">
              <button className="flex items-center space-x-2 font-lato font-medium text-neutral-dark hover:text-secondary transition-colors duration-300">
                
                <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-5 h-3 hidden lg:block rounded-sm" />
                <span className="hidden lg:inline">{currentLanguage.name}</span>
              </button>
              
              {/* Language Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-neutral-light transition-colors duration-200 ${
                      lang.code === i18n.language ? 'text-secondary font-medium' : 'text-neutral-dark'
                    }`}
                  >
                    <img src={lang.flag} alt={lang.name} className="w-6 h-4 rounded-sm" />
                    <span className="font-lato">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-neutral-dark hover:text-secondary transition-colors duration-300"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-neutral-light"
            >
              <nav className="py-4 space-y-4">
                <Link
                  to="/"
                  className={`block font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                    location.pathname === '/' ? 'text-secondary' : 'text-neutral-dark'
                  }`}
                  onClick={closeMenu}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/struttura"
                  className={`block font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                    location.pathname === '/struttura' ? 'text-secondary' : 'text-neutral-dark'
                  }`}
                  onClick={closeMenu}
                >
                  {t('nav.structure')}
                </Link>
                <Link
                  to="/servizi"
                  className={`block font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                    location.pathname === '/servizi' ? 'text-secondary' : 'text-neutral-dark'
                  }`}
                  onClick={closeMenu}
                >
                  {t('nav.services')}
                </Link>
                <Link
                  to="/affitto-breve"
                  className={`block font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                    location.pathname === '/affitto-breve' ? 'text-secondary' : 'text-neutral-dark'
                  }`}
                  onClick={closeMenu}
                >
                  {t('nav.short_rental')}
                </Link>
                <Link
                  to="/prenotazioni"
                  className={`block font-lato font-medium transition-colors duration-300 hover:text-secondary ${
                    location.pathname === '/prenotazioni' ? 'text-secondary' : 'text-neutral-dark'
                  }`}
                  onClick={closeMenu}
                >
                  {t('nav.bookings')}
                </Link>

                {/* Language Selector Mobile */}
                <div className="pt-4 border-t border-neutral-light">
                  <div className="flex items-center space-x-2 mb-3">
                    <HiGlobe className="w-5 h-5 text-neutral-dark" />
                    <span className="font-lato font-medium text-neutral-dark">Lingua / Language</span>
                  </div>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                          lang.code === i18n.language 
                            ? 'bg-secondary text-white' 
                            : 'bg-neutral-light text-neutral-dark hover:bg-neutral-light/80'
                        }`}
                      >
                        <img src={lang.flag} alt={lang.name} className="w-6 h-4 rounded-sm" />
                        <span className="font-lato">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
