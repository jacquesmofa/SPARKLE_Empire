import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const ResidentialPage = () => {
  const serviceTiers = [
    {
      name: 'Essential Clean',
      price: 89,
      color: 'from-blue-400 to-blue-500',
      features: [
        'Dusting all surfaces',
        'Vacuum all floors',
        'Mop hard floors',
        'Clean kitchen counters',
        'Bathroom cleaning',
        'Trash removal',
        'Basic tidying'
      ]
    },
    {
      name: 'Deep Clean',
      price: 149,
      color: 'from-primary-400 to-primary-600',
      popular: true,
      features: [
        'Everything in Essential',
        'Inside appliances',
        'Baseboards & trim',
        'Window sills',
        'Light fixtures',
        'Cabinet exteriors',
        'Detailed bathroom scrub',
        'Behind furniture'
      ]
    },
    {
      name: 'Premium Package',
      price: 229,
      color: 'from-primary-600 to-primary-800',
      features: [
        'Everything in Deep Clean',
        'Inside cabinets',
        'Oven deep clean',
        'Refrigerator deep clean',
        'Window cleaning',
        'Carpet shampooing',
        'Upholstery cleaning',
        'Organizing services'
      ]
    }
  ];

  const detailedServices = [
    {
      title: 'Regular Maintenance Cleaning',
      description: 'Keep your home consistently clean with our scheduled maintenance service. Perfect for busy families and professionals who want to come home to a spotless space every week or bi-weekly.',
      image: 'https://readdy.ai/api/search-image?query=modern%20living%20room%20being%20professionally%20cleaned%20with%20vacuum%20cleaner%20bright%20natural%20light%20through%20windows%20clean%20organized%20space%20contemporary%20furniture%20spotless%20floors%20fresh%20atmosphere&width=800&height=600&seq=maint1&orientation=landscape',
      features: [
        'Weekly or bi-weekly scheduling',
        'Consistent cleaning team',
        'All rooms thoroughly cleaned',
        'Kitchen and bathroom sanitization',
        'Dusting and vacuuming',
        'Floor mopping and care',
        'Flexible rescheduling options',
        'Quality assurance checks'
      ],
      price: 'Starting at $89/visit'
    },
    {
      title: 'Deep Cleaning Service',
      description: 'Our most comprehensive cleaning service tackles every corner of your home. Ideal for spring cleaning, preparing for guests, or when your home needs extra attention. We go beyond surface cleaning to make your home truly sparkle.',
      image: 'https://readdy.ai/api/search-image?query=professional%20cleaner%20deep%20cleaning%20kitchen%20with%20eco%20friendly%20products%20scrubbing%20countertops%20pristine%20white%20surfaces%20stainless%20steel%20appliances%20bright%20lighting%20spotless%20clean%20environment&width=800&height=600&seq=deep1&orientation=landscape',
      features: [
        'Top-to-bottom comprehensive cleaning',
        'Inside appliances (oven, fridge, microwave)',
        'Baseboards and crown molding',
        'Light fixtures and ceiling fans',
        'Window tracks and sills',
        'Cabinet and drawer exteriors',
        'Behind and under furniture',
        'Detailed bathroom deep scrub',
        'Grout and tile cleaning',
        'Air vent cleaning'
      ],
      price: 'Starting at $149/visit'
    },
    {
      title: 'Move-In/Move-Out Cleaning',
      description: 'Moving is stressful enough. Let us handle the cleaning so you can focus on settling into your new home or ensuring you get your full deposit back. Our thorough move cleaning service leaves properties spotless and ready for the next chapter.',
      image: 'https://readdy.ai/api/search-image?query=empty%20apartment%20interior%20being%20professionally%20cleaned%20pristine%20white%20walls%20sparkling%20clean%20floors%20bright%20natural%20lighting%20spotless%20surfaces%20ready%20for%20new%20occupants%20modern%20minimalist%20space&width=800&height=600&seq=move2&orientation=landscape',
      features: [
        'Complete property cleaning',
        'All appliances cleaned inside and out',
        'Cabinets cleaned inside',
        'Walls spot cleaned',
        'Closets vacuumed and wiped',
        'Bathroom deep sanitization',
        'Floor scrubbing and polishing',
        'Window and blind cleaning',
        'Baseboard and trim detailing',
        'Landlord-approved checklist'
      ],
      price: 'Starting at $179/property'
    },
    {
      title: 'Post-Renovation Cleaning',
      description: 'Construction and renovation projects leave behind dust, debris, and mess. Our specialized post-renovation cleaning service removes all traces of construction work, revealing your beautiful new space underneath.',
      image: 'https://readdy.ai/api/search-image?query=newly%20renovated%20modern%20home%20interior%20being%20cleaned%20after%20construction%20pristine%20surfaces%20removing%20dust%20bright%20contemporary%20design%20spotless%20floors%20fresh%20paint%20clean%20windows&width=800&height=600&seq=reno1&orientation=landscape',
      features: [
        'Construction dust removal',
        'Paint splatter cleaning',
        'Debris and material removal',
        'Window and glass cleaning',
        'Floor deep cleaning and polishing',
        'Fixture and hardware polishing',
        'Air quality improvement',
        'Multiple cleaning passes',
        'Final inspection walkthrough'
      ],
      price: 'Custom quote based on project'
    },
    {
      title: 'Seasonal Spring Cleaning',
      description: 'Welcome the new season with a fresh, clean home. Our seasonal cleaning service focuses on those tasks that don\'t get done during regular cleaning, giving your home a complete refresh.',
      image: 'https://readdy.ai/api/search-image?query=bright%20sunny%20home%20interior%20spring%20cleaning%20fresh%20flowers%20open%20windows%20natural%20light%20streaming%20in%20clean%20organized%20space%20fresh%20atmosphere%20contemporary%20design%20spotless%20surfaces&width=800&height=600&seq=spring1&orientation=landscape',
      features: [
        'Window washing inside and out',
        'Curtain and blind cleaning',
        'Carpet deep cleaning',
        'Upholstery shampooing',
        'Mattress cleaning and flipping',
        'Closet organization',
        'Garage and storage cleaning',
        'Outdoor space cleaning',
        'Seasonal decor storage prep'
      ],
      price: 'Starting at $199/service'
    }
  ];

  const addOnServices = [
    {
      icon: 'ri-window-line',
      name: 'Window Cleaning',
      description: 'Crystal clear windows inside and out',
      price: '$49'
    },
    {
      icon: 'ri-layout-grid-line',
      name: 'Carpet Cleaning',
      description: 'Deep steam cleaning for all carpets',
      price: '$79'
    },
    {
      icon: 'ri-home-gear-line',
      name: 'Appliance Deep Clean',
      description: 'Oven, fridge, and dishwasher detailing',
      price: '$59'
    },
    {
      icon: 'ri-shirt-line',
      name: 'Laundry Service',
      description: 'Wash, dry, and fold service',
      price: '$39'
    },
    {
      icon: 'ri-sofa-line',
      name: 'Upholstery Cleaning',
      description: 'Professional furniture cleaning',
      price: '$69'
    },
    {
      icon: 'ri-door-line',
      name: 'Garage Cleaning',
      description: 'Complete garage organization and cleaning',
      price: '$89'
    },
    {
      icon: 'ri-plant-line',
      name: 'Patio Cleaning',
      description: 'Outdoor space power washing',
      price: '$79'
    },
    {
      icon: 'ri-recycle-line',
      name: 'Eco-Friendly Products',
      description: 'Premium green cleaning supplies',
      price: '$15'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical residential cleaning take?',
      answer: 'The duration depends on the size of your home and the type of service. An essential clean for a 2-bedroom apartment typically takes 2-3 hours, while a deep clean of a 4-bedroom house can take 5-7 hours. We always provide an estimated timeframe when you book.'
    },
    {
      question: 'Do I need to be home during the cleaning?',
      answer: 'No, you don\'t need to be home. Many of our clients provide us with a key or access code. All our staff are thoroughly background-checked, bonded, and insured for your peace of mind. We can also work around your schedule if you prefer to be present.'
    },
    {
      question: 'What cleaning products do you use?',
      answer: 'We use professional-grade, eco-friendly cleaning products that are safe for your family, pets, and the environment. All our products are certified green and non-toxic. If you have specific product preferences or allergies, we\'re happy to accommodate your needs.'
    },
    {
      question: 'Do you bring your own cleaning supplies and equipment?',
      answer: 'Yes! We arrive fully equipped with all necessary cleaning supplies, tools, and equipment. You don\'t need to provide anything. However, if you prefer we use specific products or your own vacuum, we\'re happy to do so.'
    },
    {
      question: 'What if I\'m not satisfied with the cleaning?',
      answer: 'Your satisfaction is our top priority. We offer a 100% satisfaction guarantee. If you\'re not completely happy with any aspect of our service, contact us within 24 hours and we\'ll return to re-clean the area at no additional charge. If you\'re still not satisfied, we\'ll provide a full refund.'
    },
    {
      question: 'Can I request the same cleaning team each time?',
      answer: 'Absolutely! We understand the importance of consistency and trust. When you book recurring services, we assign you a dedicated cleaning team who will become familiar with your home and preferences. This ensures consistent quality and builds a comfortable relationship.'
    },
    {
      question: 'How do I prepare my home for cleaning?',
      answer: 'Minimal preparation is needed. We recommend picking up personal items, toys, and clutter so our team can focus on cleaning rather than organizing. Secure any valuables, and let us know about any areas that need special attention or should be avoided.'
    },
    {
      question: 'Are your cleaners insured and background-checked?',
      answer: 'Yes, absolutely. Every member of our team undergoes comprehensive background checks, reference verification, and professional training. We are fully insured and bonded, providing you with complete protection and peace of mind.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=happy%20family%20in%20pristine%20clean%20modern%20home%20bright%20natural%20light%20through%20large%20windows%20comfortable%20living%20room%20spotless%20surfaces%20contemporary%20furniture%20warm%20atmosphere%20joyful%20parents%20with%20children&width=1920&height=800&seq=reshero1&orientation=landscape"
            alt="Happy Family in Clean Home"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="text-white/80 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Residential Services</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Residential Cleaning Services
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From regular maintenance to deep cleans, we make your home sparkle. Professional, reliable, and eco-friendly cleaning services tailored to your lifestyle.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center space-x-2">
                <i className="ri-time-line text-2xl text-accent-400"></i>
                <div>
                  <p className="text-sm text-white/70">Average Service</p>
                  <p className="font-semibold">2-4 Hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-leaf-line text-2xl text-accent-400"></i>
                <div>
                  <p className="text-sm text-white/70">Products</p>
                  <p className="font-semibold">Eco-Friendly</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-shield-check-line text-2xl text-accent-400"></i>
                <div>
                  <p className="text-sm text-white/70">Guarantee</p>
                  <p className="font-semibold">100% Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Tier Comparison */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Choose Your Cleaning Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the perfect cleaning service for your home and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  tier.popular ? 'ring-4 ring-primary-400 transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-primary-400 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className={`bg-gradient-to-r ${tier.color} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${tier.price}</span>
                    <span className="text-lg ml-2">/visit</span>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <i className="ri-checkbox-circle-fill text-primary-400 text-xl flex-shrink-0 mt-0.5"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/pricing"
                    className={`block w-full py-3 text-center rounded-lg font-semibold transition-all whitespace-nowrap ${
                      tier.popular
                        ? 'bg-primary-400 text-white hover:bg-primary-500'
                        : 'border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white'
                    }`}
                  >
                    Select This Plan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Our Residential Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions for every need and occasion
            </p>
          </div>

          <div className="space-y-20">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl font-display font-bold text-primary-700 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <i className="ri-check-line text-primary-400 text-lg flex-shrink-0 mt-0.5"></i>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg mb-6">
                    <span className="text-primary-700 font-semibold">{service.price}</span>
                    <Link
                      to="/pricing"
                      className="px-6 py-2 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all whitespace-nowrap"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 text-center mb-16">
            Our Residential Cleaning Process
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { icon: 'ri-calendar-check-line', title: 'Book Online', description: 'Choose your service and schedule' },
                { icon: 'ri-phone-line', title: 'Confirm Details', description: 'We call to verify your booking' },
                { icon: 'ri-car-line', title: 'We Arrive', description: 'Team arrives on time, fully equipped' },
                { icon: 'ri-sparkling-line', title: 'Deep Clean', description: 'Thorough cleaning of your home' },
                { icon: 'ri-checkbox-circle-line', title: 'Quality Check', description: 'Final inspection ensures perfection' }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-20 h-20 mx-auto mb-4 bg-primary-400 rounded-full flex items-center justify-center shadow-lg">
                    <i className={`${step.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section id="specialty" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Add-On Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your cleaning with our specialty services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-400 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className={`${addon.icon} text-3xl text-primary-400`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                  {addon.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {addon.description}
                </p>
                <p className="text-2xl font-bold text-primary-700 text-center">
                  {addon.price}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden group"
              >
                <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  <span className="text-lg">{faq.question}</span>
                  <i className="ri-add-line text-2xl text-primary-400 group-open:rotate-45 transition-transform"></i>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-display font-bold mb-4">
              Book Your Residential Cleaning Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience the Sparkle Empire difference in your home
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <i className="ri-phone-line text-4xl mb-3"></i>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <a href="tel:+14165551234" className="text-2xl font-bold hover:text-accent-400 transition-colors">
                  (416) 555-1234
                </a>
                <p className="text-sm text-white/80 mt-2">Mon-Sat: 7AM - 8PM</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <i className="ri-calendar-line text-4xl mb-3"></i>
                <h3 className="font-semibold text-lg mb-2">Book Online</h3>
                <Link
                  to="/pricing"
                  className="inline-block px-8 py-3 bg-white text-primary-700 rounded-lg font-bold hover:bg-accent-400 hover:text-white transition-all mt-2 whitespace-nowrap"
                >
                  Schedule Now
                </Link>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <i className="ri-shield-check-line text-xl"></i>
                <span>Insured &amp; Bonded</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-star-fill text-xl text-yellow-400"></i>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-leaf-line text-xl"></i>
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResidentialPage;