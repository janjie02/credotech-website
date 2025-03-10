import React from 'react';
import { Link } from 'react-scroll';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Services</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto my-5"></div>
          <p className="text-gray-600 text-lg">
            We offer specialized solutions designed to optimize your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bodego Service */}
          <div 
            className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden relative"
            data-aos="fade-up" 
            data-aos-duration="800" 
          >
            <div className="h-3 bg-primary w-full absolute top-0 left-0"></div>
            <div className="p-10">
              <div className="flex justify-center mb-8">
                <img 
                  src={require('../assets/images/bodego.png')} 
                  alt="Bodego Logo" 
                  className="h-32 w-auto" 
                />
              </div>
              <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">Bodego</h3>
              <p className="text-gray-600 mb-12 text-center text-lg leading-relaxed">
                Bodego simplifies stock tracking with real-time updates, low-stock alerts, and seamless reporting, helping businesses stay organized and efficient.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://bodego.credotech.ph/home" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-4 px-10 rounded-full transition-colors duration-200 text-center text-lg"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Custom Software Development Service */}
          <div 
            className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden relative"
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="100"
          >
            <div className="h-3 bg-primary w-full absolute top-0 left-0"></div>
            <div className="p-10">
              <div className="flex justify-center mb-8">
                <img 
                  src={require('../assets/images/Credotech.png')} 
                  alt="Credotech Logo" 
                  className="h-32 w-auto" 
                />
              </div>
              <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">Custom Software Development</h3>
              <p className="text-gray-600 mb-12 text-center text-lg leading-relaxed">
                Credo Tech IT Solutions develops custom software tailored to your business needs. Our solutions are scalable, efficient, and built for long-term growth.
              </p>
              <div className="flex justify-center">
                <Link 
                  to="contact" 
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-4 px-10 rounded-full transition-colors duration-200 text-center text-lg"
                  spy={true} 
                  smooth={true} 
                  duration={500}
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 