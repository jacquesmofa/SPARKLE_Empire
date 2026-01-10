import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20modern%20office%20with%20documents%20privacy%20security%20concept%20clean%20organized%20workspace%20bright%20natural%20lighting%20contemporary%20business%20environment%20ultra%20high%20definition%208k%20quality&width=1920&height=600&seq=privacy1&orientation=landscape"
            alt="Privacy Policy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center w-full">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Privacy Policy
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
                At Sparkle Empire, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personal identification information (name, email address, phone number, mailing address)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Service preferences and booking details</li>
                <li>Communication preferences</li>
                <li>Feedback and correspondence</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, maintain, and improve our cleaning services</li>
                <li>Process your bookings and payments</li>
                <li>Send you service confirmations, updates, and administrative messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include SSL encryption, secure payment processing through trusted providers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies help us improve your experience, analyze site traffic, and deliver personalized content. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our website.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary-700 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Sparkle Empire</strong></p>
                <p className="text-gray-600">123 Cleaning Street</p>
                <p className="text-gray-600">Toronto, ON M5H 2N2</p>
                <p className="text-gray-600 mt-3">
                  <strong>Email:</strong> <a href="mailto:privacy@sparkleempire.ca" className="text-primary-400 hover:text-primary-500">privacy@sparkleempire.ca</a>
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> <a href="tel:+14165551234" className="text-primary-400 hover:text-primary-500">(416) 555-1234</a>
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 mt-12">
              <p className="text-gray-700 text-center">
                By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
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

export default PrivacyPolicyPage;
