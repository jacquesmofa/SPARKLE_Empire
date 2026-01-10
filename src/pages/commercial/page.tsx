import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const CommercialPage = () => {
  const industries = [
    {
      icon: 'ri-building-line',
      name: 'Office Buildings',
      image: 'https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20interior%20with%20clean%20glass%20walls%20organized%20desks%20pristine%20floors%20bright%20professional%20workspace%20contemporary%20furniture%20spotless%20environment%20business%20setting&width=600&height=450&seq=office2&orientation=landscape',
      services: [
        'Daily office cleaning',
        'Restroom sanitization',
        'Kitchen and break room cleaning',
        'Conference room preparation',
        'Trash and recycling management'
      ]
    },
    {
      icon: 'ri-hospital-line',
      name: 'Medical Facilities',
      image: 'https://readdy.ai/api/search-image?query=pristine%20medical%20clinic%20interior%20with%20sterile%20white%20surfaces%20clean%20examination%20rooms%20bright%20lighting%20professional%20healthcare%20environment%20spotless%20floors%20modern%20medical%20equipment&width=600&height=450&seq=medical1&orientation=landscape',
      services: [
        'Medical-grade disinfection',
        'Biohazard waste handling',
        'Waiting room sanitization',
        'Exam room deep cleaning',
        'HIPAA-compliant procedures'
      ]
    },
    {
      icon: 'ri-store-line',
      name: 'Retail Spaces',
      image: 'https://readdy.ai/api/search-image?query=clean%20modern%20retail%20store%20interior%20with%20spotless%20display%20areas%20organized%20shelves%20bright%20lighting%20pristine%20floors%20contemporary%20design%20welcoming%20shopping%20environment&width=600&height=450&seq=retail1&orientation=landscape',
      services: [
        'Floor cleaning and polishing',
        'Window and display cleaning',
        'Fitting room sanitization',
        'After-hours cleaning',
        'High-traffic area maintenance'
      ]
    },
    {
      icon: 'ri-tools-line',
      name: 'Industrial Sites',
      image: 'https://readdy.ai/api/search-image?query=clean%20industrial%20warehouse%20interior%20with%20organized%20workspace%20spotless%20concrete%20floors%20bright%20overhead%20lighting%20professional%20manufacturing%20environment%20well%20maintained%20facility&width=600&height=450&seq=industrial1&orientation=landscape',
      services: [
        'Warehouse floor cleaning',
        'Equipment degreasing',
        'Loading dock maintenance',
        'Safety compliance cleaning',
        'Dust and debris removal'
      ]
    },
    {
      icon: 'ri-book-line',
      name: 'Educational Institutions',
      image: 'https://readdy.ai/api/search-image?query=bright%20clean%20classroom%20interior%20with%20organized%20desks%20pristine%20floors%20natural%20lighting%20spotless%20learning%20environment%20modern%20educational%20facility%20well%20maintained%20space&width=600&height=450&seq=school1&orientation=landscape',
      services: [
        'Classroom cleaning',
        'Cafeteria sanitization',
        'Gymnasium floor care',
        'Library maintenance',
        'Child-safe cleaning products'
      ]
    },
    {
      icon: 'ri-hotel-line',
      name: 'Hospitality',
      image: 'https://readdy.ai/api/search-image?query=luxurious%20hotel%20lobby%20interior%20with%20pristine%20marble%20floors%20sparkling%20clean%20surfaces%20elegant%20furniture%20bright%20natural%20lighting%20spotless%20professional%20hospitality%20environment&width=600&height=450&seq=hotel1&orientation=landscape',
      services: [
        'Guest room turnover',
        'Lobby and common area cleaning',
        'Restaurant and bar cleaning',
        'Linen and laundry service',
        '24/7 availability'
      ]
    }
  ];

  const caseStudies = [
    {
      industry: 'Corporate Office',
      title: 'Downtown Toronto Tech Company Transformation',
      challenge: 'A rapidly growing tech startup with 150 employees needed a reliable cleaning service that could handle their 24/7 office environment without disrupting productivity. Previous cleaning companies struggled with consistency and attention to detail.',
      solution: 'We implemented a customized cleaning schedule with teams working during off-peak hours (6 PM - 10 PM). Our staff was trained on the specific needs of tech environments, including proper cleaning of sensitive equipment areas and maintaining quiet zones.',
      results: [
        '40% faster turnaround time',
        '95% employee satisfaction rating',
        'Zero equipment damage incidents',
        'Renewed 3-year contract'
      ],
      image: 'https://readdy.ai/api/search-image?query=modern%20tech%20office%20interior%20with%20clean%20organized%20workspace%20bright%20natural%20lighting%20contemporary%20furniture%20spotless%20floors%20professional%20business%20environment%20happy%20employees%20working&width=800&height=600&seq=case1&orientation=landscape',
      testimonial: 'Sparkle Empire has been a game-changer for our office. The team is professional, thorough, and works seamlessly around our schedule. Our office has never looked better!'
    },
    {
      industry: 'Medical Clinic',
      title: 'Multi-Location Dental Practice Excellence',
      challenge: 'A dental practice with three locations across the GTA required medical-grade cleaning that met strict health regulations. They needed a service that understood infection control protocols and could provide consistent quality across all locations.',
      solution: 'We assigned dedicated teams to each location, all trained in medical facility cleaning standards. Implemented color-coded cleaning systems to prevent cross-contamination and provided detailed cleaning logs for regulatory compliance.',
      results: [
        '100% health inspection pass rate',
        'Reduced infection risk protocols',
        'Streamlined cleaning documentation',
        'Cost savings of 25% vs. previous provider'
      ],
      image: 'https://readdy.ai/api/search-image?query=pristine%20dental%20clinic%20interior%20with%20sterile%20white%20surfaces%20clean%20modern%20equipment%20bright%20professional%20lighting%20spotless%20examination%20area%20medical%20grade%20cleanliness&width=800&height=600&seq=case2&orientation=landscape',
      testimonial: 'As healthcare providers, cleanliness is non-negotiable. Sparkle Empire understands our industry requirements and consistently delivers exceptional results. Highly recommended!'
    },
    {
      industry: 'Retail Chain',
      title: 'Boutique Retail Chain Expansion Support',
      challenge: 'A growing fashion retail chain with 8 stores needed flexible cleaning services that could adapt to varying store hours, special events, and seasonal demands. They required a partner who could scale with their growth.',
      solution: 'Created a flexible service model with on-demand deep cleaning for special events, regular maintenance cleaning, and rapid response capabilities. Implemented a centralized scheduling system for all locations.',
      results: [
        'Supported opening of 3 new locations',
        'Same-day service for urgent needs',
        'Improved customer feedback scores',
        'Long-term partnership established'
      ],
      image: 'https://readdy.ai/api/search-image?query=elegant%20boutique%20retail%20store%20interior%20with%20spotless%20display%20areas%20pristine%20floors%20bright%20lighting%20clean%20organized%20merchandise%20contemporary%20design%20welcoming%20shopping%20environment&width=800&height=600&seq=case3&orientation=landscape',
      testimonial: 'Sparkle Empire has grown with us. Their flexibility and reliability have been crucial to our expansion. Every store maintains the same high standard of cleanliness.'
    }
  ];

  const guarantees = [
    {
      icon: 'ri-24-hours-line',
      title: '24/7 Availability',
      description: 'Round-the-clock service to fit your business schedule. We work when you need us, including nights, weekends, and holidays.'
    },
    {
      icon: 'ri-file-list-line',
      title: 'Flexible Contracts',
      description: 'No long-term commitments required. Month-to-month options available with customizable service agreements tailored to your needs.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assurance',
      description: 'Regular inspections and quality checks ensure consistent excellence. Dedicated account manager for your business.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Eco-Friendly Options',
      description: 'Green cleaning solutions available for environmentally conscious businesses. Certified sustainable products and practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20exterior%20with%20glass%20facade%20Toronto%20skyline%20professional%20business%20district%20pristine%20clean%20windows%20contemporary%20architecture%20bright%20daylight%20urban%20setting&width=1920&height=800&seq=comhero1&orientation=landscape"
            alt="Commercial Building"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 to-primary-600/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white text-sm font-semibold uppercase tracking-wide">
                Commercial Cleaning Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Keep Your Business<br />Spotless &amp; Professional
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Customized cleaning plans for offices, retail, medical facilities, and more. Professional service that enhances your business image and creates a healthier workplace.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-700 rounded-lg text-base font-semibold hover:bg-accent-400 hover:text-white transition-all shadow-xl whitespace-nowrap"
              >
                Get Free Quote
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg text-base font-semibold hover:bg-white hover:text-primary-700 transition-all whitespace-nowrap"
              >
                View Plans
              </Link>
              <a
                href="tel:+14165551234"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg text-base font-semibold hover:bg-white hover:text-primary-700 transition-all whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry-Specific Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Industry-Specific Cleaning Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized cleaning services tailored to your industry's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-56">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <i className={`${industry.icon} text-2xl text-primary-400`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <i className="ri-check-line text-primary-400 text-lg flex-shrink-0 mt-0.5"></i>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 block w-full py-3 text-center bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all whitespace-nowrap"
                  >
                    Request Custom Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Frequency Selector */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Choose Your Cleaning Schedule
            </h2>
            <p className="text-lg text-gray-600">
              Flexible scheduling options to match your business needs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
              {['Daily', 'Weekly', 'Bi-Weekly', 'Monthly', 'One-Time'].map((freq) => (
                <button
                  key={freq}
                  className="px-4 py-3 border-2 border-primary-400 text-primary-400 rounded-lg font-semibold hover:bg-primary-400 hover:text-white transition-all whitespace-nowrap"
                >
                  {freq}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Square Footage
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1,000 sq ft</span>
                  <span>50,000 sq ft</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Restrooms
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  placeholder="Enter number"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Special Requirements
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['After-hours cleaning', 'Medical-grade disinfection', 'Carpet cleaning', 'Window washing'].map((req) => (
                    <label key={req} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 text-primary-400 rounded" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Estimated Monthly Cost</p>
                <p className="text-4xl font-bold text-primary-700 mb-4">$1,250 - $1,850</p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all whitespace-nowrap"
                >
                  Request Detailed Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 text-center mb-16">
            Our Commercial Cleaning Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'ri-discuss-line', title: 'Consultation', description: 'Free on-site assessment of your facility and cleaning needs' },
              { icon: 'ri-file-list-3-line', title: 'Site Assessment', description: 'Detailed evaluation and customized cleaning plan development' },
              { icon: 'ri-file-text-line', title: 'Custom Proposal', description: 'Transparent pricing and service agreement tailored to your budget' },
              { icon: 'ri-file-check-line', title: 'Contract', description: 'Flexible terms with no hidden fees or long-term commitments' },
              { icon: 'ri-team-line', title: 'Onboarding', description: 'Team introduction, key exchange, and security protocol setup' },
              { icon: 'ri-refresh-line', title: 'Ongoing Service', description: 'Consistent quality with regular check-ins and adjustments' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-400 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                      <i className={`${step.icon} text-2xl text-primary-400`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < 5 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -ml-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from businesses we've helped transform
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                    {study.industry}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-primary-700 mb-4">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2 bg-primary-50 rounded-lg p-3">
                            <i className="ri-check-line text-primary-400 text-xl flex-shrink-0"></i>
                            <span className="text-sm font-medium text-gray-900">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-primary-400 p-6 rounded-lg shadow-md">
                    <i className="ri-double-quotes-l text-3xl text-primary-400 mb-2"></i>
                    <p className="text-gray-700 italic leading-relaxed">{study.testimonial}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Our Commercial Service Guarantees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${guarantee.icon} text-4xl text-accent-400`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                <p className="text-white/80 leading-relaxed">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg text-lg font-bold hover:bg-accent-400 hover:text-white transition-all shadow-xl whitespace-nowrap"
            >
              View Our Service Agreement
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-6">
            Ready to Elevate Your Business Environment?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get a free, no-obligation quote tailored to your facility's needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6">
              <i className="ri-phone-line text-4xl text-primary-400 mb-3"></i>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:+14165551234" className="text-2xl font-bold text-primary-700 hover:text-primary-500">
                (416) 555-1234
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <i className="ri-mail-line text-4xl text-primary-400 mb-3"></i>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <a href="mailto:commercial@sparkleempire.ca" className="text-lg font-bold text-primary-700 hover:text-primary-500">
                commercial@sparkleempire.ca
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <i className="ri-calendar-line text-4xl text-primary-400 mb-3"></i>
              <h3 className="font-semibold text-lg mb-2">Schedule Visit</h3>
              <Link to="/contact" className="text-lg font-bold text-primary-700 hover:text-primary-500">
                Book Site Assessment
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-xl text-primary-400"></i>
              <span>Fully Insured &amp; Bonded</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-time-line text-xl text-primary-400"></i>
              <span>24/7 Service Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-star-fill text-xl text-yellow-400"></i>
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialPage;