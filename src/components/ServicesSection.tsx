import React, { useState } from 'react';
import { Link } from 'react-scroll';

const ServicesSection: React.FC = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const openCalendly = () => {
    setShowCalendly(true);
    // Add Calendly inline widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots opacity-[0.03]"></div>
      <div className="absolute -left-48 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-48 top-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Floating decoration elements */}
      <div className="absolute top-20 left-[10%] w-6 h-6 bg-primary/20 rounded-full"></div>
      <div className="absolute bottom-20 right-[15%] w-8 h-8 bg-primary/10 rounded-full"></div>
      <div className="absolute top-1/3 right-[25%] w-4 h-4 bg-primary/30 rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20" data-aos="fade-up" data-aos-duration="800">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
          </div>
          <p className="text-gray-600">
            We offer specialized solutions designed to optimize your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Bodego Service */}
          <div 
            className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            data-aos="fade-up" 
            data-aos-duration="800" 
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></div>
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/5 rounded-full"></div>
            
            <div className="flex flex-col items-center relative z-10">
              <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300 p-4 rounded-full bg-gray-50">
                <img 
                  src={require('../assets/images/bodego.png')} 
                  alt="Bodego Logo" 
                  className="h-20 w-auto" 
                />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Bodego</h3>
              
              <div className="w-8 h-0.5 bg-primary mb-5 relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
              </div>
              
              <p className="text-gray-600 mb-8 text-center">
                Bodego simplifies stock tracking with real-time updates, low-stock alerts, and seamless reporting, helping businesses stay organized and efficient.
              </p>
              
              <a 
                href="https://bodego.credotech.ph/home" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium rounded-md group-hover:-translate-y-1 hover:shadow-md"
              >
                <span>Visit Website</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Custom Software Development Service */}
          <div 
            className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="100"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></div>
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/5 rounded-full"></div>
            
            <div className="flex flex-col items-center relative z-10">
              <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300 p-4 rounded-full bg-gray-50">
                <img 
                  src={require('../assets/images/Credotech.png')} 
                  alt="Credotech Logo" 
                  className="h-20 w-auto" 
                />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Custom Software</h3>
              
              <div className="w-8 h-0.5 bg-primary mb-5 relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
              </div>
              
              <p className="text-gray-600 mb-8 text-center">
                We develop custom software tailored to your business needs. Our solutions are scalable, efficient, and built for long-term growth.
              </p>
              
              <button 
                onClick={openCalendly}
                className="inline-flex items-center px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium rounded-md group-hover:-translate-y-1 hover:shadow-md"
              >
                <span>Book a Consultation</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] relative">
            <button 
              onClick={closeCalendly}
              className="absolute top-4 right-4 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              ✕
            </button>
            <div 
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/janjie02123"
              style={{ minWidth: '320px' }}
            ></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection; 