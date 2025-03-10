import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="w-full lg:w-2/3 text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Our team is driven by innovation and a passion for solving IT challenges. With expertise in software development, network solutions, and tech support, we are committed to delivering reliable and efficient technology services tailored to your needs.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="zoom-in" data-aos-duration="1000">
          <div className="text-center">
            <img 
              src={require('../assets/images/TeamPic.png')} 
              alt="CredoTech Team" 
              className="w-full rounded-lg shadow-xl" 
            />
          </div>
        </div>

        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="100">
          <p className="text-gray-600 mb-4">Under Incubation Program of</p>
          <div className="mt-4">
            <img 
              src={require('../assets/images/TTBDO.png')} 
              alt="TTBDO Logo" 
              className="h-32 w-auto mx-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 