import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { CheckSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column with text */}
          <motion.div 
            className="flex-1 text-center lg:text-left mb-10 lg:mb-0 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Unlock the Value of Your Software Licenses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Turn unused or legacy software licenses into cash. Fast, secure, and hassle-free valuation and selling process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Sell My Licenses
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right column with illustration */}
          <motion.div 
            className="flex-1 lg:ml-10 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-white dark:bg-dark-600 p-8 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <CheckSquare className="h-8 w-8 text-primary-500" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-100 dark:bg-dark-500 rounded-md w-full"></div>
                <div className="h-8 bg-gray-100 dark:bg-dark-500 rounded-md w-3/4"></div>
                <div className="h-8 bg-gray-100 dark:bg-dark-500 rounded-md w-5/6"></div>
                <div className="h-8 bg-gray-100 dark:bg-dark-500 rounded-md w-4/5"></div>
              </div>
              <div className="mt-8 flex justify-end">
                <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center">
                  <CheckSquare className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/3 h-1/2 bg-primary-50 dark:bg-primary-900/5 rounded-l-full blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 bg-primary-50 dark:bg-primary-900/5 rounded-full blur-3xl -z-10 opacity-50"></div>
    </section>
  );
}