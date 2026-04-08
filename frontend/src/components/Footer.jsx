import React from 'react';
import { Linkedin, Twitter, Github, Youtube, Mail } from 'lucide-react';
import { footerData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
    youtube: Youtube
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_97cd66e9-80d9-498f-b6f5-063f23992ae8/artifacts/1fpvaz3z_1000181263.png"
                alt="TechAuriga Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0066CC] to-[#00E5A0] bg-clip-text text-transparent">
                {footerData.company.name}
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {footerData.company.description}
            </p>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <Mail className="mr-2 mt-0.5 flex-shrink-0 text-[#0066CC]" size={16} />
                <a href={`mailto:${footerData.company.email}`} className="hover:text-[#0066CC] transition-colors">
                  {footerData.company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerData.links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#0066CC] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              {footerData.links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#0066CC] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerData.links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#0066CC] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} {footerData.company.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {Object.entries(footerData.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-[#0066CC] hover:to-[#00E5A0] hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#privacy" className="hover:text-[#0066CC] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-[#0066CC] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
