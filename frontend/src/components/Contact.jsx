import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactData } from '../data/mock';
import FloatingShapes from './FloatingShapes';
import AnimatedGrid from './AnimatedGrid';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedGrid opacity={0.025} />
        <FloatingShapes density={13} scrollOffset={2800} />
        
        {/* Map Background - Stylized */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            transform: `translateY(${(scrollY - 2800) * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            {/* Simplified US Map Outline */}
            <path
              d="M 200 400 L 300 350 L 400 320 L 500 300 L 600 310 L 700 330 L 800 350 L 900 380 L 950 420 L 980 480 L 950 550 L 900 600 L 800 620 L 700 630 L 600 625 L 500 620 L 400 600 L 300 570 L 250 520 L 200 450 Z"
              fill="none"
              stroke="#1E40AF"
              strokeWidth="2"
              opacity="0.3"
            />
            
            {/* Denver Pin */}
            <g transform="translate(500, 380)">
              <circle cx="0" cy="0" r="8" fill="#1E40AF" opacity="0.8" />
              <circle cx="0" cy="0" r="20" fill="none" stroke="#1E40AF" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" from="20" to="35" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="10" y="-15" fill="#1E40AF" fontSize="14" fontWeight="600">Denver</text>
            </g>
            
            {/* Texas Pin */}
            <g transform="translate(550, 520)">
              <circle cx="0" cy="0" r="8" fill="#1E40AF" opacity="0.8" />
              <circle cx="0" cy="0" r="20" fill="none" stroke="#1E40AF" strokeWidth="2" opacity="0.4">
                <animate attributeName="r" from="20" to="35" dur="2s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
              </circle>
              <text x="10" y="-15" fill="#1E40AF" fontSize="14" fontWeight="600">Texas</text>
            </g>
          </svg>
        </div>

        {/* Blue gradient overlays */}
        <div 
          className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-gradient-to-bl from-[#1E40AF]/10 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 2800) * 0.1}px, ${(scrollY - 2800) * 0.12}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute bottom-0 -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#2563EB]/10 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 2800) * -0.1}px, ${(scrollY - 2800) * -0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="text-[#1E40AF] font-semibold text-sm uppercase tracking-wider">
            {contactData.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            <span className="bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
              {contactData.subtitle}
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {contactData.description}
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <Card className="border-2 border-blue-200 hover:border-[#1E40AF] hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-2xl font-semibold text-[#1E40AF] hover:text-[#3B82F6] transition-colors"
                  >
                    {contactData.email}
                  </a>
                  <p className="text-sm text-gray-600 mt-3">We'll respond within 24 hours</p>
                </CardContent>
              </Card>
            </div>

            {/* Phone Card */}
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <Card className="border-2 border-blue-200 hover:border-[#1E40AF] hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-2xl font-semibold text-[#1E40AF] hover:text-[#3B82F6] transition-colors"
                  >
                    {contactData.phone}
                  </a>
                  <p className="text-sm text-gray-600 mt-3">Mon-Fri, 9 AM - 6 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location Cards */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                Our Locations
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {contactData.locations.map((location, index) => (
                <Card
                  key={index}
                  className="border-2 border-blue-100 hover:border-[#1E40AF] hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {location.city}, {location.state}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
