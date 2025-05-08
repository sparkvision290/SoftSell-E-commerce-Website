import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const options = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Laptop },
  ];

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500 focus:outline-none"
        aria-expanded={open ? 'true' : 'false'}
      >
        <span className="sr-only">Toggle theme</span>
        {theme === 'dark' ? (
          <Moon className="h-5 w-5" />
        ) : theme === 'light' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Laptop className="h-5 w-5" />
        )}
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-dark-600 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="theme-toggle-button"
          >
            <div className="py-1" role="none">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setTheme(option.value as 'light' | 'dark' | 'system');
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center px-4 py-2 text-sm",
                    theme === option.value
                      ? "text-primary-500 bg-primary-50 dark:bg-primary-900/20"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-700"
                  )}
                  role="menuitem"
                >
                  <option.icon className="mr-2 h-4 w-4" />
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}