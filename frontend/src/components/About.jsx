import React, { useEffect, useRef, useState } from 'react';
import { aboutData } from '../data/mock';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import AnimatedGrid from './AnimatedGrid';

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

  const statIcons = [Users, Target, Award, TrendingUp];

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
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-tl from-[#3B82F6]/10 to-[#2563EB]/10 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 800) * -0.05}px, ${(scrollY - 800) * -0.08}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Layer 2 - Medium speed geometric shapes */}
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#1E40AF]/5 rounded-full blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 800) * -0.12}px, ${(scrollY - 800) * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#3B82F6]/5 rotate-45 blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 800) * 0.1}px, ${(scrollY - 800) * -0.12}px) rotate(45deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Layer 3 - Fast moving accents */}
        <div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-[#2563EB]/10 to-transparent rounded-full blur-xl"
          style={{ 
            transform: `translateY(${(scrollY - 800) * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutData.image}
                alt="techAuriga Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066CC]/30 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                  200+
                </div>
                <div className="text-sm text-gray-600 mt-1">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div>
              <span className="text-[#1E40AF] font-semibold text-sm uppercase tracking-wider">
                {aboutData.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                <span className="bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
                  {aboutData.title}
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutData.description}
            </p>

            <div className="bg-gradient-to-r from-[#1E40AF]/10 to-[#3B82F6]/10 border-l-4 border-[#1E40AF] rounded-r-xl p-6">
              <p className="text-gray-700 italic leading-relaxed">
                {aboutData.mission}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {aboutData.stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#0066CC]/30 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="text-[#0066CC] mb-3" size={28} />
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#0066CC] to-[#00E5A0] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
