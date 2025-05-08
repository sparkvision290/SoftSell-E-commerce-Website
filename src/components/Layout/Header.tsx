import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import { Menu, X, CheckSquare, Sun, Moon, Laptop } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={cn(
      "sticky top-0 z-30 transition-all duration-300",
      scrolled ? "bg-white dark:bg-dark-700 shadow-md backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <CheckSquare className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">SoftSell</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-500",
                  location.pathname === link.path 
                    ? "text-primary-500" 
                    : "text-gray-700 dark:text-gray-200"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <Link
              to="/contact"
              className="hidden md:inline-flex h-10 px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors"
            >
              Get Started
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-dark-700 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block py-3 px-4 rounded-md text-base font-medium transition-colors",
                location.pathname === link.path
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary-500"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/contact"
            className="block w-full mt-4 px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium text-center transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}