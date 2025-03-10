import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import TrustedPartnersSection from './components/TrustedPartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    // Handle navbar scroll behavior
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar && window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
      } else if (navbar) {
        navbar.classList.remove('bg-white', 'shadow-md');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <TrustedPartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App; 