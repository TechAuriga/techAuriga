import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../data/mock';
import { Target, Award, TrendingUp, Shield } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import AnimatedGrid from './AnimatedGrid';
import { Card, CardContent } from './ui/card';

const iconMap = {
  Target: Target,
  Award: Award,
  TrendingUp: TrendingUp,
  Shield: Shield
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedGrid opacity={0.02} />
        <FloatingShapes density={12} scrollOffset={800} />
        
        {/* Layer 1 - Slow moving circles */}
        <div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 800) * 0.05}px, ${(scrollY - 800) * 0.08}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-tl from-[#3B82F6]/10 to-[#2563EB]/10 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 800) * -0.05}px, ${(scrollY - 800) * -0.08}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
        
        {/* Layer 2 - Medium speed geometric shapes */}
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#1E40AF]/5 rounded-full blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 800) * -0.12}px, ${(scrollY - 800) * 0.15}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#3B82F6]/5 rotate-45 blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 800) * 0.1}px, ${(scrollY - 800) * -0.12}px) rotate(45deg)`,
            transition: 'transform 0.1s linear'
          }}
        />

        {/* Layer 3 - Fast moving accents */}
        <div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-[#2563EB]/10 to-transparent rounded-full blur-xl"
          style={{ 
            transform: `translateY(${(scrollY - 800) * 0.2}px)`,
            transition: 'transform 0.1s linear'
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
            {aboutData.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            <span className="bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
              {aboutData.title}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left - Commitment Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {aboutData.commitments.map((commitment, index) => {
              const Icon = iconMap[commitment.icon];
              return (
                <Card
                  key={index}
                  className={`border-2 border-blue-100 hover:border-[#1E40AF] hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    index >= 2 ? 'sm:col-span-1' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {commitment.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Right - Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {aboutData.description}
              </p>

              <div className="bg-gradient-to-r from-[#1E40AF]/10 to-[#3B82F6]/10 border-l-4 border-[#1E40AF] rounded-r-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  {aboutData.mission}
                </p>
              </div>

              {/* Global Presence */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Global Presence</h4>
                <div className="flex flex-wrap gap-3">
                  {['USA', 'UK', 'Australia', 'India'].map((country, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-[#1E40AF]/10 to-[#3B82F6]/10 border border-[#1E40AF]/30 rounded-lg text-[#1E40AF] font-semibold text-sm"
                    >
                      {country}
                    </div>
                  ))}
                </div>
              </div>

              {/* 24/7 Availability Badge */}
              <div className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-full text-white font-semibold shadow-lg">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                24/7 Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
