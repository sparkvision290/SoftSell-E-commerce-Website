import Section from '../UI/Section';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, Award } from 'lucide-react';

const benefits = [
  {
    title: 'Secure Transactions',
    description: 'End-to-end encryption and secure payment processing for every transaction.',
    icon: Shield,
  },
  {
    title: 'Fast Processing',
    description: 'Quick valuations and speedy payments with our streamlined process.',
    icon: Clock,
  },
  {
    title: 'Competitive Rates',
    description: 'Get the best value for your licenses with our fair market valuation.',
    icon: DollarSign,
  },
  {
    title: 'Trusted Expertise',
    description: 'Over 10 years of experience in the software license marketplace.',
    icon: Award,
  },
];

export default function Benefits() {
  return (
    <Section
      title="Why Choose Us"
      subtitle="SoftSell offers unmatched benefits when selling your software licenses"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6 h-full bg-white dark:bg-dark-700 rounded-lg border border-gray-200 dark:border-dark-600 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}