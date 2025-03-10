import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCogs, faHeadset, faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface FeatureItemProps {
  icon: any;
  title: string;
  description: string;
  delay: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, delay }) => (
  <div className="w-full md:w-1/2" data-aos="zoom-in" data-aos-delay={delay}>
    <div className="p-6 hover:bg-white hover:shadow-lg rounded-lg transition-all duration-300">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        <FontAwesomeIcon icon={icon} className="text-3xl" />
      </div>
      <h5 className="text-xl font-semibold mb-3">{title}</h5>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
            <div className="relative h-[450px] flex justify-center items-center">
              {/* Decorative circles */}
              <div className="absolute top-[20%] left-[15%] w-20 h-20 rounded-full bg-primary/30 z-10 transition-all duration-500 hover:scale-110 hover:bg-primary/50" />
              <div className="absolute top-[10%] left-[30%] w-10 h-10 rounded-full bg-primary/20 z-10 transition-all duration-500 hover:scale-120 hover:bg-primary/40" />
              <div className="absolute bottom-[15%] left-[10%] w-16 h-16 rounded-full bg-primary/25 z-10 transition-all duration-500 hover:scale-115 hover:bg-primary/45" />
              <div className="absolute top-[60%] right-[15%] w-[70px] h-[70px] rounded-full bg-primary/30 z-10 transition-all duration-500 hover:scale-110 hover:bg-primary/50" />
              <div className="absolute top-[20%] right-[20%] w-8 h-8 rounded-full bg-primary/15 z-10 transition-all duration-500 hover:scale-120 hover:bg-primary/35" />
              
              {/* Main illustration */}
              <div className="relative w-4/5 max-w-[400px] z-20 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Monitor frame */}
                <div className="p-3">
                  {/* Header bar */}
                  <div className="bg-primary rounded-t-lg h-10 flex items-center px-4">
                    {/* Browser dots */}
                    <div className="w-3 h-3 rounded-full bg-white mr-2" />
                    <div className="w-3 h-3 rounded-full bg-white mr-2" />
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  
                  {/* Content area */}
                  <div className="bg-gray-100 p-5 flex justify-around">
                    {/* Profile 1 */}
                    <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-full bg-gray-800 mb-3" />
                      <div className="w-10 h-10 bg-gray-800" />
                      <div className="w-full h-1 bg-primary mt-3" />
                    </div>
                    
                    {/* Profile 2 */}
                    <div className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-full bg-gray-800 mb-3" />
                      <div className="w-10 h-10 bg-gray-800" />
                      <div className="w-full h-1 bg-primary mt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0" data-aos="fade-left" data-aos-duration="1000">
            <div className="lg:pl-12">
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-primary">CredoTech</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At CredoTech, we're passionate about transforming businesses through innovative technology solutions. Our team of experts combines creativity with technical excellence to deliver exceptional results.
              </p>
              
              <div className="flex flex-wrap -mx-4">
                <FeatureItem
                  icon={faUsers}
                  title="Expert Team"
                  description="Our skilled professionals bring years of experience and expertise to every project."
                  delay={100}
                />
                <FeatureItem
                  icon={faCogs}
                  title="Custom Solutions"
                  description="We develop tailored solutions that perfectly match your business needs."
                  delay={200}
                />
                <FeatureItem
                  icon={faHeadset}
                  title="24/7 Support"
                  description="Round-the-clock technical support to ensure your operations run smoothly."
                  delay={300}
                />
                <FeatureItem
                  icon={faLightbulb}
                  title="Innovation"
                  description="Staying ahead with the latest technologies and innovative approaches."
                  delay={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 