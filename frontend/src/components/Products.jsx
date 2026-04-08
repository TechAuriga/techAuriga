import React, { useEffect, useRef, useState } from 'react';
import { productsData } from '../data/mock';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2, ExternalLink } from 'lucide-react';

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
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-[#0066CC]/10 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateX(${(scrollY - 1500) * -0.1}px)` }}
        />
        <div
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-[#00E5A0]/10 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateX(${(scrollY - 1500) * 0.1}px)` }}
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
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00E5A0] bg-clip-text text-transparent">
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
              <Card className="h-full border-2 border-gray-200 hover:border-[#0066CC] hover:shadow-2xl transition-all duration-300 overflow-hidden group">
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
                    <Badge className="bg-white/90 text-[#0066CC] hover:bg-white font-semibold">
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
                        <CheckCircle2 className="text-[#00E5A0] mt-0.5 mr-3 flex-shrink-0" size={18} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={scrollToDemo}
                    className="w-full bg-gradient-to-r from-[#0066CC] to-[#00E5A0] hover:opacity-90 text-white font-semibold group/btn"
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
          <div className="bg-gradient-to-r from-[#0066CC]/10 via-white to-[#00E5A0]/10 border-2 border-[#0066CC]/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00E5A0] bg-clip-text text-transparent">
                Need a Custom Solution?
              </span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our team can build tailored AI-powered products specifically designed for your unique business requirements
            </p>
            <Button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-gradient-to-r from-[#0066CC] to-[#00E5A0] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
