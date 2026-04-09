import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import ParticleBackground from './ParticleBackground';
import { heroData } from '../data/mock';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const demoTab = document.querySelector('[data-demo-tab]');
      if (demoTab) demoTab.click();
    }, 500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Multi-Layer Parallax Background */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1 - Base gradient (slowest) */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/10 via-white to-[#3B82F6]/10" />
          <img
            src={heroData.backgroundAlt}
            alt="AI Technology"
            className="absolute inset-0 w-full h-full object-cover opacity-5"
          />
        </div>

        {/* Layer 2 - Large floating orbs (medium speed) */}
        <div
          className="absolute -top-64 -left-64 w-[800px] h-[800px] bg-gradient-to-br from-[#1E40AF]/15 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.2}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        />
        <div
          className="absolute top-1/3 -right-64 w-[700px] h-[700px] bg-gradient-to-bl from-[#3B82F6]/15 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * -0.15}px, ${scrollY * 0.25}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-[#2563EB]/10 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.3}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        />

        {/* Layer 3 - Medium geometric shapes (faster) */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/8 rounded-full blur-2xl"
          style={{
            transform: `translate(${scrollY * -0.25}px, ${scrollY * 0.35}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1E40AF]/8 rotate-45 blur-2xl"
          style={{
            transform: `translate(${scrollY * 0.2}px, ${scrollY * -0.4}px) rotate(45deg)`,
            transition: 'transform 0.05s ease-out'
          }}
        />

        {/* Layer 4 - Fast accent circles */}
        <div
          className="absolute top-1/5 right-1/3 w-48 h-48 bg-gradient-to-r from-[#3B82F6]/10 to-transparent rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        />
        <div
          className="absolute top-2/3 left-1/5 w-56 h-56 bg-gradient-to-l from-[#2563EB]/10 to-transparent rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * 0.45}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        />
      </div>

      {/* Particle Effect */}
      <ParticleBackground color="#1E40AF" density={60} />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-8"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#1E40AF]/10 to-[#3B82F6]/10 border border-[#1E40AF]/20 text-[#1E40AF] text-sm font-semibold">
                🚀 AI-Powered Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
                {heroData.title}
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {heroData.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToDemo}
                size="lg"
                className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                {heroData.cta1}
                <Play className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>

              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                {heroData.cta2}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-sm text-gray-600 mt-1">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-sm text-gray-600 mt-1">AI Models</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Image */}
          <div
            className="relative hidden lg:block"
            style={{
              transform: `translateY(${scrollY * -0.3}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-[#0066CC]/20 to-[#00E5A0]/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#00E5A0]/20 to-[#0066CC]/20 rounded-full blur-3xl animate-pulse delay-1000" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src={heroData.heroImage}
                  alt="AI Innovation"
                  className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0066CC]/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AI</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">AI-Powered</div>
                    <div className="text-xs text-gray-600">Next-Gen Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1E40AF] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#1E40AF] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
