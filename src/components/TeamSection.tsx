import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20" data-aos="fade-up" data-aos-duration="800">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Our Team</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team is driven by innovation and a passion for solving IT challenges. With expertise in software development, network solutions, and tech support, we are committed to delivering reliable and efficient technology services tailored to your needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative" data-aos="zoom-in" data-aos-duration="1000">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative">
              <img 
                src={require('../assets/images/TeamPic.png')} 
                alt="CredoTech Team" 
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition duration-500" 
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              className="inline-flex items-center px-8 py-3 bg-white text-primary border-2 border-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 group"
              onClick={() => {/* Future implementation */}}
            >
              Learn More
              <svg 
                className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="100">
          <p className="text-gray-600 mb-6 text-lg font-medium">Under Incubation Program of</p>
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-full blur-lg"></div>
            <img 
              src={require('../assets/images/TTBDO.png')} 
              alt="TTBDO Logo" 
              className="h-32 w-auto mx-auto relative hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 