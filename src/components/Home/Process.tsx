import Section from '../UI/Section';
import Card from '../UI/Card';
import { motion } from 'framer-motion';
import { Upload, BarChart2, CreditCard } from 'lucide-react';

const steps = [
  {
    title: '1. Upload License',
    description: 'Submit your license details through our secure portal. We support all major software vendors.',
    icon: Upload,
    color: 'from-primary-500 to-teal-600',
  },
  {
    title: '2. Get Valuation',
    description: 'Our experts analyze your license and provide a competitive market valuation within 24 hours.',
    icon: BarChart2,
    color: 'from-primary-500 to-teal-600',
  },
  {
    title: '3. Get Paid',
    description: 'Accept our offer and receive payment via your preferred method within 3 business days.',
    icon: CreditCard,
    color: 'from-primary-500 to-teal-600',
  },
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section
      title="How It Works"
      subtitle="Our simple three-step process makes selling your software licenses quick and easy"
      className="bg-gray-50 dark:bg-dark-700"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step) => (
          <motion.div key={step.title} variants={itemVariants}>
            <Card hoverable className="h-full flex flex-col items-center text-center">
              <Card.Body className="flex flex-col items-center">
                <div className={`p-4 rounded-full bg-gradient-to-r ${step.color} mb-6`}>
                  <step.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}