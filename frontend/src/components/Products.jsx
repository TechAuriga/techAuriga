import React, { useEffect, useRef, useState } from 'react';
import { productsData } from '../data/mock';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import AnimatedGrid from './AnimatedGrid';

const Products = () => {
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

  const scrollToDemo = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const demoTab = document.querySelector('[data-demo-tab]');
      if (demoTab) demoTab.click();
    }, 500);
  };

  return (
    <section id="products" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedGrid opacity={0.02} />
        <FloatingShapes density={14} scrollOffset={2000} />
        
        {/* Layer 1 - Large flowing gradients */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#1E40AF]/10 via-[#1E40AF]/5 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 2000) * -0.08}px, ${(scrollY - 2000) * 0.1}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-[#3B82F6]/10 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 2000) * 0.08}px, ${(scrollY - 2000) * 0.12}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#1E40AF]/8 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 2000) * 0.1}px, ${(scrollY - 2000) * -0.15}px)`,
            transition: 'transform 0.1s linear'
          }}
        />

        {/* Layer 2 - Medium geometric shapes */}
        <div
          className="absolute top-1/4 left-1/2 w-48 h-48 bg-[#3B82F6]/6 rounded-full blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 2000) * -0.15}px, ${(scrollY - 2000) * 0.18}px)`,
            transition: 'transform 0.1s linear'
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-[#1E40AF]/6 rotate-45 blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 2000) * 0.12}px, ${(scrollY - 2000) * -0.2}px) rotate(45deg)`,
            transition: 'transform 0.1s linear'
          }}
        />

        {/* Layer 3 - Accent circles */}
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-[#3B82F6]/8 to-transparent rounded-full blur-xl"
          style={{ 
            transform: `translateY(${(scrollY - 2000) * 0.25}px)`,
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
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            <span className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
              AI-Powered Software Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Enterprise-grade products designed to accelerate your digital transformation journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#1E40AF] hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-[#1E40AF] hover:bg-white font-semibold">
                      {product.category}
                    </Badge>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold">{product.title}</h3>
                  </div>
                </div>

                <CardHeader>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="text-[#3B82F6] mt-0.5 mr-3 flex-shrink-0" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToDemo}
                    className="w-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] hover:opacity-90 text-white font-semibold group/btn"
                  >
                    Request Demo
                    <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-gradient-to-r from-[#1E40AF]/10 via-white to-[#3B82F6]/10 border-2 border-[#1E40AF]/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent">
                Need a Custom Solution?
              </span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our team can build tailored AI-powered products specifically designed for your unique business requirements
            </p>
            <Button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
