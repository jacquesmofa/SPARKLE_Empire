import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    contactMethod: 'email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We\'ll respond within 2 hours during business hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      contactMethod: 'email'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-700 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help! Reach out and we'll respond within 2 hours during business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-700 to-primary-600 rounded-3xl p-10 text-white"
            >
              <h2 className="text-3xl font-display font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+14165551234" className="text-xl font-bold hover:text-accent-400 transition-colors">
                      (416) 555-1234
                    </a>
                    <p className="text-sm text-white/80 mt-1">
                      Mon-Sat: 7:00 AM - 8:00 PM<br />
                      Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@sparkleempire.ca" className="text-lg hover:text-accent-400 transition-colors">
                      info@sparkleempire.ca
                    </a>
                    <p className="text-sm text-white/80 mt-1">
                      We respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-white/90 leading-relaxed">
                      123 Cleaning Street<br />
                      Toronto, ON M5H 2N2<br />
                      Canada
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-accent-400 hover:text-accent-300 font-semibold"
                    >
                      Get Directions <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-line text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Emergency Contact</h3>
                    <a href="tel:+14165559999" className="text-lg font-bold hover:text-accent-400 transition-colors">
                      (416) 555-9999
                    </a>
                    <p className="text-sm text-white/80 mt-1">
                      24/7 Emergency Line
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-white hover:text-primary-700 rounded-lg flex items-center justify-center transition-all"
                  >
                    <i className="ri-facebook-fill text-xl"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-white hover:text-primary-700 rounded-lg flex items-center justify-center transition-all"
                  >
                    <i className="ri-instagram-line text-xl"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-white hover:text-primary-700 rounded-lg flex items-center justify-center transition-all"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 hover:bg-white hover:text-primary-700 rounded-lg flex items-center justify-center transition-all"
                  >
                    <i className="ri-twitter-x-line text-xl"></i>
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-sm text-white/90 leading-relaxed">
                  <strong>Prefer to book online?</strong><br />
                  Skip the wait and book your cleaning service instantly through our online booking system.
                </p>
                <Link
                  to="/pricing"
                  className="inline-block mt-4 px-6 py-3 bg-white text-primary-700 rounded-lg font-bold hover:bg-accent-400 hover:text-white transition-all whitespace-nowrap"
                >
                  Book Online Now <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-primary-700 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 2 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none transition-colors"
                        placeholder="(416) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move-In/Move-Out</option>
                      <option value="specialty">Specialty Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your cleaning needs..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex items-center space-x-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === 'email'}
                          onChange={handleChange}
                          className="w-5 h-5 text-primary-400"
                        />
                        <span className="text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === 'phone'}
                          onChange={handleChange}
                          className="w-5 h-5 text-primary-400"
                        />
                        <span className="text-gray-700">Phone</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary-400 text-white rounded-lg font-bold hover:bg-primary-500 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    Send Message <i className="ri-send-plane-fill ml-2"></i>
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-white">
        <div className="w-full h-96 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977249056!2d-79.51814281640625!3d43.71837080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sparkle Empire Location"
          ></iframe>
        </div>
      </section>

      {/* Service Area Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-primary-700 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proudly serving Toronto and the Greater Toronto Area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Toronto', 'Mississauga', 'Brampton', 'Vaughan',
              'Markham', 'Richmond Hill', 'North York', 'Scarborough',
              'Etobicoke', 'Oakville', 'Burlington', 'Milton',
              'Ajax', 'Pickering', 'Whitby', 'Oshawa'
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all text-center"
              >
                <i className="ri-map-pin-line text-2xl text-primary-400 mb-2"></i>
                <p className="font-semibold text-gray-900">{area}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-primary-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                <strong>Don't see your area?</strong> We're constantly expanding our service coverage.
              </p>
              <a
                href="tel:+14165551234"
                className="inline-block px-6 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all whitespace-nowrap"
              >
                Call to Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 mb-4">
                We respond to all inquiries within 2 hours during business hours
              </p>
              <div className="text-sm text-gray-500">
                Average response: 30 minutes
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Book online 24/7 or call us to schedule your cleaning service
              </p>
              <Link to="/pricing" className="text-primary-600 font-semibold hover:text-primary-700">
                Book Now <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 mb-4">
                Emergency cleaning services available around the clock
              </p>
              <a href="tel:+14165559999" className="text-primary-600 font-semibold hover:text-primary-700">
                (416) 555-9999
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;