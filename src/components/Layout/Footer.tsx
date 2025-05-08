import { Link } from 'react-router-dom';
import { CheckSquare, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-dark-700 pt-12 pb-6 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <CheckSquare className="h-6 w-6 text-primary-500" />
              <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">SoftSell</span>
            </div>
            <p className="mt-3 max-w-md">
              The leading marketplace for buying and selling software licenses.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="hover:text-primary-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="hover:text-primary-500 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-primary-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="not-italic">
              <p>123 Software Plaza</p>
              <p>Tech City, TC 10101</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary-500" />
                  <a href="mailto:info@softsell.com" className="hover:text-primary-500 transition-colors">
                    info@softsell.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-primary-500" />
                  <a href="tel:+1-123-456-7890" className="hover:text-primary-500 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-dark-600 mt-8 pt-6 text-sm text-center">
          <p>© {currentYear} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}