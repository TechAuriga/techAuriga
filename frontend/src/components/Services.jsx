import React, { useEffect, useRef, useState } from 'react';
import { Brain, Cloud, Database, Lightbulb, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import FloatingShapes from './FloatingShapes';
import AnimatedGrid from './AnimatedGrid';

const iconMap = {
  Brain: Brain,
  Cloud: Cloud,
  Database: Database,
  Lightbulb: Lightbulb
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

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

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedGrid opacity={0.025} />
        <FloatingShapes density={15} scrollOffset={1200} />
        
        {/* Layer 1 - Large gradient orbs */}
        <div
          className="absolute -top-48 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0066CC]/8 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 1200) * 0.1}px, ${(scrollY - 1200) * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute top-1/3 -right-48 w-[400px] h-[400px] bg-gradient-to-bl from-[#00E5A0]/8 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 1200) * -0.1}px, ${(scrollY - 1200) * 0.12}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Layer 2 - Medium shapes */}
        <div
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-[#0066CC]/5 rounded-full blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 1200) * -0.15}px, ${(scrollY - 1200) * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00E5A0]/5 rounded-full blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 1200) * 0.12}px, ${(scrollY - 1200) * -0.18}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Layer 3 - Fast floating particles */}
        <div
          className="absolute top-0 left-1/4 w-3 h-3 bg-[#0066CC]/30 rounded-full shadow-lg shadow-[#0066CC]/20"
          style={{ 
            transform: `translateY(${(scrollY - 1200) * 0.35}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#00E5A0]/30 rounded-full shadow-lg shadow-[#00E5A0]/20"
          style={{ 
            transform: `translate(${(scrollY - 1200) * -0.25}px, ${(scrollY - 1200) * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#0066CC]/30 rounded-full shadow-lg shadow-[#0066CC]/20"
          style={{ 
            transform: `translateY(${(scrollY - 1200) * 0.4}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute top-2/3 left-1/5 w-2 h-2 bg-[#00E5A0]/40 rounded-full shadow-lg shadow-[#00E5A0]/20"
          style={{ 
            transform: `translateY(${(scrollY - 1200) * 0.45}px)`,
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
          <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00E5A0] bg-clip-text text-transparent">
              Cutting-Edge AI Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive AI services designed to transform your business operations and drive innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-[#0066CC] hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#00E5A0] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-[#0066CC] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#0066CC] to-[#00E5A0] rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={scrollToContact}
                      variant="ghost"
                      className="w-full text-[#0066CC] hover:bg-[#0066CC]/10 font-semibold group/btn"
                    >
                      Learn More
                      <ArrowRight
                        className={`ml-2 transition-transform duration-300 ${
                          hoveredCard === service.id ? 'translate-x-2' : ''
                        }`}
                        size={18}
                      />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
