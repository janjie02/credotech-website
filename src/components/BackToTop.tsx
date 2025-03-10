import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Link
      to="home"
      className={`fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      spy={true}
      smooth={true}
      duration={500}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
    </Link>
  );
};

export default BackToTop; 