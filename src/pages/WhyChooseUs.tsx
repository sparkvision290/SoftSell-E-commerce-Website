import { useEffect } from 'react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, Award, Users, Globe, Lightbulb, Bookmark } from 'lucide-react';

export default function WhyChooseUs() {
  useEffect(() => {
    // Update document title
    document.title = 'Why Choose Us | SoftSell';
  }, []);

  const benefits = [
    {
      title: 'Secure Transactions',
      description: 'End-to-end encryption and secure payment processing for every transaction. Your data and payment details are always protected.',
      icon: Shield,
    },
    {
      title: 'Fast Processing',
      description: 'Quick valuations and speedy payments with our streamlined process. Get paid within days, not weeks.',
      icon: Clock,
    },
    {
      title: 'Competitive Rates',
      description: 'Get the best value for your licenses with our fair market valuation based on real-time market data.',
      icon: DollarSign,
    },
    {
      title: 'Trusted Expertise',
      description: 'Over 10 years of experience in the software license marketplace with thousands of successful transactions.',
      icon: Award,
    },
    {
      title: 'Global Network',
      description: 'Access to a worldwide network of buyers looking for software licenses across all major categories.',
      icon: Globe,
    },
    {
      title: 'Dedicated Support',
      description: 'Personalized customer service from our expert team to guide you through every step of the process.',
      icon: Users,
    },
    {
      title: 'Transparent Process',
      description: 'Clear, straightforward process with no hidden fees or surprise deductions from your payment.',
      icon: Lightbulb,
    },
    {
      title: 'Compliance Guaranteed',
      description: 'All transactions comply with software vendors\' license transfer policies and applicable regulations.',
      icon: Bookmark,
    },
  ];

  return (
    <>
      <Section
        title="Why Choose Us"
        subtitle="SoftSell offers unmatched benefits when selling your software licenses"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.slice(0, 4).map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full">
                <Card.Body>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mr-4">
                      <benefit.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Additional Benefits"
        className="bg-gray-50 dark:bg-dark-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.slice(4, 8).map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full">
                <Card.Body>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mr-4">
                      <benefit.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Section title="Our Commitment">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            At SoftSell, we're committed to providing the most valuable, efficient, and secure platform for selling software licenses. Our team of experts works tirelessly to ensure you get the best possible value for your licenses with minimal effort on your part.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We believe in building long-term relationships with our clients through trust, transparency, and exceptional service. That's why thousands of businesses and individuals choose SoftSell as their preferred partner for software license transactions.
          </p>
        </motion.div>
      </Section>
    </>
  );
}