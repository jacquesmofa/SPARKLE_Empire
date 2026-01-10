import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const PricingPage = () => {
  const [serviceType, setServiceType] = useState<'residential' | 'commercial'>('residential');
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    propertySize: '',
    frequency: '',
    date: '',
    time: '',
    addons: [] as string[],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    specialInstructions: ''
  });

  const residentialPlans = [
    {
      name: 'Essential Clean',
      price: 89,
      duration: '2-3 hours',
      ideal: 'Regular maintenance',
      features: [
        'Dusting all surfaces',
        'Vacuum all floors',
        'Mop hard floors',
        'Kitchen counter cleaning',
        'Bathroom cleaning',
        'Trash removal',
        'Basic tidying'
      ]
    },
    {
      name: 'Deep Clean',
      price: 149,
      duration: '4-5 hours',
      ideal: 'Thorough cleaning',
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
      duration: '6-8 hours',
      ideal: 'Complete transformation',
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

  const commercialPlans = [
    {
      name: 'Basic Office',
      price: 299,
      duration: 'Per month',
      ideal: 'Small offices (up to 2,000 sq ft)',
      features: [
        'Weekly cleaning service',
        'Trash and recycling',
        'Restroom sanitization',
        'Kitchen/break room',
        'Vacuum and mop floors',
        'Dust surfaces',
        'Window sills'
      ]
    },
    {
      name: 'Professional Office',
      price: 599,
      duration: 'Per month',
      ideal: 'Medium offices (2,000-5,000 sq ft)',
      popular: true,
      features: [
        'Bi-weekly cleaning',
        'All Basic features',
        'Conference room prep',
        'Glass door cleaning',
        'High-touch disinfection',
        'Supply restocking',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'Per month',
      ideal: 'Large facilities (5,000+ sq ft)',
      features: [
        'Daily cleaning available',
        'All Professional features',
        'Carpet deep cleaning',
        'Floor waxing/polishing',
        'Window washing',
        '24/7 service options',
        'Custom cleaning protocols',
        'Quality assurance program'
      ]
    }
  ];

  const addons = [
    { id: 'windows', name: 'Window Cleaning', price: 49 },
    { id: 'carpet', name: 'Carpet Deep Clean', price: 79 },
    { id: 'appliances', name: 'Appliance Detailing', price: 59 },
    { id: 'laundry', name: 'Laundry Service', price: 39 },
    { id: 'upholstery', name: 'Upholstery Cleaning', price: 69 },
    { id: 'garage', name: 'Garage Cleaning', price: 89 }
  ];

  const handleAddonToggle = (addonId: string) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter(id => id !== addonId)
        : [...prev.addons, addonId]
    }));
  };

  const calculateTotal = () => {
    let basePrice = 0;
    const plans = serviceType === 'residential' ? residentialPlans : commercialPlans;
    const selectedPlan = plans.find(p => p.name === formData.service);
    if (selectedPlan && typeof selectedPlan.price === 'number') {
      basePrice = selectedPlan.price;
    }

    const addonTotal = formData.addons.reduce((sum, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return sum + (addon?.price || 0);
    }, 0);

    return basePrice + addonTotal;
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
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-700 mb-4">
              Book Your Cleaning Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Transparent pricing, easy booking, and exceptional service
            </p>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                      bookingStep >= step
                        ? 'bg-primary-400 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {bookingStep > step ? <i className="ri-check-line"></i> : step}
                  </div>
                  {step < 6 && (
                    <div
                      className={`w-8 h-1 transition-all ${
                        bookingStep > step ? 'bg-primary-400' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Interface */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {/* Step 1: Service Type */}
                {bookingStep === 1 && (
                  <div>
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">Select Service Type</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <button
                        onClick={() => {
                          setServiceType('residential');
                          setFormData({ ...formData, service: '' });
                        }}
                        className={`p-6 rounded-xl border-2 text-left transition-all ${
                          serviceType === 'residential'
                            ? 'border-primary-400 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-200'
                        }`}
                      >
                        <i className="ri-home-4-line text-4xl text-primary-400 mb-3"></i>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Residential</h3>
                        <p className="text-gray-600">Home cleaning services</p>
                      </button>

                      <button
                        onClick={() => {
                          setServiceType('commercial');
                          setFormData({ ...formData, service: '' });
                        }}
                        className={`p-6 rounded-xl border-2 text-left transition-all ${
                          serviceType === 'commercial'
                            ? 'border-primary-400 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-200'
                        }`}
                      >
                        <i className="ri-building-line text-4xl text-primary-400 mb-3"></i>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial</h3>
                        <p className="text-gray-600">Business cleaning services</p>
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Plan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {(serviceType === 'residential' ? residentialPlans : commercialPlans).map((plan) => (
                        <button
                          key={plan.name}
                          onClick={() => setFormData({ ...formData, service: plan.name })}
                          className={`p-6 rounded-xl border-2 text-left transition-all relative ${
                            formData.service === plan.name
                              ? 'border-primary-400 bg-primary-50'
                              : 'border-gray-200 hover:border-primary-200'
                          }`}
                        >
                          {plan.popular && (
                            <span className="absolute top-2 right-2 px-2 py-1 bg-primary-400 text-white text-xs font-semibold rounded">
                              Popular
                            </span>
                          )}
                          <h4 className="font-bold text-lg text-gray-900 mb-2">{plan.name}</h4>
                          <p className="text-3xl font-bold text-primary-700 mb-1">
                            {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                          </p>
                          <p className="text-sm text-gray-600 mb-3">{plan.duration}</p>
                          <p className="text-xs text-gray-500">{plan.ideal}</p>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setBookingStep(2)}
                      disabled={!formData.service}
                      className="w-full mt-8 py-4 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      Continue to Property Details <i className="ri-arrow-right-line ml-2"></i>
                    </button>
                  </div>
                )}

                {/* Step 2: Property Size */}
                {bookingStep === 2 && (
                  <div>
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">Property Details</h2>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Property Size
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {serviceType === 'residential'
                          ? ['Studio', '1-2 Bed', '3-4 Bed', '5+ Bed']
                          : ['Small (&lt;2K sq ft)', 'Medium (2-5K)', 'Large (5-10K)', 'Enterprise (10K+)']
                        .map((size) => (
                          <button
                            key={size}
                            onClick={() => setFormData({ ...formData, propertySize: size })}
                            className={`px-4 py-3 rounded-lg border-2 font-semibold transition-all whitespace-nowrap ${
                              formData.propertySize === size
                                ? 'border-primary-400 bg-primary-400 text-white'
                                : 'border-gray-200 text-gray-700 hover:border-primary-200'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Cleaning Frequency
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['One-Time', 'Weekly', 'Bi-Weekly', 'Monthly'].map((freq) => (
                          <button
                            key={freq}
                            onClick={() => setFormData({ ...formData, frequency: freq })}
                            className={`px-4 py-3 rounded-lg border-2 font-semibold transition-all whitespace-nowrap ${
                              formData.frequency === freq
                                ? 'border-primary-400 bg-primary-400 text-white'
                                : 'border-gray-200 text-gray-700 hover:border-primary-200'
                            }`}
                          >
                            {freq}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => setBookingStep(1)}
                        className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all whitespace-nowrap"
                      >
                        <i className="ri-arrow-left-line mr-2"></i> Back
                      </button>
                      <button
                        onClick={() => setBookingStep(3)}
                        disabled={!formData.propertySize || !formData.frequency}
                        className="flex-1 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        Continue <i className="ri-arrow-right-line ml-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Date & Time */}
                {bookingStep === 3 && (
                  <div>
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">Select Date &amp; Time</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none"
                        >
                          <option value="">Select time</option>
                          <option value="8:00 AM">8:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="6:00 PM">6:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <i className="ri-information-line text-blue-600 text-xl flex-shrink-0 mt-0.5"></i>
                        <div>
                          <p className="text-sm text-blue-900 font-medium mb-1">Same-Day Service Available</p>
                          <p className="text-sm text-blue-700">
                            Book before 12 PM for same-day service in select areas. Additional fees may apply.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => setBookingStep(2)}
                        className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all whitespace-nowrap"
                      >
                        <i className="ri-arrow-left-line mr-2"></i> Back
                      </button>
                      <button
                        onClick={() => setBookingStep(4)}
                        disabled={!formData.date || !formData.time}
                        className="flex-1 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        Continue <i className="ri-arrow-right-line ml-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Add-ons */}
                {bookingStep === 4 && (
                  <div>
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">Add Extra Services</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {addons.map((addon) => (
                        <button
                          key={addon.id}
                          onClick={() => handleAddonToggle(addon.id)}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            formData.addons.includes(addon.id)
                              ? 'border-primary-400 bg-primary-50'
                              : 'border-gray-200 hover:border-primary-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{addon.name}</h4>
                              <p className="text-lg font-bold text-primary-700">+${addon.price}</p>
                            </div>
                            <i className={`text-2xl ${
                              formData.addons.includes(addon.id)
                                ? 'ri-checkbox-circle-fill text-primary-400'
                                : 'ri-checkbox-circle-line text-gray-300'
                            }`}></i>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => setBookingStep(3)}
                        className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all whitespace-nowrap"
                      >
                        <i className="ri-arrow-left-line mr-2"></i> Back
                      </button>
                      <button
                        onClick={() => setBookingStep(5)}
                        className="flex-1 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all whitespace-nowrap"
                      >
                        Continue <i className="ri-arrow-right-line ml-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 5: Contact Information */}
                {bookingStep === 5 && (
                  <div>
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">Your Information</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none"
                          placeholder="john.doe@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none"
                          placeholder="(416) 555-1234"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Service Address *
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none"
                          placeholder="123 Main St, Toronto, ON M5H 2N2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Special Instructions (Optional)
                        </label>
                        <textarea
                          value={formData.specialInstructions}
                          onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-400 focus:outline-none resize-none"
                          placeholder="Any special requests or areas that need extra attention..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={() => setBookingStep(4)}
                        className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all whitespace-nowrap"
                      >
                        <i className="ri-arrow-left-line mr-2"></i> Back
                      </button>
                      <button
                        onClick={() => setBookingStep(6)}
                        disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address}
                        className="flex-1 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        Continue to Payment <i className="ri-arrow-right-line ml-2"></i>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 6: Payment */}
                {bookingStep === 6 && (
                  <div>
                    <h2 className="text-3xl font-bold text-primary-700 mb-6">Secure Payment</h2>
                    
                    <div className="text-center py-12">
                      <i className="ri-secure-payment-line text-6xl text-primary-400 mb-6"></i>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Complete Your Booking
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Secure payment processing powered by Stripe. Your payment information is encrypted and protected.
                      </p>

                      <div className="flex items-center justify-center space-x-4 mb-8">
                        <i className="ri-visa-line text-4xl text-gray-400"></i>
                        <i className="ri-mastercard-line text-4xl text-gray-400"></i>
                        <i className="ri-bank-card-line text-4xl text-gray-400"></i>
                      </div>

                      <div className="bg-primary-50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                        <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                        <p className="text-4xl font-bold text-primary-700">${calculateTotal()}</p>
                      </div>

                      <div className="space-y-3 max-w-md mx-auto">
                        <button
                          onClick={() => alert('Payment integration coming soon! This will connect to Stripe for secure payment processing.')}
                          className="w-full py-4 bg-primary-400 text-white rounded-lg font-bold hover:bg-primary-500 transition-all shadow-lg whitespace-nowrap"
                        >
                          <i className="ri-lock-line mr-2"></i> Proceed to Secure Payment
                        </button>
                        <button
                          onClick={() => setBookingStep(5)}
                          className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all whitespace-nowrap"
                        >
                          <i className="ri-arrow-left-line mr-2"></i> Back to Contact Info
                        </button>
                      </div>

                      <p className="text-xs text-gray-500 mt-6">
                        By proceeding, you agree to our Terms of Service and Privacy Policy
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Service Type</p>
                      <p className="font-semibold text-gray-900 capitalize">{serviceType || '-'}</p>
                    </div>
                  </div>

                  {formData.service && (
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Selected Plan</p>
                        <p className="font-semibold text-gray-900">{formData.service}</p>
                      </div>
                    </div>
                  )}

                  {formData.propertySize && (
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Property Size</p>
                        <p className="font-semibold text-gray-900">{formData.propertySize}</p>
                      </div>
                    </div>
                  )}

                  {formData.frequency && (
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Frequency</p>
                        <p className="font-semibold text-gray-900">{formData.frequency}</p>
                      </div>
                    </div>
                  )}

                  {formData.date && (
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Date &amp; Time</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(formData.date).toLocaleDateString()} at {formData.time}
                        </p>
                      </div>
                    </div>
                  )}

                  {formData.addons.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Add-ons</p>
                      {formData.addons.map(addonId => {
                        const addon = addons.find(a => a.id === addonId);
                        return addon ? (
                          <div key={addonId} className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-900">{addon.name}</span>
                            <span className="font-semibold text-gray-900">+${addon.price}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-300 pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-primary-700">
                      ${calculateTotal()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {formData.frequency === 'One-Time' ? 'One-time payment' : `Per ${formData.frequency?.toLowerCase()} visit`}
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="ri-shield-check-line text-primary-400"></i>
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="ri-lock-line text-primary-400"></i>
                    <span>Secure SSL Payment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <i className="ri-calendar-line text-primary-400"></i>
                    <span>Easy Rescheduling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-3">
              <i className="ri-secure-payment-line text-3xl text-primary-400"></i>
              <div>
                <p className="font-semibold text-gray-900">Secure Payment</p>
                <p className="text-sm text-gray-600">SSL Encrypted</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-shield-check-line text-3xl text-primary-400"></i>
              <div>
                <p className="font-semibold text-gray-900">Insured &amp; Bonded</p>
                <p className="text-sm text-gray-600">Full Coverage</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-star-fill text-3xl text-yellow-400"></i>
              <div>
                <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                <p className="text-sm text-gray-600">1,200+ Reviews</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-customer-service-line text-3xl text-primary-400"></i>
              <div>
                <p className="font-semibold text-gray-900">24/7 Support</p>
                <p className="text-sm text-gray-600">Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">
            Need Help with Your Booking?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to assist you with any questions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+14165551234"
              className="flex items-center justify-center space-x-3 p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-all"
            >
              <i className="ri-phone-line text-3xl text-primary-400"></i>
              <div className="text-left">
                <p className="text-sm text-gray-600">Call Us</p>
                <p className="text-xl font-bold text-primary-700">(416) 555-1234</p>
              </div>
            </a>

            <Link
              to="/contact"
              className="flex items-center justify-center space-x-3 p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-all"
            >
              <i className="ri-mail-line text-3xl text-primary-400"></i>
              <div className="text-left">
                <p className="text-sm text-gray-600">Email Us</p>
                <p className="text-xl font-bold text-primary-700">Get in Touch</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;