import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faServer, faCloud, faCode, faDatabase, faShield, faCalendar } from '@fortawesome/free-solid-svg-icons';
import HeroImage from './HeroImage';

const HeroSection: React.FC = () => {
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
    <section 
      id="home" 
      className="hero-section relative overflow-hidden pt-28 pb-32"
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape shape-1 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape shape-2 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="floating-shape shape-3 animate-float" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Tech Icons */}
        <div className="absolute top-1/4 left-[15%] text-white/10 text-3xl animate-pulse-slow">
          <FontAwesomeIcon icon={faServer} />
        </div>
        <div className="absolute top-2/3 right-[10%] text-white/10 text-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}>
          <FontAwesomeIcon icon={faCloud} />
        </div>
        <div className="absolute bottom-1/4 left-[20%] text-white/10 text-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="absolute top-1/3 right-[25%] text-white/10 text-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <div className="absolute bottom-1/3 left-[40%] text-white/10 text-3xl animate-pulse-slow" style={{ animationDelay: '2.5s' }}>
          <FontAwesomeIcon icon={faShield} />
        </div>
      </div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-20 relative z-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 text-left px-0" data-aos="fade-right" data-aos-duration="1000">
            <div className="lg:ml-0">
              <h1 className="font-extrabold mb-3 leading-tight text-white">
                BUILDING
                <span className="block bg-gradient-to-r from-white to-blue-50 bg-clip-text text-transparent animate-shimmer">
                  SCALABLE & EFFICIENT
                </span>
                <span className="block">
                  IT SOLUTIONS
                </span>
              </h1>
              
              <p className="text-white/95 mb-8 leading-relaxed max-w-md" data-aos="fade-up" data-aos-delay="200">
                Empowering businesses with cutting-edge technology solutions. We transform ideas into powerful digital experiences.
              </p>
              
              <div className="flex flex-wrap gap-5 mb-4" data-aos="fade-up" data-aos-delay="400">
                <button
                  onClick={openCalendly}
                  className="bg-white text-primary font-medium py-3 px-8 rounded-full flex items-center gap-2 transition-all hover:shadow-md"
                >
                  Book Consultation
                  <FontAwesomeIcon icon={faCalendar} />
                </button>
                
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="bg-white text-primary font-medium py-3 px-8 rounded-full flex items-center gap-2 transition-all hover:shadow-md"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-sm" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left" data-aos-duration="1000">
            <div 
              className="relative hero-image-container cursor-pointer bg-transparent" 
              role="button"
              tabIndex={0}
              aria-label="Interactive tech visualization"
              onClick={() => {}} 
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                }
              }}
            >
              {/* Custom Hero Image with interactive effects */}
              <HeroImage />
              
              {/* Glow effect behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-full blur-3xl opacity-30 -z-10"></div>
              
              {/* Glowing dots */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f8fafc" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
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

export default HeroSection; 