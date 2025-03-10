import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success animation
    setSubmitted(true);
    
    // Reset form and animation after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-8 md:px-16 lg:px-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or want to discuss your specific IT needs? Reach out to us and our team will get back to you promptly.
          </p>
        </div>
        
        <div className="flex flex-wrap">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 lg:pr-8" data-aos="fade-right" data-aos-duration="1000">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-effect p-6 group" data-aos="fade-up" data-aos-delay="100">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Our Location</h5>
                <p className="text-gray-600">University of the Philippines, Cebu Gorordo Ave, Cebu City, 6000 Cebu</p>
              </div>
              
              <div className="glass-effect p-6 group" data-aos="fade-up" data-aos-delay="200">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Call Us</h5>
                <p className="text-gray-600">+63 945 318 9005</p>
              </div>
              
              <div className="glass-effect p-6 group" data-aos="fade-up" data-aos-delay="300">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Email Us</h5>
                <p className="text-gray-600">credocleo28@gmail.com</p>
              </div>
              
              <div className="glass-effect p-6 group" data-aos="fade-up" data-aos-delay="400">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xl" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Working Hours</h5>
                <p className="text-gray-600">Monday - Friday: 9AM to 5PM</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0" data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                <p className="opacity-80">We'd love to hear from you!</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-6">
                    <div className={`relative ${focused === 'name' ? 'focused' : ''}`}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-all focus:border-primary"
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-primary transform scale-x-0 transition-transform origin-left group-focus-within:scale-x-100"></div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 px-2 mb-6">
                    <div className={`relative ${focused === 'email' ? 'focused' : ''}`}>
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-all focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full px-2 mb-6">
                    <div className={`relative ${focused === 'subject' ? 'focused' : ''}`}>
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-all focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full px-2 mb-6">
                    <div className={`relative ${focused === 'message' ? 'focused' : ''}`}>
                      <textarea
                        rows={5}
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-all focus:border-primary resize-none"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full px-2">
                    <button
                      type="submit"
                      className={`w-full btn btn-primary py-3 px-6 rounded-lg flex items-center justify-center ${submitted ? 'submitted' : ''}`}
                      disabled={submitted}
                    >
                      {submitted ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="inline-flex items-center">
                          <span>Send Message</span>
                          <FontAwesomeIcon icon={faPaperPlane} className="ml-2 text-sm" />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 