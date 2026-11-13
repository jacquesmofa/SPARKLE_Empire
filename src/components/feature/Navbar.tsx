
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Residential', path: '/residential' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-400 rounded-lg">
              <i className="ri-sparkling-2-fill text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl leading-none ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
                Sparkle Empire
              </span>
              <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                Cleaning Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  location.pathname === link.path
                    ? isScrolled
                      ? 'bg-primary-400 text-white'
                      : 'bg-white/20 text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+14165551234"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                isScrolled
                  ? 'text-primary-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <i className="ri-phone-line"></i>
              <span>(416) 555-1234</span>
            </a>
            <Link
              to="/pricing"
              className="px-6 py-2.5 bg-primary-400 text-white rounded-lg text-sm font-semibold hover:bg-primary-500 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Book Online Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-primary-400 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+14165551234"
                className="block px-4 py-3 text-center bg-gray-100 text-primary-700 rounded-lg text-sm font-medium"
              >
                <i className="ri-phone-line mr-2"></i>
                (416) 555-1234
              </a>
              <Link
                to="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-center bg-primary-400 text-white rounded-lg text-sm font-semibold"
              >
                Book Online Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
