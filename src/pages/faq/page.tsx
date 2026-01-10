import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: 'ri-question-line' },
    { id: 'general', name: 'General', icon: 'ri-information-line' },
    { id: 'booking', name: 'Booking', icon: 'ri-calendar-line' },
    { id: 'pricing', name: 'Pricing', icon: 'ri-money-dollar-circle-line' },
    { id: 'services', name: 'Services', icon: 'ri-service-line' },
    { id: 'policies', name: 'Policies', icon: 'ri-file-list-line' }
  ];

  const faqs = [
    {
      category: 'general',
      question: 'What areas do you serve?',
      answer: 'We proudly serve Toronto and the entire Greater Toronto Area (GTA), including Mississauga, Brampton, Vaughan, Markham, Richmond Hill, North York, Scarborough, Etobicoke, and surrounding communities. If you\'re unsure whether we service your area, please contact us and we\'ll be happy to confirm.'
    },
    {
      category: 'general',
      question: 'Are your cleaners insured and bonded?',
      answer: 'Yes, absolutely! All our cleaning professionals are fully insured and bonded. We carry comprehensive liability insurance and workers\' compensation coverage to protect both our clients and our team members. Every cleaner also undergoes thorough background checks and reference verification before joining our team.'
    },
    {
      category: 'general',
      question: 'What cleaning products do you use?',
      answer: 'We use professional-grade, eco-friendly cleaning products that are safe for your family, pets, and the environment. All our products are certified green, non-toxic, and biodegradable. We can also accommodate specific product preferences or work with your own supplies if you have allergies or sensitivities.'
    },
    {
      category: 'booking',
      question: 'How do I book a cleaning service?',
      answer: 'Booking is easy! You can book online through our website 24/7, call us at (416) 555-1234 during business hours, or email us at info@sparkleempire.ca. Our online booking system allows you to select your service type, choose your date and time, and complete payment securely. You\'ll receive instant confirmation via email.'
    },
    {
      category: 'booking',
      question: 'How far in advance do I need to book?',
      answer: 'We recommend booking at least 48 hours in advance to ensure your preferred date and time are available. However, we understand that sometimes you need cleaning services urgently. We offer same-day service in select areas when booked before 12 PM, subject to availability. Additional fees may apply for same-day bookings.'
    },
    {
      category: 'booking',
      question: 'Can I reschedule or cancel my appointment?',
      answer: 'Yes, we understand that plans change. You can reschedule or cancel your appointment up to 24 hours before your scheduled service time without any penalty. Cancellations made less than 24 hours before the appointment may be subject to a cancellation fee. You can manage your bookings through our customer portal or by contacting us directly.'
    },
    {
      category: 'booking',
      question: 'Do I need to be home during the cleaning?',
      answer: 'No, you don\'t need to be home during the cleaning service. Many of our clients provide us with a key, lockbox code, or building access information. All our staff are thoroughly background-checked, bonded, and insured for your complete peace of mind. If you prefer to be present, that\'s perfectly fine too—we\'re flexible to work around your schedule.'
    },
    {
      category: 'pricing',
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the type of service, property size, and frequency of cleaning. Residential cleaning starts at $89 for essential cleaning, $149 for deep cleaning, and $229 for our premium package. Commercial cleaning starts at $299/month for small offices. We provide transparent, upfront pricing with no hidden fees. Visit our Pricing page or contact us for a detailed quote tailored to your specific needs.'
    },
    {
      category: 'pricing',
      question: 'Do you offer discounts for recurring services?',
      answer: 'Yes! We offer attractive discounts for clients who book recurring cleaning services. Weekly clients receive 15% off, bi-weekly clients get 10% off, and monthly clients save 5%. These discounts apply automatically when you set up a recurring service schedule. We also offer seasonal promotions and referral bonuses—ask us about current offers!'
    },
    {
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and secure online payments through Stripe. Payment is typically processed after the service is completed to your satisfaction. For recurring services, we can set up automatic billing for your convenience. We do not accept cash or checks at this time.'
    },
    {
      category: 'pricing',
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in complete transparency. The price we quote is the price you pay. All our estimates include labor, supplies, and equipment. The only additional charges would be for add-on services you specifically request (like window cleaning or carpet shampooing) or if you need same-day service. We always communicate any potential additional costs upfront before proceeding.'
    },
    {
      category: 'services',
      question: 'What\'s included in a standard cleaning?',
      answer: 'Our standard (Essential) cleaning includes dusting all surfaces, vacuuming all floors, mopping hard floors, cleaning kitchen counters and sinks, bathroom cleaning and sanitization, trash removal, and basic tidying. We clean all accessible areas in your home. For a detailed list of what\'s included in each service tier, please visit our Services page.'
    },
    {
      category: 'services',
      question: 'What\'s the difference between regular cleaning and deep cleaning?',
      answer: 'Regular cleaning maintains your home\'s cleanliness with routine tasks like dusting, vacuuming, and bathroom cleaning. Deep cleaning is more comprehensive and includes everything in regular cleaning plus detailed work like cleaning inside appliances, baseboards, window sills, light fixtures, behind furniture, and thorough grout cleaning. We recommend deep cleaning 2-4 times per year or when moving in/out.'
    },
    {
      category: 'services',
      question: 'Do you clean inside appliances like ovens and refrigerators?',
      answer: 'Yes! Cleaning inside appliances is included in our Deep Clean and Premium packages. This includes thorough cleaning of your oven, refrigerator, microwave, and dishwasher. If you have a standard cleaning package and would like appliance cleaning, you can add it as an extra service for $59. We use specialized products to safely and effectively clean all appliance types.'
    },
    {
      category: 'services',
      question: 'Can you help with organizing and decluttering?',
      answer: 'While our primary focus is cleaning, our Premium package includes basic organizing services. We can organize closets, arrange items neatly, and help create a more orderly space. For extensive decluttering or professional organizing services, we can recommend trusted partners who specialize in this area. Please discuss your specific needs when booking.'
    },
    {
      category: 'services',
      question: 'Do you offer commercial cleaning services?',
      answer: 'Absolutely! We provide comprehensive commercial cleaning services for offices, retail spaces, medical facilities, educational institutions, and more. Our commercial services include daily, weekly, bi-weekly, or monthly cleaning schedules, customized to your business needs. We work after hours to minimize disruption to your operations. Contact us for a free site assessment and custom quote.'
    },
    {
      category: 'services',
      question: 'Do you provide cleaning supplies and equipment?',
      answer: 'Yes, we arrive fully equipped with all necessary cleaning supplies, tools, and equipment. You don\'t need to provide anything. We use professional-grade, eco-friendly products and commercial equipment to ensure the best results. If you have specific products you\'d like us to use or prefer we use your vacuum, we\'re happy to accommodate your preferences.'
    },
    {
      category: 'policies',
      question: 'What is your satisfaction guarantee?',
      answer: 'We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely satisfied with any aspect of our cleaning service, contact us within 24 hours and we\'ll return to re-clean the area at no additional charge. If you\'re still not satisfied after the re-clean, we\'ll provide a full refund. Your happiness is our top priority.'
    },
    {
      category: 'policies',
      question: 'What if something gets damaged during cleaning?',
      answer: 'While our team takes extreme care to prevent any damage, accidents can happen. We carry comprehensive liability insurance that covers any damage to your property. If something is damaged during our service, please notify us immediately. We\'ll file a claim with our insurance and work quickly to repair or replace the item. We take full responsibility for our team\'s actions.'
    },
    {
      category: 'policies',
      question: 'Do you have a privacy policy?',
      answer: 'Yes, we take your privacy very seriously. We never share your personal information with third parties. All client information is stored securely and used only for service delivery and communication purposes. Our team members sign confidentiality agreements and are trained to respect your privacy and property. You can review our complete Privacy Policy on our website.'
    },
    {
      category: 'policies',
      question: 'Can I request the same cleaning team each time?',
      answer: 'Absolutely! We understand the importance of consistency and building trust. When you book recurring services, we assign you a dedicated cleaning team who will become familiar with your home, preferences, and specific needs. This ensures consistent quality and allows you to build a comfortable relationship with your cleaners. If you ever have concerns about your assigned team, we\'re happy to make adjustments.'
    },
    {
      category: 'policies',
      question: 'What happens if my cleaner is sick or unavailable?',
      answer: 'If your assigned cleaner is unavailable due to illness or emergency, we\'ll notify you as soon as possible and offer to reschedule or send a qualified substitute cleaner. All our team members are trained to the same high standards, so you can expect the same quality of service. We maintain backup staff to ensure minimal disruption to your cleaning schedule.'
    },
    {
      category: 'general',
      question: 'Are you available for emergency cleaning services?',
      answer: 'Yes, we offer emergency cleaning services for urgent situations like post-party cleanup, water damage cleanup, or preparing for unexpected guests. Contact us directly at (416) 555-1234 to discuss your emergency needs. We\'ll do our best to accommodate you as quickly as possible. Emergency services may be subject to additional fees depending on timing and scope.'
    },
    {
      category: 'services',
      question: 'Do you offer move-in/move-out cleaning?',
      answer: 'Yes! Our move-in/move-out cleaning service is one of our most popular offerings. This comprehensive service ensures the property is spotless for new occupants or helps you get your full deposit back. It includes cleaning inside all cabinets and appliances, walls, closets, bathrooms, floors, and more. We follow landlord-approved checklists to ensure nothing is missed. Book at least one week in advance for best availability.'
    },
    {
      category: 'services',
      question: 'Can you clean after a renovation or construction project?',
      answer: 'Absolutely! Post-renovation cleaning is a specialty service we offer. Construction projects leave behind dust, debris, and residue that requires specialized cleaning techniques. Our team is experienced in post-construction cleanup, including removing paint splatters, cleaning windows, deep cleaning floors, and ensuring all surfaces are dust-free. Contact us for a custom quote based on your project scope.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-700 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about our cleaning services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full px-6 py-4 pr-12 border-2 border-gray-300 rounded-xl text-lg focus:border-primary-400 focus:outline-none shadow-lg"
              />
              <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400"></i>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-primary-400 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${category.icon} text-lg`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden group border border-gray-200 hover:border-primary-400 transition-all"
                >
                  <summary className="px-6 py-5 cursor-pointer list-none flex items-start justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3 flex-1">
                      <i className="ri-question-line text-primary-400 text-xl flex-shrink-0 mt-1"></i>
                      <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                    </div>
                    <i className="ri-add-line text-2xl text-primary-400 group-open:rotate-45 transition-transform flex-shrink-0"></i>
                  </summary>
                  <div className="px-6 pb-6 pl-12">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.details>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all whitespace-nowrap"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <i className="ri-customer-service-2-line text-6xl mb-6"></i>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Can't Find Your Answer?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Our friendly team is here to help you with any questions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="tel:+14165551234"
                className="bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl p-8 hover:bg-white hover:text-primary-700 transition-all group"
              >
                <i className="ri-phone-line text-5xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-2xl font-bold mb-2">(416) 555-1234</p>
                <p className="text-sm text-white/80 group-hover:text-primary-600">
                  Mon-Sat: 7AM - 8PM<br />
                  Sunday: 9AM - 6PM
                </p>
                <p className="text-xs mt-3 text-white/70 group-hover:text-primary-500">
                  Average response time: 2 minutes
                </p>
              </a>

              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white rounded-xl p-8 hover:bg-white hover:text-primary-700 transition-all group"
              >
                <i className="ri-mail-line text-5xl mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-lg font-semibold mb-2">info@sparkleempire.ca</p>
                <p className="text-sm text-white/80 group-hover:text-primary-600 mb-4">
                  Send us a detailed message
                </p>
                <p className="text-xs text-white/70 group-hover:text-primary-500">
                  We respond within 2 hours
                </p>
              </Link>
            </div>

            <div className="mt-10 pt-10 border-t border-white/20">
              <p className="text-lg mb-4">Or visit our contact page for more options</p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-accent-400 hover:text-white transition-all shadow-xl whitespace-nowrap"
              >
                Contact Us <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-700 text-center mb-12">
            Helpful Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/pricing"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-400 transition-all">
                <i className="ri-price-tag-3-line text-3xl text-primary-400 group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">View Pricing</h3>
              <p className="text-gray-600 mb-4">
                Transparent pricing for all our services with no hidden fees
              </p>
              <span className="text-primary-400 font-semibold group-hover:text-primary-600">
                See Prices <i className="ri-arrow-right-line ml-1"></i>
              </span>
            </Link>

            <Link
              to="/residential"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-400 transition-all">
                <i className="ri-home-4-line text-3xl text-primary-400 group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Services</h3>
              <p className="text-gray-600 mb-4">
                Explore our comprehensive residential and commercial cleaning services
              </p>
              <span className="text-primary-400 font-semibold group-hover:text-primary-600">
                Learn More <i className="ri-arrow-right-line ml-1"></i>
              </span>
            </Link>

            <Link
              to="/about"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-400 transition-all">
                <i className="ri-team-line text-3xl text-primary-400 group-hover:text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">About Us</h3>
              <p className="text-gray-600 mb-4">
                Learn about our team, values, and commitment to excellence
              </p>
              <span className="text-primary-400 font-semibold group-hover:text-primary-600">
                Our Story <i className="ri-arrow-right-line ml-1"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;