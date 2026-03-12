import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">Greenstar Solar</div>
                <div className="text-xs text-emerald-400">Premium Solar Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading the UK's renewable energy revolution with premium solar installations since 2015.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Knowledge Hub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Solar Panel Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Battery Storage Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Maintenance & Repairs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  EV Charger Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Commercial Solar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:01234567890" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>0123 456 7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@greenstarsolar.co.uk" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@greenstarsolar.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Green Street<br />London, UK<br />SW1A 1AA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center items-center text-gray-500 text-xs">
            <div className="bg-gray-800 px-4 py-2 rounded">MCS Certified</div>
            <div className="bg-gray-800 px-4 py-2 rounded">NICEIC Approved</div>
            <div className="bg-gray-800 px-4 py-2 rounded">RECC Member</div>
            <div className="bg-gray-800 px-4 py-2 rounded">TrustMark Registered</div>
            <div className="bg-gray-800 px-4 py-2 rounded">ISO 9001</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2026 Greenstar Solar UK. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-xs text-gray-500">
            Powered by{' '}
            <a href="https://coldlava.ai" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Cold Lava AI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
