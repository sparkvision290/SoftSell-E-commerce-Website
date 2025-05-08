import { useEffect, useState } from 'react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const licenseTypes = [
  'Microsoft Office',
  'Adobe Creative Cloud',
  'AutoCAD',
  'Oracle Database',
  'SAP',
  'VMware',
  'Windows Server',
  'SQL Server',
  'Other'
];

export default function Contact() {
  useEffect(() => {
    // Update document title
    document.title = 'Contact Us | SoftSell';
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <Section
      title="Get a Quote"
      subtitle="Fill out the form below and our team will get back to you within 24 hours"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-dark-700 rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Tell us about your software licenses and we'll provide a free valuation.
            </p>
            
            {isSuccess ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-md p-4 mb-6">
                <p className="font-medium">Thank you for contacting us!</p>
                <p>We've received your inquiry and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-md bg-white dark:bg-dark-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-md bg-white dark:bg-dark-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-md bg-white dark:bg-dark-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      License Type
                    </label>
                    <div className="relative">
                      <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-md bg-white dark:bg-dark-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors appearance-none"
                      >
                        <option value="" disabled>Select license type</option>
                        {licenseTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-500 rounded-md bg-white dark:bg-dark-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="Tell us about your licenses (quantity, age, etc.)"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                  className="h-12"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}