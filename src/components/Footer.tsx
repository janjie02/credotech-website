import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!email || !email.includes('@')) {
      setValidated(true);
      return;
    }
    
    setValidated(true);
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setEmail('');
    
    setTimeout(() => {
      setSubscribed(false);
      setValidated(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: faFacebookF, url: 'https://www.facebook.com/profile.php?id=61573147746145' },
    { icon: faTwitter, url: 'https://x.com' },
    { icon: faLinkedinIn, url: 'https://linkedin.com' },
    { icon: faInstagram, url: 'https://www.instagram.com/credotech_official/' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-24 relative">
      <div className="absolute inset-0 bg-pattern-dots-footer opacity-10 z-0"></div>
      
      {/* Floating shapes for visual interest */}
      <div className="floating-shape shape-1" style={{ top: '30%', left: '5%', width: '15rem', height: '15rem', opacity: '0.03' }}></div>
      <div className="floating-shape shape-2" style={{ bottom: '20%', right: '5%', width: '20rem', height: '20rem', opacity: '0.03' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* About Section - Spans 4 columns on large screens */}
          <div className="lg:col-span-4">
            <h5 className="text-xl font-semibold mb-8 pb-4 inline-block relative">
              About CredoTech
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></span>
            </h5>
            <p className="text-gray-400 mb-8 leading-relaxed">
              CredoTech is a leading provider of IT solutions and services, dedicated to helping businesses harness the power of technology for growth and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:rotate-6"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h5 className="text-xl font-semibold mb-8 pb-4 inline-block relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></span>
            </h5>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Our Team', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase().replace(' ', '')}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 rounded-full transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h5 className="text-xl font-semibold mb-8 pb-4 inline-block relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></span>
            </h5>
            <ul className="space-y-4">
              {['Bodego', 'Custom Software'].map((service, index) => (
                <li key={index}>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 rounded-full transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Spans 4 columns on large screens */}
          <div className="lg:col-span-4">
            <h5 className="text-xl font-semibold mb-8 pb-4 inline-block relative">
              Subscribe to Our Newsletter
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></span>
            </h5>
            <p className="text-gray-400 mb-8">Stay updated with our latest news and offers.</p>
            
            {subscribed ? (
              <div className="text-primary mt-4 p-6 bg-primary/10 rounded-lg backdrop-blur-sm">
                <p className="font-medium">Thank you for subscribing!</p>
                <p className="text-sm mt-2">We'll keep you updated with our latest news.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pr-14"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
                {validated && !email && (
                  <p className="text-red-500 text-sm">Please provide a valid email.</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-400">&copy; 2025 CredoTech. All Rights Reserved.</p>
            <div className="flex flex-col items-center space-y-3">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 