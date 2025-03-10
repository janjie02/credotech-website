import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeNavbar = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'bg-white shadow-xl' : ''}`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="logo-container cursor-pointer"
            data-aos="fade-right" 
            data-aos-duration="800"
          >
            <img 
              src={require('../assets/images/Credotech.png')} 
              alt="Credotech Logo" 
              className="logo-img" 
            />
            <span className={`navbar-brand ${scrolled || isOpen ? 'text-gray-800' : 'text-white'}`}>
              CREDOTECH
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-full ${scrolled || isOpen ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'} transition-all duration-300 focus:outline-none`}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <NavLink to="home" label="Home" delay={100} onClick={closeNavbar} scrolled={scrolled} />
            <NavLink to="about" label="About Us" delay={200} onClick={closeNavbar} scrolled={scrolled} />
            <NavLink to="services" label="Services" delay={300} onClick={closeNavbar} scrolled={scrolled} />
            <NavLink to="team" label="Our Team" delay={400} onClick={closeNavbar} scrolled={scrolled} />
            <NavLink to="contact" label="Contact" delay={500} onClick={closeNavbar} scrolled={scrolled} />
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeNavbar}
              className="btn btn-primary ml-1"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-5 py-2">
            <NavLink to="home" label="Home" delay={100} onClick={closeNavbar} mobile scrolled={true} />
            <NavLink to="about" label="About Us" delay={200} onClick={closeNavbar} mobile scrolled={true} />
            <NavLink to="services" label="Services" delay={300} onClick={closeNavbar} mobile scrolled={true} />
            <NavLink to="team" label="Our Team" delay={400} onClick={closeNavbar} mobile scrolled={true} />
            <NavLink to="contact" label="Contact" delay={500} onClick={closeNavbar} mobile scrolled={true} />
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeNavbar}
              className="btn btn-primary text-center w-full mt-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  delay: number;
  onClick: () => void;
  mobile?: boolean;
  scrolled?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, delay, onClick, mobile, scrolled }) => (
  <Link
    className={`${
      mobile 
        ? 'block text-base font-medium text-gray-600 hover:text-primary py-2 transition-all duration-300' 
        : `nav-link ${scrolled ? 'text-gray-700' : 'text-white'} px-2 mx-0`
    }`}
    activeClass={mobile ? 'text-primary font-semibold' : 'active'}
    to={to}
    spy={true}
    smooth={true}
    offset={-80}
    duration={500}
    onClick={onClick}
    data-aos={mobile ? 'fade-up' : 'fade-down'}
    data-aos-delay={delay}
  >
    {label}
  </Link>
);

export default Navbar; 