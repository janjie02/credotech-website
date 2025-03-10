import React from 'react';
import { Link } from 'react-scroll';

const TrustedPartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="w-full lg:w-2/3 text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-4xl font-bold mb-6">Trusted Partners</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              We are proud to collaborate with these amazing organizations that share our vision and values. Their support and expertise help us deliver quality and innovation in everything we do. Explore our trusted partners below!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Partner logos have been removed as requested */}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h4 className="text-2xl font-bold mb-6">INTERESTED?</h4>
          <Link 
            to="contact" 
            className="btn btn-primary"
            spy={true} 
            smooth={true} 
            duration={500}
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection; 