import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const HomePage = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [propertySize, setPropertySize] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "https://readdy.ai/api/search-image?query=luxurious%20modern%20Canadian%20home%20interior%20with%20floor%20to%20ceiling%20windows%20overlooking%20city%20skyline%20pristine%20clean%20living%20space%20bright%20natural%20sunlight%20streaming%20through%20crystal%20clear%20glass%20contemporary%20elegant%20furniture%20spotless%20white%20surfaces%20minimalist%20design%20high%20end%20residential%20property%20ultra%20high%20definition%208k%20quality&width=1920&height=1080&seq=hero1&orientation=landscape",
    "https://readdy.ai/api/search-image?query=immaculate%20sparkling%20clean%20modern%20kitchen%20with%20gleaming%20white%20marble%20countertops%20stainless%20steel%20appliances%20crystal%20clear%20windows%20bright%20natural%20light%20pristine%20surfaces%20spotless%20interior%20ultra%20high%20definition%208k%20quality&width=1920&height=1080&seq=hero2&orientation=landscape",
    "https://readdy.ai/api/search-image?query=pristine%20luxury%20bathroom%20with%20sparkling%20clean%20glass%20shower%20gleaming%20chrome%20fixtures%20white%20marble%20tiles%20bright%20natural%20light%20immaculate%20surfaces%20spotless%20modern%20design%20ultra%20high%20definition%208k%20quality&width=1920&height=1080&seq=hero3&orientation=landscape",
    "https://readdy.ai/api/search-image?query=spotless%20modern%20office%20space%20with%20floor%20to%20ceiling%20windows%20city%20view%20pristine%20clean%20desks%20organized%20workspace%20bright%20lighting%20professional%20environment%20immaculate%20surfaces%20ultra%20high%20definition%208k%20quality&width=1920&height=1080&seq=hero4&orientation=landscape",
    "https://readdy.ai/api/search-image?query=beautiful%20clean%20living%20room%20with%20sparkling%20hardwood%20floors%20pristine%20white%20walls%20bright%20natural%20sunlight%20through%20large%20windows%20contemporary%20furniture%20spotless%20surfaces%20ultra%20high%20definition%208k%20quality&width=1920&height=1080&seq=hero5&orientation=landscape"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "Sparkle Empire transformed our home! Their attention to detail is incredible. Every corner sparkles, and they use eco-friendly products which is so important to us. The team is professional, punctual, and trustworthy. We've been using their bi-weekly service for over a year now and couldn't be happier.",
      author: "Sarah Mitchell",
      location: "Toronto, ON",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=professional%20woman%20smiling%20in%20modern%20clean%20bright%20home%20interior%20natural%20lighting%20happy%20satisfied%20customer%20portrait&width=80&height=80&seq=test1&orientation=squarish"
    },
    {
      text: "As a busy office manager, finding a reliable commercial cleaning service was crucial. Sparkle Empire has exceeded all expectations. Our office has never looked better, and their flexible scheduling works perfectly with our business hours. Highly recommend for any business!",
      author: "Michael Chen",
      location: "Mississauga, ON",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=professional%20businessman%20in%20modern%20office%20environment%20smiling%20satisfied%20customer%20portrait%20clean%20workspace&width=80&height=80&seq=test2&orientation=squarish"
    },
    {
      text: "We hired Sparkle Empire for our move-out cleaning and they made the entire process stress-free. The property was spotless, and we got our full deposit back! Their team went above and beyond. Will definitely use them again for our new home.",
      author: "Jennifer Rodriguez",
      location: "North York, ON",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=happy%20woman%20in%20clean%20bright%20home%20smiling%20satisfied%20customer%20portrait%20modern%20interior%20natural%20light&width=80&height=80&seq=test3&orientation=squarish"
    }
  ];

  const services = [
    {
      title: "Residential Deep Clean",
      category: "HOME CLEANING",
      description: "Comprehensive cleaning for every room in your home",
      image: "https://readdy.ai/api/search-image?query=pristine%20modern%20living%20room%20with%20sparkling%20clean%20surfaces%20bright%20natural%20light%20through%20large%20windows%20minimalist%20elegant%20interior%20design%20white%20walls%20spotless%20floors%20contemporary%20furniture%20ultra%20high%20definition%208k%20quality&width=600&height=400&seq=home1&orientation=landscape",
      link: "/residential"
    },
    {
      title: "Commercial Office Cleaning",
      category: "BUSINESS SERVICES",
      description: "Professional cleaning solutions for your workplace",
      image: "https://readdy.ai/api/search-image?query=immaculate%20modern%20office%20space%20with%20clean%20desks%20organized%20workspace%20bright%20lighting%20glass%20walls%20professional%20business%20environment%20spotless%20floors%20contemporary%20design%20ultra%20high%20definition%208k%20quality&width=600&height=400&seq=office1&orientation=landscape",
      link: "/commercial"
    },
    {
      title: "Move-In/Move-Out",
      category: "SPECIALTY SERVICE",
      description: "Complete cleaning for property transitions",
      image: "https://readdy.ai/api/search-image?query=empty%20clean%20apartment%20interior%20with%20sparkling%20floors%20pristine%20white%20walls%20bright%20natural%20lighting%20spotless%20surfaces%20ready%20for%20new%20occupants%20modern%20minimalist%20space%20ultra%20high%20definition%208k%20quality&width=600&height=400&seq=move1&orientation=landscape",
      link: "/residential#move-in-out"
    },
    {
      title: "Specialty Services",
      category: "PREMIUM CARE",
      description: "Window, carpet, and upholstery cleaning",
      image: "https://readdy.ai/api/search-image?query=crystal%20clear%20windows%20with%20sparkling%20glass%20pristine%20carpet%20cleaning%20professional%20service%20bright%20natural%20light%20clean%20modern%20interior%20spotless%20surfaces%20ultra%20high%20definition%208k%20quality&width=600&height=400&seq=special1&orientation=landscape",
      link: "/residential#specialty"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Clean Space ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000"
            style={{ mixBlendMode: 'overlay' }}
          >
            <source src="https://readdy.ai/api/search-image?query=looping%20video%20of%20sparkling%20clean%20surfaces%20gleaming%20windows%20pristine%20modern%20interior%20bright%20natural%20light%20professional%20cleaning%20results%20ultra%20high%20definition&width=1920&height=1080&seq=herovideo&orientation=landscape" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <i className="ri-verified-badge-fill text-accent-400"></i>
              <span className="text-white text-sm font-medium">TRUSTED BY 2,500+ CANADIAN HOMES</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
              SPARKLE<br />EMPIRE
            </h1>
            <p className="font-display text-2xl md:text-3xl text-white/90 mb-6 font-light tracking-wide">
              Cleaning Excellence
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Premium residential &amp; commercial cleaning services across the GTA. Bonded, insured, and obsessed with perfection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-primary-400 text-white rounded-lg text-base font-semibold hover:bg-primary-500 transition-all shadow-2xl hover:shadow-primary-400/50 whitespace-nowrap"
              >
                Book Online Now <i className="ri-arrow-right-line ml-2"></i>
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg text-base font-semibold hover:bg-white hover:text-primary-700 transition-all whitespace-nowrap"
              >
                Get Free Estimate
              </Link>
            </div>
          </motion.div>

          {/* Trust Indicators - Moved to Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-8 left-8 hidden lg:block"
          >
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                  ))}
                </div>
                <p className="text-white text-sm font-semibold">4.9/5 from 1,200+ reviews</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <i className="ri-shield-check-fill text-accent-400 text-2xl"></i>
                  <div className="text-left">
                    <p className="text-white text-xs font-medium">Secure Payment</p>
                    <p className="text-white/70 text-xs">SSL Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Quick-Select Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                <Link to={service.link}>
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  <div className="relative h-full flex flex-col justify-between p-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-4">{service.description}</p>
                      <span className="inline-flex items-center text-white font-semibold group-hover:text-accent-400 transition-colors">
                        Learn More <i className="ri-arrow-right-line ml-2"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Booking Wizard */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Book Your Cleaning in 3 Easy Steps
            </h2>
            <p className="text-lg text-gray-600">
              Get your space sparkling clean in just a few clicks
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                      bookingStep >= step
                        ? 'bg-primary-400 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {bookingStep > step ? (
                      <i className="ri-check-line text-xl"></i>
                    ) : (
                      step
                    )}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all ${
                        bookingStep > step ? 'bg-primary-400' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {bookingStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-primary-700 mb-6">Select Service &amp; Size</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Choose Your Service
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Residential Cleaning', 'Commercial Cleaning', 'Deep Cleaning', 'Move-In/Out'].map((service) => (
                      <button
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          selectedService === service
                            ? 'border-primary-400 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">{service}</p>
                            <p className="text-sm text-gray-600">Starting at $89</p>
                          </div>
                          <i className={`ri-checkbox-circle-${selectedService === service ? 'fill' : 'line'} text-2xl ${
                            selectedService === service ? 'text-primary-400' : 'text-gray-300'
                          }`}></i>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Property Size
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Studio', '1-2 Bed', '3-4 Bed', '5+ Bed'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setPropertySize(size)}
                        className={`px-4 py-3 rounded-lg border-2 font-semibold transition-all whitespace-nowrap ${
                          propertySize === size
                            ? 'border-primary-400 bg-primary-400 text-white'
                            : 'border-gray-200 text-gray-700 hover:border-primary-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setBookingStep(2)}
                  disabled={!selectedService || !propertySize}
                  className="w-full py-4 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Continue to Date Selection <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            )}

            {bookingStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-primary-700 mb-6">Choose Date &amp; Time</h3>
                <div className="text-center py-12">
                  <i className="ri-calendar-check-line text-6xl text-primary-400 mb-4"></i>
                  <p className="text-gray-600 mb-6">Calendar integration coming soon</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setBookingStep(1)}
                      className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all whitespace-nowrap"
                    >
                      <i className="ri-arrow-left-line mr-2"></i> Back
                    </button>
                    <button
                      onClick={() => setBookingStep(3)}
                      className="flex-1 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all whitespace-nowrap"
                    >
                      Continue <i className="ri-arrow-right-line ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-primary-700 mb-6">Secure Payment</h3>
                <div className="text-center py-12">
                  <i className="ri-secure-payment-line text-6xl text-primary-400 mb-4"></i>
                  <p className="text-gray-600 mb-2">Ready to complete your booking?</p>
                  <p className="text-sm text-gray-500 mb-6">Secure payment processing with Stripe</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setBookingStep(2)}
                      className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all whitespace-nowrap"
                    >
                      <i className="ri-arrow-left-line mr-2"></i> Back
                    </button>
                    <Link
                      to="/pricing"
                      className="flex-1 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all text-center whitespace-nowrap"
                    >
                      Go to Full Booking <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Sparkle Empire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                THE SPARKLE DIFFERENCE
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-6">
                Cleaning Services You Can Trust, Results You Can See
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: 'ri-shield-check-line',
                    title: '100% Satisfaction Guarantee',
                    description: 'Not happy? We\'ll re-clean for free or provide a full refund. Your satisfaction is our priority.'
                  },
                  {
                    icon: 'ri-verified-badge-line',
                    title: 'Fully Bonded &amp; Insured',
                    description: 'Complete peace of mind with comprehensive insurance coverage and bonded professionals.'
                  },
                  {
                    icon: 'ri-leaf-line',
                    title: 'Eco-Friendly Products',
                    description: 'Safe for your family, pets, and the environment. We use only certified green cleaning products.'
                  },
                  {
                    icon: 'ri-user-star-line',
                    title: 'Background-Checked Staff',
                    description: 'Every team member undergoes thorough background checks and professional training.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0">
                      <i className={`${feature.icon} text-2xl text-primary-400`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20cleaning%20staff%20member%20in%20branded%20uniform%20smiling%20confidently%20holding%20eco%20friendly%20cleaning%20supplies%20modern%20bright%20background%20high%20quality%20portrait%20trustworthy%20appearance&width=500&height=600&seq=staff1&orientation=portrait"
                    alt="Professional Cleaner"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 z-0">
                  <img
                    src="https://readdy.ai/api/search-image?query=sparkling%20clean%20modern%20kitchen%20with%20pristine%20white%20countertops%20stainless%20steel%20appliances%20bright%20natural%20light%20immaculate%20surfaces%20spotless%20interior%20design&width=500&height=600&seq=kitchen1&orientation=portrait"
                    alt="Clean Kitchen"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-2xl p-6 z-20">
                  <p className="text-4xl font-bold text-primary-700">2,500+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-1 bg-gray-900 px-4 py-2 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-serif italic">
              "{testimonials[currentTestimonial].text}"
            </p>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].location}</p>
                <span className="inline-block mt-1 px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                  Verified Customer
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-primary-400 hover:text-primary-400 transition-all"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 flex items-center justify-center bg-primary-400 text-white rounded-full hover:bg-primary-500 transition-all"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Banner */}
      <section className="py-12 bg-primary-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: 'ri-lock-line', text: 'Secure SSL Payment' },
              { icon: 'ri-shield-check-line', text: 'Stripe Verified' },
              { icon: 'ri-shield-star-line', text: 'Insured &amp; Bonded' },
              { icon: 'ri-eye-off-line', text: 'Privacy Protected' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <i className={`${item.icon} text-4xl text-accent-400 mb-3`}></i>
                <p className="text-white text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=bright%20modern%20office%20space%20with%20floor%20to%20ceiling%20windows%20city%20skyline%20view%20pristine%20clean%20workspace%20contemporary%20furniture%20natural%20sunlight%20professional%20business%20environment%20spotless%20interior&width=1920&height=600&seq=cta1&orientation=landscape"
            alt="Clean Office"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book online in 60 seconds or call for a free consultation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary-700 rounded-lg text-lg font-bold hover:bg-accent-400 hover:text-white transition-all shadow-xl whitespace-nowrap"
            >
              Book Now
            </Link>
            <a
              href="tel:+14165551234"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg text-lg font-bold hover:bg-white hover:text-primary-700 transition-all whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i> (416) 555-1234
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Same-day service available in select areas
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;