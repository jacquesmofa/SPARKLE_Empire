
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg">
                <i className="ri-sparkling-2-fill text-accent-400 text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">Sparkle Empire</span>
                <span className="text-xs text-white/80">Cleaning Excellence</span>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Premium cleaning services across Toronto and the GTA. Making homes and businesses sparkle since 2015.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-base">Stay Sparkly</h4>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white text-primary-700 rounded-lg text-sm font-semibold hover:bg-accent-400 hover:text-white transition-all whitespace-nowrap"
                >
                  Subscribe <i className="ri-arrow-right-line ml-1"></i>
                </button>
              </form>
              <p className="text-xs text-white/60">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/residential" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/residential#deep-clean" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/residential#move-in-out" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Move-In/Move-Out
                </Link>
              </li>
              <li>
                <Link to="/residential#specialty" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Specialty Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#team" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <a href="#careers" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Reviews
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+14165551234"
                  className="text-white hover:text-accent-400 transition-colors text-lg font-semibold block"
                >
                  (416) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sparkleempire.ca"
                  className="text-white/80 hover:text-accent-400 transition-colors text-sm block"
                >
                  info@sparkleempire.ca
                </a>
              </li>
              <li className="pt-2">
                <p className="text-sm font-semibold mb-1">Hours</p>
                <p className="text-white/80 text-sm">Mon-Sat: 7:00 AM - 8:00 PM</p>
                <p className="text-white/80 text-sm">Sunday: 9:00 AM - 6:00 PM</p>
              </li>
              <li className="pt-2">
                <p className="text-white/80 text-sm leading-relaxed">
                  123 Cleaning Street<br />
                  Toronto, ON M5H 2N2
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 text-sm inline-block mt-1"
                >
                  Get Directions <i className="ri-arrow-right-up-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-accent-400 rounded-lg transition-all"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-accent-400 rounded-lg transition-all"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-accent-400 rounded-lg transition-all"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-accent-400 rounded-lg transition-all"
              >
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-white/70 text-sm text-center">
              © {currentYear} Sparkle Empire. All rights reserved.
            </div>

            {/* Policy Links */}
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/privacy-policy" className="text-white/70 hover:text-accent-400 transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <span className="text-white/40">|</span>
              <Link to="/terms-of-use" className="text-white/70 hover:text-accent-400 transition-colors whitespace-nowrap">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;