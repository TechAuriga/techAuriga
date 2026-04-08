import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import FloatingShapes from './FloatingShapes';
import AnimatedGrid from './AnimatedGrid';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setContactForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success('Demo request received! Our team will contact you shortly.');
      setDemoForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        productInterest: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@techauriga.com',
      href: 'mailto:info@techauriga.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Tech Boulevard, Silicon Valley, CA 94025',
      href: '#'
    }
  ];

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
    <section id="contact" ref={sectionRef} className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedGrid opacity={0.025} />
        <FloatingShapes density={13} scrollOffset={2800} />
        
        {/* Layer 1 - Large gradient orbs */}
        <div 
          className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-gradient-to-bl from-[#0066CC]/10 via-[#0066CC]/5 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 2800) * 0.1}px, ${(scrollY - 2800) * 0.12}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute bottom-0 -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#00E5A0]/10 via-[#00E5A0]/5 to-transparent rounded-full blur-3xl"
          style={{ 
            transform: `translate(${(scrollY - 2800) * -0.1}px, ${(scrollY - 2800) * -0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Layer 2 - Medium shapes */}
        <div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#0066CC]/6 rounded-full blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 2800) * -0.12}px, ${(scrollY - 2800) * 0.18}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#00E5A0]/6 rounded-full blur-2xl"
          style={{ 
            transform: `translate(${(scrollY - 2800) * 0.15}px, ${(scrollY - 2800) * -0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Layer 3 - Accent elements */}
        <div 
          className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-r from-[#0066CC]/8 to-transparent rounded-full blur-xl"
          style={{ 
            transform: `translateY(${(scrollY - 2800) * 0.25}px)`,
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00E5A0] bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Ready to transform your business with AI? Contact us today or request a demo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#0066CC] hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#00E5A0] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <a
                            href={info.href}
                            className="text-gray-600 hover:text-[#0066CC] transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}

            {/* Office Hours */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <Card className="border-2 border-gray-200 bg-gradient-to-br from-[#0066CC]/5 to-[#00E5A0]/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact/Demo Forms */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <Card className="border-2 border-gray-200 shadow-xl">
              <CardHeader>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="contact">Contact Us</TabsTrigger>
                    <TabsTrigger value="demo" data-demo-tab>Request Demo</TabsTrigger>
                  </TabsList>

                  {/* Contact Form */}
                  <TabsContent value="contact" className="mt-6">
                    <CardTitle className="text-2xl mb-2">Send us a Message</CardTitle>
                    <CardDescription className="mb-6">
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>

                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Name *</Label>
                          <Input
                            id="contact-name"
                            placeholder="John Doe"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            required
                            className="border-gray-300 focus:border-[#0066CC]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Email *</Label>
                          <Input
                            id="contact-email"
                            type="email"
                            placeholder="john@company.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            required
                            className="border-gray-300 focus:border-[#0066CC]"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="contact-company">Company</Label>
                          <Input
                            id="contact-company"
                            placeholder="Company Name"
                            value={contactForm.company}
                            onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                            className="border-gray-300 focus:border-[#0066CC]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-phone">Phone</Label>
                          <Input
                            id="contact-phone"
                            placeholder="+1 (555) 000-0000"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="border-gray-300 focus:border-[#0066CC]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-subject">Subject *</Label>
                        <Input
                          id="contact-subject"
                          placeholder="How can we help you?"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          required
                          className="border-gray-300 focus:border-[#0066CC]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-message">Message *</Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          required
                          className="border-gray-300 focus:border-[#0066CC] resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || submitted}
                        className="w-full bg-gradient-to-r from-[#0066CC] to-[#00E5A0] hover:opacity-90 text-white font-semibold py-6 text-lg"
                      >
                        {submitted ? (
                          <>
                            <CheckCircle className="mr-2" size={20} />
                            Sent Successfully
                          </>
                        ) : isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2" size={20} />
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Demo Request Form */}
                  <TabsContent value="demo" className="mt-6">
                    <CardTitle className="text-2xl mb-2">Request a Demo</CardTitle>
                    <CardDescription className="mb-6">
                      See our AI solutions in action - schedule a personalized demo
                    </CardDescription>

                    <form onSubmit={handleDemoSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="demo-name">Name *</Label>
                          <Input
                            id="demo-name"
                            placeholder="John Doe"
                            value={demoForm.name}
                            onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                            required
                            className="border-gray-300 focus:border-[#0066CC]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="demo-email">Email *</Label>
                          <Input
                            id="demo-email"
                            type="email"
                            placeholder="john@company.com"
                            value={demoForm.email}
                            onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                            required
                            className="border-gray-300 focus:border-[#0066CC]"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="demo-company">Company *</Label>
                          <Input
                            id="demo-company"
                            placeholder="Company Name"
                            value={demoForm.company}
                            onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                            required
                            className="border-gray-300 focus:border-[#0066CC]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="demo-phone">Phone *</Label>
                          <Input
                            id="demo-phone"
                            placeholder="+1 (555) 000-0000"
                            value={demoForm.phone}
                            onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                            required
                            className="border-gray-300 focus:border-[#0066CC]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="demo-product">Product Interest *</Label>
                        <Input
                          id="demo-product"
                          placeholder="Which product are you interested in?"
                          value={demoForm.productInterest}
                          onChange={(e) => setDemoForm({ ...demoForm, productInterest: e.target.value })}
                          required
                          className="border-gray-300 focus:border-[#0066CC]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="demo-message">Additional Information</Label>
                        <Textarea
                          id="demo-message"
                          placeholder="Tell us about your use case..."
                          rows={5}
                          value={demoForm.message}
                          onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                          className="border-gray-300 focus:border-[#0066CC] resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || submitted}
                        className="w-full bg-gradient-to-r from-[#0066CC] to-[#00E5A0] hover:opacity-90 text-white font-semibold py-6 text-lg"
                      >
                        {submitted ? (
                          <>
                            <CheckCircle className="mr-2" size={20} />
                            Request Sent
                          </>
                        ) : isSubmitting ? (
                          'Submitting...'
                        ) : (
                          <>
                            Request Demo
                            <Send className="ml-2" size={20} />
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
