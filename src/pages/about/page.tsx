import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const AboutPage = () => {
  const timeline = [
    {
      year: '2015',
      title: 'Founded in Toronto',
      description: 'Started with a vision to revolutionize the cleaning industry in the GTA. Our founder, Maria Chen, began with just two team members and a commitment to excellence.'
    },
    {
      year: '2017',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone, serving 100 satisfied residential and commercial clients. Expanded our team to 15 professional cleaners.'
    },
    {
      year: '2019',
      title: 'GTA Expansion',
      description: 'Opened satellite offices in Mississauga and North York. Introduced eco-friendly cleaning products across all services. Team grew to 45 members.'
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Awarded "Best Cleaning Service in Toronto" by the GTA Business Excellence Awards. Achieved 4.9/5 rating with over 1,000 reviews.'
    },
    {
      year: '2025',
      title: 'Leading the Industry',
      description: 'Now serving 2,500+ clients with a team of 80+ trained professionals. Pioneering sustainable cleaning practices and setting new standards for excellence.'
    }
  ];

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Trust',
      description: 'We earn your trust through transparency, reliability, and consistent excellence. Every team member is thoroughly vetted, background-checked, and trained to uphold the highest standards of integrity.'
    },
    {
      icon: 'ri-star-line',
      title: 'Excellence',
      description: 'We never settle for good enough. Our commitment to excellence drives us to continuously improve our services, training, and customer experience. Your satisfaction is our measure of success.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sustainability',
      description: 'We believe in protecting the environment while protecting your health. Our eco-friendly products and sustainable practices ensure a clean home and a cleaner planet for future generations.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Community',
      description: 'We\'re more than a business—we\'re part of your community. We support local charities, employ locally, and give back to the neighborhoods we serve through volunteer work and donations.'
    }
  ];

  const team = [
    {
      name: 'Maria Chen',
      role: 'Founder & CEO',
      image: 'https://readdy.ai/api/search-image?query=professional%20Asian%20businesswoman%20CEO%20in%20modern%20office%20confident%20smile%20executive%20portrait%20corporate%20headshot&width=300&height=300&seq=team1&orientation=squarish',
      bio: '15+ years in hospitality management'
    },
    {
      name: 'David Thompson',
      role: 'Operations Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20businessman%20operations%20director%20confident%20smile%20corporate%20headshot%20modern%20office%20background&width=300&height=300&seq=team2&orientation=squarish',
      bio: 'Former facility management expert'
    },
    {
      name: 'Sarah Martinez',
      role: 'Quality Assurance Manager',
      image: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20manager%20confident%20smile%20corporate%20headshot%20modern%20office%20setting&width=300&height=300&seq=team3&orientation=squarish',
      bio: 'Certified in quality management systems'
    },
    {
      name: 'James Wilson',
      role: 'Training Coordinator',
      image: 'https://readdy.ai/api/search-image?query=professional%20businessman%20training%20coordinator%20friendly%20smile%20corporate%20headshot%20office%20background&width=300&height=300&seq=team4&orientation=squarish',
      bio: 'Expert in professional development'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Lead',
      image: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20customer%20service%20lead%20warm%20smile%20corporate%20headshot%20modern%20office&width=300&height=300&seq=team5&orientation=squarish',
      bio: '10+ years in customer relations'
    },
    {
      name: 'Michael Park',
      role: 'Sustainability Officer',
      image: 'https://readdy.ai/api/search-image?query=professional%20businessman%20sustainability%20officer%20confident%20smile%20corporate%20headshot%20office%20setting&width=300&height=300&seq=team6&orientation=squarish',
      bio: 'Environmental science background'
    },
    {
      name: 'Lisa Anderson',
      role: 'Commercial Services Manager',
      image: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20manager%20confident%20smile%20corporate%20headshot%20modern%20professional%20setting&width=300&height=300&seq=team7&orientation=squarish',
      bio: 'Specialized in commercial cleaning'
    },
    {
      name: 'Robert Kim',
      role: 'Technology Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20businessman%20technology%20director%20confident%20smile%20corporate%20headshot%20modern%20tech%20office&width=300&height=300&seq=team8&orientation=squarish',
      bio: 'Innovating cleaning operations'
    }
  ];

  const certifications = [
    'ISSA Certified',
    'Green Seal Certified',
    'CIMS Certified',
    'OSHA Compliant',
    'BBB Accredited',
    'Eco-Logo Certified'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Meet the Team Behind the Sparkle
              </h1>
              <div className="text-8xl font-display font-bold text-white/20 mb-4">
                2015
              </div>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                For over a decade, we've been transforming homes and businesses across the GTA with our commitment to excellence, sustainability, and customer satisfaction.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-accent-400 hover:text-white transition-all shadow-xl whitespace-nowrap"
              >
                Join Our Team
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20cleaning%20team%20members%20in%20branded%20uniforms%20smiling%20together%20modern%20office%20background%20diverse%20group%20happy%20employees&width=300&height=400&seq=teamcol1&orientation=portrait"
                    alt="Team"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20cleaner%20working%20in%20modern%20home%20with%20eco%20friendly%20products%20bright%20clean%20environment%20quality%20service&width=300&height=500&seq=teamcol2&orientation=portrait"
                    alt="Service"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=happy%20satisfied%20customer%20in%20pristine%20clean%20home%20smiling%20bright%20natural%20light%20modern%20interior%20spotless%20environment&width=300&height=500&seq=teamcol3&orientation=portrait"
                    alt="Happy Client"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=cleaning%20team%20training%20session%20professional%20development%20modern%20facility%20learning%20environment%20quality%20standards&width=300&height=400&seq=teamcol4&orientation=portrait"
                    alt="Training"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming the GTA's most trusted cleaning service
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                    <div className="inline-block px-4 py-2 bg-primary-400 text-white font-bold text-2xl rounded-lg mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-primary-400 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${value.icon} text-3xl text-primary-400`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <div className="w-full h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-4">
              Certified &amp; Trusted
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications and partnerships demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center"
              >
                <i className="ri-award-line text-4xl text-primary-400 mb-3"></i>
                <p className="font-semibold text-gray-900 text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-primary-700 mb-4">
                  Industry Recognition
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <i className="ri-trophy-line text-2xl text-yellow-500 flex-shrink-0"></i>
                    <div>
                      <p className="font-semibold text-gray-900">Best Cleaning Service 2021</p>
                      <p className="text-sm text-gray-600">GTA Business Excellence Awards</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-trophy-line text-2xl text-yellow-500 flex-shrink-0"></i>
                    <div>
                      <p className="font-semibold text-gray-900">Top Rated Service Provider</p>
                      <p className="text-sm text-gray-600">HomeStars 2020-2025</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-trophy-line text-2xl text-yellow-500 flex-shrink-0"></i>
                    <div>
                      <p className="font-semibold text-gray-900">Green Business Award</p>
                      <p className="text-sm text-gray-600">Toronto Environmental Alliance</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-trophy-line text-2xl text-yellow-500 flex-shrink-0"></i>
                    <div>
                      <p className="font-semibold text-gray-900">Customer Choice Award</p>
                      <p className="text-sm text-gray-600">Canadian Business Awards 2023</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=business%20awards%20ceremony%20trophy%20recognition%20professional%20achievement%20celebration%20corporate%20event%20elegant%20setting&width=600&height=400&seq=awards1&orientation=landscape"
                  alt="Awards"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-700 mb-6">
                Giving Back to Our Community
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in making a positive impact beyond cleaning homes and businesses. Our community involvement programs support local charities, environmental initiatives, and those in need.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-hand-heart-line text-2xl text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Free Cleaning for Seniors</h4>
                    <p className="text-gray-600">Monthly free cleaning services for seniors in need across the GTA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-seedling-line text-2xl text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Environmental Partnerships</h4>
                    <p className="text-gray-600">Collaborating with local environmental organizations for a greener Toronto</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-home-heart-line text-2xl text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Shelter Support Program</h4>
                    <p className="text-gray-600">Providing cleaning services to local homeless shelters and community centers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-graduation-cap-line text-2xl text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Youth Employment Program</h4>
                    <p className="text-gray-600">Training and employment opportunities for youth in underserved communities</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-primary-400 text-white rounded-lg font-bold hover:bg-primary-500 transition-all shadow-lg whitespace-nowrap"
              >
                Learn More About Our Initiatives
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=volunteers%20helping%20community%20charity%20work%20cleaning%20service%20team%20giving%20back%20happy%20people%20working%20together&width=300&height=400&seq=comm1&orientation=portrait"
                    alt="Community Service"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=environmental%20cleanup%20volunteers%20planting%20trees%20green%20initiative%20community%20involvement%20outdoor%20activity&width=300&height=500&seq=comm2&orientation=portrait"
                    alt="Environmental Work"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=youth%20training%20program%20learning%20skills%20professional%20development%20mentorship%20young%20people%20education&width=300&height=500&seq=comm3&orientation=portrait"
                    alt="Youth Program"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=community%20center%20volunteers%20helping%20seniors%20charity%20work%20compassionate%20service%20caring%20people&width=300&height=400&seq=comm4&orientation=portrait"
                    alt="Senior Support"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Join the Sparkle Empire Family
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We're always looking for passionate, dedicated individuals to join our growing team
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <i className="ri-team-line text-4xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Great Culture</h3>
                <p className="text-sm text-white/80">Supportive, inclusive work environment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <i className="ri-money-dollar-circle-line text-4xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Competitive Pay</h3>
                <p className="text-sm text-white/80">Above industry standard wages</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <i className="ri-graduation-cap-line text-4xl mb-3"></i>
                <h3 className="font-bold text-lg mb-2">Training &amp; Growth</h3>
                <p className="text-sm text-white/80">Continuous learning opportunities</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-accent-400 hover:text-white transition-all shadow-xl whitespace-nowrap"
              >
                View Open Positions
              </Link>
              <a
                href="mailto:careers@sparkleempire.ca"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-bold hover:bg-white hover:text-primary-700 transition-all whitespace-nowrap"
              >
                Send Your Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;