import React from 'react';
import { Link } from 'react-scroll';

const TrustedPartnersSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-pattern-dots opacity-5"></div>
      <div className="absolute -left-24 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-24 bottom-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14" data-aos="fade-up" data-aos-duration="800">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">Partnerships</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Trusted Partners</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are proud to collaborate with these amazing organizations that share our vision and values. Their support and expertise help us deliver quality and innovation in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Partner logos have been removed as requested */}
        </div>

        <div className="mt-16 text-center relative" data-aos="fade-up" data-aos-duration="800">
          <div className="relative inline-block">
            <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full blur-xl -z-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Interested in Partnering With Us?</h4>
              <p className="text-gray-600 mb-8">Reach out to explore collaboration opportunities that can drive growth for both our organizations.</p>
              <Link 
                to="contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                spy={true} 
                smooth={true} 
                duration={500}
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection; 