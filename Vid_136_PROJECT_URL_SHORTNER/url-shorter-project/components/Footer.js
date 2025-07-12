
import React from 'react';
import { Link, Github, Twitter, Linkedin, Mail, ExternalLink, Zap, Shield, BarChart3 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-6 py-12 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">SHORTY URL</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The smarter way to manage your links. Shorten, share, and track your URLs with powerful analytics.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <Zap className="w-4 h-4 mr-2 group-hover:text-blue-400" />
                  URL Shortener
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <BarChart3 className="w-4 h-4 mr-2 group-hover:text-blue-400" />
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:text-blue-400" />
                  Custom Domains
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <Shield className="w-4 h-4 mr-2 group-hover:text-blue-400" />
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Status Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Shorty URL. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>      
    </footer>
  );
};

export default Footer;
