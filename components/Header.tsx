'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">Greenstar Solar</div>
              <div className="text-xs text-emerald-600 font-medium">Premium Solar Solutions</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#calculator" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              ROI Calculator
            </a>
            <a href="#resources" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Resources
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01234567890"
              className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0123 456 7890</span>
            </a>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-lg transition-colors">
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a
                href="#calculator"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ROI Calculator
              </a>
              <a
                href="#resources"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:01234567890"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span>0123 456 7890</span>
              </a>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                Get Free Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
