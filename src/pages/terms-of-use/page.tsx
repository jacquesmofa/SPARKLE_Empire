import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const TermsOfUsePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20legal%20documents%20contract%20agreement%20modern%20office%20setting%20clean%20organized%20workspace%20bright%20natural%20lighting%20contemporary%20business%20environment%20ultra%20high%20definition%208k%20quality&width=1920&height=600&seq=terms1&orientation=landscape"
            alt="Terms of Use"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center w-full">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-lg text-white/90">
            Last Updated: January 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                Welcome to Sparkle Empire. These Terms of Use ("Terms") govern your access to and use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Sparkle Empire's website and services, you accept and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">2. Services Description</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sparkle Empire provides professional residential and commercial cleaning services across the Greater Toronto Area. Our services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Regular residential cleaning</li>
                <li>Deep cleaning services</li>
                <li>Commercial office cleaning</li>
                <li>Move-in/move-out cleaning</li>
                <li>Specialty cleaning services (windows, carpets, upholstery)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Service availability, pricing, and specific offerings may vary by location and are subject to change without notice.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">3. Booking and Payment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Booking:</strong> You may book our services through our website, phone, or email. All bookings are subject to availability and confirmation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Payment:</strong> Payment is due at the time of service or as otherwise agreed. We accept major credit cards and other payment methods as specified. All prices are in Canadian dollars and include applicable taxes unless otherwise stated.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Pricing:</strong> Prices are estimates based on the information you provide. Final pricing may vary based on actual conditions, property size, and service requirements. We will notify you of any significant price changes before proceeding with the service.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">4. Cancellation and Rescheduling</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Cancellation Policy:</strong> You may cancel or reschedule your appointment with at least 24 hours' notice without penalty. Cancellations made less than 24 hours before the scheduled service may be subject to a cancellation fee of up to 50% of the service cost.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Our Right to Cancel:</strong> We reserve the right to cancel or reschedule services due to unforeseen circumstances, including but not limited to severe weather, staff illness, or emergencies. We will make reasonable efforts to notify you as soon as possible and reschedule at your convenience.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">5. Client Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate information about your property and cleaning requirements</li>
                <li>Ensure safe access to the property and all areas to be cleaned</li>
                <li>Secure or remove valuable, fragile, or personal items before service</li>
                <li>Inform us of any pets, hazards, or special conditions at the property</li>
                <li>Provide adequate utilities (water, electricity) necessary for cleaning</li>
                <li>Treat our staff with respect and professionalism</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">6. Satisfaction Guarantee</h2>
              <p className="text-gray-600 leading-relaxed">
                We stand behind the quality of our work with a 100% satisfaction guarantee. If you are not completely satisfied with our service, please contact us within 24 hours of service completion. We will return to re-clean the areas of concern at no additional charge. If you remain unsatisfied after the re-clean, we will provide a refund for the affected portion of the service. This guarantee does not apply to issues resulting from client-provided equipment, products, or conditions beyond our control.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we carry comprehensive insurance and take every precaution to protect your property, our liability is limited as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We are not liable for damage to items that were not properly secured or disclosed</li>
                <li>We are not responsible for pre-existing damage or wear and tear</li>
                <li>Claims must be reported within 24 hours of service completion</li>
                <li>Our maximum liability is limited to the cost of the service provided or $1,000, whichever is less</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of Sparkle Empire and is protected by Canadian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">9. Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Our collection, use, and protection of your personal information are governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to our data practices as described in the Privacy Policy.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">10. Prohibited Uses</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to use our services or website for any unlawful purpose or in any way that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Violates any applicable laws or regulations</li>
                <li>Infringes on the rights of others</li>
                <li>Harasses, abuses, or harms our staff or other users</li>
                <li>Transmits viruses, malware, or other harmful code</li>
                <li>Attempts to gain unauthorized access to our systems</li>
                <li>Interferes with the proper functioning of our services</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">11. Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising from these Terms or our services will be governed by the laws of the Province of Ontario and the federal laws of Canada. You agree to submit to the exclusive jurisdiction of the courts located in Toronto, Ontario for the resolution of any disputes. We encourage you to contact us first to resolve any issues informally before pursuing legal action.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">12. Severability</h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Sparkle Empire</strong></p>
                <p className="text-gray-600">123 Cleaning Street</p>
                <p className="text-gray-600">Toronto, ON M5H 2N2</p>
                <p className="text-gray-600 mt-3">
                  <strong>Email:</strong> <a href="mailto:legal@sparkleempire.ca" className="text-primary-400 hover:text-primary-500">legal@sparkleempire.ca</a>
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> <a href="tel:+14165551234" className="text-primary-400 hover:text-primary-500">(416) 555-1234</a>
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 mt-12">
              <p className="text-gray-700 text-center">
                By using Sparkle Empire's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all whitespace-nowrap"
            >
              <i className="ri-arrow-left-line mr-2"></i> Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUsePage;
